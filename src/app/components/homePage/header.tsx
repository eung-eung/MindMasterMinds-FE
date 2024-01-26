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

import HeaderNoAuth from '../header/headerNoAuth';
import Link from 'next/link';
import Nav from './nav';



interface HeaderProps {
  title: string;
  titleDetail?: string;
  height?: number;
  isHome: boolean;
}

const Header: React.FC<HeaderProps> = ({ title, titleDetail, height, isHome }) => {
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
