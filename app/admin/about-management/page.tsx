"use client";

import React, { useState, useEffect } from 'react';
import { 
  HiOutlineSave, 
  HiOutlinePlus, 
  HiOutlineTrash, 
  HiOutlineSearch, 
  HiOutlineGlobe,
  HiOutlinePhotograph,
  HiOutlineLink,
  HiOutlineArrowsExpand
} from 'react-icons/hi';
import api from '@/lib/api';

interface HeroSection {
  heroTitle: string;
  highlightedText: string;
  heroSubtitle: string;
  bannerImage: string;
  primaryBtnText: string;
  primaryBtnUrl: string;
  secondaryBtnText: string;
  secondaryBtnUrl: string;
}

interface TeamMember {
  id?: string;
  _id?: string;
  name: string;
  position: string;
  photo: string;
  order: number;
  status: boolean;
}

interface SEOData {
  title: string;
  description: string;
  keywords: string;
}

const AboutUsManagement: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'hero' | 'team' | 'seo'>('hero');
  const [isSaving, setIsSaving] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const [hero, setHero] = useState<HeroSection>({
    heroTitle: "",
    highlightedText: "",
    heroSubtitle: "",
    bannerImage: "",
    primaryBtnText: "",
    primaryBtnUrl: "",
    secondaryBtnText: "",
    secondaryBtnUrl: ""
  });

  const [team, setTeam] = useState<TeamMember[]>([]);

  const [seo, setSeo] = useState<SEOData>({
    title: "",
    description: "",
    keywords: ""
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await api.get('/content/about');
        if (data.hero) setHero(data.hero);
        if (data.team) setTeam(data.team);
        if (data.seo) setSeo(data.seo);
      } catch (err) {
        console.error("Error fetching about data", err);
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

  const updateMember = (id: string, updates: Partial<TeamMember>) => {
    setTeam(prev => prev.map(m => (m._id === id || m.id === id) ? { ...m, ...updates } : m));
  };

  const addMember = () => {
    setTeam([...team, {
      id: Date.now().toString(),
      name: 'New Member',
      position: 'Role / Title',
      photo: 'https://i.pravatar.cc/150?u=' + Date.now(),
      order: team.length + 1,
      status: true
    }]);
  };

  const handleSave = async () => {
    setIsSaving(true);
    try {
      await api.post('/content/about', { hero, team, seo });
      alert('About Us page updated successfully!');
    } catch (err) {
      console.error("Error saving about data", err);
      alert('Failed to update About Us Page.');
    } finally {
      setIsSaving(false);
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>, field: string, memberId?: string) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('image', file);

    try {
      const { data } = await api.post('/content/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      if (memberId) {
        updateMember(memberId, { photo: data.url });
      } else {
        setHero(prev => ({ ...prev, [field]: data.url }));
      }
    } catch (err) {
      console.error("Upload failed", err);
    }
  };

  if (isLoading) return <div className="p-10 text-center">Loading About Us data...</div>;

  return (
    <div className="space-y-6 animate-in fade-in duration-500 pb-10">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-[var(--color-16)]">About Us Page</h1>
          <p className="text-[var(--color-20)]">Manage the brand story, team members, and SEO presence.</p>
        </div>
        <button 
          onClick={handleSave} 
          disabled={isSaving} 
          className="flex items-center gap-2 bg-[var(--color-7)] text-white px-6 py-2.5 rounded-xl font-bold shadow-lg shadow-[var(--color-7)]/20 hover:scale-[1.02] active:scale-95 disabled:opacity-50 transition-all"
        >
          {isSaving ? <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div> : <HiOutlineSave size={20} />}
          {isSaving ? 'Saving...' : 'Save Content'}
        </button>
      </div>

      <div className="flex border-b border-[var(--color-23)] overflow-x-auto">
        {(['hero', 'team', 'seo'] as const).map(tab => (
          <button 
            key={tab} 
            onClick={() => setActiveTab(tab)} 
            className={`px-6 py-3 text-sm font-semibold transition-all border-b-2 capitalize whitespace-nowrap ${
              activeTab === tab 
                ? 'border-[var(--color-7)] text-[var(--color-7)]' 
                : 'border-transparent text-[var(--color-20)] hover:text-[var(--color-16)]'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {activeTab === 'hero' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="bg-white p-6 rounded-3xl border border-[var(--color-23)] space-y-5 shadow-sm">
            <h3 className="text-lg font-bold text-[var(--color-16)] flex items-center gap-2">
               <HiOutlinePhotograph className="text-[var(--color-7)]" /> Hero Content
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <label className="block text-xs font-bold text-[var(--color-21)] uppercase mb-1.5 tracking-wider">Hero Title</label>
                <input type="text" name="heroTitle" value={hero.heroTitle} onChange={handleHeroChange} className="w-full px-4 py-2.5 rounded-xl border border-[var(--color-23)] bg-[var(--color-24)] text-sm focus:ring-2 focus:ring-[var(--color-11)] outline-none transition-all" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-xs font-bold text-[var(--color-21)] uppercase mb-1.5 tracking-wider">Highlighted Text</label>
                <input type="text" name="highlightedText" value={hero.highlightedText} onChange={handleHeroChange} className="w-full px-4 py-2.5 rounded-xl border border-[var(--color-23)] bg-[var(--color-24)] text-sm font-bold text-[var(--color-7)] focus:ring-2 focus:ring-[var(--color-11)] outline-none transition-all" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-xs font-bold text-[var(--color-21)] uppercase mb-1.5 tracking-wider">Subtitle</label>
                <textarea name="heroSubtitle" value={hero.heroSubtitle} onChange={handleHeroChange} rows={3} className="w-full px-4 py-2.5 rounded-xl border border-[var(--color-23)] bg-[var(--color-24)] text-sm focus:ring-2 focus:ring-[var(--color-11)] outline-none resize-none transition-all" />
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-xs font-bold text-[var(--color-21)] uppercase mb-1.5 tracking-wider">Banner Image</label>
                <div className="flex gap-2">
                  <input type="text" name="bannerImage" value={hero.bannerImage} onChange={handleHeroChange} className="flex-1 px-4 py-2.5 rounded-xl border border-[var(--color-23)] bg-[var(--color-24)] text-[10px] outline-none" />
                  <label className="bg-[var(--color-23)] p-2.5 rounded-xl text-[var(--color-19)] hover:bg-[var(--color-22)] transition-colors cursor-pointer">
                    <HiOutlineArrowsExpand />
                    <input type="file" className="hidden" onChange={(e) => handleImageUpload(e, 'bannerImage')} />
                  </label>
                </div>
              </div>

              {['primary', 'secondary'].map((btn) => (
                <React.Fragment key={btn}>
                  <div>
                    <label className="block text-xs font-bold text-[var(--color-21)] uppercase mb-1.5 tracking-wider capitalize">{btn} Btn Text</label>
                    <input type="text" name={`${btn}BtnText`} value={(hero as any)[`${btn}BtnText`]} onChange={handleHeroChange} className="w-full px-4 py-2.5 rounded-xl border border-[var(--color-23)] bg-[var(--color-24)] text-xs outline-none" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[var(--color-21)] uppercase mb-1.5 tracking-wider capitalize">{btn} Btn URL</label>
                    <input type="text" name={`${btn}BtnUrl`} value={(hero as any)[`${btn}BtnUrl`]} onChange={handleHeroChange} className="w-full px-4 py-2.5 rounded-xl border border-[var(--color-23)] bg-[var(--color-24)] text-xs outline-none" />
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
          
          <div className="space-y-6 sticky top-6">
            <div className="bg-[var(--color-16)] p-8 rounded-3xl text-white flex flex-col justify-center text-center space-y-4 h-[350px] relative overflow-hidden group shadow-xl">
              <img src={hero.bannerImage.startsWith('/') ? `http://localhost:5000${hero.bannerImage}` : hero.bannerImage} className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:scale-110 transition-transform duration-700" alt="Preview Banner" />
              <div className="relative z-10 space-y-4">
                <h2 className="text-3xl font-bold leading-tight">
                  {hero.heroTitle} <span className="text-[var(--color-8)]">{hero.highlightedText}</span>
                </h2>
                <p className="text-[var(--color-21)] text-xs max-w-sm mx-auto leading-relaxed">{hero.heroSubtitle}</p>
                <div className="flex gap-3 justify-center pt-4">
                  <div className="px-5 py-2.5 bg-[var(--color-7)] rounded-xl text-xs font-bold shadow-lg shadow-[var(--color-7)]/20">{hero.primaryBtnText}</div>
                  <div className="px-5 py-2.5 bg-white/10 backdrop-blur rounded-xl text-xs font-bold border border-white/20">{hero.secondaryBtnText}</div>
                </div>
              </div>
              <div className="absolute top-6 left-6 text-[var(--color-20)] text-[10px] font-bold tracking-widest uppercase">Live View Preview</div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'team' && (
        <div className="bg-white p-6 rounded-3xl border border-[var(--color-23)] shadow-sm">
          <div className="flex justify-between items-center mb-8 border-b border-[var(--color-23)] pb-4">
            <h3 className="text-lg font-bold text-[var(--color-16)]">Management Team</h3>
            <button onClick={addMember} className="flex items-center gap-2 text-sm font-bold bg-[var(--color-13)] text-[var(--color-7)] px-5 py-2.5 rounded-xl hover:scale-105 active:scale-95 transition-all">
              <HiOutlinePlus /> Add Member
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.sort((a,b) => a.order - b.order).map(member => (
              <div key={member._id || member.id} className="p-6 border border-[var(--color-23)] rounded-3xl bg-[var(--color-25)] flex flex-col items-center text-center space-y-4 relative group hover:border-[var(--color-7)] transition-all">
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                   <button onClick={() => setTeam(prev => prev.filter(m => (m._id || m.id) !== (member._id || member.id)))} className="text-[var(--color-27)] p-2 bg-white rounded-lg shadow-md hover:bg-red-50 transition-colors">
                      <HiOutlineTrash size={16} />
                   </button>
                </div>
                <div className="relative">
                  <img src={member.photo.startsWith('/') ? `http://localhost:5000${member.photo}` : member.photo} className="w-24 h-24 rounded-full object-cover ring-4 ring-white shadow-md" alt={member.name} />
                  <label className="absolute bottom-0 right-0 p-2 bg-[var(--color-7)] text-white rounded-full shadow-lg hover:scale-110 transition-transform cursor-pointer">
                    <HiOutlinePhotograph size={12} />
                    <input type="file" className="hidden" onChange={(e) => handleImageUpload(e, 'photo', (member._id || member.id)!)} />
                  </label>
                </div>
                <div className="w-full space-y-1">
                  <input type="text" value={member.name} onChange={e => updateMember((member._id || member.id)!, { name: e.target.value })} className="w-full text-center bg-transparent border-none font-bold text-[var(--color-16)] p-0 text-sm outline-none focus:ring-0" />
                  <input type="text" value={member.position} onChange={e => updateMember((member._id || member.id)!, { position: e.target.value })} className="w-full text-center bg-transparent border-none text-[10px] text-[var(--color-21)] font-bold uppercase p-0 outline-none focus:ring-0" />
                </div>
                <div className="flex items-center gap-3 pt-4 border-t border-[var(--color-23)] w-full justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[9px] font-black text-[var(--color-21)] uppercase">Order</span>
                    <input 
                      type="number" 
                      value={member.order} 
                      onChange={e => updateMember((member._id || member.id)!, { order: parseInt(e.target.value) })}
                      className="w-8 bg-transparent text-[10px] font-bold text-[var(--color-20)] outline-none"
                    />
                  </div>
                  <button 
                    onClick={() => updateMember((member._id || member.id)!, { status: !member.status })}
                    className={`px-3 py-1 rounded-lg text-[8px] font-black uppercase transition-colors ${member.status ? 'bg-green-100 text-green-600' : 'bg-gray-200 text-gray-500'}`}
                  >
                    {member.status ? 'Active' : 'Hidden'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'seo' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="bg-white p-8 rounded-3xl border border-[var(--color-23)] space-y-6 shadow-sm">
            <h3 className="text-lg font-bold text-[var(--color-16)] border-b pb-4">SEO Meta Management</h3>
            <div className="space-y-5">
              <div>
                <label className="block text-xs font-bold text-[var(--color-21)] uppercase mb-2 tracking-widest">Meta Title</label>
                <input type="text" name="title" value={seo.title} onChange={handleSeoChange} className="w-full px-4 py-3 rounded-2xl border border-[var(--color-23)] bg-[var(--color-24)] text-sm focus:ring-2 focus:ring-[var(--color-11)] outline-none transition-all" />
              </div>
              <div>
                <label className="block text-xs font-bold text-[var(--color-21)] uppercase mb-2 tracking-widest">Meta Description</label>
                <textarea name="description" value={seo.description} onChange={handleSeoChange} rows={4} className="w-full px-4 py-3 rounded-2xl border border-[var(--color-23)] bg-[var(--color-24)] text-sm focus:ring-2 focus:ring-[var(--color-11)] outline-none resize-none transition-all" />
              </div>
              <div>
                <label className="block text-xs font-bold text-[var(--color-21)] uppercase mb-2 tracking-widest">Focus Keywords</label>
                <input type="text" name="keywords" value={seo.keywords} onChange={handleSeoChange} className="w-full px-4 py-3 rounded-2xl border border-[var(--color-23)] bg-[var(--color-24)] text-sm focus:ring-2 focus:ring-[var(--color-11)] outline-none transition-all" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutUsManagement;
