"use client"
import React, { useState } from 'react';
import * as HiIcons from 'react-icons/hi';
import { 
  HiOutlineSave, HiOutlinePlus, HiOutlineTrash, HiOutlineCheckCircle, 
  HiOutlineSearch, HiOutlineGlobe, HiOutlineCube
} from 'react-icons/hi';

interface HeroData {
  heroTitle: string;
  highlightedText: string;
  heroSubtitle: string;
}

interface Specialization {
  id: string;
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

const IconRenderer = ({ name, size = 24 }: { name: string; size?: number }) => {
  const IconComponent = (HiIcons as any)[name] || HiOutlineCube;
  return <IconComponent size={size} />;
};

const HomeManagement: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'hero' | 'specializations' | 'seo'>('hero');
  const [isSaving, setIsSaving] = useState(false);

  const [hero, setHero] = useState<HeroData>({
    heroTitle: "Building Digital Experiences",
    highlightedText: "Faster than ever",
    heroSubtitle: "We provide top-tier engineering solutions that scale your business to new heights with modern stacks."
  });

  const [specializations, setSpecializations] = useState<Specialization[]>([
    { id: '1', title: 'Cloud Infrastructure', iconName: 'HiOutlineCloud', order: 1, isActive: true },
    { id: '2', title: 'Full-Stack Apps', iconName: 'HiOutlineTerminal', order: 2, isActive: true },
    { id: '3', title: 'AI Integration', iconName: 'HiOutlineChip', order: 3, isActive: true },
  ]);

  const [seo, setSeo] = useState<SEOData>({
    title: "Lumina | Modern Digital Engineering Solutions",
    description: "Lumina provides top-tier engineering solutions that scale your business to new heights with modern stacks.",
    keywords: "web development, cloud solutions"
  });

  const handleHeroChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setHero(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSeoChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setSeo(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const updateSpec = (id: string, updates: Partial<Specialization>) => {
    setSpecializations(prev => prev.map(s => s.id === id ? { ...s, ...updates } : s));
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
    await new Promise(r => setTimeout(r, 600));
    setIsSaving(false);
    alert('Home Page updated!');
  };

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
              <div key={spec.id} className="p-5 border border-[var(--color-23)] rounded-2xl bg-[var(--color-25)] space-y-4">
                <div className="flex justify-between items-start">
                  <div className="p-3 bg-white rounded-xl border border-[var(--color-23)] text-[var(--color-7)]">
                    <IconRenderer name={spec.iconName} />
                  </div>
                  <button onClick={() => updateSpec(spec.id, { isActive: !spec.isActive })} className={`text-[10px] font-black uppercase px-2 py-1 rounded-lg ${spec.isActive ? 'bg-green-100 text-green-600' : 'bg-gray-200 text-gray-500'}`}>
                    {spec.isActive ? 'Active' : 'Hidden'}
                  </button>
                </div>
                <div>
                  <label className="text-[10px] font-bold text-[var(--color-21)] uppercase">Icon Name (HiOutline...)</label>
                  <input type="text" value={spec.iconName} onChange={e => updateSpec(spec.id, { iconName: e.target.value })} className="w-full bg-white border border-[var(--color-23)] rounded-lg px-3 py-1.5 text-xs font-medium outline-none" />
                </div>
                <div>
                  <label className="text-[10px] font-bold text-[var(--color-21)] uppercase">Display Title</label>
                  <input type="text" value={spec.title} onChange={e => updateSpec(spec.id, { title: e.target.value })} className="w-full bg-transparent border-none font-bold text-[var(--color-16)] focus:ring-0 p-0" />
                </div>
                <button onClick={() => setSpecializations(prev => prev.filter(s => s.id !== spec.id))} className="text-[var(--color-27)] hover:underline text-xs font-bold pt-2 border-t w-full flex items-center gap-1 justify-center">
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
          <div className="bg-white p-6 rounded-2xl border border-[var(--color-23)] space-y-2">
            <h4 className="text-xs font-bold text-[var(--color-21)] uppercase flex items-center gap-2"><HiOutlineSearch /> Google Preview</h4>
            <div className="space-y-1">
              <p className="text-xs text-[#202124] flex items-center gap-1"><HiOutlineGlobe size={14} /> lumina.com › home</p>
              <h3 className="text-xl text-[#1a0dab] font-medium truncate">{seo.title}</h3>
              <p className="text-sm text-[#4d5156] line-clamp-3">{seo.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomeManagement;
