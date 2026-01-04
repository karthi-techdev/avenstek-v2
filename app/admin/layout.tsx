"use client";

import React, { useState } from 'react';
import Sidebar from './components/sidebar';
import Navbar from './components/navbar';
import { usePathname } from 'next/navigation'; // Import this
import "./admin.css"

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname(); // Get the current URL
  
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  // Check if the current route is exactly "/admin" (the login page)
  const isLoginPage = pathname === '/admin';

  // If it's the login page, just render the children (Login form)
  if (isLoginPage) {
    return (
      <div className="min-h-screen bg-[var(--color-25)]">
        {children}
      </div>
    );
  }

  // Otherwise, render the full Dashboard Layout
  return (
    <div className="flex min-h-screen bg-[var(--color-25)] overflow-hidden">
      {/* Sidebar - Desktop Always visible, Mobile Drawer */}
      <aside className={`fixed inset-y-0 left-0 z-50 transform ${
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } md:relative md:translate-x-0 transition-transform duration-300 ease-in-out`}>
        <Sidebar onClose={() => setIsSidebarOpen(false)} />
      </aside>

      {/* Backdrop for Mobile */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/50 md:hidden" 
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        <Navbar onMenuClick={toggleSidebar} />
        <main className="flex-1 overflow-y-auto p-4 md:p-8">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;