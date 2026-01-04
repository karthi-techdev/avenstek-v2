"use client"
import React, { useState } from 'react';
import * as HiIcons from 'react-icons/hi';
import { 
  HiOutlineSave, HiOutlinePlus, HiOutlineTrash, HiOutlinePhotograph, 
  HiOutlineBriefcase, HiOutlineUserGroup, HiOutlineTemplate, HiOutlineLightningBolt,
  HiOutlineAdjustments, HiOutlineChevronDown, HiOutlineExternalLink, HiOutlineDownload,
  HiOutlineCollection, HiOutlineIdentification, HiOutlineGlobe, HiOutlineCube,
  HiOutlineSearch
} from 'react-icons/hi';

// Import your custom RichTextEditor
import RichTextEditor from '../components/RichTextEditor';

// --- Types & Interfaces ---

interface HeroSection {
  heroTitle: string;
  highlightedText: string;
  heroSubtitle: string;
  ctaText: string;
  images: string[];
}

interface CultureModule {
  id: string;
  icon: string;
  title: string;
  description: string;
  order: number;
}

interface Department {
  id: string;
  name: string;
  slug: string;
  status: boolean;
}

interface Job {
  id: string;
  departmentId: string;
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
  id: string;
  jobId: string;
  name: string;
  email: string;
  phone: string;
  aboutYourself: string;
  resumeFile: string;
  appliedAt: string;
}

interface PageSEO {
  title: string;
  description: string;
  keywords: string;
}

const IconRenderer = ({ name, size = 20 }: { name: string; size?: number }) => {
  const IconComponent = (HiIcons as any)[name] || HiOutlineCube;
  return <IconComponent size={size} />;
};

const CareersManagement: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'hero' | 'culture' | 'departments' | 'jobs' | 'applications' | 'seo'>('hero');
  const [isSaving, setIsSaving] = useState(false);

  // State Management
  const [hero, setHero] = useState<HeroSection>({
    heroTitle: "Build the Future of",
    highlightedText: "Digital Assets",
    heroSubtitle: "Join our global collective of builders and thinkers. We're looking for passionate individuals to join us in scaling modern stacks.",
    ctaText: "View Open Roles",
    images: ["https://picsum.photos/seed/c1/400/300", "https://picsum.photos/seed/c2/400/300", "https://picsum.photos/seed/c3/400/300"]
  });

  const [pageSeo, setPageSeo] = useState<PageSEO>({
    title: "Careers at Avenstek | Join Our Global Collective",
    description: "Explore career opportunities at Avenstek. Join a high-velocity team building modern digital assets and scalable engineering systems.",
    keywords: "careers, job openings, software engineering jobs, remote work, avenstek"
  });

  const [whyAvenstek, setWhyAvenstek] = useState<CultureModule[]>([
    { id: 'w1', icon: 'HiOutlineLightningBolt', title: 'High Velocity', description: 'We ship faster without breaking quality barriers.', order: 1 },
    { id: 'w2', icon: 'HiOutlineGlobeAlt', title: 'Remote First', description: 'Work from anywhere in the world with total autonomy.', order: 2 }
  ]);

  const [principles, setPrinciples] = useState<CultureModule[]>([
    { id: 'p1', icon: 'HiOutlineTemplate', title: 'Systematic Thinking', description: 'We build systems, not just components.', order: 1 }
  ]);

  const [departments, setDepartments] = useState<Department[]>([
    { id: 'dept-1', name: 'Engineering', slug: 'engineering', status: true },
    { id: 'dept-2', name: 'Design', slug: 'design', status: true }
  ]);

  const [jobs, setJobs] = useState<Job[]>([
    { 
      id: 'job-1', 
      departmentId: 'dept-1', 
      title: 'Senior Frontend Architect', 
      preText: 'Lead the evolution of our design system and internal frameworks.', 
      description: '<h2>Overview</h2><p>As a Senior Architect, you will influence the global technical direction...</p>', 
      jobType: 'Full-time', 
      salaryMin: 2400000, 
      salaryMax: 4800000, 
      currency: 'INR', 
      location: 'Bangalore / Remote', 
      workMode: 'Remote', 
      slug: 'senior-frontend-architect', 
      status: true,
      seoTitle: 'Senior Frontend Architect Job | Avenstek Careers',
      seoDescription: 'Apply for the Senior Frontend Architect position at Avenstek. Lead digital asset evolution with React and modern stacks.',
      seoKeywords: 'frontend architect, react jobs, remote architect, avenstek careers'
    }
  ]);

  const [applications, setApplications] = useState<JobApplication[]>([
    {
      id: 'app-1',
      jobId: 'job-1',
      name: 'Rohan Sharma',
      email: 'rohan.s@engineer.io',
      phone: '+91 9876543210',
      aboutYourself: 'Passionate about React and system design. 8 years exp.',
      resumeFile: 'resume_rohan.pdf',
      appliedAt: '2025-07-07 10:45 AM'
    }
  ]);

  const handleSave = async () => {
    setIsSaving(true);
    await new Promise(r => setTimeout(r, 800));
    setIsSaving(false);
    alert('Careers configuration successfully updated!');
  };

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
      </div>

      {/* HERO & GALLERY */}
      {activeTab === 'hero' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-2xl border border-[var(--color-23)] space-y-4 shadow-sm">
            <h3 className="text-lg font-bold text-[var(--color-16)] border-b pb-4">Hero Editor</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-[var(--color-19)] mb-1.5">Hero Headline</label>
                <input type="text" value={hero.heroTitle} onChange={e => setHero({...hero, heroTitle: e.target.value})} className="w-full px-4 py-2.5 rounded-xl border border-[var(--color-23)] bg-[var(--color-24)] text-sm focus:ring-2 focus:ring-[var(--color-11)] outline-none" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[var(--color-19)] mb-1.5">Highlighted Text</label>
                <input type="text" value={hero.highlightedText} onChange={e => setHero({...hero, highlightedText: e.target.value})} className="w-full px-4 py-2.5 rounded-xl border border-[var(--color-23)] bg-[var(--color-24)] text-sm font-bold text-[var(--color-7)] outline-none" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[var(--color-19)] mb-1.5">Hero Subtitle</label>
                <textarea value={hero.heroSubtitle} onChange={e => setHero({...hero, heroSubtitle: e.target.value})} rows={3} className="w-full px-4 py-2.5 rounded-xl border border-[var(--color-23)] bg-[var(--color-24)] text-sm focus:ring-2 focus:ring-[var(--color-11)] outline-none resize-none" />
              </div>
            </div>
            
            <div className="pt-4 border-t border-[var(--color-23)]">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-sm font-bold text-[var(--color-16)]">Visual Gallery (Max 6)</h4>
                <button 
                  onClick={() => hero.images.length < 6 && setHero({...hero, images: [...hero.images, 'https://picsum.photos/seed/' + Date.now() + '/400/300']})}
                  className="p-1.5 bg-[var(--color-13)] text-[var(--color-7)] rounded-lg hover:scale-110 transition-transform"
                >
                  <HiOutlinePlus size={18} />
                </button>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {hero.images.map((img, i) => (
                  <div key={i} className="relative aspect-[4/3] group rounded-xl overflow-hidden shadow-inner bg-[var(--color-24)] border border-[var(--color-23)]">
                    <img src={img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="" />
                    <button 
                      onClick={() => setHero({...hero, images: hero.images.filter((_, idx) => idx !== i)})}
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
                {hero.heroTitle} <br/>
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
      )}

      {/* CULTURE */}
      {activeTab === 'culture' && (
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
                <div key={item.id} className="p-5 border border-[var(--color-23)] rounded-2xl bg-[var(--color-25)] space-y-4 group">
                  <div className="flex justify-between items-start">
                    <div className="p-3 bg-white rounded-xl border border-[var(--color-23)] text-[var(--color-7)] shadow-sm">
                      <IconRenderer name={item.icon} />
                    </div>
                    <button onClick={() => setWhyAvenstek(prev => prev.filter(p => p.id !== item.id))} className="text-[var(--color-27)] hover:underline text-xs font-bold"><HiOutlineTrash /></button>
                  </div>
                  <div className="space-y-3">
                    <input value={item.title} onChange={e => setWhyAvenstek(prev => prev.map(p => p.id === item.id ? {...p, title: e.target.value} : p))} className="w-full bg-transparent border-none p-0 text-base font-bold text-[var(--color-16)] outline-none focus:ring-0" placeholder="Title" />
                    <textarea value={item.description} onChange={e => setWhyAvenstek(prev => prev.map(p => p.id === item.id ? {...p, description: e.target.value} : p))} className="w-full bg-transparent border-none p-0 text-xs text-[var(--color-20)] font-medium leading-relaxed outline-none focus:ring-0 resize-none" placeholder="Description" rows={2} />
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
                <div key={item.id} className="p-5 border border-[var(--color-23)] rounded-2xl bg-[var(--color-25)] space-y-4 group">
                  <div className="flex justify-between items-start">
                    <div className="p-3 bg-white rounded-xl border border-[var(--color-23)] text-[var(--color-8)] shadow-sm">
                      <IconRenderer name={item.icon} />
                    </div>
                    <button onClick={() => setPrinciples(prev => prev.filter(p => p.id !== item.id))} className="text-[var(--color-27)] hover:underline text-xs font-bold"><HiOutlineTrash /></button>
                  </div>
                  <div className="space-y-3">
                    <input value={item.title} onChange={e => setPrinciples(prev => prev.map(p => p.id === item.id ? {...p, title: e.target.value} : p))} className="w-full bg-transparent border-none p-0 text-base font-bold text-[var(--color-16)] outline-none focus:ring-0" placeholder="Principle Title" />
                    <textarea value={item.description} onChange={e => setPrinciples(prev => prev.map(p => p.id === item.id ? {...p, description: e.target.value} : p))} className="w-full bg-transparent border-none p-0 text-xs text-[var(--color-20)] font-medium leading-relaxed outline-none focus:ring-0 resize-none" placeholder="Description" rows={2} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* DEPARTMENTS */}
      {activeTab === 'departments' && (
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
                   <tr key={dept.id} className="hover:bg-[var(--color-14)] transition-colors">
                     <td className="px-6 py-4">
                        <input value={dept.name} onChange={e => setDepartments(prev => prev.map(d => d.id === dept.id ? {...d, name: e.target.value} : d))} className="bg-transparent border-none font-bold text-sm text-[var(--color-16)] p-0 focus:ring-0 outline-none w-full" />
                     </td>
                     <td className="px-6 py-4">
                        <span className="text-xs font-mono text-[var(--color-20)]">/jobs/{dept.slug}</span>
                     </td>
                     <td className="px-6 py-4">
                        <button 
                          onClick={() => setDepartments(prev => prev.map(d => d.id === dept.id ? {...d, status: !d.status} : d))}
                          className={`px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-tighter ${dept.status ? 'bg-green-50 text-green-600 border border-green-100' : 'bg-gray-100 text-gray-400 border border-gray-200'}`}
                        >
                          {dept.status ? 'Visible' : 'Hidden'}
                        </button>
                     </td>
                     <td className="px-6 py-4">
                       <button onClick={() => setDepartments(prev => prev.filter(d => d.id !== dept.id))} className="text-[var(--color-21)] hover:text-red-500 transition-colors">
                         <HiOutlineTrash size={18} />
                       </button>
                     </td>
                   </tr>
                 ))}
               </tbody>
             </table>
           </div>
        </div>
      )}

      {/* JOB ROLES */}
      {activeTab === 'jobs' && (
        <div className="space-y-6">
          <div className="bg-white p-4 rounded-2xl border border-[var(--color-23)] shadow-sm flex items-center justify-between">
            <div className="flex items-center gap-3 px-2">
              <HiOutlineAdjustments className="text-[var(--color-7)]" size={20} />
              <h3 className="text-base font-bold text-[var(--color-16)]">Open Job Inventory</h3>
            </div>
            <button 
              onClick={() => setJobs([...jobs, { 
                id: 'job-' + Date.now(), 
                departmentId: departments[0]?.id || '', 
                title: 'New Role', 
                preText: 'Short summary...', 
                description: '<p>Role details...</p>', 
                jobType: 'Full-time', 
                salaryMin: 0, 
                salaryMax: 0, 
                currency: 'INR', 
                location: 'Remote', 
                workMode: 'Remote', 
                slug: 'new-role', 
                status: true,
                seoTitle: '',
                seoDescription: '',
                seoKeywords: ''
              }])}
              className="bg-[var(--color-7)] text-white px-5 py-2.5 rounded-xl text-xs font-bold shadow-sm"
            >
              Post New Opening
            </button>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {jobs.map((job) => (
              <div key={job.id} className="bg-white rounded-3xl border border-[var(--color-23)] shadow-md overflow-hidden group hover:border-[var(--color-11)] transition-all">
                 <div className="p-6 border-b border-[var(--color-23)] flex flex-col md:flex-row md:items-center justify-between gap-6 bg-[var(--color-25)]">
                    <div className="flex-1 space-y-1">
                       <div className="flex items-center gap-2">
                          <span className="text-[9px] font-black text-[var(--color-7)] bg-white px-2 py-0.5 rounded border border-[var(--color-23)] uppercase">
                            {departments.find(d => d.id === job.departmentId)?.name || 'Unset'}
                          </span>
                          <span className="text-[10px] text-[var(--color-21)] font-bold italic tracking-wider">ID: {job.id}</span>
                       </div>
                       <input 
                         value={job.title} 
                         onChange={e => setJobs(prev => prev.map(j => j.id === job.id ? {...j, title: e.target.value} : j))} 
                         className="w-full bg-transparent border-none p-0 text-2xl font-black text-[var(--color-16)] focus:ring-0 outline-none" 
                       />
                    </div>
                    <div className="flex items-center gap-3">
                       <button onClick={() => setJobs(prev => prev.filter(j => j.id !== job.id))} className="p-2.5 text-[var(--color-21)] hover:text-red-500 transition-colors bg-white rounded-xl border border-[var(--color-23)]"><HiOutlineTrash size={18}/></button>
                       <button 
                          onClick={() => setJobs(prev => prev.map(j => j.id === job.id ? {...j, status: !j.status} : j))}
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
                            onChange={e => setJobs(prev => prev.map(j => j.id === job.id ? {...j, preText: e.target.value} : j))} 
                            rows={2} 
                            className="w-full px-5 py-4 bg-[var(--color-24)] rounded-2xl border border-[var(--color-23)] text-sm font-medium outline-none resize-none focus:ring-1 focus:ring-[var(--color-7)]" 
                          />
                       </div>

                       <div>
                          <label className="text-[10px] font-black text-[var(--color-21)] uppercase tracking-widest mb-3 block">Full Job Description (CK Editor)</label>
                          <div className="border border-[var(--color-23)] rounded-[1.5rem] overflow-hidden bg-white shadow-inner min-h-[400px]">
                             {/* Passed a unique key to prevent duplicate editor initialization */}
                             <RichTextEditor 
                                key={job.id}
                                data={job.description}
                                onChange={(data: string) => {
                                  setJobs(prev => prev.map(j => j.id === job.id ? {...j, description: data} : j));
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
                                  onChange={e => setJobs(prev => prev.map(j => j.id === job.id ? {...j, seoTitle: e.target.value} : j))} 
                                  className="w-full bg-white border border-[var(--color-23)] rounded-xl px-4 py-2.5 text-xs font-bold outline-none focus:ring-1 focus:ring-[var(--color-7)]" 
                                  placeholder="SEO-friendly job title..."
                                />
                             </div>
                             <div>
                                <label className="text-[9px] font-black text-[var(--color-21)] uppercase mb-1.5 block px-1">Meta Description</label>
                                <textarea 
                                  value={job.seoDescription} 
                                  onChange={e => setJobs(prev => prev.map(j => j.id === job.id ? {...j, seoDescription: e.target.value} : j))} 
                                  rows={2}
                                  className="w-full bg-white border border-[var(--color-23)] rounded-xl px-4 py-2.5 text-xs font-medium outline-none focus:ring-1 focus:ring-[var(--color-7)] resize-none" 
                                  placeholder="Meta description for search engines..."
                                />
                             </div>
                             <div>
                                <label className="text-[9px] font-black text-[var(--color-21)] uppercase mb-1.5 block px-1">Keywords</label>
                                <input 
                                  value={job.seoKeywords} 
                                  onChange={e => setJobs(prev => prev.map(j => j.id === job.id ? {...j, seoKeywords: e.target.value} : j))} 
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
                                <select value={job.departmentId} onChange={e => setJobs(prev => prev.map(j => j.id === job.id ? {...j, departmentId: e.target.value} : j))} className="w-full bg-white border border-[var(--color-23)] rounded-xl px-4 py-2.5 text-xs font-bold outline-none">
                                   {departments.map(d => <option key={d.id} value={d.id}>{d.name}</option>)}
                                </select>
                             </div>
                             <div className="grid grid-cols-2 gap-4">
                                <div>
                                   <label className="text-[9px] font-bold text-[var(--color-21)] uppercase mb-1.5 block">Job Type</label>
                                   <select value={job.jobType} onChange={e => setJobs(prev => prev.map(j => j.id === job.id ? {...j, jobType: e.target.value as any} : j))} className="w-full bg-white border border-[var(--color-23)] rounded-xl px-4 py-2.5 text-xs font-bold outline-none">
                                      <option>Full-time</option>
                                      <option>Part-time</option>
                                      <option>Contract</option>
                                   </select>
                                </div>
                                <div>
                                   <label className="text-[9px] font-bold text-[var(--color-21)] uppercase mb-1.5 block">Work Mode</label>
                                   <select value={job.workMode} onChange={e => setJobs(prev => prev.map(j => j.id === job.id ? {...j, workMode: e.target.value as any} : j))} className="w-full bg-white border border-[var(--color-23)] rounded-xl px-4 py-2.5 text-xs font-bold outline-none">
                                      <option>Remote</option>
                                      <option>Onsite</option>
                                   </select>
                                </div>
                             </div>
                             <div className="pt-4 border-t border-[var(--color-23)]">
                                <label className="text-[9px] font-bold text-[var(--color-21)] uppercase mb-3 block">Annual Range (INR)</label>
                                <div className="flex items-center gap-2">
                                   <input type="number" value={job.salaryMin} onChange={e => setJobs(prev => prev.map(j => j.id === job.id ? {...j, salaryMin: parseInt(e.target.value)} : j))} className="w-full bg-white border border-[var(--color-23)] rounded-xl px-4 py-2.5 text-xs font-bold outline-none" placeholder="Min" />
                                   <span className="text-[var(--color-21)] font-bold">-</span>
                                   <input type="number" value={job.salaryMax} onChange={e => setJobs(prev => prev.map(j => j.id === job.id ? {...j, salaryMax: parseInt(e.target.value)} : j))} className="w-full bg-white border border-[var(--color-23)] rounded-xl px-4 py-2.5 text-xs font-bold outline-none" placeholder="Max" />
                                </div>
                             </div>
                             <div className="pt-4 border-t border-[var(--color-23)]">
                                <label className="text-[9px] font-bold text-[var(--color-21)] uppercase mb-2 block">Redirect URL Slug</label>
                                <div className="flex items-center gap-2 bg-white border border-[var(--color-23)] px-4 py-2.5 rounded-xl">
                                   <span className="text-[10px] text-[var(--color-21)] font-black">/jobs/</span>
                                   <input value={job.slug} onChange={e => setJobs(prev => prev.map(j => j.id === job.id ? {...j, slug: e.target.value} : j))} className="w-full bg-transparent border-none p-0 text-[10px] font-bold focus:ring-0 outline-none" />
                                </div>
                             </div>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* APPLICATIONS */}
      {activeTab === 'applications' && (
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
                   <tr key={app.id} className="hover:bg-[var(--color-14)] transition-colors">
                     <td className="px-6 py-5">
                        <div className="flex flex-col">
                           <span className="text-sm font-bold text-[var(--color-16)]">{app.name}</span>
                           <span className="text-xs text-[var(--color-20)]">{app.email}</span>
                        </div>
                     </td>
                     <td className="px-6 py-5">
                        <div className="flex flex-col">
                           <span className="text-sm font-semibold text-[var(--color-17)]">{jobs.find(j => j.id === app.jobId)?.title || 'Role Removed'}</span>
                           <span className="text-[9px] font-black text-[var(--color-7)] uppercase tracking-tighter">{departments.find(d => d.id === jobs.find(j => j.id === app.jobId)?.departmentId)?.name}</span>
                        </div>
                     </td>
                     <td className="px-6 py-5 text-xs text-[var(--color-20)] font-medium">{app.appliedAt}</td>
                     <td className="px-6 py-5">
                        <button className="flex items-center gap-2 px-3 py-1.5 bg-white border border-[var(--color-23)] rounded-lg text-[9px] font-bold text-[var(--color-18)] hover:border-[var(--color-7)] transition-all">
                           <HiOutlineDownload size={14} /> Resume.pdf
                        </button>
                     </td>
                     <td className="px-6 py-5">
                        <div className="flex items-center gap-3">
                           <button className="p-2 text-[var(--color-21)] hover:text-[var(--color-7)] transition-colors"><HiOutlineIdentification size={20}/></button>
                           <button onClick={() => setApplications(prev => prev.filter(a => a.id !== app.id))} className="p-2 text-[var(--color-21)] hover:text-red-500 transition-colors"><HiOutlineTrash size={18}/></button>
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
      )}

      {/* PAGE SEO */}
      {activeTab === 'seo' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="bg-white p-8 rounded-3xl border border-[var(--color-23)] space-y-6 shadow-sm">
            <h3 className="text-lg font-bold text-[var(--color-16)] border-b pb-4">Careers Landing Page SEO</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-[var(--color-19)] mb-1.5 capitalize">Page Meta Title</label>
                <input 
                  type="text" 
                  value={pageSeo.title}
                  onChange={e => setPageSeo({...pageSeo, title: e.target.value})}
                  className="w-full px-4 py-2.5 rounded-xl border border-[var(--color-23)] bg-[var(--color-24)] text-sm focus:ring-2 focus:ring-[var(--color-11)] outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[var(--color-19)] mb-1.5 capitalize">Page Meta Description</label>
                <textarea 
                  value={pageSeo.description}
                  onChange={e => setPageSeo({...pageSeo, description: e.target.value})}
                  rows={4}
                  className="w-full px-4 py-2.5 rounded-xl border border-[var(--color-23)] bg-[var(--color-24)] text-sm focus:ring-2 focus:ring-[var(--color-11)] outline-none resize-none"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[var(--color-19)] mb-1.5 capitalize">Meta Keywords</label>
                <input 
                  type="text" 
                  value={pageSeo.keywords}
                  onChange={e => setPageSeo({...pageSeo, keywords: e.target.value})}
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
      )}

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
    </div>
  );
};

export default CareersManagement;