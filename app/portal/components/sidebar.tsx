"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  HiOutlineViewGrid,
  HiOutlineHome,
  HiOutlineInformationCircle,
  HiOutlineMenu,
  HiOutlineLightningBolt,
  HiOutlineChatAlt,
  HiOutlinePencilAlt,
  HiOutlineTemplate,
  HiOutlineQuestionMarkCircle,
  HiOutlineMail,
  HiOutlineUsers,
  HiOutlineAcademicCap,
  HiOutlineCog,
  HiOutlineLogout,
  HiX
} from 'react-icons/hi';
import Image from 'next/image';
import logoImg from '../../../public/assets/images/logo-avenstek.png';
import { API_BASE_URL } from '@/lib/api-config';
interface SidebarProps {
  onClose?: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onClose }) => {
  const pathname = usePathname();
  const [logoUrl, setLogoUrl] = React.useState<string | null>(null);

  React.useEffect(() => {
    const fetchLogo = async () => {
      try {
        // Fetch public settings - no auth needed technically but this is admin panel so auth is fine
        // Assuming api utility handles this, or using fetch
        const token = localStorage.getItem('token');
        const res = await fetch(`${API_BASE_URL}/api/content/settings`, {
          headers: token ? { Authorization: `Bearer ${token}` } : {}
        });
        const data = await res.json();
        if (data && data.logoUrl) {
          setLogoUrl(data.logoUrl);
        }
      } catch (err) {
        console.error("Failed to fetch dynamic logo");
      }
    };
    fetchLogo();
  }, []);

  const navItems = [
    { label: 'Dashboard', icon: HiOutlineViewGrid, path: '/portal/dashboard' },
    { label: 'Home Page', icon: HiOutlineHome, path: '/portal/home-management' },
    { label: 'About us Page', icon: HiOutlineInformationCircle, path: '/portal/about-management' },
    { label: 'Products Navbar', icon: HiOutlineMenu, path: '/portal/products-management' },
    { label: 'Services', icon: HiOutlineLightningBolt, path: '/portal/services-management' },
    { label: 'Testimonials', icon: HiOutlineChatAlt, path: '/portal/testimonials-management' },
    { label: 'Blogs', icon: HiOutlinePencilAlt, path: '/portal/blogs-management' },
    { label: 'Footer Config', icon: HiOutlineTemplate, path: '/portal/footer-management' },
    { label: 'FAQs', icon: HiOutlineQuestionMarkCircle, path: '/portal/faqs-management' },
    { label: 'Contact', icon: HiOutlineMail, path: '/portal/contact-management' },
    { label: 'Subscribers', icon: HiOutlineUsers, path: '/portal/subscribers-management' },
    { label: 'Careers', icon: HiOutlineAcademicCap, path: '/portal/careers-management' },
    { label: 'Terms & Conditions', icon: HiOutlineTemplate, path: '/portal/terms-management' },
    { label: 'Privacy Policy', icon: HiOutlineTemplate, path: '/portal/privacy-management' },
    { label: 'Settings', icon: HiOutlineCog, path: '/portal/settings' },
  ];

  return (
    <div className="w-72 h-full bg-[var(--color-2)] border-r border-[var(--color-23)] text-[var(--color-18)] flex flex-col relative shadow-[4px_0_24px_rgba(0,0,0,0.02)]">
      {/* Logo Section */}
      <div className="p-8 flex items-center justify-between relative overflow-hidden">
        <div className="flex items-center gap-3 z-10 w-full justify-center">
          {logoUrl ? (
            <img src={logoUrl} alt="logo" className="invert-60 h-7 w-auto object-contain" />
          ) : (
            <Image src={logoImg} alt='logo' className='invert-60 object-fit h-auto w-auto max-w-[150px]' />
          )}
        </div>
        <button onClick={onClose} className="md:hidden text-[var(--color-20)] hover:text-[var(--color-7)] transition-colors p-2 bg-[var(--color-24)] rounded-xl">
          <HiX size={20} />
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-6 mt-4 space-y-2 overflow-y-auto">
        <p className="px-4 text-[10px] font-bold text-[var(--color-21)] uppercase tracking-[0.2em] mb-4">Main Menu</p>
        {navItems.map((item) => {
          // Check if current path matches the link
          const isActive = pathname === item.path;

          return (
            <Link
              key={item.path}
              href={item.path}
              onClick={onClose}
              className={`
                group flex items-center gap-4 px-4 py-3.5 rounded-2xl transition-all duration-300 relative
                ${isActive
                  ? 'bg-[var(--color-13)] text-[var(--color-7)] shadow-[0_4px_12px_rgba(21,112,239,0.08)]'
                  : 'text-[var(--color-20)] hover:bg-[var(--color-14)] hover:text-[var(--color-7)]'}
              `}
            >
              <div className={`p-2 rounded-xl transition-colors duration-300 ${isActive
                ? 'bg-[var(--color-7)] text-white shadow-md'
                : 'bg-[var(--color-24)] group-hover:bg-[var(--color-13)] group-hover:text-[var(--color-7)]'
                }`}>
                <item.icon size={20} />
              </div>
              <span className={`font-semibold text-sm transition-all duration-300 ${isActive ? 'translate-x-1' : 'group-hover:translate-x-1'
                }`}>
                {item.label}
              </span>

              {isActive && (
                <div className="absolute right-4 w-1.5 h-1.5 bg-[var(--color-7)] rounded-full animate-pulse shadow-[0_0_8px_var(--color-7)]"></div>
              )}
            </Link>
          );
        })}
      </nav>

    </div>
  );
};

export default Sidebar;