"use client";
import { useParams } from "next/navigation";
import { IoIosArrowBack } from "react-icons/io";
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import { FaRegSave } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { ImYahoo2 } from "react-icons/im";
import { FaListCheck } from "react-icons/fa6";

type Story = {
  title: string;
  content: React.ReactNode;
};

export default function StoryPage() {
  const params = useParams();
  const storyKey = Array.isArray(params.story) ? params.story[0] : params.story;

  const stories: Record<string, Story> = {
    kanba: {
      title: "",
      content: (
        <>
              <section className="bg-white w-full">
                <div className="flex justify-center mt-10 px-4">
                  <Link
                    href="/customers" 
                    className="text-sm font-medium text-zinc-900 border border-zinc-300 px-3 py-1 rounded-full h-12 w-auto hover:bg-zinc-100 cursor-pointer inline-flex items-center justify-center gap-2"
                  >
                    <IoIosArrowBack /> All Customers
                  </Link>
                </div>

                <div className="max-w-3xl mx-auto text-center px-4 mt-10">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-semibold text-gray-900 leading-tight">
                    How Kanba Streamlined <br />
                    RevOps Across 5 Teams Using Hexa
                  </h1>
                </div>

                <div className="mt-16 px-4 sm:px-10">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-8 lg:gap-y-0 lg:gap-x-20 text-center lg:text-left">
                    <div className="flex flex-col items-center lg:items-start">
                      <p className="text-3xl sm:text-[2.7rem] font-semibold text-blue-500">-42%</p>
                      <p className="mt-2 text-sm text-black">
                        AE Ramp Time <br /> <span className="text-gray-500">Sub-label</span>
                      </p>
                    </div>

                    <div className="flex flex-col items-center lg:items-start">
                      <p className="text-3xl sm:text-[2.7rem] font-semibold text-blue-500">+55%</p>
                      <p className="mt-2 text-sm text-black">
                        Forecast Accuracy <br /> <span className="text-gray-500">Sub-label</span>
                      </p>
                    </div>

                    <div className="flex flex-col items-center lg:items-start">
                      <p className="text-3xl sm:text-[2.7rem] font-semibold text-blue-500">-5 hrs</p>
                      <p className="mt-2 text-sm text-black">
                        Weekly Admin Time <br /> <span className="text-gray-500">Sub-label</span>
                      </p>
                    </div>

                    <div className="flex flex-col items-center lg:items-start">
                      <p className="text-3xl sm:text-[2.7rem] font-semibold text-blue-500">+3x</p>
                      <p className="mt-2 text-sm text-black">
                        Manager Coaching Speed <br /> <span className="text-gray-500">Sub-label</span>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 grid grid-cols-1 lg:grid-cols-4 gap-8">
                  
                  {/* left box */}
                  <div className="lg:col-span-2 space-y-6 text-left">
                    <div>
                      <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">Context</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Kanba’s RevOps org supports multiple sales teams across three verticals. 
                        As they scaled post-Series B, the operations layer became fragmented — each 
                        team had different tools, formats, and workflows. Reporting lagged. Coaching was reactive.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">Challenge</h3>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li>No consistent pipeline view across verticals</li>
                        <li>Follow-ups tracked manually or in Notion</li>
                        <li>Managers buried in admin</li>
                        <li>New AE onboarding stretched past 6 weeks</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">What Changed with Hexa</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Hexa’s Enterprise Plan gave Kanba a single workspace with AI-powered follow-ups, 
                        timeline-based deal views, and real-time coaching summaries. RevOps rolled it 
                        out org-wide in under 48 hours.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">Favorite Feature</h3>
                      <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-700">
                        “The AI-generated deal summaries gave us instant insight. Before Hexa, I needed 4 tools 
                        and a spreadsheet to do what I can now do in 3 clicks.”
                      </blockquote>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">Results</h3>
                      <ul className="text-gray-700 space-y-1">
                        <li>• AE ramp time dropped by <strong>42%</strong></li>
                        <li>• Manager review cycles cut in half</li>
                        <li>• Forecasting stabilized at <strong>±5%</strong> accuracy</li>
                        <li>• All 3 business units adopted the same process within 30 days </li>
                      </ul>
                    </div>
                  </div>

                  {/* right box */}
                  <div className="lg:col-span-2 w-full lg:sticky lg:top-24">
                    <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-lg space-y-4">
                      <div className="flex items-center gap-3">
                        <img src="/images/img13.svg" alt="Kanba" className="w-28 sm:w-34 h-10 sm:h-12 object-contain" />
                      </div>

                      <h2 className="text-black font-bold text-lg sm:text-xl">About</h2>
                      <p className="text-sm sm:text-base text-gray-600">
                        Kanba is a customer data platform that helps growth teams turn behavioral data into revenue.
                      </p>

                      <div className="grid grid-cols-2 gap-x-6 gap-y-4 mb-6 text-sm sm:text-base text-gray-700">
                        <div>
                          <span className="text-gray-500">Website</span>
                          <a href="#" className="block mt-1 text-blue-600 underline">Link</a>
                        </div>
                        <div>
                          <span className="text-gray-500">Onboarded since</span>
                          <span className="block mt-1">Jul 11, 2025</span>
                        </div>
                        <div>
                          <span className="text-gray-500">Industry</span>
                          <span className="block mt-1">SaaS</span>
                        </div>
                        <div>
                          <span className="text-gray-500">Company size</span>
                          <span className="block mt-1">51–200</span>
                        </div>
                        <div>
                          <span className="text-gray-500">Plan Tier</span>
                          <span className="block mt-1 text-blue-600 font-medium underline">Enterprise</span>
                        </div>
                        <div>
                          <span className="text-gray-500">Funding raised</span>
                          <span className="block mt-1">$18M Series B</span>
                        </div>
                      </div>

                      <button className="w-full py-3 rounded-full bg-blue-500 text-white font-semibold hover:bg-blue-700 transition">
                        Make the switch →
                      </button>

                      <hr className="border-gray-300" />

                      <div className="flex flex-col items-start gap-3 mt-3">
                        <span className="text-sm sm:text-base">Share story</span>
                        <div className="flex text-[1.25rem] sm:text-[1.5rem] text-gray-500 gap-2">
                          <FaXTwitter />
                          <FaRegSave />
                          <FaLinkedin />
                          <FaWhatsappSquare />
                          <ImYahoo2 />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </section>

        </>
      )
      ,
    },
    codelabpage: {
      title: "",
      content: (
           <>
      <section className="bg-white w-full">

              <div className="flex justify-center mt-10 px-4 sm:px-6">
                <Link
                  href="/customers"
                  className="text-sm font-medium text-zinc-900 border border-zinc-300 px-3 py-1 rounded-full h-12 w-auto sm:w-35 hover:bg-zinc-100 cursor-pointer inline-flex items-center justify-center gap-2"
                >
                  <IoIosArrowBack /> All Customers
                </Link>
              </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 text-center">
              <h1 className="text-[2rem] sm:text-[3.5rem] font-semibold text-black leading-tight">
                How Codelab Cut Sales<br /> Admin Time by 63% and <br />Doubled Pipeline visibility
              </h1>
            </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-center text-center">
              <div>
                <p className="text-[2rem] sm:text-[2.7rem] font-semibold text-blue-500">-63%</p>
                <p className="mt-2 text-sm text-black">
                  AE Ramp Time <br /> <span className="text-gray-500">Sub-label</span>
                </p>
              </div>
              <div>
                <p className="text-[2rem] sm:text-[2.7rem] font-semibold text-blue-500">+2.1%</p>
                <p className="mt-2 text-sm text-black">
                  Pipeline visibility <br /> <span className="text-gray-500">Sub-label</span>
                </p>
              </div>
              <div>
                <p className="text-[2rem] sm:text-[2.7rem] font-semibold text-blue-500">+38%</p>
                <p className="mt-2 text-sm text-black">
                  Follow-Up Speed <br /> <span className="text-gray-500">Sub-label</span>
                </p>
              </div>
              <div>
                <p className="text-[2rem] sm:text-[2.7rem] font-semibold text-blue-500">&gt; 10min</p>
                <p className="mt-2 text-sm text-black">
                  Rep Onboarding Time <br /> <span className="text-gray-500">Sub-label</span>
                </p>
              </div>
            </div>
          </div>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 mt-16 grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left */}
          <div className="lg:col-span-2 space-y-5">
            <div>
              <h3 className="text-sm font-semibold text-gray-500 uppercase mb-3">Context</h3>
              <p className="leading-relaxed text-gray-700">
                Kanba’s RevOps org supports multiple sales teams across three verticals...
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-500 uppercase mb-3">Challenge</h3>
              <ul className="space-y-2 list-disc list-inside text-gray-700">
                <li>No consistent pipeline view across verticals</li>
                <li>Follow-ups tracked manually or in Notion</li>
                <li>Managers buried in admin</li>
                <li>New AE onboarding stretched past 6 weeks</li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-500 uppercase mb-3">What Changed with Hexa</h3>
              <p className="leading-relaxed text-gray-700">
                Hexa’s Enterprise Plan gave Kanba a single workspace with AI-powered follow-ups...
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-500 uppercase mb-3">Favorite Feature</h3>
              <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-700">
                “The AI-generated deal summaries gave us instant insight...”
              </blockquote>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-500 uppercase mb-4">Results</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• AE ramp time dropped by <strong>42%</strong></li>
                <li>• Manager review cycles cut in half</li>
                <li>• Forecasting stabilized at <strong>±5%</strong> accuracy</li>
                <li>• All 3 business units adopted the same process within 30 days </li>
              </ul>
            </div>
          </div>

          {/* Right */}
          <div className="lg:col-span-2 lg:sticky lg:top-24 w-full">
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg space-y-4">
              <img src="/images/img14.svg" alt="Codelab" className="w-34 h-12 mb-4" />
              <h1 className="text-black font-bold">About</h1>
              <p className="text-sm text-gray-600">
                Codelab helps engineering teams onboard developers faster...
              </p>

              <div className="grid grid-cols-2 gap-x-10 gap-y-7 mb-7 text-sm text-gray-700">
                
                <div>
                  <span className="text-gray-500">Website</span>
                  <a href="#" className="block mt-1 text-blue-600 underline">Link</a>
                </div>
                <div>
                  <span className="text-gray-500">Onboarded since</span>
                  <span className="block mt-1">Jul 11, 2025</span>
                </div>
                <div>
                  <span className="text-gray-500">Industry</span>
                  <span className="block mt-1">SaaS</span>
                </div>
                <div>
                  <span className="text-gray-500">Company size</span>
                  <span className="block mt-1">51–200</span>
                </div>
                <div>
                  <span className="text-gray-500">Plan Tier</span>
                  <span className="block mt-1 text-blue-600 underline font-medium">Enterprise</span>
                </div>
                <div>
                  <span className="text-gray-500">Funding raised</span>
                  <span className="block mt-1">$18M Series B</span>
                </div>
              </div>

              <button className="w-full py-3 rounded-full bg-blue-500 text-white font-semibold hover:bg-blue-700 transition">
                Make the switch →
              </button>

              <hr className="border-gray-300" />

              <div className="flex flex-col items-start gap-3">
                <span className="text-[1rem]">Share story</span>
                <div className="flex text-[1.5rem] text-gray-500 gap-2">
                  <FaXTwitter />
                  <FaRegSave />
                  <FaLinkedin />
                  <FaWhatsappSquare />
                  <ImYahoo2 />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Customer sec */}
          <section className="mt-16 px-4 sm:px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white border border-zinc-200 rounded-2xl p-8 shadow-sm w-full">
                <img src="/images/img13.svg" alt="Kanba" className="w-30 h-12 mb-6" />
                <p className="text-zinc-700 mb-8">
                  “Hexa made our RevOps stack feel like a single product...”
                </p>
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <img src="/images/img2.avif" alt="Mike Grant" className="w-10 h-10 rounded-full" />
                    <div>
                      <p className="text-sm font-medium text-zinc-900">Mike Grant</p>
                      <p className="text-sm text-zinc-500">Director of Revenue Operations</p>
                    </div>
                  </div>
                  <Link
                    href="/customers/codelab"
                    className="text-sm font-medium text-zinc-900 border border-zinc-300 px-3 py-1 rounded-full h-12 w-30 hover:bg-zinc-100 cursor-pointer inline-flex items-center justify-center"
                  >
                    Read story &gt;
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </section>

        </>
      ),
    },
};
  const storyData = storyKey ? stories[storyKey] : undefined;

  if (!storyData) {
    return (
      <div className="text-center py-20">
        <Link href="/customers" className="text-blue-500 mt-4 inline-block">
          Back to Customers
        </Link>
      </div>
    );
  }

 return (
  <div className="max-w-7xl mx-auto py-20 px-6">
    <h1 className="text-4xl font-bold mb-6">{storyData.title}</h1>
    {storyData.content}
  </div>
);

}
