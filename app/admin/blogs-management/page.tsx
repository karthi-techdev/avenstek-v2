"use client";

import React, { useState, useEffect, useRef } from 'react';
import * as HiIcons from 'react-icons/hi';
import { 
  HiOutlinePlus, 
  HiOutlineTrash, 
  HiOutlinePencilAlt, 
  HiOutlineSearch, 
  HiOutlineGlobe,
  HiOutlineChevronLeft,
  HiOutlineCalendar,
  HiOutlineClock,
  HiOutlinePhotograph,
  HiOutlineSave,
  HiOutlineEye,
  HiOutlineLink,
  HiOutlineViewList,
  HiOutlineTag,
  HiOutlineInformationCircle,
  HiOutlineArrowLeft,
  HiOutlineClipboardList
} from 'react-icons/hi';

// --- Interfaces ---

interface Category {
  id: string;
  name: string;
  slug: string;
  status: boolean;
}

interface Author {
  id: string;
  name: string;
  photo: string;
  bio: string;
}

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  categoryId: string;
  readTime: string;
  thumbnail: string;
  authorId: string;
  content: string;
  scrollSpyHeadings: string[];
  publishedAt: string;
  status: boolean;
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string;
}

// --- Mock Data ---

const MOCK_CATEGORIES: Category[] = [
  { id: 'cat-1', name: 'Engineering', slug: 'engineering', status: true },
  { id: 'cat-2', name: 'Design', slug: 'design', status: true },
  { id: 'cat-3', name: 'Product', slug: 'product', status: true },
];

const MOCK_AUTHORS: Author[] = [
  { id: 'auth-1', name: 'Alex Rivera', photo: 'https://i.pravatar.cc/150?u=alex', bio: 'Senior Engineer at Lumina.' },
  { id: 'auth-2', name: 'Sarah Jenkins', photo: 'https://i.pravatar.cc/150?u=sarah', bio: 'Product Designer with 10 years experience.' },
];

const MOCK_POSTS: BlogPost[] = [
  {
    id: 'post-1',
    title: 'Optimizing React Performance in 2025',
    slug: 'react-performance-2025',
    categoryId: 'cat-1',
    readTime: '8 min',
    thumbnail: 'https://picsum.photos/seed/react/800/400',
    authorId: 'auth-1',
    content: `<h2>Introduction</h2><p>React remains the leading library for web development in 2025. Efficiency is key to user satisfaction.</p><h2>Virtual DOM Updates</h2><p>Understanding the reconciliation process allows developers to write smoother animations.</p><h2>Conclusion</h2><p>Modern tools like Million.js and React Scan have changed how we profile.</p>`,
    scrollSpyHeadings: ['Introduction', 'Virtual DOM Updates', 'Conclusion'],
    publishedAt: 'July 7, 2025',
    status: true,
    seoTitle: 'React Performance Guide 2025 | Lumina',
    seoDescription: 'Master modern React performance optimization techniques with our comprehensive 2025 guide.',
    seoKeywords: 'react, performance, optimization, frontend'
  }
];

const BlogManagement: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'posts' | 'categories' | 'authors'>('posts');
  const [viewMode, setViewMode] = useState<'list' | 'edit' | 'preview'>('list');
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [activeHeading, setActiveHeading] = useState<string>('');
  const [posts, setPosts] = useState<BlogPost[]>(MOCK_POSTS);
  const [categories] = useState<Category[]>(MOCK_CATEGORIES);
  const [authors] = useState<Author[]>(MOCK_AUTHORS);
  const [isSaving, setIsSaving] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  
  const editorRef = useRef<any>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const extractHeadings = (html: string) => {
    if (typeof window === 'undefined') return [];
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const headings = doc.querySelectorAll('h2, h3');
    return Array.from(headings).map(h => h.textContent || '');
  };

  useEffect(() => {
    if (viewMode === 'edit' && editingPost && isMounted) {
      const initEditor = async () => {
        // Dynamic import for CKEditor to avoid SSR issues
        const ClassicEditor = (await import('@ckeditor/ckeditor5-build-classic')).default;
        const editorElement = document.querySelector('#ck-editor-container');
        
        if (editorElement && !editorRef.current) {
          ClassicEditor.create(editorElement as HTMLElement, {
            toolbar: ['heading', '|', 'bold', 'italic', 'link', 'bulletedList', 'numberedList', 'blockQuote', 'insertTable', 'undo', 'redo'],
          })
            .then((editor: any) => {
              editorRef.current = editor;
              editor.setData(editingPost.content);
              
              editor.model.document.on('change:data', () => {
                const data = editor.getData();
                const headings = extractHeadings(data);
                setEditingPost(p => p ? { ...p, content: data, scrollSpyHeadings: headings } : null);
              });

              const editable = editor.ui.view.editable.element;
              const spyHandler = () => {
                const editorHeadings = editable.querySelectorAll('h2, h3');
                let current = '';
                editorHeadings.forEach((h: any) => {
                  if (editable.scrollTop >= h.offsetTop - 20) {
                    current = h.innerText;
                  }
                });
                setActiveHeading(current);
              };
              editable.addEventListener('scroll', spyHandler);
            })
            .catch((err: any) => console.error(err));
        }
      };
      initEditor();
    }
    return () => {
      if (editorRef.current) {
        editorRef.current.destroy().then(() => {
          editorRef.current = null;
        });
      }
    };
  }, [viewMode, editingPost?.id, isMounted]);

  useEffect(() => {
    if (viewMode !== 'preview' || typeof window === 'undefined') return;
    const handleScroll = () => {
      const headings = document.querySelectorAll('.preview-content h2, .preview-content h3');
      let current = '';
      headings.forEach((h: any) => {
        const rect = h.getBoundingClientRect();
        if (rect.top < 150) current = h.innerText;
      });
      setActiveHeading(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [viewMode]);

  const scrollToHeading = (headingText: string) => {
    if (viewMode === 'edit' && editorRef.current) {
      const editable = editorRef.current.ui.view.editable.element;
      const headings = editable.querySelectorAll('h2, h3');
      headings.forEach((h: any) => {
        if (h.innerText === headingText) {
          editable.scrollTo({ top: h.offsetTop - 10, behavior: 'smooth' });
        }
      });
    } else if (viewMode === 'preview') {
      const headings = document.querySelectorAll('.preview-content h2, .preview-content h3');
      headings.forEach((h: any) => {
        if (h.innerText === headingText) {
          window.scrollTo({ top: h.offsetTop + window.scrollY - 100, behavior: 'smooth' });
        }
      });
    }
  };

  const handleEditPost = (post: BlogPost | null) => {
    if (post) {
      setEditingPost(post);
    } else {
      setEditingPost({
        id: Date.now().toString(),
        title: '',
        slug: '',
        categoryId: categories[0]?.id || '',
        readTime: '5 min',
        thumbnail: 'https://picsum.photos/seed/new/800/400',
        authorId: authors[0]?.id || '',
        content: '<h2>Introduction</h2><p>Write your content here...</p>',
        scrollSpyHeadings: ['Introduction'],
        publishedAt: 'July 7, 2025',
        status: true,
        seoTitle: '',
        seoDescription: '',
        seoKeywords: ''
      });
    }
    setViewMode('edit');
  };

  const savePost = async () => {
    if (!editingPost) return;
    setIsSaving(true);
    await new Promise(r => setTimeout(r, 800));
    setPosts(prev => {
      const exists = prev.find(p => p.id === editingPost.id);
      if (exists) return prev.map(p => p.id === editingPost.id ? editingPost : p);
      return [...prev, editingPost];
    });
    setIsSaving(false);
    setViewMode('list');
  };

  if (!isMounted) return null;

  const getAuthor = (id: string) => authors.find(a => a.id === id);
  const getCategory = (id: string) => categories.find(c => c.id === id);

  if (viewMode === 'preview' && editingPost) {
    const author = getAuthor(editingPost.authorId);
    const category = getCategory(editingPost.categoryId);

    return (
      <div className="min-h-screen bg-[var(--color-2)] font-sans">
        <div className="flex items-center justify-between sticky top-0 z-50 bg-[var(--color-2)]/90 backdrop-blur-md border-b border-[var(--color-23)] px-6 lg:px-20">
          <button onClick={() => setViewMode('edit')} className="flex items-center gap-2 text-sm font-bold text-[var(--color-18)] hover:text-[var(--color-7)] transition-colors">
            <HiOutlineChevronLeft size={20} /> Exit Preview & Continue Editing
          </button>
          <div className="flex items-center gap-3">
             <span className="hidden sm:inline-block text-[10px] font-black text-[var(--color-21)] uppercase tracking-widest bg-[var(--color-24)] px-3 py-1 rounded-full border border-[var(--color-23)]">Live Post View</span>
             <button onClick={savePost} className="bg-[var(--color-7)] text-white px-6 py-2 rounded-xl font-bold shadow-lg shadow-[var(--color-7)]/20 text-sm">Save & Exit</button>
          </div>
        </div>

        <section className="pt-20 pb-20 lg:px-22">
          <div className="max-w-6xl mx-auto px-6 lg:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-15 items-center">
              <div>
                <button onClick={() => setViewMode('list')} className="inline-flex items-center gap-2 px-4 py-2 mb-5 rounded-full border border-[var(--color-26)] bg-[var(--color-25)] text-sm font-medium text-[var(--color-18)] hover:bg-[var(--color-13)] hover:text-[var(--color-15)] transition-all duration-200">
                  <span className="flex items-center justify-center h-6 w-6 rounded-full"><HiOutlineArrowLeft size={14} /></span>
                  All posts
                </button>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-sm font-medium text-[var(--color-9)]">{category?.name}</span>
                  <span className="text-[var(--color-20)]">•</span>
                  <span className="text-sm text-[var(--color-20)]">{editingPost.readTime}</span>
                </div>
                <h1 className="text-4xl md:text-6xl xl:text-6xl font-medium text-[var(--color-15)] leading-tight mb-10 mt-10">{editingPost.title}</h1>
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-full overflow-hidden relative border border-[var(--color-23)]">
                    <img src={author?.photo} alt={author?.name} className="object-cover w-full h-full" />
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="font-medium text-[var(--color-17)]">{author?.name}</span>
                    <span className="text-[var(--color-20)]">•</span>
                    <span className="text-[var(--color-20)]">{editingPost.publishedAt}</span>
                  </div>
                </div>
              </div>
              <div className="relative h-[280px] md:h-[320px] lg:h-[460px] animate-in slide-in-from-bottom-4 duration-500">
                <div className="h-full w-full rounded-2xl border border-[var(--color-21)] p-[2px]">
                  <div className="h-full w-full rounded-xl bg-[var(--color-2)] p-[6px]">
                    <div className="relative h-full w-full overflow-hidden rounded-lg group">
                      <img src={editingPost.thumbnail} alt={editingPost.title} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-32 bg-[var(--color-25)] pt-15">
          <div className="max-w-6xl mx-auto px-6 lg:px-6 pt-20">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-16">
              <div>
                <div className="mb-20 rounded-2xl border border-[var(--color-21)] bg-[var(--color-2)] p-8 max-w-[700px] w-full">
                  <h3 className="text-lg font-medium mb-4">
                    <span className="bg-[var(--color-13)] text-[var(--color-9)] px-3 py-2 rounded-lg inline-flex items-center gap-2">
                      <HiOutlineClipboardList size={16} className="text-[var(--color-9)]" /> Post Summary
                    </span>
                  </h3>
                  <div className="space-y-4 text-sm leading-relaxed text-[var(--color-20)]">
                    <p>This article explores digital performance, specifically focusing on {editingPost.title}.</p>
                  </div>
                </div>
                <article className="preview-content prose prose-lg prose-blue max-w-none text-[var(--color-20)] leading-relaxed prose-h2:text-4xl prose-h2:font-medium prose-h2:text-[var(--color-15)] prose-h2:mb-6 prose-h2:mt-12 scroll-mt-32" dangerouslySetInnerHTML={{ __html: editingPost.content }} />
                
                <div className="mt-32 pt-10 border-t border-[var(--color-23)] space-y-8">
                  <div className="bg-[var(--color-24)] rounded-2xl p-8 border border-[var(--color-21)] space-y-6">
                      <div className="flex items-center gap-2 border-b border-[var(--color-22)] pb-4">
                         <HiOutlineGlobe className="text-[var(--color-7)]" size={20} />
                         <h4 className="text-sm font-black text-[var(--color-15)] uppercase tracking-widest">Page SEO Metadata</h4>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                         <div className="space-y-2">
                            <p className="text-[10px] font-black text-[var(--color-21)] uppercase">Meta Title</p>
                            <p className="text-sm font-bold text-[var(--color-16)]">{editingPost.seoTitle || editingPost.title}</p>
                         </div>
                         <div className="space-y-2">
                            <p className="text-[10px] font-black text-[var(--color-21)] uppercase">Keywords</p>
                            <div className="flex flex-wrap gap-2">
                              {editingPost.seoKeywords ? editingPost.seoKeywords.split(',').map((tag, i) => (
                                <span key={i} className="px-2 py-1 bg-white rounded-lg text-[9px] font-bold text-[var(--color-7)] border border-[var(--color-11)] uppercase">#{tag.trim()}</span>
                              )) : <span className="text-xs text-[var(--color-21)]">No keywords</span>}
                            </div>
                         </div>
                         <div className="md:col-span-2 space-y-2">
                            <p className="text-[10px] font-black text-[var(--color-21)] uppercase">Meta Description</p>
                            <p className="text-xs text-[var(--color-19)] leading-relaxed">{editingPost.seoDescription || 'No meta description provided.'}</p>
                         </div>
                      </div>
                  </div>
                </div>
              </div>

              <aside className="hidden lg:block">
                <div className="sticky top-32">
                  <h4 className="text-sm font-medium text-[var(--color-15)] mb-6">Jump to</h4>
                  <ul className="space-y-1">
                    {editingPost.scrollSpyHeadings.map((heading, i) => (
                      <li key={i}>
                        <button onClick={() => scrollToHeading(heading)} className={`block text-sm text-left w-full transition-colors ${activeHeading === heading ? "text-[var(--color-9)] font-medium" : "text-[var(--color-20)] hover:text-[var(--color-9)]"}`}>
                          {heading}
                        </button>
                      </li>
                    ))}
                  </ul>
                  <div className="border-b border-[var(--color-21)] mt-4"></div>
                  <div className="flex flex-col mt-7 gap-3">
                    <span className="text-sm font-medium text-[var(--color-15)] tracking-wide">Share Article</span>
                    <div className="flex items-center gap-3">
                      <button className="text-[var(--color-20)] hover:text-[var(--color-9)] transition-colors"><HiIcons.HiOutlineLink size={24}/></button>
                      <button className="text-[var(--color-20)] hover:text-[var(--color-9)] transition-colors"><HiIcons.HiOutlineShare size={24}/></button>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto space-y-6 animate-in slide-in-from-right-4 duration-500">
      {viewMode === 'list' ? (
        <>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-[var(--color-16)]">Blog Management</h1>
              <p className="text-[var(--color-20)]">Manage articles and contributors.</p>
            </div>
            <button onClick={() => handleEditPost(null)} className="flex items-center gap-2 bg-[var(--color-7)] text-white px-5 py-2.5 rounded-xl font-bold shadow-lg shadow-[var(--color-7)]/20 hover:scale-[1.02] transition-all">
              <HiOutlinePlus size={20} /> Create New Post
            </button>
          </div>

          <div className="flex border-b border-[var(--color-23)] overflow-x-auto no-scrollbar">
            {(['posts', 'categories', 'authors'] as const).map(tab => (
              <button key={tab} onClick={() => setActiveTab(tab)} className={`px-6 py-3 text-sm font-semibold transition-all border-b-2 capitalize whitespace-nowrap ${activeTab === tab ? 'border-[var(--color-7)] text-[var(--color-7)]' : 'border-transparent text-[var(--color-20)] hover:text-[var(--color-16)]'}`}>
                {tab}
              </button>
            ))}
          </div>

          {activeTab === 'posts' && (
            <div className="grid grid-cols-1 gap-4">
              {posts.map(post => {
                const author = getAuthor(post.authorId);
                const cat = getCategory(post.categoryId);
                return (
                  <div key={post.id} className="bg-white rounded-3xl border border-[var(--color-23)] p-6 shadow-sm flex flex-col lg:flex-row gap-6 hover:border-[var(--color-11)] transition-colors group">
                    <div className="w-full lg:w-48 h-32 flex-shrink-0 overflow-hidden rounded-2xl relative">
                      <img src={post.thumbnail} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="" />
                      <div className="absolute top-2 left-2 px-2 py-1 bg-white/90 backdrop-blur rounded-lg text-[10px] font-black uppercase text-[var(--color-7)]">{cat?.name}</div>
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="flex items-center gap-3 mb-1 text-[10px] font-bold text-[var(--color-21)]">
                            <span className="flex items-center gap-1"><HiOutlineClock /> {post.readTime} read</span>
                            <span className="flex items-center gap-1"><HiOutlineCalendar /> {post.publishedAt}</span>
                          </div>
                          <h3 className="text-xl font-bold text-[var(--color-16)] group-hover:text-[var(--color-7)] transition-colors">{post.title}</h3>
                          <p className="text-xs text-[var(--color-21)] font-medium mt-1 italic">/blog/{post.slug}</p>
                        </div>
                        <div className="flex gap-2">
                          <button onClick={() => handleEditPost(post)} className="p-2 text-[var(--color-20)] hover:text-[var(--color-7)] bg-[var(--color-24)] rounded-xl"><HiOutlinePencilAlt size={18}/></button>
                          <button onClick={() => setPosts(p => p.filter(it => it.id !== post.id))} className="p-2 text-[var(--color-20)] hover:text-[var(--color-27)] bg-[var(--color-24)] rounded-xl"><HiOutlineTrash size={18}/></button>
                        </div>
                      </div>
                      <div className="mt-4 flex items-center justify-between border-t border-[var(--color-23)] pt-4">
                        <div className="flex items-center gap-3">
                          <img src={author?.photo} className="w-8 h-8 rounded-full border-2 border-white shadow-sm" alt="" />
                          <span className="text-xs font-bold text-[var(--color-16)]">{author?.name}</span>
                        </div>
                        <div className={`px-3 py-1 rounded-lg text-[10px] font-black uppercase ${post.status ? 'bg-green-100 text-green-600' : 'bg-gray-200 text-gray-500'}`}>
                          {post.status ? 'Published' : 'Draft'}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </>
      ) : (
        <div className="max-w-6xl mx-auto space-y-6">
          <div className="flex items-center justify-between">
            <button onClick={() => setViewMode('list')} className="flex items-center gap-2 text-sm font-bold text-[var(--color-20)] hover:text-[var(--color-16)] transition-colors">
              <HiOutlineChevronLeft size={20} /> Back to List
            </button>
            <div className="flex gap-3">
              <button onClick={() => setViewMode('preview')} className="bg-white border border-[var(--color-23)] text-[var(--color-18)] px-5 py-2.5 rounded-xl font-bold flex items-center gap-2 hover:bg-[var(--color-24)] transition-colors">
                <HiOutlineEye size={20} /> View Post
              </button>
              <button onClick={savePost} disabled={isSaving} className="bg-[var(--color-7)] text-white px-6 py-2.5 rounded-xl font-bold shadow-lg shadow-[var(--color-7)]/20 flex items-center gap-2">
                {isSaving ? <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div> : <HiOutlineSave size={20} />}
                Update Blog
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
            <div className="lg:col-span-1 sticky top-28 space-y-6 hidden lg:block">
              <div className="bg-white p-6 rounded-3xl border border-[var(--color-23)] shadow-sm">
                <div className="flex items-center gap-2 mb-4 border-b pb-3">
                  <HiOutlineViewList className="text-[var(--color-7)]" />
                  <h4 className="text-xs font-black text-[var(--color-16)] uppercase tracking-widest">Table of Contents</h4>
                </div>
                <div className="space-y-1">
                  {editingPost?.scrollSpyHeadings.map((heading, idx) => (
                    <button key={idx} onClick={() => scrollToHeading(heading)} className={`w-full text-left px-3 py-2 rounded-xl text-xs font-semibold transition-all border ${activeHeading === heading ? 'bg-[var(--color-13)] text-[var(--color-7)] border-[var(--color-11)] translate-x-1' : 'text-[var(--color-20)] border-transparent hover:bg-[var(--color-25)]'}`}>
                      {heading}
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-[var(--color-16)] p-6 rounded-3xl text-white space-y-4">
                <div className="flex items-center gap-2 text-[var(--color-21)]">
                   <HiOutlineSearch size={14} />
                   <span className="text-[10px] font-black uppercase tracking-tighter">Google Preview</span>
                </div>
                <div className="space-y-1">
                   <p className="text-[#8ab4f8] text-[9px] overflow-hidden truncate">lumina.com › {editingPost?.slug || '...'}</p>
                   <h3 className="text-[#8ab4f8] text-sm font-medium line-clamp-2">{editingPost?.seoTitle || editingPost?.title || 'Title missing'}</h3>
                   <p className="text-[#bdc1c6] text-[10px] leading-relaxed line-clamp-3">{editingPost?.seoDescription || 'Meta description missing.'}</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white p-8 rounded-3xl border border-[var(--color-23)] shadow-sm space-y-6">
                <input type="text" value={editingPost?.title} onChange={e => setEditingPost(p => p ? {...p, title: e.target.value} : null)} placeholder="Enter title..." className="w-full bg-transparent border-none p-0 text-3xl font-black text-[var(--color-16)] outline-none focus:ring-0" />
                
                <div className="flex flex-wrap gap-4 pt-4 border-t border-[var(--color-23)]">
                   <div className="flex-1 min-w-[200px]">
                      <label className="text-[10px] font-black text-[var(--color-21)] uppercase mb-2 block">Slug URL</label>
                      <div className="flex items-center gap-2 bg-[var(--color-24)] px-4 py-2.5 rounded-xl border border-[var(--color-23)]">
                        <span className="text-[10px] text-[var(--color-21)]">/blog/</span>
                        <input type="text" value={editingPost?.slug} onChange={e => setEditingPost(p => p ? {...p, slug: e.target.value} : null)} className="bg-transparent border-none text-xs w-full p-0 font-bold focus:ring-0 outline-none" />
                      </div>
                   </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-black text-[var(--color-21)] uppercase block">Rich Article Content</label>
                  <div id="ck-editor-container" className="border border-[var(--color-23)] rounded-3xl overflow-hidden min-h-[400px]"></div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-3xl border border-[var(--color-23)] shadow-sm space-y-6">
                <h3 className="text-lg font-bold text-[var(--color-16)] flex items-center gap-2"><HiOutlineGlobe className="text-[var(--color-7)]" /> SEO Meta</h3>
                <div className="grid grid-cols-1 gap-6">
                    <input type="text" value={editingPost?.seoTitle} onChange={e => setEditingPost(p => p ? {...p, seoTitle: e.target.value} : null)} placeholder="SEO Title" className="w-full px-4 py-3 rounded-2xl border border-[var(--color-23)] bg-[var(--color-24)] text-sm outline-none" />
                    <textarea value={editingPost?.seoDescription} onChange={e => setEditingPost(p => p ? {...p, seoDescription: e.target.value} : null)} rows={3} placeholder="SEO Description" className="w-full px-4 py-3 rounded-2xl border border-[var(--color-23)] bg-[var(--color-24)] text-sm outline-none resize-none" />
                </div>
              </div>
            </div>

            <div className="lg:col-span-1 space-y-6">
              <div className="bg-white p-6 rounded-3xl border border-[var(--color-23)] shadow-sm space-y-5">
                <h4 className="text-xs font-black text-[var(--color-16)] uppercase tracking-widest border-b pb-3">Publication Meta</h4>
                <div className="space-y-4">
                  <div>
                    <label className="text-[10px] font-bold text-[var(--color-21)] uppercase mb-1.5 block">Category</label>
                    <select value={editingPost?.categoryId} onChange={e => setEditingPost(p => p ? {...p, categoryId: e.target.value} : null)} className="w-full px-4 py-2.5 rounded-xl border border-[var(--color-23)] bg-[var(--color-24)] text-xs font-bold outline-none">
                      {categories.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="text-[10px] font-bold text-[var(--color-21)] uppercase mb-1.5 block">Author</label>
                    <select value={editingPost?.authorId} onChange={e => setEditingPost(p => p ? {...p, authorId: e.target.value} : null)} className="w-full px-4 py-2.5 rounded-xl border border-[var(--color-23)] bg-[var(--color-24)] text-xs font-bold outline-none">
                      {authors.map(a => <option key={a.id} value={a.id}>{a.name}</option>)}
                    </select>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-3xl border border-[var(--color-23)] shadow-sm space-y-4">
                 <h4 className="text-xs font-black text-[var(--color-16)] uppercase tracking-widest border-b pb-3">Featured Image</h4>
                 <div className="relative group overflow-hidden rounded-2xl aspect-video bg-[var(--color-24)] border border-[var(--color-23)]">
                    <img src={editingPost?.thumbnail} className="w-full h-full object-cover" alt="" />
                    <button className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white gap-2 text-xs font-bold backdrop-blur-[2px]"><HiOutlinePhotograph size={20} /> Change</button>
                 </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogManagement;