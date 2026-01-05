"use client";
import Link from "next/link";
import { IoIosPeople } from "react-icons/io";
import { TbChevronDown } from "react-icons/tb";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { HiCircleStack } from "react-icons/hi2"; 
import { MdOutlineLightMode } from "react-icons/md";
import { RiBarChart2Fill } from "react-icons/ri";


export default function CustomersPage() {

  const imageLogos = [
    { src: "images/logo1.jpeg", alt: "Company 1" },
    { src: "images/logo2.jpeg", alt: "Company 2" },
    { src: "images/logo3.jpeg", alt: "Company 3" },
    { src: "images/logo4.jpeg", alt: "Company 3" },
    { src: "images/logo5.jpeg", alt: "Company 3" },

  ]; 
    
  return (
    <section>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
              <div className="inline-flex items-center gap-2 mb-4 sm:mb-6 px-3 py-1 rounded-lg bg-[var(--color-blue-100)] text-[var(--color-blue-500)] shadow-md text-sm sm:text-base">
                <IoIosPeople />
                <span className="font-medium text-2px">Customer Stories</span>
              </div>

              <h1 className="leading-tight text-2xl sm:text-4xl lg:text-6xl font-bold text-[var(--color-black)] tracking-tight">
                Sales team that <br />
                <span className="text-[var(--color-zinc-500)] text-6px"> real</span>
                <span className="text-[var(--color-zinc-500)]"> move faster with Avenstek </span>
              </h1>

              <p className="sm:mt-6 mx-auto max-w-xl sm:max-w-2xl text-base sm:text-lg text-[var(--color-zinc-600)]">
                From solo founders to fast-moving sales orgs, see how teams use<br />
                Avenstek to close faster, follow up smarter, and win more with less.
              </p>

              <div className="mt-6 sm:mt-10 flex justify-center">
                <button
                  onClick={() => {
                    const element = document.getElementById("customer-stories");
                    element?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="w-full sm:w-auto rounded-full bg-[var(--color-blue-500)] px-6 py-3 text-sm sm:text-base font-semibold text-white transition hover:bg-[var(--color-blue-700)] flex justify-center items-center gap-2"
                >
                  View Customer Stories <TbChevronDown />
                </button>
              </div>

            </div>

             {/* boxes */}
             <div className="mt-10 flex flex-col items-center">
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10"> 
                {/* Column on mobile, row on sm+ */}

                {/* 1st Box */}
                <div className="relative bg-white border border-gray-300 rounded-xl p-4 sm:p-5 shadow-lg w-52 sm:w-56 md:w-60">
                  <HiCircleStack className="absolute text-gray-300 text-[3rem] -rotate-21 left-1 top-1/2 transform -translate-y-1/2" />
                  <div className="ml-10 flex flex-col items-center gap-2 relative z-10">
                    <div className="flex justify-center text-2xl gap-1 text-yellow-400 mb-1">
                      <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar />
                      <div className="relative w-4 h-4">
                        <AiOutlineStar className="absolute top-0 left-0 text-gray-300" />
                        <div className="absolute top-0 left-0 w-1/2 overflow-hidden">
                          <AiFillStar className="text-yellow-400" />
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 text-[0.9rem] text-center">
                      <span className="text-gray-900">4.6</span>/5 based on reviews
                    </p>
                  </div>
                </div>

                {/* 2nd Box */}
                <div className="relative bg-white border border-gray-300 rounded-xl p-4 sm:p-5 shadow-lg w-52 sm:w-56 md:w-60">
                  <MdOutlineLightMode className="absolute text-gray-400 text-[3rem] -rotate-18 left-1 top-1/2 transform -translate-y-1/2" />
                  <div className="ml-7 flex flex-col items-center gap-2 relative z-10">
                    <div className="flex justify-center text-2xl gap-1 text-yellow-400 mb-1">
                      <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar />
                      <div className="relative w-4 h-4">
                        <AiOutlineStar className="absolute top-0 left-0 text-gray-300" />
                        <div className="absolute top-0 left-0 w-1/2 overflow-hidden">
                          <AiFillStar className="text-yellow-400" />
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 text-[0.9rem] text-center">
                      <span className="text-gray-900">4.6</span>/5 based on reviews
                    </p>
                  </div>
                </div>

                {/* 3rd Box */}
                <div className="relative bg-white border border-gray-300 rounded-xl p-4 sm:p-5 shadow-lg w-52 sm:w-56 md:w-60">
                  <RiBarChart2Fill className="absolute text-gray-400 text-[2.5rem] rotate-50 left-3 top-1/2 transform -translate-y-1/2" />
                  <div className="ml-7 flex flex-col items-center gap-2 relative z-10">
                    <div className="flex justify-center text-2xl gap-1 text-yellow-400 mb-1">
                      <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar />
                      <div className="relative w-4 h-4">
                        <AiOutlineStar className="absolute top-0 left-0 text-gray-300" />
                        <div className="absolute top-0 left-0 w-1/2 overflow-hidden">
                          <AiFillStar className="text-yellow-400" />
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 text-[0.9rem] text-center">
                      <span className="text-gray-900">4.6</span>/5 based on reviews
                    </p>
                  </div>
                </div>
              </div>

              {/* Logos */}
              <div className="relative w-full sm:w-[65rem] overflow-hidden flex items-center h-20 px-4 sm:px-0">
                <div className="absolute left-0 top-0 h-full w-16 bg-white z-10 pointer-events-none"></div>
                <div className="absolute right-0 top-0 h-full w-16 bg-white z-10 pointer-events-none"></div>

                <div className="flex gap-10 animate-scroll" style={{
                  width: `${imageLogos.length * 150 * 2}px`,
                }}>
                  {[...imageLogos, ...imageLogos].map((logo, idx) => (
                    <img
                      key={idx}
                      src={logo.src}
                      alt={logo.alt}
                      className="h-12 w-auto object-contain flex-shrink-0"
                    />
                  ))}
                </div>
              </div>

              <style jsx>{`
                @keyframes scroll {
                  0% { transform: translateX(0); }
                  100% { transform: translateX(-50%); }
                }
                .animate-scroll {
                  display: flex;
                  align-items: center;
                  animation: scroll 15s linear infinite;
                }
              `}</style>
            </div>

              {/* customr section */}
            <section id="customer-stories" className="bg-zinc-50 py-20 mt-6 shadow-xl">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-stretch lg:justify-items-start">
                  
                  {/* Box 1 */}
                  <div className="bg-white border border-zinc-200 rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col justify-between">
                    <div className="flex items-center gap-2 mb-4 sm:mb-6 justify-center sm:justify-start lg:justify-start">
                      <img src="/images/img13.svg" alt="Kanba" className="w-24 sm:w-30 h-10 sm:h-12 object-contain" />
                    </div>
                    <p className="text-zinc-700 text-sm sm:text-base mb-6 sm:mb-8 text-center sm:text-left lg:text-left">
                      “Avenstek made our RevOps stack feel like a single product. We went from 5 tools to 1 for tracking, coaching, and follow-ups. Pipeline visibility improved overnight — and our AE ramp time dropped by over 40%.”
                    </p>
                    <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-3 px-0 sm:px-7">
                      <div className="flex items-center gap-3">
                        <img src="/images/img11.avif" alt="Mike Grant" className="w-10 h-10 rounded-full" />
                        <div className="text-center sm:text-left lg:text-left">
                          <p className="text-sm font-medium text-zinc-900">Mike Grant</p>
                          <p className="text-sm text-zinc-500">Director of Revenue Operations</p>
                        </div>
                      </div>
                      <Link 
                        href="/customers/kanba"
                        className="text-sm font-medium text-zinc-900 border border-zinc-300 px-3 py-1 rounded-full hover:bg-zinc-100 cursor-pointer inline-flex items-center justify-center mt-3 sm:mt-0"
                      >
                        Read story &gt;
                      </Link>
                    </div>
                  </div>

                  {/* Box 2 */}
                  <div className="bg-white border border-zinc-200 rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col justify-between">
                    <div className="flex items-center gap-2 mb-4 sm:mb-6 justify-center sm:justify-start lg:justify-start">
                      <img src="/images/img14.svg" alt="Codelab" className="w-24 sm:w-30 h-10 sm:h-12 object-contain" />
                    </div>
                    <p className="text-zinc-700 text-sm sm:text-base mb-6 sm:mb-8 text-center sm:text-left lg:text-left">
                      “Avenstek made our RevOps stack feel like a single product. We went from 5 tools to 1 for tracking, coaching, and follow-ups. Pipeline visibility improved overnight — and our AE ramp time dropped by over 40%.”
                    </p>
                    <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-3 px-0 sm:px-7">
                      <div className="flex items-center gap-3">
                        <img src="/images/img12.avif" alt="Mike Grant" className="w-10 h-10 rounded-full" />
                        <div className="text-center sm:text-left lg:text-left">
                          <p className="text-sm font-medium text-zinc-900">Mike Grant</p>
                          <p className="text-sm text-zinc-500">Director of Revenue Operations</p>
                        </div>
                      </div>
                      <Link 
                        href="/customers/codelabpage"
                        className="text-sm font-medium text-zinc-900 border border-zinc-300 px-3 py-1 rounded-full hover:bg-zinc-100 cursor-pointer inline-flex items-center justify-center mt-3 sm:mt-0"
                      >
                        Read story &gt;
                      </Link>
                    </div>
                  </div>

                </div>
              </div>
            </section>

  </section>
  );
}
