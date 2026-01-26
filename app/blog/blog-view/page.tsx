"use client";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState, Suspense } from "react";
import { ArrowLeft, BookOpen, GamepadDirectional } from "lucide-react";
import { usePageSEO } from "@/app/hooks/usePageTitles";
import { ToastProvider, useToast } from "@/app/portal/components/Toast";
import { API_ENDPOINTS } from "@/lib/api-config";

interface BlogSection {
  id: string;
  title: string;
  content: string[];
  list?: string[];
}

interface BlogPost {
  id: number;
  title: string;
  category: string;
  readTime: string;
  author: string;
  date: string;
  image: string;
  summary: string[];
  sections: BlogSection[];
}

/* BLOG DATA */
// Blog data removed in favor of dynamic fetch


function BlogViewContent() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const { showToast } = useToast();
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [activeHeading, setActiveHeading] = useState("");
  const [relatedPosts, setRelatedPosts] = useState<any[]>([]);

  /* Robust slugify that handles special chars and whitespace */
  const createSlug = (text: string) => {
    return text
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  };

  const normalizeText = (text: string) => {
    return text.replace(/\s+/g, ' ').trim();
  };

  // Helper to check if an element qualifies as a heading (Consistent with Admin)
  const isHeading = (el: Element): boolean => {
    const tag = el.tagName.toLowerCase();
    if (tag === 'h2' || tag === 'h3') return true;

    const style = el.getAttribute('style');
    if (style && style.includes('font-size')) {
      const match = style.match(/font-size\s*:\s*(\d+(\.\d+)?)(px|pt)/i);
      if (match) {
        let size = parseFloat(match[1]);
        const unit = match[3].toLowerCase();
        // Convert pt to px (approx 1pt = 1.33px)
        if (unit === 'pt') size = size * 1.333;
        if (size >= 24) return true;
      }
    }
    return false;
  };

  const getHeadingsFromDoc = (parent: Document | Element) => {
    // Broad selection to catch styled spans/divs/paragraphs from Jodit
    const candidates = parent.querySelectorAll('h2, h3, p, div, span, strong, b');
    return Array.from(candidates).filter(isHeading);
  };

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await fetch(API_ENDPOINTS.BLOGS);
        const data = await res.json();

        // Derive identifier (Slug or ID) from URL
        // URL format is /blog-view?slug-text (key is the slug, value is empty)
        let identifier = id;
        if (!identifier) {
          const keys = Array.from(searchParams.keys());
          if (keys.length > 0) identifier = keys[0];
        }

        if (Array.isArray(data)) {
          // Try finding by ID first, then slug
          const found = data.find((b: any) => b._id === identifier || b.id == identifier || b.slug === identifier);
          setPost(found);
          if (found) {
            setRelatedPosts(data.filter((b: any) => b.categoryId?._id === found.categoryId?._id && b._id !== found._id).slice(0, 3));
          }
        }
      } catch (err) {
        console.error("Failed to fetch blog post");
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, [id, searchParams]);

  useEffect(() => {
    if (!post?.content) return;

    const handleScroll = () => {
      const contentDiv = document.querySelector('.prose');
      if (!contentDiv) return;

      const headings = getHeadingsFromDoc(contentDiv);
      let current = "";

      headings.forEach((el: any) => {
        const rect = el.getBoundingClientRect();
        // Strict active check: if it's nearing the top (readable area)
        if (rect.top < 150) {
          current = normalizeText(el.innerText || "");
        }
      });

      setActiveHeading(current);
    };

    // Use MutationObserver to wait for content to be painted
    const observer = new MutationObserver(() => {
      const contentDiv = document.querySelector('.prose');
      if (contentDiv) {
        const headings = getHeadingsFromDoc(contentDiv);

        // Assign IDs only if missing
        headings.forEach((el: any) => {
          const text = normalizeText(el.innerText || "");
          const slug = createSlug(text);
          if (slug && !el.id) {
            el.id = slug;
            (el as HTMLElement).style.scrollMarginTop = '120px';
          }
        });

        // Run once
        handleScroll();
      }
    });

    // Start observing DOM
    const mainContainer = document.querySelector('main');
    if (mainContainer) {
      observer.observe(mainContainer, { childList: true, subtree: true });
    } else {
      setTimeout(handleScroll, 500);
    }

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [post]);

  const seoTitle = post ? (post.seoTitle || post.title) : "Blog Post";
  const seoDescription = post ? (post.seoDescription || "Read the latest insights from Avenstek Solutions.") : "Read the latest insights from Avenstek Solutions.";
  const seoKeywords = post ? post.seoKeywords : "";

  usePageSEO(seoTitle, seoDescription, seoKeywords);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-[var(--color-20)]">
        Loading...
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center text-[var(--color-20)]">
        Blog not found
      </div>
    );
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Founder Insights": return "text-[var(--color-9)]";
      case "Sales Playbook": return "text-[var(--color-9)]";
      case "AI & Workflow": return "text-[var(--color-9)]";
      case "Engineering": return "text-[var(--color-9)]";
      default: return "text-[var(--color-9)]";
    }
  };

  return (
    <main className="bg-[var(--color-2)]">
      {/* SECTION 1 */}
      <section className="pt-25 pb-32 lg:px-22">
        <div className="max-w-6xl mx-auto px-6 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-15 items-center">
            <div>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 px-4 py-2 mb-5 rounded-full border border-[var(--color-26)] bg-[var(--color-25)] text-m font-medium text-[var(--color-18)] hover:bg-[var(--color-13)] hover:text-[var(--color-15)] transition-all duration-200"
              >
                <span className="flex items-center justify-center h-6 w-6 rounded-full">
                  <ArrowLeft size={14} />
                </span>
                All posts
              </Link>

              <div className="flex items-center gap-3 mb-4">
                <span className="text-m font-medium text-[var(--color-9)]">
                  {post.category}
                </span>
                <span className="text-[var(--color-20)]">•</span>
                <span className="text-sm text-[var(--color-20)]">
                  {post.readTime}
                </span>
              </div>

              <h1 className="text-3xl md:text-8xl xl:text-6xl font-medium text-[var(--color-15)] leading-tight mb-10 mt-10">
                {post.title}
              </h1>

              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-full overflow-hidden relative">
                  {post.authorId?.photo ? (
                    <img src={post.authorId.photo} alt={post.authorId.name} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full bg-gray-300" />
                  )}
                </div>

                <div className="flex items-center gap-2 text-sm">
                  <span className="font-medium text-[var(--color-17)]">
                    {post.authorId?.name || "Avenstek Team"}
                  </span>
                  <span className="text-[var(--color-20)]">•</span>
                  <span className="text-[var(--color-20)]">
                    {new Date(post.publishedAt || post.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </span>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative h-[280px] md:h-[320px] lg:h-[460px] mt-10"
            >
              <div className="h-full w-full rounded-2xl border border-[var(--color-21)] p-[2px]">
                <div className="h-full w-full rounded-xl bg-[var(--color-2)] p-[6px]">
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="relative h-full w-full overflow-hidden rounded-lg"
                  >
                    {post.thumbnail ? (
                      <img src={post.thumbnail} alt={post.title} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500">No Image</div>
                    )}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2 */}
      <section className="pb-32 bg-[var(--color-25)] pt-15">
        <div className="max-w-6xl mx-auto px-6 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-16">
            <div>
              <div className="prose prose-lg dark:prose-invert max-w-none text-[var(--color-20)] space-y-4" dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>

            {/* SCROLLSPY / SIDEBAR */}
            <aside className="hidden lg:block relative">
              <div className="sticky top-32">
                {post.scrollSpyHeadings && post.scrollSpyHeadings.length > 0 && (
                  <>
                    <h4 className="text-sm font-medium text-[var(--color-15)] mb-6">
                      Jump to
                    </h4>
                    <ul className="space-y-1">
                      {post.scrollSpyHeadings.map((heading: string, index: number) => (
                        <li key={index}>
                          <a
                            href={`#${createSlug(heading)}`}
                            onClick={(e) => {
                              e.preventDefault();
                              const slug = createSlug(heading);
                              const el = document.getElementById(slug);
                              if (el) {
                                el.scrollIntoView({ behavior: 'smooth' });
                                window.history.pushState(null, '', `#${slug}`);
                              }
                            }}
                            className={`block text-sm py-1 pl-2 border-l-2 transition-all duration-200 cursor-pointer ${normalizeText(activeHeading) === normalizeText(heading)
                              ? "border-[var(--color-9)] text-[var(--color-9)] font-medium"
                              : "border-transparent text-[var(--color-20)] hover:border-[var(--color-9)] hover:text-[var(--color-9)]"
                              }`}
                          >
                            {heading}
                          </a>
                        </li>
                      ))}
                    </ul>
                    <div className="border-b border-[var(--color-21)] mt-4"></div>
                  </>
                )}

                <div className="flex flex-col mt-7 gap-3">
                  <span className="text-m font-medium text-[var(--color-15)] tracking-wide">
                    Share Article
                  </span>

                  {/* Reuse social icons but keep simple structure */}
                  <div className="flex items-center gap-4">
                    {/* WhatsApp */}
                    <a
                      href={`https://wa.me/?text=${encodeURIComponent(post.title + " " + (typeof window !== 'undefined' ? window.location.href : ""))}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--color-20)] hover:text-[var(--color-9)] transition-colors"
                      title="Share on WhatsApp"
                    >
                      <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"></path></svg>
                    </a>

                    {/* Facebook */}
                    <a
                      href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--color-20)] hover:text-[var(--color-9)] transition-colors"
                      title="Share on Facebook"
                    >
                      <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                    </a>

                    {/* X (Twitter) */}
                    <a
                      href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--color-20)] hover:text-[var(--color-9)] transition-colors"
                      title="Share on X"
                    >
                      <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.429l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" /></svg>
                    </a>

                    {/* Instagram (Visual only as web share API is limited) */}
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--color-20)] hover:text-[var(--color-9)] transition-colors"
                      title="Instagram"
                    >
                      <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                    </a>

                    {/* Copy Link */}
                    <button
                      onClick={() => {
                        if (typeof window !== 'undefined') {
                          navigator.clipboard.writeText(window.location.href);
                          showToast('success', 'Link Copied', 'Blog post link copied to clipboard!');
                        }
                      }}
                      className="text-[var(--color-20)] hover:text-[var(--color-9)] transition-colors"
                      title="Copy Link"
                    >
                       <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
                    </button>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* SECTION 3 - Related Posts */}
      <section className="py-32 bg-[var(--color-2)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-center">
            <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-[var(--color-13)] text-[var(--color-9)] text-[14.5px] font-medium tracking-wide mb-6">
              <BookOpen size={16} />
              Related Reads
            </div>
          </div>

          <h2 className="text-center text-4xl md:text-5xl font-medium text-[var(--color-15)] mb-6">
            More in{" "}
            <span className="text-[var(--color-20)]">
              {post.category?.name || post.category || "General"}
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-12">
            {relatedPosts.map((relatedPost, index) => (
              <motion.div
                key={relatedPost._id || relatedPost.id || index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={`/blog/blog-view?id=${relatedPost._id || relatedPost.id}`}
                  className="block h-full"
                >
                  <div className="group cursor-pointer h-full rounded-2xl hover:shadow-xl transition-all duration-300 bg-[var(--color-2)] hover:bg-[var(--color-25)] flex flex-col">
                    {/* Image */}
                    <div className="relative h-48 md:h-56 overflow-hidden rounded-lg p-[1px] bg-[var(--color-gray-300)]">
                      <div className="relative h-full w-full overflow-hidden rounded-lg">
                        {relatedPost.thumbnail ? (
                          <img src={relatedPost.thumbnail} alt={relatedPost.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        ) : (
                          <div className="w-full h-full bg-gray-200" />
                        )}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex items-center gap-3 mb-3">
                        <span className={`py-1 font-medium text-[var(--color-9)]`}>
                          {relatedPost.category?.name || relatedPost.category || "Blog"}
                        </span>
                        <span className="text-[var(--color-20)]">•</span>
                        <span className="text-sm text-[var(--color-20)] font-medium">
                          {relatedPost.readTime || "5 min read"}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-[var(--color-15)] mb-3 group-hover:text-[var(--color-17)] transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h3>

                      <div className="flex items-center gap-3 pt-4 mt-auto">
                        <div className="h-8 w-8 rounded-full overflow-hidden flex-shrink-0 relative">
                          {relatedPost.authorId?.photo ? (
                            <img src={relatedPost.authorId.photo} alt={relatedPost.authorId.name} className="w-full h-full object-cover" />
                          ) : (
                            <div className="w-full h-full bg-gray-300" />
                          )}
                        </div>

                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium text-[var(--color-18)] whitespace-nowrap">
                            {relatedPost.authorId?.name || "Avenstek Team"}
                          </span>
                          <span className="text-[var(--color-20)]">•</span>
                          <span className="text-xs text-[var(--color-20)] whitespace-nowrap">
                            {new Date(relatedPost.publishedAt || relatedPost.createdAt).toLocaleDateString()}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default function BlogViewPage() {
  return (
    <ToastProvider>
      <Suspense fallback={<div>Loading...</div>}>
        <BlogViewContent />
      </Suspense>
    </ToastProvider>
  );
}