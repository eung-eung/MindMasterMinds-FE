'use client'
import React from 'react'
import Header from '@/app/components/homePage/header'
import LoadingTheme from '@/app/components/loadingTheme/loadingTheme'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import classes from './page.module.css'
import Footer from '../../components/footer/footer'
import HistoryOrderTable from './historyOrderTable'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'


function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
  }
export default function HistoryOrderPage() {
    const { data: session, status } = useSession()
    const [isLoading, setLoading] = React.useState<boolean>(true)
    console.log(session);

    React.useEffect(() => {
        if (status !== 'loading') setLoading(false)
        if (!session && status === 'unauthenticated') {
            redirect('/signIn')
        }
    }, [status])

    return (
        <div>
            {isLoading ? <LoadingTheme /> :
                <>
                    {/* Header */}
                    <Header title='Find A Tutor' isHome={false} />

                 {/* Search bar */}
                 <div className='container mx-auto my-24'>
  <div className="mt-16 ml-6 grid grid-cols-1 gap-x-16 gap-y-4 sm:grid-cols-6">
    <div className="sm:col-span-3">
      <label htmlFor="searchTutor" className={classes.searchLabel}>
        History Order
      </label>
      <div className={`${classes.inputSearch} block w-full rounded-md border-0 py-3 px-4 text-gray-600 shadow-sm ring-1 ring-inset ring-white placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6 mt-4`}>
        <div className="flex items-center">
          <button className="mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-gray-600">
              <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
          </button>
          <input
            type="text"
            name="searchOrder"
            id="searchOrder"
            autoComplete="Search"
            placeholder="Search orderID"
          />
        </div>
      </div>
    </div>
    
    {/* Another Input Field Next to the Existing One in the Same Row */}
    <div className="sm:col-span-3 ml-36  mt-16">
    <Menu as="div" className={`relative inline-block text-left mr-6`}>
      <div>
        <Menu.Button className={`${classes.filter} inline-flex w-full justify-center items-center gap-x-1.5 rounded-md px-3 py-2`}>
          Status
          <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Pending
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Class Accepted
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Studied
                </a>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>


    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className={`${classes.filter} inline-flex w-full justify-center items-center gap-x-1.5 rounded-md px-3 py-2`}>
          Filter
          <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Pending
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Class Accepted
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Studied
                </a>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
    </div>
  </div>
</div>


                 {/* Table */}
                 <div className='container mx-auto my-24'>
                 <HistoryOrderTable/>
                 </div>
                

                    {/* Footer */}
                    <Footer />
                </>
            }
        </div>
    )
}
