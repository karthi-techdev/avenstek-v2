"use client";

import React, { useState, useEffect } from 'react';
import { HiOutlineTrash, HiOutlinePhotograph, HiOutlinePlus, HiOutlineSave } from 'react-icons/hi';
import api from '@/lib/api';

interface Testimonial {
  _id?: string;
  id?: number;
  name: string;
  position: string;
  company: string;
  text: string;
  photo: string;
  isActive: boolean;
}

const TestimonialsManagement: React.FC = () => {
  const [items, setItems] = useState<Testimonial[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const { data } = await api.get('/content/testimonials');
        setItems(data);
      } catch (err) {
        console.error("Error fetching testimonials", err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchTestimonials();
  }, []);

  const updateTestimonial = (id: string | number, updates: Partial<Testimonial>) => {
    setItems(items.map(i => (i._id === id || i.id === id) ? { ...i, ...updates } : i));
  };

  const addItem = () => {
    setItems([...items, {
      id: Date.now(),
      name: 'Client Name',
      position: 'Role',
      company: 'Company',
      text: 'Great feedback goes here.',
      photo: `https://i.pravatar.cc/150?u=${Date.now()}`,
      isActive: false
    }]);
  };

  const handleSave = async () => {
    setIsSaving(true);
    try {
      await api.post('/content/testimonials', items);
      alert('Testimonials configuration updated!');
      const { data } = await api.get('/content/testimonials');
      setItems(data);
    } catch (err) {
      console.error("Error saving testimonials", err);
      alert('Failed to save testimonials.');
    } finally {
      setIsSaving(false);
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>, id: string | number) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('image', file);

    try {
      const { data } = await api.post('/content/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      updateTestimonial(id, { photo: data.url });
    } catch (err) {
      console.error("Upload failed", err);
    }
  };

  if (isLoading) return <div className="p-10 text-center text-sm font-bold text-[var(--color-20)]">Loading Testimonials...</div>;

  return (
    <div className="space-y-6 animate-in slide-in-from-bottom-4 duration-500 pb-10">
      {/* Header Section */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[var(--color-16)]">Testimonials Management</h1>
          <p className="text-[var(--color-20)]">Manage social proof with client reviews and photos.</p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={addItem}
            className="bg-[var(--color-13)] text-[var(--color-7)] p-2.5 rounded-xl shadow-lg hover:scale-110 active:scale-95 transition-all"
          >
            <HiOutlinePlus size={24} />
          </button>
          <button
            onClick={handleSave}
            disabled={isSaving}
            className="bg-[var(--color-7)] text-white px-5 py-2.5 rounded-xl font-bold shadow-lg shadow-[var(--color-7)]/20 hover:scale-[1.02] active:scale-95 transition-all disabled:opacity-50 flex items-center gap-2"
          >
            {isSaving ? <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div> : <HiOutlineSave size={20} />}
            {isSaving ? 'Saving...' : 'Save All Changes'}
          </button>
        </div>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {items.map((item) => (
          <div
            key={item._id || item.id}
            className="bg-white rounded-3xl border border-[var(--color-23)] p-6 shadow-sm flex flex-col sm:flex-row gap-6 hover:border-[var(--color-7)] transition-all"
          >
            {/* Avatar & Photo Action */}
            <div className="flex-shrink-0 flex flex-col items-center gap-4">
              <div className="relative">
                <img
                  src={item.photo.startsWith('/') ? `http://localhost:5000${item.photo}` : item.photo}
                  className="w-20 h-20 rounded-2xl object-cover ring-4 ring-[var(--color-24)]"
                  alt={item.name}
                />
              </div>
              <label className="text-[var(--color-20)] hover:text-[var(--color-7)] p-2 bg-[var(--color-24)] rounded-lg transition-colors cursor-pointer">
                <HiOutlinePhotograph size={16} />
                <input type="file" className="hidden" onChange={(e) => handleImageUpload(e, (item._id || item.id)!)} />
              </label>
            </div>

            {/* Content & Inputs */}
            <div className="flex-1 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex-1 mr-4">
                  <input
                    type="text"
                    value={item.name}
                    onChange={e => updateTestimonial((item._id || item.id)!, { name: e.target.value })}
                    className="block w-full bg-transparent border-none font-bold text-[var(--color-16)] p-0 text-base outline-none focus:ring-0"
                  />
                  <div className="flex items-center gap-1 group">
                    <input
                      type="text"
                      placeholder="Position"
                      value={item.position}
                      onChange={e => updateTestimonial((item._id || item.id)!, { position: e.target.value })}
                      className="inline-block bg-transparent border-none text-[10px] text-[var(--color-21)] font-bold uppercase p-0 outline-none focus:ring-0 w-24"
                    />
                    <span className="text-[10px] text-[var(--color-21)] font-bold uppercase">@</span>
                    <input
                      type="text"
                      placeholder="Company"
                      value={item.company}
                      onChange={e => updateTestimonial((item._id || item.id)!, { company: e.target.value })}
                      className="inline-block bg-transparent border-none text-[10px] text-[var(--color-21)] font-bold uppercase p-0 outline-none focus:ring-0 w-24"
                    />
                  </div>
                </div>

                {/* Active Toggle */}
                <button
                  onClick={() => updateTestimonial((item._id || item.id)!, { isActive: !item.isActive })}
                  className={`px-3 py-1.5 rounded-xl text-[10px] font-black uppercase transition-all active:scale-90 ${item.isActive
                      ? 'bg-[var(--color-13)] text-[var(--color-7)]'
                      : 'bg-[var(--color-24)] text-[var(--color-21)]'
                    }`}
                >
                  {item.isActive ? 'Active' : 'Inactive'}
                </button>
              </div>

              <textarea
                value={item.text}
                onChange={e => updateTestimonial((item._id || item.id)!, { text: e.target.value })}
                className="w-full bg-transparent border-none text-sm text-[var(--color-19)] italic leading-relaxed p-0 outline-none resize-none focus:ring-0"
                rows={3}
              />

              <div className="pt-4 border-t border-dashed border-[var(--color-23)] flex flex-col sm:flex-row items-center justify-end gap-4">
                <button
                  onClick={() => setItems(prev => prev.filter(i => (i._id || i.id) !== (item._id || item.id)))}
                  className="text-xs font-bold text-[var(--color-27)] flex items-center gap-1 hover:underline transition-all"
                >
                  <HiOutlineTrash size={14} /> Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsManagement;