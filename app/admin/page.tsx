"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const Login = () => {
  const router = useRouter();

  useEffect(() => {
    // 1. Check if the user is logged in
    // This usually involves checking localStorage, a cookie, or an auth context
    const isAuthenticated = localStorage.getItem('isLoggedIn'); 

    if (isAuthenticated) {
      // 2. If authenticated, redirect to the dashboard immediately
      router.replace('/admin/dashboard');
    }
  }, [router]);

  const handleLogin = () => {
    // Simulate login logic
    localStorage.setItem('isLoggedIn', 'true');
    
    // Use replace instead of push so they can't click "Back" to get to Login
    router.replace('/admin/dashboard');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[var(--color-25)]">
       <div className="p-8 bg-white rounded-2xl shadow-xl border border-[var(--color-23)] w-full max-w-md">
         <div className="flex justify-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-[var(--color-7)] to-[var(--color-8)] rounded-2xl flex items-center justify-center font-bold text-2xl text-white">L</div>
         </div>
         <h1 className="text-2xl font-bold mb-2 text-[var(--color-16)] text-center">Admin Login</h1>
         <p className="text-[var(--color-21)] text-center mb-8 text-sm">Please sign in to access your dashboard.</p>
         
         <button 
           onClick={handleLogin}
           className="w-full bg-[var(--color-7)] hover:bg-[var(--color-8)] text-white py-3.5 px-6 rounded-xl font-bold transition-all shadow-lg shadow-[var(--color-7)]/20"
         >
           Login to Dashboard
         </button>
       </div>
    </div>
  );
};

export default Login;