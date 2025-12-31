'use client';
import { FiVolume2 } from 'react-icons/fi';
import { HiSparkles } from 'react-icons/hi';
import LogoLoop from '../../components/LogoLoop';
import { useState } from "react";

const imageLogos = [
  { src: "/assets/images/client-1.jpeg", className: "bg-white p-2 rounded-lg", alt: "clients-1", href: "" },
  { src: "/assets/images/client-2.jpeg", className: "bg-white p-2 rounded-lg", alt: "clients-2", href: "" },
  { src: "/assets/images/client-3.jpeg", className: "bg-white p-2 rounded-lg", alt: "clients-3", href: "" },
  { src: "/assets/images/client-4.jpeg", className: "bg-white p-2 rounded-lg", alt: "clients-4", href: "" },
  { src: "/assets/images/client-5.jpeg", className: "bg-white p-2 rounded-lg", alt: "clients-5", href: "" },
  { src: "/assets/images/client-6.jpeg", className: "bg-white p-2 rounded-lg", alt: "clients-6", href: "" },
];



export default function Contact() {

  
  const [name,setName] = useState("");
  const [nameError, setNameError] = useState(false);

  const [email,setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [emailPatternError, setEmailPatternError] = useState(false);

  const [companyName, setCompanyName] = useState("");
  const [companyNameError, setCompanyNameError] = useState(false);

  const [companyWebsite, setCompanyWebsite] = useState("");
  const [companyWebsiteError, setCompanyWebsiteError] = useState(false);
  const [companyWebsitePatternError, setCompanyWebsitePatternError] = useState(false);

  const [region, setRegion] = useState("");
  const [regionError, setRegionError] = useState(false);

  const [companyCategory, setCompanyCategory] = useState("");
  const [companyCategoryError, setCompanyCategoryError] = useState(false);

  const [teamSize, setTeamSize] = useState("");
  const [teamSizeError, setTeamSizeError] = useState(false);

  const [jobFunction, setJobFunction] = useState("");
  const [jobFunctionError, setJobFunctionError] = useState(false);

  const [roleSeniority, setRoleSeniority] = useState("");
  const [roleSeniorityError, setRoleSeniorityError] = useState(false);

  const [aboutUs, setAboutUs] = useState("");
  const [aboutUsError, setAboutUsError] = useState(false);

  const handleName = (event:any) => {
    setName(event.target.value); 
  };
  const handleEmail = (event:any) => {
    setEmail(event.target.value); 
  };
  const handleCompanyName = (event:any) => {
    setCompanyName(event.target.value); 
  };
  const handleCompanyWebsite = (event:any) => {
    setCompanyWebsite(event.target.value); 
  };
  const handleRegion = (event:any) => {
    setRegion(event.target.value); 
  };
  const handleCompanyCategory = (event:any) => {
    setCompanyCategory(event.target.value); 
  };
  const handleTeamSize = (event:any) => {
    setTeamSize(event.target.value); 
  };
  const handleJobFunction = (event:any) => {
    setJobFunction(event.target.value); 
  };
  const handleRoleSeniority = (event:any) => {
    setRoleSeniority(event.target.value); 
  };
  const handleAboutUs = (event:any) => {
    setAboutUs(event.target.value); 
  };

  const handleLogin = (e:any) => {
    e.preventDefault();
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const websitePattern =/^(https?:\/\/)?(www\.)?[a-zA-Z0-9@:%._+~#?&//=]{2,256}\.[a-zA-Z]{2,6}\b([-a-zA-Z0-9@:%._+~#?&//=]*)$/;

    if(name){
      setNameError(false)
    }else{
      setNameError(true)
      return;
    }

    if(email){
      let isvalidEmail=emailPattern.test(email);
      if(isvalidEmail){
        setEmailPatternError(false)
      }
      setEmailError(false)
    }else{
      setEmailError(true)
      return;
    }

    if(companyName){
      setCompanyNameError(false)
    }else{
      setCompanyNameError(true)
      return;
    }

    if(companyWebsite){
      let isvalidWebsite=websitePattern.test(companyWebsite);
      if(isvalidWebsite){
        setCompanyWebsitePatternError(false)
      }
      setCompanyWebsiteError(false)
    }else{
      setCompanyWebsiteError(true)
      return;
    }

    if(region){
      setRegionError(false)
    }else{
      setRegionError(true)
      return;
    }

    if(companyCategory){
      setCompanyCategoryError(false)
    }else{
      setCompanyCategoryError(true)
      return;
    }

    if(teamSize){
      setTeamSizeError(false)
    }else{
      setTeamSizeError(true)
      return;
    }

    if(jobFunction){
      setJobFunctionError(false)
    }else{
      setJobFunctionError(true)
      return;
    }

    if(roleSeniority){
      setRoleSeniorityError(false)
    }else{
      setRoleSeniorityError(true)
      return;
    }

    if(aboutUs){
      setAboutUsError(false)
    }else{
      setAboutUsError(true)
      return;
    }   

  };

  return (
    <>
      <section className="min-h-auto sm:min-h-[65vh] bg-[var(--color-2)] flex items-start justify-center px-4 sm:px-0 pt-20 sm:pt-28 md:pt-32">
        <div className="text-center max-w-2xl mx-auto"> 
          <div className="mb-6 sm:mb-10 lg:mb-5">
            <div className="inline-flex items-center px-3 sm:px-4 py-2.5 bg-[var(--color-13)] rounded-lg gap-2 lg:px-3 lg:py-1.9">
              <FiVolume2 className="text-[var(--color-8)] text-sm sm:text-base" />
              <span className="text-xs sm:text-lg lg:text-sm font-medium text-[var(--color-8)]">
                Talk to Us
              </span>

            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl px-15  md:text-5xl lg:text-6xl font-medium text-[var(--color-1)]  mb-3 sm:mb-8 px-4 lg:px-5">
            See how Avenstek helps your team
            <span className="text-[var(--color-20)]"> close faster.</span>
          </h1>

          <p className="text-base sm:text-xl sm:px-10 text-[var(--color-19)] mb-8 sm:mb-10 px-4 md:px-10 lg:px-10">
            Our team will walk you through the platform, answer your questions, and show you exactly how Avenstek fits your workflow.
          </p>


          <button className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-[var(--color-8)] text-white text-sm sm:text-base font-medium rounded-full hover:bg-[var(--color-6)] transition lg:px-4 lg:py-3 lg:font-medium  lg:text-sm ">
            Book a demo
            <HiSparkles className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* <section className="bg-[var(--color-2)] px-4 sm:px-0 mt-17 pt-0 sm:mt-12">
        <div className="text-center max-w-5xl mx-auto pt-2 sm:pt-8 pb-14 sm:pb-20">
          <p className="text-base sm:text-lg font-semibold text-[var(--color-1)] mb-6 sm:mb-8 lg:font-medium lg:text-lg">
            Trusted by modern sales teams at
          </p>
          <div className="relative overflow-hidden h-20 sm:h-24 w-full lg:w-[85%] mx-auto flex items-center mt-10">
            <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white pointer-events-none z-10" />

            <LogoLoop
              logos={imageLogos}
              speed={50}
              direction="left"
              logoHeight={48}
              gap={60}
              hoverSpeed={0}
              scaleOnHover={false}
            />
          </div>

        </div>
      </section> */}

      <section className="pt-6 sm:pt-10 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-5">
        <div className="max-w-2xl mx-auto bg-[var(--color-25)] rounded-2xl border border-[var(--color-23)] p-6 sm:p-5 lg:p-5">
          <form className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-base font-light text-[var(--color-1)] mb-2">
                  Full Name
                </label>
                <input type="text"
                  placeholder="Jane Smith"
                  value={name}
                  onChange={handleName}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-[var(--color-2)] focus:ring-2 focus:ring-[var(--color-8)] outline-none"
                />
                {nameError == true ? <span style ={{color:"red"}}> Name is Required </span>: ""}
              </div>

              <div>
                <label className="block text-base font-light text-[var(--color-1)] mb-2">
                  Work Email
                </label>
                <input
                  type="email"
                  placeholder="jane@acmecorp.com"
                  value={email}
                  onChange={handleEmail}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-[var(--color-2)] focus:ring-2 focus:ring-[var(--color-8)] outline-none"
                />
                {emailError == true ? <span style ={{color:"red"}}> Email is Required </span>: ""}
                {emailPatternError == true ? <span style ={{color:"red"}}>Enter Valid Email</span>: ""}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-base font-light text-[var(--color-1)] mb-2">
                  Company name
                </label>
                <input
                  type="text"
                  placeholder="Acme Corp"
                  value={companyName}
                  onChange={handleCompanyName}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-8)] bg-[var(--color-2)] focus:border-transparent outline-none transition"
                />
                {companyNameError == true ? <span style={{ color: "red" }}> Company Name is Required</span>: " "}
              </div>
              <div>
                <label className="block text-base font-light text-[var(--color-1)] mb-2">
                  Company website
                </label>
                <input
                  type="url"
                  placeholder="acmecorp.com"
                  value={companyWebsite}
                  onChange={handleCompanyWebsite}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-8)] bg-[var(--color-2)] focus:border-transparent outline-none transition"
                />
                {companyWebsiteError == true ? <span style={{ color: "red" }}> Company Website is Required</span>: " "}
                {companyWebsitePatternError == true ? <span style={{ color: "red" }}> Enter Valid Company Website </span>: " "}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-base font-light text-[var(--color-1)] mb-2 ">
                  Region
                </label>
                <select 
                value={region}
                onChange={handleRegion}
                className={`w-full px-4 py-3 border border-gray-300 rounded-lg
                  focus:ring-2 focus:ring-[var(--color-8)]
                  focus:border-transparent outline-none transition
                  bg-[var(--color-2)]
                  ${region === "" ? "text-[var(--color-20)]" : "text-[var(--color-1)]"}
                `}>
                  
                  <option value="" disabled>Select...</option>
                  <option value="af" >Africa</option>
                  <option value="au">Australia/Oceanoia</option>
                  <option value="eu">Europe</option>
                  <option value="me">Middle East/Asia</option>
                  <option value="na">North America</option>
                  <option value="sa">South America</option>
                </select>
                {regionError == true ? <span style={{ color: "red" }}> Please Select the item in the list</span>: " "}
              </div>
              <div>
                <label className="block text-base font-light text-[var(--color-1)] mb-2">
                  Company category
                </label>
                
                <select
                  value={companyCategory}
                  onChange={handleCompanyCategory}
                  className={`w-full px-4 py-3 border border-gray-300 rounded-lg
                    focus:ring-2 focus:ring-[var(--color-8)]
                    focus:border-transparent outline-none transition
                    bg-[var(--color-2)]
                    ${companyCategory === "" ? "text-[var(--color-20)]" : "text-black"}
                  `}
                >
                  <option value="" disabled>Select...</option>
                  <option value="saas">SaaS</option>
                  <option value="agency">Agency</option>
                  <option value="commerce">E-commerce</option>
                  <option value="profit">Non-Profit</option>
                  <option value="education">Education</option>
                  <option value="enterprise">Enterprise</option>
                  <option value="other">Other</option>
                </select>

                {companyCategoryError == true ? <span style={{ color: "red" }}> Please Select the item in the list</span>: " "}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-base font-light text-[var(--color-1)] mb-2">
                  Team size
                </label>
                <select
                  value={teamSize}
                  onChange={handleTeamSize}
                  className={`w-full px-4 py-3 border border-gray-300 rounded-lg
                    focus:ring-2 focus:ring-[var(--color-8)]
                    focus:border-transparent outline-none transition
                    bg-[var(--color-2)]
                    ${teamSize === "" ? "text-[var(--color-20)]" : "text-black"}
                  `}
                >
                  <option value="" disabled>Select...</option>
                  <option value="Only me">Only me</option>
                  <option value="2+3">2+3</option>
                  <option value="4+9">4+9</option>
                  <option value="10+49">10+49</option>
                  <option value="50+">50+</option>
                </select>

                {teamSizeError == true ? <span style={{ color: "red" }}> Please Select the item in the list</span>: " "}
              </div>
              <div>
                <label className="block text-base font-light text-[var(--color-1)] mb-2">
                  Your Job function
                </label>
                <select
                  value={jobFunction}
                  onChange={handleJobFunction}
                  className={`w-full px-4 py-3 border border-gray-300 rounded-lg
                    focus:ring-2 focus:ring-[var(--color-8)]
                    focus:border-transparent outline-none transition
                    bg-[var(--color-2)]
                    ${jobFunction === "" ? "text-[var(--color-20)]" : "text-black"}
                  `}
                >
                  <option value="" disabled>Select...</option>
                  <option value="product">Product</option>
                  <option value="engineering">Engineering</option>
                  <option value="marketing">Marketing</option>
                  <option value="sales">Sales</option>
                  <option value="operations">Operations</option>
                  <option value="design">Design</option>
                  <option value="customer">Customer Success</option>
                  <option value="executive">Executive/Leadership</option>
                  <option value="other">Other</option>
                </select>

                {jobFunctionError == true ? <span style={{ color: "red" }}> Please Select the item in the list</span>: " "}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-base font-light text-[var(--color-1)] mb-2">
                  Role seniority
                </label>
                <select 
                value={roleSeniority} 
                onChange={handleRoleSeniority}
                className={`w-full px-4 py-3 border border-gray-300 rounded-lg
                    focus:ring-2 focus:ring-[var(--color-8)]
                    focus:border-transparent outline-none transition
                    bg-[var(--color-2)]
                    ${roleSeniority === "" ? "text-[var(--color-20)]" : "text-black"}
                  `}>
                  <option value="" disabled>Select...</option>
                  <option value="individual">Individual Contributor</option>
                  <option value="manager">Manager</option>
                  <option value="director">Director</option>
                  <option value="vp">VP</option>
                  <option value="c-level">C-Level/Founder</option>
                  
                </select>
                {roleSeniorityError == true ? <span style={{ color: "red" }}> Please Select the item in the list</span>: " "}
              </div>
              <div>
                <label className="block text-base font-light text-[var(--color-1)] mb-2">
                  How did you hear about us?
                </label>
                <select
                  value={aboutUs} 
                  onChange={handleAboutUs} 
                 className={`w-full px-4 py-3 border border-gray-300 rounded-lg
                    focus:ring-2 focus:ring-[var(--color-8)]
                    focus:border-transparent outline-none transition
                    bg-[var(--color-2)]
                    ${aboutUs === "" ? "text-[var(--color-20)]" : "text-black"}
                  `}>
                  <option value="" disabled>Select...</option>
                  <option value="search">Web Search</option>
                  <option value="social">Word of Mouth</option>
                  
                </select>
                {aboutUsError == true ? <span style={{ color: "red" }}> Please Select the item in the list</span>: " "}
              </div>
            </div>

            <div>
              <label className="block text-base font-light text-[var(--color-1)] mb-2">
                Tell us about your use cases or goals
              </label>
              <textarea
                rows={4}
                placeholder="What would you like to explore during the demo?"
                className=" text-base placeholder:text-[var(--color-20)] font-normal w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-8)] focus:border-transparent outline-none transition resize-none bg-[var(--color-2)] lg:px-4 lg:py-4"/>
            </div>

            <div className="pt-2">
              <div className="flex flex-col sm:flex-col md:flex-row justify-between items-center gap-6">
                {/* <p className="text-base text-[var(--color-19)]">You can also send us a{' '}<a href="mailto:sales@hexa.com" className="text-[var(--color-8)] underline underline-offset-4 font-medium">Sales email</a></p> */}
                <button
                  type="submit"
                  onClick={handleLogin}
                  className="w-full px-10 py-3 bg-[var(--color-8)] text-white rounded-full hover:bg-[var(--color-6)] transition lg:px-4 lg:py-3">
                  Submit form
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
