'use client'
import { Fragment, useState } from 'react'
import classes from './header.module.css';

import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  CursorArrowRaysIcon,
  XMarkIcon,
  BuildingOfficeIcon
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, ChevronRightIcon, ChatBubbleLeftIcon, EnvelopeIcon, ArrowLeftEndOnRectangleIcon } from '@heroicons/react/20/solid'
import { signIn, signOut, useSession } from 'next-auth/react';

import Nav from './nav'
import HeaderNoAuth from '../header/headerNoAuth';



interface HeaderProps {
  title: string;
  titleDetail?: string;
  height?: number;
  isHome: boolean;
}

const Header: React.FC<HeaderProps> = ({ title, titleDetail, height, isHome }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { data: session, status } = useSession()

  return (

    <header className={classes.background} >

      {/* Navbar */}
      {
        !session
          ?
          <HeaderNoAuth />
          :
          <Nav />
      }
      {/* Responsive hambergur box */}
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <div>
                  <div
                    key="About Us"
                    className="group relative flex items-center gap-x-6 rounded-lg p-1 text-sm leading-6 hover:bg-gray-50"
                  >
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <BuildingOfficeIcon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                    </div>
                    <div className="flex-auto">
                      <a href="#" className="block font-semibold text-gray-900">
                        About Us
                        <span className="absolute inset-0" />
                      </a>
                    </div>
                  </div>

                  <div
                    key="Our Service"
                    className="group relative flex items-center gap-x-6 rounded-lg p-1 text-sm leading-6 hover:bg-gray-50"
                  >
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <CursorArrowRaysIcon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                    </div>
                    <div className="flex-auto">
                      <a href="#" className="block font-semibold text-gray-900">
                        Our Service
                        <span className="absolute inset-0" />
                      </a>
                    </div>

                  </div>
                  <div className="ml-6">
                    <div
                      key="Our Service"
                      className="group relative flex items-center gap-x-6 rounded-lg p-1 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <ChevronRightIcon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                      </div>
                      <div className="flex-auto">
                        <a href="#" className="block font-semibold text-gray-900">
                          Find A Tutor
                          <span className="absolute inset-0" />
                        </a>
                      </div>
                    </div>
                    <div
                      key="Our Service"
                      className="group relative flex items-center gap-x-6 rounded-lg p-1 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <ChevronRightIcon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                      </div>
                      <div className="flex-auto">
                        <a href="#" className="block font-semibold text-gray-900">
                          Become A Tutor
                          <span className="absolute inset-0" />
                        </a>
                      </div>
                    </div>
                    <div
                      key="Our Service"
                      className="group relative flex items-center gap-x-6 rounded-lg p-1 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <ChevronRightIcon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                      </div>
                      <div className="flex-auto">
                        <a href="#" className="block font-semibold text-gray-900">
                          Blog
                          <span className="absolute inset-0" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div
                    key="Chat"
                    className="group relative flex items-center gap-x-6 rounded-lg p-1 text-sm leading-6 hover:bg-gray-50"
                  >
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <ChatBubbleLeftIcon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                    </div>
                    <div className="flex-auto">
                      <a href="#" className="block font-semibold text-gray-900">
                        Chat
                        <span className="absolute inset-0" />
                      </a>
                    </div>

                  </div>

                  <div
                    key="Contact Us"
                    className="group relative flex items-center gap-x-6 rounded-lg p-1 text-sm leading-6 hover:bg-gray-50"
                  >
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <EnvelopeIcon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                    </div>
                    <div className="flex-auto">
                      <a href="#" className="block font-semibold text-gray-900">
                        Contact Us
                        <span className="absolute inset-0" />
                      </a>
                    </div>

                  </div>
                  <div
                    key="History"
                    className="group relative flex items-center gap-x-6 rounded-lg p-1 text-sm leading-6 hover:bg-gray-50"
                  >
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <ArrowPathIcon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                    </div>
                    <div className="flex-auto">
                      <a href="#" className="block font-semibold text-gray-900">
                        History
                        <span className="absolute inset-0" />
                      </a>
                    </div>

                  </div>
                  <div
                    key="Log Out"
                    className="group relative flex items-center gap-x-6 rounded-lg p-1 text-sm leading-6 hover:bg-gray-50"
                  >
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <ArrowLeftEndOnRectangleIcon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                    </div>
                    <div className="flex-auto">
                      <a href="#" className="block font-semibold text-gray-900">
                        Log Out
                        <span className="absolute inset-0" />
                      </a>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </Dialog.Panel>
      </Dialog>

      {/* Image */}
      <div className="container flex flex-col mx-auto bg-cover bg-center bg-no-repeat" >
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="text-center mb-20">
              <h1 className={`${classes.title} sm:text-3xl text-2xl font-medium title-font mb-4`}>{title}</h1>
              <p className={`${classes.titleDetail} text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto`}>{titleDetail}</p>
            </div>
            {
              isHome &&
              <section className="text-gray-600 body-font">
                <div className="container px-5 py-0 mx-auto absolute">
                  <div className="flex flex-wrap -m-4">
                    <div className="lg:w-1/4 md:w-1/2 p-6 w-full hidden md:block mb-24">
                      <div className={`${classes.card} p-6 flex flex-col items-center justify-center text-center`}>
                        <img className={classes.cardImage} src="https://www.svgrepo.com/show/504405/google-classroom.svg" alt="content" />
                        <h3 className={classes.cardTitle}>100%</h3>
                        <h2 className={`${classes.cardContent} b-4`}>Online study sessions</h2>
                      </div>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 p-6 w-full hidden md:block">
                      <div className={`${classes.card} p-6 flex flex-col items-center justify-center text-center`}>
                        <img className={classes.cardImage} src="https://s3-alpha-sig.figma.com/img/fbd0/c642/71da4f09ca896e95e08896b21b901035?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CRK~QkddrkuW5MZ3bEAy4pumcW3CLQIuaH7FtWGPoFaAn2WkyEWTdGparP9Hm6a64RMBJfj~3LBaoPNtbJ8gthahZMBo-DKvcpoq2umKO~z4fKx67h-WHKZRFJm6LdfcgI23~HCQfmAQguNF2OC7DIp3UG5jR7R70Kgk1qJRbZEklB1zkkW9AF5p-nlmsQHJjlfDBhme4rUHDWktKgyb6wyi4h-6FC5yOZgzsMCCoWzWHrlqXlPcN~ITehDGX~UE4~jVedShwhXx24eAeBAjHd0DPvJJfo4W5~F7RjnqjbZqfuGDBhXrcelroV1lt0n3BBQzpYk5pvXV9Z-ENkVQ~Q__" alt="content" />
                        <h3 className={classes.cardTitle}>100%</h3>
                        <h2 className={`${classes.cardContent} b-4`}>Reputable teachers</h2>
                      </div>
                    </div>

                    <div className="lg:w-1/4 md:w-1/2 p-6 w-full hidden md:block">
                      <div className={`${classes.card} p-6 flex flex-col items-center justify-center text-center`}>
                        <img className={classes.cardImage} src="https://www.svgrepo.com/show/151328/open-book.svg" alt="content" />
                        <h3 className={classes.cardTitle}>50+</h3>
                        <h2 className={`${classes.cardContent} b-4`}>Tips for various fields</h2>
                      </div>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 p-6 w-full hidden md:block">
                      <div className={`${classes.card} p-6 flex flex-col items-center justify-center text-center`}>
                        <img className={classes.cardImage} src="https://www.svgrepo.com/download/169825/graduation-hat.svg" alt="content" />
                        <h3 className={classes.cardTitle}>80%</h3>
                        <h2 className={`${classes.cardContent} b-4`}>Students in progress</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            }


          </div>
        </section>
      </div>

    </header>

  )
}

export default Header;
