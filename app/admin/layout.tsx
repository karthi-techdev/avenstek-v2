"use client";

import React, { useState, useEffect } from 'react';
import Sidebar from './components/sidebar';
import Navbar from './components/navbar';
import { usePathname, useRouter } from 'next/navigation';
import "./admin.css"

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const [isAuthChecking, setIsAuthChecking] = useState(true);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const isLoginPage = pathname === '/admin';

  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem('token');
      const isLoggedIn = localStorage.getItem('isLoggedIn');

      if (!isLoginPage && (!token || !isLoggedIn)) {
        router.replace('/admin');
      } else {
        setIsAuthChecking(false);
      }
    };

    checkAuth();
  }, [pathname, router, isLoginPage]);

  if (isLoginPage) {
    return (
      <div className="min-h-screen bg-[var(--color-25)]">
        {children}
      </div>
    );
  }

  if (isAuthChecking) {
    return (
      <div className="min-h-screen bg-[var(--color-25)] flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-[var(--color-7)]/20 border-t-[var(--color-7)] rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-[var(--color-25)] overflow-hidden">
      <aside className={`fixed inset-y-0 left-0 z-50 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } md:relative md:translate-x-0 transition-transform duration-300 ease-in-out`}>
        <Sidebar onClose={() => setIsSidebarOpen(false)} />
      </aside>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

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
