"use client";

import React, { useState } from 'react';
import { HiOutlinePlus, HiOutlineTrash } from 'react-icons/hi';

interface FAQ {
  id: number;
  question: string;
  answer: string;
  isActive: boolean;
}

const FAQManagement: React.FC = () => {
  const [faqs, setFaqs] = useState<FAQ[]>([
    { 
      id: 1, 
      question: 'What technologies do you specialize in?', 
      answer: 'We specialize in React, Node.js, and TypeScript.', 
      isActive: true 
    },
    { 
      id: 2, 
      question: 'How long does a typical project take?', 
      answer: 'Most MVPs take 4-8 weeks.', 
      isActive: true 
    },
  ]);

  const updateFaq = (id: number, updates: Partial<FAQ>) => {
    setFaqs(faqs.map(f => f.id === id ? { ...f, ...updates } : f));
  };

  const addFaq = () => {
    setFaqs([...faqs, {
      id: Date.now(),
      question: 'New Question?',
      answer: 'Update the answer text here.',
      isActive: true
    }]);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-500 pb-10">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-[var(--color-16)]">FAQs Management</h1>
          <p className="text-[var(--color-20)]">Control help center content and documentation questions.</p>
        </div>
        <button 
          onClick={addFaq} 
          className="flex items-center gap-2 bg-[var(--color-7)] text-white px-5 py-2.5 rounded-xl font-bold shadow-lg shadow-[var(--color-7)]/20 hover:scale-[1.02] active:scale-95 transition-all"
        >
          <HiOutlinePlus size={20} /> New FAQ
        </button>
      </div>

      {/* FAQs Container */}
      <div className="bg-white rounded-3xl border border-[var(--color-23)] shadow-sm overflow-hidden">
        <div className="divide-y divide-[var(--color-23)]">
          {faqs.map((faq) => (
            <div 
              key={faq.id} 
              className={`p-8 hover:bg-[var(--color-25)] transition-colors flex flex-col gap-6 ${
                !faq.isActive ? 'opacity-60' : ''
              }`}
            >
              <div className="flex-1 space-y-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1 space-y-2">
                    <input 
                      type="text" 
                      value={faq.question} 
                      onChange={e => updateFaq(faq.id, { question: e.target.value })} 
                      className="w-full bg-transparent border-none font-bold text-[var(--color-16)] p-0 text-lg outline-none focus:ring-0" 
                      placeholder="Enter question..."
                    />
                    <textarea 
                      value={faq.answer} 
                      onChange={e => updateFaq(faq.id, { answer: e.target.value })} 
                      className="w-full bg-transparent border-none text-sm text-[var(--color-20)] p-0 outline-none resize-none leading-relaxed focus:ring-0" 
                      rows={2}
                      placeholder="Enter answer..."
                    />
                  </div>
                </div>
                
                {/* Actions Footer */}
                <div className="flex items-center justify-end gap-4 pt-4 border-t border-dashed border-[var(--color-23)]">
                  <div className="flex items-center gap-4">
                    <button 
                      onClick={() => updateFaq(faq.id, { isActive: !faq.isActive })}
                      className={`px-4 py-1.5 rounded-xl text-[10px] font-black uppercase transition-all shadow-sm active:scale-90 ${
                        faq.isActive 
                          ? 'bg-[var(--color-13)] text-[var(--color-7)]' 
                          : 'bg-[var(--color-24)] text-[var(--color-21)]'
                      }`}
                    >
                      {faq.isActive ? 'Active' : 'Inactive'}
                    </button>
                    <button 
                      onClick={() => setFaqs(prev => prev.filter(f => f.id !== faq.id))} 
                      className="p-2 text-[var(--color-21)] hover:text-[var(--color-27)] transition-colors active:scale-90"
                      title="Delete FAQ"
                    >
                      <HiOutlineTrash size={22} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {faqs.length === 0 && (
          <div className="p-20 text-center text-[var(--color-21)]">
            <div className="mb-4 flex justify-center opacity-20">
               <HiOutlinePlus size={48} />
            </div>
            <p className="font-medium text-lg text-[var(--color-20)]">No FAQs found</p>
            <p className="text-sm">Click the "New FAQ" button to start building your knowledge base.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FAQManagement;