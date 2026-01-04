"use client";

import React, { useState } from 'react';
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

interface Service {
  id: number;
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

/**
 * IconRenderer allows looking up icons from react-icons/hi via string names
 * stored in the database.
 */
const IconRenderer = ({ name, size = 24 }: { name: string; size?: number }) => {
  const IconComponent = (HiIcons as any)[name] || HiOutlineCube;
  return <IconComponent size={size} />;
};

const ServicesManagement: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'list' | 'seo'>('list');
  const [isSaving, setIsSaving] = useState(false);
  
  // --- Services State ---
  const [services, setServices] = useState<Service[]>([
    { id: 1, title: 'Web Development', subtext: 'Modern high-performance web applications built with React.', iconName: 'HiOutlineCode', isFeatured: true },
    { id: 2, title: 'Mobile Solutions', subtext: 'Cross-platform mobile apps for iOS and Android.', iconName: 'HiOutlineDeviceMobile', isFeatured: true },
    { id: 3, title: 'UI/UX Design', subtext: 'Stunning user interfaces and seamless experiences.', iconName: 'HiOutlineColorSwatch', isFeatured: false },
  ]);

  // --- SEO State ---
  const [seo, setSeo] = useState<SEOData>({
    title: "Our Professional Services | Lumina Engineering",
    description: "Explore our wide range of digital services including web development, mobile apps, and cloud infrastructure.",
    keywords: "services, web dev, mobile apps, tech solutions"
  });

  // --- Handlers ---
  const updateService = (id: number, updates: Partial<Service>) => {
    setServices(services.map(s => s.id === id ? { ...s, ...updates } : s));
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
    // Simulation of API Call
    await new Promise(r => setTimeout(r, 600));
    setIsSaving(false);
    alert('Services configuration updated!');
  };

  return (
    <div className="space-y-6 animate-in slide-in-from-right-4 duration-500 pb-10">
      {/* Page Header */}
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

      {/* Tabs Navigation */}
      <div className="flex border-b border-[var(--color-23)]">
        {(['list', 'seo'] as const).map((tab) => (
          <button 
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-3 text-sm font-semibold transition-all border-b-2 whitespace-nowrap ${
              activeTab === tab 
                ? 'border-[var(--color-7)] text-[var(--color-7)]' 
                : 'border-transparent text-[var(--color-20)] hover:text-[var(--color-16)]'
            }`}
          >
            {tab === 'list' ? 'Services List' : 'SEO Settings'}
          </button>
        ))}
      </div>

      {/* Content: Services List */}
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
              <div key={service.id} className="bg-white rounded-3xl border border-[var(--color-23)] p-6 shadow-sm flex flex-col space-y-4 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start">
                  <div className="w-12 h-12 bg-[var(--color-13)] text-[var(--color-7)] rounded-2xl flex items-center justify-center border border-[var(--color-12)]">
                    <IconRenderer name={service.iconName} />
                  </div>
                  <button 
                    onClick={() => updateService(service.id, { isFeatured: !service.isFeatured })}
                    className={`px-3 py-1.5 rounded-xl text-[10px] font-black uppercase transition-all active:scale-90 ${
                      service.isFeatured 
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
                    onChange={e => updateService(service.id, { title: e.target.value })} 
                    className="w-full bg-transparent border-none font-bold text-[var(--color-16)] p-0 text-lg outline-none focus:ring-0" 
                  />
                  <textarea 
                    value={service.subtext} 
                    onChange={e => updateService(service.id, { subtext: e.target.value })} 
                    rows={2} 
                    className="w-full bg-transparent border-none text-sm text-[var(--color-20)] p-0 outline-none resize-none leading-relaxed focus:ring-0" 
                  />
                </div>

                <div className="pt-4 border-t border-[var(--color-23)] space-y-3">
                  <div>
                    <label className="text-[10px] font-bold text-[var(--color-21)] uppercase tracking-wider">Icon Name (HiOutline...)</label>
                    <input 
                      type="text" 
                      value={service.iconName} 
                      onChange={e => updateService(service.id, { iconName: e.target.value })} 
                      className="w-full bg-[var(--color-24)] border border-[var(--color-23)] rounded-lg px-3 py-1.5 text-xs outline-none focus:ring-2 focus:ring-[var(--color-11)] transition-all" 
                    />
                  </div>
                  <div className="flex justify-between pt-2">
                    <button className="text-xs font-bold text-[var(--color-7)] flex items-center gap-1 hover:underline"><HiOutlinePencilAlt /> Details</button>
                    <button 
                      onClick={() => setServices(prev => prev.filter(s => s.id !== service.id))} 
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

      {/* Content: SEO Tab */}
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
                <span>lumina.com › services</span>
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
    </div>
  );
};

export default ServicesManagement;