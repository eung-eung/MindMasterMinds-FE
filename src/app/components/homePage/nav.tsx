'use client'

import React from 'react'

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
import Link from 'next/link';

export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div>
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1 hidden lg:flex">
          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">

              <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-6 w-screen rounded-3xl max-w-md overflow-hidden bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  <div className="flex-none sm:flex">
                    <div className=" relative h-20 w-20 mx-8 my-8  sm:mb-0">
                      <img src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/user_male2-512.png" alt="imageUser" className="w-16 h-16 object-cover rounded-2xl" />
                      <a href="#" className="absolute -right-2 bottom-2   -ml-3  text-white p-1 text-xs bg-green-400 hover:bg-green-500 font-medium tracking-wider rounded-full transition ease-in duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                          <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z">
                          </path>
                        </svg>
                      </a>
                    </div>
                    <div className="flex items-center justify-between sm:mt-2">
                      <div className="flex items-center">
                        <div className="flex flex-col mt-6">
                          <div className={classes.guestUser}>Guest User</div>
                          <div className="flex-auto text-gray-400 my-2">
                            <span className="mr-3 ">
                              <div style={{ display: 'flex', alignItems: 'center' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                  <path d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z" />
                                </svg>
                                <span className="ml-2">Add your university or school</span>
                              </div>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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
                        key="findTutor"
                        className="group relative flex items-center gap-x-6 rounded-lg p-1 text-sm leading-6 hover:bg-gray-50"
                      >
                        <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                          <ChevronRightIcon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                        </div>
                        <div className="flex-auto">
                          <Link href="findTutor" className="block font-semibold text-gray-900">
                            Find A Tutor
                            <span className="absolute inset-0" />
                          </Link>
                        </div>
                      </div>
                      <div
                        key="becomeTutor"
                        className="group relative flex items-center gap-x-6 rounded-lg p-1 text-sm leading-6 hover:bg-gray-50"
                      >
                        <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                          <ChevronRightIcon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                        </div>
                        <div className="flex-auto">
                          <Link href="tutors" className="block font-semibold text-gray-900">
                            Become A Tutor
                            <span className="absolute inset-0" />
                          </Link>
                        </div>
                      </div>
                      <div
                        key="ListTutor"
                        className="group relative flex items-center gap-x-6 rounded-lg p-1 text-sm leading-6 hover:bg-gray-50"
                      >
                        <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                          <ChevronRightIcon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                        </div>
                        <div className="flex-auto">
                          <Link href="/listTutor" className="block font-semibold text-gray-900">
                            List of Tutors
                            <span className="absolute inset-0" />
                          </Link>
                        </div>
                      </div>
                      <div
                        key="Explore"
                        className="group relative flex items-center gap-x-6 rounded-lg p-1 text-sm leading-6 hover:bg-gray-50"
                      >
                        <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                          <ChevronRightIcon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                        </div>
                        <div className="flex-auto">
                          <Link href="/explore" className="block font-semibold text-gray-900">
                            Explore
                            <span className="absolute inset-0" />
                          </Link>
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
                        <p className="block font-semibold text-gray-900" onClick={() => signOut()}>
                          Log Out
                          <span className="absolute inset-0" />
                        </p>
                      </div>
                    </div>

                  </div>
                </div>


              </Popover.Panel>
            </Transition>
          </Popover>

        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        {/* Responsive menu */}
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
                        key="findTutor"
                        className="group relative flex items-center gap-x-6 rounded-lg p-1 text-sm leading-6 hover:bg-gray-50"
                      >
                        <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                          <ChevronRightIcon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                        </div>
                        <div className="flex-auto">
                          <Link href="/findTutor" className="block font-semibold text-gray-900">
                            Find A Tutor
                            <span className="absolute inset-0" />
                          </Link>
                        </div>
                      </div>
                      <div
                        key="becomeTutor"
                        className="group relative flex items-center gap-x-6 rounded-lg p-1 text-sm leading-6 hover:bg-gray-50"
                      >
                        <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                          <ChevronRightIcon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                        </div>
                        <div className="flex-auto">
                          <Link href="/tutors" className="block font-semibold text-gray-900">
                            Become A Tutor
                            <span className="absolute inset-0" />
                          </Link>
                        </div>
                      </div>
                      <div
                        key="listTutor"
                        className="group relative flex items-center gap-x-6 rounded-lg p-1 text-sm leading-6 hover:bg-gray-50"
                      >
                        <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                          <ChevronRightIcon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                        </div>
                        <div className="flex-auto">
                          <Link href="/listTutor" className="block font-semibold text-gray-900">
                          List of Tutors
                            <span className="absolute inset-0" />
                          </Link>
                        </div>
                      </div>
                      <div
                        key="Explore"
                        className="group relative flex items-center gap-x-6 rounded-lg p-1 text-sm leading-6 hover:bg-gray-50"
                      >
                        <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                          <ChevronRightIcon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                        </div>
                        <div className="flex-auto">
                          <Link href="/explore" className="block font-semibold text-gray-900">
                            Explore
                            <span className="absolute inset-0" />
                          </Link>
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

        <Popover.Group className="hidden lg:flex lg:gap-x-12 ">
          <Link href="/" className=" text-sm font-semibold leading-6 ">
            <h3 className={classes.h3}>MindMasterMinds</h3>
          </Link>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900 pr-10">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-6 h-6">
              <path fillRule="evenodd" d="M4.804 21.644A6.707 6.707 0 0 0 6 21.75a6.721 6.721 0 0 0 3.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 0 1-.814 1.686.75.75 0 0 0 .44 1.223ZM8.25 10.875a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25ZM10.875 12a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Zm4.875-1.125a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Z" clipRule="evenodd" />
            </svg>


          </a>

          {/* Profile url */}
          <a href="/profile" className="text-sm font-semibold leading-6 text-gray-900 pr-10">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-6 h-6">
              <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
            </svg>


          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
            </svg>
          </a>

        </div>
      </nav>
    </div>
  )
}
