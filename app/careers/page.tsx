"use client"
import Image from "next/image";
import image1 from "../../public/career-img/career-image-1.webp";
import image2 from "../../public/career-img/career-image-2.webp";
import image3 from "../../public/career-img/career-image-3.webp";
import image4 from "../../public/career-img/career-image-1.webp";
import image5 from "../../public/career-img/career-image-2.webp";
import image6 from "../../public/career-img/career-image-3.webp";
import { LuNewspaper, LuCircleMinus, LuGlobe, LuPencilRuler, LuBrain } from "react-icons/lu";
import { IoRocketOutline } from "react-icons/io5";
import { BsStars } from "react-icons/bs";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { TbDna } from "react-icons/tb";
import { FaNfcSymbol } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { RiMoneyDollarBoxLine } from "react-icons/ri";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { usePageSEO } from "../hooks/usePageTitles";
import { useState, useEffect } from "react";
import api from "@/lib/api";

const Career = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [hero, setHero] = useState<any>(null);
  const [whyAvenstek, setWhyAvenstek] = useState<any[]>([]);
  const [principles, setPrinciples] = useState<any[]>([]);
  const [departments, setDepartments] = useState<any[]>([]);
  const [jobs, setJobs] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: config } = await api.get('/content/careers/config');
        if (config) {
          setHero(config.hero);
          setWhyAvenstek(config.whyAvenstek || []);
          setPrinciples(config.principles || []);
        }
        const { data: depts } = await api.get('/content/departments');
        setDepartments(depts || []);

        const { data: jobList } = await api.get('/content/jobs');
        setJobs(jobList || []);
      } catch (err) {
        console.error("Error fetching careers:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  usePageSEO(
    "Careers",
    "Build your future with Avenstek Solutions Pvt Ltd. Explore career opportunities in software engineering, AI, and UI/UX design. Join a team with 10+ years of innovation and a global impact."
  );
  return (
    <>
      {/* Work with us */}
      <section>
        <div className='bg-[var(--color-2)] text-center  px-4 py-12 sm:py-16'>
          <div className="bg-[var(--color-13)] inline-flex items-center justify-center 
          mx-auto text-center px-4 py-2 rounded-lg mb-6 text-[0.90rem] md:text-[0.95rem] lg:text-[1rem]">
            <IoRocketOutline className="text-[var(--color-7)] mr-2 h-5 w-5" />
            <h3 className="text-[var(--color-7)]">
              Work with us
            </h3>
          </div>

          <div className="pb-8">
            <h1 className="text-[var(--color-1)] text-3xl md:text-5xl lg:text-6xl font-bold max-w-3xl mx-auto leading-tight">
              {hero?.heroTitle || "Help us build what"} <span className="text-[var(--color-20)]">{hero?.highlightedText || "sales teams actually need"}</span>
            </h1>
            <p className="text-[var(--color-19)] 
            max-w-lg mx-auto text-[.90rem] md:text-lg 
            lg:text-xl tracking-wide mt-4 px-2">
              {hero?.heroSubtitle || "Avenstek is on a mission to make sales faster, clearer, and more human. If you're tired of bloated tools and love building sharp, focused products — join us."}
            </p>
          </div>

          <Link
            href="#open-roles"
            className=" inline-block
          bg-[var(--color-8)]
          text-[var(--color-2)]
          px-4 py-2
          sm:px-5 sm:py-2.5
          md:px-6 md:py-3
          text-sm sm:text-base
          rounded-full
          hover:bg-[var(--color-7)]
          transition">
            {hero?.ctaText || "View Open Roles"}
          </Link>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-3 grid-rows-3 gap-[6px]">

          {/* div1 */}
          <div className="col-span-2 row-span-2">
            <Image
              src={image1}
              alt="career-img-1"
              className="rounded-3xl object-cover h-full w-full p-2"
            />
          </div>

          {/* div2 */}
          <div className="col-start-3">
            <Image
              src={image2}
              alt="career-img-2"
              className="rounded-3xl object-cover h-full w-full p-2"
            />
          </div>

          {/* div3 */}
          <div className="col-start-3 row-start-2">
            <Image
              src={image3}
              alt="career-img-3"
              className="rounded-3xl object-cover h-full w-full p-2"
            />
          </div>

          {/* div4 */}
          <div className="row-start-3">
            <Image
              src={image4}
              alt="career-img-4"
              className="rounded-3xl object-cover h-full w-full p-2"
            />
          </div>

          {/* div5 */}
          <div className="row-start-3">
            <Image
              src={image5}
              alt="career-img-5"
              className="rounded-3xl object-cover h-full w-full p-2"
            />
          </div>

          {/* div6 */}
          <div className="row-start-3">
            <Image
              src={image6}
              alt="career-img-6"
              className="rounded-3xl object-cover h-full w-full p-2"
            />
          </div>

        </div>
      </section>
      {/* Why hera */}
      <section>
        <div className="bg-[var(--color-25)] text-center px-4 py-12 sm:py-16">
          <div className="bg-[var(--color-13)] inline-flex items-center justify-center 
          mx-auto text-center px-4 py-2 rounded-lg mb-6 text-[0.90rem] md:text-[0.95rem] lg:text-[1rem]">
            <BsStars className="text-[var(--color-7)] mr-2 h-5 w-5" />
            <h3 className='text-[var(--color-7)]'>Why Avenstek</h3>
          </div>
          <div className="py-5">
            <h1 className='text-[var(--color-1)] text-2xl md:text-4xl lg:text-6xl font-bold max-w-xl md:max-w-xl lg:max-w-3xl mx-auto leading-tight' >Work on real problem with<span className='text-[var(--color-20)]'> a team that actually ship</span></h1>
            <p className='text-[var(--color-19)] 
            max-w-lg mx-auto text-[.90rem] md:text-lg 
            lg:text-xl tracking-wide mt-4 px-2'>At Avenstek, you won&rsquo;t just &ldquo;support&rdquo; projects, you&rsquo;ll own them.
              From idea to deployment, you&rsquo;ll collaborate with a hands-on team that ships fast, learns constantly, and builds software that matters.
            </p>
          </div>

          <div className="px-4 md:px-6 lg:p-9 max-w-7xl mx-auto">
            <div
              className="
      flex flex-wrap justify-center
      gap-4 lg:gap-6
      text-[0.85rem] sm:text-[0.90rem] md:text-[.95rem] lg:text-[1rem]
    "
            >

              {whyAvenstek.map((item, idx) => (
                <div key={item._id || idx} className="border border-2 border-[var(--color-23)] rounded-2xl
                      w-full md:w-[48%] lg:w-[31%]
                      p-4 sm:p-5 bg-[var(--color-26)]">
                  {/* We can use a Map or switch if we want icon mapping, but for now fallback */}
                  <AiOutlineThunderbolt className="text-[var(--color-7)]
          h-7 w-7 sm:h-8 sm:w-8 lg:h-11 lg:w-11
          p-1 lg:p-2 border border-2 border-[var(--color-23)] rounded-lg"/>
                  <div className="text-left py-3 sm:py-4">
                    <h2 className="text-[var(--color-1)] font-bold">
                      {item.title}
                    </h2>
                    <p className="text-[var(--color-19)]">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}

              {whyAvenstek.length === 0 && (
                <>
                  {/* Fallback to original cards if empty */}
                  <div className="border border-2 border-[var(--color-23)] rounded-2xl
                        w-full md:w-[48%] lg:w-[31%]
                        p-4 sm:p-5 bg-[var(--color-26)]">
                    <AiOutlineThunderbolt className="text-[var(--color-7)]
            h-7 w-7 sm:h-8 sm:w-8 lg:h-11 lg:w-11
            p-1 lg:p-2 border border-2 border-[var(--color-23)] rounded-lg"/>
                    <div className="text-left py-3 sm:py-4">
                      <h2 className="text-[var(--color-1)] font-bold"> Clarity beats complexity </h2>
                      <p className="text-[var(--color-19)]"> We strip away noise. Every feature we ship has to earn its place. </p>
                    </div>
                  </div>
                  {/* ... other fallbacks if needed, but I'll keeping it simple */}
                </>
              )}

            </div>
          </div>


        </div>
      </section>
      {/* principles */}
      <section>
        <div className=" text-center px-4 py-6 md:py-8">
          <div className="bg-[var(--color-13)] max-w-38 mx-auto text-center p-2 rounded-lg mb-6 flex text-[0.90rem] md:text-[0.95rem] lg:text-[1rem]">
            <LuNewspaper className="text-[var(--color-7)] mr-2 h-5 w-4" />
            <h3 className='text-[var(--color-7)] '>Our Principles</h3>
          </div>
          <div>
            <h1 className='text-[var(--color-1)] text-2xl md:text-4xl lg:text-6xl font-bold max-w-4xl mx-auto leading-tight' >The principles that shape <span className='text-[var(--color-20)]'>everything we shape</span></h1>
          </div>

          <div className="p-9 max-w-7xl mx-auto" >
            <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 place-items-center text-[0.90rem] md:text-[.95rem] lg:text-[1rem]">
              {principles.map((item, idx) => (
                <div key={item._id || idx} className="h-42 w-65 p-5">
                  <AiOutlineThunderbolt className="text-[var(--color-7)] md:h-8 md:w-8 lg:h-11 lg:w-11 h-7 w-7 md:p-1 lg:p-2 p-1 mx-auto border border-2 border-[var(--color-23)] rounded-lg" />
                  <div className="text-center py-4 max-w-40 mx-auto">
                    <h2 className="text-[var(--color-1)] font-bold">{item.title}</h2>
                    <p className="text-[var(--color-19)]">{item.description}</p>
                  </div>
                </div>
              ))}

              {principles.length === 0 && (
                <div className="h-42 w-65 p-5">
                  <AiOutlineThunderbolt className="text-[var(--color-7)] md:h-8 md:w-8 lg:h-11 lg:w-11 h-7 w-7 md:p-1 lg:p-2 p-1 mx-auto border border-2 border-[var(--color-23)] rounded-lg" />
                  <div className="text-center py-4 max-w-40 mx-auto">
                    <h2 className="text-[var(--color-1)] font-bold">Clarity over control</h2>
                    <p className="text-[var(--color-19)]">Tools should guide, not micromanage reps</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      {/* Open roles */}
      <section id="open-roles">
        <div className="p-9 bg-[var(--color-25)] text-center  px-4 py-12 sm:py-16">
          <div>
            <div className="bg-[var(--color-13)] inline-flex items-center justify-center 
             mx-auto text-center px-4 py-2 rounded-lg mb-6 text-[0.90rem] md:text-[0.95rem] lg:text-[1rem]">
              <LuNewspaper className="text-[var(--color-7)] mr-2 h-5 w-4" />
              <h3 className='text-[var(--color-7)] '>Open Roles</h3>
            </div>
            <h1 className='text-[var(--color-1)] text-2xl md:text-4xl lg:text-6xl font-bold max-w-5xl mx-auto leading-tight'>Real results from <span className='text-[var(--color-20)]'>real sales teams</span></h1>
          </div>
          <div>
            <div>

              <div className="px-4 sm:px-6 lg:px-9 max-w-7xl mx-auto py-4">
                {departments.filter(d => d.status).map(dept => {
                  const deptJobs = jobs.filter(j => j.status && (j.departmentId?._id === dept?._id || j.departmentId === dept?._id));
                  if (deptJobs.length === 0) return null;

                  return (
                    <div key={dept?._id || dept?.id} className="mb-14">
                      <div className="mb-6 bg-[var(--color-23)] flex w-fit p-2 rounded-xl font-semibold text-[0.85rem] sm:text-[0.9rem] md:text-[.95rem] lg:text-[1rem]">
                        <FaNfcSymbol className="mr-2 h-5 w-4 text-[var(--color-20)]" />
                        <h3 className="text-[var(--color-17)]">{dept.name}</h3>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 text-[0.85rem] md:text-[.95rem] lg:text-[1rem]">
                        {deptJobs.map(job => (
                          <div
                            key={job?._id || job?.id}
                            className="border border-2 border-[var(--color-23)] rounded-2xl p-4 sm:p-5 bg-[var(--color-2)] hover:bg-[var(--color-14)] transition-colors duration-300 ease-in-out cursor-pointer"
                            onClick={() => router.push(`careers/job-description?id=${job?._id || job?.id}`)}
                          >
                            <div className="text-left py-3 sm:py-4">
                              <h2 className="text-[var(--color-1)] font-bold">
                                {job.title}
                              </h2>
                              <p className="text-[var(--color-19)] line-clamp-2">
                                {job.preText}
                              </p>
                            </div>

                            <div className="flex flex-wrap gap-3">
                              <div className="flex gap-2 text-[var(--color-19)] items-center">
                                <FaRegClock />
                                <h4>{job.jobType}</h4>
                              </div>
                              <div className="flex gap-2 text-[var(--color-19)] items-center">
                                <IoLocationOutline />
                                <h4>{job.location}</h4>
                              </div>
                              <div className="flex gap-2 text-[var(--color-19)] items-center">
                                <LuGlobe />
                                <h4>{job.workMode}</h4>
                              </div>
                            </div>

                            <div className="flex gap-4 mt-2">
                              <div className="flex gap-2 text-[var(--color-19)] items-center">
                                <RiMoneyDollarBoxLine />
                                <h4>{job.currency} {job.salaryMin.toLocaleString()} - {job.salaryMax.toLocaleString()}</h4>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}

                {!loading && jobs.length === 0 && (
                  <div className="py-20 text-center text-[var(--color-20)]">
                    No open roles at the moment. Check back later!
                  </div>
                )}
              </div>

            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default Career;
