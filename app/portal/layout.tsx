"use client";

import React, { useState, useEffect } from 'react';
import Sidebar from './components/sidebar';
import Navbar from './components/navbar';
import { usePathname, useRouter } from 'next/navigation';
import "./portal.css"


import LoadingScreen from './components/LoadingScreen';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const [isAuthChecking, setIsAuthChecking] = useState(true);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const isLoginPage = pathname === '/portal';

  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem('token');
      const isLoggedIn = localStorage.getItem('isLoggedIn');

      if (!isLoginPage && (!token || !isLoggedIn)) {
        router.replace('/portal');
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
    return <LoadingScreen text="Loading" />;
  }

  return (
    <div className="flex h-[100dvh] bg-[var(--color-25)] overflow-hidden">
      <aside className={`fixed inset-y-0 left-0 z-50 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } md:sticky md:top-0 md:h-[100dvh] md:translate-x-0 transition-transform duration-300 ease-in-out`}>
        <Sidebar onClose={() => setIsSidebarOpen(false)} />
      </aside>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      <div className="flex-1 flex flex-col min-w-0 h-full">
        <Navbar onMenuClick={toggleSidebar} />
        <main className="flex-1 overflow-y-auto p-4 md:p-8 bg-[var(--color-25)]">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
