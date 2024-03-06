"use-client"
import { Fragment, useEffect, useState } from 'react';

import classes from './listCard.module.css'
import SummarizeIcon from '@mui/icons-material/Summarize';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { Menu, Transition } from '@headlessui/react'
import useAxiosAuth from '@/app/lib/hooks/useAxiosAuth';
import { Class } from '@/app/types/Class';
import moment from 'moment-timezone';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import CardItemSkeleton from '@/app/skeletons/cardItemSkeleton';
import Stack from '@mui/material/Stack';
import Pagination from '@mui/material/Pagination';
import { useRouter } from 'next/navigation'
import { useSearchParams } from 'next/dist/client/components/navigation';

const listStatus = [
  'All', 'On Progress', 'Completed'
]

const itemPerPage = 6 // Adjust as needed

const ListCard: React.FC = (

) => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const currentPage = Number(searchParams?.get('page')) || 1;

  const axiosAuth = useAxiosAuth()
  const { data: session } = useSession()
  const [filterMajor, setFilterMajor] = useState('all');
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [totalRows, setTotalRows] = useState<number>()

  const [listClasses, setListClasses] = useState<Class[]>([])



  const getAllListClasses = async () => {
    setIsLoading(true)
    const response = await axiosAuth.get(`/Order/get-list-order-by-course-and-status-by-me?pageNumber=${currentPage - 1}&pageSize=${itemPerPage}`)
    setIsLoading(false)
    setTotalRows(Math.ceil(response.data.pagination.totalRow / itemPerPage))
    setListClasses(response.data.data)
  }
  const handlePagination = (event: React.ChangeEvent<any>, page: any) => {
    router.push('/listClasses?page=' + page)
  }
  const getAllListClassesRoleTutor = async () => {
    setIsLoading(true)
    const response = await axiosAuth.get(`/Order/get-list-order-by-course-and-status-by-tutor?pageNumber=${currentPage - 1}&pageSize=${itemPerPage}`)
    setTotalRows(Math.ceil(response.data.pagination.totalRow / itemPerPage))
    setListClasses(response.data.data)
    setIsLoading(false)
  }
  useEffect(() => {
    if (session?.user.userViewLogin.userRole.roleName === 'Tutor') {
      getAllListClassesRoleTutor()

    } else if (session?.user.userViewLogin.userRole.roleName === 'Student') {
      getAllListClasses()
    }
  }, [currentPage])
  return (
    <div>
      <div>
        <section className="text-gray-600 body-font">
          <div className="container px-5 pb-24 pt-2 mx-auto">
            <div className="grid grid-cols-2">
              <h1 className={classes.title}>List Of Classes</h1>
              <Menu as="div" className={`relative inline-block`}>
                <div className='flex justify-end'>
                  <Menu.Button className={`${classes.filter} inline-flex w-auto justify-center items-center gap-x-1.5 rounded-md px-3 py-2`}>
                    {filterMajor}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z" />
                    </svg>
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
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-auto origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1 grid grid-cols-1 ">
                      {/* Add 'All Majors' button */}

                      {listStatus.map((status, index) =>
                        <Menu.Item key={index}>
                          <button
                            style={{ padding: "10px", width: '100%', paddingBottom: "10px", paddingTop: "10px", fontFamily: "Belanosima" }}
                            className={`mr-4 ${filterMajor === status ? 'bg-gray-100' : ''}`}
                            onClick={() => setFilterMajor(status)}
                          >
                            {status}
                          </button>
                        </Menu.Item>
                      )}



                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>

            <div className="flex flex-wrap -m-4">
              {isLoading ? <>
                <CardItemSkeleton />
                <CardItemSkeleton />
                <CardItemSkeleton />
              </>
                : listClasses.map((classItem) => (
                  <>
                    <div key={classItem.id} className="p-4 md:w-1/3">
                      <div className="h-full border-2 border-gray-400 border-opacity-60 rounded-lg overflow-hidden">
                        <div className="p-6">
                          <h1 className={`${classes.subject} subject-font mb-6`}>{classItem.courseSubject.subject.code}</h1>
                          <div className="flex item-center mb-5">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                            </svg>
                            <h2 className={`${classes.titleItem} mr-2 ml-2`}>Major:</h2>
                            <p className={classes.contentItem}>{classItem.courseSubject.course.name}</p>
                          </div>
                          <div className="flex item-center mb-5">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                            </svg>
                            <h2 className={`${classes.titleItem} mr-2 ml-2`}>Tutor:</h2>
                            <p className={classes.contentItem}>
                              {
                                classItem.tutor ? classItem.tutor.firstName + ' ' + classItem.tutor.lastName : ''
                              }
                            </p>


                          </div>
                          <div className="flex item-center mb-5">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                            </svg>
                            <h2 className={`${classes.titleItem} mr-2 ml-2`}> Date of Study:</h2>
                            <p className={classes.contentItem}>
                              {
                                moment.utc(classItem.study).tz('Asia/Ho_Chi_Minh').format('DD-MM-YYYY')
                              }
                            </p>
                          </div>
                          <div className="flex item-center mb-5">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>

                            <h2 className={`${classes.titleItem} mr-2 ml-2`}> Session:</h2>
                            <p className={classes.contentItem}>
                              {
                                classItem.quantity
                              }
                            </p>
                          </div>
                          <div className="flex item-center mb-5">
                            <SummarizeIcon />
                            <h2 className={`${classes.titleItem} mr-2 ml-2`}> Summary:</h2>
                            <p className={classes.contentItem}>
                              {
                                classItem.summary
                              }
                            </p>
                          </div>
                          <div className="flex item-center mb-5">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75" />
                            </svg>

                            <h2 className={`${classes.titleItem} mr-2 ml-2`}> Status:</h2>
                            <p className={classes.contentItem}>
                              {
                                classItem.statusOrder === "Confirmed"
                                  ? "On Progress"
                                  : classItem.statusOrder
                              }
                            </p>
                          </div>

                          <div className="flex item-center flex-wrap ">
                            {
                              classItem.tutor != null
                              && session?.user.userViewLogin.userRole.roleName === 'Tutor'
                              && (classItem.tutor.id === session?.user.userViewLogin.id) &&
                              <Link href={`/listClasses/${classItem.id}`}
                                className={`${classes.link} inline-flex item-center md:mb-2 lg:mb-0 cursor-pointer`}>
                                Go To Course
                                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                  <path d="M5 12h14"></path>
                                  <path d="M12 5l7 7-7 7"></path>
                                </svg>
                              </Link>
                            }
                            {
                              classItem.tutor != null
                              && session?.user.userViewLogin.userRole.roleName === 'Tutor'
                              && (classItem.tutor.id !== session?.user.userViewLogin.id)
                              && <span style={{ color: 'red' }}>You are not chosen</span>
                            }
                            {
                              session?.user.userViewLogin.userRole.roleName === 'Student'
                              &&
                              <Link href={`/listClasses/${classItem.id}`}
                                className={`${classes.link} inline-flex item-center md:mb-2 lg:mb-0 cursor-pointer`}>
                                Go To Course
                                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                  <path d="M5 12h14"></path>
                                  <path d="M12 5l7 7-7 7"></path>
                                </svg>
                              </Link>
                            }
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ))
              }

            </div>
            <Stack className={classes.pagi_box} spacing={2}>
              <Pagination count={totalRows}
                className={classes.pagi_button}
                onChange={handlePagination}
                page={currentPage}
                variant="outlined"
                color="standard" />
            </Stack>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ListCard;
