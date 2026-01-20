"use client";

import React, { useState, useEffect } from 'react';
import api from '@/lib/api';
import {
  HiOutlineUsers,
  HiOutlineTrash,
  HiOutlineSearch,
  HiOutlineDownload,
  HiOutlineMailOpen,
  HiOutlineBan
} from 'react-icons/hi';

interface Subscriber {
  _id?: string;
  id?: string;
  email: string;
  source: string;
  status: 'Active' | 'Unsubscribed' | 'Bounced';
  createdAt?: string;
  subscribedAt?: string;
}

const SubscribersManagement: React.FC = () => {
  const [subscribers, setSubscribers] = useState<Subscriber[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchSubscribers = async () => {
      try {
        const { data } = await api.get('/content/subscribers');
        setSubscribers(data);
      } catch (err) {
        console.error("Error fetching subscribers", err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchSubscribers();
  }, []);

  const deleteSubscriber = async (id: string) => {
    if (window.confirm('Remove this subscriber permanently?')) {
      try {
        await api.delete(`/content/subscribers/${id}`);
        setSubscribers(prev => prev.filter(s => (s._id || s.id) !== id));
      } catch (err) {
        console.error("Error deleting subscriber", err);
        alert('Failed to remove subscriber.');
      }
    }
  };

  const filteredSubscribers = subscribers.filter(s =>
    s.email?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] space-y-4">
        <div className="w-12 h-12 border-4 border-[var(--color-7)]/20 border-t-[var(--color-7)] rounded-full animate-spin"></div>
        <p className="text-[var(--color-21)] font-bold animate-pulse uppercase tracking-widest text-xs">Syncing Audience...</p>
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-in fade-in duration-500 pb-10">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-[var(--color-16)] tracking-tight">Newsletter Subscribers</h1>
          <p className="text-[var(--color-20)] font-medium">Manage your audience and mailing lists.</p>
        </div>
        <button className="flex items-center justify-center gap-2 bg-[var(--color-7)] text-white px-6 py-3 rounded-2xl font-black shadow-xl shadow-[var(--color-7)]/20 hover:scale-[1.05] transition-all">
          <HiOutlineDownload size={20} /> Export CSV
        </button>
      </div>

      <div className="bg-white p-4 rounded-2xl border border-[var(--color-23)] shadow-sm flex items-center gap-3">
        <HiOutlineSearch className="text-[var(--color-21)]" size={20} />
        <input
          type="text"
          placeholder="Filter by email address..."
          className="bg-transparent border-none outline-none text-sm w-full font-medium"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="bg-white rounded-[2.5rem] border border-[var(--color-23)] shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-[var(--color-24)]/50 border-b border-[var(--color-23)]">
                <th className="px-8 py-5 text-[10px] font-black text-[var(--color-21)] uppercase tracking-wider">Email Address</th>
                <th className="px-8 py-5 text-[10px] font-black text-[var(--color-21)] uppercase tracking-wider">Acquisition Source</th>
                <th className="px-8 py-5 text-[10px] font-black text-[var(--color-21)] uppercase tracking-wider">Subscription Date</th>
                <th className="px-8 py-5 text-[10px] font-black text-[var(--color-21)] uppercase tracking-wider">Member Status</th>
                <th className="px-8 py-5 text-[10px] font-black text-[var(--color-21)] uppercase tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--color-23)]">
              {filteredSubscribers.map((sub) => {
                const subId = (sub._id || sub.id)!;
                return (
                  <tr key={subId} className="hover:bg-[var(--color-14)] transition-colors group">
                    <td className="px-8 py-5">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-[var(--color-24)] flex items-center justify-center text-[var(--color-21)] font-black text-[10px]">
                          {sub.email?.charAt(0).toUpperCase() || '?'}
                        </div>
                        <span className="text-sm font-bold text-[var(--color-16)]">{sub.email}</span>
                      </div>
                    </td>
                    <td className="px-8 py-5 text-xs font-semibold text-[var(--color-19)]">{sub.source || 'Website Footer'}</td>
                    <td className="px-8 py-5 text-xs font-bold text-[var(--color-20)]">
                      {sub.createdAt ? new Date(sub.createdAt).toLocaleDateString() : sub.subscribedAt}
                    </td>
                    <td className="px-8 py-5">
                      <span className={`px-3 py-1 rounded-xl text-[9px] font-black uppercase shadow-sm border
                        ${sub.status === 'Active' ? 'bg-green-50 text-green-600 border-green-100' :
                          sub.status === 'Unsubscribed' ? 'bg-amber-50 text-amber-600 border-amber-100' :
                            'bg-red-50 text-red-600 border-red-100'}`}>
                        {sub.status || 'Active'}
                      </span>
                    </td>
                    <td className="px-8 py-5 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button className="p-2 text-[var(--color-21)] hover:text-[var(--color-7)] transition-colors">
                          <HiOutlineMailOpen size={18} />
                        </button>
                        <button
                          onClick={() => deleteSubscriber(subId)}
                          className="p-2 text-[var(--color-21)] hover:text-red-500 transition-colors"
                        >
                          <HiOutlineTrash size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        {filteredSubscribers.length === 0 && (
          <div className="p-20 text-center">
            <HiOutlineUsers className="mx-auto text-[var(--color-23)] mb-4" size={64} />
            <h3 className="text-xl font-black text-[var(--color-21)]">No Subscribers</h3>
            <p className="text-sm text-[var(--color-20)]">There are no matching subscribers in your database.</p>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
        <div className="bg-[var(--color-16)] p-8 rounded-[2.5rem] text-white flex items-center gap-6 shadow-xl border border-white/5 cursor-pointer hover:bg-[var(--color-16)]/90 transition-all">
          <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center border border-white/10">
            <HiOutlineMailOpen size={24} className="text-[var(--color-8)]" />
          </div>
          <div>
            <h4 className="text-xl font-black tracking-tight">Broadcast Campaign</h4>
            <p className="text-xs text-[var(--color-21)] font-medium">Draft a new newsletter to send to all active members.</p>
          </div>
        </div>
        <div className="bg-white p-8 rounded-[2.5rem] border border-[var(--color-23)] flex items-center gap-6 shadow-sm cursor-pointer hover:bg-[var(--color-24)] transition-all">
          <div className="w-14 h-14 bg-[var(--color-13)] rounded-2xl flex items-center justify-center border border-[var(--color-11)]">
            <HiOutlineBan size={24} className="text-[var(--color-27)]" />
          </div>
          <div>
            <h4 className="text-xl font-black text-[var(--color-16)] tracking-tight">Blacklist Rules</h4>
            <p className="text-xs text-[var(--color-20)] font-medium">Prevent specific domains or IPs from subscribing.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscribersManagement;
