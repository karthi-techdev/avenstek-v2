"use client";

import React, { useState } from 'react';
import { HiOutlineTrash, HiOutlinePhotograph, HiOutlinePlus } from 'react-icons/hi';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  text: string;
  photo: string;
  isActive: boolean;
}

const TestimonialsManagement: React.FC = () => {
  const [items, setItems] = useState<Testimonial[]>([
    { 
      id: 1, 
      name: 'Jessica Chen', 
      position: 'CTO', 
      company: 'TechFlow', 
      text: 'Working with Lumina transformed our development speed.', 
      photo: 'https://i.pravatar.cc/150?u=jess', 
      isActive: true 
    },
    { 
      id: 2, 
      name: 'Marcus Miller', 
      position: 'Product Lead', 
      company: 'SwiftPay', 
      text: 'The attention to detail is unparalleled.', 
      photo: 'https://i.pravatar.cc/150?u=marcus', 
      isActive: true 
    },
  ]);

  const updateTestimonial = (id: number, updates: Partial<Testimonial>) => {
    setItems(items.map(i => i.id === id ? { ...i, ...updates } : i));
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

  return (
    <div className="space-y-6 animate-in slide-in-from-bottom-4 duration-500 pb-10">
      {/* Header Section */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[var(--color-16)]">Testimonials Management</h1>
          <p className="text-[var(--color-20)]">Manage social proof with client reviews and photos.</p>
        </div>
        <button 
          onClick={addItem} 
          className="bg-[var(--color-7)] text-white p-2.5 rounded-xl shadow-lg hover:scale-110 active:scale-95 transition-all"
        >
          <HiOutlinePlus size={24} />
        </button>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {items.map((item) => (
          <div 
            key={item.id} 
            className="bg-white rounded-3xl border border-[var(--color-23)] p-6 shadow-sm flex flex-col sm:flex-row gap-6 hover:border-[var(--color-7)] transition-all"
          >
            {/* Avatar & Photo Action */}
            <div className="flex-shrink-0 flex flex-col items-center gap-4">
              <div className="relative">
                <img 
                  src={item.photo} 
                  className="w-20 h-20 rounded-2xl object-cover ring-4 ring-[var(--color-24)]" 
                  alt={item.name} 
                />
              </div>
              <button className="text-[var(--color-20)] hover:text-[var(--color-7)] p-2 bg-[var(--color-24)] rounded-lg transition-colors">
                <HiOutlinePhotograph size={16} />
              </button>
            </div>

            {/* Content & Inputs */}
            <div className="flex-1 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex-1 mr-4">
                  <input 
                    type="text" 
                    value={item.name} 
                    onChange={e => updateTestimonial(item.id, { name: e.target.value })} 
                    className="block w-full bg-transparent border-none font-bold text-[var(--color-16)] p-0 text-base outline-none focus:ring-0" 
                  />
                  <input 
                    type="text" 
                    value={`${item.position} @ ${item.company}`} 
                    onChange={e => {
                      const parts = e.target.value.split(' @ ');
                      const pos = parts[0] || '';
                      const comp = parts[1] || '';
                      updateTestimonial(item.id, { position: pos, company: comp });
                    }} 
                    className="block w-full bg-transparent border-none text-[10px] text-[var(--color-21)] font-bold uppercase p-0 outline-none focus:ring-0" 
                  />
                </div>
                
                {/* Active Toggle */}
                <button 
                  onClick={() => updateTestimonial(item.id, { isActive: !item.isActive })}
                  className={`px-3 py-1.5 rounded-xl text-[10px] font-black uppercase transition-all active:scale-90 ${
                    item.isActive 
                      ? 'bg-[var(--color-13)] text-[var(--color-7)]' 
                      : 'bg-[var(--color-24)] text-[var(--color-21)]'
                  }`}
                >
                  {item.isActive ? 'Active' : 'Inactive'}
                </button>
              </div>
              
              <textarea 
                value={item.text} 
                onChange={e => updateTestimonial(item.id, { text: e.target.value })} 
                className="w-full bg-transparent border-none text-sm text-[var(--color-19)] italic leading-relaxed p-0 outline-none resize-none focus:ring-0" 
                rows={3} 
              />
              
              <div className="pt-4 border-t border-dashed border-[var(--color-23)] flex flex-col sm:flex-row items-center justify-end gap-4">
                <button 
                  onClick={() => setItems(prev => prev.filter(i => i.id !== item.id))} 
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