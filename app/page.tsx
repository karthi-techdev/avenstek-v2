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

export default function Home() {

  const Features = [
      { title: "Secure by Default", desc: "Your pipeline is Encrypted, audited, and protected." },
      { title: "Call Notes in Context", desc: "Find every call, summary, and deal comment in one place." },
      { title: "Performance Dashboards", desc: "Track close rates, rep productivity, and velocity." },
      { title: "One-Click Outreach", desc: "Send follow-ups without leaving your pipeline view." },
      { title: "Data That Syncs Right", desc: "Auto-updates from every touchpoint-no more stale fields." },
      { title: "Lead Routing That Works", desc: "Assign by team, region or deal stage-instantly." },
      { title: "Timezone Intelligence", desc: "Schedule calls when your leads are actually available." },
      { title: "Integrates With Your Stack", desc: "Slack, Gmail, Salesforce, and 2,000+ more." },
    ]

const Items = [
  {
    name: "Sophia Martinez",
    title: "Lead designer, Avalon",
    image:
      Client1,
    body: "I've been in the design game for a while now and this kit is one of the best. It's made me fall in love with designing all over again. It's just brilliant.",
  },
  {
    name: "Caroline Lee",
    title: "Senior Graphic Designer, Echo",
    image:
      Client2,
    body: "I'm a newbie designer and this kit is just perfect. I've learnt so much and my work looks amazing now. A big thumbs up!",
  },
  {
    name: "Tyler Otwell",
    title: "CTO, Apple",
    image:
      Client1,
    body: "This design kit is a game changer! My designs look better and I get things done faster. Totally recommending it to my mates!",
  },
  {
    name: "Jake Harris",
    title: "Thompson Creative",
    image:
      Client3,
    body: "I'm a newbie designer and this kit is just perfect. I've learnt so much and my work looks amazing now. A big thumbs up!",
  },
]


const [isYearly, setIsYearly] = useState(true);
const [activeTab, setActiveTab] = useState('Founders');

  const plans = [
    {
      name: "Starter",
      tagline: "One seat. All essentials.",
      monthlyPrice: "0",
      yearlyPrice: "0",
      billedText: "per user/year, billed yearly",
      monthlyBilledText: "per user/month, billed monthly",
      buttonText: "Start for Free",
      features: ["1 user", "Core CRM features", "Follow-up reminders", "Contact timeline", "Email support"]
    },
    {
      name: "Growth",
      popular: true,
      tagline: "For growing teams that need automation.",
      monthlyPrice: "29",
      yearlyPrice: "261",
      originalPrice: "348",
      billedText: "per user/year, billed yearly",
      monthlyBilledText: "per user/month, billed monthly",
      buttonText: "Start 14-Day Trial",
      features: ["3 users", "Follow-up automation", "AI summaries", "Gmail & Slack integration", "Deal room"]
    },
    {
      name: "Enterprise",
      tagline: "For sales orgs ready to scale",
      price: "Custom",
      buttonText: "Talk to Sales",
      features: ["Unlimited users", "Full analytics suite", "Admin roles + permissions", "Priority support", "Dedicated success manager"]
    }
  ];



  const imageLogos = [
    { src: "home-image/WhatsApp Image 2025-12-26 at 14.02.52 (1).jpeg", alt: "Company 1" },
    { src: "home-image/WhatsApp Image 2025-12-26 at 14.02.52 (2).jpeg", alt: "Company 2" },
    { src: "home-image/WhatsApp Image 2025-12-26 at 14.02.52 (3).jpeg", alt: "Company 3" },
    { src: "home-image/WhatsApp Image 2025-12-26 at 14.02.52 (4).jpeg", alt: "Company 3" },
    { src: "home-image/WhatsApp Image 2025-12-26 at 14.02.52.jpeg", alt: "Company 3" },

  ];

  const techLogos = [
  { node: "A", title: "React", href: "https://react.dev" },
  { node: "B", title: "Next.js", href: "https://nextjs.org" },
  { node: "C", title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: "D", title: "Tailwind CSS", href: "https://tailwindcss.com" },
];




  const items = [{text:"Missed another follow-up?" , icon:<PiNotepad />} , {text:"Where is that deal again?" , icon:<HiOutlineEmojiSad />} ,{text:"Too many tools in the stack?" , icon:<TbMailExclamation />} ,{text:"Forgot last week call?" , icon:<TbDeviceDesktopQuestion />} ,{text:"Ghosted after the demo?" , icon:<IoCloudDoneOutline />} , {text:"Pipeline feel messy?" , icon:<MdFilterListOff />},{text:"Still emailing leads manually?" , icon:<IoPaperPlaneOutline />},{text:"Stuck deals everywhere?" , icon:<TbClockPause />},{text:"Sales team out of sync?" , icon:<FiUsers />},{text:"Missed a client meeting?" , icon:<TbNotesOff />} , {text:"No idea what's working?" , icon:<CiRepeat />} , {text:"Lost track of next steps?" , icon:<TbCircleOff />} , {text:"Repeating the same manual tasks?" , icon:<FaListCheck />} , {text:"Where's the deal actually stuck?" , icon:<TiLocationOutline />} , {text:"Lead vanished into thin air?" , icon:<TbUserOff />} , {text:"CRM full of outdated data?" , icon:<HiOutlineCircleStack />} , {text:"Missing deal visibility?" , icon:<IoEyeOffOutline />} , {text:"Handoff fell through the cracks?" , icon: <IoIosWalk />} , {text:"Forget to follow up again?" , icon:<FaRegCircle />} , {text:"Automations broken or nonexistent?" , icon:<TbSettingsExclamation />}]
 
  return (
    <>
      <section className="home-section mt-10 px-4">
      <div className="text-center">
        <button className="px-3 py-1 bg-[var(--color-24)] cursor-pointer rounded-full text-sm md:text-base">
          Hexa for Desktop is here
          <FaArrowRight className="inline ml-2 p-1 text-xl rounded-full bg-[var(--color-26)]" />
        </button>
      </div>

      <div className="text-center mt-10 md:mt-14">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Chaos to clarity: 
          <span className="text-[var(--color-20)]">
            {" "}Run your sales <span className="block md:inline lg:block mt-2">in one place.</span>
          </span>
        </h1>
        <p className="text-[var(--color-20)] text-lg md:text-xl mt-4 max-w-2xl mx-auto">
          Hexa automates follow-ups, remainders, and pipeline 
          <span className="hidden md:inline"> tasks — so you stay focused on selling, not scheduling</span>
          <span className="inline md:hidden"> tasks so you stay focused on selling.</span>
        </p>
      </div>

      <div className="text-center mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
        <button className="w-full sm:w-auto shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[var(--color-7)] cursor-pointer px-8 py-3 bg-[var(--color-8)] rounded-full text-white font-light transition duration-200 ease-linear">
          Start your free trial <span><FaChevronRight className="inline ml-2" /></span>
        </button>
        
        <button className="w-full sm:w-auto cursor-pointer px-8 py-3 bg-[var(--color-24)] rounded-full font-light ">
          Book a demo <HiCursorArrowRays className="inline ml-2"/>
        </button>
      </div>

      <div className="mt-10 flex flex-wrap justify-center gap-4 md:gap-0">
        <p className="inline-flex items-center mx-2 md:mx-6 text-sm md:text-base">
          <TbUserCheck className="mr-2 text-[var(--color-8)] text-xl"/>Trusted by 3000+ teams
        </p>
        <p className="inline-flex items-center mx-2 md:mx-6 text-sm md:text-base">
          <TbUserCheck className="mr-2 text-[var(--color-8)] text-xl"/>GDPR Compliant
        </p>
        <p className="inline-flex items-center mx-2 md:mx-6 text-sm md:text-base">
          <TbUserCheck className="mr-2 text-[var(--color-8)] text-xl"/>24/7 Support
        </p>
      </div>
      </section>

      <section className="info-section px-4"> 
        <div className="text-center mt-10 md:mt-20">
          <p className="block font-bold text-lg md:text-base">Sales teams that close faster run on Hexa</p>
          <p className="text-[var(--color-19)] font-bold mt-2">From solopreneurs to scaled GTM teams.</p>
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
            ariaLabel="Technology partners"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:px-40">
          
          <div className="mx-auto md:mx-3 border-2 rounded-lg flex flex-col justify-between w-full max-w-md md:max-w-none">
            <h2 className="font-bold px-6 mt-8 text-[17px]">
              "We ditched our legacy CRM and never looked back. Hexa shaved hours off follow-ups and keeps our pipeline clean."
            </h2>
            <div className="flex justify-between items-end mt-6 px-6 mb-6">
              <div className="flex items-center mt-10">
                <Image src={Client1} className="rounded-full w-10 h-10 object-cover" alt="Claire Bennett" />
                <div className="ml-2">
                  <h1 className="text-sm font-bold">Claire Bennett</h1>
                  <p className="text-[var(--color-19)] text-sm">VP Sales</p>
                </div>
              </div>
              <div className="text-xs opacity-50">
                <h2>Logo</h2>
              </div>
            </div>
          </div>

          <div className="mx-auto md:mx-3 border-2 rounded-lg flex flex-col justify-between w-full max-w-md md:max-w-none">
            <h2 className="font-bold px-6 mt-8 text-[17px]">
              "Hexa automation made onboarding new reps 5x faster. They just log in and know what to do."
            </h2>
            <div className="flex justify-between items-end mt-6 px-6 mb-6">
              <div className="flex items-center">
                <Image src={Client2} className="rounded-full w-10 h-10 object-cover" alt="Keisa Oduro" />
                <div className="ml-2">
                  <h1 className="text-sm font-bold">Keisa Oduro</h1>
                  <p className="text-[var(--color-19)] text-sm">Growth Lead</p>
                </div>
              </div>
              <div className="text-xs opacity-50">
                <h2>Logo</h2>
              </div>
            </div>
          </div>

          <div className="mx-auto md:mx-3 border-2 rounded-lg flex flex-col justify-between w-full max-w-md md:max-w-none">
            <h2 className="font-bold px-6 mt-8 text-[17px]">
              "Honestly? It just works. Intuitive, fast, and our team actually uses it daily. That's the win"
            </h2>
            <div className="flex justify-between items-end mt-6 px-6 mb-6">
              <div className="flex items-center">
                <Image src={Client3} className="rounded-full w-10 h-10 object-cover" alt="Omar Singh" />
                <div className="ml-2">
                  <h1 className="text-sm font-bold">Omar Singh</h1>
                  <p className="text-[var(--color-19)] text-sm">Head of Revops</p>
                </div>
              </div>
              <div className="text-xs opacity-50">
                <h2>Dummy Image</h2>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section className="faq-section px-4">
      <div className="text-center mt-25">
        <h3 className="bg-[var(--color-12)] text-sm py-1 w-70 mx-auto rounded-md font-bold text-[var(--color-7)]">
          <BsExclamationOctagon className="inline font-md" />  Stuff That Shouldn't Happen in 2025
        </h3>
        
        <h1 className="font-bold max-w-160 w-full mx-auto text-3xl md:text-4xl mt-10 md:mt-20 leading-tight md:leading-12">
          Tired of Bloated CRMs?
          <span className="text-[var(--color-19)] font-bold"> Here's what's really Holding you back.</span>
        </h1>
        
        <p className="text-[var(--color-19)] mt-4 text-lg max-w-88 w-full mx-auto">
          If you're spending more time managing deals than closing them, you are not alone.
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
            <h3 className="bg-[var(--color-12)] text-sm py-1 w-30 mx-auto rounded-md font-bold text-[var(--color-7)] flex items-center justify-center gap-2">
              <PiStepsDuotone className="font-md" /> Meet Hexa
            </h3>
            <h1 className="font-bold max-w-160 w-full mx-auto text-3xl md:text-4xl mt-10 md:mt-20 leading-tight md:leading-12">
              Built for real revenue: <span className="text-[var(--color-19)] font-bold"> Everything your CRM should've been.</span>
            </h1>
            <p className="text-[var(--color-19)] mt-4 text-lg max-w-94 w-full mx-auto">
              Hexa automates follow-ups, tracks deals, and keeps your pipeline moving - minus the bloat.
            </p>
          </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8 md:px-35">
      
      <div className="border-2 pt-8 md:pt-12 rounded-md px-6 md:px-0">
        <h4 className="flex items-center text-[var(--color-7)] md:ml-20">
          <TbSettingsCode className="text-lg mx-1"/> Automation <FaChevronRight className="ml-2 text-xs"/>
        </h4>
        <h2 className="text-xl max-w-88 mt-5 md:ml-15 font-bold">
          Set it and forget it. <span className="text-[var(--color-18)]">Hexa handles your follow-ups, reminders, and deal nudges while you focus on closing.</span>
        </h2>
        
        <div className="text-center mt-10 md:mt-15 max-w-full overflow-hidden mx-auto px-4 md:px-8 py-4 border-2 rounded-md w-fit">
          <TiTick className="my-2 mx-auto text-4xl p-1 rounded-full bg-[var(--color-23)] text-[var(--color-19)]" />
          <h2 className="max-w-50 mx-auto font-bold">Discover Call Scheduled</h2>
          <p className="max-w-70 mx-auto py-2 text-[var(--color-19)] text-xs">We've emailed your prospect the calendar invite. Hexa will send automatic reminders.</p>
        </div>

        <div className="border-2 rounded-md mb-15 text-center mt-8 max-w-full mx-auto px-4 md:px-8 py-4 w-fit">
          <h2 className="max-w-60 mx-auto font-bold">Discovery Call -- Acme Corp</h2>
          <p className="max-w-full md:w-100 py-2 text-[var(--color-19)] text-sm">Introductory meeting to explore fit and sales goals</p>
          <div className="border-2 rounded-md py-3 grid grid-cols-1 sm:grid-cols-2 mt-6 md:mt-18 gap-2">
            <h1 className="font-semibold">15 Apr 2025</h1>
            <div className="flex items-center justify-center gap-1">
              <span className="border-2 px-2 py-1 text-sm rounded-md">2:00</span>
              <span>to</span>
              <span className="border-2 px-2 py-1 text-sm rounded-md">2:45</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-2 pt-8 md:pt-12 rounded-md px-6 md:px-0">
        <h4 className="flex items-center text-[var(--color-7)] md:ml-20">
          <PiStack className="text-lg mx-1"/> Pipeline Intelligence <FaChevronRight className="ml-2 text-xs"/>
        </h4>
        <h2 className="text-xl max-w-106 mt-5 md:ml-15 font-bold">
          Every number you need to sell smarter. <span className="text-[var(--color-18)]">Real-time metrics that tell you where your pipeline is growing.</span>
        </h2>
        <div className="max-w-[500px] w-full mx-auto mt-15 overflow-hidden">
          <LogoLoop logos={techLogos} speed={120} direction="left" logoHeight={48} gap={40} fadeOut fadeOutColor="#ffffff" />
        </div>
      </div>

      <div className="border-2 pt-8 md:pt-12 rounded-md px-6 md:px-0">
        <h4 className="flex items-center text-[var(--color-7)] md:ml-20">
          <TbSettingsCode className="text-lg mx-1"/> Automation <FaChevronRight className="ml-2 text-xs"/>
        </h4>
        <h2 className="text-xl max-w-88 mt-5 md:ml-15 font-bold">
          Set it and forget it. <span className="text-[var(--color-18)]">Hexa handles your follow-ups, reminders, and deal nudges while you focus on closing.</span>
        </h2>
        
        <div className="text-center mt-10 md:mt-15 max-w-full overflow-hidden mx-auto px-4 md:px-8 py-4 border-2 rounded-md w-fit">
          <TiTick className="my-2 mx-auto text-4xl p-1 rounded-full bg-[var(--color-23)] text-[var(--color-19)]" />
          <h2 className="max-w-50 mx-auto font-bold">Discover Call Scheduled</h2>
          <p className="max-w-70 mx-auto py-2 text-[var(--color-19)] text-xs">We've emailed your prospect the calendar invite. Hexa will send automatic reminders.</p>
        </div>

        <div className="border-2 rounded-md mb-15 text-center mt-8 max-w-full mx-auto px-4 md:px-8 py-4 w-fit">
          <h2 className="max-w-60 mx-auto font-bold">Discovery Call -- Acme Corp</h2>
          <p className="max-w-full md:w-100 py-2 text-[var(--color-19)] text-sm">Introductory meeting to explore fit and sales goals</p>
          <div className="border-2 rounded-md py-3 grid grid-cols-1 sm:grid-cols-2 mt-6 md:mt-18 gap-2">
            <h1 className="font-semibold">15 Apr 2025</h1>
            <div className="flex items-center justify-center gap-1">
              <span className="border-2 px-2 py-1 text-sm rounded-md">2:00</span>
              <span>to</span>
              <span className="border-2 px-2 py-1 text-sm rounded-md">2:45</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-2 pt-8 md:pt-12 rounded-md px-6 md:px-0">
        <h4 className="flex items-center text-[var(--color-7)] md:ml-20">
          <TbSettingsCode className="text-lg mx-1"/> Automation <FaChevronRight className="ml-2 text-xs"/>
        </h4>
        <h2 className="text-xl max-w-88 mt-5 md:ml-15 font-bold">
          Set it and forget it. <span className="text-[var(--color-18)]">Hexa handles your follow-ups, reminders, and deal nudges while you focus on closing.</span>
        </h2>
        
        <div className="text-center mt-10 md:mt-15 max-w-full overflow-hidden mx-auto px-4 md:px-8 py-4 border-2 rounded-md w-fit">
          <TiTick className="my-2 mx-auto text-4xl p-1 rounded-full bg-[var(--color-23)] text-[var(--color-19)]" />
          <h2 className="max-w-50 mx-auto font-bold">Discover Call Scheduled</h2>
          <p className="max-w-70 mx-auto py-2 text-[var(--color-19)] text-xs">We've emailed your prospect the calendar invite. Hexa will send automatic reminders.</p>
        </div>

        <div className="border-2 rounded-md mb-15 text-center mt-8 max-w-full mx-auto px-4 md:px-8 py-4 w-fit">
          <h2 className="max-w-60 mx-auto font-bold">Discovery Call -- Acme Corp</h2>
          <p className="max-w-full md:w-100 py-2 text-[var(--color-19)] text-sm">Introductory meeting to explore fit and sales goals</p>
          <div className="border-2 rounded-md py-3 grid grid-cols-1 sm:grid-cols-2 mt-6 md:mt-18 gap-2">
            <h1 className="font-semibold">15 Apr 2025</h1>
            <div className="flex items-center justify-center gap-1">
              <span className="border-2 px-2 py-1 text-sm rounded-md">2:00</span>
              <span>to</span>
              <span className="border-2 px-2 py-1 text-sm rounded-md">2:45</span>
            </div>
          </div>
        </div>
      </div>

    </div>

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
          <h3 className="bg-[var(--color-12)] text-sm py-1 w-40 mx-auto rounded-md font-bold text-[var(--color-7)] flex items-center justify-center gap-2">
            <PiStepsDuotone className="font-md" /> Hexa vs the Rest
          </h3>
          <h1 className="font-bold max-w-160 w-full mx-auto text-3xl md:text-4xl mt-10 md:mt-20 leading-tight md:leading-12">
            The CRM That gives you velocity <span className="text-[var(--color-19)] font-bold"> --not spreadsheets.</span>
          </h1>
          <p className="text-[var(--color-19)] mt-4 text-lg max-w-94 w-full mx-auto">
            See why modern sales teams choose Hexa over bloated or basic alternatives.
          </p>
        </div>

        <div className="md:mx-38 mt-12 overflow-x-auto pb-6">
          <div className="grid grid-cols-4 border rounded-md min-w-[850px]">

            <div className="col-span-4 grid grid-cols-4 p-4 items-end">
              <div></div>
              <div>
                <h2 className="pl-3 text-6xl text-[var(--color-20)]"><IoIosCube /></h2>
                <p className="pl-3 font-bold">Hexa</p>
              </div>
              <div>
                <h2 className="pl-3 text-6xl text-[var(--color-20)]"><BiSolidCricketBall /></h2>
                <p className="pl-3 font-bold">Chromatools</p>
              </div>
              <div>
                <h2 className="text-6xl text-[var(--color-20)]"><IoIosCube /></h2>
                <p className="pl-3 font-bold">Boltshift</p>
              </div>
            </div>

            <div className="col-span-4">
              <div className="h-px bg-[var(--color-22)] mx-6"></div>
            </div>

            <div className="col-span-4 grid grid-cols-4 p-4">
              <p className=" pl-3">Setup Time</p>
              <p className="text-[var(--color-20)] pl-3">Live in 30 mins</p>
              <p className="pl-3 text-[var(--color-20)]"><RxCross1 /></p>
              <p className="text-[var(--color-20)] pl-3">Quick but limited</p>
            </div>

            <div className="col-span-4">
              <div className="h-px bg-[var(--color-22)] mx-6"></div>
            </div>

            <div className="col-span-4 grid grid-cols-4 p-4">
              <p className=" pl-3">AI Meeting Summaries</p>
              <p className="text-[var(--color-20)] pl-3">Auto-generated calls</p>
              <p className="text-[var(--color-20)] pl-3"><RxCross1 /></p>
              <p className="text-[var(--color-20)] pl-3"><RxCross1 /></p>
            </div>

            <div className="col-span-4">
              <div className="h-px bg-[var(--color-22)] mx-6"></div>
            </div>

            <div className="col-span-4 grid grid-cols-4 p-4">
              <p className=" pl-3">Follow-Up Automation</p>
              <p className="text-[var(--color-20)] pl-3">Built in smart nudges</p>
              <p className="text-[var(--color-20)] pl-3">Manual setup</p>
              <p className="text-[var(--color-20)] pl-3">Basic triggers</p>
            </div>

            <div className="col-span-4">
              <div className="h-px bg-[var(--color-22)] mx-6"></div>
            </div>

            <div className="col-span-4 grid grid-cols-4 p-4">
              <p className=" pl-3">Pipeline Visibility</p>
              <p className="text-[var(--color-20)] pl-3">Rep & deal-level clarity</p>
              <p className="text-[var(--color-20)] pl-3"><IoCheckmark /></p>
              <p className="text-[var(--color-20)] pl-3"><RxCross1 /></p>
            </div>

            <div className="col-span-4">
              <div className="h-px bg-[var(--color-22)] mx-6"></div>
            </div>

            <div className="col-span-4 grid grid-cols-4 p-4">
              <p className=" pl-3">Collaboration & Mentions</p>
              <p className="text-[var(--color-20)] pl-3">Slack style teamwork</p>
              <p className="text-[var(--color-20)] pl-3"><RxCross1 /></p>
              <p className="text-[var(--color-20)] pl-3"><RxCross1 /></p>
            </div>

            <div className="col-span-4">
              <div className="h-px bg-[var(--color-22)] mx-6"></div>
            </div>

            <div className="col-span-4 grid grid-cols-4 p-4">
              <p className=" pl-3">Deal Room (Chat + Notes)</p>
              <p className="text-[var(--color-20)] pl-3">Per deal chat thread</p>
              <p className="text-[var(--color-20)] pl-3"><RxCross1 /></p>
              <p className="text-[var(--color-20)] pl-3"><RxCross1 /></p>
            </div>

            <div className="col-span-4">
              <div className="h-px bg-[var(--color-22)] mx-6"></div>
            </div>

            <div className="col-span-4 grid grid-cols-4 p-4">
              <p className=" pl-3">Pricing Transparency</p>
              <p className="text-[var(--color-20)] pl-3">Public & flexible</p>
              <p className="text-[var(--color-20)] pl-3"><RxCross1 /></p>
              <p className="text-[var(--color-20)] pl-3"><RxCross1 /></p>
            </div>

            <div className="col-span-4">
              <div className="h-px bg-[var(--color-22)] mx-6"></div>
            </div>

            <div className="col-span-4 grid grid-cols-4 p-4">
              <p className=" pl-3">Data Cleanliness (AI)</p>
              <p className="text-[var(--color-20)] pl-3">Auto filled deal data</p>
              <p className="text-[var(--color-20)] pl-3"><RxCross1 /></p>
              <p className="text-[var(--color-20)] pl-3"><RxCross1 /></p>
            </div>

            <div className="col-span-4">
              <div className="h-px bg-[var(--color-22)] mx-6"></div>
            </div>

            <div className="col-span-4 grid grid-cols-4 p-4">
              <p className=" pl-3">Forecasting Accuracy</p>
              <p className="text-[var(--color-20)] pl-3">Predictive + stage-aware</p>
              <p className="text-[var(--color-20)] pl-3"><RxCross1 /></p>
              <p className="text-[var(--color-20)] pl-3">Basic model</p>
            </div>

            <div className="col-span-4">
              <div className="h-px bg-[var(--color-22)] mx-6"></div>
            </div>

            <div className="col-span-4 grid grid-cols-4 p-4">
              <p className=" pl-3">Support & Onboarding</p>
              <p className="text-[var(--color-20)] pl-3">Fast human led setup</p>
              <p className="text-[var(--color-20)] pl-3"><RxCross1 /></p>
              <p className="text-[var(--color-20)] pl-3">Email only</p>
            </div>

            <div className="col-span-4">
              <div className="h-px bg-[var(--color-22)] mx-6"></div>
            </div>

            <div className="col-span-4 grid grid-cols-4 p-4 items-center">
              <p className=" pl-3"></p>
              <p className="text-[var(--color-20)] pl-3">
                <button className="whitespace-nowrap shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[var(--color-7)] cursor-pointer px-8 py-3 bg-[var(--color-8)] rounded-full text-white font-light transition duration-200 ease-linear">
                  Try Hexa Today <span><FaChevronRight className="inline ml-2" /></span>
                </button>
              </p>
              <p className="text-[var(--color-20)] pl-3"></p>
              <p className="text-[var(--color-20)] pl-3"></p>
            </div>
          </div>
        </div>
      </section>

      <section className="founder-section overflow-hidden">
        <div className="relative flex w-full flex-col items-center bg-white pt-8 pb-10 md:pb-15">
          <div className="text-center mt-10 md:mt-30 px-4">
            <h3 className="bg-[var(--color-12)] text-xs md:text-sm py-1 px-4 w-fit mx-auto rounded-md font-bold text-[var(--color-7)] flex items-center justify-center gap-2">
              <CiTrophy /> Real Feedback. Real Teams
            </h3>
            <h1 className="font-bold max-w-4xl w-full mx-auto text-3xl md:text-4xl lg:text-5xl mt-6 md:mt-12 leading-tight">
              One CRM, four Workflows: <span className="text-[var(--color-19)] font-bold"> Tailored for every sales role.</span>
            </h1>
            <p className="text-[var(--color-19)] mt-4 text-base md:text-lg max-w-2xl w-full mx-auto">
              From prospecting to closing coaching — Hexa adapts to every role on your team.
            </p>

            <div className="flex flex-wrap justify-center gap-3 mt-12">
              {['Founders', 'SDRs', 'Account Execs', 'Sales Leaders'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2 rounded-full text-sm font-bold border transition-all cursor-pointer ${
                    activeTab === tab 
                    ? 'bg-[var(--color-7)] text-white border-[var(--color-7)]' 
                    : 'bg-white text-[var(--color-19)] border-[var(--color-22)] hover:bg-[var(--color-25)]'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="demo mt-10 md:mt-20 flex justify-center w-full px-4 md:px-10">
          <div className="max-w-[1200px] w-full flex flex-col lg:flex-row gap-12 lg:gap-20 justify-center items-center lg:items-start">
            
            <div className="w-full lg:max-w-xl text-center lg:text-left min-h-[450px]">
              
              {activeTab === 'Founders' && (
                <div>
                  <div className="text-[var(--color-8)] w-fit bg-[var(--color-13)] flex items-center text-[14px] py-[0.5rem] px-3 rounded-lg mx-auto lg:mx-0">
                    <FaRegCalendarCheck />
                    <h2 className="ps-2 font-medium">For Early-Stage Founders</h2>
                  </div>
                  <div className="flex justify-center lg:justify-start pt-6 md:pt-8">
                    <h2 className="text-3xl md:text-[2.5rem] lg:text-[2.7rem] leading-tight font-semibold max-w-md text-[var(--color-16)]">
                      Sell like a team — even when it's <span className="text-[var(--color-20)]">just you.</span>
                    </h2>
                  </div>
                  <p className="text-[var(--color-19)] w-full max-w-sm mx-auto lg:mx-0 mt-6 text-base md:text-lg">
                    Move fast, follow up instantly, and close with clarity—no bloated stack required.
                  </p>
                  <div className="mt-10 space-y-3">
                    <p className="flex items-center justify-center lg:justify-start gap-2"><IoCloudDoneOutline className="text-xl text-[var(--color-8)] flex-shrink-0"/><span className="text-sm md:text-base">Calls turn into summaries automatically.</span></p>
                    <p className="flex items-center justify-center lg:justify-start gap-2"><MdOutlineMarkEmailRead className="text-xl text-[var(--color-8)] flex-shrink-0" /><span className="text-sm md:text-base">Follow-ups are written before the tab closes.</span></p>
                    <p className="flex items-center justify-center lg:justify-start gap-2"><PiFolders className="text-xl text-[var(--color-8)] flex-shrink-0" /><span className="text-sm md:text-base">Deals stay organized without extra tools.</span></p>
                  </div>
                </div>
              )}

              {activeTab === 'SDRs' && (
                <div>
                  <div className="text-[var(--color-8)] w-fit bg-[var(--color-13)] flex items-center text-[14px] py-[0.5rem] px-3 rounded-lg mx-auto lg:mx-0">
                    <BsBarChartSteps />
                    <h2 className="ps-2 font-medium">For Outbound SDRs</h2>
                  </div>
                  <div className="flex justify-center lg:justify-start pt-6 md:pt-8">
                    <h2 className="text-3xl md:text-[2.5rem] lg:text-[2.7rem] leading-tight font-semibold max-w-md text-[var(--color-16)]">
                      Book meetings <span className="text-[var(--color-20)]">on autopilot.</span>
                    </h2>
                  </div>
                  <p className="text-[var(--color-19)] w-full max-w-sm mx-auto lg:mx-0 mt-6 text-base md:text-lg">
                    Scale your outreach without losing the personal touch that converts leads.
                  </p>
                  <div className="mt-10 space-y-3">
                    <p className="flex items-center justify-center lg:justify-start gap-2"><IoCloudDoneOutline className="text-xl text-[var(--color-8)] flex-shrink-0"/><span className="text-sm md:text-base">AI prospect research in one click.</span></p>
                    <p className="flex items-center justify-center lg:justify-start gap-2"><MdOutlineMarkEmailRead className="text-xl text-[var(--color-8)] flex-shrink-0" /><span className="text-sm md:text-base">Multi-channel sequence automation.</span></p>
                    <p className="flex items-center justify-center lg:justify-start gap-2"><PiFolders className="text-xl text-[var(--color-8)] flex-shrink-0" /><span className="text-sm md:text-base">Real-time intent signal tracking.</span></p>
                  </div>
                </div>
              )}

              {activeTab === 'Account Execs' && (
                <div>
                  <div className="text-[var(--color-8)] w-fit bg-[var(--color-13)] flex items-center text-[14px] py-[0.5rem] px-3 rounded-lg mx-auto lg:mx-0">
                    <BiSolidCoinStack />
                    <h2 className="ps-2 font-medium">For Account Executives</h2>
                  </div>
                  <div className="flex justify-center lg:justify-start pt-6 md:pt-8">
                    <h2 className="text-3xl md:text-[2.5rem] lg:text-[2.7rem] leading-tight font-semibold max-w-md text-[var(--color-16)]">
                      Close more deals, <span className="text-[var(--color-20)]">less admin.</span>
                    </h2>
                  </div>
                  <p className="text-[var(--color-19)] w-full max-w-sm mx-auto lg:mx-0 mt-6 text-base md:text-lg">
                    Spend your time selling, not updating the CRM. Hexa does the heavy lifting.
                  </p>
                  <div className="mt-10 space-y-3">
                    <p className="flex items-center justify-center lg:justify-start gap-2"><IoCloudDoneOutline className="text-xl text-[var(--color-8)] flex-shrink-0"/><span className="text-sm md:text-base">Automatic pipeline data entry.</span></p>
                    <p className="flex items-center justify-center lg:justify-start gap-2"><MdOutlineMarkEmailRead className="text-xl text-[var(--color-8)] flex-shrink-0" /><span className="text-sm md:text-base">Post-meeting follow-up drafts.</span></p>
                    <p className="flex items-center justify-center lg:justify-start gap-2"><PiFolders className="text-xl text-[var(--color-8)] flex-shrink-0" /><span className="text-sm md:text-base">Deal intelligence and risk alerts.</span></p>
                  </div>
                </div>
              )}

              {activeTab === 'Sales Leaders' && (
                <div>
                  <div className="text-[var(--color-8)] w-fit bg-[var(--color-13)] flex items-center text-[14px] py-[0.5rem] px-3 rounded-lg mx-auto lg:mx-0">
                    <BsSun />
                    <h2 className="ps-2 font-medium">For Sales Leaders</h2>
                  </div>
                  <div className="flex justify-center lg:justify-start pt-6 md:pt-8">
                    <h2 className="text-3xl md:text-[2.5rem] lg:text-[2.7rem] leading-tight font-semibold max-w-md text-[var(--color-16)]">
                      Scale your team's <span className="text-[var(--color-20)]">best habits.</span>
                    </h2>
                  </div>
                  <p className="text-[var(--color-19)] w-full max-w-sm mx-auto lg:mx-0 mt-6 text-base md:text-lg">
                    Get full visibility into your pipeline without pestering your reps for updates.
                  </p>
                  <div className="mt-10 space-y-3">
                    <p className="flex items-center justify-center lg:justify-start gap-2"><IoCloudDoneOutline className="text-xl text-[var(--color-8)] flex-shrink-0"/><span className="text-sm md:text-base">Live coaching insights across all calls.</span></p>
                    <p className="flex items-center justify-center lg:justify-start gap-2"><MdOutlineMarkEmailRead className="text-xl text-[var(--color-8)] flex-shrink-0" /><span className="text-sm md:text-base">Forecast accuracy with real data.</span></p>
                    <p className="flex items-center justify-center lg:justify-start gap-2"><PiFolders className="text-xl text-[var(--color-8)] flex-shrink-0" /><span className="text-sm md:text-base">Unified team performance dashboards.</span></p>
                  </div>
                </div>
              )}

              <button className="w-full sm:w-auto border border-[var(--color-22)] mt-8 cursor-pointer px-8 py-3 hover:bg-[var(--color-24)] rounded-full font-light">
                Book a demo <HiCursorArrowRays className="inline ml-2"/>
              </button>
            </div>

            <div className="w-full max-w-[500px] border border-[var(--color-22)] rounded-lg bg-[var(--color-2)] shadow-sm overflow-x-auto">
              <div className="flex justify-between w-full p-4 md:p-5 items-center">
                <h4 className="flex items-center font-medium text-sm md:text-base">Warm leads <span className="ml-2"><AiOutlineInfoCircle className="text-[var(--color-21)]" /></span></h4>
                <h6 className="flex border border-[var(--color-22)] rounded-md p-2 items-center text-xs md:text-[14px]">
                  <span className="pe-2 text-[var(--color-20)]"><BsDatabaseLock /></span>
                  Campaigns
                  <span className="ps-2 text-[var(--color-20)]"><ChevronDown size={16} /></span>
                </h6>
              </div>
              <div className="w-full overflow-x-auto">
                <table className="w-full text-left min-w-[400px]">
                  <thead>
                    <tr className="border-b border-[var(--color-23)] text-[var(--color-20)] uppercase text-[10px] md:text-[12px] font-medium">
                      <th className="px-5 pb-3">Prospect</th>
                      <th className="pb-3">Campaign</th>
                      <th className="px-5 pb-3">Opens</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[var(--color-23)]">
                    <tr>
                      <td className="px-5 py-3">
                        <p className="text-sm font-medium">Ryan Chen</p>
                        <p className="text-[var(--color-20)] text-xs">ryan@hexatech.com</p>
                      </td>
                      <td className="text-xs">
                        <span className="flex items-center gap-1">
                          <TbMailUp className="text-[var(--color-20)]" /> Outbound – Q2 Promo <BsBoxArrowUpRight size={10} className="text-[var(--color-21)]"/>
                        </span>
                      </td>
                      <td className="px-5 text-sm font-medium">24</td>
                    </tr>
                    <tr>
                      <td className="px-[20px] py-[12px]">
                        <p className="text-[14px] font-medium text-[var(--color-16)]">Dan Olsen</p>
                        <p className="text-[var(--color-20)] text-[13px] pt-[2px]">dan@stratushr.com</p>
                      </td>
                      <td className="text-[13px] text-[var(--color-19)]">
                        <span className="flex items-center gap-1">
                          <TbMailUp className="text-[var(--color-20)]" /> Inbound Sequence <BsBoxArrowUpRight size={10} className="text-[var(--color-21)]"/>
                        </span>
                      </td>
                      <td className="text-[14px] font-medium text-[var(--color-16)]">16</td>
                    </tr>

                    <tr>
                      <td className="px-[20px] py-[12px]">
                        <p className="text-[14px] font-medium text-[var(--color-16)]">Luis Mendes</p>
                        <p className="text-[var(--color-20)] text-[13px] pt-[2px]">luis@driftlayer.com</p>
                      </td>
                      <td className="text-[13px] text-[var(--color-19)]">
                        <span className="flex items-center gap-1">
                          <TbMailUp className="text-[var(--color-20)]" /> Outbound - SMB Beta <BsBoxArrowUpRight size={10} className="text-[var(--color-21)]"/>
                        </span>
                      </td>
                      <td className="text-[14px] font-medium text-[var(--color-16)]">20</td>
                    </tr>

                    <tr>
                      <td className="px-[20px] py-[12px]">
                        <p className="text-[14px] font-medium text-[var(--color-16)]">Maya Patel</p>
                        <p className="text-[var(--color-20)] text-[13px] pt-[2px]">maya@quanta.ai</p>
                      </td>
                      <td className="text-[13px] text-[var(--color-19)]">
                        <span className="flex items-center gap-1">
                          <TbMailUp className="text-[var(--color-20)]" /> Cold Outreach - AI Vertical <BsBoxArrowUpRight size={10} className="text-[var(--color-21)]"/>
                        </span>
                      </td>
                      <td className="text-[14px] font-medium text-[var(--color-16)]">24</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center w-full mt-20 px-4 md:px-10 mb-20">
          <div className="max-w-[1200px] w-full bg-[var(--color-13)] border border-[var(--color-12)] rounded-3xl p-6 md:p-10 lg:p-14 flex flex-col lg:flex-row items-center lg:items-stretch gap-10 lg:gap-16">
              
              <div className="flex flex-col md:flex-row gap-8 lg:w-2/3">
                <div className="w-full md:w-[220px] h-[260px] flex-shrink-0">
                  <Image src={Founder} alt="Founder" className="w-full h-full rounded-2xl object-cover grayscale border border-[var(--color-12)] shadow-sm" />
                </div>

                <div className="flex flex-col justify-between py-1 text-center md:text-left">
                  <h2 className="text-lg md:text-2xl lg:text-[28px] leading-snug font-medium text-[var(--color-16)] tracking-tight">
                    “Hexa feels like a cofounder who handles my follow-ups. I’m faster, more consistent, and not drowning in admin.”
                  </h2>
                  
                  <div className="mt-8 flex items-end justify-between">
                    <div>
                      <p className="font-bold text-lg text-[var(--color-16)]">Jared Lawson</p>
                      <p className="text-[var(--color-20)] text-sm">Founder</p>
                    </div>
                    <div className="flex items-center gap-2 text-[var(--color-21)] font-bold text-xl">
                      <span className="text-[var(--color-19)]">{"{ : }"}</span>
                      <span className="tracking-tight">CodeLab</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="hidden lg:block w-[1px] bg-[var(--color-12)] self-stretch"></div>

              {/* Stats Grid for Mobile */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-col justify-center gap-10 lg:w-1/3 w-full border-t lg:border-t-0 lg:border-l border-[var(--color-12)] pt-10 lg:pt-0 lg:pl-10">
                <div className="flex flex-col gap-2">
                  <div className="text-[var(--color-7)] text-4xl lg:text-[42px] font-bold">3.5 hrs</div>
                  <p className="font-bold text-[var(--color-16)] text-sm md:text-base">Saved per week on admin</p>
                  <p className="text-[var(--color-20)] text-xs md:text-sm">
                    Auto-generated summaries and emails reduce manual tasks.
                  </p>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="text-[var(--color-7)] text-4xl lg:text-[42px] font-bold">4x</div>
                  <p className="font-bold text-[var(--color-16)] text-sm md:text-base">Faster deal follow-up</p>
                  <p className="text-[var(--color-20)] text-xs md:text-sm">
                    Follow-ups land within minutes, not days.
                  </p>
                </div>
              </div>
          </div>
        </div>
      </section>
      
      <section className="real-teams-section">
        <div className="relative flex w-full flex-col items-center bg-[var(--color-2)] pt-8 pb-15">
          <div className="text-center mt-16 md:mt-30">
            <h3 className="bg-[var(--color-12)] text-sm py-1 w-50 mx-auto rounded-md font-bold text-[var(--color-7)] flex items-center justify-center gap-2">
              <CiTrophy className="font-md" /> Real Feedback. Real Teams
            </h3>
            <h1 className="font-bold max-w-160 w-full mx-auto text-3xl md:text-4xl mt-10 md:mt-20 leading-tight md:leading-12 text-[var(--color-16)]">
              Real resultS, real Teams: <span className="text-[var(--color-19)] font-bold"> How sales leaders to use Hexa to close.</span>
            </h1>
            <p className="text-[var(--color-19)] mt-4 text-lg max-w-94 w-full mx-auto">
              See why modem sales teams choose Hexa over bloated or basic alternatives.
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
              <Rating name="half-rating" defaultValue={4.5} precision={0.5} size="small" />
              <h3 className="text-sm md:text-base font-medium text-[var(--color-18)] whitespace-nowrap">4.6/5 based on reviews</h3>
            </div>
          </div>

          <div className="border-2 border-[var(--color-23)] rounded-md py-4 flex items-center px-3 bg-[var(--color-2)]">
            <div className="w-1/3 flex justify-center">
              <BsSun className="text-[var(--color-21)] text-5xl" />
            </div>
            <div className="w-2/3">
              <Rating name="half-rating" defaultValue={4.5} precision={0.5} size="small" />
              <h3 className="text-sm md:text-base font-medium text-[var(--color-18)] whitespace-nowrap">4.6/5 based on reviews</h3>
            </div>
          </div>

          <div className="border-2 border-[var(--color-23)] rounded-md py-4 flex items-center px-3 bg-[var(--color-2)]">
            <div className="w-1/3 flex justify-center">
              <BsBarChartSteps className="text-[var(--color-21)] text-5xl" />
            </div>
            <div className="w-2/3">
              <Rating name="half-rating" defaultValue={4.5} precision={0.5} size="small" />
              <h3 className="text-sm md:text-base font-medium text-[var(--color-18)] whitespace-nowrap">4.6/5 based on reviews</h3>
            </div>
          </div>
          
        </div>
      </section>

      <section className="favourite-tool-section px-4 md:px-0">
        <div className="text-center mt-16 md:mt-30">
          <h3 className="bg-[var(--color-12)] text-sm py-1 w-30 mx-auto rounded-md font-bold text-[var(--color-7)] flex items-center justify-center gap-2">
            <PiStepsDuotone className="font-md" /> Meet Hexa
          </h3>
          <h1 className="font-bold max-w-160 w-full mx-auto text-3xl md:text-4xl mt-10 md:mt-20 leading-tight md:leading-12">
            Built for real revenue: <span className="text-[var(--color-19)] font-bold"> Everything your CRM should've been.</span>
          </h1>
          <p className="text-[var(--color-19)] mt-4 text-lg max-w-94 w-full mx-auto">
            Hexa automates follow-ups, tracks deals, and keeps your pipeline moving - minus the bloat.
          </p>
        </div>

      <div className="relative h-130 w-full py-20 bg-[var(--color-25)] overflow-hidden no-scrollbar">
  <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-b from-[var(--color-25)] via-transparent to-[var(--color-25)]" />

  <div className="flex justify-center items-center gap-4 md:gap-10 px-4 max-w-7xl mx-auto h-[600px] overflow-hidden">
    
    <div className="hidden lg:flex flex-col flex-shrink-0 h-full overflow-hidden">
      <div className="flex flex-col gap-6 animate-scroll-up">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="w-20 h-20 border border-[var(--color-23)] rounded-2xl flex items-center justify-center bg-[var(--color-2)] shadow-sm flex-shrink-0">
            <div className="w-10 h-10 bg-[var(--color-23)] rounded-lg" />
          </div>
        ))}
      </div>
    </div>

    <div className="flex flex-col flex-shrink-0 h-full overflow-hidden">
      <div className="flex flex-col gap-6 animate-scroll-down">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="w-20 h-20 border border-[var(--color-23)] rounded-2xl flex items-center justify-center bg-[var(--color-2)] shadow-sm flex-shrink-0">
             <div className="w-10 h-10 bg-[var(--color-21)] rounded-full opacity-30" />
          </div>
        ))}
      </div>
    </div>

    <div className="flex flex-col flex-shrink-0 h-full overflow-hidden">
      <div className="flex flex-col gap-6 animate-scroll-up">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="w-20 h-20 border border-[var(--color-23)] rounded-2xl flex items-center justify-center bg-[var(--color-2)] shadow-sm flex-shrink-0">
            <div className="w-10 h-10 bg-[var(--color-22)] rounded-sm rotate-45" />
          </div>
        ))}
      </div>
    </div>

    <div className="flex flex-col flex-shrink-0 h-full overflow-hidden">
      <div className="flex flex-col gap-6 animate-scroll-down">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="w-20 h-20 border border-[var(--color-23)] rounded-2xl flex items-center justify-center bg-[var(--color-2)] shadow-sm flex-shrink-0">
            <div className="w-8 h-8 border-2 border-[var(--color-22)] rounded-md" />
          </div>
        ))}
      </div>
    </div>

    <div className="hidden lg:flex flex-col flex-shrink-0 h-full overflow-hidden">
      <div className="flex flex-col gap-6 animate-scroll-up">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="w-20 h-20 border border-[var(--color-23)] rounded-2xl flex items-center justify-center bg-[var(--color-2)] shadow-sm flex-shrink-0">
             <div className="w-10 h-10 bg-[var(--color-23)] rounded-full" />
          </div>
        ))}
      </div>
    </div>

  </div>
</div>
          
      </section>

      <section className="budget px-4 md:px-0">
        <div className="text-center mt-16 md:mt-30">
          <h3 className="bg-[var(--color-12)] text-sm py-1 w-70 mx-auto rounded-md font-bold text-[var(--color-7)] flex items-center justify-center gap-2">
            <PiStepsDuotone className="font-md" /> Simple Plans , Powerful Outcomes
          </h3>
          <h1 className="font-bold max-w-160 w-full mx-auto text-3xl md:text-4xl mt-10 md:mt-20 leading-tight md:leading-12">
            Start free, grow fast: <span className="text-[var(--color-19)] font-bold"> Plans scale with your pipeline.</span>
          </h1>
          <p className="text-[var(--color-19)] mt-4 text-lg max-w-110 w-full mx-auto">
            Start free, grow fast, and save big when you're ready to scale. No contacts. No surprises. Just predictable ROI.
          </p>
        </div>
        <div className="bg-[var(--color-2)] py-20 px-6">
          <div className="max-w-7xl mx-auto">
            
            <div className="flex items-center justify-center gap-4 mb-16">
              <span className={`text-sm font-medium ${!isYearly ? 'text-[var(--color-15)]' : 'text-[var(--color-20)]'}`}>Monthly</span>
              <button 
                onClick={() => setIsYearly(!isYearly)}
                className="w-11 h-6 bg-[var(--color-7)] rounded-full relative p-1 transition-all"
              >
                <div className={`bg-[var(--color-2)] w-4 h-4 rounded-full shadow-sm transition-transform duration-300 ${isYearly ? 'translate-x-5' : 'translate-x-0'}`} />
              </button>
              <span className={`text-sm font-medium ${isYearly ? 'text-[var(--color-15)]' : 'text-[var(--color-20)]'}`}>Yearly</span>
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
                        Popular
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
                      {plan.name === "Starter" ? "Includes:" : `Everything in ${i === 1 ? 'Starter' : 'Growth'} plan, +`}
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
            <TbUserCheck className="mr-2 text-[var(--color-8)] text-xl"/>No credit card required
          </p>
          <p className="inline-flex items-center mx-2 md:mx-6 text-sm md:text-base">
            <TbUserCheck className="mr-2 text-[var(--color-8)] text-xl"/>Cancel anytime, no risk
          </p>
          <p className="inline-flex items-center mx-2 md:mx-6 text-sm md:text-base">
            <TbUserCheck className="mr-2 text-[var(--color-8)] text-xl"/>97% user retention after 30 days
          </p>
        </div>
      </section>

      <section className="table-section">
        {/*  */}
        <div className="bg-[var(--color-2)] pt-20 pb-10 px-6 lg:px-40">
          <div className="max-w-7xl mx-auto border-2 rounded-md lg:px-10">
            
            <p className="md:hidden text-center text-xs text-[var(--color-21)] mb-4 italic">
              Swipe left to compare plans →
            </p>

            <div className="overflow-x-auto pb-6 scrollbar-thin scrollbar-thumb-[var(--color-22)] scrollbar-track-transparent">
              <div className="min-w-[800px] md:min-w-full">
                
                <div className="grid grid-cols-4 gap-4 py-6 border-b border-[var(--color-23)] sticky top-0 bg-[var(--color-2)] z-10">
                  <div className="col-span-1"></div>
                  {['Starter', 'Growth', 'Enterprise'].map((plan) => (
                    <div key={plan} className="text-center px-4">
                      <h4 className="text-lg font-bold text-[var(--color-15)] mb-3">{plan}</h4>
                      <button className={`w-full py-2 px-4 rounded-lg text-sm font-semibold border transition-all
                        ${plan === 'Growth' 
                          ? 'bg-[var(--color-7)] text-[var(--color-2)] border-[var(--color-7)]' 
                          : 'bg-[var(--color-2)] text-[var(--color-15)] border-[var(--color-22)]'}`}>
                        {plan === 'Enterprise' ? 'Talk to Sales' : plan === 'Growth' ? 'Start 14-Day Trial' : 'Start for Free'}
                      </button>
                    </div>
                  ))}
                </div>

                {[
                  {
                    icons: <MdOutlineAutoAwesome />,
                    title: "AI-Powered Selling",
                    features: [
                      { name: "Stuck Deal Alerts", starter: false, growth: true, enterprise: true },
                      { name: "AI Close Likelihood Score", starter: false, growth: true, enterprise: true },
                      { name: "AI Call Summaries", starter: false, growth: true, enterprise: true },
                      { name: "Smart Follow-up Suggestions", starter: false, growth: true, enterprise: true },
                    ]
                  },
                  {
                    icons:<FiUsers />,
                    title: "Collaboration",
                    features: [
                      { name: "Internal Deal Notes", starter: true, growth: true, enterprise: true },
                      { name: "Shared Deal Rooms", starter: false, growth: true, enterprise: true },
                      { name: "Commenting & Mentions", starter: true, growth: true, enterprise: true },
                    ]
                  },
                  {
                    icons:<LuUnplug />,
                    title: "Integration & Admin",
                    features: [
                      { name: "Gmail & Calendar Sync", starter: true, growth: true, enterprise: true },
                      { name: "Slack Integration", starter: false, growth: true, enterprise: true },
                      { name: "API Access", starter: false, growth: false, enterprise: true },
                      { name: "Team Roles & Permissions", starter: false, growth: false, enterprise: true },
                    ]
                  },
                  {
                    icons: <MdHeadsetMic />,
                    title: "Support & Success",
                    features: [
                      { name: "Email Support", starter: true, growth: true, enterprise: true },
                      { name: "Onboarding Checklist", starter: true, growth: true, enterprise: true },
                      { name: "Success Manager", starter: false, growth: false, enterprise: true },
                      { name: "Quarterly Strategy Review", starter: false, growth: false, enterprise: true },
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
                        
                        {/* Starter */}
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
          <h3 className="bg-[var(--color-12)] text-sm py-1 w-70 mx-auto rounded-md font-bold text-[var(--color-7)] flex items-center justify-center gap-2">
            <PiStepsDuotone className="font-md" /> Simple Plans , Powerful Outcomes
          </h3>
          <h1 className="font-bold max-w-160 w-full mx-auto text-3xl md:text-4xl mt-10 md:mt-20 leading-tight md:leading-12">
            Start free, grow fast: <span className="text-[var(--color-19)] font-bold"> Plans scale with your pipeline.</span>
          </h1>
          <p className="text-[var(--color-19)] mt-4 text-lg max-w-110 w-full mx-auto">
            Start free, grow fast, and save big when you're ready to scale. No contacts. No surprises. Just predictable ROI.
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
                                <AccordionTrigger className="cursor-pointer hover:no-underline text-[16px]   font-semibold [&>svg]:h-6 [&>svg]:w-6 [&>svg]:stroke-[1.5] data-[state=open]:text-[var(--color-8)]">1. Is there a free trial?</AccordionTrigger >
                                <AccordionContent className="flex flex-col cursor-pointer  ">
                                    <p className="text-[16px] text-[var(--color-20)]">
                                        <span className="text-[var(--color-18)] font-semibold">Yes</span>, when you sign up, you'll get instant access to a 14-day free trial of our Growth plan. You don't need a credit card, and you can explore all premium features including automations, Al call summaries, and integrations. After the trial, you'll have the option to upgrade or continue on the free Starter tier no interruption to your account
                                    </p>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2" className="data-[state=open]:border data-[state=open]:bg-[var(--color-25)]  hover:bg-[var(--color-24)] p-[10px] group rounded-lg border-b-0 mb-[10px]">
                                <AccordionTrigger className="cursor-pointer hover:no-underline text-[16px]   font-semibold [&>svg]:h-6 [&>svg]:w-6 [&>svg]:stroke-[1.5] data-[state=open]:text-[var(--color-8)]">2. What happens after my trial ends?</AccordionTrigger >
                                <AccordionContent className="flex flex-col cursor-pointer  ">
                                    <p className="text-[16px] text-[var(--color-20)]">Once your 14 day trial ends, you won't lose your data or access. You'll automatically be downgraded to the Starter plan, which includes core CRM functionality. You can still view your deals, update pipelines, and send reminders - just without the premium features. If you upgrade later, everything's still there waiting.
                                    </p>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-3" className="data-[state=open]:border data-[state=open]:bg-[var(--color-25)]  hover:bg-[var(--color-24)] p-[10px] group rounded-lg border-b-0 mb-[10px]">
                                <AccordionTrigger className="cursor-pointer hover:no-underline text-[16px]   font-semibold [&>svg]:h-6 [&>svg]:w-6 [&>svg]:stroke-[1.5] data-[state=open]:text-[var(--color-8)]">3. Can I cancel or change plans anytime?</AccordionTrigger >
                                <AccordionContent className="flex flex-col cursor-pointer  ">
                                    <p className="text-[16px] text-[var(--color-20)]">
                                        A FAQ is a list of frequently asked questions and answers on a particular topic.
                                    </p>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-4" className="data-[state=open]:border data-[state=open]:bg-[var(--color-25)]  hover:bg-[var(--color-24)] p-[10px] group rounded-lg border-b-0 mb-[10px]">
                                <AccordionTrigger className="cursor-pointer hover:no-underline text-[16px]   font-semibold [&>svg]:h-6 [&>svg]:w-6 [&>svg]:stroke-[1.5] data-[state=open]:text-[var(--color-8)]">4. What integrations does Hexa support?</AccordionTrigger >
                                <AccordionContent className="flex flex-col cursor-pointer  ">
                                    <p className="text-[16px] text-[var(--color-20)]">
                                        <span className="text-[var(--color-18)] font-semibold"> Hexa integrates with:</span>
                                        Gmail & Google Calendar (sync contacts, meetings, and emails)
                                        Slack (receive deal updates and mentions)
                                        Zapier (connect with 2,000+ apps)
                                        Native integrations coming soon: HubSpot, Salesforce, Notion
                                    </p>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-5" className="data-[state=open]:border data-[state=open]:bg-[var(--color-25)]  hover:bg-[var(--color-24)] p-[10px] group rounded-lg border-b-0 mb-[10px]">
                                <AccordionTrigger className="cursor-pointer hover:no-underline text-[16px]   font-semibold [&>svg]:h-6 [&>svg]:w-6 [&>svg]:stroke-[1.5] data-[state=open]:text-[var(--color-8)]">5. How does Hexa keep my data secure?</AccordionTrigger >
                                <AccordionContent className="flex flex-col cursor-pointer  ">
                                    <p className="text-[16px] text-[var(--color-20)]">A FAQ is a list of frequently asked questions and answers on a particular topic
                                    </p>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-6" className="data-[state=open]:border data-[state=open]:bg-[var(--color-25)]  hover:bg-[var(--color-24)] p-[10px] group rounded-lg border-b-0 mb-[10px]">
                                <AccordionTrigger className="cursor-pointer hover:no-underline text-[16px]   font-semibold [&>svg]:h-6 [&>svg]:w-6 [&>svg]:stroke-[1.5] data-[state=open]:text-[var(--color-8)]">6. Can I add more teammates later?</AccordionTrigger >
                                <AccordionContent className="flex flex-col cursor-pointer  ">
                                    <p className="text-[16px] text-[var(--color-20)]">A FAQ is a list of frequently asked questions and answers on a particular topic.
                                    </p>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-7" className="data-[state=open]:border data-[state=open]:bg-[var(--color-25)]  hover:bg-[var(--color-24)] p-[10px] group rounded-lg border-b-0 mb-[10px]">
                                <AccordionTrigger className="cursor-pointer hover:no-underline text-[16px]   font-semibold [&>svg]:h-6 [&>svg]:w-6 [&>svg]:stroke-[1.5] data-[state=open]:text-[var(--color-8)]">7. Who is Hexa built for?</AccordionTrigger >
                                <AccordionContent className="flex flex-col cursor-pointer  ">
                                    <p className="text-[16px] text-[var(--color-20)]">A FAQ is a list of frequently asked questions and answers on a particular topic
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


