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
import logoImg from '../../../public/assets/images/logo-avenstek.png'
interface SidebarProps {
  onClose?: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onClose }) => {
  const pathname = usePathname();

 const navItems = [
    { label: 'Dashboard', icon: HiOutlineViewGrid, path: '/admin/dashboard' },
    { label: 'Home Page', icon: HiOutlineHome, path: '/admin/home-management' },
    { label: 'About us Page', icon: HiOutlineInformationCircle, path: '/admin/about-management' },
    { label: 'Products Navbar', icon: HiOutlineMenu, path: '/admin/products-management' },
    { label: 'Services', icon: HiOutlineLightningBolt, path: '/admin/services-management' },
    { label: 'Testimonials', icon: HiOutlineChatAlt, path: '/admin/testimonials-management' },
    { label: 'Blogs', icon: HiOutlinePencilAlt, path: '/admin/blogs-management' },
    { label: 'Footer Config', icon: HiOutlineTemplate, path: '/admin/footer-management' },
    { label: 'FAQs', icon: HiOutlineQuestionMarkCircle, path: '/admin/faqs-management' },
    { label: 'Contact', icon: HiOutlineMail, path: '/admin/contact-management' },
    { label: 'Subscribers', icon: HiOutlineUsers, path: '/admin/subscribers-management' },
    { label: 'Careers', icon: HiOutlineAcademicCap, path: '/admin/careers-management' },
    { label: 'Settings', icon: HiOutlineCog, path: '/admin/settings' },
];

  return (
    <div className="w-72 h-full bg-[var(--color-2)] border-r border-[var(--color-23)] text-[var(--color-18)] flex flex-col relative shadow-[4px_0_24px_rgba(0,0,0,0.02)]">
      {/* Logo Section */}
      <div className="p-8 flex items-center justify-between relative overflow-hidden">
        <div className="absolute -top-10 -left-10 w-32 h-32 bg-[var(--color-13)] rounded-full blur-3xl opacity-50"></div>
        <div className="flex items-center gap-3 z-10">
          <Image src={logoImg} alt='logo' className='invert-60 object-fit'/>
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
              <div className={`p-2 rounded-xl transition-colors duration-300 ${
                isActive 
                  ? 'bg-[var(--color-7)] text-white shadow-md' 
                  : 'bg-[var(--color-24)] group-hover:bg-[var(--color-13)] group-hover:text-[var(--color-7)]'
              }`}>
                <item.icon size={20} />
              </div>
              <span className={`font-semibold text-sm transition-all duration-300 ${
                isActive ? 'translate-x-1' : 'group-hover:translate-x-1'
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

      {/* User / Footer Section */}
      <div className="p-2 border-t border-[var(--color-23)]">
        <button className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-[var(--color-20)] hover:text-[var(--color-27)] hover:bg-white transition-all rounded-xl font-bold text-xs border border-transparent hover:border-red-100">
          <HiOutlineLogout size={18} />
          <span>Sign Out</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;