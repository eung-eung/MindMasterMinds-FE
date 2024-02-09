'use client'

import React from 'react'

import { Fragment, useState } from 'react'
import classes from './header.module.css';

import { Dialog, Popover, Transition } from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  CursorArrowRaysIcon,
  XMarkIcon,
  BanknotesIcon,
  ChartPieIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
} from '@heroicons/react/24/outline'
import { ChevronRightIcon, ChatBubbleLeftIcon, EnvelopeIcon, ArrowLeftEndOnRectangleIcon, BellAlertIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import UserInfor from './user-infor';
import { redirect } from 'next/navigation';

export default function Exp() {
    const [modalOpen, setModalOpen] = useState(false);

  return (
    <Dialog as="div" className="lg:hidden" open={modalOpen} onClose={setModalOpen}>
    <div className="fixed inset-0 z-10" />
    <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
      <div className="flex items-center justify-between">
        <button
          type="button"
          className="-m-2.5 rounded-md p-2.5 text-gray-700"
          onClick={() => setModalOpen(false)}
        >
          <span className="sr-only">Close menu</span>
          <XMarkIcon className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <div className="mt-6 flow-root">
        <div className="-my-6 divide-y divide-gray-500/10">
          <div className="space-y-2 py-6">
            {/* <div>


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
                    <Link href="/explores" className="block font-semibold text-gray-900">
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

            </div> */}
            <h1>Hello</h1>
          </div>

        </div>
      </div>
    </Dialog.Panel>
  </Dialog>  )
}
