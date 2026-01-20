"use client"
import React, { useState, useCallback } from 'react';
import {
  HiOutlinePlus,
  HiOutlineTrash,
  HiOutlineSave,
  HiOutlineExternalLink,
  HiOutlineLink,
  HiOutlineChevronDown,
  HiOutlineChevronUp,
  HiOutlineViewBoards,
  HiOutlineCollection
} from 'react-icons/hi';

import api from '@/lib/api';

interface FooterCategory {
  _id?: string;
  id: string;
  title: string;
  order: number;
}

interface FooterLink {
  _id?: string;
  id: string;
  categoryId: string;
  title: string;
  url: string;
  order: number;
  status: boolean;
}

const FooterManagement: React.FC = () => {
  const [categories, setCategories] = useState<FooterCategory[]>([]);
  const [links, setLinks] = useState<FooterLink[]>([]);
  const [isSaving, setIsSaving] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await api.get('/content/footer');
        if (data.categories) setCategories(data.categories);
        if (data.links) setLinks(data.links);
      } catch (err) {
        console.error("Error fetching footer", err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  /**
   * RE-INDEXING LOGIC
   * Ensures categories and links have strictly sequential orders (1, 2, 3...)
   */
  const normalizeData = useCallback((cats: FooterCategory[], items: FooterLink[]): { cats: FooterCategory[], items: FooterLink[] } => {
    const normalizedCats = [...cats]
      .sort((a, b) => a.order - b.order)
      .map((c, i) => ({ ...c, order: i + 1 }));

    const normalizedItems = items.map(item => {
      // Find which position it should be in within its group
      const group = items.filter(l => l.categoryId === item.categoryId).sort((a, b) => a.order - b.order);
      const idx = group.findIndex(g => g.id === item.id);
      return { ...item, order: idx + 1 };
    });

    return { cats: normalizedCats, items: normalizedItems };
  }, []);

  // CATEGORY ACTIONS
  const addCategory = () => {
    const newId = `cat-${Date.now()}`;
    const newCat: FooterCategory = { id: newId, title: 'New Section', order: categories.length + 1 };
    setCategories(prev => [...prev, newCat]);
  };

  const updateCategory = (id: string, title: string) => {
    setCategories(prev => prev.map(c => c.id === id ? { ...c, title } : c));
  };

  const moveCategory = (id: string, direction: 'up' | 'down') => {
    setCategories(prev => {
      const sorted = [...prev].sort((a, b) => a.order - b.order);
      const index = sorted.findIndex(c => c.id === id);
      if (direction === 'up' && index === 0) return prev;
      if (direction === 'down' && index === sorted.length - 1) return prev;

      const targetIndex = direction === 'up' ? index - 1 : index + 1;
      const newCats = [...sorted];
      [newCats[index], newCats[targetIndex]] = [newCats[targetIndex], newCats[index]];

      return newCats.map((c, i) => ({ ...c, order: i + 1 }));
    });
  };

  const deleteCategory = (id: string) => {
    if (categories.length <= 1) {
      alert("At least one footer section is required.");
      return;
    }
    const confirmed = window.confirm("Deleting this section will also remove all its links. Continue?");
    if (!confirmed) return;

    const filteredCats = categories.filter(c => c.id !== id);
    const filteredLinks = links.filter(l => l.categoryId !== id);
    const { cats, items } = normalizeData(filteredCats, filteredLinks);
    setCategories(cats);
    setLinks(items);
  };

  // LINK ACTIONS
  const addLink = (catId: string) => {
    const newId = Date.now().toString();
    const catLinks = links.filter(l => l.categoryId === catId);
    const newLink: FooterLink = {
      id: newId,
      categoryId: catId,
      title: 'New Link',
      url: '#',
      order: catLinks.length + 1,
      status: true,
    };
    setLinks(prev => [...prev, newLink]);
  };

  const updateLink = (id: string, updates: Partial<FooterLink>) => {
    setLinks(prev => {
      const updated = prev.map(l => l.id === id ? { ...l, ...updates } : l);
      const { items } = normalizeData(categories, updated);
      return items;
    });
  };

  const moveLink = (id: string, direction: 'up' | 'down') => {
    setLinks(prev => {
      const link = prev.find(l => l.id === id);
      if (!link) return prev;

      const catLinks = prev.filter(l => l.categoryId === link.categoryId).sort((a, b) => a.order - b.order);
      const index = catLinks.findIndex(l => l.id === id);

      if (direction === 'up' && index === 0) return prev;
      if (direction === 'down' && index === catLinks.length - 1) return prev;

      const targetIndex = direction === 'up' ? index - 1 : index + 1;
      const swappedCatLinks = [...catLinks];
      [swappedCatLinks[index], swappedCatLinks[targetIndex]] = [swappedCatLinks[targetIndex], swappedCatLinks[index]];

      // Update orders in the swapped set
      const updatedCatLinks = swappedCatLinks.map((l, i) => ({ ...l, order: i + 1 }));

      // Re-merge with other categories
      return [
        ...prev.filter(l => l.categoryId !== link.categoryId),
        ...updatedCatLinks
      ];
    });
  };

  const deleteLink = (id: string) => {
    setLinks(prev => {
      const { items } = normalizeData(categories, prev.filter(l => l.id !== id));
      return items;
    });
  };

  const handleSave = async () => {
    setIsSaving(true);
    try {
      await api.post('/content/footer', { categories, links });
      alert('Footer layout successfully deployed!');
    } catch (err) {
      console.error("Error saving footer", err);
      alert('Failed to deploy changes.');
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] space-y-4">
        <div className="w-12 h-12 border-4 border-[var(--color-7)]/20 border-t-[var(--color-7)] rounded-full animate-spin"></div>
        <p className="text-[var(--color-21)] font-bold animate-pulse uppercase tracking-widest text-xs">Loading Architecture...</p>
      </div>
    );
  }

  return (
    <div className="space-y-8 animate-in pb-20">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-[var(--color-16)] tracking-tight">Footer Architecture</h1>
          <p className="text-[var(--color-20)] font-medium">Coordinate dynamic navigation sections and hierarchical URL mapping.</p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={addCategory}
            className="flex items-center gap-2 bg-white border border-[var(--color-23)] text-[var(--color-18)] px-6 py-3 rounded-2xl font-black hover:bg-[var(--color-24)] transition-all shadow-sm"
          >
            <HiOutlineCollection size={20} /> New Section
          </button>
          <button
            onClick={handleSave}
            disabled={isSaving}
            className="flex items-center gap-2 bg-[var(--color-7)] text-white px-8 py-3 rounded-2xl font-black shadow-xl shadow-[var(--color-7)]/20 hover:scale-[1.02] active:scale-95 transition-all disabled:opacity-50"
          >
            {isSaving ? <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div> : <HiOutlineSave size={20} />}
            Deploy Changes
          </button>
        </div>
      </div>

      <div className="space-y-6">
        {categories.sort((a, b) => a.order - b.order).map((cat, idx) => (
          <div key={cat.id} className="transition-all duration-300">
            <div className="bg-white rounded-[2.5rem] border border-[var(--color-23)] shadow-sm overflow-hidden">
              {/* CATEGORY HEADER */}
              <div className="p-8 border-b border-[var(--color-23)] flex flex-col md:flex-row md:items-center justify-between gap-6 bg-[var(--color-14)]/50 group/header">
                <div className="flex items-center gap-4 flex-1">
                  <div className="flex flex-col gap-1 pr-2">
                    <button
                      onClick={() => moveCategory(cat.id, 'up')}
                      disabled={idx === 0}
                      className={`p-1 rounded-md transition-all ${idx === 0 ? 'text-[var(--color-23)]' : 'text-[var(--color-21)] hover:text-[var(--color-7)] hover:bg-white'}`}
                    >
                      <HiOutlineChevronUp size={20} />
                    </button>
                    <button
                      onClick={() => moveCategory(cat.id, 'down')}
                      disabled={idx === categories.length - 1}
                      className={`p-1 rounded-md transition-all ${idx === categories.length - 1 ? 'text-[var(--color-23)]' : 'text-[var(--color-21)] hover:text-[var(--color-7)] hover:bg-white'}`}
                    >
                      <HiOutlineChevronDown size={20} />
                    </button>
                  </div>
                  <div className="p-3 bg-white text-[var(--color-7)] rounded-2xl shadow-sm border border-[var(--color-23)]">
                    <HiOutlineViewBoards size={22} />
                  </div>
                  <div className="flex-1">
                    <input
                      type="text"
                      value={cat.title}
                      onChange={(e) => updateCategory(cat.id, e.target.value)}
                      className="bg-transparent border-none p-0 text-xl font-black text-[var(--color-16)] outline-none focus:ring-0 w-full"
                      placeholder="Section Title..."
                    />
                    <p className="text-[9px] font-black text-[var(--color-21)] uppercase tracking-[0.2em] mt-0.5">Section Identity • Column #{cat.order}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 self-end">
                  <button
                    onClick={() => addLink(cat.id)}
                    className="flex items-center gap-2 bg-white text-[var(--color-7)] px-4 py-2 rounded-xl text-xs font-black border border-[var(--color-23)] hover:border-[var(--color-7)] transition-all shadow-sm"
                  >
                    <HiOutlinePlus /> Add Link
                  </button>
                  <button
                    onClick={() => deleteCategory(cat.id)}
                    className="p-2.5 text-[var(--color-21)] hover:text-red-500 hover:bg-red-50 rounded-xl transition-all"
                    title="Delete Section"
                  >
                    <HiOutlineTrash size={20} />
                  </button>
                </div>
              </div>

              {/* LINKS LIST */}
              <div className="divide-y divide-[var(--color-23)]">
                {links
                  .filter(l => l.categoryId === cat.id)
                  .sort((a, b) => a.order - b.order)
                  .map((link, lIdx, arr) => (
                    <div
                      key={link.id}
                      className="p-6 flex flex-col md:flex-row gap-6 group hover:bg-[var(--color-25)] transition-all duration-300 relative"
                    >
                      <div className="flex flex-col gap-0.5 items-center justify-center pr-2">
                        <button
                          onClick={() => moveLink(link.id, 'up')}
                          disabled={lIdx === 0}
                          className={`p-1 rounded-md transition-all ${lIdx === 0 ? 'text-[var(--color-23)] opacity-0' : 'text-[var(--color-21)] hover:text-[var(--color-7)] hover:bg-white'}`}
                        >
                          <HiOutlineChevronUp size={16} />
                        </button>
                        <button
                          onClick={() => moveLink(link.id, 'down')}
                          disabled={lIdx === arr.length - 1}
                          className={`p-1 rounded-md transition-all ${lIdx === arr.length - 1 ? 'text-[var(--color-23)] opacity-0' : 'text-[var(--color-21)] hover:text-[var(--color-7)] hover:bg-white'}`}
                        >
                          <HiOutlineChevronDown size={16} />
                        </button>
                      </div>

                      <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <div>
                            <label className="text-[9px] font-black text-[var(--color-21)] uppercase tracking-wider mb-1.5 block">Label</label>
                            <input
                              type="text"
                              value={link.title}
                              onChange={e => updateLink(link.id, { title: e.target.value })}
                              className="w-full bg-transparent border-none p-0 text-base font-bold text-[var(--color-16)] outline-none focus:ring-0"
                            />
                          </div>
                          <div className="flex items-center gap-3">
                            <span className={`px-2 py-0.5 rounded text-[8px] font-black uppercase border ${link.status ? 'bg-green-50 text-green-600 border-green-100' : 'bg-gray-100 text-gray-500 border-gray-200'}`}>
                              {link.status ? 'Live' : 'Hidden'}
                            </span>
                            <span className="text-[9px] font-bold text-[var(--color-21)] tracking-tighter bg-[var(--color-24)] px-2 py-0.5 rounded">Rank {link.order}</span>
                          </div>
                        </div>

                        <div>
                          <label className="text-[9px] font-black text-[var(--color-21)] uppercase tracking-wider mb-1.5 block">Target URL</label>
                          <div className="flex items-center gap-2 bg-[var(--color-24)] px-4 py-2.5 rounded-2xl border border-[var(--color-23)] group-hover:bg-white transition-all">
                            <HiOutlineLink className="text-[var(--color-21)]" size={14} />
                            <input
                              type="text"
                              value={link.url}
                              onChange={e => updateLink(link.id, { url: e.target.value })}
                              className="bg-transparent border-none w-full text-xs font-bold text-[var(--color-18)] outline-none p-0 focus:ring-0"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 self-end md:self-center">
                        <div className="relative group/select">
                          <select
                            value={link.categoryId}
                            onChange={e => updateLink(link.id, { categoryId: e.target.value })}
                            className="appearance-none bg-[var(--color-24)] text-[10px] font-black px-4 py-2.5 pr-10 rounded-xl border border-[var(--color-23)] outline-none cursor-pointer group-hover:bg-white"
                          >
                            {categories.map(c => <option key={c.id} value={c.id}>{c.title}</option>)}
                          </select>
                          <HiOutlineChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--color-21)] pointer-events-none" size={14} />
                        </div>

                        <button
                          onClick={() => updateLink(link.id, { status: !link.status })}
                          className={`p-2.5 rounded-xl transition-all border ${link.status ? 'bg-[var(--color-13)] text-[var(--color-7)] border-[var(--color-11)]' : 'bg-[var(--color-24)] text-[var(--color-21)] border-[var(--color-23)]'}`}
                        >
                          <HiOutlineExternalLink size={18} />
                        </button>
                        <button
                          onClick={() => deleteLink(link.id)}
                          className="p-2.5 text-red-400 hover:text-red-600 opacity-0 group-hover:opacity-100 transition-all"
                        >
                          <HiOutlineTrash size={18} />
                        </button>
                      </div>
                    </div>
                  ))}

                {links.filter(l => l.categoryId === cat.id).length === 0 && (
                  <div className="p-16 text-center border-2 border-dashed border-[var(--color-23)] m-4 rounded-[1.5rem] bg-[var(--color-25)]/50">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4 border border-[var(--color-23)] shadow-sm">
                      <HiOutlinePlus className="text-[var(--color-22)]" size={20} />
                    </div>
                    <p className="text-[10px] font-black text-[var(--color-21)] uppercase tracking-widest">No links mapped to this column.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FooterManagement;
