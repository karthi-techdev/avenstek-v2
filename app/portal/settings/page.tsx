"use client"
import React, { useState } from 'react';
import {
  HiOutlineSave,
  HiOutlinePhotograph,
  HiOutlineGlobe,
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLink,
  HiOutlineShieldCheck,
  HiOutlineColorSwatch,
  HiOutlineAdjustments,
  HiOutlineHashtag
} from 'react-icons/hi';
import { useModal } from '@/app/components/ConfirmModal';
import LoadingScreen from '../components/LoadingScreen';

interface GeneralSettings {
  companyName: string;
  companyTagline: string;
  companyEmail: string;
  companyPhone: string;
  themeColor: string;
  logoUrl: string;
  faviconUrl: string;
  isMaintenanceMode: boolean;
  socials: {
    linkedin: string;
    twitter: string;
    instagram: string;
    facebook: string;
  };
}

import api from '@/lib/api';

import { useToast } from '../components/Toast';

const Settings: React.FC = () => {
  const { showToast } = useToast();
  const { showConfirm } = useModal();
  const [isSaving, setIsSaving] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [settings, setSettings] = useState<GeneralSettings>({
    companyName: '',
    companyTagline: '',
    companyEmail: '',
    companyPhone: '',
    themeColor: '#1570EF',
    logoUrl: '',
    faviconUrl: '',
    isMaintenanceMode: false,
    socials: {
      linkedin: '',
      twitter: '',
      instagram: '',
      facebook: ''
    }
  });

  React.useEffect(() => {
    const fetchSettings = async () => {
      try {
        const { data } = await api.get('/content/settings');
        if (data && Object.keys(data).length > 0) {
          // Ensure nested objects are merged correctly to avoid overwrites if backend returns partials
          setSettings(prev => ({
            ...prev,
            ...data,
            socials: { ...prev.socials, ...(data.socials || {}) }
          }));
        }
      } catch (err) {
        console.error("Failed to fetch settings", err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchSettings();
  }, []);

  const handleSave = async () => {
    setIsSaving(true);
    try {
      // Strip system fields that shouldn't be sent back to the API
      const { _id, id, createdAt, updatedAt, __v, ...payload } = settings as any;

      await api.post('/content/settings', payload);
      showToast('success', 'Settings Saved', 'Global configuration has been updated.');

      // Refresh to ensure we have the latest state (optional, but good practice)
      const { data } = await api.get('/content/settings');
      if (data) {
        setSettings(prev => ({
          ...prev,
          ...data,
          socials: { ...prev.socials, ...(data.socials || {}) }
        }));
      }
    } catch (err) {
      console.error("Error saving settings", err);
      showToast('error', 'Update Failed', 'Could not save settings. Please try again.');
    } finally {
      setIsSaving(false);
    }
  };

  const updateSettings = (key: keyof GeneralSettings, value: any) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  const updateSocial = (key: keyof GeneralSettings['socials'], value: string) => {
    setSettings(prev => ({
      ...prev,
      socials: { ...prev.socials, [key]: value }
    }));
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>, key: 'logoUrl' | 'faviconUrl') => {
    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('image', file);

    try {
      const { data } = await api.post('/content/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      updateSettings(key, data.url);
    } catch (err) {
      console.error("Upload failed", err);
      showToast("error", "Upload Failed", "Failed to upload image. Please try again.");
    }
  };

  if (isLoading) return <LoadingScreen text="Loading Configuration" />;

  return (
    <div className="space-y-8 animate-in pb-20">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-[var(--color-16)] tracking-tight">General Settings</h1>
          <p className="text-[var(--color-20)] font-medium">Configure global identity, contact channels, and system status.</p>
        </div>
        <button
          onClick={handleSave}
          disabled={isSaving}
          className="flex items-center gap-2 bg-[var(--color-7)] text-white px-8 py-3 rounded-2xl font-black shadow-xl shadow-[var(--color-7)]/20 hover:scale-[1.02] active:scale-95 transition-all disabled:opacity-50"
        >
          {isSaving ? <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div> : <HiOutlineSave size={20} />}
          Update Global Configuration
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Brand Identity */}
        <div className="lg:col-span-2 space-y-8">
          <section className="bg-white p-8 rounded-[2.5rem] border border-[var(--color-23)] shadow-sm space-y-8">
            <h3 className="text-xl font-black text-[var(--color-16)] flex items-center gap-3">
              <HiOutlineAdjustments className="text-[var(--color-7)]" /> Brand Identity
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black text-[var(--color-21)] uppercase tracking-[0.2em] px-1">Company Name</label>
                <input
                  type="text"
                  value={settings.companyName}
                  onChange={e => updateSettings('companyName', e.target.value)}
                  className="w-full px-5 py-4 bg-[var(--color-24)] rounded-2xl border border-[var(--color-23)] text-sm font-bold text-[var(--color-16)] outline-none focus:ring-2 focus:ring-[var(--color-11)] transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-[var(--color-21)] uppercase tracking-[0.2em] px-1">Company Tagline</label>
                <input
                  type="text"
                  value={settings.companyTagline}
                  onChange={e => updateSettings('companyTagline', e.target.value)}
                  className="w-full px-5 py-4 bg-[var(--color-24)] rounded-2xl border border-[var(--color-23)] text-sm font-bold text-[var(--color-16)] outline-none focus:ring-2 focus:ring-[var(--color-11)] transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-[var(--color-21)] uppercase tracking-[0.2em] px-1">Theme Brand Color</label>
                <div className="flex gap-2">
                  <div className="w-14 h-14 rounded-2xl shadow-inner border border-[var(--color-23)]" style={{ backgroundColor: settings.themeColor }}></div>
                  <input
                    type="text"
                    value={settings.themeColor}
                    onChange={e => updateSettings('themeColor', e.target.value)}
                    className="flex-1 px-5 py-4 bg-[var(--color-24)] rounded-2xl border border-[var(--color-23)] text-sm font-bold text-[var(--color-16)] outline-none"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-[var(--color-21)] uppercase tracking-[0.2em] px-1">Website URL Prefix</label>
                <div className="flex items-center gap-2 bg-[var(--color-24)] px-5 py-4 rounded-2xl border border-[var(--color-23)]">
                  <HiOutlineGlobe className="text-[var(--color-21)]" />
                  <span className="text-sm font-bold text-[var(--color-16)]">https://lumina.io</span>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white p-8 rounded-[2.5rem] border border-[var(--color-23)] shadow-sm space-y-8">
            <h3 className="text-xl font-black text-[var(--color-16)] flex items-center gap-3">
              <HiOutlineMail className="text-[var(--color-7)]" /> Contact Channels
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black text-[var(--color-21)] uppercase tracking-[0.2em] px-1">Support Email</label>
                <div className="flex items-center gap-3 bg-[var(--color-24)] px-5 py-4 rounded-2xl border border-[var(--color-23)]">
                  <HiOutlineMail className="text-[var(--color-21)]" />
                  <input
                    type="email"
                    value={settings.companyEmail}
                    onChange={e => updateSettings('companyEmail', e.target.value)}
                    className="bg-transparent border-none w-full text-sm font-bold text-[var(--color-16)] focus:ring-0 outline-none p-0"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-[var(--color-21)] uppercase tracking-[0.2em] px-1">Business Phone</label>
                <div className="flex items-center gap-3 bg-[var(--color-24)] px-5 py-4 rounded-2xl border border-[var(--color-23)]">
                  <HiOutlinePhone className="text-[var(--color-21)]" />
                  <input
                    type="text"
                    value={settings.companyPhone}
                    onChange={e => updateSettings('companyPhone', e.target.value)}
                    className="bg-transparent border-none w-full text-sm font-bold text-[var(--color-16)] focus:ring-0 outline-none p-0"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white p-8 rounded-[2.5rem] border border-[var(--color-23)] shadow-sm space-y-8">
            <h3 className="text-xl font-black text-[var(--color-16)] flex items-center gap-3">
              <HiOutlineHashtag className="text-[var(--color-7)]" /> Social Links
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.keys(settings.socials).map(key => (
                <div key={key} className="space-y-2">
                  <label className="text-[10px] font-black text-[var(--color-21)] uppercase tracking-[0.2em] px-1 capitalize">{key}</label>
                  <div className="flex items-center gap-3 bg-[var(--color-24)] px-5 py-4 rounded-2xl border border-[var(--color-23)]">
                    <HiOutlineLink className="text-[var(--color-21)]" />
                    <input
                      type="text"
                      value={(settings.socials as any)[key]}
                      onChange={e => updateSocial(key as any, e.target.value)}
                      className="bg-transparent border-none w-full text-sm font-bold text-[var(--color-16)] focus:ring-0 outline-none p-0"
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right Column: Assets & Status */}
        <div className="space-y-8">
          <section className="bg-white p-8 rounded-[2.5rem] border border-[var(--color-23)] shadow-sm space-y-6">
            <h3 className="text-lg font-black text-[var(--color-16)] uppercase tracking-wider border-b pb-4">Brand Assets</h3>
            <div className="space-y-6">
              <div className="space-y-3">
                <label className="text-[10px] font-black text-[var(--color-21)] uppercase">Primary Logo</label>
                <label className="relative group overflow-hidden rounded-[2rem] aspect-video bg-[var(--color-24)] border border-[var(--color-23)] flex items-center justify-center p-8 cursor-pointer">
                  <img src={settings.logoUrl} className="max-h-full object-contain group-hover:scale-105 transition-transform duration-500" alt="Logo" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white text-xs font-bold pointer-events-none">
                    <HiOutlinePhotograph size={20} /> Update Logo
                  </div>
                  <input
                    type="file"
                    className="hidden"
                    accept="image/*"
                    onChange={(e) => handleImageUpload(e, 'logoUrl')}
                  />
                </label>
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-black text-[var(--color-21)] uppercase">Site Favicon</label>
                <div className="flex items-center gap-4 p-4 bg-[var(--color-24)] rounded-2xl border border-[var(--color-23)]">
                  <img src={settings.faviconUrl} className="w-10 h-10 rounded-lg shadow-sm" alt="Favicon" />
                  <label className="text-[10px] font-black text-[var(--color-7)] uppercase cursor-pointer hover:underline">
                    Change Asset
                    <input
                      type="file"
                      className="hidden"
                      accept="image/*"
                      onChange={(e) => handleImageUpload(e, 'faviconUrl')}
                    />
                  </label>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-[var(--color-16)] p-8 rounded-[2.5rem] text-white space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-black uppercase tracking-wider flex items-center gap-3">
                <HiOutlineShieldCheck /> System Status
              </h3>
              <div className={`w-3 h-3 rounded-full ${settings.isMaintenanceMode ? 'bg-[var(--color-27)] animate-pulse shadow-[0_0_8px_var(--color-27)]' : 'bg-[var(--color-28)] shadow-[0_0_8px_var(--color-28)]'}`}></div>
            </div>
            <p className="text-xs text-[var(--color-21)] leading-relaxed">Maintenance mode restricts website access to administrators only while performing updates.</p>
            <button
              onClick={() => updateSettings('isMaintenanceMode', !settings.isMaintenanceMode)}
              className={`w-full py-4 rounded-2xl text-xs font-black uppercase transition-all duration-300 border
                  ${settings.isMaintenanceMode
                  ? 'bg-[var(--color-27)] text-white border-transparent shadow-lg shadow-red-500/20'
                  : 'bg-transparent text-white border-white/20 hover:bg-white/10'}`}
            >
              {settings.isMaintenanceMode ? 'Deactivate Maintenance' : 'Go Into Maintenance'}
            </button>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Settings;