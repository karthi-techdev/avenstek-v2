"use client";

import React, { useState, useEffect } from 'react';
import * as HiIcons from 'react-icons/hi';
import {
  HiOutlinePlus,
  HiOutlinePencilAlt,
  HiOutlineTrash,
  HiOutlineSearch,
  HiOutlineCube,
  HiOutlineGlobe,
  HiOutlineSave
} from 'react-icons/hi';
import api from '@/lib/api';

interface Service {
  _id?: string;
  id?: number;
  title: string;
  subtext: string;
  iconName: string;
  isFeatured: boolean;
}

interface SEOData {
  title: string;
  description: string;
  keywords: string;
}

import { IconRenderer, IconPickerModal } from '../components/IconPicker';

const ServicesManagement: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'list' | 'seo'>('list');
  const [isSaving, setIsSaving] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [iconPickerTargetId, setIconPickerTargetId] = useState<string | number | null>(null);

  const [services, setServices] = useState<Service[]>([]);
  const [seo, setSeo] = useState<SEOData>({
    title: "",
    description: "",
    keywords: ""
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await api.get('/content/services');
        if (data.services) setServices(data.services);
        if (data.seo) setSeo(data.seo);
      } catch (err) {
        console.error("Error fetching services", err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const updateService = (id: string | number, updates: Partial<Service>) => {
    setServices(services.map(s => (s._id === id || s.id === id) ? { ...s, ...updates } : s));
  };

  const handleSeoChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setSeo(prev => ({ ...prev, [name]: value }));
  };

  const addService = () => {
    setServices([...services, {
      id: Date.now(),
      title: 'New Service Offering',
      subtext: 'Description of the new service goes here.',
      iconName: 'HiOutlineCube',
      isFeatured: false
    }]);
  };

  const handleSave = async () => {
    setIsSaving(true);
    try {
      await api.post('/content/services', { services, seo });
      alert('Services configuration updated and published!');
    } catch (err) {
      console.error("Error saving services", err);
      alert('Failed to save changes.');
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) return <div className="p-10 text-center text-sm font-bold text-[var(--color-20)]">Loading Services...</div>;

  return (
    <div className="space-y-6 animate-in slide-in-from-right-4 duration-500 pb-10">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-[var(--color-16)]">Services Management</h1>
          <p className="text-[var(--color-20)]">Define core offerings and optimize their search visibility.</p>
        </div>
        <button
          onClick={handleSave}
          disabled={isSaving}
          className="flex items-center gap-2 bg-[var(--color-7)] text-white px-5 py-2.5 rounded-xl font-bold shadow-lg shadow-[var(--color-7)]/20 hover:scale-[1.02] active:scale-95 transition-all disabled:opacity-50"
        >
          {isSaving ? <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div> : <HiOutlineSave size={20} />}
          {isSaving ? 'Saving...' : 'Save All Changes'}
        </button>
      </div>

      <div className="flex border-b border-[var(--color-23)]">
        {(['list', 'seo'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-3 text-sm font-semibold transition-all border-b-2 whitespace-nowrap ${activeTab === tab
              ? 'border-[var(--color-7)] text-[var(--color-7)]'
              : 'border-transparent text-[var(--color-20)] hover:text-[var(--color-16)]'
              }`}
          >
            {tab === 'list' ? 'Services List' : 'SEO Settings'}
          </button>
        ))}
      </div>

      {activeTab === 'list' && (
        <div className="space-y-6">
          <div className="bg-white p-4 rounded-2xl border border-[var(--color-23)] shadow-sm flex flex-col md:flex-row items-center gap-3">
            <div className="flex items-center gap-3 bg-[var(--color-24)] px-4 py-2 rounded-xl flex-1 w-full">
              <HiOutlineSearch className="text-[var(--color-21)]" size={20} />
              <input
                placeholder="Search services..."
                className="bg-transparent border-none outline-none text-sm w-full focus:ring-0"
              />
            </div>
            <button
              onClick={addService}
              className="w-full md:w-auto flex items-center justify-center gap-2 bg-[var(--color-13)] text-[var(--color-7)] px-5 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap hover:bg-[var(--color-12)] transition-colors"
            >
              <HiOutlinePlus /> Add New Service
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div key={service._id || service.id} className="bg-white rounded-3xl border border-[var(--color-23)] p-6 shadow-sm flex flex-col space-y-4 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start">
                  <button
                    onClick={() => setIconPickerTargetId(service._id || service.id || null)}
                    className="w-12 h-12 bg-[var(--color-13)] text-[var(--color-7)] rounded-2xl flex items-center justify-center border border-[var(--color-12)] hover:scale-105 transition-transform cursor-pointer relative group/icon"
                  >
                    <IconRenderer name={service.iconName} />
                    <div className="absolute inset-0 bg-black/10 rounded-2xl opacity-0 group-hover/icon:opacity-100 flex items-center justify-center transition-opacity">
                      <span className="text-[8px] font-black text-black/60 uppercase">Edit</span>
                    </div>
                  </button>
                  <button
                    onClick={() => updateService((service._id || service.id)!, { isFeatured: !service.isFeatured })}
                    className={`px-3 py-1.5 rounded-xl text-[10px] font-black uppercase transition-all active:scale-90 ${service.isFeatured
                      ? 'bg-[var(--color-13)] text-[var(--color-7)]'
                      : 'bg-[var(--color-24)] text-[var(--color-21)]'
                      }`}
                  >
                    {service.isFeatured ? 'Active' : 'Inactive'}
                  </button>
                </div>

                <div className="space-y-3">
                  <input
                    type="text"
                    value={service.title}
                    onChange={e => updateService((service._id || service.id)!, { title: e.target.value })}
                    className="w-full bg-transparent border-none font-bold text-[var(--color-16)] p-0 text-lg outline-none focus:ring-0"
                  />
                  <textarea
                    value={service.subtext}
                    onChange={e => updateService((service._id || service.id)!, { subtext: e.target.value })}
                    rows={2}
                    className="w-full bg-transparent border-none text-sm text-[var(--color-20)] p-0 outline-none resize-none leading-relaxed focus:ring-0"
                  />
                </div>

                <div className="pt-4 border-t border-[var(--color-23)] space-y-3">
                  <div className="flex justify-between pt-2">
                    <button className="text-xs font-bold text-[var(--color-7)] flex items-center gap-1 hover:underline"><HiOutlinePencilAlt /> Details</button>
                    <button
                      onClick={() => setServices(prev => prev.filter(s => (s._id || s.id) !== (service._id || service.id)))}
                      className="text-xs font-bold text-[var(--color-27)] flex items-center gap-1 hover:underline"
                    >
                      <HiOutlineTrash /> Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'seo' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="bg-white p-6 rounded-2xl border border-[var(--color-23)] space-y-6 shadow-sm">
            <h3 className="text-lg font-bold text-[var(--color-16)] border-b pb-4">Services SEO Meta Settings</h3>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-[var(--color-19)] mb-1.5 capitalize">SEO Title</label>
                <input
                  type="text"
                  name="title"
                  value={seo.title}
                  onChange={handleSeoChange}
                  className="w-full px-4 py-2.5 rounded-xl border border-[var(--color-23)] bg-[var(--color-24)] text-sm focus:ring-2 focus:ring-[var(--color-11)] outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[var(--color-19)] mb-1.5 capitalize">SEO Description</label>
                <textarea
                  name="description"
                  value={seo.description}
                  onChange={handleSeoChange}
                  rows={4}
                  className="w-full px-4 py-2.5 rounded-xl border border-[var(--color-23)] bg-[var(--color-24)] text-sm focus:ring-2 focus:ring-[var(--color-11)] outline-none resize-none transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[var(--color-19)] mb-1.5 capitalize">SEO Keywords</label>
                <input
                  type="text"
                  name="keywords"
                  value={seo.keywords}
                  onChange={handleSeoChange}
                  className="w-full px-4 py-2.5 rounded-xl border border-[var(--color-23)] bg-[var(--color-24)] text-sm focus:ring-2 focus:ring-[var(--color-11)] outline-none transition-all"
                />
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-[var(--color-23)] space-y-4 shadow-sm">
            <h4 className="text-xs font-bold text-[var(--color-21)] uppercase flex items-center gap-2 tracking-wider">
              <HiOutlineSearch /> Google Search Preview
            </h4>
            <div className="space-y-1.5 pt-2">
              <div className="flex items-center gap-1.5 text-xs text-[#202124]">
                <HiOutlineGlobe size={14} className="text-[var(--color-20)]" />
                <span>avenstek.com › services</span>
              </div>
              <h3 className="text-xl text-[#1a0dab] font-medium hover:underline cursor-pointer truncate">
                {seo.title || "Your Page Title"}
              </h3>
              <p className="text-sm text-[#4d5156] leading-relaxed line-clamp-3">
                {seo.description || "Enter an SEO description to see how it looks in search results."}
              </p>
            </div>

            <div className="mt-6 p-4 bg-[var(--color-13)] rounded-xl border border-[var(--color-11)]">
              <p className="text-xs font-bold text-[var(--color-7)]">SEO Optimization Tip</p>
              <p className="text-[10px] text-[var(--color-19)] mt-1 leading-relaxed">
                Ensure your primary keyword appears within the first 60 characters of the title and the first 120 characters of the description for best ranking results.
              </p>
            </div>
          </div>
        </div>
      )}
      <IconPickerModal
        isOpen={!!iconPickerTargetId}
        onClose={() => setIconPickerTargetId(null)}
        onSelect={(iconName) => {
          if (iconPickerTargetId) {
            updateService(iconPickerTargetId, { iconName });
          }
        }}
      />
    </div>
  );
};

export default ServicesManagement;
