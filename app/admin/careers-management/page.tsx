"use client"
import React, { useState, useEffect } from 'react';
import * as HiIcons from 'react-icons/hi';
import {
  HiOutlineSave, HiOutlinePlus, HiOutlineTrash, HiOutlinePhotograph,
  HiOutlineBriefcase, HiOutlineUserGroup, HiOutlineTemplate, HiOutlineLightningBolt,
  HiOutlineAdjustments, HiOutlineChevronDown, HiOutlineExternalLink, HiOutlineDownload,
  HiOutlineCollection, HiOutlineIdentification, HiOutlineGlobe, HiOutlineCube,
  HiOutlineSearch
} from 'react-icons/hi';
import api from '@/lib/api';
import { API_BASE_URL } from '@/lib/api-config';

// Import your custom RichTextEditor
import RichTextEditor from '../components/RichTextEditor';
import { useModal } from '@/app/components/ConfirmModal';
import { useToast } from '../components/Toast';

// --- Types & Interfaces ---

interface HeroSection {
  heroTitle: string;
  highlightedText: string;
  heroSubtitle: string;
  ctaText: string;
  images: string[];
}

interface CultureModule {
  _id?: string;
  id?: string;
  icon: string;
  title: string;
  description: string;
  order: number;
}

interface Department {
  _id?: string;
  id?: string;
  name: string;
  slug: string;
  status: boolean;
}

interface Job {
  _id?: string;
  id?: string;
  departmentId: any;
  title: string;
  preText: string;
  description: string;
  jobType: 'Full-time' | 'Part-time' | 'Contract';
  salaryMin: number;
  salaryMax: number;
  currency: string;
  location: string;
  workMode: 'Remote' | 'Onsite';
  slug: string;
  status: boolean;
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string;
}

interface JobApplication {
  _id?: string;
  id?: string;
  jobId: any;
  name: string;
  email: string;
  phone: string;
  aboutYourself: string;
  resumeFile: string;
  status: string;
  createdAt?: string;
}

interface PageSEO {
  title: string;
  description: string;
  keywords: string;
}

import { IconRenderer, IconPickerModal } from '../components/IconPicker';





const CareersManagement: React.FC = () => {
  const { showToast } = useToast();
  const { showAlert, showConfirm } = useModal();
  const [activeTab, setActiveTab] = useState<'hero' | 'culture' | 'departments' | 'jobs' | 'applications' | 'seo'>('hero');
  const [isSaving, setIsSaving] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [jobViewMode, setJobViewMode] = useState<'list' | 'edit'>('list');
  const [editingJobId, setEditingJobId] = useState<string | null>(null);
  const [iconPickerTarget, setIconPickerTarget] = useState<{ type: 'why' | 'principles', id: string } | null>(null);

  // State Management
  const [hero, setHero] = useState<HeroSection>({
    heroTitle: "",
    highlightedText: "",
    heroSubtitle: "",
    ctaText: "",
    images: []
  });

  const [pageSeo, setPageSeo] = useState<PageSEO>({
    title: "",
    description: "",
    keywords: ""
  });

  const [whyAvenstek, setWhyAvenstek] = useState<CultureModule[]>([]);
  const [principles, setPrinciples] = useState<CultureModule[]>([]);
  const [departments, setDepartments] = useState<Department[]>([]);
  const [jobs, setJobs] = useState<Job[]>([]);
  const [applications, setApplications] = useState<JobApplication[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const { data: config } = await api.get('/content/careers/config');
      if (config) {
        if (config.hero) setHero(config.hero);
        if (config.seo) setPageSeo(config.seo);
        if (config.whyAvenstek) setWhyAvenstek(config.whyAvenstek);
        if (config.principles) setPrinciples(config.principles);
      }

      const { data: depts } = await api.get('/content/departments');
      setDepartments(depts || []);

      const { data: jobList } = await api.get('/content/jobs');
      setJobs(jobList || []);

      const { data: apps } = await api.get('/content/applications');
      setApplications(apps || []);
    } catch (err) {
      console.error('Error fetching careers data:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const getId = (item: any) => {
    if (typeof item === 'string') return item;
    return item?._id || item?.id || '';
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>, callback: (url: string) => void) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('image', file);

    try {
      const { data } = await api.post('/content/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      callback(data.url);
    } catch (err) {
      console.error("Upload failed", err);
      showAlert("Upload Error", "Failed to upload image. Please try again.");
    }
  };

  const handleSave = async () => {
    // Basic validation
    if (departments.length === 0 && jobs.length > 0) {
      showAlert('Requirement Error', 'Please create at least one department before saving jobs.');
      return;
    }

    const invalidJobs = jobs.filter(j => !j.departmentId || (typeof j.departmentId === 'string' && j.departmentId.trim() === ''));
    if (invalidJobs.length > 0) {
      showAlert('Assignment Error', `"${invalidJobs[0].title}" has no department selected.`);
      setEditingJobId(getId(invalidJobs[0]));
      setJobViewMode('edit');
      setIsSaving(false);
      return;
    }

    setIsSaving(true);
    try {
      // 1. Save Config
      await api.post('/content/careers/config', {
        hero,
        whyAvenstek,
        principles,
        seo: pageSeo
      });

      // 2. Save Departments (Batch)
      const deptRes = await api.post('/content/departments', departments);
      const savedDepts = deptRes.data;

      // Create mapping from old/temp IDs to new DB ObjectIds
      const idMap: Record<string, string> = {};
      departments.forEach((dept, idx) => {
        const oldId = getId(dept);
        const newId = savedDepts[idx]?._id || savedDepts[idx]?.id;
        if (oldId && newId) idMap[oldId] = newId;
      });

      // 3. Save Jobs (Batch) with mapped department IDs
      const cleanedJobs = jobs.map(job => {
        const currentDeptId = typeof job.departmentId === 'object' ? getId(job.departmentId) : job.departmentId;
        const finalDeptId = idMap[currentDeptId] || currentDeptId;

        // Strip frontend-only properties before saving
        const { id, _id, ...rest } = job;
        return {
          ...rest,
          departmentId: finalDeptId
        };
      });

      await api.post('/content/jobs', cleanedJobs);

      alert('All career infrastructure saved successfully!');
      fetchData(); // Refresh to get real IDs
    } catch (err: any) {
      console.error('Error saving career details:', err);
      showAlert('Save Failed', 'Failed to save changes: ' + (err.response?.data?.message || err.message));
    } finally {
      setIsSaving(false);
    }
  };

  const deleteApplication = async (id: string) => {
    const confirmed = await showConfirm('Delete Application', 'Are you sure you want to delete this application?');
    if (!confirmed) return;
    try {
      await api.delete(`/content/applications/${id}`);
      setApplications(prev => prev.filter(a => getId(a) !== id));
    } catch (err) {
      showAlert('Error', 'Failed to delete application');
    }
  };

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] space-y-4">
        <div className="w-12 h-12 border-4 border-[var(--color-7)]/20 border-t-[var(--color-7)] rounded-full animate-spin"></div>
        <p className="text-[var(--color-20)] font-medium animate-pulse">Syncing Careers Lab...</p>
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-in fade-in duration-500 pb-10">
      {/* HEADER */}
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-2xl font-bold text-[var(--color-16)]">Careers Laboratory</h1>
          <p className="text-[var(--color-20)]">Manage hiring branding, job roles, and global SEO.</p>
        </div>
        <button
          onClick={handleSave}
          disabled={isSaving}
          className="flex items-center gap-2 bg-[var(--color-7)] text-white px-6 py-2.5 rounded-xl font-bold shadow-lg shadow-[var(--color-7)]/20 hover:scale-[1.02] disabled:opacity-50 transition-all"
        >
          {isSaving ? <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div> : <HiOutlineSave size={20} />}
          Save Infrastructure
        </button>
      </div>

      {/* TABS */}
      <div className="flex border-b border-[var(--color-23)] overflow-x-auto no-scrollbar">
        {(['hero', 'culture', 'departments', 'jobs', 'applications', 'seo'] as const).map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-3 text-sm font-semibold transition-all border-b-2 capitalize whitespace-nowrap ${activeTab === tab ? 'border-[var(--color-7)] text-[var(--color-7)]' : 'border-transparent text-[var(--color-20)] hover:text-[var(--color-16)]'}`}
          >
            {tab.replace('-', ' ')}
          </button>
        ))}
        {activeTab === 'jobs' && jobViewMode === 'edit' && (
          <button
            onClick={() => { setJobViewMode('list'); setEditingJobId(null); }}
            className="ml-auto flex items-center gap-2 text-[var(--color-7)] font-bold text-sm px-4"
          >
            <HiOutlineChevronDown className="rotate-90" /> Back to Inventory
          </button>
        )}
      </div>

      {/* HERO & GALLERY */}
      {activeTab === 'hero' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-2xl border border-[var(--color-23)] space-y-4 shadow-sm">
            <h3 className="text-lg font-bold text-[var(--color-16)] border-b pb-4">Hero Editor</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-[var(--color-19)] mb-1.5">Hero Headline</label>
                <input type="text" value={hero.heroTitle} onChange={e => setHero({ ...hero, heroTitle: e.target.value })} className="w-full px-4 py-2.5 rounded-xl border border-[var(--color-23)] bg-[var(--color-24)] text-sm focus:ring-2 focus:ring-[var(--color-11)] outline-none" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[var(--color-19)] mb-1.5">Highlighted Text</label>
                <input type="text" value={hero.highlightedText} onChange={e => setHero({ ...hero, highlightedText: e.target.value })} className="w-full px-4 py-2.5 rounded-xl border border-[var(--color-23)] bg-[var(--color-24)] text-sm font-bold text-[var(--color-7)] outline-none" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[var(--color-19)] mb-1.5">Hero Subtitle</label>
                <textarea value={hero.heroSubtitle} onChange={e => setHero({ ...hero, heroSubtitle: e.target.value })} rows={3} className="w-full px-4 py-2.5 rounded-xl border border-[var(--color-23)] bg-[var(--color-24)] text-sm focus:ring-2 focus:ring-[var(--color-11)] outline-none resize-none" />
              </div>
            </div>

            <div className="pt-4 border-t border-[var(--color-23)]">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-sm font-bold text-[var(--color-16)]">Visual Gallery (Max 6)</h4>
                <label className="p-1.5 bg-[var(--color-13)] text-[var(--color-7)] rounded-lg hover:scale-110 transition-transform cursor-pointer">
                  <HiOutlinePlus size={18} />
                  <input
                    type="file"
                    className="hidden"
                    accept="image/*"
                    onChange={(e) => {
                      if (hero.images.length >= 6) {
                        alert("Max 6 images allowed.");
                        return;
                      }
                      handleImageUpload(e, (url) => setHero(prev => ({ ...prev, images: [...prev.images, url] })));
                    }}
                  />
                </label>

              </div>
              <div className="grid grid-cols-3 gap-3">
                {hero.images.map((img, i) => (
                  <div key={`${img}-${i}`} className="relative aspect-[4/3] group rounded-xl overflow-hidden shadow-inner bg-[var(--color-24)] border border-[var(--color-23)]">
                    <img src={img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="" />
                    <button
                      onClick={() => setHero({ ...hero, images: hero.images.filter((_, idx) => idx !== i) })}
                      className="absolute top-1 right-1 p-1 bg-red-500 text-white rounded-md opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <HiOutlineTrash size={12} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="bg-[var(--color-16)] p-10 rounded-3xl text-white flex flex-col justify-center text-center space-y-4 h-[450px] relative overflow-hidden group">
            <div className="relative z-10 space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                {hero.heroTitle} <br />
                <span className="text-[var(--color-8)]">{hero.highlightedText}</span>
              </h2>
              <p className="text-[var(--color-21)] text-sm max-w-sm mx-auto leading-relaxed">{hero.heroSubtitle}</p>
              <button className="bg-[var(--color-7)] text-white px-8 py-3 rounded-xl font-bold shadow-xl shadow-[var(--color-7)]/20 inline-block hover:scale-105 transition-transform">
                {hero.ctaText}
              </button>
            </div>
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-[var(--color-7)]/10 rounded-full blur-3xl"></div>
            <div className="absolute -top-20 -left-20 w-80 h-80 bg-[var(--color-8)]/5 rounded-full blur-3xl"></div>
          </div>
        </div>
      )
      }

      {/* CULTURE */}
      {
        activeTab === 'culture' && (
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-2xl border border-[var(--color-23)] shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold text-[var(--color-16)]">Why Avenstek?</h3>
                <button onClick={() => setWhyAvenstek([...whyAvenstek, { id: Date.now().toString(), icon: 'HiOutlineLightningBolt', title: 'New Benefit', description: 'Brief detail...', order: whyAvenstek.length + 1 }])} className="flex items-center gap-2 text-sm font-bold bg-[var(--color-13)] text-[var(--color-7)] px-4 py-2 rounded-xl">
                  <HiOutlinePlus /> Add Benefit
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {whyAvenstek.map((item) => (
                  <div key={getId(item)} className="p-5 border border-[var(--color-23)] rounded-2xl bg-[var(--color-25)] space-y-4 group">
                    <div className="flex justify-between items-start">
                      <button
                        onClick={() => setIconPickerTarget({ type: 'why', id: getId(item) })}
                        className="p-3 bg-white rounded-xl border border-[var(--color-23)] text-[var(--color-7)] shadow-sm hover:scale-110 transition-transform relative group/icon"
                      >
                        <IconRenderer name={item.icon} />
                        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover/icon:opacity-100 flex items-center justify-center rounded-xl transition-opacity">
                          <span className="text-[8px] font-black text-black/40 uppercase">Edit</span>
                        </div>
                      </button>
                      <button onClick={() => setWhyAvenstek(prev => prev.filter(p => getId(p) !== getId(item)))} className="text-[var(--color-27)] hover:underline text-xs font-bold"><HiOutlineTrash /></button>
                    </div>
                    <div className="space-y-3">
                      <input value={item.title} onChange={e => setWhyAvenstek(prev => prev.map(p => getId(p) === getId(item) ? { ...p, title: e.target.value } : p))} className="w-full bg-transparent border-none p-0 text-base font-bold text-[var(--color-16)] outline-none focus:ring-0" placeholder="Title" />
                      <textarea value={item.description} onChange={e => setWhyAvenstek(prev => prev.map(p => getId(p) === getId(item) ? { ...p, description: e.target.value } : p))} className="w-full bg-transparent border-none p-0 text-xs text-[var(--color-20)] font-medium leading-relaxed outline-none focus:ring-0 resize-none" placeholder="Description" rows={2} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[var(--color-23)] shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold text-[var(--color-16)]">Our Principles</h3>
                <button onClick={() => setPrinciples([...principles, { id: Date.now().toString(), icon: 'HiOutlineTemplate', title: 'New Principle', description: 'Description...', order: principles.length + 1 }])} className="flex items-center gap-2 text-sm font-bold bg-[var(--color-13)] text-[var(--color-7)] px-4 py-2 rounded-xl">
                  <HiOutlinePlus /> Add Principle
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {principles.map((item) => (
                  <div key={getId(item)} className="p-5 border border-[var(--color-23)] rounded-2xl bg-[var(--color-25)] space-y-4 group">
                    <div className="flex justify-between items-start">
                      <button
                        onClick={() => setIconPickerTarget({ type: 'principles', id: getId(item) })}
                        className="p-3 bg-white rounded-xl border border-[var(--color-23)] text-[var(--color-8)] shadow-sm hover:scale-110 transition-transform relative group/icon"
                      >
                        <IconRenderer name={item.icon} />
                        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover/icon:opacity-100 flex items-center justify-center rounded-xl transition-opacity">
                          <span className="text-[8px] font-black text-black/40 uppercase">Edit</span>
                        </div>
                      </button>
                      <button onClick={() => setPrinciples(prev => prev.filter(p => getId(p) !== getId(item)))} className="text-[var(--color-27)] hover:underline text-xs font-bold"><HiOutlineTrash /></button>
                    </div>
                    <div className="space-y-3">
                      <input value={item.title} onChange={e => setPrinciples(prev => prev.map(p => getId(p) === getId(item) ? { ...p, title: e.target.value } : p))} className="w-full bg-transparent border-none p-0 text-base font-bold text-[var(--color-16)] outline-none focus:ring-0" placeholder="Principle Title" />
                      <textarea value={item.description} onChange={e => setPrinciples(prev => prev.map(p => getId(p) === getId(item) ? { ...p, description: e.target.value } : p))} className="w-full bg-transparent border-none p-0 text-xs text-[var(--color-20)] font-medium leading-relaxed outline-none focus:ring-0 resize-none" placeholder="Description" rows={2} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )
      }

      {/* DEPARTMENTS */}
      {
        activeTab === 'departments' && (
          <div className="bg-white rounded-2xl border border-[var(--color-23)] shadow-sm overflow-hidden">
            <div className="p-6 border-b border-[var(--color-23)] flex items-center justify-between bg-[var(--color-25)]">
              <h3 className="text-lg font-bold text-[var(--color-16)]">Department Hierarchy</h3>
              <button
                onClick={() => setDepartments([...departments, { id: 'dept-' + Date.now(), name: 'New Dept', slug: 'new-dept', status: true }])}
                className="bg-[var(--color-13)] text-[var(--color-7)] px-4 py-2 rounded-xl text-xs font-bold shadow-sm"
              >
                Create Department
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-[var(--color-24)]/50 border-b border-[var(--color-23)]">
                    <th className="px-6 py-4 text-[10px] font-black text-[var(--color-21)] uppercase tracking-wider">Name</th>
                    <th className="px-6 py-4 text-[10px] font-black text-[var(--color-21)] uppercase tracking-wider">Slug</th>
                    <th className="px-6 py-4 text-[10px] font-black text-[var(--color-21)] uppercase tracking-wider">Visibility</th>
                    <th className="px-6 py-4 text-[10px] font-black text-[var(--color-21)] uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--color-23)]">
                  {departments.map((dept) => (
                    <tr key={getId(dept)} className="hover:bg-[var(--color-14)] transition-colors">
                      <td className="px-6 py-4">
                        <input value={dept.name} onChange={e => setDepartments(prev => prev.map(d => getId(d) === getId(dept) ? { ...d, name: e.target.value } : d))} className="bg-transparent border-none font-bold text-sm text-[var(--color-16)] p-0 focus:ring-0 outline-none w-full" />
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-xs font-mono text-[var(--color-20)]">/jobs/{dept.slug}</span>
                      </td>
                      <td className="px-6 py-4">
                        <button
                          onClick={() => setDepartments(prev => prev.map(d => getId(d) === getId(dept) ? { ...d, status: !d.status } : d))}
                          className={`px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-tighter ${dept.status ? 'bg-green-50 text-green-600 border border-green-100' : 'bg-gray-100 text-gray-400 border border-gray-200'}`}
                        >
                          {dept.status ? 'Visible' : 'Hidden'}
                        </button>
                      </td>
                      <td className="px-6 py-4">
                        <button onClick={() => setDepartments(prev => prev.filter(d => getId(d) !== getId(dept)))} className="text-[var(--color-21)] hover:text-red-500 transition-colors">
                          <HiOutlineTrash size={18} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )
      }

      {/* JOB ROLES */}
      {
        activeTab === 'jobs' && (
          <div className="space-y-6">
            {jobViewMode === 'list' ? (
              <>
                <div className="bg-white p-4 rounded-2xl border border-[var(--color-23)] shadow-sm flex items-center justify-between">
                  <div className="flex items-center gap-3 px-2">
                    <HiOutlineAdjustments className="text-[var(--color-7)]" size={20} />
                    <h3 className="text-base font-bold text-[var(--color-16)]">Open Job Inventory</h3>
                  </div>
                  <button
                    onClick={() => {
                      if (departments.length === 0) {
                        alert('Please create at least one department first.');
                        return;
                      }
                      const newId = 'new-' + Date.now();
                      setJobs([...jobs, {
                        id: newId,
                        departmentId: getId(departments[0]),
                        title: 'New Role',
                        preText: 'Short summary...',
                        description: '<p>Role details...</p>',
                        jobType: 'Full-time',
                        salaryMin: 0,
                        salaryMax: 0,
                        currency: 'INR',
                        location: 'Remote',
                        workMode: 'Remote',
                        slug: 'new-role-' + Date.now(),
                        status: true,
                        seoTitle: '',
                        seoDescription: '',
                        seoKeywords: ''
                      }]);
                      setEditingJobId(newId);
                      setJobViewMode('edit');
                    }}
                    className="bg-[var(--color-7)] text-white px-5 py-2.5 rounded-xl text-xs font-bold shadow-sm"
                  >
                    Post New Opening
                  </button>
                </div>

                <div className="bg-white rounded-2xl border border-[var(--color-23)] shadow-sm overflow-hidden">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="bg-[var(--color-24)]/50 border-b border-[var(--color-23)]">
                        <th className="px-6 py-4 text-[10px] font-black text-[var(--color-21)] uppercase tracking-wider">Role Title</th>
                        <th className="px-6 py-4 text-[10px] font-black text-[var(--color-21)] uppercase tracking-wider">Department</th>
                        <th className="px-6 py-4 text-[10px] font-black text-[var(--color-21)] uppercase tracking-wider">Type</th>
                        <th className="px-6 py-4 text-[10px] font-black text-[var(--color-21)] uppercase tracking-wider">Status</th>
                        <th className="px-6 py-4 text-[10px] font-black text-[var(--color-21)] uppercase tracking-wider text-right">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[var(--color-23)]">
                      {jobs.map((job) => (
                        <tr key={getId(job)} className="hover:bg-[var(--color-14)] transition-colors">
                          <td className="px-6 py-4 font-bold text-sm text-[var(--color-16)]">{job.title}</td>
                          <td className="px-6 py-4 text-xs font-medium text-[var(--color-20)]">
                            {departments.find(d => getId(d) === (typeof job.departmentId === 'string' ? job.departmentId : getId(job.departmentId)))?.name || 'Unset'}
                          </td>
                          <td className="px-6 py-4">
                            <span className="text-[10px] font-bold bg-[var(--color-13)] text-[var(--color-7)] px-2 py-0.5 rounded">{job.jobType}</span>
                          </td>
                          <td className="px-6 py-4">
                            <span className={`text-[10px] font-black uppercase tracking-tighter ${job.status ? 'text-green-600' : 'text-gray-400'}`}>
                              {job.status ? 'Live' : 'Hidden'}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-right space-x-2">
                            <button
                              onClick={() => { setEditingJobId(getId(job)); setJobViewMode('edit'); }}
                              className="p-2 text-[var(--color-7)] hover:bg-[var(--color-13)] rounded-lg transition-colors"
                            >
                              <HiIcons.HiOutlinePencilAlt size={18} />
                            </button>
                            <button
                              onClick={() => setJobs(prev => prev.filter(j => getId(j) !== getId(job)))}
                              className="p-2 text-red-400 hover:bg-red-50 rounded-lg transition-colors"
                            >
                              <HiOutlineTrash size={18} />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  {jobs.length === 0 && (
                    <div className="p-20 text-center text-[var(--color-20)]">
                      No jobs posted yet. Start by creating a new opening.
                    </div>
                  )}
                </div>
              </>
            ) : (
              <div className="animate-in slide-in-from-right duration-300">
                {jobs.filter(j => getId(j) === editingJobId).map((job) => (
                  <div key={getId(job)} className="bg-white rounded-3xl border border-[var(--color-23)] shadow-md overflow-hidden">
                    <div className="p-6 border-b border-[var(--color-23)] flex flex-col md:flex-row md:items-center justify-between gap-6 bg-[var(--color-25)]">
                      <div className="flex-1 space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="text-[9px] font-black text-[var(--color-7)] bg-white px-2 py-0.5 rounded border border-[var(--color-23)] uppercase">
                            {departments.find(d => getId(d) === getId(job.departmentId))?.name || 'Unset'}
                          </span>
                          <span className="text-[10px] text-[var(--color-21)] font-bold italic tracking-wider">ID: {getId(job)}</span>
                        </div>
                        <input
                          value={job.title}
                          onChange={e => setJobs(prev => prev.map(j => getId(j) === getId(job) ? { ...j, title: e.target.value } : j))}
                          className="w-full bg-transparent border-none p-0 text-2xl font-black text-[var(--color-16)] focus:ring-0 outline-none"
                        />
                      </div>
                      <div className="flex items-center gap-3">
                        <button onClick={() => setJobs(prev => prev.filter(j => getId(j) !== getId(job)))} className="p-2.5 text-[var(--color-21)] hover:text-red-500 transition-colors bg-white rounded-xl border border-[var(--color-23)]"><HiOutlineTrash size={18} /></button>
                        <button
                          onClick={() => setJobs(prev => prev.map(j => getId(j) === getId(job) ? { ...j, status: !j.status } : j))}
                          className={`px-5 py-2.5 rounded-xl text-xs font-black uppercase transition-all shadow-sm ${job.status ? 'bg-white text-[var(--color-7)] border-[var(--color-23)]' : 'bg-gray-100 text-gray-400'}`}
                        >
                          {job.status ? 'Live' : 'Hidden'}
                        </button>
                      </div>
                    </div>

                    <div className="p-8 grid grid-cols-1 lg:grid-cols-12 gap-10">
                      <div className="lg:col-span-8 space-y-8">
                        <div>
                          <label className="text-[10px] font-black text-[var(--color-21)] uppercase tracking-widest mb-3 block">Listing Snippet (Short Pre-text)</label>
                          <textarea
                            value={job.preText}
                            onChange={e => setJobs(prev => prev.map(j => getId(j) === getId(job) ? { ...j, preText: e.target.value } : j))}
                            rows={2}
                            className="w-full px-5 py-4 bg-[var(--color-24)] rounded-2xl border border-[var(--color-23)] text-sm font-medium outline-none resize-none focus:ring-1 focus:ring-[var(--color-7)]"
                          />
                        </div>

                        <div>
                          <label className="text-[10px] font-black text-[var(--color-21)] uppercase tracking-widest mb-3 block">Full Job Description (CK Editor)</label>
                          <div className="border border-[var(--color-23)] rounded-[1.5rem] overflow-hidden bg-white shadow-inner min-h-[400px]">
                            <RichTextEditor
                              id={getId(job)}
                              key={getId(job)}
                              data={job.description}
                              onChange={(data: string) => {
                                setJobs(prev => prev.map(j => getId(j) === getId(job) ? { ...j, description: data } : j));
                              }}
                            />
                          </div>
                        </div>

                        <div className="pt-8 border-t border-[var(--color-23)] space-y-6 bg-[var(--color-25)]/50 p-6 rounded-[2rem]">
                          <div className="flex items-center gap-2 mb-2">
                            <HiOutlineSearch className="text-[var(--color-7)]" size={20} />
                            <h4 className="text-xs font-black text-[var(--color-16)] uppercase tracking-widest">Job-Specific SEO Settings</h4>
                          </div>
                          <div className="grid grid-cols-1 gap-5">
                            <div>
                              <label className="text-[9px] font-black text-[var(--color-21)] uppercase mb-1.5 block px-1">Meta Title</label>
                              <input
                                value={job.seoTitle}
                                onChange={e => setJobs(prev => prev.map(j => getId(j) === getId(job) ? { ...j, seoTitle: e.target.value } : j))}
                                className="w-full bg-white border border-[var(--color-23)] rounded-xl px-4 py-2.5 text-xs font-bold outline-none focus:ring-1 focus:ring-[var(--color-7)]"
                                placeholder="SEO-friendly job title..."
                              />
                            </div>
                            <div>
                              <label className="text-[9px] font-black text-[var(--color-21)] uppercase mb-1.5 block px-1">Meta Description</label>
                              <textarea
                                value={job.seoDescription}
                                onChange={e => setJobs(prev => prev.map(j => getId(j) === getId(job) ? { ...j, seoDescription: e.target.value } : j))}
                                rows={2}
                                className="w-full bg-white border border-[var(--color-23)] rounded-xl px-4 py-2.5 text-xs font-medium outline-none focus:ring-1 focus:ring-[var(--color-7)] resize-none"
                                placeholder="Meta description for search engines..."
                              />
                            </div>
                            <div>
                              <label className="text-[9px] font-black text-[var(--color-21)] uppercase mb-1.5 block px-1">Keywords</label>
                              <input
                                value={job.seoKeywords}
                                onChange={e => setJobs(prev => prev.map(j => getId(j) === getId(job) ? { ...j, seoKeywords: e.target.value } : j))}
                                className="w-full bg-white border border-[var(--color-23)] rounded-xl px-4 py-2.5 text-xs font-bold outline-none focus:ring-1 focus:ring-[var(--color-7)]"
                                placeholder="Separate keywords with commas..."
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="lg:col-span-4 space-y-6">
                        <div className="bg-[var(--color-25)] p-8 rounded-[2rem] border border-[var(--color-23)] space-y-6 shadow-sm">
                          <h4 className="text-[10px] font-black text-[var(--color-16)] uppercase tracking-widest border-b pb-4">Core Attributes</h4>
                          <div className="space-y-4">
                            <div>
                              <label className="text-[9px] font-bold text-[var(--color-21)] uppercase mb-1.5 block">Department</label>
                              <select value={getId(job.departmentId)} onChange={e => setJobs(prev => prev.map(j => getId(j) === getId(job) ? { ...j, departmentId: e.target.value } : j))} className="w-full bg-white border border-[var(--color-23)] rounded-xl px-4 py-2.5 text-xs font-bold outline-none">
                                {departments.map(d => <option key={getId(d)} value={getId(d)}>{d.name}</option>)}
                              </select>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <label className="text-[9px] font-bold text-[var(--color-21)] uppercase mb-1.5 block">Job Type</label>
                                <select value={job.jobType} onChange={e => setJobs(prev => prev.map(j => getId(j) === getId(job) ? { ...j, jobType: e.target.value as any } : j))} className="w-full bg-white border border-[var(--color-23)] rounded-xl px-4 py-2.5 text-xs font-bold outline-none">
                                  <option>Full-time</option>
                                  <option>Part-time</option>
                                  <option>Contract</option>
                                </select>
                              </div>
                              <div>
                                <label className="text-[9px] font-bold text-[var(--color-21)] uppercase mb-1.5 block">Work Mode</label>
                                <select value={job.workMode} onChange={e => setJobs(prev => prev.map(j => getId(j) === getId(job) ? { ...j, workMode: e.target.value as any } : j))} className="w-full bg-white border border-[var(--color-23)] rounded-xl px-4 py-2.5 text-xs font-bold outline-none">
                                  <option>Remote</option>
                                  <option>Onsite</option>
                                </select>
                              </div>
                            </div>
                            <div className="pt-4 border-t border-[var(--color-23)]">
                              <label className="text-[9px] font-bold text-[var(--color-21)] uppercase mb-3 block">Annual Range (INR)</label>
                              <div className="flex items-center gap-2">
                                <input type="number" value={job.salaryMin} onChange={e => setJobs(prev => prev.map(j => getId(j) === getId(job) ? { ...j, salaryMin: parseInt(e.target.value) } : j))} className="w-full bg-white border border-[var(--color-23)] rounded-xl px-4 py-2.5 text-xs font-bold outline-none" placeholder="Min" />
                                <span className="text-[var(--color-21)] font-bold">-</span>
                                <input type="number" value={job.salaryMax} onChange={e => setJobs(prev => prev.map(j => getId(j) === getId(job) ? { ...j, salaryMax: parseInt(e.target.value) } : j))} className="w-full bg-white border border-[var(--color-23)] rounded-xl px-4 py-2.5 text-xs font-bold outline-none" placeholder="Max" />
                              </div>
                            </div>
                            <div className="pt-4 border-t border-[var(--color-23)]">
                              <label className="text-[9px] font-bold text-[var(--color-21)] uppercase mb-2 block">Redirect URL Slug</label>
                              <div className="flex items-center gap-2 bg-white border border-[var(--color-23)] px-4 py-2.5 rounded-xl">
                                <span className="text-[10px] text-[var(--color-21)] font-black">/jobs/</span>
                                <input value={job.slug} onChange={e => setJobs(prev => prev.map(j => getId(j) === getId(job) ? { ...j, slug: e.target.value } : j))} className="w-full bg-transparent border-none p-0 text-[10px] font-bold focus:ring-0 outline-none" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="mt-6 flex justify-end">
                  <button
                    onClick={() => { setJobViewMode('list'); setEditingJobId(null); }}
                    className="bg-[var(--color-23)] text-[var(--color-20)] px-6 py-2 rounded-xl font-bold"
                  >
                    Close Editor
                  </button>
                </div>
              </div>
            )}
          </div>
        )
      }

      {/* APPLICATIONS */}
      {
        activeTab === 'applications' && (
          <div className="bg-white rounded-2xl border border-[var(--color-23)] shadow-sm overflow-hidden">
            <div className="p-6 border-b border-[var(--color-23)] flex items-center justify-between bg-[var(--color-25)]">
              <h3 className="text-lg font-bold text-[var(--color-16)]">Active Applicants</h3>
              <div className="text-xs font-bold text-[var(--color-21)] uppercase tracking-wider">{applications.length} Submissions</div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-[var(--color-24)]/50 border-b border-[var(--color-23)]">
                    <th className="px-6 py-4 text-[10px] font-black text-[var(--color-21)] uppercase tracking-wider">Candidate</th>
                    <th className="px-6 py-4 text-[10px] font-black text-[var(--color-21)] uppercase tracking-wider">Applied For</th>
                    <th className="px-6 py-4 text-[10px] font-black text-[var(--color-21)] uppercase tracking-wider">Arrival</th>
                    <th className="px-6 py-4 text-[10px] font-black text-[var(--color-21)] uppercase tracking-wider">Documents</th>
                    <th className="px-6 py-4 text-[10px] font-black text-[var(--color-21)] uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--color-23)]">
                  {applications.map((app) => (
                    <tr key={getId(app)} className="hover:bg-[var(--color-14)] transition-colors">
                      <td className="px-6 py-5">
                        <div className="flex flex-col">
                          <span className="text-sm font-bold text-[var(--color-16)]">{app.name}</span>
                          <span className="text-xs text-[var(--color-20)]">{app.email}</span>
                        </div>
                      </td>
                      <td className="px-6 py-5">
                        <div className="flex flex-col">
                          <span className="text-sm font-semibold text-[var(--color-17)]">{jobs.find(j => getId(j) === getId(app.jobId))?.title || 'Role Removed'}</span>
                          <span className="text-[9px] font-black text-[var(--color-7)] uppercase tracking-tighter">{departments.find(d => getId(d) === getId(jobs.find(j => getId(j) === getId(app.jobId))?.departmentId))?.name}</span>
                        </div>
                      </td>
                      <td className="px-6 py-5 text-xs text-[var(--color-20)] font-medium">
                        {app.createdAt ? new Date(app.createdAt).toLocaleDateString('en-IN', {
                          day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit'
                        }) : 'N/A'}
                      </td>
                      <td className="px-6 py-5">
                        <a
                          href={app.resumeFile ? `${API_BASE_URL}${app.resumeFile}` : '#'}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-3 py-1.5 bg-white border border-[var(--color-23)] rounded-lg text-[9px] font-bold text-[var(--color-18)] hover:border-[var(--color-7)] transition-all inline-flex"
                        >
                          <HiOutlineDownload size={14} /> View Resume
                        </a>
                      </td>
                      <td className="px-6 py-5">
                        <div className="flex items-center gap-3">
                          <button className="p-2 text-[var(--color-21)] hover:text-[var(--color-7)] transition-colors"><HiOutlineIdentification size={20} /></button>
                          <button onClick={() => deleteApplication(getId(app))} className="p-2 text-[var(--color-21)] hover:text-red-500 transition-colors"><HiOutlineTrash size={18} /></button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {applications.length === 0 && (
              <div className="p-20 text-center">
                <HiOutlineUserGroup className="text-[var(--color-23)] mx-auto mb-4" size={48} />
                <h4 className="text-lg font-bold text-[var(--color-21)]">No Active Candidates</h4>
              </div>
            )}
          </div>
        )
      }

      {/* PAGE SEO */}
      {
        activeTab === 'seo' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div className="bg-white p-8 rounded-3xl border border-[var(--color-23)] space-y-6 shadow-sm">
              <h3 className="text-lg font-bold text-[var(--color-16)] border-b pb-4">Careers Landing Page SEO</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-[var(--color-19)] mb-1.5 capitalize">Page Meta Title</label>
                  <input
                    type="text"
                    value={pageSeo.title}
                    onChange={e => setPageSeo({ ...pageSeo, title: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-[var(--color-23)] bg-[var(--color-24)] text-sm focus:ring-2 focus:ring-[var(--color-11)] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[var(--color-19)] mb-1.5 capitalize">Page Meta Description</label>
                  <textarea
                    value={pageSeo.description}
                    onChange={e => setPageSeo({ ...pageSeo, description: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-2.5 rounded-xl border border-[var(--color-23)] bg-[var(--color-24)] text-sm focus:ring-2 focus:ring-[var(--color-11)] outline-none resize-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[var(--color-19)] mb-1.5 capitalize">Meta Keywords</label>
                  <input
                    type="text"
                    value={pageSeo.keywords}
                    onChange={e => setPageSeo({ ...pageSeo, keywords: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-[var(--color-23)] bg-[var(--color-24)] text-sm focus:ring-2 focus:ring-[var(--color-11)] outline-none"
                  />
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-[var(--color-23)] space-y-6 shadow-sm">
              <h4 className="text-xs font-bold text-[var(--color-21)] uppercase flex items-center gap-2">
                <HiOutlineSearch /> Search Engine Preview
              </h4>
              <div className="space-y-1.5 p-6 bg-[var(--color-25)] rounded-2xl border border-[var(--color-23)]">
                <p className="text-xs text-[#202124] flex items-center gap-1">
                  <HiOutlineGlobe size={14} /> avenstek.com › careers
                </p>
                <h3 className="text-xl text-[#1a0dab] font-medium hover:underline cursor-pointer truncate">
                  {pageSeo.title || "Careers | Avenstek"}
                </h3>
                <p className="text-sm text-[#4d5156] leading-relaxed line-clamp-3">
                  {pageSeo.description || "Join our team. Explore career opportunities."}
                </p>
              </div>
              <div className="p-4 bg-[var(--color-13)] rounded-xl border border-[var(--color-11)] text-[var(--color-7)] text-[10px] font-bold">
                Main page SEO settings help search engines discover your employer brand. Individual jobs manage their own SEO in the Jobs tab.
              </div>
            </div>
          </div>
        )
      }

      {/* DASHBOARD STATS FOOTER */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
        <div className="bg-white p-6 rounded-2xl border border-[var(--color-23)] shadow-sm flex items-center justify-between">
          <div>
            <p className="text-[10px] font-black text-[var(--color-21)] uppercase tracking-widest mb-1">Active Roles</p>
            <h3 className="text-2xl font-black text-[var(--color-16)]">{jobs.filter(j => j.status).length}</h3>
          </div>
          <div className="p-3 bg-[var(--color-13)] text-[var(--color-7)] rounded-xl border border-[var(--color-12)]">
            <HiOutlineBriefcase size={20} />
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-[var(--color-23)] shadow-sm flex items-center justify-between">
          <div>
            <p className="text-[10px] font-black text-[var(--color-21)] uppercase tracking-widest mb-1">Applications</p>
            <h3 className="text-2xl font-black text-[var(--color-16)]">{applications.length}</h3>
          </div>
          <div className="p-3 bg-[var(--color-13)] text-[var(--color-7)] rounded-xl border border-[var(--color-12)]">
            <HiOutlineUserGroup size={20} />
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-[var(--color-23)] shadow-sm flex items-center justify-between">
          <div>
            <p className="text-[10px] font-black text-[var(--color-21)] uppercase tracking-widest mb-1">Departments</p>
            <h3 className="text-2xl font-black text-[var(--color-16)]">{departments.length}</h3>
          </div>
          <div className="p-3 bg-[var(--color-13)] text-[var(--color-7)] rounded-xl border border-[var(--color-12)]">
            <HiOutlineCollection size={20} />
          </div>
        </div>
      </div>

      <IconPickerModal
        isOpen={!!iconPickerTarget}
        onClose={() => setIconPickerTarget(null)}
        onSelect={(iconName) => {
          if (!iconPickerTarget) return;
          if (iconPickerTarget.type === 'why') {
            setWhyAvenstek(prev => prev.map(i => getId(i) === iconPickerTarget.id ? { ...i, icon: iconName } : i));
          } else {
            setPrinciples(prev => prev.map(i => getId(i) === iconPickerTarget.id ? { ...i, icon: iconName } : i));
          }
        }}
      />
    </div >
  );
};

export default CareersManagement;