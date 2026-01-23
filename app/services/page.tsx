"use client";
import React, { useState, useEffect } from 'react';
import { API_BASE_URL } from '@/lib/api-config';
import { FaRegCalendarCheck } from "react-icons/fa";
import { IoStar } from "react-icons/io5";
import { IoStarHalf } from "react-icons/io5";
import { FiEdit3 } from "react-icons/fi";
import { TbStairsUp } from "react-icons/tb";
import { FaUserCircle } from "react-icons/fa";
import { HiMiniUserGroup } from "react-icons/hi2";
import { CiCloud } from "react-icons/ci";
import { LuShield } from "react-icons/lu";
import { FiDatabase } from "react-icons/fi";
import { IoCode } from "react-icons/io5";
import { HiOutlineChip } from "react-icons/hi";
import { FaNetworkWired } from "react-icons/fa";
import { BsGlobe } from "react-icons/bs";
import { FiSmartphone } from "react-icons/fi";
import { FiMonitor } from "react-icons/fi";
import { IconRenderer } from "../admin/components/IconPicker";
import { usePageSEO } from '../hooks/usePageTitles';

export default function Services() {
    const [servicesList, setServicesList] = useState<any[]>([]);
    const [seo, setSeo] = useState({
        title: "",
        description: "",
        keywords: ""
    });

    useEffect(() => {
        const fetchServices = async () => {
            try {
                const res = await fetch(`${API_BASE_URL}/api/content/services`);
                const data = await res.json();
                if (data) {
                    if (data.seo) {
                        setSeo({
                            title: data.seo.title,
                            description: data.seo.description,
                            keywords: data.seo.keywords
                        });
                    }
                    if (data.services) {
                        setServicesList(data.services);
                    }
                }
            } catch (err) {
                console.error("Failed to fetch services content");
            }
        };
        fetchServices();
    }, []);

    usePageSEO(seo.title, seo.description, seo.keywords);
    return (
        <>
            <main className="flex px-[1rem] pb-[3rem] sm:px-[2rem] md:px-[3rem] lg:px-[4rem]">
                <section className="w-full">
                    <header className="flex justify-center">
                        <div className="max-w-[35rem] w-[100%] my-[3rem] text-center">
                            <div className="inline-block mb-[1rem]">
                                <div className="text-[var(--color-8)] bg-[var(--color-13)] flex text-[0.9rem] py-[0.6rem] px-4 rounded-lg items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sparkles-icon lucide-sparkles flex-shrink-0">
                                        <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z" />
                                        <path d="M20 2v4" />
                                        <path d="M22 4h-4" />
                                        <circle cx="4" cy="20" r="2" />
                                    </svg>
                                    <h2 className="ps-2 font-semibold whitespace-nowrap">Innovative IT Solutions</h2>
                                </div>
                            </div>
                            <h2 className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] font-bold leading-[1.2] mb-[1rem]">Discover Our Comprehensive <span className="text-[var(--color-20)]">Services</span></h2>
                            <p className="text-[var(--color-20)] text-lg font-light max-w-[30rem] mx-auto">Expert solutions tailored to drive your digital transformation</p>
                        </div>
                    </header>
                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1.5rem]">
                        {servicesList.length > 0 ? (
                            servicesList.map((service, index) => (
                                <div key={service._id || index} className="cursor-pointer group transition-all duration-500 border-[var(--color-22)] hover:border-[var(--color-8)] border rounded-lg p-[1.6rem] hover:shadow-lg hover:-translate-y-1">
                                    <div className="flex gap-[1.2rem]">
                                        <div className="transition-all duration-500 group-hover:bg-[var(--color-8)] bg-[var(--color-24)] rounded-lg inline-flex items-center justify-center h-[3.9rem] w-[3.9rem] p-[1rem] flex-shrink-0">
                                            <span className="text-[1.9rem] transition-all duration-500 text-[var(--color-8)] group-hover:text-[var(--color-25)] flex items-center justify-center">
                                                <IconRenderer name={service.iconName} size={30} />
                                            </span>
                                        </div>
                                        <div>
                                            <h3 className="text-[1.25rem] sm:text-[1.4rem] font-bold leading-[1.8rem] mb-[0.5rem]">{service.title}</h3>
                                            <p className="font-light text-[var(--color-20)] text-[0.95rem] leading-[1.5rem] mb-[0.75rem]">{service.subtext}</p>
                                            {/* Bullet points are not in current schema, preserving layout if needed later or if data structure changes */}
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="col-span-3 text-center text-gray-500">Loading services...</div>
                        )}
                    </div>
                </section>
            </main>
            <section className="bg-[var(--color-24)] px-[1rem] sm:px-[2rem] md:px-[3rem] lg:px-[5rem] py-[4rem]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-[3rem]">
                    <div className="p-[1rem]">
                        <div className="text-[var(--color-8)] w-fit bg-[var(--color-13)] flex text-[0.85rem] py-[0.6rem] px-4 rounded-lg font-semibold items-center mb-[1.2rem]">
                            <FaRegCalendarCheck className="flex-shrink-0" />
                            <h2 className="ps-2 text-left whitespace-nowrap">Client-Centric Approach</h2>
                        </div>
                        <h3 className="text-[1.8rem] sm:text-[2rem] md:text-[2.2rem] font-bold mb-[1rem] leading-[1.3]">Delivering <span className="text-[var(--color-20)]">Excellence</span> in Every Project</h3>
                        <p className="font-light text-[var(--color-20)] text-lg max-w-[28rem] leading-[1.6] mb-[2rem]">At Avenstek Solutions Pvt Ltd, we partner with businesses to deliver innovative, reliable, and scalable IT solutions. Our experienced team ensures your digital transformation journey is seamless, efficient, and aligned with your strategic goals.</p>
                        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-[1.2rem]">
                            {[
                                { icon: <IoCode size={22} className="flex-shrink-0 text-[var(--color-8)]" />, title: "Agile Development", desc: "Flexible methodologies for faster delivery and adaptability." },
                                { icon: <LuShield size={22} className="flex-shrink-0 text-[var(--color-8)]" />, title: "Secure Solutions", desc: "Built-in security best practices to protect your assets." },
                                { icon: <FiDatabase size={22} className="flex-shrink-0 text-[var(--color-8)]" />, title: "Scalable Architecture", desc: "Solutions designed to grow with your business needs." },
                                { icon: <FiEdit3 size={22} className="flex-shrink-0 text-[var(--color-8)]" />, title: "Ongoing Support", desc: "Dedicated maintenance and updates post-launch." }
                            ].map((feature, index) => (
                                <div key={index} className="flex gap-[1rem] items-start">
                                    <span className="p-[0.65rem] rounded-md h-[2.5rem] w-[2.5rem] border bg-[var(--color-26)] inline-flex items-center justify-center flex-shrink-0">
                                        {feature.icon}
                                    </span>
                                    <div>
                                        <h3 className="font-bold text-[1.05rem] mb-[0.2rem]">{feature.title}</h3>
                                        <p className="text-[var(--color-20)] text-[0.9rem] leading-[1.4rem] font-light">{feature.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="space-y-[2rem]">
                        {/* <div className="bg-[var(--color-26)] p-[1.8rem] rounded-xl border border-[var(--color-21)]">
                            <div className="flex gap-[1rem] items-center mb-[0.8rem]">
                                <div className="flex gap-[0.15rem] text-[var(--color-8)] text-[1.1rem]">
                                    <IoStar />
                                    <IoStar />
                                    <IoStar />
                                    <IoStar />
                                    <IoStarHalf />
                                </div>
                                <div>
                                    <h4 className="font-bold text-[1.1rem]">4.9 <span className="font-light text-[0.85rem] text-[var(--color-20)]">(Client Rating)</span></h4>
                                </div>
                            </div>
                            <p className="text-[var(--color-20)] font-light leading-[1.5rem] mb-[1.2rem] text-[0.95rem]">Avenstek delivered a robust web application that transformed our operations. Their team was professional, responsive, and exceeded our expectations in every way.</p>
                            <div className="mb-[1.2rem]">
                                <h3 className="font-bold text-[1.2rem] mb-[0.2rem]">Sarah Johnson</h3>
                                <p className="font-light text-[0.9rem] text-[var(--color-20)]">CTO, Tech Innovations Ltd</p>
                            </div>
                            <div className="w-full h-[14rem] bg-[var(--color-21)] rounded-lg overflow-hidden">
                                <img src="https://delighted.com/wp-content/uploads/2019/08/customer-testimonial-example.png?w=1200" alt="Client testimonial" className="w-full h-full object-cover" />
                            </div>
                        </div> */}
                        <div className="bg-[var(--color-26)] p-[1.8rem] rounded-xl border border-[var(--color-21)]">
                            <div className="flex gap-[0.8rem] items-center mb-[1rem]">
                                <HiOutlineChip className="text-[var(--color-8)] text-[1.8rem]" />
                                <h3 className="font-bold text-[1.5rem]">Project Success</h3>
                            </div>
                            <h4 className="text-[1.8rem] font-bold mb-[0.8rem] leading-[1.3]">98% <span className="text-[var(--color-20)] font-normal">On-Time Delivery</span></h4>
                            <p className="text-[var(--color-20)] font-light leading-[1.5rem] mb-[1.2rem] text-[0.95rem]">Our commitment to deadlines and quality has earned us trust from clients across industries.</p>
                            <div className="w-full h-[15rem] bg-[var(--color-21)] rounded-lg overflow-hidden">
                                <img src="https://syhzhuelbxgnhopnwjgc.supabase.co/storage/v1/object/public/media/blog/why_does_a_software_company_need_a_professional_services_team_0.jpg" alt="Professional software development team" className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-2">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1.5rem]">
                            {[
                                { value: "50+", label: "Successful Projects", desc: "Delivered across various industries." },
                                { value: "30+", label: "Happy Clients", desc: "Worldwide partnerships built on trust." },
                                { value: "4.9", label: "Average Rating", desc: "From client feedback and reviews." },
                                { value: "10+", label: "Years of Expertise", desc: "In software development and IT consulting." }
                            ].map((stat, index) => (
                                <div key={index} className="text-center bg-[var(--color-26)] p-[1.8rem] rounded-xl border border-[var(--color-21)] hover:shadow-lg transition-shadow duration-300">
                                    <h2 className="text-[var(--color-8)] text-[2.5rem] md:text-[2.8rem] font-bold mb-[0.5rem]">{stat.value}</h2>
                                    <h4 className="font-bold text-[1.2rem] mb-[0.6rem]">{stat.label}</h4>
                                    <p className="text-[var(--color-20)] font-light text-[0.9rem]">{stat.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-[4rem] px-[1rem] sm:px-[2rem] md:px-[3rem] lg:px-[5rem]">
                <div className="flex flex-col items-center justify-center mb-[3rem]">
                    <div className="inline-block mb-[1rem]">
                        <div className="text-[var(--color-8)] font-semibold items-center text-center bg-[var(--color-13)] flex text-[0.85rem] py-[0.6rem] px-4 rounded-lg">
                            <TbStairsUp className="flex-shrink-0" />
                            <h2 className="ps-2 whitespace-nowrap">Proven Partnership Process</h2>
                        </div>
                    </div>
                    <div className="text-center max-w-[35rem]">
                        <h2 className="text-[2rem] sm:text-[2.5rem] md:text-[2.8rem] font-bold leading-[1.2] mb-[1rem]">Your Journey to <span className="text-[var(--color-20)]">Digital Success</span></h2>
                        <p className="text-[var(--color-20)] text-lg leading-[1.5] font-light">We guide you every step of the way, from consultation to deployment and beyond.</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem]">
                    {[
                        { icon: <FaUserCircle />, title: "Initial Consultation", desc: "We discuss your requirements, goals, and challenges to understand your vision." },
                        { icon: <HiMiniUserGroup />, title: "Planning & Design", desc: "Our team creates a tailored strategy, wireframes, and prototypes for approval." },
                        { icon: <FiEdit3 />, title: "Development & Launch", desc: "We build, test, and deploy your solution with ongoing support and optimizations." }
                    ].map((step, index) => (
                        <div key={index} className="flex flex-col border border-[var(--color-21)] p-[2rem] rounded-xl items-center text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                            <div className="border border-[var(--color-21)] text-[var(--color-8)] inline-flex items-center justify-center p-[0.9rem] text-[2rem] rounded-xl mb-[1.2rem] bg-[var(--color-26)]">
                                {step.icon}
                            </div>
                            <h2 className="text-[1.4rem] sm:text-[1.5rem] font-bold mb-[0.8rem]">{step.title}</h2>
                            <p className="text-[var(--color-20)] font-light leading-[1.6] text-[0.95rem]">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}