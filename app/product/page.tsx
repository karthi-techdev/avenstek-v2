'use client'
import { IoIosArrowForward } from "react-icons/io";
import { HiCursorArrowRays } from "react-icons/hi2";
import { FaRegCalendarCheck } from "react-icons/fa";
import { LuCalendarHeart, LuFileScan, LuUserSearch } from "react-icons/lu";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { TbMailUp, TbFileTextSpark, TbFileStar, TbMessage2Star, TbStairsUp } from "react-icons/tb";
import { BsBoxArrowUpRight, BsDatabaseLock, BsSoundwave } from "react-icons/bs";
import { ChevronDown } from "lucide-react";
import { PiWaveformBold } from "react-icons/pi";
import { RiChatSearchLine } from "react-icons/ri";
import { SlEmotsmile, SlQuestion } from "react-icons/sl";
import { FiEdit3 } from "react-icons/fi";
import { FaRegFileLines } from "react-icons/fa6";
import { LiaListAltSolid } from "react-icons/lia";
import { RxViewGrid } from "react-icons/rx";
import LogoLoop from '../../components/LogoLoop';
import GradientText from '../../components/GradientText'
import team1 from '../../public/product/team1.jpg'
import team2 from '../../public/product/team2.jpg'
import team3 from '../../public/product/team3.jpg'
import feature1 from '../../public/product/feature1.svg'
import feature2 from '../../public/product/feature2.svg'
import feature3 from '../../public/product/feature3.svg'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
const imageLogos = [
    { src: "./product/client1.svg", alt: "Company 1", href: "https://company1.com" },
    { src: "./product/client2.svg", alt: "Company 2", href: "https://company2.com" },
    { src: "./product/client3.svg", alt: "Company 3", href: "https://company3.com" },
    { src: "./product/client4.svg", alt: "Company 4", href: "https://company4.com" },
    { src: "./product/client5.svg", alt: "Company 5", href: "https://company5.com" },
    { src: "./product/client6.svg", alt: "Company 6", href: "https://company6.com" },
];
export default function Home() {
    return (
        <>
            <main>
                <section className="flex flex-col justify-center items-center py-[4rem] px-[1.5rem] sm:px-[2rem] md:px-[2.5rem] lg:px-[3rem]">
                    <div className="text-[var(--color-8)] bg-[var(--color-13)] flex text-[0.9rem] py-[0.5rem] px-3 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sparkles-icon lucide-sparkles"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z" /><path d="M20 2v4" /><path d="M22 4h-4" /><circle cx="4" cy="20" r="2" /></svg>
                        <h2 className="ps-2 font-semibold">AI-Powered Productivity</h2>
                    </div>
                    <div className="max-w-[41rem] w-[100%] text-center pt-[2.5rem]">
                        <h1 className="text-[1.7rem] sm:text-[2rem] md:text-[2.2rem] lg:text-[2.5rem] sm:text-[3rem] md:text-[3.8rem] font-semibold leading-[2.5rem] sm:leading-[3rem] md:leading-[4.3rem]">Follow up faster <span className="text-[var(--color-20)]">without lifting a finger</span></h1>

                    </div>
                    <div className="max-w-[24.5rem] w-[100%]  text-center pt-[1rem]">
                        <p className="text-[var(--color-20)]  text-[1.15rem]">Hexa automatically listens, transcribes, and summarizes your calls — highlighting questions, objections, and next steps with zero effort.</p>
                        <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row justify-center gap-[0.6rem] sm:gap-[0.6rem] items-center pt-[1.2rem]">
                            <div className="inline-block">
                                <button className="flex justify-between duration-500 transition-all items-center bg-[var(--color-9)] text-white px-[0.95rem] py-[0.6rem] rounded-full font-medium mr-[0.6rem] hover:bg-[var(--color-7)] gap-1"><a href="" className="text-[0.9rem]  inline-block">Try It Free</a><IoIosArrowForward /></button>
                            </div>
                            <div className="inline-block">
                                <button className="flex justify-between items-center bg-[var(--color-26)] border border-[0.01rem] border-[#cccccc] px-[0.95rem] py-[0.6rem] rounded-full font-medium gap-3 duration-500 transition-all hover:bg-[var(--color-24)]"><a href="" className="text-[0.9rem] text-black  inline-block">Watch Feature Demo</a><HiCursorArrowRays className=" text-[1.35rem]" /></button>
                            </div>
                        </div>
                    </div>
                    <header>
                        <p className="pt-[4.5rem] pb-[2.5rem] font-semibold text-[1.15rem]">Trusted by high-velocity sales teams at:</p>
                    </header>
                    <div style={{ height: '90px', position: 'relative', overflow: 'hidden' }} className='px-[3.2rem] max-w-[50rem] w-[100%]'>
                        <LogoLoop
                            logos={imageLogos}
                            speed={120}
                            direction="left"
                            logoHeight={30}
                            gap={40}
                            hoverSpeed={0}
                            scaleOnHover
                            fadeOut
                            fadeOutColor="#ffffff"
                            ariaLabel="Technology partners"
                        />

                    </div>
                </section>
            </main>
            <section className="bg-[var(--color-24)] px-[2rem] sm:px-[4rem] md:px-[3rem] lg:px-[6rem] py-[6.5rem]">
                <header>
                    <h3 className=" text-[1.5rem] sm:text-[2rem] md:text-[2.8rem] leading-[1.5rem] md:leading-[2.5rem] font-semibold text-center pb-[4rem]">One feature. Multiple built-in <span className="text-[var(--color-20)]">superpowers.</span></h3>
                </header>
                <div className="grid grid-cols-1 gap-[6.5rem]">
                    <div className="flex flex-col sm:flex-col  md:flex-col lg:flex-row  gap-[5rem]">
                        <div className=" w-[100%]">
                            <div className="text-[var(--color-8)] w-[200px] bg-[var(--color-13)] flex text-[0.8rem] py-[0.5rem] px-3 rounded-lg font-semibold items-center">
                                <FaRegCalendarCheck />
                                <h2 className="ps-2 text-left">Intelligent Meeting Sync</h2>
                            </div>
                            <div className="flex justify-start pt-[2rem]">
                                <h2 className="text-[1.4rem] sm:text-[2rem] md:text-[2.3rem]  lg:text-[2.7rem] leading-[2rem] md:leading-[2.8rem] font-semibold max-w-[26rem]">Knows when you're in a sales call <span className="text-[var(--color-20)]">— no setup required.</span></h2>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-[30px] mt-[2.5rem]">
                                <div className="flex gap-[0.8rem]">
                                    <span className="p-[0.4rem] rounded-sm h-[2.3rem] border bg-[var(--color-26)] inline-block"><LuCalendarHeart size={22} className=" flex-shrink-0 text-[var(--color-8)]  " /></span>
                                    <div>
                                        <h3 className="font-medium text-[1rem]">Calender Sync</h3>
                                        <p className="text-[var(--color-20)] pt-[0.2rem] font-light text-[0.95rem] leading-[1.4rem]">Automatically detects and connects to upcoming meetings from Google or Outlook calendars.</p>
                                    </div>
                                </div>

                                <div className="flex gap-[0.8rem]">
                                    <span className="p-[7px] rounded-sm h-[2.3rem] border bg-[var(--color-26)] inline-block"><LuFileScan size={22} className=" flex-shrink-0 text-[var(--color-8)]" /></span>
                                    <div>
                                        <h3 className="font-medium text-[1rem]">Platform Awareness</h3>
                                        <p className="text-[var(--color-20)] pt-[0.2rem] font-light text-[0.95rem] leading-[1.4rem]">Seamlessly joins Zoom, Google Meet, or Teams — no manual setup.</p>
                                    </div>
                                </div>
                                <div className="flex gap-[0.8rem]">
                                    <span className="p-[7px] rounded-sm h-[2.3rem] border bg-[var(--color-26)] inline-block"><LuUserSearch size={22} className=" flex-shrink-0 text-[var(--color-8)]" /></span>
                                    <div>
                                        <h3 className="font-medium text-[1rem]">Lead Matching</h3>
                                        <p className="text-[var(--color-20)] pt-[0.2rem] font-light text-[0.95rem] leading-[1.4rem]">Instantly links the meeting to the correct contact or opportunity in your pipeline.</p>
                                    </div>
                                </div>
                                <div className="flex gap-[0.8rem]">
                                    <span className="p-[7px] rounded-sm h-[2.3rem] border bg-[var(--color-26)] inline-block"><TbFileTextSpark size={22} className=" flex-shrink-0 text-[var(--color-8)]" /></span>
                                    <div>
                                        <h3 className="font-medium text-[1rem]">Pre-Call Briefing</h3>
                                        <p className="text-[var(--color-20)] pt-[0.2rem] font-light text-[0.95rem] leading-[1.4rem]">Preps you with a summary of the lead, last touchpoints, and open questions.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=" border rounded-lg bg-[var(--color-26)] h-min w-[100%]">
                            <div className="flex justify-between w-[100%] p-[1.4rem]">
                                <h4 className="flex items-center">Warm leads <span className="inline-block ml-[8px]"><AiOutlineInfoCircle className="text-[var(--color-20)]" /></span></h4>
                                <div>
                                    <h6 className="flex border rounded-md p-[8px] items-center"><span className="pe-[8px] text-[var(--color-20)]  "><BsDatabaseLock /></span >Campaigns<span className="ps-[8px] text-[var(--color-20)] "><ChevronDown size={18} /></span></h6>
                                </div>
                            </div>
                            <table className="w-[100%] text-left">
                                <thead>
                                    <tr className="border-b border-[var(--color-23)]   uppercase text-[0.7rem] sm:text-[0.8rem] md:text-[0.9rem]">
                                        <th className="ps-[0.7rem] md:ps-[1.4rem]   font-light pb-[0.6rem] text-[var(--color-20)] ">Prospect</th>
                                        <th className="font-light pb-[0.7rem] text-[var(--color-20)]">Campaign</th>
                                        <th className="font-light pe-[0.7rem] sm:pe-[1rem] md:pe-[1.4rem]  pb-[0.7rem] text-[var(--color-20)]">Opens</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b border-gray-200 ">
                                        <td className="ps-[0.7rem] md:ps-[1.4rem] py-[0.7rem]">
                                            <p className="text-[0.7rem] sm:text-[0.8rem] md:text-[0.95rem] font-light">Ryan Chen</p>
                                            <p className="text-[var(--color-20)] text-[0.7rem] sm:text-[0.8rem] md:text-[1rem] pt-[4px] font-extralight">ryan@hexatech.com</p>
                                        </td>
                                        <td ><span className="flex items-center text-[0.7rem] sm:text-[0.8rem] md:text-[0.9rem]"><TbMailUp className="me-[5px]" />Outbound – Q2 Promo<BsBoxArrowUpRight className="ms-[5px]" /></span></td>
                                        <td className="text-[0.9rem]  ps-[0.6rem]">24</td>
                                    </tr>
                                    <tr className="border-b border-gray-200 ">
                                        <td className="ps-[0.7rem] md:ps-[1.4rem] py-[0.6rem]">
                                            <p className="text-[0.7rem] sm:text-[0.8rem] md:text-[0.95rem]">Sophie Marin</p>
                                            <p className="text-[0.7rem] sm:text-[0.8rem] md:text-[1rem] font-extralight">sophie@productpilot.io</p>
                                        </td>
                                        <td ><span className="flex items-center text-[0.7rem] sm:text-[0.8rem] md:text-[0.9rem]"><TbMailUp className="me-[5px]" />Cold Outreach – Retail<BsBoxArrowUpRight className="ms-[5px]" /></span></td>
                                        <td className="text-[0.9rem]  ps-[0.6rem]">22</td>
                                    </tr>
                                    <tr className="border-b border-gray-200 ">
                                        <td className="ps-[0.7rem] md:ps-[1.4rem] py-[0.6rem]">
                                            <p className="text-[0.7rem] sm:text-[0.8rem] md:text-[0.95rem]">Luis Mendes</p>
                                            <p className="text-[0.7rem] sm:text-[0.8rem] md:text-[1rem] font-extralight">luis@driftlayer.com</p>
                                        </td>
                                        <td ><span className="flex items-center text-[0.7rem] sm:text-[0.8rem] md:text-[0.9rem]"><TbMailUp className="me-[5px]" />Outbound – SMB Beta<BsBoxArrowUpRight className="ms-[5px]" /></span></td>
                                        <td className="text-[0.9rem]  ps-[0.6rem]">20</td>
                                    </tr>
                                    <tr className="border-b border-gray-200 ">
                                        <td className="ps-[0.7rem] md:ps-[1.4rem] py-[0.6rem]">
                                            <p className="text-[0.7rem] sm:text-[0.8rem] md:text-[0.95rem]">Maya Patel</p>
                                            <p className="text-[0.7rem] sm:text-[0.8rem] md:text-[1rem] font-extralight">maya@quanta.ai</p>
                                        </td>
                                        <td ><span className="flex items-center text-[0.7rem] sm:text-[0.8rem] md:text-[0.9rem]"><TbMailUp className="me-[5px]" />Cold Outreach – AI Vertical<BsBoxArrowUpRight className="ms-[5px]" /></span></td>
                                        <td className="text-[0.9rem]  ps-[0.6rem]">18</td>
                                    </tr>
                                    <tr >
                                        <td className="ps-[0.7rem] md:ps-[1.4rem] pt-[0.6rem]">
                                            <p className="text-[0.7rem] sm:text-[0.8rem] md:text-[0.95rem]">Dan Olsen</p>
                                            <p className="text-[0.7rem] sm:text-[0.8rem] md:text-[1rem] font-extralight">dan@stratushr.com</p>
                                        </td>
                                        <td ><span className="flex items-center text-[0.7rem] sm:text-[0.8rem] md:text-[0.9rem]"><TbMailUp className="me-[5px]" />Inbound Sequence<BsBoxArrowUpRight className="ms-[5px]" /></span></td>
                                        <td className="text-[0.9rem]  ps-[0.6rem]">16</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>
                    <div className="flex gap-[5rem] flex-col sm:flex-col md:flex-col lg:flex-row">
                        <div className="   w-[100%] ">
                            <div className="border rounded-lg py-[1.4rem] p-[1.4rem] bg-[var(--color-26)] mb-[0.6rem]">
                                <div className="flex items-start gap-[2.5rem] ">
                                    <div className="flex flex-col items-start justify-center ">
                                        <h3 className="m-0 leading-none font-bold text-[1.1rem]">
                                            <GradientText
                                                colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                                                animationSpeed={3}
                                                showBorder={false}
                                                className="custom-class"
                                            >
                                                Hexa AI
                                            </GradientText>
                                        </h3>

                                        <p className="m-0 mt-[2px] text-sm text-[var(--color-20)] leading-tight">
                                            Transcribing…
                                        </p>
                                    </div>
                                    <div className="w-[100%] flex justify-between items-center">
                                        <div className="bg-[var(--color-6)] h-[0.85rem] rounded-full w-[0.8rem]"></div>
                                        <div className="max-w-[15.7rem]  w-[100%] h-[2.6rem] bg-[var(--color-22)]">
                                            Image here
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="border rounded-lg  bg-[var(--color-22)]  h-[12.6rem] sm:h-[19rem] md:h-[20rem] lg:h-[25rem]">
                                Image here
                            </div>
                        </div>
                        <div className=" w-[100%]">
                            <div className="text-[var(--color-8)] w-[180px] bg-[var(--color-13)] flex text-[14px] py-[0.5rem] px-3 rounded-lg font-semibold items-center">
                                <BsSoundwave />
                                <h2 className="ps-2 text-left">Live Listening Engine</h2>
                            </div>
                            <div className="flex justify-start pt-[2rem]">
                                <h2 className="text-[1.4rem] sm:text-[2rem] md:text-[2.3rem]  lg:text-[2.7rem]  leading-[1.5rem] md:leading-[2.5rem] font-semibold max-w-[410px]">Real-time intelligence,  <span className="text-[var(--color-20)]">built in.</span></h2>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-[10px] mt-[2.5rem]">
                                <div className="flex gap-[0.8rem]">
                                    <span className="p-[7px] rounded-sm h-[2.3rem] border bg-[var(--color-26)] inline-block"><PiWaveformBold size={22} className=" flex-shrink-0 text-[var(--color-8)]  " /></span>
                                    <div>
                                        <h3 className="font-medium text-[1rem]">Speaker Recognition</h3>
                                        <p className="text-[var(--color-20)] pt-[0.2rem] font-light text-[0.95rem] leading-[1.4rem]">Identifies each speaker and separates dialogue accordingly.</p>
                                    </div>
                                </div>

                                <div className="flex gap-[0.8rem]">
                                    <span className="p-[7px] rounded-sm h-[2.3rem] border bg-[var(--color-26)] inline-block"><RiChatSearchLine size={22} className=" flex-shrink-0 text-[var(--color-8)]" /></span>
                                    <div>
                                        <h3 className="font-medium text-[1rem]">Keyword Detection</h3>
                                        <p className="text-[var(--color-20)] pt-[0.2rem] font-light text-[0.95rem] leading-[1.4rem]">Flags key terms like “budget” or “timeline” in real time.</p>
                                    </div>
                                </div>
                                <div className="flex gap-[0.8rem]">
                                    <span className="p-[7px] rounded-sm h-[2.3rem] border bg-[var(--color-26)] inline-block"><SlEmotsmile size={22} className=" flex-shrink-0 text-[var(--color-8)]" /></span>
                                    <div>
                                        <h3 className="font-medium text-[1rem]">Sentiment Awareness</h3>
                                        <p className="text-[var(--color-20)] pt-[0.2rem] font-light text-[0.95rem] leading-[1.4rem]">Recognizes tone shifts and high/low buying intent signals.</p>
                                    </div>
                                </div>
                                <div className="flex gap-[0.8rem]">
                                    <span className="p-[7px] rounded-sm h-[2.3rem] border bg-[var(--color-26)] inline-block"><FiEdit3 size={22} className=" flex-shrink-0 text-[var(--color-8)]" /></span>
                                    <div>
                                        <h3 className="font-medium text-[1rem]">Live Highlighting</h3>
                                        <p className="text-[var(--color-20)] pt-[0.2rem] font-light text-[0.95rem] leading-[1.4rem]">Key moments (e.g. objections, goals) are tagged as they happen.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-[80px] flex-col sm:flex-col md:flex-col lg:flex-row">
                        <div className=" w-[100%]">
                            <div className="text-[var(--color-8)] w-[180px] bg-[var(--color-13)] flex text-[14px] py-[0.5rem] px-3 rounded-lg font-semibold items-center">
                                <FaRegFileLines />
                                <h2 className="ps-2 text-left">Actionable Output</h2>
                            </div>
                            <div className="flex justify-start pt-[2rem]">
                                <h2 className="text-[1.4rem] sm:text-[2rem] md:text-[2.3rem]  lg:text-[2.7rem]  leading-[1.5rem] md:leading-[2.5rem] font-semibold max-w-[410px]">Every insight, <span className="text-[var(--color-20)]">perfectly captured.</span></h2>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-[10px] mt-[2.5rem]">
                                <div className="flex gap-[0.8rem]">
                                    <span className="p-[7px] rounded-sm h-[2.3rem] border bg-[var(--color-26)] inline-block"><LiaListAltSolid size={22} className=" flex-shrink-0 text-[var(--color-8)]  " /></span>
                                    <div>
                                        <h3 className="font-medium text-[1rem]">Auto-Summary Bullets</h3>
                                        <p className="text-[var(--color-20)] pt-[0.2rem] font-light text-[0.95rem] leading-[1.4rem]">Clean bullet-point summaries — no messy transcription dumps.</p>
                                    </div>
                                </div>

                                <div className="flex gap-[0.8rem]">
                                    <span className="p-[7px] rounded-sm h-[2.3rem] border bg-[var(--color-26)] inline-block"><TbFileStar size={22} className=" flex-shrink-0 text-[var(--color-8)]" /></span>
                                    <div>
                                        <h3 className="font-medium text-[1rem]">Follow-Up Ready</h3>
                                        <p className="text-[var(--color-20)] pt-[0.2rem] font-light text-[0.95rem] leading-[1.4rem]">Suggested next steps and replies pre-written post-call.</p>
                                    </div>
                                </div>
                                <div className="flex gap-[0.8rem]">
                                    <span className="p-[7px] rounded-sm h-[2.3rem] border bg-[var(--color-26)] inline-block"><RxViewGrid size={22} className=" flex-shrink-0 text-[var(--color-8)]" /></span>
                                    <div>
                                        <h3 className="font-medium text-[1rem]">CRM-Linked</h3>
                                        <p className="text-[var(--color-20)] pt-[0.2rem] font-light text-[0.95rem] leading-[1.4rem]">Automatically attaches each summary to the relevant deal.</p>
                                    </div>
                                </div>
                                <div className="flex gap-[0.8rem]">
                                    <span className="p-[7px] rounded-sm h-[2.3rem] border bg-[var(--color-26)] inline-block"><TbMessage2Star size={22} className=" flex-shrink-0 text-[var(--color-8)]" /></span>
                                    <div>
                                        <h3 className="font-medium text-[1rem]">Summary Feedback Loop</h3>
                                        <p className="text-[var(--color-20)] pt-[0.2rem] font-light text-[0.95rem] leading-[1.4rem]">Rate summary quality so Hexa improves over time with your data.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=" border rounded-lg bg-[var(--color-26)] p-[1.4rem] w-[100%] text-[0.8rem]">
                            <header>
                                <h4 className="text-[1.15rem] font-semibold">Meeting Summary</h4>
                            </header>
                            <span className="w-[100%] h-[0.01rem] bg-[var(--color-22)] inline-block"></span>
                            <h5 className="font-normal text-[1rem] mt-[0.25rem]">Call with:<span className="font-normal text-[0.85rem] text-[var(--color-20)]"> Jordan Blake — Head of Sales @ Arcview</span></h5>
                            <h5 className="font-normal text-[1rem] mt-[0.6rem]">Date:<span className="font-normal text-[0.85rem] text-[var(--color-20)]">July 10, 2025</span></h5>
                            <h4 className="mt-[0.6rem] font-semibold text-[0.95rem]">Key Highlights</h4>
                            <ul className="list-disc text-[var(--color-20)] font-light ps-[20px] text-[0.9rem]">
                                <li className="mt-[0.6rem]"><p>Prospect is struggling with manual follow-ups and missed handoffs.</p></li>
                                <li className="mt-[0.6rem]"><p>Expressed intent to test Hexa next quarter if budget fits.</p></li>
                                <li className="mt-[0.6rem]"><p>Potential blocker: procurement/legal timeline.</p></li>
                            </ul>
                            <h4 className="mt-[0.6rem] font-semibold text-[0.95rem]">Action Items</h4>
                            <div className="bg-[var(--color-24)] p-[0.95rem] border rounded-lg mt-[0.75rem]">
                                <h3 className="font-semibold text-[0.95rem]">Send follow-up email with pricing + ROI case study</h3>
                                <div className="flex justify-between items-center mt-[0.35rem]">
                                    <div className="flex text-[var(--color-20)]"> <p className="pe-[1.5rem]">Lauren</p><ul className="list-disc"><li>Due on July 11, 2025</li></ul></div>
                                    <p className="border text-[0.8rem] rounded-sm bg-[var(--color-26)] p-[0.3rem]">Completed</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="mt-[6rem] px-[2rem] sm:px-[4rem] md:px-[8rem] lg:px-[6rem]">
                <div className="flex flex-col justify-center items-center">
                    <div className="text-[var(--color-8)] font-semibold items-center text-center bg-[var(--color-13)] flex text-[0.85rem] py-[0.5rem] px-3 rounded-lg">
                        <TbStairsUp />
                        <h2 className="ps-2 ">Built for Teams Who close</h2>
                    </div>
                    <div className="max-w-[50rem] w-[100%] text-center">
                        <h2 className="text-[1.5rem] sm:text-[2rem] md:text-[2.4rem] lg:text-[2.8rem] font-semibold leading-[2rem] sm:leading-[2.3rem] md:leading-[2.8rem] lg:leading-[3.2rem] mt-[1.4rem]">AI Call Summaries that make <span className="text-[var(--color-20)]">reps faster</span> — and managers <span className="text-[var(--color-20)]">sleep better.</span></h2>
                        <p className="max-w-[23.8rem] inline-block w-[100%] text-[var(--color-20)] mt-[1.4rem]">Hexa automates follow-ups, tracks deals, and keeps your pipeline moving — minus the bloat.</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3   my-[5rem] gap-[1.9rem] ">
                    <div className="border flex flex-col gap-[3rem] sm:gap-[4rem] md:gap-[4.8rem] lg:gap-[5.9rem] justify-between rounded-md p-[1.4rem]">
                        <p className="font-semibold text-[1rem]  md:text-[1.2rem]">“Hexa’s summaries feel like having a ghostwriter for every deal. Follow-ups are instant now.”</p>
                        <div className="flex justify-between ">
                            <div className="flex items-center">
                                <img src={team1.src} className="w-9 h-9 rounded-full object-cover" />
                                <div className="ms-[0.6rem]">
                                    <h6 className="font-light">Claire Bennett</h6>
                                    <p className="text-[var(--color-20)] text-[0.85rem] font-light">VP Sales</p>
                                </div>
                            </div>
                            <img src={feature3.src} className="h-7  object-cover" />
                        </div>
                    </div>
                    <div className="border flex flex-col justify-between gap-[3rem] sm:gap-[4rem] md:gap-[4.8rem] lg:gap-[5.9rem] rounded-md p-[1.4rem]">
                        <p className="font-semibold text-[1rem]  md:text-[1.2rem]">“It pulls the gold from our calls without any effort. Notes, objections, and intent — all nailed.”</p>
                        <div className="flex justify-between">
                            <div className="flex items-center">
                                <img src={team2.src} className="w-9 h-9 rounded-full object-cover" />
                                <div className="ms-[0.6rem]">
                                    <h6 className="font-light">Keisha Oduro</h6>
                                    <p className="text-[var(--color-20)] text-[0.85rem] font-light">Growth Lead</p>
                                </div>
                            </div>
                            <img src={feature2.src} className=" h-7  object-cover" />
                        </div>
                    </div>
                    <div className="border flex flex-col justify-between gap-[3rem] sm:gap-[4rem] md:gap-[4.8rem] lg:gap-[5.9rem] rounded-md p-[1.4rem]">
                        <p className="font-semibold text-[1rem]  md:text-[1.2rem]">“I stopped chasing reps for call notes. The summaries give me perfect pipeline visibility.”</p>
                        <div className="flex justify-between">
                            <div className="flex items-center">
                                <img src={team3.src} className="w-9 h-9 rounded-full object-cover" />
                                <div className="ms-[0.6rem]">
                                    <h6 className="font-light">Omar Singh</h6>
                                    <p className="text-[var(--color-20)] text-[0.85rem] font-light">Head of RevOps</p>
                                </div>
                            </div>
                            <img src={feature1.src} className=" h-7  object-cover" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-[var(--color-24)] px-[1rem] sm:px-[2rem] md:px-[3rem] lg:px-[12rem] py-[6rem]">
                <div className="flex flex-col items-center justify-center">
                    <div className="text-[var(--color-8)]  items-center text-center bg-[var(--color-13)] flex text-[0.85rem] py-[0.5rem] px-3 rounded-lg font-semibold">
                        <SlQuestion />
                        <h2 className="ps-2 ">Still Have Questions?</h2>
                    </div>
                    <div className="max-w-[31.5rem] w-[100%] text-center">
                        <h2 className="text-[1.5rem] sm:text-[2rem] md:text-[2.4rem] lg:text-[2.8rem] font-semibold leading-[2rem] sm:leading-[2.3rem] md:leading-[2.8rem] lg:leading-[3.2rem] mt-[1.4rem]">Still have questions? <span className="text-[var(--color-20)]">We’ve got you covered.</span></h2>
                        <p className="max-w-[18.8rem] inline-block w-[100%] text-[1.1rem] font-extalight text-[var(--color-20)] mt-[1.4rem]">If it’s not covered here, reach out — or just try Hexa free and see for yourself.</p>
                    </div>
                </div>
                <div className="flex justify-center mt-[6rem]">
                    <div className="max-w-[50rem] w-[100%] bg-[var(--color-26)] rounded-md p-[0.6rem]">
                        <Accordion
                            type="single"
                            collapsible
                            className="w-full "
                            defaultValue="item-1"
                        >
                            <AccordionItem value="item-1" className="data-[state=open]:border data-[state=open]:bg-[var(--color-25)]  hover:bg-[var(--color-24)] p-[0.6rem] group rounded-lg border-b-0 mb-[10px]">
                                <AccordionTrigger className="cursor-pointer hover:no-underline text-[1rem]   font-semibold [&>svg]:h-6 [&>svg]:w-6 [&>svg]:stroke-[1.5] data-[state=open]:text-[var(--color-8)]">1. Do I need to manually start the recording?</AccordionTrigger >
                                <AccordionContent className="flex flex-col cursor-pointer  ">
                                    <p className="text-[1rem] text-[var(--color-20)]">
                                        <span className="text-[var(--color-18)] font-semibold">No.</span> Hexa automatically detects your sales meetings through calendar sync and joins the call silently in the background. You don’t need to click, record, or even think about it.
                                    </p>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2" className="data-[state=open]:border data-[state=open]:bg-[var(--color-25)]  hover:bg-[var(--color-24)] p-[0.6rem] group rounded-lg border-b-0 mb-[10px]">
                                <AccordionTrigger className="cursor-pointer hover:no-underline text-[1rem]   font-semibold [&>svg]:h-6 [&>svg]:w-6 [&>svg]:stroke-[1.5] data-[state=open]:text-[var(--color-8)]">2. Is the summary accurate?</AccordionTrigger >
                                <AccordionContent className="flex flex-col cursor-pointer  ">
                                    <p className="hover:no-underline text-[1rem]">
                                        Summaries are typically <span className="text-[var(--color-18)] font-semibold">90–95% accurate out of the box,</span>  with clear bullet points, speaker labeling, and smart tagging. You can tweak them before sending — but most users rarely do.
                                    </p>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-3" className="data-[state=open]:border data-[state=open]:bg-[var(--color-25)]  hover:bg-[var(--color-24)] p-[0.6rem] group rounded-lg border-b-0 mb-[10px]">
                                <AccordionTrigger className="cursor-pointer hover:no-underline text-[1rem]   font-semibold [&>svg]:h-6 [&>svg]:w-6 [&>svg]:stroke-[1.5] data-[state=open]:text-[var(--color-8)]">3. Where are summaries stored?</AccordionTrigger >
                                <AccordionContent className="flex flex-col cursor-pointer  ">
                                    <p className="hover:no-underline text-[1rem]">
                                        Each summary is <span className="text-[var(--color-18)] font-semibold">automatically attached to the relevant deal, contact, or pipeline stage</span> inside Hexa. You’ll never dig through your inbox or Notion again.
                                    </p>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-4" className="data-[state=open]:border data-[state=open]:bg-[var(--color-25)]  hover:bg-[var(--color-24)] p-[0.6rem] group rounded-lg border-b-0 mb-[10px]">
                                <AccordionTrigger className="cursor-pointer hover:no-underline text-[1rem]   font-semibold [&>svg]:h-6 [&>svg]:w-6 [&>svg]:stroke-[1.5] data-[state=open]:text-[var(--color-8)]">4. Can I control what’s recorded?</AccordionTrigger >
                                <AccordionContent className="flex flex-col cursor-pointer  ">
                                    <p className="hover:no-underline text-[1rem]">
                                        Yes. You have full control over when summaries happen. Admins can configure <span className="text-[var(--color-18)] font-semibold">rules by user, domain, calendar tag, or platform,</span> and Hexa always respects participant visibility.
                                    </p>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-5" className="data-[state=open]:border data-[state=open]:bg-[var(--color-25)]  hover:bg-[var(--color-24)] p-[0.6rem] group rounded-lg border-b-0 mb-[10px]">
                                <AccordionTrigger className="cursor-pointer hover:no-underline text-[1rem]   font-semibold [&>svg]:h-6 [&>svg]:w-6 [&>svg]:stroke-[1.5] data-[state=open]:text-[var(--color-8)]">5. Does it work with Zoom or Google Meet?</AccordionTrigger >
                                <AccordionContent className="flex flex-col cursor-pointer  ">
                                    <p className="hover:no-underline text-[1rem]">
                                        Hexa works seamlessly with  <span className="text-[var(--color-18)] font-semibold">Zoom, Google Meet,</span> and soon <span className="text-[var(--color-18)] font-semibold">Microsoft Teams</span>. If it’s in your calendar, Hexa’s ready to go.
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