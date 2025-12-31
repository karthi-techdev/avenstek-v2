"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { TbTargetArrow, TbNotes, TbUserHeart } from "react-icons/tb";
import { RiGitBranchLine, RiTeamFill } from "react-icons/ri";
import { IoPeople, IoCodeSlash, IoShieldCheckmark } from "react-icons/io5";
import { FiSmartphone, FiMonitor } from "react-icons/fi";
import { HiOutlineChip } from "react-icons/hi";
import srimathiImg from '../../public/images/team/srimathi.jpeg'
import kishoreImg from '../../public/images/team/kishore.jpeg'
import kanikaImg from '../../public/images/team/kanika.jpeg'
import sureshImg from '../../public/images/team/suresh.jpg'
import pradeepImg from '../../public/images/team/pradeep.jpg'
import maniImg from '../../public/images/team/Mani.jpeg'
import deepikaImg from '../../public/images/team/deepika.jpeg'
import maliniImg from '../../public/images/team/malini.jpeg'
import gurumurthiImg from '../../public/images/team/Gurumurthi-S.png'
import devendhiranImg from '../../public/images/team/dhevendhiran.jpeg'
import ashmithaImg from '../../public/images/team/ashmitha.jpg'
import venkatImg from '../../public/images/team/venkatesan.png'
import karthiImg from '../../public/images/team/karthi.jpg'
import sasithraImg from '../../public/images/team/sasithra.jpg'

export default function About() {
  const router = useRouter();

  const teamMembers = [
    {
      name: "Venkatesan Chandirasekar",
      role: "Founder & CEO",
      img: venkatImg
    },
    {
      name: "Srimathi Venugopal",
      role: "Software Engineer",
      img: srimathiImg
    },
    {
      name: "Sasithra Chanemougam",
      role: "Software Engineer",
      img: sasithraImg
    },
     {
      name: "Karthi Rajendhiran",
      role: "Full Stack Developer",
      img: karthiImg
    },
    {
      name: "Kishore",
      role: "Full Stack Developer",
      img: kishoreImg
    },
    {
      name: "Suresh",
      role: "Full Stack Developer",
      img: sureshImg
    },
    {
      name: "Pradeep",
      role: "Full Stack Developer",
      img: pradeepImg
    },
    {
      name: "Malini",
      role: "Junior Developer",
      img: maliniImg
    },
    {
      name: "Gurumurthi",
      role: "Junior Developer",
      img: gurumurthiImg
    },
    {
      name: "Kanika Sri",
      role: "Junior Developer",
      img: kanikaImg
    },
    {
      name: "Mani",
      role: "Junior Developer",
      img: maniImg
    },
    {
      name: "Devendhiran",
      role: "Junior Developer",
      img: devendhiranImg
    },
    {
      name: "Ashmitha",
      role: "Junior Developer",
      img: ashmithaImg
    },
    {
      name: "Deepika",
      role: "Junior Developer",
      img: deepikaImg
    },
  ];

  return (
    <>
      <section className="bg-white text-gray-900">
        {/* Hero Section */}
        <section className="py-16 sm:py-24 text-center px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 mb-4 sm:mb-6 px-3 py-1 rounded-lg bg-[var(--color-12)] text-[var(--color-7)] shadow-md text-sm sm:text-base mx-auto">
            <IoPeople /><span className="font-medium">About Avenstek</span>
          </div>

          <h1 className="leading-tight text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tight mb-6">
            Crafting Digital Excellence <br />
            <span className="text-zinc-500">for Modern Businesses</span>
          </h1>

          <p className="mx-auto max-w-xl sm:max-w-2xl text-base sm:text-lg text-zinc-600">
            At Avenstek Solutions Pvt Ltd, we transform ideas into powerful digital solutions.<br />
            From custom web and mobile applications to intuitive UI/UX designs and advanced AI integrations,<br />
            we deliver innovation that drives growth and efficiency.
          </p>

          <div className="mt-6 sm:mt-10 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 flex-wrap">
            <Link href="/services" className="w-full sm:w-auto rounded-full bg-[var(--color-8)] px-6 py-3 text-sm sm:text-base font-semibold text-white transition hover:bg-blue-400">
              Explore Our Services
            </Link>
            <Link href="/contact" className="w-full sm:w-auto rounded-full border border-zinc-700 px-6 py-3 text-sm sm:text-base font-semibold text-black transition hover:bg-zinc-900 hover:text-white">
              Get in Touch
            </Link>
          </div>
        </section>

        {/* Hero Image */}
        <section className="mt-16 flex justify-center px-4 sm:px-6 lg:px-8">
          <div className="relative w-full max-w-5xl border border-gray-400 rounded-2xl p-1">
            <img
              src="https://media.istockphoto.com/id/1459581852/photo/digital-transformation-concept-high-speed-agile-development.jpg?s=612x612&w=0&k=20&c=USL7C7xkve8HohZroZFI1_kEtM92z4NiHi2Q9siwrg4="
              alt="Avenstek Digital Transformation"
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
          </div>
        </section>

        {/* Mission & Content Section */}
        <section className="mt-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-2xl transform transition hover:scale-105 flex flex-col">
            <div className="flex items-center gap-2 mb-4 px-3 py-1 rounded-lg bg-[var(--color-12)] text-[var(--color-7)] shadow-md text-sm w-max">
              <TbTargetArrow />
              <span className="font-medium text-sm">Our Mission</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 leading-snug mb-1">Empowering Businesses</h2>
            <span className="text-gray-500 text-3xl sm:text-4xl font-semibold block">Through Innovation</span>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-2xl transform transition hover:scale-105 flex flex-col text-sm">
            <p className="text-gray-500 mb-4">
              Based in Chennai, Avenstek Solutions is a leading IT firm dedicated to delivering tailored software solutions that address real-world business challenges.
            </p>
            <p className="text-gray-500 mb-2">We believe great technology should:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Be scalable and reliable</li>
              <li>Enhance user experiences</li>
              <li>Drive measurable results</li>
            </ul>
            <p className="text-gray-600 mt-4 text-sm">With expertise spanning web development, mobile apps, UI/UX design, custom software, AI/ML, and cybersecurity, we're committed to your digital success.</p>
          </div>
        </section>

        {/* Principles Section */}
        <section className="mt-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="flex justify-center mb-6">
            <span className="inline-flex items-center gap-2 rounded-lg px-3 py-1 text-sm font-medium bg-[var(--color-12)] text-[var(--color-7)] h-10">
              <TbNotes /> Our Principles
            </span>
          </div>
          <h2 className="text-center text-4xl sm:text-5xl font-bold text-black mb-16">
            The values that guide <br />
            <span className="text-zinc-400">every solution we build.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 justify-items-center">
            <div className="flex flex-col items-center text-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white border border-zinc-200">
                <IoCodeSlash className="text-xl text-[var(--color-8)]" />
              </div>
              <h3 className="text-lg font-semibold text-black">Innovation First</h3>
              <p className="text-sm text-zinc-400">Leveraging cutting-edge technologies to solve complex problems.</p>
            </div>

            <div className="flex flex-col items-center text-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white border border-zinc-200">
                <TbUserHeart className="text-[var(--color-8)] text-xl" />
              </div>
              <h3 className="text-lg font-semibold text-black">Client-Centric</h3>
              <p className="text-sm text-zinc-400">Your success is our priority – we build partnerships, not just projects.</p>
            </div>

            <div className="flex flex-col items-center text-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white border border-zinc-200">
                <IoShieldCheckmark className="text-xl text-[var(--color-8)]" />
              </div>
              <h3 className="text-lg font-semibold text-black">Quality & Security</h3>
              <p className="text-sm text-zinc-400">Delivering robust, secure solutions that stand the test of time.</p>
            </div>

            <div className="flex flex-col items-center text-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white border border-zinc-200">
                <HiOutlineChip className="text-xl text-[var(--color-8)]" />
              </div>
              <h3 className="text-lg font-semibold text-black">Excellence in Execution</h3>
              <p className="text-sm text-zinc-400">Agile, transparent, and committed to on-time delivery.</p>
            </div>
          </div>
        </section>

        {/* Proof Section */}
        <section className="bg-[var(--color-gray-50)] py-24 px-6">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 lg:gap-16">
            <div className="flex flex-col items-center lg:items-start w-full lg:w-1/2 bg-[var(--color-white)]/5 backdrop-blur border border-[var(--color-white)]/10 p-6 rounded-xl">
              <div className="inline-flex items-center gap-2 rounded-md bg-[var(--color-12)] px-4 py-1 text-[var(--color-7)] text-sm font-medium mb-4">
                <RiGitBranchLine /> Proven Impact
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-black)] leading-snug text-center lg:text-left">
                Delivering Results <br />
                <span className="block text-[var(--color-zinc-400)] text-2xl sm:text-3xl lg:text-3xl">
                  for Growing Businesses
                </span>
              </h2>

              {/* <Link
                href="/portfolio"
                className="mt-6 rounded-full bg-[var(--color-white)] px-6 py-3 text-black hover:bg-[var(--color-blue-50)] border border-gray-500 text-sm sm:text-base"
              >
                View Our Projects &gt;
              </Link> */}
            </div>

            <div className="w-full lg:w-1/2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center">
                <div className="p-4 bg-[var(--color-white)]/5 border border-[var(--color-white)]/10 rounded-xl flex flex-col justify-between w-full max-w-xs mx-auto">
                  <h3 className="text-3xl sm:text-4xl font-bold text-[var(--color-8)]">50+</h3>
                  <p className="mt-1 text-sm font-semibold text-[var(--color-zinc-800)]">Projects Delivered</p>
                  <p className="text-sm text-[var(--color-zinc-500)]">Custom solutions across industries</p>
                </div>

                <div className="p-4 bg-[var(--color-white)]/5 border border-[var(--color-white)]/10 rounded-xl flex flex-col justify-between w-full max-w-xs mx-auto">
                  <h3 className="text-3xl sm:text-4xl font-bold text-[var(--color-8)]">30+</h3>
                  <p className="mt-1 text-sm font-semibold text-[var(--color-zinc-800)]">Satisfied Clients</p>
                  <p className="text-sm text-[var(--color-zinc-500)]">Long-term partnerships built on trust</p>
                </div>

                <div className="p-4 bg-[var(--color-white)]/5 border border-[var(--color-white)]/10 rounded-xl flex flex-col justify-between w-full max-w-xs mx-auto">
                  <h3 className="text-3xl sm:text-4xl font-bold text-[var(--color-8)]">98%</h3>
                  <p className="mt-1 text-sm font-semibold text-[var(--color-zinc-800)]">On-Time Delivery</p>
                  <p className="text-sm text-[var(--color-zinc-500)]">Committed to deadlines and quality</p>
                </div>

                <div className="p-4 bg-[var(--color-white)]/5 border border-[var(--color-white)]/10 rounded-xl flex flex-col justify-between w-full max-w-xs mx-auto">
                  <h3 className="text-3xl sm:text-4xl font-bold text-[var(--color-8)]">10+</h3>
                  <p className="mt-1 text-sm font-semibold text-[var(--color-zinc-800)]">Years of Expertise</p>
                  <p className="text-sm text-[var(--color-zinc-500)]">Deep industry knowledge and innovation</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-24 px-6">
          <div className="flex justify-center mb-6">
            <span className="inline-flex items-center gap-2 rounded-lg px-3 py-1 text-sm bg-[var(--color-12)] text-[var(--color-7)] h-10">
              <RiTeamFill /> Our Team
            </span>
          </div>
          <h2 className="text-center text-4xl sm:text-5xl font-bold text-black mb-16">
            Meet the people who <br />
            <span className="text-zinc-400">build the magic.</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-y-8 mx-auto">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="text-center w-full sm:w-[calc(50%-1rem)] md:w-[calc(33.333%-1.5rem)] lg:w-[calc(20%-2rem)]"
              >
                <div className="p-1 border border-gray-400 rounded-2xl mb-4 mx-auto w-59">
                  <div className="aspect-square rounded-2xl overflow-hidden bg-zinc-200 flex ">
                    <img
                      src={typeof member.img === 'string' ? member.img : member.img.src}
                      alt={member.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>

                <h3 className="font-semibold text-black">{member.name}</h3>
                <p className="text-sm text-zinc-500">{member.role}</p>
              </div>
            ))}
          </div>
        </section>

    
      </section>
    </>
  );
}