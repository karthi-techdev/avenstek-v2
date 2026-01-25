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
import { useModal } from '@/app/components/ConfirmModal';
import api from '@/lib/api';
import { API_BASE_URL } from '@/lib/api-config';
import LoadingScreen from '../components/LoadingScreen';
import RichTextEditor from '../components/RichTextEditor';

// --- Interfaces ---

interface Category {
  _id?: string;
  id?: string;
  name: string;
  slug: string;
  status: boolean;
}

interface Author {
  _id?: string;
  id?: string;
  name: string;
  photo: string;
  bio: string;
}

interface BlogPost {
  _id?: string;
  id?: string;
  title: string;
  slug: string;
  categoryId: string | Category;
  readTime: string;
  thumbnail: string;
  authorId: string | Author;
  content: string;
  scrollSpyHeadings: string[];
  publishedAt: string;
  status: boolean;
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string;
}

import { useToast } from '../components/Toast';

const BlogManagement: React.FC = () => {
  const { showToast } = useToast();
  const { showAlert, showConfirm, showPrompt } = useModal();
  const [activeTab, setActiveTab] = useState<'posts' | 'categories' | 'authors'>('posts');
  const [viewMode, setViewMode] = useState<'list' | 'edit' | 'preview'>('list');
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [activeHeading, setActiveHeading] = useState<string>('');
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [authors, setAuthors] = useState<Author[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [isMounted, setIsMounted] = useState(false);


  useEffect(() => {
    setIsMounted(true);
    const fetchData = async () => {
      try {
        const [postsRes, catsRes, authsRes] = await Promise.all([
          api.get('/content/blogs'),
          api.get('/content/categories'),
          api.get('/content/authors')
        ]);
        setPosts(postsRes.data);
        setCategories(catsRes.data);
        setAuthors(authsRes.data);
      } catch (err) {
        console.error("Error fetching blog data", err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  // Helper to check if an element qualifies as a heading
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

  const extractHeadings = (html: string) => {
    if (typeof window === 'undefined') return [];
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    return getHeadingsFromDoc(doc).map(h => h.textContent?.trim() || '').filter(Boolean);
  };

  useEffect(() => {
    if (viewMode !== 'preview' || typeof window === 'undefined') return;

    const handleScroll = () => {
      const container = document.querySelector('.preview-content');
      if (!container) return;

      const headings = getHeadingsFromDoc(container);
      let current = '';

      headings.forEach((h: any) => {
        const rect = h.getBoundingClientRect();
        // If element is near top (allow some buffer)
        if (rect.top < 150) current = h.innerText?.trim() || '';
      });

      setActiveHeading(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [viewMode]);

  const scrollToHeading = (headingText: string) => {
    let container: Element | null = null;
    let offsetAdjustment = 0;

    if (viewMode === 'edit') {
      // Jodit editor usually puts content in .jodit-wysiwyg
      container = document.querySelector('.jodit-wysiwyg');
      offsetAdjustment = 10;
    } else if (viewMode === 'preview') {
      container = document.querySelector('.preview-content');
      offsetAdjustment = 100;
    }

    if (container) {
      const headings = getHeadingsFromDoc(container);
      const target = headings.find((h: any) => (h.innerText?.trim() || '') === headingText);

      if (target) {
        // For Jodit (edit mode), we might need to scroll the internal container if possible, 
        // but typically Jodit uses window scroll or iframe? 
        // Given Jodit React implementation, it's often a div if not in iframe mode.
        // We'll trust scrollIntoView or window scroll logic.

        const top = target.getBoundingClientRect().top + window.scrollY - offsetAdjustment;
        window.scrollTo({ top, behavior: 'smooth' });
      }
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
        categoryId: getId(categories[0]),
        readTime: '5 min',
        thumbnail: 'https://picsum.photos/seed/new/800/400',
        authorId: getId(authors[0]),
        content: '<h2>Introduction</h2><p>Write your content here...</p>',
        scrollSpyHeadings: ['Introduction'],
        publishedAt: new Date().toISOString(),
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
    try {
      if (editingPost._id) {
        await api.put(`/content/blogs/${editingPost._id}`, editingPost);
      } else {
        await api.post('/content/blogs', editingPost);
      }
      showToast('success', 'Post Saved', 'Blog post has been successfully saved.');
      const { data } = await api.get('/content/blogs');
      setPosts(data);
      setViewMode('list');
    } catch (err) {
      console.error("Error saving post", err);
      showToast('error', 'Save Failed', 'Could not save blog post.');
    } finally {
      setIsSaving(false);
    }
  };

  const deletePost = async (id: string) => {
    const confirmed = await showConfirm('Delete Post', 'Are you sure you want to delete this post?');
    if (!confirmed) return;
    try {
      await api.delete(`/content/blogs/${id}`);
      setPosts(posts.filter(p => p._id !== id));
      showToast('success', 'Post Deleted', 'Blog post was removed.');
    } catch (err) {
      console.error("Error deleting post", err);
      showToast('error', 'Delete Failed', 'Could not delete blog post.');
    }
  };

  if (!isMounted || isLoading) return <LoadingScreen text="Fetching Articles" />;

  const getId = (item: any): string => {
    if (!item) return '';
    if (typeof item === 'string') return item;
    return item._id || item.id || '';
  };

  const getAuthor = (id: string | any) => authors.find(a => (a._id || a.id) === getId(id));
  const getCategory = (id: string | any) => categories.find(c => (c._id || c.id) === getId(id));

  if (viewMode === 'preview' && editingPost) {
    const author = getAuthor(editingPost.authorId);
    const category = getCategory(editingPost.categoryId);

    return (
      <div className="min-h-screen bg-[var(--color-2)]">
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
                    <img src={(author?.photo || '').startsWith('/') ? `${API_BASE_URL}${author?.photo}` : author?.photo} alt={author?.name} className="object-cover w-full h-full" />
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="font-medium text-[var(--color-17)]">{author?.name}</span>
                    <span className="text-[var(--color-20)]">•</span>
                    <span className="text-[var(--color-20)]">{new Date(editingPost.publishedAt).toLocaleDateString()}</span>
                  </div>
                </div>
              </div>
              <div className="relative h-[280px] md:h-[320px] lg:h-[460px] animate-in slide-in-from-bottom-4 duration-500">
                <div className="h-full w-full rounded-2xl border border-[var(--color-21)] p-[2px]">
                  <div className="h-full w-full rounded-xl bg-[var(--color-2)] p-[6px]">
                    <div className="relative h-full w-full overflow-hidden rounded-lg group">
                      <img src={(editingPost.thumbnail || '').startsWith('/') ? `${API_BASE_URL}${editingPost.thumbnail}` : editingPost.thumbnail} alt={editingPost.title} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" />
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
                      <button className="text-[var(--color-20)] hover:text-[var(--color-9)] transition-colors"><HiIcons.HiOutlineLink size={24} /></button>
                      <button className="text-[var(--color-20)] hover:text-[var(--color-9)] transition-colors"><HiIcons.HiOutlineShare size={24} /></button>
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
                const postId = post._id || post.id!;
                return (
                  <div key={postId} className="bg-white rounded-3xl border border-[var(--color-23)] p-6 shadow-sm flex flex-col lg:flex-row gap-6 hover:border-[var(--color-11)] transition-colors group">
                    <div className="w-full lg:w-48 h-32 flex-shrink-0 overflow-hidden rounded-2xl relative">
                      <img src={(post.thumbnail || '').startsWith('/') ? `${API_BASE_URL}${post.thumbnail}` : post.thumbnail} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="" />
                      <div className="absolute top-2 left-2 px-2 py-1 bg-white/90 backdrop-blur rounded-lg text-[10px] font-black uppercase text-[var(--color-7)]">{cat?.name}</div>
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="flex items-center gap-3 mb-1 text-[10px] font-bold text-[var(--color-21)]">
                            <span className="flex items-center gap-1"><HiOutlineClock /> {post.readTime} read</span>
                            <span className="flex items-center gap-1"><HiOutlineCalendar /> {new Date(post.publishedAt).toLocaleDateString()}</span>
                          </div>
                          <h3 className="text-xl font-bold text-[var(--color-16)] group-hover:text-[var(--color-7)] transition-colors">{post.title}</h3>
                          <p className="text-xs text-[var(--color-21)] font-medium mt-1 italic">/blog/blog-view?{post.slug}</p>
                        </div>
                        <div className="flex gap-2">
                          <button onClick={() => handleEditPost(post)} className="p-2 text-[var(--color-20)] hover:text-[var(--color-7)] bg-[var(--color-24)] rounded-xl"><HiOutlinePencilAlt size={18} /></button>
                          <button onClick={() => deletePost(postId)} className="p-2 text-[var(--color-20)] hover:text-[var(--color-27)] bg-[var(--color-24)] rounded-xl"><HiOutlineTrash size={18} /></button>
                        </div>
                      </div>
                      <div className="mt-4 flex items-center justify-between border-t border-[var(--color-23)] pt-4">
                        <div className="flex items-center gap-3">
                          <img src={(author?.photo || '').startsWith('/') ? `${API_BASE_URL}${author?.photo}` : author?.photo} className="w-8 h-8 rounded-full border-2 border-white shadow-sm" alt="" />
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
          {activeTab === 'categories' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map(cat => (
                <div key={cat._id || cat.id} className="bg-white p-6 rounded-3xl border border-[var(--color-23)] shadow-sm hover:border-[var(--color-11)] transition-all">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-[var(--color-16)]">{cat.name}</h3>
                      <p className="text-[10px] font-bold text-[var(--color-21)] uppercase italic">/category/{cat.slug}</p>
                    </div>
                    <button
                      onClick={async () => {
                        const confirmed = await showConfirm('Delete Category', 'Delete this category?');
                        if (!confirmed) return;
                        await api.delete(`/content/categories/${cat._id || cat.id}`);
                        setCategories(categories.filter(c => (c._id || c.id) !== (cat._id || cat.id)));
                      }}
                      className="p-2 text-[var(--color-20)] hover:text-[var(--color-27)] bg-[var(--color-24)] rounded-xl transition-colors"
                    >
                      <HiOutlineTrash size={18} />
                    </button>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-dashed border-[var(--color-23)]">
                    <button
                      onClick={async () => {
                        const newStatus = !cat.status;
                        await api.put(`/content/categories/${cat._id || cat.id}`, { status: newStatus });
                        setCategories(categories.map(c => (c._id || c.id) === (cat._id || cat.id) ? { ...c, status: newStatus } : c));
                      }}
                      className={`px-3 py-1.5 rounded-xl text-[10px] font-black uppercase transition-all ${cat.status ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-500'}`}
                    >
                      {cat.status ? 'Active' : 'Inactive'}
                    </button>
                  </div>
                </div>
              ))}
              <button
                onClick={async () => {
                  const name = await showPrompt('New Category', 'Enter category name:');
                  if (!name) return;
                  const slug = name.toLowerCase().replace(/ /g, '-');
                  try {
                    const { data } = await api.post('/content/categories', { name, slug, status: true });
                    setCategories([...categories, data]);
                    showToast('success', 'Category Created', `"${name}" architecture added.`);
                  } catch (err) {
                    showToast('error', 'Creation Failed', 'Could not create category.');
                  }
                }}
                className="border-2 border-dashed border-[var(--color-23)] rounded-3xl flex flex-col items-center justify-center p-8 text-[var(--color-20)] hover:border-[var(--color-7)] hover:text-[var(--color-7)] transition-all group"
              >
                <HiOutlinePlus size={32} className="mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-bold">Add New Category</span>
              </button>
            </div>
          )}

          {activeTab === 'authors' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {authors.map(author => (
                <div key={author._id || author.id} className="bg-white p-6 rounded-3xl border border-[var(--color-23)] shadow-sm hover:border-[var(--color-11)] transition-all">
                  <div className="flex gap-4 items-start mb-4">
                    <div className="relative group/photo">
                      <img src={(author.photo || '').startsWith('/') ? `${API_BASE_URL}${author.photo}` : author.photo} className="w-16 h-16 rounded-2xl object-cover ring-4 ring-[var(--color-24)]" alt="" />
                      <label className="absolute inset-0 bg-black/40 opacity-0 group-hover/photo:opacity-100 transition-opacity flex items-center justify-center text-white rounded-2xl cursor-pointer">
                        <HiOutlinePhotograph size={16} />
                        <input
                          type="file"
                          className="hidden"
                          onChange={async (e) => {
                            const file = e.target.files?.[0];
                            if (!file) return;
                            const formData = new FormData();
                            formData.append('image', file);
                            try {
                              const { data } = await api.post('/content/upload', formData, {
                                headers: { 'Content-Type': 'multipart/form-data' }
                              });
                              await api.put(`/content/authors/${author._id || author.id}`, { photo: data.url });
                              setAuthors(authors.map(a => (a._id || a.id) === (author._id || author.id) ? { ...a, photo: data.url } : a));
                            } catch (err) {
                              console.error("Upload failed", err);
                            }
                          }}
                        />
                      </label>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-[var(--color-16)]">{author.name}</h3>
                      <p className="text-[10px] text-[var(--color-20)] leading-relaxed line-clamp-2">{author.bio}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-end gap-2 pt-4 border-t border-dashed border-[var(--color-23)]">
                    <button className="p-2 text-[var(--color-20)] hover:text-[var(--color-7)] bg-[var(--color-24)] rounded-xl transition-colors"><HiOutlinePencilAlt size={18} /></button>
                    <button
                      onClick={async () => {
                        const confirmed = await showConfirm('Delete Author', 'Delete this author?');
                        if (!confirmed) return;
                        await api.delete(`/content/authors/${author._id || author.id}`);
                        setAuthors(authors.filter(a => (a._id || a.id) !== (author._id || author.id)));
                      }}
                      className="p-2 text-[var(--color-20)] hover:text-[var(--color-27)] bg-[var(--color-24)] rounded-xl transition-colors"
                    >
                      <HiOutlineTrash size={18} />
                    </button>
                  </div>
                </div>
              ))}
              <button
                onClick={async () => {
                  const name = await showPrompt('New Author', 'Enter author name:');
                  if (!name) return;
                  const bio = await showPrompt('Author Bio', `Enter bio for ${name}:`);
                  const photo = `https://i.pravatar.cc/150?u=${Date.now()}`;

                  try {
                    const { data } = await api.post('/content/authors', { name, bio, photo });
                    setAuthors([...authors, data]);
                    showToast('success', 'Author Added', `"${name}" registered in database.`);
                  } catch (err) {
                    showToast('error', 'Addition Failed', 'Could not register author.');
                  }
                }}
                className="border-2 border-dashed border-[var(--color-23)] rounded-3xl flex flex-col items-center justify-center p-8 text-[var(--color-20)] hover:border-[var(--color-7)] hover:text-[var(--color-7)] transition-all group"
              >
                <HiOutlinePlus size={32} className="mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-bold">Add New Author</span>
              </button>
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

              <div className="bg-white p-6 rounded-3xl border border-[var(--color-23)] space-y-4 shadow-sm">
                <div className="flex items-center gap-2 text-[var(--color-7)] mb-2">
                  <HiOutlineSearch size={14} />
                  <span className="text-[10px] font-black uppercase tracking-tighter">SEO Quality Score</span>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-[9px] font-black uppercase tracking-tighter">
                    <span className="text-[var(--color-21)]">Title</span>
                    <span className={(editingPost?.seoTitle || '').length > 60 || (editingPost?.seoTitle || '').length < 30 ? "text-amber-500" : "text-green-500"}>{(editingPost?.seoTitle || '').length} / 60</span>
                  </div>
                  <div className="w-full h-1 bg-[var(--color-24)] rounded-full overflow-hidden">
                    <div className={`h-full transition-all ${(editingPost?.seoTitle || '').length > 60 || ((editingPost?.seoTitle || '').length < 30 && (editingPost?.seoTitle || '').length > 0) ? "bg-amber-500" : "bg-green-500"}`} style={{ width: `${Math.min(((editingPost?.seoTitle || '').length / 60) * 100, 100)}%` }}></div>
                  </div>

                  <div className="flex justify-between items-center text-[9px] font-black uppercase tracking-tighter pt-1">
                    <span className="text-[var(--color-21)]">Description</span>
                    <span className={(editingPost?.seoDescription || '').length > 160 || (editingPost?.seoDescription || '').length < 70 ? "text-amber-500" : "text-green-500"}>{(editingPost?.seoDescription || '').length} / 160</span>
                  </div>
                  <div className="w-full h-1 bg-[var(--color-24)] rounded-full overflow-hidden">
                    <div className={`h-full transition-all ${(editingPost?.seoDescription || '').length > 160 || ((editingPost?.seoDescription || '').length < 70 && (editingPost?.seoDescription || '').length > 0) ? "bg-amber-500" : "bg-green-500"}`} style={{ width: `${Math.min(((editingPost?.seoDescription || '').length / 160) * 100, 100)}%` }}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white p-8 rounded-3xl border border-[var(--color-23)] shadow-sm space-y-6">
                <input type="text" value={editingPost?.title} onChange={e => {
                  const title = e.target.value;
                  const slug = title.toLowerCase().trim().replace(/[^\w\s-]/g, '').replace(/[\s_-]+/g, '-').replace(/^-+|-+$/g, '');
                  setEditingPost(p => p ? { ...p, title, slug } : null);
                }} placeholder="Enter title..." className="w-full bg-transparent border-none p-0 text-3xl font-black text-[var(--color-16)] outline-none focus:ring-0" />

                <div className="flex flex-wrap gap-4 pt-4 border-t border-[var(--color-23)]">
                  <div className="flex-1 min-w-[200px]">
                    <label className="text-[10px] font-black text-[var(--color-21)] uppercase mb-2 block">Slug URL</label>
                    <div className="flex items-center gap-2 bg-[var(--color-24)] px-4 py-2.5 rounded-xl border border-[var(--color-23)]">
                      <span className="text-[10px] text-[var(--color-21)]">/blog/blog-view?</span>
                      <input type="text" value={editingPost?.slug} onChange={e => setEditingPost(p => p ? { ...p, slug: e.target.value } : null)} className="bg-transparent border-none text-xs w-full p-0 font-bold focus:ring-0 outline-none" />
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-black text-[var(--color-21)] uppercase block">Rich Article Content</label>
                  <div className="border border-[var(--color-23)] rounded-3xl overflow-hidden min-h-[500px] bg-white">
                    <RichTextEditor
                      id={editingPost?._id || editingPost?.id || 'new-blog'}
                      data={editingPost?.content || ''}
                      onChange={(data: string) => {
                        const headings = extractHeadings(data);
                        setEditingPost(p => p ? { ...p, content: data, scrollSpyHeadings: headings } : null);
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1 space-y-6">
              <div className="bg-white p-6 rounded-3xl border border-[var(--color-23)] shadow-sm space-y-5">
                <h4 className="text-xs font-black text-[var(--color-16)] uppercase tracking-widest border-b pb-3">Publication Meta</h4>
                <div className="space-y-4">
                  <div>
                    <label className="text-[10px] font-bold text-[var(--color-21)] uppercase mb-1.5 block">Category</label>
                    <select value={getId(editingPost?.categoryId)} onChange={e => setEditingPost(p => p ? { ...p, categoryId: e.target.value } : null)} className="w-full px-4 py-2.5 rounded-xl border border-[var(--color-23)] bg-[var(--color-24)] text-xs font-bold outline-none">
                      {categories.map(c => <option key={c._id || c.id} value={c._id || c.id}>{c.name}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="text-[10px] font-bold text-[var(--color-21)] uppercase mb-1.5 block">Author</label>
                    <select value={getId(editingPost?.authorId)} onChange={e => setEditingPost(p => p ? { ...p, authorId: e.target.value } : null)} className="w-full px-4 py-2.5 rounded-xl border border-[var(--color-23)] bg-[var(--color-24)] text-xs font-bold outline-none">
                      {authors.map(a => <option key={a._id || a.id} value={a._id || a.id}>{a.name}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="text-[10px] font-bold text-[var(--color-21)] uppercase mb-1.5 block">Status</label>
                    <select
                      value={editingPost?.status ? 'true' : 'false'}
                      onChange={e => setEditingPost(p => p ? { ...p, status: e.target.value === 'true' } : null)}
                      className="w-full px-4 py-2.5 rounded-xl border border-[var(--color-23)] bg-[var(--color-24)] text-xs font-bold outline-none"
                    >
                      <option value="true">Published</option>
                      <option value="false">Unpublished</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-3xl border border-[var(--color-23)] shadow-sm space-y-4">
                <h4 className="text-xs font-black text-[var(--color-16)] uppercase tracking-widest border-b pb-3">Featured Image</h4>
                <div className="relative group overflow-hidden rounded-2xl aspect-video bg-[var(--color-24)] border border-[var(--color-23)]">
                  <img src={editingPost?.thumbnail.startsWith('/') ? `${API_BASE_URL}${editingPost.thumbnail}` : editingPost?.thumbnail} className="w-full h-full object-cover" alt="" />
                  <label className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white gap-2 text-xs font-bold backdrop-blur-[2px] cursor-pointer">
                    <HiOutlinePhotograph size={20} /> Change
                    <input
                      type="file"
                      className="hidden"
                      onChange={async (e) => {
                        const file = e.target.files?.[0];
                        if (!file) return;
                        const formData = new FormData();
                        formData.append('image', file);
                        try {
                          const { data } = await api.post('/content/upload', formData, {
                            headers: { 'Content-Type': 'multipart/form-data' }
                          });
                          setEditingPost(p => p ? { ...p, thumbnail: data.url } : null);
                        } catch (err) {
                          console.error("Upload failed", err);
                        }
                      }}
                    />
                  </label>
                </div>
              </div>
            </div>

            {/* SEO Section spanning the content area */}
            <div className="lg:col-start-2 lg:col-span-3">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                <div className="bg-white p-8 rounded-3xl border border-[var(--color-23)] shadow-sm space-y-6">
                  <h3 className="text-lg font-bold text-[var(--color-16)] flex items-center gap-2 border-b pb-4"><HiOutlineGlobe className="text-[var(--color-7)]" /> SEO Meta</h3>
                  <div className="grid grid-cols-1 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-[var(--color-21)] uppercase mb-2 tracking-widest">Meta Title</label>
                      <input type="text" value={editingPost?.seoTitle} onChange={e => setEditingPost(p => p ? { ...p, seoTitle: e.target.value } : null)} placeholder="Enter SEO Title" className="w-full px-4 py-3 rounded-2xl border border-[var(--color-23)] bg-[var(--color-24)] text-sm focus:ring-2 focus:ring-[var(--color-11)] outline-none transition-all" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[var(--color-21)] uppercase mb-2 tracking-widest">Meta Description</label>
                      <textarea value={editingPost?.seoDescription} onChange={e => setEditingPost(p => p ? { ...p, seoDescription: e.target.value } : null)} rows={4} placeholder="Enter SEO Description" className="w-full px-4 py-3 rounded-2xl border border-[var(--color-23)] bg-[var(--color-24)] text-sm focus:ring-2 focus:ring-[var(--color-11)] outline-none resize-none transition-all" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[var(--color-21)] uppercase mb-2 tracking-widest">Focus Keywords</label>
                      <input type="text" value={editingPost?.seoKeywords} onChange={e => setEditingPost(p => p ? { ...p, seoKeywords: e.target.value } : null)} placeholder="e.g. tech, innovation, software" className="w-full px-4 py-3 rounded-2xl border border-[var(--color-23)] bg-[var(--color-24)] text-sm focus:ring-2 focus:ring-[var(--color-11)] outline-none transition-all" />
                    </div>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-3xl border border-[var(--color-23)] space-y-6 shadow-sm min-h-[400px]">
                  <h3 className="text-lg font-bold text-[var(--color-16)] border-b pb-4 flex items-center gap-2">
                    <HiOutlineSearch className="text-[var(--color-7)]" /> Search Engine Preview
                  </h3>

                  <div className="bg-[#f8f9fa] p-8 rounded-2xl border border-gray-100">
                    <div className="flex flex-col gap-1 max-w-xl">
                      <div className="flex items-center gap-2 text-sm text-[#202124]">
                        <div className="w-7 h-7 bg-white rounded-full border border-gray-200 flex items-center justify-center p-1 overflow-hidden">
                          <img src="/favicon.ico" alt="fav" className="w-full h-full object-contain" />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[14px] leading-tight font-medium">Avenstek Solutions</span>
                          <span className="text-[12px] text-[#4d5156] leading-tight">https://avenstek.com › blog › {editingPost?.slug || '...'}</span>
                        </div>
                      </div>
                      <h3 className="text-[20px] text-[#1a0dab] font-medium leading-tight hover:underline cursor-pointer mt-1">
                        {editingPost?.seoTitle || editingPost?.title || "Blog Post Title | Avenstek Insights"}
                      </h3>
                      <p className="text-[14px] text-[#4d5156] leading-relaxed mt-1 line-clamp-2">
                        {editingPost?.seoDescription || "Read our latest blog post about digital transformation and industry trends. Expert insights from Avenstek Solutions."}
                      </p>
                    </div>
                  </div>

                  <p className="text-[10px] text-[var(--color-21)] font-medium leading-relaxed bg-[var(--color-13)] p-4 rounded-xl border border-[var(--color-11)]">
                    <strong>SEO Pro Tip:</strong> Keep your meta titles between 30-60 characters and descriptions between 70-160 characters for optimal visibility on Google Search Result Pages (SERP).
                  </p>
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