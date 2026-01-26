"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { API_BASE_URL } from '@/lib/api-config';
import { usePageSEO } from '@/app/hooks/usePageTitles';
import { HiOutlineDocumentText } from 'react-icons/hi';
import { IoDocumentTextOutline } from 'react-icons/io5';

export default function TermsAndConditions() {
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(`${API_BASE_URL}/api/content/terms`);
                const result = await res.json();
                setData(result);
            } catch (err) {
                console.error("Failed to fetch terms", err);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    const seoTitle = data?.seo?.title || "Terms & Conditions | Avenstek Solutions";
    const seoDescription = data?.seo?.description || "Read our terms and conditions to understand the rules and guidelines for using Avenstek Solutions platform.";
    const seoKeywords = data?.seo?.keywords || "";

    usePageSEO(seoTitle, seoDescription, seoKeywords);

    if (loading) {
        return (
            <div className="min-h-[60vh] flex items-center justify-center">
                <div className="w-8 h-8 border-4 border-[var(--color-7)] border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    return (
        <main className="bg-[var(--color-2)] min-h-screen pb-20">
            {/* Hero Section */}
            <section className="pt-20 pb-16 px-6 lg:px-22">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-block mb-[1rem]">
                    <div className="text-[var(--color-8)] bg-[var(--color-13)] flex text-[0.9rem] py-[0.6rem] px-4 rounded-lg items-center justify-center">
                       <IoDocumentTextOutline />
                        <h2 className="ps-2 font-semibold whitespace-nowrap">Legal Documents</h2>
                    </div>
                    </div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--color-15)] mb-6"
                    >
                        Terms & <span className="text-[var(--color-20)]">Conditions</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-[var(--color-20)] text-lg max-w-2xl mx-auto"
                    >
                        Please read these terms and conditions carefully before using our services. Last updated: {data?.updatedAt ? new Date(data.updatedAt).toLocaleDateString() : new Date().toLocaleDateString()}
                    </motion.p>
                </div>
            </section>

            {/* Content Section */}
            <section className="px-6 lg:px-22">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="max-w-4xl mx-auto bg-white rounded-3xl border border-[var(--color-23)] p-8 md:p-12 shadow-sm"
                >
                    {data?.content ? (
                        <article
                            className="prose prose-lg max-w-none text-[var(--color-20)] leading-relaxed 
                prose-headings:text-[var(--color-15)] prose-headings:font-bold 
                prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-6
                prose-p:mb-4 prose-li:mb-2
                prose-strong:text-[var(--color-15)]"
                            dangerouslySetInnerHTML={{ __html: data.content }}
                        />
                    ) : (
                        <div className="text-center py-20 text-[var(--color-21)]">
                            <p>Content is being updated. Please check back later.</p>
                        </div>
                    )}
                </motion.div>
            </section>
        </main>
    );
}
