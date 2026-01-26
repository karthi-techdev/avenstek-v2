"use client"
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import { usePageSEO } from "../hooks/usePageTitles";
import { API_ENDPOINTS } from "@/lib/api-config";
import { MdGroups, MdOutlineLibraryBooks } from "react-icons/md";

interface BlogPost {
  id: number;
  title: string;
  category: string;
  readTime: string;
  author: string;
  date: string;
  image: string;
  color: string;
}

export default function BlogPage() {
  usePageSEO(
    "Blog",
    "Stay updated with Avenstek's latest articles on AI, mobile app development, and enterprise IT strategy. Expert insights to help your business navigate the 2026 digital landscape."
  );
  const [activeFilter, setActiveFilter] = useState("All posts");
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [posts, setPosts] = useState<any[]>([]);
  const [categories, setCategories] = useState<string[]>(["All posts"]);
  const [loading, setLoading] = useState(true);

  // Fetch data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [postsRes, catsRes] = await Promise.all([
          fetch(API_ENDPOINTS.BLOGS),
          fetch(API_ENDPOINTS.CATEGORIES)
        ]);

        const postsData = await postsRes.json();
        const catsData = await catsRes.json();

        if (Array.isArray(postsData)) {
          setPosts(postsData.filter((p: any) => p.status === true));
        }

        if (Array.isArray(catsData)) {
          setCategories(["All posts", ...catsData.map((c: any) => c.name)]);
        }

      } catch (err) {
        console.error("Failed to fetch blog data", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const filteredPosts = posts.filter(post => {
    const matchCategory = activeFilter === "All posts" || (post.categoryId?.name || post.category) === activeFilter;
    const matchSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  // Reset to page 1 when filter or search changes
  useEffect(() => {
    setCurrentPage(1);
  }, [activeFilter, searchQuery]);

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

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
    <div className="min-h-screen bg-[var(--color-2)]">
      {/* Section 1*/}
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white pt-30 pb-18">
        <div className="container mx-auto px-3 sm:px-6 lg:px-10 max-w-2xl">
          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-block mb-[1rem]">
                             <div className="text-[var(--color-8)] bg-[var(--color-13)] flex text-[0.9rem] py-[0.6rem] px-4 rounded-lg items-center justify-center">
                                <MdOutlineLibraryBooks className="text-[1rem]"/>
                                 <h2 className="ps-2 font-semibold whitespace-nowrap">Insights & Playbooks</h2>
                             </div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--color-15)] tracking-tight mb-8">Ideas for teams who <span className="text-[var(--color-19)]">sell with precision</span>
            </h1>

            <div className="max-w-[450px] mx-auto mb-10">
              <p className="text-base md:text-lg text-[var(--color-20)] leading-relaxed">
                Learn how modern teams are selling smarter with AI, working faster with structure,and thinking differently about sales tech — straight from the people building it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/*  Section 2*/}
      <section className="py-12 bg-[var(--color-24)] scroll-mt-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.7,
              type: "spring",
              stiffness: 120,
              damping: 15
            }}
            whileHover={{
              y: -5,
              transition: { duration: 0.3 }
            }}
            className="group cursor-pointer rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 bg-[var(--color-24)] hover:bg-[var(--color-26)]"
          >
            <div className="md:flex">
              {/* Animated Image Container */}
              <div className="md:w-2/5 min-h-[300px] p-[1px] bg-[var(--color-gray-300)] overflow-hidden">
                <div className="p-[3px] bg-white h-full w-full overflow-hidden">
                  <motion.div
                    className="h-full w-full overflow-hidden"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="relative h-full w-full">
                      <Image
                        src="/images/blog-img/landing-page.jpg"
                        alt="Simple landing page design"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 40vw"
                      />
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Content Container Animations */}
              <div className="md:w-3/5 p-6 md:p-11">
                <motion.div
                  className="flex items-center justify-between mb-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <div className="flex items-center gap-3">
                    <span className="px-1 py-1 font-medium text-[var(--color-9)]">Sales Playbook</span>
                    <span className="font-medium text-[var(--color-20)]">•</span>
                    <span className="font-medium text-[var(--color-20)]">5 min read</span>
                  </div>
                </motion.div>

                <motion.h2
                  className="text-2xl md:text-3xl font-bold text-[var(--color-15)] mb-4 transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  Why Simple Landing Pages Convert Better Than Fancy Ones
                </motion.h2>

                <motion.p
                  className="text-[var(--color-20)] leading-relaxed mb-6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  Modern SaaS sites are chasing aesthetics over action. Designers love glassmorphism,
                  scroll hijacking, and oversized gradients — but actual users? They want clarity,
                  speed, and a reason to click. This article explores why simpler, content-focused
                  landing pages consistently outperform flashy ones, backed by conversion data,
                  user behavior insights, and our own approach to designing the Avenstek template.
                </motion.p>

                <motion.div
                  className="flex items-center justify-between pt-4 border-t border-gray-100"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="flex items-center gap-3">
                    <motion.div
                      className="relative h-10 w-10 rounded-full overflow-hidden"
                      whileHover={{ scale: 1.1, rotate: 3 }}
                      transition={{ type: "spring", stiffness: 200 }}
                    >
                      <div className="relative h-full w-full">
                        <Image
                          src="/images/author-img/author1.jpg"
                          alt="Jenna Marks"
                          fill
                          className="object-cover"
                          sizes="40px"
                        />
                      </div>
                    </motion.div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="font-medium text-[var(--color-15)]">Jenna Marks</span>
                        <span className="font-medium text-[var(--color-20)]">•</span>
                        <span className="font-medium text-[var(--color-20)]">Jul 7, 2025</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 3 */}
      <section className="py-12 md:py-20 px-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="mb-10 md:mb-16 relative">
            <div className="flex flex-wrap items-center justify-center gap-3">
              {/* Category Filters */}
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-5 py-2.5 rounded-full font-medium text-sm md:text-base transition-all duration-300 ${activeFilter === category
                    ? "bg-[var(--color-8)] text-[var(--color-2)] shadow-lg"
                    : "bg-[var(--color-2)] text-[var(--color-20)] hover:bg-[var(--color-14)] hover:shadow-md border border-[var(--color-22)]"
                    }`}
                >
                  {category}
                </button>
              ))}
              <button
                onClick={() => setShowSearch(!showSearch)}
                className={`px-4 py-2.5 rounded-full font-medium text-sm md:text-base transition-all duration-300 ${showSearch
                  ? "bg-[var(--color-8)] text-[var(--color-2)] shadow-lg"
                  : "bg-[var(--color-2)] text-[var(--color-20)] hover:bg-[var(--color-14)] hover:shadow-md border border-[var(--color-22)]"
                  }`}
              >
                <svg
                  className="w-4 h-4 md:w-5 md:h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>

            {/* Full-screen Search */}
            <AnimatePresence>
              {showSearch && (
                <>
                  {/* Full-screen dark transparent*/}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
                    onClick={() => setShowSearch(false)}
                  />

                  {/* Search input */}
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    className="fixed inset-0 z-50 flex items-start justify-center pt-32"
                  >
                    <div className="w-full max-w-2xl px-4">
                      <div className="relative">
                        <input
                          type="text"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          placeholder="Search..."
                          className="w-full px-6 py-4 pl-12 pr-10 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:border-gray-400 transition-all duration-300 text-lg shadow-lg"
                          autoFocus
                        />
                        <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                          <svg
                            className="w-5 h-5 text-gray-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                          </svg>
                        </div>
                        {/* Close button */}
                        <button
                          onClick={() => setShowSearch(false)}
                          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors p-1"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {currentPosts.map((post, index) => (
              <motion.div
                key={post._id || post.id || index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100,
                  damping: 15
                }}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3 }
                }}
              >
                <Link href={`/blog/blog-view?id=${post._id || post.id}`} className="block h-full">
                  <div className="group cursor-pointer h-full rounded-2xl hover:shadow-xl transition-all duration-300 bg-[var(--color-2)] hover:bg-[var(--color-25)] flex flex-col">
                    {/* img */}
                    <div className="relative h-48 md:h-56 overflow-hidden rounded-lg p-[1px] bg-[var(--color-gray-300)]">
                      <motion.div
                        className="relative w-full h-full"
                        initial={{ scale: 1 }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.4 }}
                      >
                        <Image
                          src={post.thumbnail || '/images/blog-img/card1.jpg'}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500 rounded-lg border-4 border-white"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </motion.div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex items-center gap-3 mb-3">
                        <span className={`py-1 font-medium ${getCategoryColor(post.categoryId?.name || post.category)}`}>{post.categoryId?.name || post.category}</span>
                        <span className="text-[var(--color-20)]">•</span>
                        <span className="text-sm text-[var(--color-20)] font-medium">{post.readTime || "5 min read"}</span>
                      </div>


                      <h3 className="text-xl font-bold text-[var(--color-15)] mb-3 group-hover:text-[var(--color-17)] transition-colors line-clamp-2">
                        {post.title}
                      </h3>

                      <div className="flex items-center gap-3 pt-4 mt-auto">
                        <div className="h-8 w-8 rounded-full overflow-hidden flex-shrink-0 relative">
                          {post.authorId?.photo ? (
                            <img src={post.authorId.photo} alt={post.authorId.name} className="w-full h-full object-cover" />
                          ) : (
                            <div className="w-full h-full bg-gray-300" />
                          )}
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium text-[var(--color-18)] whitespace-nowrap">{post.authorId?.name || "Avenstek Team"}</span>
                          <span className="text-[var(--color-20)]">•</span>
                          <span className="text-xs text-[var(--color-20)] whitespace-nowrap">{new Date(post.createdAt).toLocaleDateString()}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-3 mt-16 pb-10">
              <button
                onClick={() => {
                  setCurrentPage(prev => Math.max(prev - 1, 1));
                  window.scrollTo({ top: 600, behavior: 'smooth' });
                }}
                disabled={currentPage === 1}
                className={`p-3 rounded-full transition-all duration-300 ${currentPage === 1
                  ? "opacity-30 cursor-not-allowed"
                  : "bg-[var(--color-2)] text-[var(--color-20)] hover:bg-[var(--color-14)] hover:shadow-md border border-[var(--color-22)]"
                  }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <div className="flex gap-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => {
                      setCurrentPage(page);
                      window.scrollTo({ top: 600, behavior: 'smooth' });
                    }}
                    className={`w-11 h-11 rounded-full font-bold transition-all duration-300 ${currentPage === page
                      ? "bg-[var(--color-8)] text-[var(--color-2)] shadow-lg"
                      : "bg-[var(--color-2)] text-[var(--color-20)] hover:bg-[var(--color-14)] hover:shadow-md border border-[var(--color-22)]"
                      }`}
                  >
                    {page}
                  </button>
                ))}
              </div>

              <button
                onClick={() => {
                  setCurrentPage(prev => Math.min(prev + 1, totalPages));
                  window.scrollTo({ top: 600, behavior: 'smooth' });
                }}
                disabled={currentPage === totalPages}
                className={`p-3 rounded-full transition-all duration-300 ${currentPage === totalPages
                  ? "opacity-30 cursor-not-allowed"
                  : "bg-[var(--color-2)] text-[var(--color-20)] hover:bg-[var(--color-14)] hover:shadow-md border border-[var(--color-22)]"
                  }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}