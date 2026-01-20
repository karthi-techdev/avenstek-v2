'use client'

import "./globals.css";
import { GoChevronRight } from "react-icons/go";
import { GoZap } from "react-icons/go";
import { TbClick } from "react-icons/tb";
import { FaFacebook, FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { RiYoutubeFill } from "react-icons/ri";
import { FaXbox } from "react-icons/fa";
import { GoPeople } from "react-icons/go";
import { TbLicenseOff } from "react-icons/tb";
import { RiUserHeartLine } from "react-icons/ri";
import logoImg from '../public/assets/images/logo-avenstek.png'
import bazLogo from '../public/product/bookadzone-short-logo.png'
import { useState } from 'react'
import { rootMetadata } from "./metadata.config";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'
import { usePathname } from "next/navigation";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import Link from "next/link";
import Image from "next/image";
import { BsTwitterX } from "react-icons/bs";

const products = [
  { name: 'AI Assist', description: 'Ask questions, get sales answers instantly', href: '#', icon: ChartPieIcon },
  { name: 'Automation', description: 'Summaries & follow-ups done for you', href: '#', icon: CursorArrowRaysIcon },
  { name: 'pipeline Intelligence', description: 'Real-time deal health & forecast clarity', href: '#', icon: FingerPrintIcon },
  { name: 'Colloration', description: 'Notes, thread & mentions in every deal', href: '#', icon: SquaresPlusIcon },

]
const solutions = [
  { name: 'Founders', description: 'Colse deals without a full team', href: '#', icon: ChartPieIcon },
  { name: 'Sales Teams', description: 'Work faster,smarter, together', href: '#', icon: CursorArrowRaysIcon },
  { name: 'RevOps', description: 'See whats real, automate the rest ', href: '#', icon: FingerPrintIcon },
  { name: 'Agencies', description: 'pitch, follow-up, and report im one place', href: '#', icon: SquaresPlusIcon },

]
const resources = [
  { name: 'Blog', description: 'Sales , AI & workflow insights', href: '#', icon: ChartPieIcon },
  { name: 'Changlog', description: 'Product updates and improvements', href: '#', icon: CursorArrowRaysIcon },
  { name: 'Customers', description: 'Stories from SaaS teams scaling smarter', href: '#', icon: FingerPrintIcon },
]
const company = [
  { name: 'About', description: 'Whos behind Avenstek', href: '#', icon: ChartPieIcon },
  { name: 'Careers', description: 'Join the team', href: '#', icon: CursorArrowRaysIcon },
  { name: 'Get help', description: 'Need a hand? We`ve got you', href: '#', icon: FingerPrintIcon },

]

export const metadata = rootMetadata;

export default function ClientWrapper({ children, }: Readonly<{ children: React.ReactNode; }>) {

  const pathname = usePathname();
  
  // Check if the current route starts with /admin
  const isAdminPage = pathname.startsWith("/admin");

  if (isAdminPage) {
    // Return only the children for admin pages (Disables Root Layout UI)
    return <>{children}</>;
  }

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <>
        <header className="bg-white dark:bg-gray-900 fixed w-[100%] top-[0] z-10000 border-b-[1px]">
          <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
            <div className="flex lg:flex-1">
              <Link href="/" className="-m-1.5 p-1.5">
                 <Image src={logoImg} alt="logo" height="20" className="invert-70"/>
              </Link>

            </div>
            <div className="flex lg:hidden ">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-400"
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <PopoverGroup className="hidden lg:flex lg:gap-x-12 ">
             <Popover className="relative">
              <PopoverButton className="flex items-center text-[var(--color-20)] gap-x-1 text-sm/6 font-semibold dark:text-white">
                Product
                <ChevronDownIcon aria-hidden="true" className="size-5 flex-none text-gray-400 dark:text-gray-500" />
              </PopoverButton>

              <PopoverPanel
                transition
                className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 overflow-hidden rounded-3xl bg-white shadow-lg outline-1 outline-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in dark:bg-gray-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10"
              >
                {({ close }) => (
                  <div className="p-4">
                    <div className="group relative flex items-center gap-x-6 rounded-lg p-2 text-sm/6 hover:bg-[var(--color-13)] dark:hover:bg-white/5">
                      <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-[var(--color-13)] group-hover:bg-white dark:bg-gray-700/50 dark:group-hover:bg-gray-700">
                        <Image src={bazLogo} alt="bazLogo" className="rounded" />
                      </div>

                      <div className="flex-auto">
                        <Link
                          href="https://bookadzone.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => close()}
                          className="expressa-font tracking-wider text-[1rem] block font-semibold text-gray-700 dark:text-white"
                        >
                          bookadzone
                          <span className="absolute inset-0" />
                        </Link>

                        <p className="text-gray-600 dark:text-gray-400">
                          Your Outdoor Advertising AI Powerhouse.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </PopoverPanel>
            </Popover>
  {/* <Link href="/product" className="text-sm/6 font-semibold text-[var(--color-20)] dark:text-white">
                Product
              </Link> */}

              <Link href="/services" className="text-sm/6 font-semibold text-[var(--color-20)] dark:text-white">
                Services
              </Link>

              <Link href="/about-us" className="text-sm/6 font-semibold text-[var(--color-20)] dark:text-white">
                About us
              </Link>


              <Link href="/blog" className="text-sm/6 font-semibold text-[var(--color-20)] dark:text-white">
                Blog
               </Link>

               <Link href="/contact-us" className="text-sm/6 font-semibold text-[var(--color-20)] dark:text-white">
                Contact us
               </Link>

              {/* <Popover className="relative">
                <PopoverButton className="flex items-center text-[var(--color-20)] gap-x-1 text-sm/6 font-semibold  dark:text-white">
                  Solution
                  <ChevronDownIcon aria-hidden="true" className="size-5 flex-none text-gray-400 dark:text-gray-500" />
                </PopoverButton>

                <PopoverPanel
                  transition
                  className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 overflow-hidden rounded-3xl bg-white shadow-lg outline-1 outline-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in dark:bg-gray-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10"
                >
                  <div className="p-4">
                    {solutions.map((item) => (
                      <div
                        key={item.name}
                        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-[var(--color-13)] dark:hover:bg-white/5"
                      >
                        <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-[var(--color-13)] group-hover:bg-white dark:bg-gray-700/50 dark:group-hover:bg-gray-700">
                          <item.icon
                            aria-hidden="true"
                            className="size-6 text-[var(--color-20)] group-hover:text-[var(--color-1)] dark:text-gray-400 dark:group-hover:text-white"
                          />
                        </div>
                        <div className="flex-auto">
                          <a href={item.href} className="block font-semibold text-gray-900 dark:text-white">
                            {item.name}
                            <span className="absolute inset-0" />
                          </a>
                          <p className="mt-1 text-gray-600 dark:text-gray-400">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                </PopoverPanel>
              </Popover> */}

              {/* <Popover className="relative">
                <PopoverButton className="flex items-center text-[var(--color-20)]  gap-x-1 text-sm/6 font-semibold  dark:text-white">
                  Resources
                  <ChevronDownIcon aria-hidden="true" className="size-5 flex-none text-gray-400 dark:text-gray-500" />
                </PopoverButton>

                <PopoverPanel
                  transition
                  className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 overflow-hidden rounded-3xl bg-white shadow-lg outline-1 outline-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in dark:bg-gray-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10"
                >
                  <div className="p-4">
                    {resources.map((item) => (
                      <div
                        key={item.name}
                        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-[var(--color-13)] dark:hover:bg-white/5"
                      >
                        <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-[var(--color-13)] group-hover:bg-white dark:bg-gray-700/50 dark:group-hover:bg-gray-700">
                          <item.icon
                            aria-hidden="true"
                            className="size-6 text-[var(--color-20)] group-hover:text-[var(--color-1)] dark:text-gray-400 dark:group-hover:text-white"
                          />
                        </div>
                        <div className="flex-auto">
                          <a href={item.href} className="block font-semibold text-gray-900 dark:text-white">
                            {item.name}
                            <span className="absolute inset-0" />
                          </a>
                          <p className="mt-1 text-gray-600 dark:text-gray-400">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                </PopoverPanel>
              </Popover> */}

              {/* <Popover className="relative">
                <PopoverButton className="flex items-center text-[var(--color-20)] gap-x-1 text-sm/6 font-semibold  dark:text-white">
                  Company
                  <ChevronDownIcon aria-hidden="true" className="size-5 flex-none text-gray-400 dark:text-gray-500" />
                </PopoverButton>

                <PopoverPanel
                  transition
                  className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 overflow-hidden rounded-3xl bg-white shadow-lg outline-1 outline-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in dark:bg-gray-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10"
                >
                  <div className="p-4">
                    {company.map((item) => (
                      <div
                        key={item.name}
                        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-[var(--color-13)] dark:hover:bg-white/5"
                      >
                        <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-[var(--color-13)] group-hover:bg-white dark:bg-gray-700/50 dark:group-hover:bg-gray-700">
                          <item.icon
                            aria-hidden="true"
                            className="size-6 text-[var(--color-20)] group-hover:text-[var(--color-1)] dark:text-gray-400 dark:group-hover:text-white"
                          />
                        </div>
                        <div className="flex-auto">
                          <a href={item.href} className="block font-semibold text-gray-900 dark:text-white">
                            {item.name}
                            <span className="absolute inset-0" />
                          </a>
                          <p className="mt-1 text-gray-600 dark:text-gray-400">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                </PopoverPanel>
              </Popover> */}

            </PopoverGroup>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end ml-[3rem]">
              {/* <a href="#" className="text-sm/6 font-semibold text-gray-900 dark:text-white">
                <button className="flex bg-[var(--color-8)] text-[var(--color-2)] text-sm  px-3 py-3 rounded-full font-semibold hover:bg-[var(--color-7)] transition ">Purchase template<GoChevronRight className="text-xl text-[var(--color-2)] font-semibold" /></button>
              </a> */}
              <Link href="/contact-us" className="text-sm/6 font-semibold text-gray-900 dark:text-white">
                <button className=" ml-3 flex rounded-full bg-[var(--color-2)] text-sm font-semibold px-3 py-3 text-[var(--color-1)] border border-[var(--color-21)]  hover:bg-[var(--color-13)] transition">
                  Book a demo <TbClick className=" pl-1 pt-1 text-xl text-[var(--color-20)]" />
                </button>
              </Link>
            </div>
          </nav>
          <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
            <div className="fixed inset-0 z-50" />
            <DialogPanel className="fixed inset-y-0 right-0 z-100000 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 dark:bg-gray-900 dark:sm:ring-gray-100/10">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5" onClick={() => close()}>
                <Image src={logoImg} alt="logo" height="20" className="invert-70"/>
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-gray-400"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10 dark:divide-white/10">
                <div className="space-y-2 py-6">
                  <Disclosure as="div" className="-mx-3">
                    <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-[var(--color-20)] hover:bg-gray-50 dark:text-white dark:hover:bg-white/5">
                      Product  
                      <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-open:rotate-180" />
                    </DisclosureButton>
                    <DisclosurePanel className="mt-2 space-y-2">
                      <DisclosureButton
                        as="a"
                        className="block rounded-lg text-sm/7 font-semibold text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-white/5"
                      >
                        <div className="p-0">
                          <div className="group relative flex items-center gap-x-6 rounded-lg p-2 text-sm/6 hover:bg-[var(--color-13)] dark:hover:bg-white/5">
                            <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-[var(--color-13)] group-hover:bg-white dark:bg-gray-700/50 dark:group-hover:bg-gray-700">
                              <Image src={bazLogo} alt="bazLogo" className="rounded" />
                            </div>

                            <div className="flex-auto">
                              <Link
                                href="https://bookadzone.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => setMobileMenuOpen(false)}
                                className="expressa-font tracking-wider text-[1rem] block font-semibold text-gray-700 dark:text-white"
                              >
                                bookadzone
                                <span className="absolute inset-0" />
                              </Link>

                              <p className="text-gray-600 dark:text-gray-400">
                                Your Outdoor Advertising AI Powerhouse.
                              </p>
                            </div>
                          </div>
                        </div>
                      </DisclosureButton>
                    </DisclosurePanel>
                  </Disclosure>

                  <Link
                    href="/about-us"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-[var(--color-20)] hover:bg-gray-50 dark:text-white dark:hover:bg-white/5"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    About us
                  </Link>

                  <Link
                    href="/services"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-[var(--color-20)] hover:bg-gray-50 dark:text-white dark:hover:bg-white/5"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Services
                  </Link>

                  <Link
                    href="/blog"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-[var(--color-20)] hover:bg-gray-50 dark:text-white dark:hover:bg-white/5"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Blog
                  </Link>

                  <Link
                    href="/contact-us"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-[var(--color-20)] hover:bg-gray-50 dark:text-white dark:hover:bg-white/5"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Contact us
                  </Link>

                </div>
                <div className="py-6">
                  <Link
                    href="/contact-us"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-white/5"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <button className="sm:ml-0 md:ml-0 lg:ml-3 flex justify-center rounded-full bg-[var(--color-2)] text-sm font-semibold px-3 py-2 text-[var(--color-1)] border border-[var(--color-21)]  hover:bg-[var(--color-13)] transition sm:w-full w-[100%] md:w-[100%] lg:w-[0]">
                      Book a demo <TbClick className=" pl-1 pt-1 text-2xl text-[var(--color-20)]" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </DialogPanel>
          </Dialog>
        </header>

        <main className="mt-25">
          {children}

       {/* CTA Section */}
        <section className="bg-[var(--color-13)] p-10">
          <div className="mb-24 max-w-7xl mx-auto px-6 text-center">
            <div className="flex justify-center mb-8">
              <span className="inline-flex items-center gap-3 rounded-lg px-6 py-3 min-h-[48px] text-sm text-[var(--color-blue-500)]">
                <i className="fa-solid fa-bolt text-[var(--color-7)]"></i>
                Transform Your Business
              </span>
            </div>
            <h2 className="text-center text-4xl sm:text-5xl font-bold text-[var(--color-black)] mb-6">
              Ready to elevate your digital presence? <br />
              <span className="text-[var(--color-gray-400)]">Let's build something extraordinary together.</span>
            </h2>
            <p className="mx-auto max-w-xl text-base sm:text-lg text-[var(--color-zinc-400)] leading-relaxed mb-6">
              Contact us for a free consultation. No obligations, just expert insights tailored to your needs.
            </p>

            <div className="flex flex-col items-center gap-4 mb-4">
              <Link href="/contact-us" className="rounded-full flex items-center justify-center px-5 py-2 text-sm h-12 w-47 bg-[var(--color-7)] text-[var(--color-2)] font-bold hover:bg-[var(--color-8)] transition">
                Start Your Project &gt;
              </Link>
              <Link
                href="/services"
                className="rounded-full border border-[var(--color-zinc-700)] px-6 py-3 text-sm font-semibold text-[var(--color-black)] transition hover:bg-[var(--color-zinc-900)] hover:text-[var(--color-white)]"
              >
                View Services
              </Link>
            </div>
          </div>
        </section>
        </main>



        {/* <footer className="bg-[var(--color-13)] h-auto">

          <div className="flex justify-center">
            <div className=" max-w-6xl px-6 grid grid-cols-1 md:gird-cols-2 gap-12">
              <div>
                <p className="text-md  tracking-wider text-[var(--color-8)] font-semibold mb-4 flex justify-center pt-12">
                  <GoZap className="text-xl" /> Start Closing Faster
                </p>
                <div>
                  <h1 className="text-[var(--color-1)]  text-4xl font-bold tracking-tight leading-tight flex justify-center">
                    Ready to close faster?
                  </h1>
                  <span className="text-3xl md:4xl lg:text-4xl  text-[var(--color-20)] font-bold tracking-tight leading-tight flex justify-center ">Start your free trial today.</span>
                </div>

                <div>
                  <p className=" text-lg  text-[var(--color-19)] tracking-normal  flex justify-center pt-4 ">
                    Try it free. No contracts,no credit card. Just results, from day one
                  </p>
                </div>
                <div className=" flex flex-col md:flex-row lg:flex-row  justify-center gap-4 mt-6 l">
                  <button className="flex bg-[var(--color-8)] text-[var(--color-2)] justify-center text-md px-4 py-3 rounded-full font-semibold hover:bg-[var(--color-7)] transition">
                    Start Your Free Trial <GoChevronRight className="text-xl text-[var(--color-2)] font-semibold" />
                  </button>
                  <button className="flex rounded-full bg-[var(--color-2)] font-semibold justify-center text-[var(--color-1)]   border border-[var(--color-21)] px-4 py-3  text-md hover:bg-[var(--color-13)] transition">
                    Book a demo  <TbClick className=" pl-1 pt-1 text-2xl text-[var(--color-20)]" />
                  </button>
                </div>
                <div className=" place-items-center mt-6 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4  ">
                  <span className=" flex text-[var(--color-19)] text-md tracking-wide"><GoPeople className="mr-3 text-[var(--color-8)] text-xl" />Used by 2,300+ teams</span>
                  <span className=" flex text-[var(--color-19)] text-md tracking-wide"><TbLicenseOff className="mr-3 text-[var(--color-8)] text-xl" />Cancel anytime, no risk </span>
                  <span className=" flex text-[var(--color-19)] text-md tracking-wide"> <RiUserHeartLine className="mr-3 text-[var(--color-8)] text-xl" />97% user retention after 30 days </span>
                </div>
              </div>

            </div>
          </div>

          <div className="w-full flex  md:flex-row flex-col justify-around items-start pt-20 ">
            <div className="p-5 flex">
              <ul>
                <p className=" flex text-[var(--color-1)] font-bold text-2xl pb-6">
                  <Link href="/" className="-m-1.5 p-1.5">
                   <Image src={logoImg} alt="logo" height="20" className="invert-70"/>
                  </Link>
                </p>
                <p className="text-[var(--color-1)] tracking-normal text-md pb-3">
                  Building Excellence throu
                </p>
                <div className="flex gap-3 pb-5">
                  <div className="text-xl cursor-pointer w-9 h-9 rounded-lg bg-[var(--color-2)] hover:text-[var(--color-8)] hover:bg-[var(--color-13)] border border-[var(--color-19)]"><FaXbox className="text-4xl p-2" /></div>
                  <div className="text-xl cursor-pointer w-9 h-9  rounded-lg  bg-[var(--color-2)] hover:text-[var(--color-8)] hover:bg-[var(--color-13)] border border-[var(--color-19)]"><FaInstagram className="text-4xl p-2" /></div>
                  <div className="text-xl cursor-pointer  w-9 h-9  rounded-lg bg-[var(--color-2)] hover:text-[var(--color-8)] hover:bg-[var(--color-13)] border border-[var(--color-19)]"><FaLinkedin className="text-4xl p-2" /></div>
                  <div className="text-xl cursor-pointer w-9 h-9  rounded-lg  bg-[var(--color-2)] hover:text-[var(--color-8)] hover:bg-[var(--color-13)] border border-[var(--color-19)]"><MdOutlineAlternateEmail className="text-4xl p-2" /></div>
                  <div className="text-xl cursor-pointer w-9 h-9  rounded-lg  bg-[var(--color-2)] hover:text-[var(--color-8)] hover:bg-[var(--color-13)] border border-[var(--color-19)]"><RiYoutubeFill className="text-4xl p-2" /></div>
                </div>
                <div className="text-[var(--color-1)] font-bold text-md pb-6">English</div>
              </ul>
            </div>
            <div className=" p-4  lg:pl-25 ">
              <ul>
                <p className="text-[(--color-1)] font-bold text-xl pb-4">Features</p>
                <li className="text-[var(--color-20)] text-md pb-2 tracking-normal  hover:text-[var(--color-8)] cursor-pointer ">AI Assist<span className="ml-4 px-2 py-1 text-[var(--color-2)] rounded-full  text-center bg-[var(--color-8)] text-sm ">New</span></li>
                <li className="text-[var(--color-20)] text-md pb-2 tracking-normal  hover:text-[var(--color-8)] cursor-pointer ">Automation</li>
                <li className="text-[var(--color-20)] text-md pb-2 tracking-normal  hover:text-[var(--color-8)] cursor-pointer ">Pipeline Intelligence</li>
                <li className="text-[var(--color-20)] text-md pb-2 tracking-normal  hover:text-[var(--color-8)] cursor-pointer">Colaboration</li>
                <li className="text-[var(--color-20)] text-md pb-2 tracking-normal  hover:text-[var(--color-8)] cursor-pointer">Pricing</li>
              </ul>

            </div>
            <div className="p-4 ">
              <ul>
                <p className="text-[var(--color-1)] font-bold text-xl pb-4">Ues Cases</p>
                <li className="text-[var(--color-20)] text-md pb-2 tracking-normal hover:text-[var(--color-8)] cursor-pointer">Founders</li>
                <li className="text-[var(--color-20)] text-md pb-2 tracking-normal  hover:text-[var(--color-8)] cursor-pointer">Sales teams</li>
                <li className="text-[var(--color-20)] text-md pb-2 tracking-normal  hover:text-[var(--color-8)] cursor-pointer">RevOps</li>
                <li className="text-[var(--color-20)] text-md pb-2 tracking-normal  hover:text-[var(--color-8)] cursor-pointer">Agencies</li>

              </ul>
            </div>

            <div className="p-4 ">
              <ul>
                <p className="text-[var(--color-1)] font-bold text-xl pb-4">Resorces</p>
                <li className="text-[var(--color-20)] text-md pb-2 tracking-normal  hover:text-[var(--color-8)] cursor-pointer">Blog</li>
                <li className="text-[var(--color-20)] text-md pb-2 tracking-normal  hover:text-[var(--color-8)] cursor-pointer">Changelog</li>
                <li className="text-[var(--color-20)] text-md pb-2 tracking-normal  hover:text-[var(--color-8)] cursor-pointer">Customers</li>

              </ul>
            </div>

            <div className="p-4 ">
              <ul>
                <p className="text-[var(--color-1)] font-bold text-xl pb-4">Company</p>
                <li className="text-[var(--color-20)] text-md pb-2 tracking-normal  hover:text-[var(--color-8)] cursor-pointer">About</li>
                <li className="text-[var(--color-20)] text-md pb-2 tracking-normal  hover:text-[var(--color-8)] cursor-pointer">Careers</li>
                <li className="text-[var(--color-20)] text-md pb-2 tracking-normal  hover:text-[var(--color-8)] cursor-pointer">Contact sales</li>
                <li className="text-[var(--color-20)] text-md pb-2 tracking-normal  hover:text-[var(--color-8)] cursor-pointer">Contact support</li>

              </ul>
            </div>

          </div>
          <hr className="text-[var(--color-20)]"></hr>
          <div className=" p-5 flex flex-col md:flex-col lg:flex-row lg:items-start lg:gap-8 gap-4 lg:px-[6rem]  lg:w-[90%] lg:mx-auto ">
            <p className="text-left text-[var(--color-20)] text-md pb-2 tracking-normal">© 2025 Avenstek. All rights reserved.</p>
            <ul className="flex flex-col md:flex-col lg:flex-row gap-3 lg:gap-6 ml-0 lg:ml-[20rem]">
              <li className="text-[var(--color-20)] text-md pb-2 tracking-normal hover:text-[var(--color-8)] cursor-pointer">AI Disclosure</li>
              <li className="text-[var(--color-20)] text-md pb-2 tracking-normal hidden lg:block hover:text-[var(--color-8)] cursor-pointer">AUP</li>
              <li className="text-[var(--color-20)] text-md pb-2 tracking-normal block lg:hidden hover:text-[var(--color-8)] cursor-pointer">Acceptable Use Policy(AUP)</li>
              <li className="text-[var(--color-20)] text-md pb-2 tracking-normal block lg:hidden hover:text-[var(--color-8)] cursor-pointer">Data Processing Addendum(DPA)</li>
              <li className="text-[var(--color-20)] text-md pb-2 tracking-normal block lg:hidden hover:text-[var(--color-8)] cursor-pointer">Cookies Policy</li>
              <li className="text-[var(--color-20)] text-md pb-2 tracking-normal block lg:hidden hover:text-[var(--color-8)] cursor-pointer">Privacy  Policy</li>
              <li className="text-[var(--color-20)] text-md pb-2 tracking-normal block lg:hidden hover:text-[var(--color-8)] cursor-pointer">Terms Of Service</li>
              <li className="text-[var(--color-20)] text-md pb-2 tracking-normal hidden lg:block hover:text-[var(--color-8)] cursor-pointer">DPA</li>
              <li className="text-[var(--color-20)] text-md pb-2 tracking-normal hidden lg:block hover:text-[var(--color-8)] cursor-pointer">Cookies</li>
              <li className="text-[var(--color-20)] text-md pb-2 tracking-normal hidden lg:block hover:text-[var(--color-8)] cursor-pointer">Privacy</li>
              <li className="text-[var(--color-20)] text-md pb-2 tracking-normal hidden lg:block hover:text-[var(--color-8)] cursor-pointer">Terms</li>
            </ul>
          </div>

        </footer> */}

        <footer className="h-auto border-t-[1px]">
          <div className="w-full flex md:flex-row flex-col justify-around items-start pt-20">
            <div className="p-5 flex">
              <ul>
                <p className="flex text-[var(--color-1)] font-bold text-2xl pb-6">
                  <Link href="/" className="-m-1.5 p-1.5">
                    <Image src={logoImg} alt="logo" height="20" className="invert-70"/>
                  </Link>
                </p>
                <p className="text-[var(--color-1)] tracking-normal text-md pb-3">
                  Building Excellence Through Consistency in Innovation.
                </p>
                <div className="flex gap-3 pb-5">
                  <Link href="https://www.instagram.com/avenstek/" className="text-xl cursor-pointer w-9 h-9 rounded-lg bg-[var(--color-2)] hover:text-[var(--color-8)] hover:bg-[var(--color-13)] border border-[var(--color-19)]"><FaInstagram className="text-4xl p-2" /></Link>
                  <Link href="https://www.linkedin.com/company/avenstek" className="text-xl cursor-pointer w-9 h-9 rounded-lg bg-[var(--color-2)] hover:text-[var(--color-8)] hover:bg-[var(--color-13)] border border-[var(--color-19)]"><FaLinkedin className="text-4xl p-2" /></Link>
                  <Link href="https://x.com/avenstek" className="text-xl cursor-pointer w-9 h-9 rounded-lg bg-[var(--color-2)] hover:text-[var(--color-8)] hover:bg-[var(--color-13)] border border-[var(--color-19)]"><BsTwitterX className="text-4xl p-2" /></Link>
                  <Link href="https://www.facebook.com/avenstek" className="text-xl cursor-pointer w-9 h-9 rounded-lg bg-[var(--color-2)] hover:text-[var(--color-8)] hover:bg-[var(--color-13)] border border-[var(--color-19)]"><FaFacebookF className="text-4xl p-2" /></Link>
                </div>
              </ul>
            </div>
            
            <div className="p-4 lg:pl-25">
              <ul>
                <p className="text-[var(--color-1)] font-bold text-xl pb-4">Quick Links</p>
                <li className="text-[var(--color-20)] text-md pb-2 tracking-normal hover:text-[var(--color-8)] cursor-pointer">
                  <Link href="/">Home</Link>
                </li>
                <li className="text-[var(--color-20)] text-md pb-2 tracking-normal hover:text-[var(--color-8)] cursor-pointer">
                  <Link href="/about-us">About Us</Link>
                </li>
                {/* <li className="text-[var(--color-20)] text-md pb-2 tracking-normal hover:text-[var(--color-8)] cursor-pointer">
                  <Link href="/product">Product</Link>
                </li> */}
                <li className="text-[var(--color-20)] text-md pb-2 tracking-normal hover:text-[var(--color-8)] cursor-pointer">
                  <Link href="/services">Services</Link>
                </li>
              </ul>
            </div>
            
            <div className="p-4">
              <ul>
                <p className="text-[var(--color-1)] font-bold text-xl pb-4">More Links</p>
                <li className="text-[var(--color-20)] text-md pb-2 tracking-normal hover:text-[var(--color-8)] cursor-pointer">
                  <Link href="/contact-us">Contact Us</Link>
                </li>
                <li className="text-[var(--color-20)] text-md pb-2 tracking-normal hover:text-[var(--color-8)] cursor-pointer">
                  <Link href="/careers">Careers</Link>
                </li>
                <li className="text-[var(--color-20)] text-md pb-2 tracking-normal hover:text-[var(--color-8)] cursor-pointer">
                  <Link href="/blog">Blog</Link>
                </li>
              </ul>
            </div>
            
            {/* Newsletter Subscription Section */}
            <div className="p-4">
              <ul>
                <p className="text-[var(--color-1)] font-bold text-xl pb-4">Stay Updated</p>
                <p className="text-[var(--color-20)] text-md pb-4 tracking-normal max-w-xs">
                  Subscribe to our newsletter for the latest updates, news, and insights.
                </p>
                <div className="flex flex-col gap-3">
                  <form 
                    onSubmit={async (e) => {
                      e.preventDefault();
                      const form = e.target as HTMLFormElement;
                      const emailInput = form.querySelector('input') as HTMLInputElement;
                      const email = emailInput.value;
                      
                      if (!email) return;
                      
                      const submitBtn = form.querySelector('button') as HTMLButtonElement;
                      const originalText = submitBtn.innerText;
                      submitBtn.disabled = true;
                      submitBtn.innerText = 'Subscribing...';

                      try {
                        const api = (await import('@/lib/api')).default;
                        await api.post('/content/subscribers', { email });
                        alert('Thank you for subscribing!');
                        emailInput.value = '';
                      } catch (err: any) {
                        if (err.response?.status === 400 || err.response?.data?.message?.includes('duplicate')) {
                          alert('This email is already subscribed.');
                        } else {
                          alert('Something went wrong. Please try again.');
                        }
                      } finally {
                        submitBtn.disabled = false;
                        submitBtn.innerText = originalText;
                      }
                    }} 
                    className="flex flex-col gap-3"
                  >
                    <div className="relative">
                      <input
                        type="email"
                        required
                        placeholder="Enter your email"
                        className="w-full px-4 py-3 rounded-lg bg-[var(--color-2)] border border-[var(--color-19)] text-[var(--color-20)] placeholder-[var(--color-20)]/60 focus:outline-none focus:border-[var(--color-8)] focus:ring-1 focus:ring-[var(--color-8)]"
                      />
                    </div>
                    <button 
                      type="submit"
                      className="px-6 py-3 rounded-lg bg-[var(--color-8)] text-[var(--color-2)] font-semibold hover:bg-[var(--color-7)] transition duration-300 border border-[var(--color-19)] disabled:opacity-50"
                    >
                      Subscribe
                    </button>
                  </form>
                </div>
                <p className="text-[var(--color-20)] text-xs pt-3 opacity-70">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </ul>
            </div>
          </div>
          
          <hr className="text-[var(--color-20)]"></hr>
          
          <div className="p-5 flex justify-center lg:gap-8 gap-4 lg:px-[6rem] lg:w-[90%] lg:mx-auto">
            <p className="text-left text-[var(--color-20)] text-md pb-2 tracking-normal">© 2026 Avenstek. All rights reserved.</p>
          </div>
        </footer>
        </>
  );
}