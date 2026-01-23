"use client";

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { ApexOptions } from 'apexcharts';
import {
  HiOutlineGlobeAlt,
  HiOutlineChatAlt,
  HiOutlineDocumentText,
  HiOutlineCursorClick
} from 'react-icons/hi';
import api from '@/lib/api';

// Dynamically import Chart to prevent SSR issues
const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
  loading: () => <div className="h-[320px] w-full animate-pulse bg-gray-100 rounded-lg" />
});

const StatCard: React.FC<{ title: string; value: string | number; trend: string; icon: any; isPositive: boolean }> = ({
  title, value, trend, icon: Icon, isPositive
}) => (
  <div className="bg-[var(--color-2)] p-6 rounded-2xl border border-[var(--color-23)] shadow-sm">
    <div className="flex items-start justify-between">
      <div>
        <p className="text-sm font-medium text-[var(--color-20)]">{title}</p>
        <h3 className="text-2xl font-bold mt-2 text-[var(--color-16)]">{value}</h3>
        <p className={`text-xs mt-2 font-medium ${isPositive ? 'text-[var(--color-28)]' : 'text-[var(--color-27)]'}`}>
          {isPositive ? '+' : ''}{trend} <span className="text-[var(--color-21)] ml-1">vs last week</span>
        </p>
      </div>
      <div className={`p-3 rounded-xl bg-[var(--color-13)] text-[var(--color-7)] border border-[var(--color-12)]`}>
        <Icon size={24} />
      </div>
    </div>
  </div>
);

const Dashboard: React.FC = () => {
  const [stats, setStats] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const { data } = await api.get('/content/dashboard-stats');
        setStats(data);
      } catch (err) {
        console.error("Error fetching stats", err);
      } finally {
        setLoading(false);
      }
    };
    fetchStats();
  }, []);

  // Area Chart Config: Website Visitors
  const visitorOptions: ApexOptions = {
    chart: { type: 'area', toolbar: { show: false }, zoom: { enabled: false }, fontFamily: 'Outfit' },
    colors: ['#1570EF'],
    fill: { type: 'gradient', gradient: { shadeIntensity: 1, opacityFrom: 0.45, opacityTo: 0.05, stops: [20, 100] } },
    dataLabels: { enabled: false },
    stroke: { curve: 'smooth', width: 3 },
    grid: { borderColor: '#E9EAEB', strokeDashArray: 4 },
    xaxis: {
      categories: stats?.trafficGraph?.labels || ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      axisBorder: { show: false },
      axisTicks: { show: false },
      labels: { style: { colors: '#717680' } }
    },
    yaxis: { labels: { style: { colors: '#717680' } } },
    tooltip: { theme: 'light' },
  };

  const visitorSeries = [{ name: 'Visitors', data: stats?.trafficGraph?.data || [0, 0, 0, 0, 0, 0, 0] }];

  // Donut Chart Config: Traffic Source
  const sourceOptions: ApexOptions = {
    chart: { type: 'donut', fontFamily: 'Outfit' },
    colors: ['#1570EF', '#2E90FA', '#B2DDFF'],
    labels: ['Desktop', 'Mobile', 'Tablet'],
    plotOptions: {
      pie: {
        donut: {
          size: '75%',
          labels: {
            show: true,
            total: {
              show: true,
              label: 'Total',
              formatter: () => '11.4k',
              color: '#181D27',
              fontSize: '16px',
              fontWeight: 700
            }
          }
        }
      }
    },
    legend: { position: 'bottom', labels: { colors: '#717680' } },
    dataLabels: { enabled: false },
    stroke: { show: false },
    tooltip: { theme: 'light' }
  };

  const sourceSeries = [6420, 4210, 770];

  if (loading) return <div className="p-10 text-center text-sm font-bold text-[var(--color-20)]">Analyzing Dashboard Metrics...</div>;

  return (
    <div className="space-y-8 animate-in fade-in duration-500 pb-10">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-[var(--color-16)]">Dashboard Overview</h1>
          <p className="text-[var(--color-20)]">Tracking your website performance and engagement.</p>
        </div>
        <div className="flex items-center bg-[var(--color-2)] border border-[var(--color-23)] p-1 rounded-xl shadow-sm">
          <button className="px-4 py-1.5 text-xs font-bold bg-[var(--color-7)] text-white rounded-lg">Realtime</button>
          <button className="px-4 py-1.5 text-xs font-medium text-[var(--color-20)] hover:text-[var(--color-16)]">History</button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Website Visitors" value={stats?.visitors?.toLocaleString() || '0'} trend="14.2%" icon={HiOutlineGlobeAlt} isPositive={true} />
        <StatCard title="Total Blogs" value={stats?.blogs || '0'} trend="5.1%" icon={HiOutlineDocumentText} isPositive={true} />
        <StatCard title="Total Enquiries" value={stats?.enquiries || '0'} trend="12.5%" icon={HiOutlineChatAlt} isPositive={true} />
        <StatCard title="Click Rate" value={stats?.clickRate || '0%'} trend="0.8%" icon={HiOutlineCursorClick} isPositive={false} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-[var(--color-2)] p-6 rounded-2xl border border-[var(--color-23)] shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-lg font-bold text-[var(--color-16)]">Website Traffic</h3>
              <p className="text-xs text-[var(--color-21)]">Daily visitor count for the current week</p>
            </div>
            <select className="bg-[var(--color-24)] border border-[var(--color-23)] rounded-lg px-3 py-1.5 text-xs font-bold text-[var(--color-19)] outline-none cursor-pointer">
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
            </select>
          </div>
          <Chart options={visitorOptions} series={visitorSeries} type="area" height={320} />
        </div>

        <div className="bg-[var(--color-2)] p-6 rounded-2xl border border-[var(--color-23)] shadow-sm flex flex-col">
          <div className="mb-8">
            <h3 className="text-lg font-bold text-[var(--color-16)]">Traffic Source</h3>
            <p className="text-xs text-[var(--color-21)]">Device distribution of users</p>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <Chart options={sourceOptions} series={[
              stats?.deviceDistribution?.desktop || 6420,
              stats?.deviceDistribution?.mobile || 4210,
              stats?.deviceDistribution?.tablet || 770
            ]} type="donut" width="100%" />
          </div>
          <div className="mt-6 space-y-3">
            {/* Dynamic mapping or static legend - keeping static style for now but could map */}
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#1570EF]"></div>
                <span className="text-[var(--color-19)]">Desktop</span>
              </div>
              <span className="font-bold text-[var(--color-16)]">{stats?.deviceDistribution?.desktop || 0} hits</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#2E90FA]"></div>
                <span className="text-[var(--color-19)]">Mobile</span>
              </div>
              <span className="font-bold text-[var(--color-16)]">{stats?.deviceDistribution?.mobile || 0} hits</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Enquiries */}
        <div className="bg-[var(--color-2)] p-6 rounded-2xl border border-[var(--color-23)] shadow-sm">
          <h3 className="text-lg font-bold text-[var(--color-16)] mb-6">Recent Enquiries</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-[var(--color-23)]">
                  <th className="pb-4 text-xs font-bold text-[var(--color-21)] uppercase">Customer</th>
                  <th className="pb-4 text-xs font-bold text-[var(--color-21)] uppercase">Message/Source</th>
                  <th className="pb-4 text-xs font-bold text-[var(--color-21)] uppercase">Date</th>
                  <th className="pb-4 text-xs font-bold text-[var(--color-21)] uppercase">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--color-23)]">
                {stats?.recentEnquiries?.length > 0 ? stats.recentEnquiries.map((enquiry: any, i: number) => (
                  <tr key={i} className="group hover:bg-[var(--color-25)] transition-colors">
                    <td className="py-4 text-sm font-bold text-[var(--color-16)]">{enquiry.name}</td>
                    <td className="py-4 text-sm text-[var(--color-20)] truncate max-w-[150px]">{enquiry.source || 'Website'}</td>
                    <td className="py-4 text-xs text-[var(--color-21)]">{new Date(enquiry.createdAt).toLocaleDateString()}</td>
                    <td className="py-4">
                      <span className={`px-2 py-1 rounded-lg text-[10px] font-black uppercase ${enquiry.status === 'New' ? 'bg-amber-100 text-amber-600' : 'bg-green-100 text-green-600'}`}>
                        {enquiry.status}
                      </span>
                    </td>
                  </tr>
                )) : (
                  <tr><td colSpan={4} className="py-4 text-center text-xs text-[var(--color-21)]">No recent enquiries</td></tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Recent Visitors Log */}
        <div className="bg-[var(--color-2)] p-6 rounded-2xl border border-[var(--color-23)] shadow-sm">
          <h3 className="text-lg font-bold text-[var(--color-16)] mb-6">Live Visitor Log</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-[var(--color-23)]">
                  <th className="pb-4 text-xs font-bold text-[var(--color-21)] uppercase">Location</th>
                  <th className="pb-4 text-xs font-bold text-[var(--color-21)] uppercase">Device/OS</th>
                  <th className="pb-4 text-xs font-bold text-[var(--color-21)] uppercase">IP Address</th>
                  <th className="pb-4 text-xs font-bold text-[var(--color-21)] uppercase">Time</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--color-23)]">
                {stats?.recentVisitors?.length > 0 ? stats.recentVisitors.map((visitor: any, i: number) => (
                  <tr key={i} className="group hover:bg-[var(--color-25)] transition-colors">
                    <td className="py-4 text-sm font-bold text-[var(--color-16)] flex flex-col">
                      <span>{visitor.city || 'Unknown'}</span>
                      <span className="text-[10px] text-[var(--color-20)] uppercase font-medium">{visitor.country || 'Unknown'}</span>
                    </td>
                    <td className="py-4 text-sm text-[var(--color-20)]">{visitor.device} • {visitor.os?.split(' ')[0]}</td>
                    <td className="py-4 text-xs text-[var(--color-21)] font-mono">{visitor.ip}</td>
                    <td className="py-4 text-xs text-[var(--color-21)]">{new Date(visitor.visitedAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</td>
                  </tr>
                )) : (
                  <tr><td colSpan={4} className="py-4 text-center text-xs text-[var(--color-21)]">No recent data</td></tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
