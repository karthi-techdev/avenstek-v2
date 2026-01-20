"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import api from '@/lib/api';

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      router.replace('/admin/dashboard');
    }
  }, [router]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const { data } = await api.post('/auth/login', {
        email: email.toLowerCase().trim(),
        password
      });
      localStorage.setItem('token', data.token);
      localStorage.setItem('isLoggedIn', 'true');
      router.replace('/admin/dashboard');
    } catch (err: any) {
      setError(err.response?.data?.message || 'Login failed. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[var(--color-25)]">
      <div className="p-8 bg-white rounded-3xl shadow-2xl border border-[var(--color-23)] w-full max-w-sm">
        <div className="flex justify-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-[var(--color-7)] to-[var(--color-8)] rounded-3xl flex items-center justify-center font-black text-3xl text-white shadow-xl shadow-[var(--color-7)]/20">A</div>
        </div>
        <h1 className="text-2xl font-black mb-2 text-[var(--color-16)] text-center">Admin Access</h1>
        <p className="text-[var(--color-21)] text-center mb-8 text-xs font-bold uppercase tracking-widest">Avenstek CMS Portal</p>

        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-100 text-red-600 text-xs font-bold rounded-2xl animate-shake">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-[10px] font-black text-[var(--color-21)] uppercase mb-1.5 ml-1">Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-5 py-3.5 bg-[var(--color-24)] border border-[var(--color-23)] rounded-2xl text-sm font-medium outline-none focus:ring-2 focus:ring-[var(--color-11)] transition-all"
              placeholder="admin@avenstek.com"
            />
          </div>
          <div>
            <label className="block text-[10px] font-black text-[var(--color-21)] uppercase mb-1.5 ml-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-5 py-3.5 bg-[var(--color-24)] border border-[var(--color-23)] rounded-2xl text-sm font-medium outline-none focus:ring-2 focus:ring-[var(--color-11)] transition-all"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full mt-4 bg-[var(--color-7)] hover:bg-[var(--color-8)] text-white py-4 px-6 rounded-2xl font-black text-sm transition-all shadow-xl shadow-[var(--color-7)]/30 hover:scale-[1.02] active:scale-95 disabled:opacity-50 flex items-center justify-center"
          >
            {loading ? (
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
            ) : (
              'Sign In to Dashboard'
            )}
          </button>
        </form>

        <p className="mt-8 text-center text-[var(--color-21)] text-[10px] font-bold">
          Protected by 256-bit encryption. &copy; 2026 Avenstek
        </p>
      </div>
    </div>
  );
};

export default Login;
