"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import api from '@/lib/api';
import {
  HiOutlineMail,
  HiOutlineLockClosed,
  HiOutlineEye,
  HiOutlineEyeOff
} from 'react-icons/hi';
import { API_BASE_URL } from '@/lib/api-config';
import Image from 'next/image';

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [isLocked, setIsLocked] = useState(false);
  const [lockTime, setLockTime] = useState(0);
  const [logo, setLogo] = useState<string | null>(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      router.replace('/portal/dashboard');
    }

    // Check for existing lockout
    const storedLockout = localStorage.getItem('loginLockout');
    if (storedLockout) {
      const expiration = parseInt(storedLockout);
      if (Date.now() < expiration) {
        setIsLocked(true);
        setLockTime(Math.ceil((expiration - Date.now()) / 1000 / 60));
      } else {
        localStorage.removeItem('loginLockout');
        localStorage.removeItem('loginAttempts');
      }
    }

    setAttempts(parseInt(localStorage.getItem('loginAttempts') || '0'));

    // Fetch dynamic logo
    const fetchLogo = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/api/content/settings`);
        const data = await res.json();
        if (data.logoUrl) setLogo(data.logoUrl);
      } catch (err) {
        console.error("Failed to fetch logo");
      }
    };
    fetchLogo();
  }, [router]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isLocked) {
      setError(`Too many attempts. Please try again in ${lockTime} minutes.`);
      return;
    }

    setLoading(true);
    setError('');

    try {
      const { data } = await api.post('/auth/login', {
        email: email.toLowerCase().trim(),
        password
      });
      localStorage.setItem('token', data.token);
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.removeItem('loginAttempts');
      localStorage.removeItem('loginLockout');
      router.replace('/portal/dashboard');
    } catch (err: any) {
      const newAttempts = attempts + 1;
      setAttempts(newAttempts);
      localStorage.setItem('loginAttempts', newAttempts.toString());

      if (newAttempts >= 5) {
        const lockoutExpiration = Date.now() + 15 * 60 * 1000; // 15 minutes lockout
        localStorage.setItem('loginLockout', lockoutExpiration.toString());
        setIsLocked(true);
        setLockTime(15);
        setError('Too many failed attempts. Access locked for 15 minutes.');
      } else {
        setError(err.response?.data?.message || `Invalid credentials. ${5 - newAttempts} attempts remaining.`);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-[var(--color-13)] via-white to-[var(--color-12)] p-4">
      {/* Login Card */}
      <div className="w-full max-w-md bg-white rounded-[1.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-[var(--color-23)] p-10 relative overflow-hidden animate-in fade-in zoom-in duration-500">

        <div className="flex justify-center mb-6">
          <div className="relative h-6 flex items-center justify-center">
            {logo ? (
              <div className="relative w-full h-full flex items-center justify-center">
                <img
                  src={logo.startsWith('/') ? `${API_BASE_URL}${logo}` : logo}
                  alt="Avenstek Logo"
                  className="max-w-full invert-70 max-h-full object-contain"
                />
              </div>
            ) : (
              <div>

              </div>
            )}
          </div>
        </div>

        {/* Header Text */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-semibold text-[var(--color-19)] mb-2">Sign in with email</h1>
          <p className="text-[var(--color-20)] text-sm font-medium leading-relaxed px-4">
            Sign in to access the CMS Portal.
          </p>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-100 text-red-600 text-xs font-bold rounded-2xl animate-shake">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-5">
          {/* Email Input */}
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[var(--color-21)] group-focus-within:text-[var(--color-7)] transition-colors">
              <HiOutlineMail size={20} />
            </div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={isLocked}
              className="w-full pl-12 pr-4 py-4 bg-[var(--color-24)] border border-[var(--color-23)] rounded-2xl text-sm font-medium outline-none focus:ring-2 focus:ring-[var(--color-11)] focus:bg-white transition-all disabled:opacity-50"
              placeholder="Email address"
            />
          </div>

          {/* Password Input */}
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[var(--color-21)] group-focus-within:text-[var(--color-7)] transition-colors">
              <HiOutlineLockClosed size={20} />
            </div>
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              disabled={isLocked}
              className="w-full pl-12 pr-12 py-4 bg-[var(--color-24)] border border-[var(--color-23)] rounded-2xl text-sm font-medium outline-none focus:ring-2 focus:ring-[var(--color-11)] focus:bg-white transition-all disabled:opacity-50"
              placeholder="Password"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 pr-4 flex items-center text-[var(--color-21)] hover:text-[var(--color-18)] transition-colors"
            >
              {showPassword ? <HiOutlineEyeOff size={20} /> : <HiOutlineEye size={20} />}
            </button>
          </div>

          <button
            type="submit"
            disabled={loading || isLocked}
            className="w-full mt-4 bg-[var(--color-7)] hover:bg-[var(--color-9)] text-white py-4.5 px-6 rounded-2xl font-semibold text-sm transition-all shadow-xl shadow-black/10 hover:scale-[1.02] active:scale-95 disabled:opacity-50 flex items-center justify-center gap-2 group"
          >
            {loading ? (
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
            ) : (
              <>
                Sign in
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </>
            )}
          </button>
        </form>
      </div>

      {/* Decorative Background Elements */}
      <div className="fixed top-20 left-20 w-64 h-64 bg-[var(--color-7)]/5 rounded-full blur-[100px] -z-10 animate-pulse"></div>
      <div className="fixed bottom-20 right-20 w-96 h-96 bg-[var(--color-8)]/5 rounded-full blur-[120px] -z-10 animate-[pulse_6s_infinite]"></div>
    </div>
  );
};

export default Login;
