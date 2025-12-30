"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { TbTargetArrow, TbNotes, TbUserHeart } from "react-icons/tb";
import { RiGitBranchLine } from "react-icons/ri";
import { IoPeople } from "react-icons/io5";

export default function About() {
  const router = useRouter();
  const goToCustomers = () => {
    router.push("/customers");
  };

  const teamMembers = [
  {
    name: "Julian Ford",
    role: "Head of Marketing",
    img: "/images/img2.avif",
  },
  {
    name: "Brooke Williams",
    role: "Customer Success Manager",
    img: "/images/img3.webp",
  },
  {
    name: "Daniel Reyes",
    role: "Product Designer",
    img: "/images/img4.webp",
  },
  {
    name: "Lara Zhou",
    role: "AI/ML Engineer",
    img: "/images/img5.webp",
  },
  {
    name: "Taylor Nguyen",
    role: "Backend Engineer",
    img: "/images/img6.avif",
  },
  {
    name: "Aiden Collins",
    role: "Frontend Engineer",
    img: "/images/img7.avif",
  },
  {
    name: "Sofia Martinez",
    role: "Product Manager",
    img: "/images/img8.avif",
  },
  {
    name: "Ethan Park",
    role: "Growth Analyst",
    img: "/images/img9.avif",
  },
  {
    name: "Maya Patel",
    role: "UX Researcher",
    img: "/images/img10.avif",
  },
];

  return (
    <>

     <section className="bg-white text-gray-900">

      {/* Hero Section */}
      <section className="py-16 sm:py-24 text-center px-4 sm:px-6 lg:px-8">
        <div className="inline-flex items-center gap-2 mb-4 sm:mb-6 px-3 py-1 rounded-lg bg-blue-100 text-blue-500 shadow-md text-sm sm:text-base mx-auto">
          <IoPeople /><span className="font-medium">About Hexa</span>
        </div>

        <h1 className="leading-tight text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tight mb-6">
          We build tools for <span className="text-zinc-500">real</span>
          <span className="block -mt-1 sm:-mt-2">
            <span className="text-zinc-500">sellers, </span>
            not dashboards
          </span>
        </h1>

        <p className="mx-auto max-w-xl sm:max-w-2xl text-base sm:text-lg text-zinc-600">
          CRMs were built for reports. We're building<br></br> for reps – fast, focused, and AI-native. No <br></br>fluff. No bloat. Just clarity where it matters.
        </p>

        <div className="mt-6 sm:mt-10 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 flex-wrap">
          <a href="#" className="w-full sm:w-auto rounded-full bg-blue-500 px-6 py-3 text-sm sm:text-base font-semibold text-white transition hover:bg-blue-400">
            Meet the Team
          </a>
          <a href="#" className="w-full sm:w-auto rounded-full border border-zinc-700 px-6 py-3 text-sm sm:text-base font-semibold text-black transition hover:bg-zinc-900 hover:text-white">
            Book a Demo
          </a>
        </div>
      </section>

      {/* Hero Image */}
      <section className="mt-16 flex justify-center px-4 sm:px-6 lg:px-8">
        <div className="relative w-full max-w-5xl border border-gray-400 rounded-2xl p-1">
          <img
            src="/images/image1.avif"
            alt="Hexa Illustration"
            className="w-full h-auto rounded-2xl shadow-2xl"
          />
        </div>
      </section>

      {/* Mission & Content Section */}
      <section className="mt-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl p-8 shadow-2xl transform transition hover:scale-105 flex flex-col">
          <div className="flex items-center gap-2 mb-4 px-3 py-1 rounded-lg bg-blue-100 text-blue-500 shadow-md text-sm w-max">
            <TbTargetArrow />
            <span className="font-medium text-sm">Our Mission</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 leading-snug mb-1">Sales deserves</h2>
          <span className="text-gray-500 text-3xl sm:text-4xl font-semibold block">software that keeps up.</span>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-2xl transform transition hover:scale-105 flex flex-col text-sm">
          <p className="text-gray-500 mb-4">
            Sales is messy, fast, and human. Most tools treat it like admin work, Hexa helps modern sales teams skip the noise and stay in motion—with instant summaries, smart nudges, and zero distractions.
          </p>
          <p className="text-gray-500 mb-2">We believe sales software should:</p>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Help teams move faster</li>
            <li>Surface what matters</li>
            <li>Stay out of the way</li>
          </ul>
          <p className="text-gray-600 mt-4 text-sm">That's what we're building. And we're just getting started.</p>
        </div>
      </section>

      {/* Principles Section */}
      <section className="mt-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex justify-center mb-6">
          <span className="inline-flex items-center gap-2 rounded-lg px-3 py-1 text-sm bg-blue-100 text-blue-500 h-10">
            <TbNotes /> Our principles
          </span>
        </div>
        <h2 className="text-center text-4xl sm:text-5xl font-bold text-black mb-16">
          The principles that shape <br />
          <span className="text-zinc-400">everything we ship.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 justify-items-center">
          <div className="flex flex-col items-center text-center gap-4">
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white border border-zinc-200">
              <i className="fa-solid fa-brain text-xl text-blue-400"></i>
            </div>
            <h3 className="text-lg font-semibold text-black">Clarity over control</h3>
            <p className="text-sm text-zinc-400">Tools should guide, not micromanage reps.</p>
          </div>

          <div className="flex flex-col items-center text-center gap-4">
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white border border-zinc-200">
              <TbUserHeart className="text-blue-500 text-xl" />
            </div>
            <h3 className="text-lg font-semibold text-black">Humans come first</h3>
            <p className="text-sm text-zinc-400">Sales is built on trust. Tech should follow.</p>
          </div>

          <div className="flex flex-col items-center text-center gap-4">
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white border border-zinc-200">
              <i className="fa-solid fa-chart-line text-xl text-blue-400"></i>
            </div>
            <h3 className="text-lg font-semibold text-black">Data must be useful</h3>
            <p className="text-sm text-zinc-400">Numbers are noise unless they drive action.</p>
          </div>

          <div className="flex flex-col items-center text-center gap-4">
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white border border-zinc-200">
              <i className="fa-solid fa-puzzle-piece text-xl text-blue-400"></i>
            </div>
            <h3 className="text-lg font-semibold text-black">Build with intent</h3>
            <p className="text-sm text-zinc-400">We don’t ship features we wouldn’t use daily.</p>
          </div>
        </div>
      </section>

      {/* proof section */}
        <section className="bg-[var(--color-gray-50)] py-24 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 lg:gap-16">

          {/* Left Column */}
          <div className="flex flex-col items-center lg:items-start w-full lg:w-1/2 bg-[var(--color-white)]/5 backdrop-blur border border-[var(--color-white)]/10 p-6 rounded-xl">
            <div className="inline-flex items-center gap-2 rounded-md bg-[var(--color-blue-500)]/10 px-4 py-1 text-[var(--color-blue-400)] text-sm font-medium border border-[var(--color-blue-500)]/20 mb-4">
              <RiGitBranchLine /> Proof in the Numbers
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-black)] leading-snug text-center lg:text-left">
              Real results from <br />
              <span className="block text-[var(--color-zinc-400)] text-2xl sm:text-3xl lg:text-3xl">
                real sales teams
              </span>
            </h2>

            <Link
              href="/customers"
              className="mt-6 rounded-full bg-[var(--color-white)] px-6 py-3 text-black hover:bg-[var(--color-blue-50)] border border-gray-500 text-sm sm:text-base"
            >
              View Customer Stories &gt;
            </Link>
          </div>

          {/* Right Column: Stats */}
          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center">

              {/* Stat 1 */}
              <div className="p-4 bg-[var(--color-white)]/5 border border-[var(--color-white)]/10 rounded-xl flex flex-col justify-between w-full max-w-xs mx-auto">
                <h3 className="text-3xl sm:text-4xl font-bold text-[var(--color-blue-500)]">2,300+</h3>
                <p className="mt-1 text-sm font-semibold text-[var(--color-zinc-800)]">Active Sellers</p>
                <p className="text-sm text-[var(--color-zinc-500)]">Reps using Hexa to close faster</p>
              </div>

              {/* Stat 2 */}
              <div className="p-4 bg-[var(--color-white)]/5 border border-[var(--color-white)]/10 rounded-xl flex flex-col justify-between w-full max-w-xs mx-auto">
                <h3 className="text-3xl sm:text-4xl font-bold text-[var(--color-blue-500)]">400%</h3>
                <p className="mt-1 text-sm font-semibold text-[var(--color-zinc-800)]">Time Saved per Week</p>
                <p className="text-sm text-[var(--color-zinc-500)]">Summary generation vs manual notes</p>
              </div>

              {/* Stat 3 */}
              <div className="p-4 bg-[var(--color-white)]/5 border border-[var(--color-white)]/10 rounded-xl flex flex-col justify-between w-full max-w-xs mx-auto">
                <h3 className="text-3xl sm:text-4xl font-bold text-[var(--color-blue-500)]">89%</h3>
                <p className="mt-1 text-sm font-semibold text-[var(--color-zinc-800)]">Follow-up Impact</p>
                <p className="text-sm text-[var(--color-zinc-500)]">From AI-personalized follow-up emails</p>
              </div>

              {/* Stat 4 */}
              <div className="p-4 bg-[var(--color-white)]/5 border border-[var(--color-white)]/10 rounded-xl flex flex-col justify-between w-full max-w-xs mx-auto">
                <h3 className="text-3xl sm:text-4xl font-bold text-[var(--color-blue-500)]">3.2x</h3>
                <p className="mt-1 text-sm font-semibold text-[var(--color-zinc-800)]">Pipeline Visibility</p>
                <p className="text-sm text-[var(--color-zinc-500)]">Improved forecasting and health scoring</p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* team section */}
     <section className="py-24 px-6">
       <div className="flex flex-wrap justify-center gap-y-8  mx-auto">
      {teamMembers.map((member, index) => (
        <div
          key={index}
          className="
            text-center
            w-full
            sm:w-[calc(50%-1rem)]
            md:w-[calc(33.333%-1.5rem)]
            lg:w-[calc(20%-2rem)]
          "
        >
          <div className="p-1 border border-gray-400 rounded-2xl mb-4 mx-auto w-59">
            <div className="aspect-square rounded-2xl overflow-hidden bg-zinc-200">
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <h3 className="font-semibold text-black">{member.name}</h3>
          <p className="text-sm text-zinc-500">{member.role}</p>
        </div>
      ))}
    </div>
      </section>

      {/* content belw team */}
      <section className="bg-[var(--color-blue-50)] p-10">
        <div className="mb-24 max-w-7xl mx-auto px-6 text-center">

          <div className="flex justify-center mb-8">
            <span className="inline-flex items-center gap-3 rounded-lg px-6 py-3 min-h-[48px] text-sm text-[var(--color-blue-500)] ">
              <i className="fa-solid fa-bolt text-[var(--color-blue-500)]"></i>
              Start Closing Faster
            </span>
          </div>
          <h2 className="text-center text-4xl sm:text-5xl font-bold text-[var(--color-black)] mb-6">
            Ready to close faster? <br />
            <span className="text-[var(--color-gray-400)]">Start your free trial today.</span>
          </h2>
          <p className="mx-auto max-w-xl text-base sm:text-lg text-[var(--color-zinc-400)] leading-relaxed mb-6">
            Try it free. No contacts, no credit card. Just results, from day one.
          </p>

          <div className="flex flex-col items-center gap-4 mb-4">
            <button className="rounded-full border border-[var(--color-gray-300)] px-5 py-2 text-sm h-12 w-47 bg-[var(--color-blue-400)] text-[var(--color-white)] font-bold hover:bg-[var(--color-blue-600)] transition">
              Start Your Free Trial &gt;
            </button>
            <a
              href="#"
              className="rounded-full border border-[var(--color-zinc-700)] px-6 py-3 text-sm font-semibold text-[var(--color-black)] transition hover:bg-[var(--color-zinc-900)] hover:text-[var(--color-white)]"
            >
              Book a Demo
            </a>
          </div>
        </div>
      </section>

    </section>
    </>
   
  );
}
