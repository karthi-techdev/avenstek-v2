"use client"

import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import Link from "next/link";
import { motion } from "framer-motion";
import React, { useState } from 'react';
import Image from "next/image";
import LogoLoop from '@/components/LogoLoop';
import { FaArrowRight, FaCheck, FaChevronRight, FaRegCalendarCheck, FaRegCircle } from "react-icons/fa";
import { HiCursorArrowRays, HiOutlineCircleStack } from "react-icons/hi2";
import { TbCircleOff, TbClockPause, TbDeviceDesktopQuestion, TbMailExclamation, TbMailUp, TbNotesOff, TbSettingsCode, TbSettingsExclamation, TbUserCheck, TbUserOff } from "react-icons/tb";
import Client1 from "@/public/home-image/Client-1.avif";
import Client2 from "@/public/home-image/Client-2.avif";
import Client3 from "@/public/home-image/Client-3.avif";
import { Rating } from '@mui/material';
import { BsBarChartSteps, BsBoxArrowUpRight, BsDatabaseLock, BsExclamationOctagon, BsSun } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import { TiLocationOutline, TiTick } from "react-icons/ti";
import { IoCheckmark, IoCloudDoneOutline, IoEyeOffOutline, IoPaperPlaneOutline } from "react-icons/io5";
import { FaListCheck } from "react-icons/fa6";
import { PiFolders, PiNotepad, PiStack, PiStepsDuotone } from "react-icons/pi";
import { HiOutlineEmojiSad } from "react-icons/hi";
import { CiRepeat, CiTrophy } from "react-icons/ci";
import Founder from "@/public/home-image/Founder.avif";
import { IoIosCube, IoIosWalk } from "react-icons/io";
import { MdFilterListOff, MdHeadsetMic, MdOutlineAutoAwesome, MdOutlineMarkEmailRead } from "react-icons/md";
import { GoShieldCheck } from "react-icons/go";
import { BiSolidCoinStack, BiSolidCricketBall } from "react-icons/bi";
import { RxCross1 } from "react-icons/rx";
import { LuCalendarHeart, LuUnplug } from "react-icons/lu";
import { ChevronDown } from "lucide-react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import {Accordion,AccordionItem,AccordionTrigger,AccordionContent,} from "../components/ui/accordion";
import {
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare, FaAngular,
  FaJava, FaVuejs, FaPhp, FaBootstrap, FaFigma, FaAws, FaDocker, FaGithub
} from "react-icons/fa";
import {
  TbBrandNextjs
} from "react-icons/tb";
import {
  SiExpress, SiNestjs, SiTailwindcss, SiMongodb,
  SiMysql, SiPostgresql, SiFirebase, SiAdobexd
} from "react-icons/si";



export default function Home() {

  const Features = [
      { title: "Secure by Default", desc: "Your applications are encrypted, audited, and enterprise-grade protected." },
      { title: "Full-Stack Development", desc: "End-to-end solutions from frontend to backend and everything in between." },
      { title: "Performance Excellence", desc: "Track application performance, user engagement, and system efficiency." },
      { title: "One-Click Deployment", desc: "Deploy your applications seamlessly across cloud platforms." },
      { title: "Real-Time Data Sync", desc: "Auto-updates across all platforms with zero data loss." },
      { title: "Agile Development", desc: "Iterative development with continuous feedback and improvements." },
      { title: "24/7 Monitoring", desc: "Proactive system monitoring and instant alerting." },
      { title: "Integrates With Your Stack", desc: "Compatible with modern tech stacks and legacy systems alike." },
    ]

const Items = [
  {
    name: "Rajesh Kumar",
    title: "CTO, FinTech Solutions",
    image: Client1,
    body: "Avenstek transformed our legacy banking system into a modern, cloud-native application. Their expertise in financial technology is unparalleled. Highly recommended!",
  },
  {
    name: "Priya Sharma",
    title: "CEO, HealthTech Innovations",
    image: Client2,
    body: "As a healthcare startup, we needed HIPAA-compliant solutions. Avenstek delivered beyond expectations with their secure, scalable platform. Truly exceptional!",
  },
  {
    name: "Vikram Patel",
    title: "Operations Director, Logistics Corp",
    image: Client1,
    body: "The supply chain management system Avenstek built has increased our operational efficiency by 40%. Their understanding of business processes is remarkable.",
  },
  {
    name: "Ananya Reddy",
    title: "Product Manager, EduTech Global",
    image: Client3,
    body: "From concept to launch, Avenstek guided us through every phase. Our learning platform now serves 50,000+ students seamlessly. Outstanding work!",
  },
]


const [isYearly, setIsYearly] = useState(true);
const [activeTab, setActiveTab] = useState('Startups');

  const plans = [
    {
      name: "Basic",
      tagline: "Ideal for startups and MVPs.",
      monthlyPrice: "0",
      yearlyPrice: "0",
      billedText: "per project/year, billed yearly",
      monthlyBilledText: "per project/month, billed monthly",
      buttonText: "Start Consultation",
      features: ["1 project scope", "Core development features", "Weekly progress updates", "Basic hosting", "Email support"]
    },
    {
      name: "Growth",
      popular: true,
      tagline: "For growing businesses needing scalable solutions.",
      monthlyPrice: "29",
      yearlyPrice: "261",
      originalPrice: "348",
      billedText: "per project/year, billed yearly",
      monthlyBilledText: "per project/month, billed monthly",
      buttonText: "Start 30-Day Project",
      features: ["3 concurrent projects", "Full-stack development", "UI/UX design", "Cloud deployment", "API integration"]
    },
    {
      name: "Enterprise",
      tagline: "For large organizations ready to transform digitally",
      price: "Custom",
      buttonText: "Talk to Solutions Architect",
      features: ["Unlimited projects", "Dedicated development team", "DevOps & CI/CD", "Priority 24/7 support", "Dedicated account manager"]
    }
  ];



  const imageLogos = [
    { src: "home-image/WhatsApp Image 2025-12-26 at 14.02.52 (1).jpeg", alt: "Client 1" },
    { src: "home-image/WhatsApp Image 2025-12-26 at 14.02.52 (2).jpeg", alt: "Client 2" },
    { src: "home-image/WhatsApp Image 2025-12-26 at 14.02.52 (3).jpeg", alt: "Client 3" },
    { src: "home-image/WhatsApp Image 2025-12-26 at 14.02.52 (4).jpeg", alt: "Client 4" },
    { src: "home-image/WhatsApp Image 2025-12-26 at 14.02.52.jpeg", alt: "Client 5" },
  ];

  const techLogos = [
  { node: "A", title: "React", href: "https://react.dev" },
  { node: "B", title: "Next.js", href: "https://nextjs.org" },
  { node: "C", title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: "D", title: "Tailwind CSS", href: "https://tailwindcss.com" },
];


const items = [
  { text: "Website slowing down your business?", icon: <TbDeviceDesktopQuestion /> },
  { text: "Mobile app missing key features?", icon: <HiOutlineEmojiSad /> },
  { text: "UI/UX confusing users?", icon: <FaListCheck /> },
  { text: "Still no automation in workflows?", icon: <TbSettingsExclamation /> },
  { text: "E-commerce conversions dropping?", icon: <IoPaperPlaneOutline /> },
  { text: "Security risks stressing you out?", icon: <IoEyeOffOutline /> },
  { text: "Analytics not making sense?", icon: <CiRepeat /> },
  { text: "Brand identity lacking impact?", icon: <TbUserOff /> },
  { text: "Tech stack outdated and slow?", icon: <TbClockPause /> },
  { text: "DevOps pipeline constantly broken?", icon: <TbCircleOff /> },
  { text: "Users leaving due to bad experience?", icon: <TbNotesOff /> },
  { text: "Web app crashes when traffic comes?", icon: <PiNotepad /> },
  { text: "No proper product strategy?", icon: <TbMailExclamation /> },
  { text: "Struggling to scale digitally?", icon: <TiLocationOutline /> },
  { text: "Design not matching your vision?", icon: <HiOutlineCircleStack /> },
  { text: "Support issues piling up?", icon: <FiUsers /> },
];

const techStack = [
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact, TbBrandNextjs, FaVuejs, FaAngular, SiTailwindcss, FaBootstrap, FaNodeJs,
  SiExpress, SiNestjs, FaPhp, FaJava, SiMongodb, SiMysql,
  SiPostgresql, FaAws, FaDocker, SiFirebase, FaGithub, FaFigma,
  SiAdobexd
];

const shuffledStack = [...techStack].sort(() => Math.random() - 0.5);
 
  return (
    <>
      <section className="home-section pt-10 px-4">
      <div className="text-center">
        {/* <button className="px-3 py-1 bg-[var(--color-24)] cursor-pointer rounded-full text-sm md:text-base">
          Avenstek for Enterprise is here
          <FaArrowRight className="inline ml-2 p-1 text-xl rounded-full bg-[var(--color-26)]" />
        </button> */}
      </div>

      <div className="text-center mt-10 md:mt-14">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Turning ideas into reality:
          <span className="text-[var(--color-20)]">
            {" "}Build your <span className="block md:inline lg:block mt-2">digital future with us.</span>
          </span>
        </h1>
        <p className="text-[var(--color-20)] text-lg md:text-xl mt-4 max-w-2xl mx-auto">
          Avenstek delivers world-class software development solutions with 10+ years of expertise, so you can focus on business while we handle the tech.
        </p>
      </div>

      <div className="text-center mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
        <button className="w-full sm:w-auto shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[var(--color-7)] cursor-pointer px-8 py-3 bg-[var(--color-8)] rounded-full text-white font-light transition duration-200 ease-linear">
          Start your project <span><FaChevronRight className="inline ml-2" /></span>
        </button>
        
        <button className="w-full sm:w-auto cursor-pointer px-8 py-3 bg-[var(--color-24)] rounded-full font-light ">
          Book a consultation <HiCursorArrowRays className="inline ml-2"/>
        </button>
      </div>

      <div className="mt-10 flex flex-wrap justify-center gap-4 md:gap-0">
        <p className="inline-flex items-center mx-2 md:mx-6 text-sm md:text-base">
          <TbUserCheck className="mr-2 text-[var(--color-8)] text-xl"/>10+ Years Expertise
        </p>
        <p className="inline-flex items-center mx-2 md:mx-6 text-sm md:text-base">
          <TbUserCheck className="mr-2 text-[var(--color-8)] text-xl"/>On-Time Delivery Guarantee
        </p>
        <p className="inline-flex items-center mx-2 md:mx-6 text-sm md:text-base">
          <TbUserCheck className="mr-2 text-[var(--color-8)] text-xl"/>24/7 Technical Support
        </p>
      </div>
      </section>

     {/* <section className="info-section px-4"> 
        <div className="text-center mt-10 md:mt-20">
          <p className="block font-bold text-lg md:text-base">Businesses that scale faster run on Avenstek</p>
          <p className="text-[var(--color-19)] font-bold mt-2">From startups to Fortune 500 companies.</p>
        </div>

        <div style={{ height: '150px', position: 'relative', overflow: 'hidden'}} className="mt-8 lg:w-220 mx-auto md:mt-15">
          <LogoLoop
            logos={imageLogos}
            speed={120}
            direction="left"
            logoHeight={48}
            gap={40}
            hoverSpeed={0}
            scaleOnHover
            fadeOut
            fadeOutColor="#ffffff"
            ariaLabel="Our clients"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:px-40">
          
          <div className="mx-auto md:mx-3 border-2 rounded-lg flex flex-col justify-between w-full max-w-md md:max-w-none">
            <h2 className="font-bold px-6 mt-8 text-[17px]">
              "We transitioned our legacy systems to modern cloud solutions with Avenstek. They reduced our maintenance costs by 60% and improved performance dramatically."
            </h2>
            <div className="flex justify-between items-end mt-6 px-6 mb-6">
              <div className="flex items-center mt-10">
                <Image src={Client1} className="rounded-full w-10 h-10 object-cover" alt="Claire Bennett" />
                <div className="ml-2">
                  <h1 className="text-sm font-bold">Rahul Mehta</h1>
                  <p className="text-[var(--color-19)] text-sm">CTO, Banking Solutions</p>
                </div>
              </div>
              <div className="text-xs opacity-50">
                <h2>Logo</h2>
              </div>
            </div>
          </div>

          <div className="mx-auto md:mx-3 border-2 rounded-lg flex flex-col justify-between w-full max-w-md md:max-w-none">
            <h2 className="font-bold px-6 mt-8 text-[17px]">
              "Avenstek's agile methodology made our product development 3x faster. They delivered each sprint on time with exceptional quality."
            </h2>
            <div className="flex justify-between items-end mt-6 px-6 mb-6">
              <div className="flex items-center">
                <Image src={Client2} className="rounded-full w-10 h-10 object-cover" alt="Keisa Oduro" />
                <div className="ml-2">
                  <h1 className="text-sm font-bold">Sneha Verma</h1>
                  <p className="text-[var(--color-19)] text-sm">Product Lead, HealthTech</p>
                </div>
              </div>
              <div className="text-xs opacity-50">
                <h2>Logo</h2>
              </div>
            </div>
          </div>

          <div className="mx-auto md:mx-3 border-2 rounded-lg flex flex-col justify-between w-full max-w-md md:max-w-none">
            <h2 className="font-bold px-6 mt-8 text-[17px]">
              "Honestly? Their team became an extension of ours. The solutions are robust, scalable, and our users love the experience. That's the real success."
            </h2>
            <div className="flex justify-between items-end mt-6 px-6 mb-6">
              <div className="flex items-center">
                <Image src={Client3} className="rounded-full w-10 h-10 object-cover" alt="Omar Singh" />
                <div className="ml-2">
                  <h1 className="text-sm font-bold">Arjun Nair</h1>
                  <p className="text-[var(--color-19)] text-sm">CEO, E-commerce Platform</p>
                </div>
              </div>
              <div className="text-xs opacity-50">
                <h2>Dummy Image</h2>
              </div>
            </div>
          </div>

        </div>
      </section> */}

      <section className="faq-section px-4">
      <div className="text-center mt-25">
       <h3 className="bg-[var(--color-12)] text-sm py-1 w-70 mx-auto rounded-md font-bold text-[var(--color-2)] w-max px-2 flex items-center">
        <BsExclamationOctagon className="inline font-md mr-1" /> Digital Challenges Businesses Still Face in 2025
      </h3>
        
        <h1 className="font-bold max-w-160 w-full mx-auto text-3xl md:text-4xl mt-10 md:mt-20 leading-tight md:leading-12">
          Your Technology Should Accelerate Growth
          <span className="text-[var(--color-19)] font-bold"> Not Hinder Progress.</span>
        </h1>
        
      <p className="text-[var(--color-19)] mt-4 text-lg max-w-88 w-full mx-auto">
      From outdated systems to poor digital experiences, we solve everything preventing your business from scaling effectively.
    </p>
      </div>

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:px-10 lg:px-35 mt-15 md:mt-20 gap-4">
        {items.map((item, i) => (
          <li
            key={i}
            className="flex items-center gap-3 p-4 leading-relaxed border-2 text-[var(--color-19)] rounded-md"
          >
            <span className="text-lg">{item.icon}</span>
            <span>{item.text}</span>
          </li>
        ))}
      </ul>
      </section>

      <section className="Revenue px-4 md:px-0">
  
      <div className="text-center mt-16 md:mt-30">
              <h3 className="bg-[var(--color-12)] text-sm py-1 px-2 w-max flex items-center mx-auto rounded-md font-bold text-[var(--color-7)] flex items-center justify-center gap-2">
                <PiStepsDuotone className="font-md mr-1" /> Meet Avenstek
              </h3>
              <h1 className="font-bold max-w-160 w-full mx-auto text-3xl md:text-4xl mt-10 md:mt-20 leading-tight md:leading-12">
                Built for real results: <span className="text-[var(--color-19)] font-bold"> Everything your development partner should be.</span>
              </h1>
              <p className="text-[var(--color-19)] mt-4 text-lg max-w-94 w-full mx-auto">
                Avenstek delivers custom software solutions that drive business growth—minus the complexity.
              </p>
      </div>

    {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8 md:px-35">
      
      <div className="border-2 pt-8 md:pt-12 rounded-md px-6 md:px-0">
        <h4 className="flex items-center text-[var(--color-7)] md:ml-20">
          <TbSettingsCode className="text-lg mx-1"/> Custom Development <FaChevronRight className="ml-2 text-xs"/>
        </h4>
        <h2 className="text-xl max-w-88 mt-5 md:ml-15 font-bold">
          From idea to implementation. <span className="text-[var(--color-18)]">We handle your entire software lifecycle while you focus on business growth.</span>
        </h2>
        
        <div className="text-center mt-10 md:mt-15 max-w-full overflow-hidden mx-auto px-4 md:px-8 py-4 border-2 rounded-md w-fit">
          <TiTick className="my-2 mx-auto text-4xl p-1 rounded-full bg-[var(--color-23)] text-[var(--color-19)]" />
          <h2 className="max-w-50 mx-auto font-bold">Project Kickoff Completed</h2>
          <p className="max-w-70 mx-auto py-2 text-[var(--color-19)] text-xs">We've analyzed requirements and created project roadmap. Development begins next week.</p>
        </div>

        <div className="border-2 rounded-md mb-15 text-center mt-8 max-w-full mx-auto px-4 md:px-8 py-4 w-fit">
          <h2 className="max-w-60 mx-auto font-bold">E-commerce Platform -- FashionHub</h2>
          <p className="max-w-full md:w-100 py-2 text-[var(--color-19)] text-sm">Modern e-commerce solution with AI recommendations</p>
          <div className="border-2 rounded-md py-3 grid grid-cols-1 sm:grid-cols-2 mt-6 md:mt-18 gap-2">
            <h1 className="font-semibold">15 Apr 2025</h1>
            <div className="flex items-center justify-center gap-1">
              <span className="border-2 px-2 py-1 text-sm rounded-md">Sprint 3</span>
              <span>Completion</span>
              <span className="border-2 px-2 py-1 text-sm rounded-md">90%</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-2 pt-8 md:pt-12 rounded-md px-6 md:px-0">
        <h4 className="flex items-center text-[var(--color-7)] md:ml-20">
          <PiStack className="text-lg mx-1"/> Technology Stack <FaChevronRight className="ml-2 text-xs"/>
        </h4>
        <h2 className="text-xl max-w-106 mt-5 md:ml-15 font-bold">
          Cutting-edge technologies for modern solutions. <span className="text-[var(--color-18)]">We leverage the latest tech stacks to build scalable, performant applications.</span>
        </h2>
        <div className="max-w-[500px] w-full mx-auto mt-15 overflow-hidden">
          <LogoLoop logos={techLogos} speed={120} direction="left" logoHeight={48} gap={40} fadeOut fadeOutColor="#ffffff" />
        </div>
      </div>

      <div className="border-2 pt-8 md:pt-12 rounded-md px-6 md:px-0">
        <h4 className="flex items-center text-[var(--color-7)] md:ml-20">
          <TbSettingsCode className="text-lg mx-1"/> Cloud Solutions <FaChevronRight className="ml-2 text-xs"/>
        </h4>
        <h2 className="text-xl max-w-88 mt-5 md:ml-15 font-bold">
          Scalable infrastructure built right. <span className="text-[var(--color-18)]">We design cloud architectures that grow with your business needs.</span>
        </h2>
        
        <div className="text-center mt-10 md:mt-15 max-w-full overflow-hidden mx-auto px-4 md:px-8 py-4 border-2 rounded-md w-fit">
          <TiTick className="my-2 mx-auto text-4xl p-1 rounded-full bg-[var(--color-23)] text-[var(--color-19)]" />
          <h2 className="max-w-50 mx-auto font-bold">Cloud Migration Success</h2>
          <p className="max-w-70 mx-auto py-2 text-[var(--color-19)] text-xs">Legacy system migrated to AWS with zero downtime. Performance improved by 300%.</p>
        </div>

        <div className="border-2 rounded-md mb-15 text-center mt-8 max-w-full mx-auto px-4 md:px-8 py-4 w-fit">
          <h2 className="max-w-60 mx-auto font-bold">Infrastructure Dashboard -- CloudOps</h2>
          <p className="max-w-full md:w-100 py-2 text-[var(--color-19)] text-sm">Real-time monitoring of cloud resources and performance metrics</p>
          <div className="border-2 rounded-md py-3 grid grid-cols-1 sm:grid-cols-2 mt-6 md:mt-18 gap-2">
            <h1 className="font-semibold">Active Servers</h1>
            <div className="flex items-center justify-center gap-1">
              <span className="border-2 px-2 py-1 text-sm rounded-md">24</span>
              <span>Running</span>
              <span className="border-2 px-2 py-1 text-sm rounded-md">100%</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-2 pt-8 md:pt-12 rounded-md px-6 md:px-0">
        <h4 className="flex items-center text-[var(--color-7)] md:ml-20">
          <TbSettingsCode className="text-lg mx-1"/> Mobile Development <FaChevronRight className="ml-2 text-xs"/>
        </h4>
        <h2 className="text-xl max-w-88 mt-5 md:ml-15 font-bold">
          Native and cross-platform excellence. <span className="text-[var(--color-18)]">We build mobile experiences that users love and businesses rely on.</span>
        </h2>
        
        <div className="text-center mt-10 md:mt-15 max-w-full overflow-hidden mx-auto px-4 md:px-8 py-4 border-2 rounded-md w-fit">
          <TiTick className="my-2 mx-auto text-4xl p-1 rounded-full bg-[var(--color-23)] text-[var(--color-19)]" />
          <h2 className="max-w-50 mx-auto font-bold">App Store Approval</h2>
          <p className="max-w-70 mx-auto py-2 text-[var(--color-19)] text-xs">iOS and Android apps approved on first submission. User ratings averaging 4.8 stars.</p>
        </div>

        <div className="border-2 rounded-md mb-15 text-center mt-8 max-w-full mx-auto px-4 md:px-8 py-4 w-fit">
          <h2 className="max-w-60 mx-auto font-bold">Health & Fitness App -- FitLife</h2>
          <p className="max-w-full md:w-100 py-2 text-[var(--color-19)] text-sm">Cross-platform mobile app with AI workout plans</p>
          <div className="border-2 rounded-md py-3 grid grid-cols-1 sm:grid-cols-2 mt-6 md:mt-18 gap-2">
            <h1 className="font-semibold">Active Users</h1>
            <div className="flex items-center justify-center gap-1">
              <span className="border-2 px-2 py-1 text-sm rounded-md">50K</span>
              <span>Monthly</span>
              <span className="border-2 px-2 py-1 text-sm rounded-md">+15%</span>
            </div>
          </div>
        </div>
      </div>

    </div> */}

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 md:px-35 mt-20 mb-20">
      {Features.map((feature, index) => (
        <div key={index} className="text-center px-5">
          <p className="w-fit mx-auto mt-3 text-[var(--color-8)] text-xl p-2 border-2 rounded-md"><GoShieldCheck /></p>
          <h3 className="mt-3 font-bold">{feature.title}</h3>
          <p className="text-sm mt-3 text-[var(--color-19)]">{feature.desc}</p>
        </div>
      ))}
    </div>
      </section>

      <section className="velocity px-4">
        <div className="text-center mt-16 md:mt-30">
          <h3 className="bg-[var(--color-12)] text-sm py-1 w-40 mx-auto rounded-md font-bold text-[var(--color-2)] flex items-center justify-center gap-2">
            <PiStepsDuotone className="font-md" /> Avenstek vs the Rest
          </h3>
          <h1 className="font-bold max-w-160 w-full mx-auto text-3xl md:text-4xl mt-10 md:mt-20 leading-tight md:leading-12">
            The partner that delivers results <span className="text-[var(--color-19)] font-bold"> --not just code.</span>
          </h1>
          <p className="text-[var(--color-19)] mt-4 text-lg max-w-94 w-full mx-auto">
            See why forward-thinking businesses choose Avenstek over traditional agencies or freelancers.
          </p>
        </div>

        <div className="md:mx-38 mt-12 overflow-x-auto pb-6">
          <div className="grid grid-cols-4 border rounded-md min-w-[850px]">

            <div className="col-span-4 grid grid-cols-4 p-4 items-end">
              <div></div>
              <div>
                <h2 className="pl-3 text-6xl text-[var(--color-20)]"><IoIosCube /></h2>
                <p className="pl-3 font-bold">Avenstek</p>
              </div>
              <div>
                <h2 className="pl-3 text-6xl text-[var(--color-20)]"><BiSolidCricketBall /></h2>
                <p className="pl-3 font-bold">Traditional Agencies</p>
              </div>
              <div>
                <h2 className="text-6xl text-[var(--color-20)]"><IoIosCube /></h2>
                <p className="pl-3 font-bold">Freelancers</p>
              </div>
            </div>

            <div className="col-span-4">
              <div className="h-px bg-[var(--color-22)] mx-6"></div>
            </div>

            <div className="col-span-4 grid grid-cols-4 p-4">
              <p className=" pl-3">Project Onboarding</p>
              <p className="text-[var(--color-20)] pl-3">Structured in 7 days</p>
              <p className="pl-3 text-[var(--color-20)]"><RxCross1 /></p>
              <p className="text-[var(--color-20)] pl-3">Variable, often slow</p>
            </div>

            <div className="col-span-4">
              <div className="h-px bg-[var(--color-22)] mx-6"></div>
            </div>

            <div className="col-span-4 grid grid-cols-4 p-4">
              <p className=" pl-3">Technical Expertise</p>
              <p className="text-[var(--color-20)] pl-3">Full-stack specialists</p>
              <p className="text-[var(--color-20)] pl-3"><RxCross1 /></p>
              <p className="text-[var(--color-20)] pl-3"><RxCross1 /></p>
            </div>

            <div className="col-span-4">
              <div className="h-px bg-[var(--color-22)] mx-6"></div>
            </div>

            <div className="col-span-4 grid grid-cols-4 p-4">
              <p className=" pl-3">Agile Methodology</p>
              <p className="text-[var(--color-20)] pl-3">Built-in sprint cycles</p>
              <p className="text-[var(--color-20)] pl-3">Waterfall common</p>
              <p className="text-[var(--color-20)] pl-3">Ad-hoc approach</p>
            </div>

            <div className="col-span-4">
              <div className="h-px bg-[var(--color-22)] mx-6"></div>
            </div>

            <div className="col-span-4 grid grid-cols-4 p-4">
              <p className=" pl-3">Project Transparency</p>
              <p className="text-[var(--color-20)] pl-3">Real-time dashboards</p>
              <p className="text-[var(--color-20)] pl-3"><IoCheckmark /></p>
              <p className="text-[var(--color-20)] pl-3"><RxCross1 /></p>
            </div>

            <div className="col-span-4">
              <div className="h-px bg-[var(--color-22)] mx-6"></div>
            </div>

            <div className="col-span-4 grid grid-cols-4 p-4">
              <p className=" pl-3">Client Collaboration</p>
              <p className="text-[var(--color-20)] pl-3">Dedicated communication channels</p>
              <p className="text-[var(--color-20)] pl-3"><RxCross1 /></p>
              <p className="text-[var(--color-20)] pl-3"><RxCross1 /></p>
            </div>

            <div className="col-span-4">
              <div className="h-px bg-[var(--color-22)] mx-6"></div>
            </div>

            <div className="col-span-4 grid grid-cols-4 p-4">
              <p className=" pl-3">Quality Assurance</p>
              <p className="text-[var(--color-20)] pl-3">Automated testing suites</p>
              <p className="text-[var(--color-20)] pl-3"><RxCross1 /></p>
              <p className="text-[var(--color-20)] pl-3"><RxCross1 /></p>
            </div>

            <div className="col-span-4">
              <div className="h-px bg-[var(--color-22)] mx-6"></div>
            </div>

            <div className="col-span-4 grid grid-cols-4 p-4">
              <p className=" pl-3">Pricing Transparency</p>
              <p className="text-[var(--color-20)] pl-3">Clear milestones & billing</p>
              <p className="text-[var(--color-20)] pl-3"><RxCross1 /></p>
              <p className="text-[var(--color-20)] pl-3"><RxCross1 /></p>
            </div>

            <div className="col-span-4">
              <div className="h-px bg-[var(--color-22)] mx-6"></div>
            </div>

            <div className="col-span-4 grid grid-cols-4 p-4">
              <p className=" pl-3">Code Quality (AI Assisted)</p>
              <p className="text-[var(--color-20)] pl-3">Automated code reviews</p>
              <p className="text-[var(--color-20)] pl-3"><RxCross1 /></p>
              <p className="text-[var(--color-20)] pl-3"><RxCross1 /></p>
            </div>

            <div className="col-span-4">
              <div className="h-px bg-[var(--color-22)] mx-6"></div>
            </div>

            <div className="col-span-4 grid grid-cols-4 p-4">
              <p className=" pl-3">Delivery Predictability</p>
              <p className="text-[var(--color-20)] pl-3">95% on-time delivery rate</p>
              <p className="text-[var(--color-20)] pl-3"><RxCross1 /></p>
              <p className="text-[var(--color-20)] pl-3">Often delayed</p>
            </div>

            <div className="col-span-4">
              <div className="h-px bg-[var(--color-22)] mx-6"></div>
            </div>

            <div className="col-span-4 grid grid-cols-4 p-4">
              <p className=" pl-3">Support & Maintenance</p>
              <p className="text-[var(--color-20)] pl-3">24/7 technical support</p>
              <p className="text-[var(--color-20)] pl-3"><RxCross1 /></p>
              <p className="text-[var(--color-20)] pl-3">Limited availability</p>
            </div>

            <div className="col-span-4">
              <div className="h-px bg-[var(--color-22)] mx-6"></div>
            </div>

            <div className="col-span-4 grid grid-cols-4 p-4 items-center">
              <p className=" pl-3"></p>
              <p className="text-[var(--color-20)] pl-3">
                <button className="whitespace-nowrap shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[var(--color-7)] cursor-pointer px-8 py-3 bg-[var(--color-8)] rounded-full text-white font-light transition duration-200 ease-linear">
                  Start with Avenstek <span><FaChevronRight className="inline ml-2" /></span>
                </button>
              </p>
              <p className="text-[var(--color-20)] pl-3"></p>
              <p className="text-[var(--color-20)] pl-3"></p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="real-teams-section">
        <div className="relative flex w-full flex-col items-center bg-[var(--color-2)] pt-8 pb-15">
          <div className="text-center mt-16 md:mt-30">
            <h3 className="bg-[var(--color-12)] text-sm py-1 w-50 mx-auto rounded-md font-bold text-[var(--color-2)] flex items-center justify-center gap-2 px-2 w-max flex items-center">
              <CiTrophy className="font-md" /> Real Feedback. Real Results
            </h3>
            <h1 className="font-bold max-w-160 w-full mx-auto text-3xl md:text-4xl mt-10 md:mt-20 leading-tight md:leading-12 text-[var(--color-16)]">
              Real results, happy clients: <span className="text-[var(--color-19)] font-bold"> How businesses achieve digital success with Avenstek.</span>
            </h1>
            <p className="text-[var(--color-19)] mt-4 text-lg max-w-94 w-full mx-auto">
              See why innovative companies choose Avenstek for their digital transformation journey.
            </p>
          </div>

          <div className="relative grid h-[650px] w-full max-w-6xl grid-cols-1 gap-4 overflow-hidden px-4 lg:grid-cols-3 [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] mt-15">
            <div className="relative flex flex-col overflow-hidden">
              <div className="flex flex-col h-max animate-marquee-vertical [--duration:35s] hover:[animation-play-state:paused]">
                {[...Items, ...Items].map((item, idx) => (
                  <div key={`col1-${idx}`} className="py-2">
                    <div className="group relative flex flex-col rounded-2xl border border-[var(--color-23)] bg-[var(--color-2)] p-6 shadow-sm transition-colors hover:border-[var(--color-22)]">
                      <div className="flex items-center gap-3 mb-4">
                        <Image src={item.image} width={40} height={40} alt="" className="h-10 w-10 rounded-full bg-[var(--color-24)] object-cover" />
                        <div className="flex flex-col">
                          <span className="text-sm font-bold text-[var(--color-16)] leading-tight">{item.name}</span>
                          <span className="text-xs text-[var(--color-21)]">{item.title}</span>
                        </div>
                      </div>
                      <p className="text-[15px] leading-relaxed text-[var(--color-19)]">"{item.body}"</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="hidden lg:flex relative flex-col overflow-hidden">
              <div className="flex flex-col h-max animate-marquee-vertical-reverse [--duration:45s] hover:[animation-play-state:paused]">
                {[...Items, ...Items].map((item, idx) => (
                  <div key={`col2-${idx}`} className="py-2">
                    <div className="group relative flex flex-col rounded-2xl border border-[var(--color-23)] bg-[var(--color-2)] p-6 shadow-sm transition-colors hover:border-[var(--color-22)]">
                      <div className="flex items-center gap-3 mb-4">
                        <Image src={item.image} width={40} height={40} alt="" className="h-10 w-10 rounded-full bg-[var(--color-24)] object-cover" />
                        <div className="flex flex-col">
                          <span className="text-sm font-bold text-[var(--color-16)] leading-tight">{item.name}</span>
                          <span className="text-xs text-[var(--color-21)]">{item.title}</span>
                        </div>
                      </div>
                      <p className="text-[15px] leading-relaxed text-[var(--color-19)]">"{item.body}"</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="hidden lg:flex relative flex-col overflow-hidden">
              <div className="flex flex-col h-max animate-marquee-vertical [--duration:40s] hover:[animation-play-state:paused]">
                {[...Items, ...Items].map((item, idx) => (
                  <div key={`col3-${idx}`} className="py-2">
                    <div className="group relative flex flex-col rounded-2xl border border-[var(--color-23)] bg-[var(--color-2)] p-6 shadow-sm transition-colors hover:border-[var(--color-22)]">
                      <div className="flex items-center gap-3 mb-4">
                        <Image src={item.image} width={40} height={40} alt="" className="h-10 w-10 rounded-full bg-[var(--color-24)] object-cover" />
                        <div className="flex flex-col">
                          <span className="text-sm font-bold text-[var(--color-16)] leading-tight">{item.name}</span>
                          <span className="text-xs text-[var(--color-21)]">{item.title}</span>
                        </div>
                      </div>
                      <p className="text-[15px] leading-relaxed text-[var(--color-19)]">"{item.body}"</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-15 mx-4 lg:mx-auto max-w-6xl gap-4 md:gap-6">
          
          <div className="border-2 border-[var(--color-23)] rounded-md py-4 flex items-center px-3 bg-[var(--color-2)]">
            <div className="w-1/3 flex justify-center">
              <BiSolidCoinStack className="text-[var(--color-21)] text-5xl" />
            </div>
            <div className="w-2/3">
              <Rating name="half-rating" defaultValue={4.8} precision={0.5} size="small" />
              <h3 className="text-sm md:text-base font-medium text-[var(--color-18)] whitespace-nowrap">4.8/5 client satisfaction</h3>
            </div>
          </div>

          <div className="border-2 border-[var(--color-23)] rounded-md py-4 flex items-center px-3 bg-[var(--color-2)]">
            <div className="w-1/3 flex justify-center">
              <BsSun className="text-[var(--color-21)] text-5xl" />
            </div>
            <div className="w-2/3">
              <Rating name="half-rating" defaultValue={4.9} precision={0.5} size="small" />
              <h3 className="text-sm md:text-base font-medium text-[var(--color-18)] whitespace-nowrap">4.9/5 technical expertise</h3>
            </div>
          </div>

          <div className="border-2 border-[var(--color-23)] rounded-md py-4 flex items-center px-3 bg-[var(--color-2)]">
            <div className="w-1/3 flex justify-center">
              <BsBarChartSteps className="text-[var(--color-21)] text-5xl" />
            </div>
            <div className="w-2/3">
              <Rating name="half-rating" defaultValue={4.7} precision={0.5} size="small" />
              <h3 className="text-sm md:text-base font-medium text-[var(--color-18)] whitespace-nowrap">4.7/5 project delivery</h3>
            </div>
          </div>
          
        </div>
      </section>

      <section className="favourite-tool-section px-4 md:px-0">
        <div className="text-center mt-16 md:mt-30">
          <h3 className="bg-[var(--color-12)] text-sm py-1 w-30 mx-auto rounded-md font-bold text-[var(--color-2)] flex items-center justify-center gap-2 px-2 w-max">
            <PiStepsDuotone className="font-md" /> Our Technology Stack
          </h3>

          <h1 className="font-bold max-w-160 w-full mx-auto text-3xl md:text-4xl mt-10 md:mt-20 leading-tight md:leading-12">
            Modern technologies for modern solutions: 
            <span className="text-[var(--color-19)] font-bold"> Everything your project requires.</span>
          </h1>

          <p className="text-[var(--color-19)] mt-4 text-lg max-w-94 w-full mx-auto">
            We leverage cutting-edge technologies to build scalable, performant applications that drive business growth.
          </p>
        </div>

        <div className="relative h-130 w-full py-20 bg-[var(--color-25)] overflow-hidden no-scrollbar">
          <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-b from-[var(--color-25)] via-transparent to-[var(--color-25)]" />

          <div className="flex justify-center items-center gap-4 md:gap-10 px-4 max-w-7xl mx-auto h-[600px] overflow-hidden">

            {[...Array(5)].map((_, colIndex) => (
              <div key={colIndex} className={`flex flex-col flex-shrink-0 h-full overflow-hidden ${colIndex % 2 === 0 ? "animate-scroll-up" : "animate-scroll-down"} ${colIndex === 0 || colIndex === 4 ? "hidden lg:flex" : ""}`}>
                <div className="flex flex-col gap-6">
                  {shuffledStack.map((Icon, i) => (
                    <div key={i} className="w-20 h-20 border border-[var(--color-23)] rounded-2xl flex items-center justify-center bg-[var(--color-2)] shadow-sm flex-shrink-0">
                      <Icon className="text-4xl text-[var(--color-19)]" />
                    </div>
                  ))}
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      <section className="budget px-4 md:px-0">
        <div className="text-center mt-16 md:mt-30">
          <h3 className="bg-[var(--color-12)] text-sm py-1 mx-auto rounded-md font-bold text-[var(--color-2)] flex items-center justify-center gap-2 px-2 w-max flex items-center">
            <PiStepsDuotone className="font-md" /> Flexible Engagement Models
          </h3>
          <h1 className="font-bold max-w-160 w-full mx-auto text-3xl md:text-4xl mt-10 md:mt-20 leading-tight md:leading-12">
            Start small, scale fast: <span className="text-[var(--color-19)] font-bold"> Solutions that grow with your business.</span>
          </h1>
          <p className="text-[var(--color-19)] mt-4 text-lg max-w-110 w-full mx-auto">
            Start with consultation, grow with dedicated teams, and achieve predictable ROI with our transparent engagement models.
          </p>
        </div>
        <div className="bg-[var(--color-2)] py-20 px-6">
          <div className="max-w-7xl mx-auto">
            
            <div className="flex items-center justify-center gap-4 mb-16">
              <span className={`text-sm font-medium ${!isYearly ? 'text-[var(--color-15)]' : 'text-[var(--color-20)]'}`}>Project Basis</span>
              <button 
                onClick={() => setIsYearly(!isYearly)}
                className="w-11 h-6 bg-[var(--color-7)] rounded-full relative p-1 transition-all"
              >
                <div className={`bg-[var(--color-2)] w-4 h-4 rounded-full shadow-sm transition-transform duration-300 ${isYearly ? 'translate-x-5' : 'translate-x-0'}`} />
              </button>
              <span className={`text-sm font-medium ${isYearly ? 'text-[var(--color-15)]' : 'text-[var(--color-20)]'}`}>Retainer Basis</span>
              <span className="bg-[var(--color-13)] text-[var(--color-7)] text-xs font-semibold px-2.5 py-1 rounded-full border border-[var(--color-12)]">
                25% off
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:px-25 ">
              {plans.map((plan, i) => (
                <div 
                  key={i} 
                  className={`relative flex flex-col p-8 rounded-3xl border transition-all duration-300
                    ${plan.popular ? 'border-[var(--color-7)] shadow-xl bg-[var(--color-14)]' : 'border-[var(--color-23)] shadow-sm'}`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-2xl font-bold text-[var(--color-15)]">{plan.name}</h3>
                    {plan.popular && (
                      <span className="bg-[var(--color-7)] text-[var(--color-2)] text-xs font-bold px-3 py-1 rounded-full">
                        Most Popular
                      </span>
                    )}
                  </div>
                  <p className="text-[var(--color-19)] text-sm mb-5">{plan.tagline}</p>

                  <div className="mb-3 min-h-[90px]">
                    {plan.price === "Custom" ? (
                      <span className="text-4xl font-bold text-[var(--color-15)]">Custom</span>
                    ) : (
                      <div>
                        <div className="flex items-start gap-2">
                          <span className="text-sm font-bold mt-2 text-[var(--color-15)]">$</span>
                          <span className="text-4xl font-bold tracking-tight text-[var(--color-15)]">
                            {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                          </span>
                          {isYearly && plan.originalPrice && (
                            <div className="ml-2">
                              <p className="text-[var(--color-7)] text-xs font-bold">25% off</p>
                              <p className="text-[var(--color-21)] line-through text-sm">${plan.originalPrice}</p>
                            </div>
                          )}
                        </div>
                        <p className="text-[var(--color-20)] text-sm ">
                          {isYearly ? plan.billedText : plan.monthlyBilledText}
                        </p>
                      </div>
                    )}
                  </div>

                  <button className={`w-full py-3 px-4 rounded-full cursor-pointer font-semibold  border transition-all
                    ${plan.popular 
                      ? 'bg-[var(--color-7)] text-[var(--color-2)] border-[var(--color-7)] hover:bg-[var(--color-6)]' 
                      : 'bg-[var(--color-2)] text-[var(--color-15)] border-[var(--color-22)] hover:bg-[var(--color-25)]'}`}>
                    {plan.buttonText}
                  </button>

                  <div className="mt-5 pt-4 border-t border-[var(--color-23)]">
                    <p className="text-sm font-bold text-[var(--color-15)] mb-1">
                      {plan.name === "Basic" ? "Includes:" : `Everything in ${i === 1 ? 'Basic' : 'Growth'} plan, +`}
                    </p>
                    <ul className="space-y-2">
                      {plan.features.map((feature, j) => (
                        <li key={j} className="flex items-start gap-3">
                          <svg className="w-5 h-5 text-[var(--color-8)] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-[var(--color-19)] text-sm leading-tight">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-4 md:gap-0">
          <p className="inline-flex items-center mx-2 md:mx-6 text-sm md:text-base">
            <TbUserCheck className="mr-2 text-[var(--color-8)] text-xl"/>Free initial consultation
          </p>
          <p className="inline-flex items-center mx-2 md:mx-6 text-sm md:text-base">
            <TbUserCheck className="mr-2 text-[var(--color-8)] text-xl"/>Flexible contract terms
          </p>
          <p className="inline-flex items-center mx-2 md:mx-6 text-sm md:text-base">
            <TbUserCheck className="mr-2 text-[var(--color-8)] text-xl"/>95% client retention rate
          </p>
        </div>
      </section>

      <section className="table-section">
        <div className="bg-[var(--color-2)] pt-20 pb-10 px-6 lg:px-40">
          <div className="max-w-7xl mx-auto border-2 rounded-md lg:px-10">
            
            <p className="md:hidden text-center text-xs text-[var(--color-21)] mb-4 italic">
              Swipe left to compare plans →
            </p>

            <div className="overflow-x-auto pb-6 scrollbar-thin scrollbar-thumb-[var(--color-22)] scrollbar-track-transparent">
              <div className="min-w-[800px] md:min-w-full">
                
                <div className="grid grid-cols-4 gap-4 py-6 border-b border-[var(--color-23)] sticky top-0 bg-[var(--color-2)] z-10">
                  <div className="col-span-1"></div>
                  {['Basic', 'Growth', 'Enterprise'].map((plan) => (
                    <div key={plan} className="text-center px-4">
                      <h4 className="text-lg font-bold text-[var(--color-15)] mb-3">{plan}</h4>
                      <button className={`w-full py-2 px-4 rounded-lg text-sm font-semibold border transition-all
                        ${plan === 'Growth' 
                          ? 'bg-[var(--color-7)] text-[var(--color-2)] border-[var(--color-7)]' 
                          : 'bg-[var(--color-2)] text-[var(--color-15)] border-[var(--color-22)]'}`}>
                        {plan === 'Enterprise' ? 'Talk to Solutions Architect' : plan === 'Growth' ? 'Start 30-Day Project' : 'Start Consultation'}
                      </button>
                    </div>
                  ))}
                </div>

                {[
                  {
                    icons: <MdOutlineAutoAwesome />,
                    title: "Development Services",
                    features: [
                      { name: "Custom Web Development", starter: true, growth: true, enterprise: true },
                      { name: "Mobile App Development", starter: false, growth: true, enterprise: true },
                      { name: "UI/UX Design", starter: false, growth: true, enterprise: true },
                      { name: "API Development & Integration", starter: false, growth: true, enterprise: true },
                    ]
                  },
                  {
                    icons:<FiUsers />,
                    title: "Project Management",
                    features: [
                      { name: "Weekly Progress Reports", starter: true, growth: true, enterprise: true },
                      { name: "Dedicated Project Manager", starter: false, growth: true, enterprise: true },
                      { name: "Agile Development Methodology", starter: true, growth: true, enterprise: true },
                    ]
                  },
                  {
                    icons:<LuUnplug />,
                    title: "Infrastructure & Deployment",
                    features: [
                      { name: "Basic Hosting", starter: true, growth: true, enterprise: true },
                      { name: "Cloud Deployment (AWS/Azure)", starter: false, growth: true, enterprise: true },
                      { name: "DevOps & CI/CD Pipeline", starter: false, growth: false, enterprise: true },
                      { name: "24/7 Server Monitoring", starter: false, growth: false, enterprise: true },
                    ]
                  },
                  {
                    icons: <MdHeadsetMic />,
                    title: "Support & Maintenance",
                    features: [
                      { name: "Email Support", starter: true, growth: true, enterprise: true },
                      { name: "Bug Fixes & Updates", starter: true, growth: true, enterprise: true },
                      { name: "Dedicated Technical Support", starter: false, growth: false, enterprise: true },
                      { name: "Quarterly Performance Reviews", starter: false, growth: false, enterprise: true },
                    ]
                  }

                ].map((group, gIdx) => (
                  <div key={gIdx} className="mt-10">
                    <h5 className="flex items-center gap-2 text-[var(--color-7)] font-bold text-sm mb-4 uppercase tracking-wider">
                      <span className="w-5 h-5 text-lg opacity-80">{group.icons}</span> {group.title}
                    </h5>
                    
                    {group.features.map((feature, fIdx) => (
                      <div key={fIdx} className="grid grid-cols-4 gap-4 py-4 border-b border-[var(--color-24)] items-center hover:bg-[var(--color-26)] transition-colors">
                        <span className="col-span-1 text-sm md:text-[1rem] font-medium text-[var(--color-18)]">
                          {feature.name}
                        </span>
                        
                        {/* Basic */}
                        <div className="flex justify-center">
                          {feature.starter ? <IoCheckmark color="var(--color-7)" /> : <RxCross1 color="var(--color-21)" />}
                        </div>
                        
                        {/* Growth */}
                        <div className="flex justify-center">
                          {feature.growth ? <IoCheckmark color="var(--color-7)" /> : <RxCross1 color="var(--color-21)" />}
                        </div>
                        
                        {/* Enterprise */}
                        <div className="flex justify-center">
                          {feature.enterprise ? <IoCheckmark color="var(--color-7)" /> : <RxCross1 color="var(--color-21)" />}
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
      </section>

      <section className="budget px-4 md:px-0">
        <div className="text-center mt-16 md:mt-30">
          <h3 className="bg-[var(--color-12)] text-sm py-1 w-max px-2 flex items-center mx-auto rounded-md font-bold text-[var(--color-2)] flex items-center justify-center gap-2">
            <PiStepsDuotone className="font-md" /> Frequently Asked Questions
          </h3>
          <h1 className="font-bold max-w-160 w-full mx-auto text-3xl md:text-4xl mt-10 md:mt-20 leading-tight md:leading-12">
            Everything you need to know: <span className="text-[var(--color-19)] font-bold"> Clear answers to common questions.</span>
          </h1>
          <p className="text-[var(--color-19)] mt-4 text-lg max-w-110 w-full mx-auto">
            Get answers to common questions about our services, processes, and engagement models.
          </p>
        </div>
        <div className="flex justify-center mt-[6rem]">
                    <div className="max-w-[800px] w-[100%] bg-[var(--color-26)] rounded-md p-[10px]">
                        <Accordion
                            type="single"
                            collapsible
                            className="w-full "
                            defaultValue="item-1"
                        >
                            <AccordionItem value="item-1" className="data-[state=open]:border data-[state=open]:bg-[var(--color-25)]  hover:bg-[var(--color-24)] p-[10px] group rounded-lg border-b-0 mb-[10px]">
                                <AccordionTrigger className="cursor-pointer hover:no-underline text-[16px]   font-semibold [&>svg]:h-6 [&>svg]:w-6 [&>svg]:stroke-[1.5] data-[state=open]:text-[var(--color-8)]">1. What is your development process?</AccordionTrigger >
                                <AccordionContent className="flex flex-col cursor-pointer  ">
                                    <p className="text-[16px] text-[var(--color-20)]">
                                        <span className="text-[var(--color-18)] font-semibold">We follow an agile development methodology</span> with clear milestones. Our process includes: 1) Discovery & Requirements Analysis, 2) UI/UX Design, 3) Development & Testing, 4) Deployment, and 5) Maintenance & Support. We provide weekly progress updates and conduct regular demos to ensure alignment with your vision throughout the project.
                                    </p>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2" className="data-[state=open]:border data-[state=open]:bg-[var(--color-25)]  hover:bg-[var(--color-24)] p-[10px] group rounded-lg border-b-0 mb-[10px]">
                                <AccordionTrigger className="cursor-pointer hover:no-underline text-[16px]   font-semibold [&>svg]:h-6 [&>svg]:w-6 [&>svg]:stroke-[1.5] data-[state=open]:text-[var(--color-8)]">2. What technologies do you specialize in?</AccordionTrigger >
                                <AccordionContent className="flex flex-col cursor-pointer  ">
                                    <p className="text-[16px] text-[var(--color-20)]">
                                        We specialize in modern technology stacks including:
                                        <br/><br/>
                                        • <strong>Frontend:</strong> React, Next.js, Angular, Vue.js, TypeScript
                                        <br/>
                                        • <strong>Backend:</strong> Node.js, Python (Django/Flask), Java, .NET Core
                                        <br/>
                                        • <strong>Mobile:</strong> React Native, Flutter, Swift, Kotlin
                                        <br/>
                                        • <strong>Database:</strong> PostgreSQL, MongoDB, MySQL, Redis
                                        <br/>
                                        • <strong>Cloud:</strong> AWS, Azure, Google Cloud, Docker, Kubernetes
                                    </p>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-3" className="data-[state=open]:border data-[state=open]:bg-[var(--color-25)]  hover:bg-[var(--color-24)] p-[10px] group rounded-lg border-b-0 mb-[10px]">
                                <AccordionTrigger className="cursor-pointer hover:no-underline text-[16px]   font-semibold [&>svg]:h-6 [&>svg]:w-6 [&>svg]:stroke-[1.5] data-[state=open]:text-[var(--color-8)]">3. How do you ensure project security and confidentiality?</AccordionTrigger >
                                <AccordionContent className="flex flex-col cursor-pointer  ">
                                    <p className="text-[16px] text-[var(--color-20)]">
                                        Security is our top priority. We implement:
                                        <br/><br/>
                                        • <strong>NDA Signing:</strong> Mandatory for all projects
                                        <br/>
                                        • <strong>Secure Development:</strong> OWASP guidelines, code reviews
                                        <br/>
                                        • <strong>Data Protection:</strong> Encryption, secure cloud infrastructure
                                        <br/>
                                        • <strong>Access Control:</strong> Role-based permissions, audit logs
                                        <br/>
                                        • <strong>Compliance:</strong> GDPR, HIPAA, PCI-DSS as required
                                    </p>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-4" className="data-[state=open]:border data-[state=open]:bg-[var(--color-25)]  hover:bg-[var(--color-24)] p-[10px] group rounded-lg border-b-0 mb-[10px]">
                                <AccordionTrigger className="cursor-pointer hover:no-underline text-[16px]   font-semibold [&>svg]:h-6 [&>svg]:w-6 [&>svg]:stroke-[1.5] data-[state=open]:text-[var(--color-8)]">4. What is your typical project timeline?</AccordionTrigger >
                                <AccordionContent className="flex flex-col cursor-pointer  ">
                                    <p className="text-[16px] text-[var(--color-20)]">
                                        <span className="text-[var(--color-18)] font-semibold">Timelines vary based on project complexity:</span>
                                        <br/><br/>
                                        • <strong>MVP Development:</strong> 2-4 months
                                        <br/>
                                        • <strong>Enterprise Applications:</strong> 4-9 months
                                        <br/>
                                        • <strong>E-commerce Platforms:</strong> 3-6 months
                                        <br/>
                                        • <strong>Mobile Apps:</strong> 3-5 months
                                        <br/><br/>
                                        We provide detailed project timelines during the discovery phase with clear milestones.
                                    </p>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-5" className="data-[state=open]:border data-[state=open]:bg-[var(--color-25)]  hover:bg-[var(--color-24)] p-[10px] group rounded-lg border-b-0 mb-[10px]">
                                <AccordionTrigger className="cursor-pointer hover:no-underline text-[16px]   font-semibold [&>svg]:h-6 [&>svg]:w-6 [&>svg]:stroke-[1.5] data-[state=open]:text-[var(--color-8)]">5. Do you provide post-launch support?</AccordionTrigger >
                                <AccordionContent className="flex flex-col cursor-pointer  ">
                                    <p className="text-[16px] text-[var(--color-20)]">Yes, we offer comprehensive post-launch support packages including:
                                    <br/><br/>
                                    • <strong>Warranty Period:</strong> 3 months of free bug fixes
                                    <br/>
                                    • <strong>Maintenance Plans:</strong> Monthly/quarterly updates
                                    <br/>
                                    • <strong>Technical Support:</strong> 24/7 emergency support available
                                    <br/>
                                    • <strong>Performance Monitoring:</strong> Regular health checks
                                    <br/>
                                    • <strong>Feature Enhancements:</strong> Ongoing improvement roadmap
                                    </p>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-6" className="data-[state=open]:border data-[state=open]:bg-[var(--color-25)]  hover:bg-[var(--color-24)] p-[10px] group rounded-lg border-b-0 mb-[10px]">
                                <AccordionTrigger className="cursor-pointer hover:no-underline text-[16px]   font-semibold [&>svg]:h-6 [&>svg]:w-6 [&>svg]:stroke-[1.5] data-[state=open]:text-[var(--color-8)]">6. Can you work with our existing development team?</AccordionTrigger >
                                <AccordionContent className="flex flex-col cursor-pointer  ">
                                    <p className="text-[16px] text-[var(--color-20)]">
                                        Absolutely. We frequently collaborate with in-house teams in various capacities:
                                        <br/><br/>
                                        • <strong>Augmentation:</strong> Supplement your team with our experts
                                        <br/>
                                        • <strong>Knowledge Transfer:</strong> Train your team on new technologies
                                        <br/>
                                        • <strong>Code Review:</strong> Audit and improve existing codebases
                                        <br/>
                                        • <strong>Architecture Consulting:</strong> Design scalable solutions
                                        <br/>
                                        • <strong>DevOps Setup:</strong> Implement CI/CD pipelines
                                    </p>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-7" className="data-[state=open]:border data-[state=open]:bg-[var(--color-25)]  hover:bg-[var(--color-24)] p-[10px] group rounded-lg border-b-0 mb-[10px]">
                                <AccordionTrigger className="cursor-pointer hover:no-underline text-[16px]   font-semibold [&>svg]:h-6 [&>svg]:w-6 [&>svg]:stroke-[1.5] data-[state=open]:text-[var(--color-8)]">7. What industries have you served?</AccordionTrigger >
                                <AccordionContent className="flex flex-col cursor-pointer  ">
                                    <p className="text-[16px] text-[var(--color-20)]">
                                        With 10+ years of experience, we've served diverse industries:
                                        <br/><br/>
                                        • <strong>Healthcare:</strong> HIPAA-compliant systems, telemedicine
                                        <br/>
                                        • <strong>FinTech:</strong> Banking apps, payment gateways, trading platforms
                                        <br/>
                                        • <strong>E-commerce:</strong> Marketplaces, inventory management, CRM
                                        <br/>
                                        • <strong>Education:</strong> LMS platforms, e-learning solutions
                                        <br/>
                                        • <strong>Logistics:</strong> Supply chain management, tracking systems
                                        <br/>
                                        • <strong>Real Estate:</strong> Property management, virtual tours
                                        <br/>
                                        • <strong>Manufacturing:</strong> ERP systems, IoT solutions
                                    </p>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>
      </section>
      
    </>
  );
}