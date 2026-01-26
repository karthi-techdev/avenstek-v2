"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { HiOutlineHome } from 'react-icons/hi';

export default function NotFound() {
    const router = useRouter();
    const [countdown, setCountdown] = useState(10);

    useEffect(() => {
        const timer = setInterval(() => {
            setCountdown((prev) => {
                if (prev <= 1) {
                    clearInterval(timer);
                    router.push('/');
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [router]);

    return (
        <main className="min-h-screen bg-[var(--color-2)] flex items-center justify-center p-6 overflow-hidden relative">
            {/* Abstract Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 90, 0],
                        opacity: [0.1, 0.2, 0.1]
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-[var(--color-12)] rounded-full blur-[120px]"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        rotate: [0, -90, 0],
                        opacity: [0.1, 0.15, 0.1]
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-[var(--color-8)] rounded-full blur-[120px]"
                />
            </div>

            <div className="max-w-4xl w-full text-center relative z-10">
                {/* Animated 404 Text */}
                <div className="relative inline-block mb-8">
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, type: "spring" }}
                        className="text-[12rem] md:text-[20rem] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-[var(--color-7)] to-[var(--color-12)] selection:bg-[var(--color-7)] selection:text-white"
                    >
                        404
                    </motion.h1>

                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ delay: 1, duration: 1 }}
                        className="absolute top-1/2 left-0 h-[2px] bg-[var(--color-21)]/20 -rotate-12 transform -translate-y-1/2"
                    />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="space-y-6"
                >
                    <div className="space-y-2">
                        <h2 className="text-3xl md:text-5xl font-bold text-[var(--color-15)]">Something went <span className="text-[var(--color-7)]">missing</span></h2>
                        <p className="text-[var(--color-20)] text-lg md:text-xl max-w-xl mx-auto leading-relaxed">
                            The page you are looking for might have been moved, deleted, or never existed in the first place.
                        </p>
                        <p className="text-[var(--color-21)] text-sm font-medium pt-2">
                            Redirecting you home in <span className="text-[var(--color-7)] font-bold">{countdown}</span> seconds...
                        </p>
                    </div>

                    <div className="flex items-center justify-center pt-4">
                        <Link
                            href="/"
                            className="group flex items-center gap-2 bg-[var(--color-15)] text-white px-10 py-4 rounded-2xl font-bold shadow-xl shadow-black/10 hover:scale-[1.02] active:scale-95 transition-all w-full sm:w-auto justify-center"
                        >
                            <HiOutlineHome size={20} className="group-hover:-translate-y-0.5 transition-transform" />
                            Back to home
                        </Link>
                    </div>
                </motion.div>

                {/* Decorative elements */}
                <div className="mt-20 flex justify-center gap-4 text-[var(--color-21)]">
                    {[1, 2, 3].map((i) => (
                        <motion.div
                            key={i}
                            animate={{
                                y: [0, -10, 0],
                                opacity: [0.3, 0.6, 0.3]
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                delay: i * 0.5,
                                ease: "easeInOut"
                            }}
                            className="w-1.5 h-1.5 rounded-full bg-[var(--color-7)]"
                        />
                    ))}
                </div>
            </div>

            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: `radial-gradient(var(--color-15) 0.5px, transparent 0.5px)`,
                    backgroundSize: '24px 24px'
                }}
            />
        </main>
    );
}
