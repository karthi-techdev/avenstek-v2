import { FaRegCalendarCheck } from "react-icons/fa";
import { IoStar } from "react-icons/io5";
import { LuUserSearch } from 'react-icons/lu'
import { IoStarHalf } from "react-icons/io5";
import { FiEdit3 } from "react-icons/fi";
import { SlEmotsmile } from "react-icons/sl";
import { RiChatSearchLine } from "react-icons/ri";
import { PiWaveformBold } from "react-icons/pi";
import { TbStairsUp } from "react-icons/tb";
import { FaUserCircle } from "react-icons/fa";
import { HiMiniUserGroup } from "react-icons/hi2";
import { CiCloud } from "react-icons/ci";
import { LuShield } from "react-icons/lu";
import { FiDatabase } from "react-icons/fi";
import { IoCode } from "react-icons/io5";
import { HiOutlineChip } from "react-icons/hi";
import { FaNetworkWired } from "react-icons/fa";
export default function Home() {
    return (
        <>
            <main className=" flex px-[1rem] pb-[3rem] sm:px-[2rem] md:px-[3rem] lg:px-[4rem]">
                <section>
                    <header className="flex justify-center">
                        <div className="max-w-[35rem] w-[100%] my-[2rem] text-center">
                            <div className="inline-block">
                                <div className="text-[var(--color-8)] bg-[var(--color-13)] flex text-[0.9rem] py-[0.5rem] px-3 rounded-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sparkles-icon lucide-sparkles"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z" /><path d="M20 2v4" /><path d="M22 4h-4" /><circle cx="4" cy="20" r="2" /></svg>
                                    <h2 className="ps-2 font-semibold">AI-Powered Productivity</h2>
                                </div>
                            </div>
                            <h2 className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] font-semibold">See Our all <span className="text-[var(--color-20)]">Services</span></h2>
                        </div>
                    </header>
                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-[1.5rem]">
                        <div className=" cursor-pointer  group  transition-all duration-500 border-[var(--color-22)] justify-center hover:border-[var(--color-8)]  border rounded-md p-[1.4rem]   ">
                            <div className="flex  gap-[1rem] ">
                                <div className=" transition-all duration-500  group-hover:bg-[var(--color-8)]  bg-[var(--color-24)] rounded-md inline-block h-[3.9rem] p-[1rem]">
                                    <CiCloud className="text-[1.9rem] transition-all duration-500  text-[var(--color-8)] group-hover:text-[var(--color-25)]" />
                                </div>
                                <div>
                                    <h3 className="text-[1.2rem] sm:text-[1.4rem] md:text-[1.6rem] leading-[2.5rem] font-medium">Cloud Solutions</h3>
                                    <p className="font-light text-[var(--color-20)]">Scalable cloud infrastructure and migration services to modernize your business operations and reduce IT overhead.</p>
                                    <ul className="list-disc text-[var(--color-20)] font-light pt-[0.6rem] pl-[0.65rem]">
                                        <li>Cloud Migration</li>
                                        <li>Infrastructure Management</li>
                                        <li>Cost Optimization</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className=" cursor-pointer  group  transition-all duration-500 border-[var(--color-22)] justify-center hover:border-[var(--color-8)]  border rounded-md p-[1.4rem]  ">
                            <div className="flex  gap-[1rem] ">
                                <div className=" transition-all duration-500  group-hover:bg-[var(--color-8)]  bg-[var(--color-24)] rounded-md inline-block h-[3.9rem] p-[1rem]">
                                    <LuShield className="text-[1.9rem] transition-all duration-500  text-[var(--color-8)] group-hover:text-[var(--color-25)]" />
                                </div>
                                <div>
                                    <h3 className="text-[1.2rem] sm:text-[1.4rem] md:text-[1.6rem] leading-[2.5rem] font-medium">Cybersecurity</h3>
                                    <p className="font-light text-[var(--color-20)]">Comprehensive security solutions to protect your digital assets and ensure compliance with industry standards.</p>
                                    <ul className="list-disc text-[var(--color-20)] font-light pt-[0.6rem] pl-[0.65rem]">
                                        <li>Threat Detection</li>
                                        <li>Security Audits</li>
                                        <li>Compliance Management</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className=" cursor-pointer  group  transition-all duration-500 border-[var(--color-22)] justify-center hover:border-[var(--color-8)]  border rounded-md p-[1.4rem]   ">
                            <div className="flex  gap-[1rem] ">
                                <div className=" transition-all duration-500  group-hover:bg-[var(--color-8)]  bg-[var(--color-24)] rounded-md inline-block h-[3.9rem] p-[1rem]">
                                    <FiDatabase className="text-[1.9rem] transition-all duration-500  text-[var(--color-8)] group-hover:text-[var(--color-25)]" />
                                </div>
                                <div>
                                    <h3 className="text-[1.2rem] sm:text-[1.4rem] md:text-[1.6rem] leading-[2.5rem] font-medium">Data Management</h3>
                                    <p className="font-light text-[var(--color-20)]">Expert data architecture and management services to unlock insights and drive informed business decisions.</p>
                                    <ul className="list-disc text-[var(--color-20)] font-light pt-[0.6rem] pl-[0.65rem]">
                                        <li>Database Design</li>
                                        <li>Data Analytics</li>
                                        <li>Backup Solutions</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className=" cursor-pointer  group  transition-all duration-500 border-[var(--color-22)] justify-center hover:border-[var(--color-8)]  border rounded-md p-[1.4rem]  ">
                            <div className="flex  gap-[1rem] ">
                                <div className=" transition-all duration-500  group-hover:bg-[var(--color-8)]  bg-[var(--color-24)] rounded-md inline-block h-[3.9rem] p-[1rem]">
                                    <IoCode className="text-[1.9rem] transition-all duration-500  text-[var(--color-8)] group-hover:text-[var(--color-25)]" />
                                </div>
                                <div>
                                    <h3 className="text-[1.2rem] sm:text-[1.4rem] md:text-[1.6rem] leading-[2.5rem] font-medium">Custom Development</h3>
                                    <p className="font-light text-[var(--color-20)]">Tailored software solutions built to meet your unique business requirements and accelerate digital transformation.</p>
                                    <ul className="list-disc text-[var(--color-20)] font-light pt-[0.6rem] pl-[0.65rem]">
                                        <li>Web Applications</li>
                                        <li>Mobile Apps</li>
                                        <li>API Integration</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className=" cursor-pointer  group  transition-all duration-500 border-[var(--color-22)] justify-center hover:border-[var(--color-8)]  border rounded-md p-[1.4rem]   ">
                            <div className="flex  gap-[1rem] ">
                                <div className=" transition-all duration-500  group-hover:bg-[var(--color-8)]  bg-[var(--color-24)] rounded-md inline-block h-[3.9rem] p-[1rem]">
                                    <HiOutlineChip className="text-[1.9rem] transition-all duration-500  text-[var(--color-8)] group-hover:text-[var(--color-25)]" />
                                </div>
                                <div>
                                    <h3 className="text-[1.2rem] sm:text-[1.4rem] md:text-[1.6rem] leading-[2.5rem] font-medium">AI & Machine Learning</h3>
                                    <p className="font-light text-[var(--color-20)]">Leverage cutting-edge AI technologies to automate processes and gain competitive advantages in your industry.</p>
                                    <ul className="list-disc text-[var(--color-20)] font-light pt-[0.6rem] pl-[0.65rem]">
                                        <li>Process Automation</li>
                                        <li>Predictive Analytics</li>
                                        <li>NLP Solutions</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className=" cursor-pointer  group  transition-all duration-500 border-[var(--color-22)] justify-center hover:border-[var(--color-8)]  border rounded-md p-[1.4rem]   ">
                            <div className="flex  gap-[1rem] ">
                                <div className=" transition-all duration-500  group-hover:bg-[var(--color-8)]  bg-[var(--color-24)] rounded-md inline-block h-[3.9rem] p-[1rem]">
                                    <FaNetworkWired className="text-[1.9rem] transition-all duration-500  text-[var(--color-8)] group-hover:text-[var(--color-25)]" />
                                </div>
                                <div>
                                    <h3 className="text-[1.2rem] sm:text-[1.4rem] md:text-[1.6rem] leading-[2.5rem] font-medium">Network Infrastructure</h3>
                                    <p className="font-light text-[var(--color-20)]">Robust network design and management solutions ensuring reliable connectivity and optimal performance.</p>
                                    <ul className="list-disc text-[var(--color-20)] font-light pt-[0.6rem] pl-[0.65rem]">
                                        <li>Network Design</li>
                                        <li>SD-WAN</li>
                                        <li>Performance Monitoring</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <section className="bg-[var(--color-24)] px-[2rem] sm:px-[3rem] md:px-[4rem] lg:px-[6rem] py-[3rem]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-[3rem] ">
                    <div className=" p-[1rem]">
                        <div className="text-[var(--color-8)] w-[11.5rem] bg-[var(--color-13)] flex text-[0.8rem] py-[0.5rem] px-3 rounded-lg font-semibold items-center mb-[0.7rem]">
                            <FaRegCalendarCheck />
                            <h2 className="ps-2 text-left">Intelligent Meeting Sync</h2>
                        </div>
                        <h3 className="text-[1.5rem] sm:text-[1.8rem] md:text-[2rem] leading-[1.8rem] font-semibold mb-[0.6rem]">Showcase your <span className="text-[var(--color-20)]">Strengths</span></h3>
                        <p className="font-light text-[var(--color-20)] max-w-[25rem] w-full">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima voluptate odit officiis eius. Saepe numquam corporis, sapiente ullam unde error suscipit labore deleniti reprehenderit harum nostrum. Sequi, quisquam dignissimos. Aspernatur quo praesentium laborum, facilis sunt nihil nisi inventore enim unde!</p>
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
                    <div className="bg-[var(--color-26)] p-[1.5rem] rounded-md">
                        <div className="flex gap-[1.4rem]">
                            <div className="flex gap-[0.15rem] text-[var(--color-8)]">
                                <IoStar className="" />
                                <IoStar />
                                <IoStar />
                                <IoStar />
                                <IoStarHalf />
                            </div>
                            <div>
                                <h4 className="font-semibold">4.9  <span className="font-light text-[0.85rem] text-[var(--color-20)]">(Rating)</span></h4>
                            </div>
                        </div>
                        <p className="text-[var(--color-20)] font-light leading-[1.3rem] my-[1rem] max-w-[27rem] w-full">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam, corrupti optio? Repudiandae consequatur, molestiae placeat eius enim tempora id recusandae. Itaque numquam saepe, animi quasi atque delectus sed mollitia iste quisquam sequi nam </p>
                        <h3 className="font-semibold text-[1.2rem]">Notalie D</h3>
                        <p className="font-light text-[0.86rem] text-[var(--color-20)] mb-[0.6rem]">HR assistant</p>
                        <div className="w-full h-[14rem] bg-[var(--color-21)] rounded-md">
                            Image here
                        </div>
                    </div>
                    <div className="bg-[var(--color-26)] p-[1.5rem] rounded-md">
                        <div className="flex gap-[0.6rem] items-center"><LuUserSearch className="text-[var(--color-8)] text-[1.7rem]" /><h3 className="font-semibold text-[1.5rem]">Trendex</h3></div>
                        <h4 className="text-[1.5rem] font-medium max-w-[14rem] w-full my-[0.8rem] leading-[1.8rem]">42% rise in sales <span className="text-[var(--color-20)]">follow up win rate</span></h4>
                        <p className="text-[var(--color-20)] font-light leading-[1.4rem] mb-[1rem] max-w-[27rem] w-full">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non voluptate exercitationem repellendus ea possimus eius vitae dolorem architecto illo quam!</p>
                        <div className="w-full h-[15rem] bg-[var(--color-21)] rounded-md">
                            Iamge here
                        </div>
                    </div>
                    <div >
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[2rem]">
                            <div className="text-center bg-[var(--color-26)] p-[1.5rem] rounded-md">
                                <h2 className="text-[var(--color-8)] text-[1.8rem] sm:text-[2rem] md:text-[2.4rem] font-semibold">39000+</h2>
                                <h4 className="font-semibold capitalize text-[1rem] md:text-[1.3rem] my-[0.6rem]">Startups users</h4>
                                <p className="text-[var(--color-20)] font-light">Lorem ipsum dolor sit amet.</p>
                            </div>
                            <div className="text-center bg-[var(--color-26)] p-[1.5rem] rounded-md">
                                <h2 className="text-[var(--color-8)] text-[1.8rem] sm:text-[2rem] md:text-[2.4rem] font-semibold">180M+</h2>
                                <h4 className="font-semibold capitalize text-[1rem] md:text-[1.3rem] my-[0.6rem]">Global clients</h4>
                                <p className="text-[var(--color-20)] font-light">Lorem ipsum dolor sit amet.</p>
                            </div>
                            <div className="text-center bg-[var(--color-26)] p-[1.5rem] rounded-md">
                                <h2 className="text-[var(--color-8)] text-[1.8rem] sm:text-[2rem] md:text-[2.4rem] font-semibold">5.00</h2>
                                <h4 className="font-semibold capitalize ttext-[1rem] md:text-[1.3rem] my-[0.6rem]">10k+ rating</h4>
                                <p className="text-[var(--color-20)] font-light">Lorem ipsum dolor sit amet.</p>
                            </div>
                            <div className="text-center bg-[var(--color-26)] p-[1.5rem] rounded-md">
                                <h2 className="text-[var(--color-8)] text-[1.8rem] sm:text-[2rem] md:text-[2.4rem] font-semibold">3.2x</h2>
                                <h4 className="font-semibold capitalize text-[1rem] md:text-[1.3rem] my-[0.6rem]">Pipeline visibility</h4>
                                <p className="text-[var(--color-20)] font-light">Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-[3rem] px-[2rem] sm:px-[3rem] md:px-[4.5rem] lg:px-[6rem]">
                <div className="flex flex-col items-center   justify-center">
                    <div className="inline-block ">
                        <div className="text-[var(--color-8)] font-semibold items-center text-center bg-[var(--color-13)] flex text-[0.85rem] py-[0.5rem] px-3 rounded-lg ">
                            <TbStairsUp />
                            <h2 className="ps-2 ">Built for Teams Who close</h2>
                        </div>
                    </div>
                    <div className="text-center flex flex-col items-center mt-[2rem]">
                        <h2 className="text-[2rem] sm:text-[2.3rem] md:text-[2.5rem] lg:text-[2.7rem] leading-[2.2rem] font-semibold ">Proven Process for <span className="text-[var(--color-20)]">Smarter HR</span></h2>
                        <p className="max-w-[18rem] leading-[1.4rem] w-full text-center text-[var(--color-20)]">We simplify your HR journey, so you can focus on people, not paperwork</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3rem] mt-[3rem]">
                    <div className="flex flex-col border border-[var(--color-21)] p-[1.4rem] rounded-md  items-center">
                        <div className="border border-[var(--color-21)] text-[var(--color-8)] inline-block p-[0.6rem] text-[1.7rem] rounded-md">
                            < FaUserCircle />
                        </div>
                        <h2 className="text-[1.3rem] sm:text-[1.5rem] font-semibold mt-[0.6rem]">Create your account</h2>
                        <p className="text-[var(--color-20)] font-light text-center leading-[1.5rem] mt-[0.6rem] ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias eaque optio a debitis fugit cum totam laudantium possimus neque eligendi officiis pariatur ab odit reprehenderit omnis commodi eos assumenda, explicabo maxime autem corrupti atque rerum!</p>
                    </div>
                    <div className="flex flex-col border border-[var(--color-21)] p-[1.4rem] rounded-md  items-center">
                        <div className="border border-[var(--color-21)] text-[var(--color-8)] inline-block p-[0.6rem] text-[1.7rem] rounded-md">
                            < HiMiniUserGroup />
                        </div>
                        <h2 className="text-[1.3rem] sm:text-[1.5rem] font-semibold mt-[0.6rem]">Initial Assessment</h2>
                        <p className="text-[var(--color-20)] font-light text-center leading-[1.5rem] mt-[0.6rem] ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias eaque optio a debitis fugit cum totam laudantium possimus neque eligendi officiis pariatur ab odit reprehenderit omnis commodi eos assumenda, explicabo maxime autem corrupti atque rerum!</p>
                    </div>
                    <div className="flex flex-col border border-[var(--color-21)] p-[1.4rem] rounded-md  items-center">
                        <div className="border border-[var(--color-21)] text-[var(--color-8)] inline-block p-[0.6rem] text-[1.7rem] rounded-md">
                            < FiEdit3 />
                        </div>
                        <h2 className="text-[1.3rem] sm:text-[1.5rem] font-semibold mt-[0.6rem]">Customize plan</h2>
                        <p className="text-[var(--color-20)] font-light text-center leading-[1.5rem] mt-[0.6rem] ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias eaque optio a debitis fugit cum totam laudantium possimus neque eligendi officiis pariatur ab odit reprehenderit omnis commodi eos assumenda, explicabo maxime autem corrupti atque rerum!</p>
                    </div>
                </div>
            </section>
        </>
    );
}