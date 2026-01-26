"use client"
import React, { useState, useEffect } from 'react';
import * as HiIcons from 'react-icons/hi';
import {
  HiOutlineSave, HiOutlinePlus, HiOutlineTrash, HiOutlineCheckCircle,
  HiOutlineSearch, HiOutlineGlobe, HiOutlineCube
} from 'react-icons/hi';
import api from '@/lib/api';
import LoadingScreen from '../components/LoadingScreen';

interface HeroData {
  heroTitle: string;
  highlightedText: string;
  heroSubtitle: string;
}

interface Specialization {
  id?: string;
  _id?: string;
  title: string;
  iconName: string;
  order: number;
  isActive: boolean;
}

interface SEOData {
  title: string;
  description: string;
  keywords: string;
}

import { IconRenderer, IconPickerModal } from '../components/IconPicker';

import { useToast } from '../components/Toast';

const HomeManagement: React.FC = () => {
  const { showToast } = useToast();
  const [activeTab, setActiveTab] = useState<'hero' | 'specializations' | 'seo'>('hero');
  const [isSaving, setIsSaving] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [iconPickerTargetId, setIconPickerTargetId] = useState<string | number | null>(null);

  const [hero, setHero] = useState<HeroData>({
    heroTitle: "",
    highlightedText: "",
    heroSubtitle: ""
  });

  const [specializations, setSpecializations] = useState<Specialization[]>([]);

  const [seo, setSeo] = useState<SEOData>({
    title: "",
    description: "",
    keywords: ""
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await api.get('/content/home');
        if (data.hero) setHero(data.hero);
        if (data.specializations) setSpecializations(data.specializations);
        if (data.seo) setSeo(data.seo);
      } catch (err) {
        console.error("Error fetching home data", err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleHeroChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setHero(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSeoChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setSeo(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const updateSpec = (id: string, updates: Partial<Specialization>) => {
    setSpecializations(prev => prev.map(s => (s._id === id || s.id === id) ? { ...s, ...updates } : s));
  };

  const addSpec = () => {
    if (specializations.length >= 3) return;
    setSpecializations([...specializations, {
      id: Date.now().toString(),
      title: 'New Service',
      iconName: 'HiOutlineCube',
      order: specializations.length + 1,
      isActive: true
    }]);
  };

  const handleSave = async () => {
    setIsSaving(true);
    try {
      await api.post('/content/home', { hero, specializations, seo });
      showToast('success', 'Home Page Updated', 'Changes have been published successfully.');
    } catch (err) {
      console.error("Error saving home data", err);
      showToast('error', 'Update Failed', 'Failed to update Home Page.');
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) return <LoadingScreen text="Loading Content" />;

  return (
    <div className="space-y-6 animate-in fade-in duration-500 pb-10">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-2xl font-bold text-[var(--color-16)]">Home Page Management</h1>
          <p className="text-[var(--color-20)]">Manage landing page content and SEO.</p>
        </div>
        <button onClick={handleSave} disabled={isSaving} className="flex items-center gap-2 bg-[var(--color-7)] text-white px-6 py-2.5 rounded-xl font-bold shadow-lg shadow-[var(--color-7)]/20 hover:scale-[1.02] disabled:opacity-50 transition-all">
          {isSaving ? <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div> : <HiOutlineSave size={20} />}
          Save Changes
        </button>
      </div>

      <div className="flex border-b border-[var(--color-23)]">
        {(['hero', 'specializations', 'seo'] as const).map(tab => (
          <button key={tab} onClick={() => setActiveTab(tab)} className={`px-6 py-3 text-sm font-semibold transition-all border-b-2 capitalize ${activeTab === tab ? 'border-[var(--color-7)] text-[var(--color-7)]' : 'border-transparent text-[var(--color-20)] hover:text-[var(--color-16)]'}`}>
            {tab}
          </button>
        ))}
      </div>

      {activeTab === 'hero' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-2xl border border-[var(--color-23)] space-y-4">
            <h3 className="text-lg font-bold text-[var(--color-16)] border-b pb-4">Hero Editor</h3>
            {Object.entries(hero).map(([key, val]) => (
              <div key={key}>
                <label className="block text-sm font-semibold text-[var(--color-19)] mb-1.5 capitalize">{key.replace(/([A-Z])/g, ' $1')}</label>
                {key === 'heroSubtitle' ? (
                  <textarea name={key} value={val} onChange={handleHeroChange} rows={3} className="w-full px-4 py-2.5 rounded-xl border border-[var(--color-23)] bg-[var(--color-24)] text-sm focus:ring-2 focus:ring-[var(--color-11)] outline-none" />
                ) : (
                  <input type="text" name={key} value={val} onChange={handleHeroChange} className="w-full px-4 py-2.5 rounded-xl border border-[var(--color-23)] bg-[var(--color-24)] text-sm focus:ring-2 focus:ring-[var(--color-11)] outline-none" />
                )}
              </div>
            ))}
          </div>
          <div className="bg-[var(--color-16)] p-8 rounded-3xl text-white flex flex-col justify-center text-center space-y-4 h-[400px]">
            <h2 className="text-4xl font-bold">{hero.heroTitle} <span className="text-[var(--color-8)]">{hero.highlightedText}</span></h2>
            <p className="text-[var(--color-21)] text-sm">{hero.heroSubtitle}</p>
          </div>
        </div>
      )}

      {activeTab === 'specializations' && (
        <div className="bg-white p-6 rounded-2xl border border-[var(--color-23)]">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-bold text-[var(--color-16)]">Specializations (Max 3)</h3>
            <button onClick={addSpec} disabled={specializations.length >= 3} className="flex items-center gap-2 text-sm font-bold bg-[var(--color-13)] text-[var(--color-7)] px-4 py-2 rounded-xl disabled:opacity-50">
              <HiOutlinePlus /> Add New
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {specializations.map(spec => (
              <div key={spec._id || spec.id} className="p-5 border border-[var(--color-23)] rounded-2xl bg-[var(--color-25)] space-y-4">
                <div className="flex justify-between items-start">
                  <button
                    onClick={() => setIconPickerTargetId(spec._id || spec.id || null)}
                    className="p-3 bg-white rounded-xl border border-[var(--color-23)] text-[var(--color-7)] hover:scale-105 transition-transform cursor-pointer relative group/icon"
                  >
                    <IconRenderer name={spec.iconName} />
                  </button>
                  <button onClick={() => updateSpec((spec._id || spec.id)!, { isActive: !spec.isActive })} className={`text-[10px] font-black uppercase px-2 py-1 rounded-lg ${spec.isActive ? 'bg-green-100 text-green-600' : 'bg-gray-200 text-gray-500'}`}>
                    {spec.isActive ? 'Active' : 'Hidden'}
                  </button>
                </div>
                <div>
                  <label className="text-[10px] font-bold text-[var(--color-21)] uppercase">Display Title</label>
                  <input type="text" value={spec.title} onChange={e => updateSpec((spec._id || spec.id)!, { title: e.target.value })} className="w-full bg-transparent border-none font-bold text-[var(--color-16)] focus:ring-0 p-0" />
                </div>
                <button onClick={() => setSpecializations(prev => prev.filter(s => (s._id || s.id) !== (spec._id || spec.id)))} className="text-[var(--color-27)] hover:underline text-xs font-bold pt-2 border-t w-full flex items-center gap-1 justify-center">
                  <HiOutlineTrash /> Remove
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'seo' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-2xl border border-[var(--color-23)] space-y-4">
            <h3 className="text-lg font-bold text-[var(--color-16)] border-b pb-4">SEO Settings</h3>
            {Object.entries(seo).map(([key, val]) => (
              <div key={key}>
                <label className="block text-sm font-semibold text-[var(--color-19)] mb-1.5 capitalize">{key}</label>
                {key === 'description' ? (
                  <textarea name={key} value={val} onChange={handleSeoChange} rows={3} className="w-full px-4 py-2.5 rounded-xl border border-[var(--color-23)] bg-[var(--color-24)] text-sm focus:ring-2 focus:ring-[var(--color-11)] outline-none" />
                ) : (
                  <input type="text" name={key} value={val} onChange={handleSeoChange} className="w-full px-4 py-2.5 rounded-xl border border-[var(--color-23)] bg-[var(--color-24)] text-sm focus:ring-2 focus:ring-[var(--color-11)] outline-none" />
                )}
              </div>
            ))}
          </div>
          <div className="bg-white p-6 rounded-2xl border border-[var(--color-23)] space-y-6 shadow-sm min-h-[400px]">
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
                    <span className="text-[12px] text-[#4d5156] leading-tight">https://avenstek.com</span>
                  </div>
                </div>
                <h3 className="text-[20px] text-[#1a0dab] font-medium leading-tight hover:underline cursor-pointer mt-1">
                  {seo.title || "Avenstek Solutions | Building Excellence through Consistency"}
                </h3>
                <p className="text-[14px] text-[#4d5156] leading-relaxed mt-1 line-clamp-2">
                  {seo.description || "Avenstek Solutions is a beacon of innovation and reliability in the software development industry, delivering exceptional IT solutions."}
                </p>
              </div>
            </div>

            <div className="space-y-4 pt-4">
              <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-tighter">
                <span className="text-[var(--color-21)]">Title Length Score</span>
                <span className={seo.title.length > 60 || seo.title.length < 30 ? "text-amber-500" : "text-green-500"}>{seo.title.length} / 60 chars</span>
              </div>
              <div className="w-full h-1.5 bg-[var(--color-24)] rounded-full overflow-hidden">
                <div className={`h-full transition-all ${seo.title.length > 60 || (seo.title.length < 30 && seo.title.length > 0) ? "bg-amber-500" : "bg-green-500"}`} style={{ width: `${Math.min((seo.title.length / 60) * 100, 100)}%` }}></div>
              </div>

              <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-tighter pt-2">
                <span className="text-[var(--color-21)]">Description Length Score</span>
                <span className={seo.description.length > 160 || seo.description.length < 70 ? "text-amber-500" : "text-green-500"}>{seo.description.length} / 160 chars</span>
              </div>
              <div className="w-full h-1.5 bg-[var(--color-24)] rounded-full overflow-hidden">
                <div className={`h-full transition-all ${seo.description.length > 160 || (seo.description.length < 70 && seo.description.length > 0) ? "bg-amber-500" : "bg-green-500"}`} style={{ width: `${Math.min((seo.description.length / 160) * 100, 100)}%` }}></div>
              </div>
            </div>

            <p className="text-[10px] text-[var(--color-21)] font-medium leading-relaxed bg-[var(--color-13)] p-4 rounded-xl border border-[var(--color-11)]">
              <strong>SEO Pro Tip:</strong> Keep your meta titles between 30-60 characters and descriptions between 70-160 characters for optimal visibility on Google Search Result Pages (SERP).
            </p>
          </div>
        </div>
      )}
      <IconPickerModal
        isOpen={!!iconPickerTargetId}
        onClose={() => setIconPickerTargetId(null)}
        onSelect={(iconName) => {
          if (iconPickerTargetId) {
            updateSpec(iconPickerTargetId as string, { iconName });
          }
        }}
      />
    </div>
  );
};

export default HomeManagement;

