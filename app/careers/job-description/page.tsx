"use client";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { FiClock, FiDollarSign, FiMapPin, FiGlobe } from "react-icons/fi";
import { LuGlobe } from "react-icons/lu";
import { FaRegClock } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { RiMoneyDollarBoxLine } from "react-icons/ri";
import { FaXTwitter, FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";
import { BsBookmark } from "react-icons/bs";
import Link from "next/link";
import ApplyModal from "./applymodal/page";
import SuccessModal from "./successmodel/page";
import api from "@/lib/api";
import { usePageSEO } from "@/app/hooks/usePageTitles";

const JobDescription = () => {
  return (
    <Suspense fallback={<div className="py-40 text-center">Loading...</div>}>
      <JobDescriptionContent />
    </Suspense>
  );
};

const JobDescriptionContent = () => {
  const searchParams = useSearchParams();
  const jobId = searchParams.get("id");
  const [job, setJob] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showApply, setShowApply] = useState(false);

  useEffect(() => {
    if (!jobId) {
      setLoading(false);
      return;
    }
    const fetchJob = async () => {
      try {
        const { data } = await api.get('/content/jobs');
        const found = data.find((j: any) => j._id === jobId || j.id === jobId);
        setJob(found);
      } catch (err) {
        console.error("Error fetching job details:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchJob();
  }, [jobId]);

  usePageSEO(
    job?.title || "Job Description",
    job?.preText || "Build your future with Avenstek Solutions Pvt Ltd."
  );

  if (loading) return <div className="py-40 text-center">Loading job details...</div>;
  if (!job) return <div className="py-40 text-center">Job not found. <Link href="/careers" className="text-[var(--color-8)] underline">Back to Careers</Link></div>;

  const steps = [
    {
      title: "Application Review",
      description: "We read every application carefully. We're looking for alignment with the role, clarity in communication, and thoughtful signals — not just a fancy resume.",
    },
    {
      title: "Intro Call (30 mins)",
      description: "A casual conversation with a team lead or founder. We'll discuss your background, what excites you, and your expectations. No prep required.",
    },
    {
      title: "Technical / Design Task (Optional by role)",
      description: "If relevant, we'll share a short async task (2-3 hrs max) that reflects the actual work. No whiteboarding, no trick questions.",
    },
    {
      title: "Deep Dive Interview (60-75 mins)",
      description: "We'll go in-depth on how you think, communicate, and work. This may involve live problem-solving or discussing past work.",
    },
    {
      title: "Culture & Alignment Chat",
      description: "A brief conversation with someone outside the immediate team focusing on values, communication style, and expectations.",
    },
    {
      title: "Offer or Feedback",
      description: "We move fast. You'll receive either a detailed offer or clear feedback — usually within 48–72 hours.",
    },
  ];

  const freelanceSteps = [
    {
      title: "Application or Referral",
      description: "We often source these roles directly, but you're welcome to apply proactively.",
    },
    {
      title: "Quick Scope Call (20-30 mins)",
      description: "We define scope, timeline, rate expectations, and mutual fit.",
    },
    {
      title: "Trial Task or Paid Pilot",
      description: "For some freelance roles, we may offer a small paid task or initial pilot before full engagement.",
    },
    {
      title: "Agreement & Start",
      description: "Once terms are clear, we move into a short contract or statement of work. You'll be onboarded async.",
    },
  ];

  return (
    <>
      <section className=" bg-[var(--color-2)] text-[var(--color-16)]">

        <div className="max-w-5xl mx-auto p-6 text-center">
          <Link href="/careers" className="inline-flex items-center gap-2 text-[var(--color-19)] border border-[var(--color-23)] px-4 py-2 rounded-full hover:bg-[var(--color-26)] transition-all mb-10 text-[.90rem] lg:text-[1rem] md:text-[.90rem] font-medium">
            Back to careers
          </Link>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[var(--color-15)] leading-[1.1] mb-8">
            {job.title}
          </h1>
          <p className="text-lg md:text-xl lg:text-xl text-[var(--color-20)] max-w-2xl mx-auto mb-12 leading-relaxed">
            {job.preText}
          </p>

          <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-3 md:gap-x-6 text-[var(--color-19)] font-medium text-sm md:text-base mb-12">
            <div className="flex items-center gap-2">
              <FaRegClock />
              {job.jobType}
            </div>
            <div className="hidden md:block w-1 h-1 rounded-full bg-[var(--color-22)]" />

            <div className="flex items-center gap-2">
              <IoLocationOutline />
              {job.currency} {job.salaryMin.toLocaleString()} - {job.salaryMax.toLocaleString()}
            </div>
            <div className="hidden md:block w-1 h-1 rounded-full bg-[var(--color-22)]" />

            <div className="flex items-center gap-2">
              <LuGlobe />
              {job.location}
            </div>
            <div className="hidden md:block w-1 h-1 rounded-full bg-[var(--color-22)]" />

            <div className="flex items-center gap-2">
              <RiMoneyDollarBoxLine />
              {job.workMode}
            </div>
          </div>

          <button
            onClick={() => setShowApply(true)}
            className="bg-[var(--color-8)] text-[var(--color-2)] px-6 md:px-8 py-3.5 md:py-4 rounded-full font-bold hover:bg-[var(--color-7)] transition-all mx-auto w-fit"
          >
            Apply for Role
          </button>

          {showApply && (
            <ApplyModal
              jobId={job._id || job.id}
              onClose={() => setShowApply(false)}
              onSuccess={() => {
                setShowApply(false);
                setShowSuccess(true);
              }}
            />
          )}
          {showSuccess && (
            <SuccessModal
              onClose={() => setShowSuccess(false)}
            />
          )}
        </div>
      </section>

      <section className="bg-[var(--color-2)] px-6 py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16">

          {/* LEFT CONTENT */}
          <div className="lg:col-span-2">
            {/* Why Avenstek Exists */}
            <section className="mb-6">
              <h2 className="text-4xl font-semibold text-[var(--color-1)] mb-4">
                Why Avenstek Exists
              </h2>
              <p className="text-[var(--color-19)] lg-text-lg md:text-lg text-[1rem] leading-relaxed">
                Avenstek is building the next generation of sales tools — fast,
                focused, and powered by AI. Our mission is to help teams sell
                smarter, follow up faster, and stay focused on what actually
                closes deals. We don&apos;t ship bloat. We ship clarity. We&apos;re a lean,
                async-first team that values sharp thinking, fast execution, and
                real outcomes over corporate playbooks. Backed by real workflows,
                not just dashboards.
              </p>
            </section>

            {/* Role overview */}
            <section className="my-6">
              <h2 className="text-4xl  font-semibold text-[var(--color-1)] mb-4">
                Role overview
              </h2>
              <p className="text-[var(--color-19)] lg-text-lg md:text-lg text-[1rem] leading-relaxed">
                Avenstek helps modern sales teams move faster by automating follow-ups,
                forecasting pipeline, and summarizing meetings with clarity. As a
                Backend Engineer, you&apos;ll help us scale our AI features, optimize
                data pipelines, and ensure the system is lean, reliable, and
                lightning fast.
              </p>
            </section>

            {/* Impact */}
            <section className="py-6">
              <h2 className="text-4xl  font-semibold text-[var(--color-1)] mb-4">
                How You&apos;ll Drive Impact
              </h2>
              <ul className="list-disc list-inside space-y-3 text-[var(--color-19)] lg-text-lg md:text-lg text-[1rem]">
                <li>
                  Build and maintain backend services and APIs (Node/Python/Postgres)
                </li>
                <li>
                  Work closely with AI/ML engineers to productionize AI features
                </li>
                <li>
                  Design data ingestion, transformation, and storage pipelines
                </li>
                <li>
                  Optimize performance, caching, and database structure
                </li>
                <li>
                  Ensure high availability and security across all endpoints
                </li>
                <li>
                  Collaborate with frontend and product teams to scope & ship features
                </li>
              </ul>
            </section>
            <section className="py-6">
              <h2 className="text-4xl  font-semibold text-[var(--color-1)] mb-4">
                What You&apos;ll Bring
              </h2>
              <ul className="list-disc list-inside space-y-3 text-[var(--color-19)] lg-text-lg md:text-lg text-[1rem]">
                <li>
                  Build and maintain backend services and APIs (Node/Python/Postgres)
                </li>
                <li>
                  Work closely with AI/ML engineers to productionize AI features
                </li>
                <li>
                  Design data ingestion, transformation, and storage pipelines
                </li>
                <li>
                  Optimize performance, caching, and database structure
                </li>
                <li>
                  Ensure high availability and security across all endpoints
                </li>
                <li>
                  Collaborate with frontend and product teams to scope & ship features
                </li>
              </ul>
            </section>
            <section className="py-6">
              <h2 className="text-4xl  font-semibold text-[var(--color-1)] mb-4">
                Bonus Points for
              </h2>
              <ul className="list-disc list-inside space-y-3 text-[var(--color-19)] lg-text-lg md:text-lg text-[1rem]">
                <li>
                  Build and maintain backend services and APIs (Node/Python/Postgres)
                </li>
                <li>
                  Work closely with AI/ML engineers to productionize AI features
                </li>
                <li>
                  Design data ingestion, transformation, and storage pipelines
                </li>
                <li>
                  Optimize performance, caching, and database structure
                </li>

              </ul>
            </section>
            <section className="py-6">
              {/* Heading */}
              <h1 className="text-2xl sm:text-3xl font-semibold text-[var(--color-1)]">
                Full-Time & Long-Term Roles
              </h1>

              <p className="mt-3 text-[var(--color-19)] lg-text-lg md:text-lg text-[1rem]">
                This applies to roles like Engineering, Product, Design, and Leadership.
              </p>

              {/* Steps */}
              <div className="mt-8 space-y-6">
                {steps.map((step, index) => (
                  <div key={step.title} className="flex gap-4">
                    {/* Number */}
                    <div className="flex-shrink-0">
                      <span className="text-[var(--color-19)] lg-text-lg md:text-lg text-[1rem] font-medium">
                        {index + 1}.
                      </span>
                    </div>

                    {/* Content */}
                    <div>
                      <h3 className="font-medium text-[var(--color-1)] lg-text-lg md:text-lg text-[1rem]">
                        {step.title}
                      </h3>
                      <p className="mt-1 text-[var(--color-19)] lg-text-lg md:text-lg text-[1rem] leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
            <section className="py-6">
              {/* Heading */}
              <h2 className="text-2xl sm:text-3xl font-semibold text-[var(--color-1)]">
                Freelance & Contract Roles
              </h2>

              <p className="mt-3 text-[var(--color-19)] lg-text-lg md:text-lg text-[1rem]">
                This process applies to short-term, freelance, or contract-based
                engagements.
              </p>

              {/* Steps */}
              <div className="mt-8 space-y-6">
                {freelanceSteps.map((step, index) => (
                  <div key={step.title} className="flex gap-4">
                    {/* Step Number */}
                    <div className="flex-shrink-0">
                      <span className="text-[var(--color-19)] lg-text-lg md:text-lg text-[1rem] font-medium">
                        {index + 1}.
                      </span>
                    </div>

                    {/* Content */}
                    <div>
                      <h3 className="font-medium text-[var(--color-1)] lg-text-lg md:text-lg text-[1rem]">
                        {step.title}
                      </h3>
                      <p className="mt-1 text-[var(--color-19)] lg-text-lg md:text-lg text-[1rem] leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* RIGHT SIDEBAR */}
          <div>
            <div className="sticky top-20">

              <div className="max-w-md rounded-2xl border border-[var(--color-23)] bg-white p-6 space-y-5">
                <h2 className="text-lg font-semibold leading-snug">
                  {job.title}
                </h2>

                <div className="space-y-3 border-[var(--color-20)] text-[var(--color-20)] text-[0.85rem] md:text-[0.95rem] lg:text-[1rem]">
                  <div className="flex items-center gap-2">
                    <FiClock />
                    <span>{job.jobType}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <FiDollarSign />
                    <span>{job.currency} {job.salaryMin.toLocaleString()} - {job.salaryMax.toLocaleString()}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <FiMapPin />
                    <span>{job.location}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <FiGlobe />
                    <span>{job.workMode}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3 mt-5">
                <button
                  onClick={() => setShowApply(true)}
                  className="flex items-center gap-2 rounded-full  px-5 py-2.5 bg-[var(--color-8)] text-[var(--color-2)] font-medium hover:bg-[var(--color-7)] transition"
                >
                  Apply for Role
                </button>
                {showApply && (
                  <ApplyModal
                    jobId={job._id || job.id}
                    onClose={() => setShowApply(false)}
                    onSuccess={() => {
                      setShowApply(false);
                      setShowSuccess(true);
                    }}
                  />
                )}
                {showSuccess && (
                  <SuccessModal
                    onClose={() => setShowSuccess(false)}
                  />
                )}
              </div>


              <hr className="my-5 text-[var(--color-22)]" />

              <div className="space-y-3">
                <p className="text-sm md:text-lg font-medium">Share post</p>

                <div className="flex items-center gap-4 text-[var(--color-20)] md:text-2xl text-xl">
                  <FaXTwitter className="cursor-pointer hover:text-[var(--color-8)]" />
                  <BsBookmark className="cursor-pointer hover:text-[var(--color-8)]" />
                  <FaLinkedinIn className="cursor-pointer hover:text-[var(--color-8)]" />
                  <FaWhatsapp className="cursor-pointer hover:text-[var(--color-8)]" />
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
    </>
  )
}

export default JobDescription
