// export default function About() {
//   return (
// <section className="bg-white py-32 text-white">

//   {/* //About sec */}
//   <section>
//     <div className="mx-auto max-w-7xl px-6 py-24 text-center">

//       <div className="inline-flex w-30 h-10 items-center gap-2 mb-6 px-3 py-1 rounded-lg mx-auto bg-blue-100 text-blue-500 shadow-lg ">
//         <i className="fa-regular fa-user"></i>
//         <span className="font-medium text-sm">About Hexa</span>
//       </div>

//       <h1 className="text-4xl text-black font-bold tracking-tight sm:text-5xl lg:text-6xl">
//         We build tools for  
//         <span className="block mt-2 text-zinc-400">
//           real sellers,
//         </span>
//         not dashboards
//       </h1>

//       <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400">
//         CRMs were built for reports. We're building for reps - fast, focused, and AI-native. No fluff. No bloat. Just clarity where it matters
//       </p>

//       <div className="mt-10 flex justify-center gap-4">
//         <a
//           href="#"
//           className="rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
//         >
//          Meet the Team
//         </a>

//         <a
//           href="#"
//           className="rounded-full border border-zinc-700 px-6 py-3 text-sm font-semibold text-black transition hover:bg-zinc-900"
//         >
//           Book a Demo
//         </a>
//       </div>
//     </div>
//   </section>

 
//   {/* image  content */}
//   <section>
//    <div className="mt-16 flex justify-center p-2">
//   <div className="relative w-full max-w-5xl border border-gray-400 rounded-2xl p-1">
//     <img
//       src="/images/image1.avif"
//       alt="Hexa Illustration"
//       width={1600}
//       height={900}
//       className="w-full rounded-2xl shadow-2xl "
//     />
//   </div>
// </div>

//   </section>

//   {/* content below image section */}
//   <section>
//  <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl mx-auto px-6">

//   <div className="bg-white rounded-2xl p-8 shadow-2xl transform transition hover:scale-105 flex flex-col">

//     <div className="flex items-center gap-2 mb-4 px-3 py-1 rounded-lg bg-blue-100 text-blue-500 shadow-md text-sm w-max">
//       <TbTargetArrow />
//       <span className="font-medium text-sm">Our Mission</span>
//     </div>

//     <div className="flex flex-col gap-0 items-start">
//       <h1 className="text-3xl sm:text-4xl font-bold text-zinc-900 leading-snug mb-1">
//         Sales deserves
//       </h1>
//       <span className="text-blue-500 text-3xl sm:text-4xl font-semibold block">
//         software that keeps up.
//       </span>
//     </div>
//   </div>

//   {/* Right Box */}
//   <div className="bg-white rounded-2xl p-8 shadow-2xl transform transition hover:scale-105 flex flex-col text-sm">
//     <div className="flex flex-col items-start gap-2">

//       <p className="text-zinc-900 pl-0">
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi suscipit aperiam ab et, nemo beatae delectus repellendus iste aut explicabo, provident inventore officia vero odio.
//       </p>

//       <p className="font-semibold text-zinc-900">We believe sales software should:</p>

//       <ul className="list-none space-y-2">
//         <li className="flex items-center gap-2">
//           <span className="w-3 h-3 bg-gray-500 rounded-full inline-block"></span>
//           <span className="text-zinc-900">Help teams move faster</span>
//         </li>
//         <li className="flex items-center gap-2">
//           <span className="w-3 h-3 bg-gray-500 rounded-full inline-block"></span>
//           <span className="text-zinc-900">Surface what matters</span>
//         </li>
//         <li className="flex items-center gap-2">
//           <span className="w-3 h-3 bg-gray-500 rounded-full inline-block"></span>
//           <span className="text-zinc-900">Stay out of the way</span>
//         </li>
//       </ul>

//       <p className="text-zinc-500 text-sm">
//         That's what we're building. And we're just getting started.
//       </p>

//     </div>
//   </div>
// </div>
//   </section>

//   {/* rpinciple section */}
//   <section>
//     <div className="mt-24 max-w-7xl mx-auto px-6">

//       <div className="flex justify-center mb-6">
//         <span className="inline-flex items-center gap-2 rounded-lg  px-3 py-1 text-sm bg-blue-100 text-blue-500 h-10 w-35">
//         <TbNotes />
//           Our principles
//         </span>
//       </div>

//       <h2 className="text-center text-4xl sm:text-5xl font-bold text-black mb-16">
//         The principles that shape <br />
//         <span className="text-zinc-400">everything we ship.</span>
//       </h2>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

//         <div className="flex flex-col items-center text-center gap-4">
//           <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white border border-zinc-200">
//             <i className="fa-solid fa-brain text-xl text-blue-400"></i>
//           </div>
//           <h3 className="text-lg font-semibold text-black">Clarity over control</h3>
//           <p className="text-sm text-zinc-400">
//             Tools should guide, <br /> not micromanage reps.
//           </p>
//         </div>

//         <div className="flex flex-col items-center text-center gap-4">
//           <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white border border-zinc-200">
//              <TbUserHeart className="text-blue-500"/>
//           </div>
//           <h3 className="text-lg font-semibold text-black">Humans come first</h3>
//           <p className="text-sm text-zinc-400">
//             Sales is built on trust. <br /> Tech should follow.
//           </p>
//         </div>

//         <div className="flex flex-col items-center text-center gap-4">
//           <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white border border-zinc-200">
//              <i className="fa-solid fa-chart-line text-xl text-blue-400"></i>
//           </div>
//           <h3 className="text-lg font-semibold text-black">Data must be useful</h3>
//           <p className="text-sm text-zinc-400">
//             Numbers are noise <br /> unless they drive action.
//           </p>
//         </div>

//         <div className="flex flex-col items-center text-center gap-4">
//           <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white border border-zinc-200">
//             <i className="fa-solid fa-puzzle-piece text-xl text-blue-400"></i>
//           </div>
//           <h3 className="text-lg font-semibold text-black">Build with intent</h3>
//           <p className="text-sm text-zinc-400">
//             We don’t ship features <br /> we wouldn’t use daily.
//           </p>
//         </div>

//       </div>
//     </div>
//   </section>

// {/* //proof sec */}
//   <section>
//     <div className="mx-auto max-w-7xl px-6 py-24">

//       <div className="flex flex-col lg:flex-row gap-16">

//         <div className="flex flex-col items-start max-w-xl rounded-xl bg-white/5 backdrop-blur border border-white/10 p-6">

//           <div className="mb-6 inline-flex items-center gap-2 rounded-md bg-blue-500/10 px-4 py-1 text-blue-400 text-sm font-medium border border-blue-500/20">
//             <BiGitBranch />
//             Proof in the Numbers
//           </div>

//           <h2 className="text-4xl sm:text-5xl font-bold leading-tight text-black">
//             Real results from <br />
//             <span className="text-zinc-500 text-3xl mr-40">real sales teams</span>
//           </h2>

//           <button className="mt-8 inline-flex items-center gap-2 rounded-full border border-zinc-600 px-5 py-2 text-sm font-medium text-zinc-600 h-12  hover:bg-blue-500 hover:text-white  transform ">
//             View customer stories
//             <span>→</span>
//           </button>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8 flex-1 lg:ml-24 rounded-xl bg-white/5 backdrop-blur border border-white/10 p-6">

//           <div>
//             <h3 className="text-4xl font-bold text-blue-500">2,300+</h3>
//             <p className="mt-1 text-sm font-semibold text-gray-400">Active Sellers</p>
//             <p className="text-sm text-zinc-500">Reps using Hexa to close faster</p>
//           </div>

//           <div>
//             <h3 className="text-4xl font-bold text-blue-500">400%</h3>
//             <p className="mt-1 text-sm font-semibold text-gray-400">Time Saved per Week</p>
//             <p className="text-sm text-zinc-500">Summary generation vs manual notes</p>
//           </div>

//           <div>
//             <h3 className="text-4xl font-bold text-blue-500">89%</h3>
//             <p className="mt-1 text-sm font-semibold text-gray-400">Follow-up Impact</p>
//             <p className="text-sm text-zinc-500">From AI-personalized follow-up emails</p>
//           </div>

//           <div>
//             <h3 className="text-4xl font-bold text-blue-500">3.2x</h3>
//             <p className="mt-1 text-sm font-semibold text-gray-400">Pipeline Visibility</p>
//             <p className="text-sm text-zinc-500">Improved forecasting and health scoring</p>
//           </div>

//         </div>
//       </div>
//     </div>
//   </section>

//   {/* team sec */}
//   <section>
//    <div className="mx-auto max-w-7xl px-6 py-24">

//   <div className="flex justify-center">
//     <div className="mb-6 inline-flex items-center gap-2 rounded-md bg-blue-500/10 px-4 py-1 text-blue-400 text-sm font-bold border border-blue-500/20">
//       <svg className="w-4 h-8" fill="currentColor" viewBox="0 0 24 24">
//         <path d="M16 11c1.66 0 3-1.34 3-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zM8 11c1.66 0 3-1.34 3-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5C15 14.17 10.33 13 8 13zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
//       </svg>
//       The Team Behind Hexa
//     </div>
//   </div>

//     <div className="flex flex-col items-center text-center gap-6 mb-16">
//    <h2 className="text-4xl text-black sm:text-5xl font-bold max-w-full whitespace-nowrap">
//     Meet the people who <span className="text-zinc-500 inline">build the magic</span>
//     </h2>

//     <button className="rounded-full border border-zinc-300 px-5 py-2 text-sm font-medium text-zinc-900 hover:bg-zinc-100 transition h-11 w-40">
//         Join the team  &gt;
//     </button>
//     </div>

//     {/* team box img */}
// <div className="max-w-7xl mx-auto px-6 py-24 space-y-12">

 
//   <div className="grid grid-cols-1  md:grid-cols-5 gap-8 justify-center">
    
//     <div className="text-center">
//       <div className="p-1 border border-gray-400 rounded-2xl mb-4">
//         <div className="aspect-square rounded-2xl overflow-hidden bg-zinc-200">
//           <img src="/images/img2.avif" alt="Julian Ford" className="w-full h-full object-cover" />
//         </div>
//       </div>
//       <h3 className="font-semibold text-black">Julian Ford</h3>
//       <p className="text-sm text-zinc-500">Head of Marketing</p>
//     </div>
    
//     <div className="text-center">
//       <div className="p-1 border border-gray-400 rounded-2xl mb-4">
//         <div className="aspect-square rounded-2xl overflow-hidden bg-purple-200">
//           <img src="/images/img3.webp" alt="Brooke Williams" className="w-full h-full object-cover" />
//         </div>
//       </div>
//       <h3 className="font-semibold text-black">Brooke Williams</h3>
//       <p className="text-sm text-zinc-500">Customer Success Manager</p>
//     </div>
    
//     <div className="text-center">
//       <div className="p-1 border border-gray-400 rounded-2xl mb-4">
//         <div className="aspect-square rounded-2xl overflow-hidden bg-indigo-200">
//           <img src="/images/img4.webp" alt="Daniel Reyes" className="w-full h-full object-cover" />
//         </div>
//       </div>
//       <h3 className="font-semibold text-black">Daniel Reyes</h3>
//       <p className="text-sm text-zinc-500">Product Designer</p>
//     </div>
   
//     <div className="text-center">
//       <div className="p-1 border border-gray-400 rounded-2xl mb-4">
//         <div className="aspect-square rounded-2xl overflow-hidden bg-rose-200">
//           <img src="/images/img5.webp" alt="Lara Zhou" className="w-full h-full object-cover" />
//         </div>
//       </div>
//       <h3 className="font-semibold text-black">Lara Zhou</h3>
//       <p className="text-sm text-zinc-500">AI/ML Engineer</p>
//     </div>
    
//     <div className="text-center">
//       <div className="p-1 border border-gray-400 rounded-2xl mb-4">
//         <div className="aspect-square rounded-2xl overflow-hidden bg-zinc-300">
//           <img src="/images/img6.avif" alt="Taylor Nguyen" className="w-full h-full object-cover" />
//         </div>
//       </div>
//       <h3 className="font-semibold text-black">Taylor Nguyen</h3>
//       <p className="text-sm text-zinc-500">Backend Engineer</p>
//     </div>
//   </div>
// </div>
 
//   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 justify-center mx-auto max-w-[70%]">
    
//     <div className="text-center">
//       <div className="p-1 border border-gray-400 rounded-2xl mb-4">
//         <div className="aspect-square rounded-2xl overflow-hidden bg-emerald-200">
//           <img src="/images/img7.avif" alt="Aiden Collins" className="w-full h-full object-cover" />
//         </div>
//       </div>
//       <h3 className="font-semibold text-black">Aiden Collins</h3>
//       <p className="text-sm text-zinc-500">Frontend Engineer</p>
//     </div>
    
//     <div className="text-center">
//       <div className="p-1 border border-gray-400 rounded-2xl mb-4">
//         <div className="aspect-square rounded-2xl overflow-hidden bg-sky-200">
//           <img src="/images/img8.avif" alt="Sofia Martinez" className="w-full h-full object-cover" />
//         </div>
//       </div>
//       <h3 className="font-semibold text-black">Sofia Martinez</h3>
//       <p className="text-sm text-zinc-500">Product Manager</p>
//     </div>
    
//     <div className="text-center">
//       <div className="p-1 border border-gray-400 rounded-2xl mb-4">
//         <div className="aspect-square rounded-2xl overflow-hidden bg-amber-200">
//           <img src="/images/img9.avif" alt="Ethan Park" className="w-full h-full object-cover" />
//         </div>
//       </div>
//       <h3 className="font-semibold text-black">Ethan Park</h3>
//       <p className="text-sm text-zinc-500">Growth Analyst</p>
//     </div>
  
//     <div className="text-center">
//       <div className="p-1 border border-gray-400 rounded-2xl mb-4">
//         <div className="aspect-square rounded-2xl overflow-hidden bg-teal-200">
//           <img src="/images/img10.avif" alt="Maya Patel" className="w-full h-full object-cover" />
//         </div>
//       </div>
//       <h3 className="font-semibold text-black">Maya Patel</h3>
//       <p className="text-sm text-zinc-500">UX Researcher</p>
//     </div>
//   </div>
//   </div>

//   </section>

// {/*   content below team sec */}
// <section className="bg-blue-50 p-10">
//   <div className="mb-24 max-w-7xl mx-auto px-6 text-center">

//     <div className="flex justify-center mb-8">
//       <span className="inline-flex items-center gap-3 rounded-lg  px-6 py-3 min-h-[48px] text-sm text-blue-500 ">
//         <i className="fa-solid fa-bolt text-blue-500"></i>
//         Start Closing Faster
//       </span>
//     </div>
//     <h2 className="text-center text-4xl sm:text-5xl font-bold text-black mb-6">
//       Ready to close faster? <br></br>
//       <span className="text-gray-500">Start your free trial today.</span>
//     </h2>
//     <p className="mx-auto max-w-xl text-base sm:text-lg text-zinc-400 leading-relaxed mb-6">
//       Try it free. No contacts, no credit card. Just results, from day one.
//     </p>
//     <div className="flex flex-col items-center gap-4 mb-4">
//       <button className="rounded-full border border-zinc-300 px-5 py-2 text-sm  h-12 w-47  bg-blue-400 text-white font-bold hover:bg-blue-600 transition">
//         Start Your Free Trial &gt;
//       </button>
//       <a
//         href="#"
//         className="rounded-full border border-zinc-700 px-6 py-3 text-sm font-semibold text-black transition hover:bg-zinc-900 hover:text-white"
//       >
//         Book a Demo
//       </a>
//     </div>
//     <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-8 text-gray-500 text-sm">
//       <div className="flex items-center gap-2">
//         <i className="fa-solid fa-users text-blue-500"></i><span>Used by <b>2,300+</b> teams</span>
//       </div>

//       <div className="flex items-center gap-2">
//        <i className="fa-solid fa-x text-blue-500"></i> <span>Cancel anytime, no risk</span>
//       </div>

//       <div className="flex items-center gap-2">
//         <i className="fa-solid fa-user text-blue-500"></i> <span><b>97%</b> user retention after 30 days</span>
//       </div>
//     </div>


//   </div>
// </section>

// </section>


//   );
// }




// "use client";
// import { useState, useEffect } from "react";
// import { usePathname, useRouter } from "next/navigation";
// import { TbTargetArrow, TbNotes, TbUserHeart } from "react-icons/tb";
// import { RiGitBranchLine } from "react-icons/ri";
// import { FaXTwitter, FaInstagram, FaLinkedin, FaGithub, FaYoutube } from "react-icons/fa6";

// export default function About() {
// const router = useRouter();
// const pathname = usePathname();
// const [showCustomersOnly, setShowCustomersOnly] = useState(false);

// useEffect(() => {
//     if (pathname === "/customers") {
//       setShowCustomersOnly(true);
//     } 
//     else {
//       setShowCustomersOnly(false);
//     }
//   }, [pathname]);

//   const goToCustomers = () => {
//     // Update URL without reloading page
//     router.push("/customers") 
//     setShowCustomersOnly(true); // Show customers section
//   };

//   const backToAbout = () => {
//     router.push("/")
//     setShowCustomersOnly(false);
//   };

//   return (
//     <>
//     {showCustomersOnly ? (
//         // Only customer section
//         <section id="customers" className="scroll-mt-24 p-10 bg-[var(--color-blue-50)]">
//             <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
//               <h1 className="leading-tight text-3xl sm:text-4xl lg:text-6xl font-bold text-[var(--color-black)] tracking-tight">
//                 We build tools for <span className="text-[var(--color-zinc-500)]">real</span> sellers, not dashboards
//               </h1>
//               <p className="sm:mt-6 mx-auto max-w-xl sm:max-w-2xl text-base sm:text-lg text-[var(--color-zinc-600)]">
//                 CRMs were built for reports. We're building for reps – fast, focused, and AI-native.
//                 <br />
//                 No fluff. No bloat. Just clarity where it matters.
//               </p>
//               <button
//                 onClick={backToAbout}
//                 className="mt-6 px-6 py-3 bg-[var(--color-blue-500)] text-white rounded-lg hover:bg-[var(--color-blue-400)]"
//               >
//                 Back to About
//               </button>
//             </div>
//         </section>
// ) : (

// <section className="bg-[var(--color-white)] py-32 text-[var(--color-white)]">

//   {/* about section */}
//   <section>
//   <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
//     <div className="inline-flex items-center gap-2 mb-4 sm:mb-6 px-3 py-1 rounded-lg bg-[var(--color-blue-100)] text-[var(--color-blue-500)] shadow-md text-sm sm:text-base">
//       <i className="fa-regular fa-user"></i>
//       <span className="font-medium">About Hexa</span>
//     </div>

//    <h1 className="leading-tight text-3xl sm:text-4xl lg:text-6xl font-bold text-[var(--color-black)] tracking-tight">
//       We build tools for  <span className="text-[var(--color-zinc-500)]"> real</span>
//       <span className="block -mt-1 sm:-mt-2">
//     <span className="text-[var(--color-zinc-500)]"> sellers, </span>
//     not dashboards
//     </span>
//     </h1>

//     <p className=" sm:mt-6 mx-auto max-w-xl sm:max-w-2xl text-base sm:text-lg text-[var(--color-zinc-600)]">
//       CRMs were built for reports. We're building<br></br> for reps – fast, focused, and AI-native. No <br></br> fluff. No bloat. Just clarity where it matters.
//     </p>

//     <div className="mt-6 sm:mt-10 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
//       <a
//         href="#"
//         className="w-full sm:w-auto rounded-full bg-[var(--color-blue-500)] px-6 py-3 text-sm sm:text-base font-semibold text-white transition hover:bg-[var(--color-blue-400)]"
//       >
//         Meet the Team
//       </a>
//       <a
//         href="#"
//         className="w-full sm:w-auto rounded-full border border-[var(--color-zinc-700)] px-6 py-3 text-sm sm:text-base font-semibold text-[var(--color-black)] transition hover:bg-[var(--color-zinc-900)] hover:text-white"
//       >
//         Book a Demo
//       </a>
//     </div>

//   </div>
// </section>


//   {/* img section */}
//   <section>
//     <div className="mt-16 flex justify-center p-2">
//       <div className="relative w-full max-w-5xl border border-[var(--color-gray-400)] rounded-2xl p-1">
//         <img
//           src="/images/image1.avif"
//           alt="Hexa Illustration"
//           width={1600}
//           height={900}
//           className="w-full rounded-2xl shadow-2xl "
//         />
//       </div>
//     </div>
//   </section>

//   {/* content below image */}
//   <section>
//     <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl mx-auto px-6">

//       <div className="bg-[var(--color-white)] rounded-2xl p-8 shadow-2xl transform transition hover:scale-105 flex flex-col">

//         <div className="flex items-center gap-2 mb-4 px-3 py-1 rounded-lg bg-[var(--color-blue-100)] text-[var(--color-blue-500)] shadow-md text-sm w-max">
//           <TbTargetArrow />
//           <span className="font-medium text-sm">Our Mission</span>
//         </div>

//         <div className="flex flex-col gap-0 items-start">
//           <h1 className="text-3xl sm:text-4xl font-bold text-[var(--color-zinc-900)] leading-snug mb-1">
//             Sales deserves
//           </h1>
//           <span className="text-[var(--color-gray-500)] text-3xl sm:text-4xl font-semibold block">
//             software that keeps up.
//           </span>
//         </div>
//       </div>

//       {/* Right Box */}
//       <div className="bg-[var(--color-white)] rounded-2xl p-8 shadow-2xl transform transition hover:scale-105 flex flex-col text-sm">
//         <div className="flex flex-col items-start gap-2">

//           <p className="text-[1rem] text-[var(--color-gray-500)] pl-0">
//               Sales is messy, fast, and human. Most tools treat it<br/> like admin work, Hexa helps modern sales teams<br/> skip the noise and stay in motion-with instant<br/> summaries, smart nudges, and zero distractions.
//           </p>

//           <p className=" text-[1.1rem] text-[var(--color-gray-500)]">We believe sales software should:</p>

//           <ul className="list-none space-y-2">
//             <li className="flex items-center gap-2">
//               <span className="w-2 h-2 bg-[var(--color-gray-500)] rounded-full inline-block"></span>
//               <span className="text-[var(--color-gray-600)]">Help teams move faster</span>
//             </li>
//             <li className="flex items-center gap-2">
//               <span className="w-2 h-2 bg-[var(--color-gray-500)] rounded-full inline-block"></span>
//               <span className="text-[var(--color-gray-600)]">Surface what matters</span>
//             </li>
//             <li className="flex items-center gap-2">
//               <span className="w-2 h-2 bg-[var(--color-gray-500)] rounded-full inline-block"></span>
//               <span className="text-[var(--color-gray-600)]">Stay out of the way</span>
//             </li>
//           </ul>

//           <p className="text-[var(--color-gray-600)] text-sm">
//             That's what we're building. And we're just getting started.
//           </p>

//         </div>
//       </div>
//     </div>
//   </section>

//   {/* rpinciples section */}
//   <section>
//     <div className="mt-24 max-w-7xl mx-auto px-6">

//       <div className="flex justify-center mb-6">
//         <span className="inline-flex items-center gap-2 rounded-lg px-3 py-1 text-sm bg-[var(--color-blue-100)] text-[var(--color-blue-500)] h-10 w-35">
//           <TbNotes />
//           Our principles
//         </span>
//       </div>

//       <h2 className="text-center text-4xl sm:text-5xl font-bold text-[var(--color-black)] mb-16">

//         The principles that shape <br />
//         <span className="text-[var(--color-zinc-400)]">everything we ship.</span>
//       </h2>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

//         <div className="flex flex-col items-center text-center gap-4">
//           <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[var(--color-white)] border border-[var(--color-zinc-200)]">
//             <i className="fa-solid fa-brain text-xl text-[var(--color-blue-400)]"></i>
//           </div>
//           <h3 className="text-lg font-semibold text-[var(--color-black)]">Clarity over control</h3>
//           <p className="text-sm text-[var(--color-zinc-400)]">
//             Tools should guide, <br /> not micromanage reps.
//           </p>
//         </div>

//         <div className="flex flex-col items-center text-center gap-4">
//           <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[var(--color-white)] border border-[var(--color-zinc-200)]">
//              <TbUserHeart className="text-[var(--color-blue-500)]"/>
//           </div>
//           <h3 className="text-lg font-semibold text-[var(--color-black)]">Humans come first</h3>
//           <p className="text-sm text-[var(--color-zinc-400)]">
//             Sales is built on trust. <br /> Tech should follow.
//           </p>
//         </div>

//         <div className="flex flex-col items-center text-center gap-4">
//           <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[var(--color-white)] border border-[var(--color-zinc-200)]">
//              <i className="fa-solid fa-chart-line text-xl text-[var(--color-blue-400)]"></i>
//           </div>
//           <h3 className="text-lg font-semibold text-[var(--color-black)]">Data must be useful</h3>
//           <p className="text-sm text-[var(--color-zinc-400)]">
//             Numbers are noise <br /> unless they drive action.
//           </p>
//         </div>

//         <div className="flex flex-col items-center text-center gap-4">
//           <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[var(--color-white)] border border-[var(--color-zinc-200)]">
//             <i className="fa-solid fa-puzzle-piece text-xl text-[var(--color-blue-400)]"></i>
//           </div>
//           <h3 className="text-lg font-semibold text-[var(--color-black)]">Build with intent</h3>
//           <p className="text-sm text-[var(--color-zinc-400)]">
//             We don’t ship features <br /> we wouldn’t use daily.
//           </p>
//         </div>

//       </div>
//     </div>
//   </section>

//   {/* proof section */}
//   <section>

//     <div className="mx-auto max-w-7xl px-6 py-24">

//       <div className="flex flex-col lg:flex-row gap-16">

//         <div className="flex flex-col items-start max-w-xl rounded-xl bg-[var(--color-white)]/5 backdrop-blur border border-[var(--color-white)]/10 p-6">

//           <div className="mb-6 inline-flex items-center gap-2 rounded-md bg-[var(--color-blue-500)]/10 px-4 py-1 text-[var(--color-blue-400)] text-sm font-medium border border-[var(--color-blue-500)]/20">
//             <RiGitBranchLine />

//             Proof in the Numbers
//           </div>

//           <h2 className="text-4xl sm:text-5xl font-bold leading-tight text-[var(--color-black)]">
//             Real results from <br />
//             <span className="text-[var(--color-zinc-400)] text-3xl mr-40">real sales teams</span>
//           </h2>

//           <button
//             onClick={() => setShowCustomersOnly(true)}
//             className="cursor-pointer mt-6 rounded-full bg-[var(--color-white)] px-6 py-3 text-black hover:bg-[var(--color-blue-50)] border border-gray-500">View Customer Stories &gt;
//           </button>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8 flex-1 lg:ml-24 rounded-xl bg-[var(--color-white)]/5 backdrop-blur border border-[var(--color-white)]/10 p-6">
//           <div>
//             <h3 className="text-4xl font-bold text-[var(--color-blue-500)]">2,300+</h3>
//             <p className="mt-1 text-sm font-semibold text-[var(--color-zinc-800)]">Active Sellers</p>
//             <p className="text-sm text-[var(--color-zinc-500)]">Reps using Hexa to close faster</p>
//           </div>

//           <div>
//             <h3 className="text-4xl font-bold text-[var(--color-blue-500)]">400%</h3>
//             <p className="mt-1 text-sm font-semibold text-[var(--color-zinc-800)]">Time Saved per Week</p>
//             <p className="text-sm text-[var(--color-zinc-500)]">Summary generation vs manual notes</p>
//           </div>

//           <div>
//             <h3 className="text-4xl font-bold text-[var(--color-blue-500)]">89%</h3>
//             <p className="mt-1 text-sm font-semibold text-[var(--color-zinc-800)]">Follow-up Impact</p>
//             <p className="text-sm text-[var(--color-zinc-500)]">From AI-personalized follow-up emails</p>
//           </div>

//           <div>
//             <h3 className="text-4xl font-bold text-[var(--color-blue-500)]">3.2x</h3>
//             <p className="mt-1 text-sm font-semibold text-[var(--color-zinc-800)]">Pipeline Visibility</p>
//             <p className="text-sm text-[var(--color-zinc-500)]">Improved forecasting and health scoring</p>
//           </div>
//         </div>

//       </div>
//     </div>

//   </section>

//   {/* team section */}
//   <section>
//     <div className="mx-auto max-w-7xl px-6 py-24">
//       <div className="flex justify-center">
//         <div className="mb-6 inline-flex items-center gap-2 rounded-md bg-[var(--color-blue-500)]/10 px-4 py-1 text-[var(--color-blue-400)] text-sm font-bold border border-[var(--color-blue-500)]/20">
//           <svg className="w-4 h-8" fill="currentColor" viewBox="0 0 24 24">
//             <path d="M16 11c1.66 0 3-1.34 3-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zM8 11c1.66 0 3-1.34 3-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5C15 14.17 10.33 13 8 13zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
//           </svg>
//           The Team Behind Hexa
//         </div>
//       </div>

//       <div className="flex flex-col items-center text-center gap-6 mb-16">
//         <h2 className="text-4xl text-[var(--color-black)] sm:text-5xl font-bold max-w-full whitespace-nowrap">
//           Meet the people who <span className="text-[var(--color-zinc-500)] inline">build the magic</span>
//         </h2>

//         <button className="rounded-full border border-[var(--color-zinc-300)] px-5 py-2 text-sm font-medium text-[var(--color-zinc-900)] hover:bg-[var(--color-zinc-100)] transition h-11 w-40">
//             Join the team  &gt;
//         </button>
//       </div>

//       {/* member box */}
//       <div className="max-w-7xl mx-auto px-6 py-24 space-y-12">

//         <div className="grid grid-cols-1 md:grid-cols-5 gap-8 justify-center">
//             <div className="text-center">
//               <div className="p-1 border border-[var(--color-gray-400)] rounded-2xl mb-4">
//                 <div className="aspect-square rounded-2xl overflow-hidden bg-[var(--color-zinc-200)]">
//                   <img src="/images/img2.avif" alt="Julian Ford" className="w-full h-full object-cover" />
//                 </div>
//               </div>
//               <h3 className="font-semibold text-[var(--color-black)]">Julian Ford</h3>
//               <p className="text-sm text-[var(--color-zinc-500)]">Head of Marketing</p>
//             </div>

//             <div className="text-center">
//               <div className="p-1 border border-[var(--color-gray-400)] rounded-2xl mb-4">
//                 <div className="aspect-square rounded-2xl overflow-hidden bg-[var(--color-zinc-200)]">
//                   <img src="/images/img3.webp" alt="Brooke Williams" className="w-full h-full object-cover" />
//                 </div>
//               </div>
//               <h3 className="font-semibold text-[var(--color-black)]">Brooke Williams</h3>
//               <p className="text-sm text-[var(--color-zinc-500)]">Customer Success Manager</p>
//             </div>

//             <div className="text-center">
//               <div className="p-1 border border-[var(--color-gray-400)] rounded-2xl mb-4">
//                 <div className="aspect-square rounded-2xl overflow-hidden bg-[var(--color-zinc-200)]">
//                   <img src="/images/img4.webp" alt="Daniel Reyes" className="w-full h-full object-cover" />
//                 </div>
//               </div>
//               <h3 className="font-semibold text-[var(--color-black)]">Daniel Reyes</h3>
//               <p className="text-sm text-[var(--color-zinc-500)]">Product Designer</p>
//             </div>

//             <div className="text-center">
//               <div className="p-1 border border-[var(--color-gray-400)] rounded-2xl mb-4">
//                 <div className="aspect-square rounded-2xl overflow-hidden bg-[var(--color-zinc-200)]">
//                   <img src="/images/img5.webp" alt="Lara Zhou" className="w-full h-full object-cover" />
//                 </div>
//               </div>
//               <h3 className="font-semibold text-[var(--color-black)]">Lara Zhou</h3>
//               <p className="text-sm text-[var(--color-zinc-500)]">AI/ML Engineer</p>
//             </div>

//             <div className="text-center">
//               <div className="p-1 border border-[var(--color-gray-400)] rounded-2xl mb-4">
//                 <div className="aspect-square rounded-2xl overflow-hidden bg-[var(--color-zinc-200)]">
//                   <img src="/images/img6.avif" alt="Taylor Nguyen" className="w-full h-full object-cover" />
//                 </div>
//               </div>
//               <h3 className="font-semibold text-[var(--color-black)]">Taylor Nguyen</h3>
//               <p className="text-sm text-[var(--color-zinc-500)]">Backend Engineer</p>
//             </div>
//           </div>
//                         {/* //first 5 */}
//             <div className="grid grid-cols-1 sm:grid-cols-4 gap-8 justify-center mx-auto max-w-[70%]">
//                   <div className="text-center">
//                     <div className="p-1 border border-[var(--color-gray-400)] rounded-2xl mb-4">
//                       <div className="aspect-square rounded-2xl overflow-hidden bg-[var(--color-emerald-200)]">
//                         <img src="/images/img7.avif" alt="Aiden Collins" className="w-full h-full object-cover" />
//                       </div>
//                     </div>
//                     <h3 className="font-semibold text-[var(--color-black)]">Aiden Collins</h3>
//                     <p className="text-sm text-[var(--color-zinc-500)]">Frontend Engineer</p>
//                   </div>

//                   <div className="text-center">
//                     <div className="p-1 border border-[var(--color-gray-400)] rounded-2xl mb-4">
//                       <div className="aspect-square rounded-2xl overflow-hidden bg-[var(--color-sky-200)]">
//                         <img src="/images/img8.avif" alt="Sofia Martinez" className="w-full h-full object-cover" />
//                       </div>
//                     </div>
//                     <h3 className="font-semibold text-[var(--color-black)]">Sofia Martinez</h3>
//                     <p className="text-sm text-[var(--color-zinc-500)]">Product Manager</p>
//                   </div>

//                   <div className="text-center">
//                     <div className="p-1 border border-[var(--color-gray-400)] rounded-2xl mb-4">
//                       <div className="aspect-square rounded-2xl overflow-hidden bg-[var(--color-amber-200)]">
//                         <img src="/images/img9.avif" alt="Ethan Park" className="w-full h-full object-cover" />
//                       </div>
//                     </div>
//                     <h3 className="font-semibold text-[var(--color-black)]">Ethan Park</h3>
//                     <p className="text-sm text-[var(--color-zinc-500)]">Growth Analyst</p>
//                   </div>

//                   <div className="text-center">
//                     <div className="p-1 border border-[var(--color-gray-400)] rounded-2xl mb-4">
//                       <div className="aspect-square rounded-2xl overflow-hidden bg-[var(--color-teal-200)]">
//                         <img src="/images/img10.avif" alt="Maya Patel" className="w-full h-full object-cover" />
//                       </div>
//                     </div>
//                     <h3 className="font-semibold text-[var(--color-black)]">Maya Patel</h3>
//                     <p className="text-sm text-[var(--color-zinc-500)]">UX Researcher</p>
//                   </div>
//                 </div>
//         </div>
//       </div>

//   </section>

//   {/* content belw team */}
//   <section className="bg-[var(--color-blue-50)] p-10">
//     <div className="mb-24 max-w-7xl mx-auto px-6 text-center">

//       <div className="flex justify-center mb-8">
//         <span className="inline-flex items-center gap-3 rounded-lg px-6 py-3 min-h-[48px] text-sm text-[var(--color-blue-500)] ">
//           <i className="fa-solid fa-bolt text-[var(--color-blue-500)]"></i>
//           Start Closing Faster
//         </span>
//       </div>
//       <h2 className="text-center text-4xl sm:text-5xl font-bold text-[var(--color-black)] mb-6">
//         Ready to close faster? <br />
//         <span className="text-[var(--color-gray-400)]">Start your free trial today.</span>
//       </h2>
//       <p className="mx-auto max-w-xl text-base sm:text-lg text-[var(--color-zinc-400)] leading-relaxed mb-6">
//         Try it free. No contacts, no credit card. Just results, from day one.
//       </p>

//       <div className="flex flex-col items-center gap-4 mb-4">
//         <button className="rounded-full border border-[var(--color-gray-300)] px-5 py-2 text-sm h-12 w-47 bg-[var(--color-blue-400)] text-[var(--color-white)] font-bold hover:bg-[var(--color-blue-600)] transition">
//           Start Your Free Trial &gt;
//         </button>
//         <a
//           href="#"
//           className="rounded-full border border-[var(--color-zinc-700)] px-6 py-3 text-sm font-semibold text-[var(--color-black)] transition hover:bg-[var(--color-zinc-900)] hover:text-[var(--color-white)]"
//         >
//           Book a Demo
//         </a>
//       </div>
//     </div>
//   </section>

// {/* //pre footer cont */}
//     <section className="bg-[var(--color-blue-50)] border-t border-gray-200">
//       <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-5 gap-12">

//         <div className="md:col-span-1">
//           <h2 className="text-xl font-semibold text-gray-900">Hexa</h2>
//           <p className="inline-flex mt-4 text-sm text-gray-600 whitespace-nowrap">
//             Built for the teams shaping tomorrow.
//           </p>

//         <div className=" flex gap-3 mt-6">
//           <div className=" bg-[var(--color-white)] w-9 h-9 flex items-center justify-center rounded-md border border-gray-300 text-gray-600 hover:bg-gray-100 cursor-pointer">
//               <FaXTwitter className="text-lg" />
//           </div>

//           <div className=" bg-[var(--color-white)] w-9 h-9 flex items-center justify-center rounded-md border border-gray-300 text-gray-600 hover:bg-gray-100 cursor-pointer">
//             <FaInstagram  className="text-lg" />
//           </div>

//           <div className="bg-[var(--color-white)] w-9 h-9 flex items-center justify-center rounded-md border border-gray-300 text-gray-600 hover:bg-gray-100 cursor-pointer">
//             <FaLinkedin  className="text-lg" />
//           </div>

//           <div className="bg-[var(--color-white)] w-9 h-9 flex items-center justify-center rounded-md border border-gray-300 text-gray-600 hover:bg-gray-100 cursor-pointer">
//             <FaGithub className="text-lg" />
//           </div>

//           <div className="bg-[var(--color-white)]  w-9 h-9 flex items-center justify-center rounded-md border border-gray-300 text-gray-600 hover:bg-gray-100 cursor-pointer">
//             <FaYoutube className="text-lg" />
//           </div>
//       </div>
//       <select className="mt-5 rounded-md px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
//       <option value="en" selected>English</option>
//     </select>

//       </div>

//         <div className="ml-10">
//               <h4 className="text-sm font-semibold text-gray-900 mb-4">Features</h4>
//               <ul className="space-y-3 text-sm text-gray-600">
//                 <li className="cursor-pointer hover:text-blue-600 transition">AI Assist
//                   <span className="inline-flex w-10 h-6 items-center justify-center ml-2 text-xs rounded-full bg-blue-500 text-white">
//                       New
//                   </span>

//                 </li>
//                 <li className="cursor-pointer hover:text-blue-600 transition">Automation</li>
//                 <li className="cursor-pointer hover:text-blue-600 transition">Pipeline Intelligence</li>
//                 <li className="cursor-pointer hover:text-blue-600 transition">Collaboration</li>
//                 <li className="cursor-pointer hover:text-blue-600 transition">Pricing</li>
//               </ul>
//         </div>

//         <div>
//           <h4 className="text-sm font-semibold text-gray-900 mb-4">Use Cases</h4>
//           <ul className="space-y-3 text-sm text-gray-600">
//             <li className="cursor-pointer hover:text-blue-600 transition">Founders</li>
//             <li className="cursor-pointer hover:text-blue-600 transition">Sales teams</li>
//             <li className="cursor-pointer hover:text-blue-600 transition">RevOps</li>
//             <li className="cursor-pointer hover:text-blue-600 transition">Agencies</li>
//           </ul>
//         </div>

//         <div>
//           <h4 className="text-sm font-semibold text-gray-900 mb-4">Resources</h4>
//           <ul className="space-y-3 text-sm text-gray-600">
//             <li className="cursor-pointer hover:text-blue-600 transition">Blog</li>
//             <li className="cursor-pointer hover:text-blue-600 transition">Changelog</li>
//             <li className="cursor-pointer hover:text-blue-600 transition">Customers</li>
//           </ul>
//         </div>

//         <div>
//           <h4 className="text-sm font-semibold text-gray-900 mb-4">Company</h4>
//           <ul className="space-y-3 text-sm text-gray-600">
//             <li className="cursor-pointer hover:text-blue-600 transition">About</li>
//             <li className="cursor-pointer hover:text-blue-600 transition">Careers</li>
//             <li className="cursor-pointer hover:text-blue-600 transition">Contact sales</li>
//             <li className="cursor-pointer hover:text-blue-600 transition">Contact support</li>
//           </ul>
//         </div>

//       </div>
//     </section>

// </section>
// )}
// </>
//   );
// }
