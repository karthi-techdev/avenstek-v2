"use client"
import Image from "next/image";
import image1 from "../../public/career-img/career-image-1.webp";
import image2 from "../../public/career-img/career-image-2.webp";
import image3 from "../../public/career-img/career-image-3.webp";
import image4 from "../../public/career-img/career-image-1.webp";
import image5 from "../../public/career-img/career-image-2.webp";
import image6 from "../../public/career-img/career-image-3.webp";
import { LuNewspaper,LuCircleMinus,LuGlobe,LuPencilRuler,LuBrain } from "react-icons/lu";
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

const Career = () => {
  usePageSEO(
    "Careers", 
    "Build your future with Avenstek Solutions Pvt Ltd. Explore career opportunities in software engineering, AI, and UI/UX design. Join a team with 10+ years of innovation and a global impact."
  );
  const router = useRouter();
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
          <h1 className="text-[var(--color-1)] text-3xl md:text-5xl lg:text-6xl font-bold max-w-3xl mx-auto leading-tight">Help us build what<span className="text-[var(--color-20)]"> sales teams actually need</span>
          </h1>
          <p className="text-[var(--color-19)] 
            max-w-lg mx-auto text-[.90rem] md:text-lg 
            lg:text-xl tracking-wide mt-4 px-2">
              Hexa is on a mission to make sales faster, clearer, and more human. If you&apos;t tired of bloated tools and love building sharp, focused products — join us.
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
          View Open Roles
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
            <BsStars className="text-[var(--color-7)] mr-2 h-5 w-5"/>
            <h3 className='text-[var(--color-7)]'>Why Hexa</h3>
          </div>
            <div className="py-5">
            <h1 className='text-[var(--color-1)] text-2xl md:text-4xl lg:text-6xl font-bold max-w-xl md:max-w-xl lg:max-w-3xl mx-auto leading-tight' >Work on real problem with<span className='text-[var(--color-20)]'> a team that actually ship</span></h1>
            <p className='text-[var(--color-19)] 
            max-w-lg mx-auto text-[.90rem] md:text-lg 
            lg:text-xl tracking-wide mt-4 px-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis inventore natus suscipit fuga illum itaque similique cumque sapiente eos esse? Lorem ipsum dolor sit amet consectetur</p>
            </div>

            <div className="px-4 md:px-6 lg:p-9 max-w-7xl mx-auto">
  <div
    className="
      flex flex-wrap justify-center
      gap-4 lg:gap-6
      text-[0.85rem] sm:text-[0.90rem] md:text-[.95rem] lg:text-[1rem]
    "
  >

    {/* Card 1 */}
    <div className="border border-2 border-[var(--color-23)] rounded-2xl
                    w-full md:w-[48%] lg:w-[31%]
                    p-4 sm:p-5 bg-[var(--color-26)]">
      <AiOutlineThunderbolt className="text-[var(--color-7)]
        h-7 w-7 sm:h-8 sm:w-8 lg:h-11 lg:w-11
        p-1 lg:p-2 border border-2 border-[var(--color-23)] rounded-lg"/>
      <div className="text-left py-3 sm:py-4">
        <h2 className="text-[var(--color-1)] font-bold">
          Clarity beats complexity
        </h2>
        <p className="text-[var(--color-19)]">
          We strip away noise. Every feature we ship has to earn its place.
        </p>
      </div>
    </div>

    {/* Card 2 */}
    <div className="border border-2 border-[var(--color-23)] rounded-2xl
                    w-full md:w-[48%] lg:w-[31%]
                    p-4 sm:p-5 bg-[var(--color-26)]">
      <LuBrain className="text-[var(--color-7)]
        h-7 w-7 sm:h-8 sm:w-8 lg:h-11 lg:w-11
        p-1 lg:p-2 border border-2 border-[var(--color-23)] rounded-lg"/>
      <div className="text-left py-3 sm:py-4">
        <h2 className="text-[var(--color-1)] font-bold">
          Think in systems, not silos
        </h2>
        <p className="text-[var(--color-19)]">
          Engineers, designers, and product sit side by side.
        </p>
      </div>
    </div>

    {/* Card 3 */}
    <div className="border border-2 border-[var(--color-23)] rounded-2xl
                    w-full md:w-[48%] lg:w-[31%]
                    p-4 sm:p-5 bg-[var(--color-26)]">
      <LuPencilRuler className="text-[var(--color-7)]
        h-7 w-7 sm:h-8 sm:w-8 lg:h-11 lg:w-11
        p-1 lg:p-2 border border-2 border-[var(--color-23)] rounded-lg"/>
      <div className="text-left py-3 sm:py-4">
        <h2 className="text-[var(--color-1)] font-bold">
          Bias for building
        </h2>
        <p className="text-[var(--color-19)]">
          We ship small, test quickly, and move faster than the process.
        </p>
      </div>
    </div>

    {/* Card 4 */}
    <div className="border border-2 border-[var(--color-23)] rounded-2xl
                    w-full md:w-[48%] lg:w-[31%]
                    p-4 sm:p-5 bg-[var(--color-26)]">
      <TbDna className="text-[var(--color-7)]
        h-7 w-7 sm:h-8 sm:w-8 lg:h-11 lg:w-11
        p-1 lg:p-2 border border-2 border-[var(--color-23)] rounded-lg"/>
      <div className="text-left py-3 sm:py-4">
        <h2 className="text-[var(--color-1)] font-bold">
          Sales is human
        </h2>
        <p className="text-[var(--color-19)]">
          We obsess over real workflows.
        </p>
      </div>
    </div>

    {/* Card 5 */}
    <div className="border border-2 border-[var(--color-23)] rounded-2xl
                    w-full md:w-[48%] lg:w-[31%]
                    p-4 sm:p-5 bg-[var(--color-26)]">
      <LuGlobe className="text-[var(--color-7)]
        h-7 w-7 sm:h-8 sm:w-8 lg:h-11 lg:w-11
        p-1 lg:p-2 border border-2 border-[var(--color-23)] rounded-lg"/>
      <div className="text-left py-3 sm:py-4">
        <h2 className="text-[var(--color-1)] font-bold">
          Remote-native, async first
        </h2>
        <p className="text-[var(--color-19)]">
          We work across time zones.
        </p>
      </div>
    </div>

    {/* Card 6 */}
    <div className="border border-2 border-[var(--color-23)] rounded-2xl
                    w-full md:w-[48%] lg:w-[31%]
                    p-4 sm:p-5 bg-[var(--color-26)]">
      <LuCircleMinus className="text-[var(--color-7)]
        h-7 w-7 sm:h-8 sm:w-8 lg:h-11 lg:w-11
        p-1 lg:p-2 border border-2 border-[var(--color-23)] rounded-lg"/>
      <div className="text-left py-3 sm:py-4">
        <h2 className="text-[var(--color-1)] font-bold">
          Feedback is a feature
        </h2>
        <p className="text-[var(--color-19)]">
          We don&apos;t fear criticism.
        </p>
      </div>
    </div>

  </div>
</div>


       </div>
      </section>
      {/* principles */}
       <section>
          <div className=" text-center px-4 py-6 md:py-8">
              <div className="bg-[var(--color-13)] max-w-38 mx-auto text-center p-2 rounded-lg mb-6 flex text-[0.90rem] md:text-[0.95rem] lg:text-[1rem]">
              <LuNewspaper className="text-[var(--color-7)] mr-2 h-5 w-4"/>
              <h3 className='text-[var(--color-7)] '>Our Principles</h3>
            </div>
            <div>
            <h1 className='text-[var(--color-1)] text-2xl md:text-4xl lg:text-6xl font-bold max-w-4xl mx-auto leading-tight' >The principles that shape <span className='text-[var(--color-20)]'>everything we shape</span></h1>
            </div>

            <div className="p-9 max-w-7xl mx-auto" >
              <div className="grid sm:grid-cols-2 md:grid-cols-4  lg:grid-cols-4 gap-6 place-items-center text-[0.90rem] md:text-[.95rem] lg:text-[1rem]">             
                  <div className="h-42 w-65 p-5">
                    <AiOutlineThunderbolt  className="text-[var(--color-7)] md:h-8 md:w-8 lg:h-11 lg:w-11 h-7 w-7 md:p-1 lg:p-2 p-1 mx-auto border border-2 border-[var(--color-23)] rounded-lg"/>
                    <div className="text-center py-4 max-w-40 mx-auto">
                      <h2 className="text-[var(--color-1)] font-bold">Clarity over control</h2>
                      <p className="text-[var(--color-19)]">Tools should guide, not micromanage reps</p>
                    </div>
                  </div>

                  <div className="h-42 w-65 p-5">
                    <LuBrain  className="text-[var(--color-7)] md:h-8 md:w-8 lg:h-11 lg:w-11 h-7 w-7 md:p-1 lg:p-2 p-1 border border-2 mx-auto border-[var(--color-23)] rounded-lg"/>
                    <div className="text-center py-4 max-w-40 mx-auto">
                      <h2 className="text-[var(--color-1)] font-bold">Humans come first</h2>
                      <p className="text-[var(--color-19)]">Sales is built on trust. Tech should follow</p>
                    </div>
                  </div>

                  <div className="h-42 w-65 p-5">
                    <LuPencilRuler  className="text-[var(--color-7)] md:h-8 md:w-8 lg:h-11 lg:w-11 h-7 w-7 md:p-1 lg:p-2 p-1 border border-2 mx-auto border-[var(--color-23)] rounded-lg"/>
                    <div className="text-center py-4 max-w-40 mx-auto">
                      <h2 className="text-[var(--color-1)] font-bold">Data must be useful</h2>
                      <p className="text-[var(--color-19)]">Numbers are noise unless the drive action</p>
                    </div>
                  </div>

                  <div className="h-42 w-65 p-5">
                    <LuPencilRuler  className="text-[var(--color-7)] md:h-8 md:w-8 lg:h-11 lg:w-11 h-7 w-7 md:p-1 lg:p-2 p-1 border border-2 mx-auto border-[var(--color-23)] rounded-lg"/>
                    <div className="text-center py-4 max-w-40 mx-auto">
                      <h2 className="text-[var(--color-1)] font-bold">Build with intent</h2>
                      <p className="text-[var(--color-19)]">We don&apos;t ship future we wouldn&apos;t use daily</p>
                    </div>
                  </div>
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
              <LuNewspaper className="text-[var(--color-7)] mr-2 h-5 w-4"/>
              <h3 className='text-[var(--color-7)] '>Open Roles</h3>
            </div>
              <h1 className='text-[var(--color-1)] text-2xl md:text-4xl lg:text-6xl font-bold max-w-5xl mx-auto leading-tight'>Real results from <span className='text-[var(--color-20)]'>real sales teams</span></h1>
          </div>
        <div>
          <div>

  <div className="px-4 sm:px-6 lg:px-9 max-w-7xl mx-auto py-4">

    <div className="mb-6 bg-[var(--color-23)] flex w-fit p-2 rounded-xl font-semibold text-[0.85rem] sm:text-[0.9rem] md:text-[.95rem] lg:text-[1rem]">
      <FaNfcSymbol className="mr-2 h-5 w-4 text-[var(--color-20)]"/>
      <h3 className="text-[var(--color-17)]">Engineering</h3>
    </div>

    <div className="px-0 sm:px-4 md:px-6 lg:px-9 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 text-[0.85rem] md:text-[.95rem] lg:text-[1rem]">

        <div
          className="border border-2 border-[var(--color-23)] rounded-2xl p-4 sm:p-5 bg-[var(--color-2)] hover:bg-[var(--color-14)] transition-colors duration-300 ease-in-out"
          onClick={() => router.push("careers/job-description")}
        >
          <div className="text-left py-3 sm:py-4">
            <h2 className="text-[var(--color-1)] font-bold">
              Backend Engineeer - AI & Data Infrastructure
            </h2>
            <p className="text-[var(--color-19)]">
              Build the backend powering AI-first sales tools used by real teams every day
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <div className="flex gap-2 text-[var(--color-19)] items-center">
              <FaRegClock />
              <h4>Full-time</h4>
            </div>
            <div className="flex gap-2 text-[var(--color-19)] items-center">
              <IoLocationOutline />
              <h4>Europe</h4>
            </div>
            <div className="flex gap-2 text-[var(--color-19)] items-center">
              <LuGlobe />
              <h4>Remote</h4>
            </div>
          </div>

          <div className="flex gap-4 mt-2">
            <div className="flex gap-2 text-[var(--color-19)] items-center">
              <RiMoneyDollarBoxLine />
              <h4>EUR 85,000 - 120,000</h4>
            </div>
          </div>
        </div>

        <div
          className="border border-2 border-[var(--color-23)] rounded-2xl p-4 sm:p-5 bg-[var(--color-2)] hover:bg-[var(--color-14)] transition-colors duration-300 ease-in-out"
          onClick={() => router.push("careers/job-description")}
        >
          <div className="text-left py-3 sm:py-4">
            <h2 className="text-[var(--color-1)] font-bold">
              Backend Engineeer - AI & Data Infrastructure
            </h2>
            <p className="text-[var(--color-19)]">
              Build the backend powering AI-first sales tools used by real teams every day
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <div className="flex gap-2 text-[var(--color-19)] items-center">
              <FaRegClock />
              <h4>Full-time</h4>
            </div>
            <div className="flex gap-2 text-[var(--color-19)] items-center">
              <IoLocationOutline />
              <h4>US</h4>
            </div>
            <div className="flex gap-2 text-[var(--color-19)] items-center">
              <LuGlobe />
              <h4>Remote</h4>
            </div>
          </div>

          <div className="flex gap-4 mt-2">
            <div className="flex gap-2 text-[var(--color-19)] items-center">
              <RiMoneyDollarBoxLine />
              <h4>EUR 80,000 - 130,000</h4>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>

  <div className="px-4 sm:px-6 lg:px-9 max-w-7xl mx-auto mt-14">

    <div className="mb-6 bg-[var(--color-23)] flex w-fit p-2 rounded-xl font-semibold text-[0.85rem] sm:text-[0.9rem] md:text-[.95rem] lg:text-[1rem]">
      <FaNfcSymbol className="mr-2 h-5 w-4 text-[var(--color-19)]"/>
      <h3 className="text-[var(--color-17)]">Design</h3>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 text-[0.85rem] md:text-[.95rem] lg:text-[1rem]">

      <div
        className="border border-2 border-[var(--color-23)] rounded-2xl p-4 sm:p-5 bg-[var(--color-2)] hover:bg-[var(--color-14)] transition-colors duration-300 ease-in-out"
        onClick={() => router.push("careers/job-description")}
      >
        <div className="text-left py-3 sm:py-4">
          <h2 className="text-[var(--color-1)] font-bold">
            Product Engineeer - AI Powered Sales UX
          </h2>
          <p className="text-[var(--color-19)]">
            Design clear, fast, and human-first interfaces for AI-driven sales tools
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <div className="flex gap-2 text-[var(--color-19)] items-center">
            <FaRegClock />
            <h4>Full-time</h4>
          </div>
          <div className="flex gap-2 text-[var(--color-19)] items-center">
            <IoLocationOutline />
            <h4>Europe</h4>
          </div>
          <div className="flex gap-2 text-[var(--color-19)] items-center">
            <LuGlobe />
            <h4>Remote</h4>
          </div>
        </div>

        <div className="flex gap-4 mt-2">
          <div className="flex gap-2 text-[var(--color-19)] items-center">
            <RiMoneyDollarBoxLine />
            <h4>EUR 85,000 - 120,000</h4>
          </div>
        </div>
      </div>

    </div>
  </div>

</div>

          </div>
        </div>
       </section>
    </>
  )
}

export default Career;
