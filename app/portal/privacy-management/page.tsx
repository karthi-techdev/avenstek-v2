"use client";

import React, { useState, useEffect } from 'react';
import {
    HiOutlineSave,
    HiOutlineSearch,
    HiOutlineGlobe,
} from 'react-icons/hi';
import api from '@/lib/api';
import LoadingScreen from '../components/LoadingScreen';
import RichTextEditor from '../components/RichTextEditor';
import { useToast } from '../components/Toast';

interface SEOData {
    title: string;
    description: string;
    keywords: string;
}

const PrivacyManagement: React.FC = () => {
    const { showToast } = useToast();
    const [activeTab, setActiveTab] = useState<'content' | 'seo'>('content');
    const [isSaving, setIsSaving] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const [content, setContent] = useState<string>("");
    const [seo, setSeo] = useState<SEOData>({
        title: "",
        description: "",
        keywords: ""
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await api.get('/content/privacy');
                if (data.content) setContent(data.content);
                if (data.seo) setSeo(data.seo);
            } catch (err) {
                console.error("Error fetching privacy data", err);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, []);

    const handleSeoChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setSeo(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSave = async () => {
        setIsSaving(true);
        try {
            await api.post('/content/privacy', { content, seo });
            showToast('success', 'Privacy Policy Saved', 'Privacy page content updated.');
        } catch (err) {
            console.error("Error saving privacy data", err);
            showToast('error', 'Update Failed', 'Failed to update Privacy Policy Page.');
        } finally {
            setIsSaving(false);
        }
    };

    if (isLoading) return <LoadingScreen text="Loading Information" />;

    return (
        <div className="space-y-6 animate-in fade-in duration-500 pb-10 max-w-7xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-[var(--color-16)]">Privacy Policy Management</h1>
                    <p className="text-[var(--color-20)]">Manage the privacy policy and data protection terms.</p>
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
                {(['content', 'seo'] as const).map(tab => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-6 py-3 text-sm font-semibold transition-all border-b-2 capitalize whitespace-nowrap ${activeTab === tab
                            ? 'border-[var(--color-7)] text-[var(--color-7)]'
                            : 'border-transparent text-[var(--color-20)] hover:text-[var(--color-16)]'
                            }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {activeTab === 'content' && (
                <div className="bg-white p-8 rounded-3xl border border-[var(--color-23)] shadow-sm space-y-6">
                    <div className="space-y-3">
                        <label className="text-[10px] font-black text-[var(--color-21)] uppercase block">Page Content</label>
                        <div className="border border-[var(--color-23)] rounded-3xl overflow-hidden min-h-[500px] bg-white text-black">
                            <RichTextEditor
                                id="privacy-content"
                                data={content}
                                onChange={(data: string) => setContent(data)}
                            />
                        </div>
                    </div>
                </div>
            )}

            {activeTab === 'seo' && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                    <div className="bg-white p-8 rounded-3xl border border-[var(--color-23)] space-y-6 shadow-sm">
                        <h3 className="text-lg font-bold text-[var(--color-16)] border-b pb-4 flex items-center gap-2">
                            <HiOutlineGlobe className="text-[var(--color-7)]" /> SEO Meta Management
                        </h3>
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

                    <div className="bg-white p-8 rounded-3xl border border-[var(--color-23)] space-y-6 shadow-sm min-h-[400px]">
                        <h3 className="text-lg font-bold text-[var(--color-16)] border-b pb-4 flex items-center gap-2">
                            <HiOutlineSearch className="text-[var(--color-7)]" /> Search Engine Preview
                        </h3>

                        <div className="bg-[#f8f9fa] p-8 rounded-2xl border border-gray-100 text-black">
                            <div className="flex flex-col gap-1 max-w-xl">
                                <div className="flex items-center gap-2 text-sm text-[#202124]">
                                    <div className="w-7 h-7 bg-white rounded-full border border-gray-200 flex items-center justify-center p-1 overflow-hidden">
                                        <img src="/favicon.ico" alt="fav" className="w-full h-full object-contain" />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-[14px] leading-tight font-medium">Avenstek Solutions</span>
                                        <span className="text-[12px] text-[#4d5156] leading-tight">https://avenstek.com › privacy-policy</span>
                                    </div>
                                </div>
                                <h3 className="text-[20px] text-[#1a0dab] font-medium leading-tight hover:underline cursor-pointer mt-1">
                                    {seo.title || "Privacy Policy | Avenstek Solutions"}
                                </h3>
                                <p className="text-[14px] text-[#4d5156] leading-relaxed mt-1 line-clamp-2">
                                    {seo.description || "Read our privacy policy to understand how Avenstek Solutions collects, uses, and protects your personal data."}
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
        </div>
    );
};

export default PrivacyManagement;
