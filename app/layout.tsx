'use client'

import "./globals.css";

import { GoChevronRight } from "react-icons/go";
import { GoZap } from "react-icons/go";
import { TbClick } from "react-icons/tb";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { RiYoutubeFill } from "react-icons/ri";
import { FaXbox } from "react-icons/fa";
import { GoPeople } from "react-icons/go";
import { TbLicenseOff } from "react-icons/tb";
import { RiUserHeartLine } from "react-icons/ri";

import { useState } from 'react'
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
  { name: 'About', description: 'Whos behind Hexa', href: '#', icon: ChartPieIcon },
  { name: 'Careers', description: 'Join the team', href: '#', icon: CursorArrowRaysIcon },
  { name: 'Get help', description: 'Need a hand? We`ve got you', href: '#', icon: FingerPrintIcon },

]




export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>


        <header className="bg-white dark:bg-gray-900">
          <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
            <div className="flex lg:flex-1">
              <a href="#" className="-m-1.5 p-1.5">
                <p className=" flex text-[var(--color-1)] font-bold text-2xl ">
                  <span className="rounded-full w-7 h-7 bg-[var(--color-8)] mr-2"><GoZap className="text-[var(--color-2)] text-3xl font-bold" /></span> Hexa</p>
              </a>

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
                <PopoverButton className="flex items-center text-[var(--color-20)] gap-x-1 text-sm/6 font-semibold  dark:text-white hover:bg-[var(--color-13)] hover:rounded-full">
                  Product
                  <ChevronDownIcon aria-hidden="true" className="size-5 flex-none text-gray-400 dark:text-gray-500" />
                </PopoverButton>

                <PopoverPanel
                  transition
                  className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 overflow-hidden rounded-3xl bg-white shadow-lg outline-1 outline-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in dark:bg-gray-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10"
                >
                  <div className="p-4">
                    {products.map((item) => (
                      <div
                        key={item.name}
                        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6  hover:bg-[var(--color-13)] dark:hover:bg-white/5 "
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
              </Popover>



              <Popover className="relative">
                <PopoverButton className="flex items-center text-[var(--color-20)] gap-x-1 text-sm/6 font-semibold  dark:text-white hover:bg-[var(--color-13)] hover:rounded-full">
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
              </Popover>

              <Popover className="relative">
                <PopoverButton className="flex items-center text-[var(--color-20)]  gap-x-1 text-sm/6 font-semibold  dark:text-white hover:bg-[var(--color-13)] hover:rounded-full">
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
              </Popover>

              <Popover className="relative">
                <PopoverButton className="flex items-center text-[var(--color-20)] gap-x-1 text-sm/6 font-semibold  dark:text-white hover:bg-[var(--color-13)] hover:rounded-full">
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
              </Popover>




              <a href="#" className="text-sm/6 font-semibold text-[var(--color-20)] dark:text-white hover:bg-[var(--color-13)] hover:rounded-full ">
                Pricing
              </a>
            </PopoverGroup>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end ml-[3rem]">
              <a href="#" className="text-sm/6 font-semibold text-gray-900 dark:text-white">
                <button className="flex bg-[var(--color-8)] text-[var(--color-2)] text-sm  px-3 py-3 rounded-full font-semibold hover:bg-[var(--color-7)] transition ">Purchase template<GoChevronRight className="text-xl text-[var(--color-2)] font-semibold" /></button>
              </a>
              <a href="#" className="text-sm/6 font-semibold text-gray-900 dark:text-white">
                <button className=" ml-3 flex rounded-full bg-[var(--color-2)] text-sm font-semibold px-3 py-3 text-[var(--color-1)] border border-[var(--color-21)]  hover:bg-[var(--color-13)] transition">
                  Book a demo <TbClick className=" pl-1 pt-1 text-xl text-[var(--color-20)]" />
                </button>
              </a>
            </div>
          </nav>
          <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
            <div className="fixed inset-0 z-50" />
            <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 dark:bg-gray-900 dark:sm:ring-gray-100/10">
              <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                  <p className=" flex text-[var(--color-1)] font-bold text-2xl ">
                    <span className="rounded-full w-7 h-7 bg-[var(--color-8)] mr-2"><GoZap className="text-[var(--color-2)] text-3xl font-bold" /></span> Hexa</p>
                </a>
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
                        {products.map((item) => (
                          <DisclosureButton
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-white/5"
                          >
                            <div className="flex gap-3xl ">
                              <div className="flex size-11 flex-none items-center justify-center  dark:bg-gray-700/50 dark:group-hover:bg-gray-700">
                                <item.icon
                                  aria-hidden="true"
                                  className="size-6 text-[var(--color-6)]  dark:text-gray-400 dark:group-hover:text-white"
                                />
                              </div>
                              <div className="pt-2 pl-4 text-md text-[var(--color-20)]">
                                {item.name}
                              </div>
                            </div>
                          </DisclosureButton>
                        ))}
                      </DisclosurePanel>
                    </Disclosure>

                    <Disclosure as="div" className="-mx-3">
                      <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-[var(--color-20)] hover:bg-gray-50 dark:text-white dark:hover:bg-white/5">
                        Solution
                        <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-open:rotate-180" />
                      </DisclosureButton>
                      <DisclosurePanel className="mt-2 space-y-2">
                        {solutions.map((item) => (
                          <DisclosureButton
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-white/5"
                          >
                            <div className="flex gap-3xl ">
                              <div className="flex size-11 flex-none items-center justify-center  dark:bg-gray-700/50 dark:group-hover:bg-gray-700">
                                <item.icon
                                  aria-hidden="true"
                                  className="size-6 text-[var(--color-6)]  dark:text-gray-400 dark:group-hover:text-white"
                                />
                              </div>
                              <div className="pt-2 pl-4 text-md text-[var(--color-20)]">
                                {item.name}
                              </div>
                            </div>
                          </DisclosureButton>
                        ))}
                      </DisclosurePanel>
                    </Disclosure>

                    <Disclosure as="div" className="-mx-3">
                      <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-[var(--color-20)] hover:bg-gray-50 dark:text-white dark:hover:bg-white/5">
                        Resources
                        <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-open:rotate-180" />
                      </DisclosureButton>
                      <DisclosurePanel className="mt-2 space-y-2">
                        {resources.map((item) => (
                          <DisclosureButton
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-white/5"
                          >
                            <div className="flex gap-3xl ">
                              <div className="flex size-11 flex-none items-center justify-center  dark:bg-gray-700/50 dark:group-hover:bg-gray-700">
                                <item.icon
                                  aria-hidden="true"
                                  className="size-6 text-[var(--color-6)]  dark:text-gray-400 dark:group-hover:text-white"
                                />
                              </div>
                              <div className="pt-2 pl-4 text-md text-[var(--color-20)]">
                                {item.name}
                              </div>
                            </div>
                          </DisclosureButton>
                        ))}
                      </DisclosurePanel>
                    </Disclosure>

                    <Disclosure as="div" className="-mx-3">
                      <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-[var(--color-20)] hover:bg-gray-50 dark:text-white dark:hover:bg-white/5">
                        Company
                        <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-open:rotate-180" />
                      </DisclosureButton>
                      <DisclosurePanel className="mt-2 space-y-2">
                        {company.map((item) => (
                          <DisclosureButton
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-white/5"
                          >
                            <div className="flex gap-3xl ">
                              <div className="flex size-11 flex-none items-center justify-center  dark:bg-gray-700/50 dark:group-hover:bg-gray-700">
                                <item.icon
                                  aria-hidden="true"
                                  className="size-6 text-[var(--color-6)]  dark:text-gray-400 dark:group-hover:text-white"
                                />
                              </div>
                              <div className="pt-2 pl-4 text-md text-[var(--color-20)]">
                                {item.name}
                              </div>
                            </div>

                          </DisclosureButton>
                        ))}
                      </DisclosurePanel>
                    </Disclosure>

                    <a
                      href="#"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-[var(--color-20)] hover:bg-gray-50 dark:text-white dark:hover:bg-white/5"
                    >
                      Pricing
                    </a>

                  </div>
                  <div className="py-6">
                    <a
                      href="#"
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-white/5"
                    >
                      <button className=" flex justify-center bg-[var(--color-8)] text-[var(--color-2)] text-sm  px-3 py-2 rounded-full font-semibold hover:bg-[var(--color-7)] transition w-[100%] md:w-[100%] lg:w-[0]">Purchase template<GoChevronRight className="text-xl text-[var(--color-2)] font-semibold" /></button>
                    </a>
                    <a
                      href="#"
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-white/5 "
                    >
                      <button className="sm:ml-0 md:ml-0 lg:ml-3 flex justify-center rounded-full bg-[var(--color-2)] text-sm font-semibold px-3 py-2 text-[var(--color-1)] border border-[var(--color-21)]  hover:bg-[var(--color-13)] transition sm:w-full w-[100%] md:w-[100%] lg:w-[0]">
                        Book a demo <TbClick className=" pl-1 pt-1 text-2xl text-[var(--color-20)]" />
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </Dialog>
        </header>

        <main>
          {children}
        </main>
        <footer className="bg-[var(--color-13)] h-auto">

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
                  <span className="rounded-full w-7 h-7 bg-[var(--color-8)] mr-2"><GoZap className="text-[var(--color-2)] text-3xl p-1" /></span> Hexa
                </p>
                <p className="text-[var(--color-1)] tracking-normal text-md pb-3">
                  Built for the teams shaping tomorrow.
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
            <p className="text-left text-[var(--color-20)] text-md pb-2 tracking-normal">© 2025 Hexa. All rights reserved.</p>
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

        </footer>
      </body>
    </html>
  );
}