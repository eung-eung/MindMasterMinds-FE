"use-client"
import { useEffect, useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
import classes from './listCard.module.css'
import ClassModal from './classModal';
import useAxiosAuth from '@/app/lib/hooks/useAxiosAuth';
import { Class } from '@/app/types/Class';
import moment from 'moment-timezone';


export default function ListCard() {
    const [currentPage, setCurrentPage] = useState(1);
    const axiosAuth = useAxiosAuth()
    const [listClasses, setListClasses] = useState<Class[]>([])

    const getListClasses = async () => {
        const response = await axiosAuth.get('/Order?pageNumber=0&pageSize=100')
        console.log(response.data.data);
        setListClasses(response.data.data)

    }
    useEffect(() => {
        getListClasses()
    }, [])

    return (
        <div>
            <div>
                <section className="text-gray-600 body-font">
                    <div className="container px-5 py-18 mt-16 mx-auto">
                        <div className="flex flex-wrap -m-4">
                            {
                                listClasses.map((classItem) => (
                                    <div key={classItem.id}
                                        className={`${classes.card} container p-0 mb-16 w-full`}>
                                        <div className="h-full w-full">
                                            {/* First set of content */}
                                            <div className="flex p-3">
                                                <div className="flex mt-4 ml-6 flex-col md:pr-10 md:mb-0 mb-6 pr-0 mb-16 w-full md:w-2/3 md:text-left text-center">
                                                    <p className={classes.cardContent}>{classItem.summary}</p>
                                                    <p className={classes.cardDescription}>{classItem.description}</p>
                                                    <p className={`${classes.studyDate} `}>
                                                        Expected date of study: {
                                                            moment.utc(classItem.study).tz('Asia/Ho_Chi_Minh').format('DD-MM-YYYY')
                                                        }
                                                    </p>
                                                </div>

                                                <div className="flex p-4 items-center md:ml-auto md:mr-0 mx-auto flex-shrink-0">
                                                    <button className={classes.cardButtonWaiting}>
                                                        <h2 className={classes.cardButtonWaitingContent}>Waiting</h2>
                                                    </button>
                                                </div>
                                            </div>

                                            {/* Second set of content */}
                                            <div className="flex pb-4 pl-4">
                                                <div className="flex flex-col md:pr-10 md:mb-0 mb-2 pr-0 mb-2 w-full md:w-2/3 md:text-left text-center">
                                                    <div className="flex flex-wrap pr-2">

                                                        <div className="p-4">
                                                            <div className={`${classes.cardTag} p-2 mr-4 rounded-lg inline-block`}>
                                                                <p className={`${classes.cardTagContent} leading-relaxed text-base`}>{classItem.courseSubject.course.name}</p>
                                                            </div>
                                                            <div className={`${classes.cardTag} p-2 mr-4 rounded-lg inline-block`}>
                                                                <p className={`${classes.cardTagContent} leading-relaxed text-base`}>{classItem.courseSubject.subject.name}</p>
                                                            </div>
                                                            <div className={`${classes.cardTag} p-2 rounded-lg inline-block`}>
                                                                <p className={`${classes.cardTagContent} leading-relaxed text-base`}>{classItem.courseSubject.subject.code}</p>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                                <div className="flex items-center md:ml-auto md:mr-0 mx-auto flex-shrink-0 ">
                                                    <h2
                                                        className={`${classes.startDate} flex items-center flex-col leading-none`}
                                                    >
                                                        Create At: {
                                                            moment.utc(classItem.createdAt).tz('Asia/Ho_Chi_Minh').format('DD-MM-YYYY')

                                                        }

                                                    </h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                ))
                            }
                        </div>
                    </div>
                </section>
            </div>

            <div className="flex item-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
                <div className="flex flex-1 justify-between sm:hidden">
                    <button

                        className={`relative inline-flex item-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium ${currentPage === 1 ? 'text-gray-400' : 'text-gray-700 hover:bg-gray-50'
                            }`}
                        disabled={currentPage === 1}
                    >
                        Previous
                    </button>
                    <button

                        className={`relative ml-3 inline-flex item-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium ${true ? 'text-gray-400' : 'text-gray-700 hover:bg-gray-50'
                            }`}

                    >
                        Next
                    </button>
                </div>
                <div className="hidden sm:flex sm:flex-1 sm:item-center sm:justify-between">
                    <div>
                        <p className="text-sm text-gray-700">
                            Showing <span className="font-medium"></span> to{' '}
                            <span className="font-medium"></span> of
                            <span className="font-medium"></span> results
                        </p>
                    </div>
                    <div>
                        <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                            <button

                                className={`relative inline-flex item-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 ${currentPage === 1 ? 'cursor-not-allowed' : 'cursor-pointer'
                                    }`}
                                disabled={currentPage === 1}
                            >
                                <span className="sr-only">Previous</span>
                                <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                            </button>

                            <button


                                className={`relative ${true
                                    ? 'z-10 inline-flex item-center bg-black px-4 py-2 text-sm font-semibold text-white focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-black-600'
                                    : 'inline-flex item-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0'
                                    }`}
                            >
                                1
                            </button>

                            <button

                                className=
                                {`relative inline-flex item-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 
                                ${true ? 'cursor-not-allowed' : 'cursor-pointer'
                                    }`}

                            >
                                <span className="sr-only">Next</span>
                                <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                            </button>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
};

