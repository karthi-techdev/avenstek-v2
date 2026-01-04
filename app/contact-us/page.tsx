'use client';
import { FiVolume2 } from 'react-icons/fi';
import { useState } from "react";
import { usePageSEO } from '../hooks/usePageTitles';

export default function Contact() {
  
  usePageSEO(
    "Contact us", 
    "Ready to elevate your digital presence? Contact Avenstek Solutions Pvt Ltd for expert software development, AI consulting, and cloud strategy. Let's build your next project together."
  );

  const [name, setName] = useState("");
  const [nameError, setNameError] = useState(false);

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [emailPatternError, setEmailPatternError] = useState(false);

  const [number, setNumber] = useState("");
  const [numberError, setNumberError] = useState(false);

  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const handleName = (event: any) => {
    setName(event.target.value);
  };
  
  const handleEmail = (event: any) => {
    setEmail(event.target.value);
  };
  
  const handleNumber = (event: any) => {
    setNumber(event.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    
    // Reset errors
    setNameError(false);
    setEmailError(false);
    setEmailPatternError(false);
    setNumberError(false);

    let hasError = false;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Name validation
    if (!name.trim()) {
      setNameError(true);
      hasError = true;
    }

    // Email validation
    if (!email.trim()) {
      setEmailError(true);
      hasError = true;
    } else if (!emailPattern.test(email)) {
      setEmailPatternError(true);
      hasError = true;
    }

    // Number validation (checking if it's not empty)
    if (!number.trim()) {
      setNumberError(true);
      hasError = true;
    }

    // If no errors, show success popup
    if (!hasError) {
      setShowSuccessPopup(true);
      // Optionally reset form
      setName("");
      setEmail("");
      setNumber("");
      
      // Hide popup after 3 seconds
      setTimeout(() => {
        setShowSuccessPopup(false);
      }, 3000);
    }
  };

  return (
    <>
      {showSuccessPopup && (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm z-5000000">
          <div className="bg-white rounded-2xl p-8 max-w-sm mx-4 shadow-2xl">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">Submitted Successfully!</h3>
              <p className="text-gray-600">Thank you for your submission. We'll get back to you soon.</p>
            </div>
          </div>
        </div>
      )}

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
        </div>
      </section>

      <section className="pt-6 sm:pt-10 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-5">
        <div className="max-w-2xl mx-auto bg-[var(--color-25)] rounded-2xl border border-[var(--color-23)] p-6 sm:p-5 lg:p-5">
          <form className="space-y-8" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-base font-light text-[var(--color-1)] mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Jane Smith"
                  value={name}
                  onChange={handleName}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-[var(--color-2)] focus:ring-2 focus:ring-[var(--color-8)] outline-none"
                />
                {nameError && <span className='text-red-500 text-xs'>Name is Required</span>}
                {!nameError && <span className='text-xs invisible'>Content Hidden</span>}
              </div>

              <div>
                <label className="block text-base font-light text-[var(--color-1)] mb-1">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="jane@acmecorp.com"
                  value={email}
                  onChange={handleEmail}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-[var(--color-2)] focus:ring-2 focus:ring-[var(--color-8)] outline-none"
                />
                {emailError && <span className='text-red-500 text-xs'>Email is Required</span>}
                {emailPatternError && <span className='text-red-500 text-xs'>Enter Valid Email</span>}
                {!emailError && !emailPatternError && <span className='text-xs invisible'>Content Hidden</span>}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-base font-light text-[var(--color-1)] mb-1">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  placeholder="+91 1234567890"
                  value={number}
                  onChange={handleNumber}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-8)] bg-[var(--color-2)] focus:border-transparent outline-none transition"
                />
                {numberError && <span className='text-red-500 text-xs'>Number is Required</span>}
                {!numberError && <span className='text-xs invisible'>Content Hidden</span>}
              </div>
              <div>
                <label className="block text-base font-light text-[var(--color-1)] mb-1">
                  How did you hear about us?
                </label>
                <select
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg
                    focus:ring-2 focus:ring-[var(--color-8)]
                    focus:border-transparent outline-none transition
                    bg-[var(--color-2)]"
                >
                  <option value="" disabled>Select...</option>
                  <option value="search">Web Search</option>
                  <option value="social">Word of Mouth</option>
                  <option value="search">Linkedin</option>
                  <option value="social">Instagram</option>
                  <option value="search">X</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-base font-light text-[var(--color-1)] mb-1">
                Tell us about your use cases or goals
              </label>
              <textarea
                rows={4}
                placeholder="What would you like to explore during the demo?"
                className="text-base placeholder:text-[var(--color-20)] font-normal w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-8)] focus:border-transparent outline-none transition resize-none bg-[var(--color-2)] lg:px-4 lg:py-4"
              />
            </div>

            <div className="pt-2">
              <div className="flex flex-col sm:flex-col md:flex-row justify-between items-center gap-6">
                <button
                  type="submit"
                  className="w-full px-10 py-3 bg-[var(--color-8)] text-white rounded-full hover:bg-[var(--color-6)] transition lg:px-4 lg:py-3"
                >
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