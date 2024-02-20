"use-client"
import { Fragment, useEffect, useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
import classes from './listCard.module.css'
import DetailModal from './detailModal';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { Menu, Transition } from '@headlessui/react'
import useAxiosAuth from '@/app/lib/hooks/useAxiosAuth';
import { Class } from '@/app/types/Class';
import moment from 'moment-timezone';
import Link from 'next/link';



interface ClassData {
  id: number;
  subject: string;
  major: string;
  tutor: string;
  dateOfStudy: Date;
  session: number;
  about: string;
  fee: number
}

const classItem: ClassData[] = [
  { id: 1, subject: 'MKT304', major: 'International Business', tutor: 'Mary Han', dateOfStudy: new Date('2024-01-31'), session: 3, fee: 300000, about: 'Im okay , Im fine , quyn cha na , quyn cha na , teng neng neng neng neng , ku mê na hàn ra sa sakit , rasa sakit , a hem bu ' },
  { id: 2, subject: 'MLN111', major: 'International Business', tutor: 'Mary Han', dateOfStudy: new Date('2024-01-31'), session: 3, fee: 300000, about: 'Im okay , Im fine , quyn cha na , quyn cha na , teng neng neng neng neng , ku mê na hàn ra sa sakit , rasa sakit , a hem bu ' },
  { id: 3, subject: 'MLN122', major: 'Digital Marketing', tutor: 'Adrian Bui', dateOfStudy: new Date('2024-01-31'), session: 3, fee: 300000, about: 'Im okay , Im fine , quyn cha na , quyn cha na , teng neng neng neng neng , ku mê na hàn ra sa sakit , rasa sakit , a hem bu ' },
  { id: 4, subject: 'ISC301', major: 'Multimedia Communications', tutor: 'Porsha Nguyen', dateOfStudy: new Date('2024-01-31'), session: 3, fee: 300000, about: 'Im okay , Im fine , quyn cha na , quyn cha na , teng neng neng neng neng , ku mê na hàn ra sa sakit , rasa sakit , a hem bu ' },
  { id: 5, subject: 'MKT304', major: 'Software Engineering', tutor: 'Peter Phu', dateOfStudy: new Date('2024-01-31'), session: 3, fee: 300000, about: 'Im okay , Im fine , quyn cha na , quyn cha na , teng neng neng neng neng , ku mê na hàn ra sa sakit , rasa sakit , a hem bu ' },
  { id: 6, subject: 'MMA301', major: 'Digital Marketing', tutor: 'Adrian Bui', dateOfStudy: new Date('2024-01-31'), session: 3, fee: 300000, about: 'Im okay , Im fine , quyn cha na , quyn cha na , teng neng neng neng neng , ku mê na hàn ra sa sakit , rasa sakit , a hem bu ' },
  { id: 7, subject: 'SDN301m', major: 'Software Engineering', tutor: 'Dino Phi', dateOfStudy: new Date('2024-01-31'), session: 3, fee: 300000, about: 'Im okay , Im fine , quyn cha na , quyn cha na , teng neng neng neng neng , ku mê na hàn ra sa sakit , rasa sakit , a hem bu ' },
  { id: 8, subject: 'EXE201', major: 'Multimedia Communications', tutor: 'Porsha Nguyen', dateOfStudy: new Date('2024-01-31'), session: 3, fee: 300000, about: 'Im okay , Im fine , quyn cha na , quyn cha na , teng neng neng neng neng , ku mê na hàn ra sa sakit , rasa sakit , a hem bu ' },
  { id: 9, subject: 'PRM391', major: 'Software Engineering', tutor: 'Peter Phu', dateOfStudy: new Date('2024-01-31'), session: 3, fee: 300000, about: 'Im okay , Im fine , quyn cha na , quyn cha na , teng neng neng neng neng , ku mê na hàn ra sa sakit , rasa sakit , a hem bu ' },
  { id: 10, subject: 'EXE101', major: 'Software Engineering', tutor: 'Dino Phi', dateOfStudy: new Date('2024-01-31'), session: 3, fee: 300000, about: 'Im okay , Im fine , quyn cha na , quyn cha na , teng neng neng neng neng , ku mê na hàn ra sa sakit , rasa sakit , a hem bu ' },
];

const itemPerPage = 6; // Adjust as needed

const ListCard: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedClass, setSelectedClass] = useState<Class | null>(null);
  const axiosAuth = useAxiosAuth()
  const [filterMajor, setFilterMajor] = useState('all');

  const filterClassByMajor = classItem.filter((classByMajor) => {
    if (filterMajor === 'all') {
      return true; // Show all tutors
    } else {
      return classByMajor.major.toLowerCase() === filterMajor.toLowerCase();
    }
  });
  const [listClasses, setListClasses] = useState<Class[]>([])
  const getAllListClasses = async () => {
    const response = await axiosAuth.get('/Order/get-list-order-by-course-and-status-by-me?pageNumber=0&pageSize=10')
    console.log(response);
    setListClasses(response.data.data)
  }
  useEffect(() => {
    getAllListClasses()
  }, [])



  const startIndex = (currentPage - 1) * itemPerPage;
  const endIndex = startIndex + itemPerPage;
  const currentItem = filterClassByMajor.slice(startIndex, endIndex);
  const totalPages = Math.ceil(classItem.length / itemPerPage);
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  console.log('list: ', listClasses);


  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };


  // Handle open modal
  const handleButtonClick = (classItem: Class) => {
    setSelectedClass(classItem);
  };

  const uniqueMajors = Array.from(new Set(classItem.map((thisClass) => thisClass.major)));



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
                    Filter Major
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
                      <Menu.Item>
                        <button
                          style={{ padding: "10px", width: '100%', paddingBottom: "10px", paddingTop: "10px", fontFamily: "Belanosima" }}
                          className={`mr-4 ${filterMajor === 'all' ? 'bg-gray-100' : ''}`}
                          onClick={() => setFilterMajor('all')}
                        >
                          All Majors
                        </button>
                      </Menu.Item>

                      {/* Render other majors */}
                      {uniqueMajors.map((major) => (
                        <Menu.Item key={major}>
                          <button
                            style={{ padding: "10px", width: '100%', paddingBottom: "10px", paddingTop: "10px", fontFamily: "Belanosima" }}
                            className={`mr-4 ${filterMajor === major ? 'bg-gray-100' : ''}`}
                            onClick={() => setFilterMajor(major)}
                          >
                            {major}
                          </button>
                        </Menu.Item>
                      ))}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>

            <div className="flex flex-wrap -m-4">
              {listClasses.map((classItem) => (
                <>
                  <div onClick={() => handleButtonClick(classItem)} key={classItem.id} className="p-4 md:w-1/3">
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
                            {classItem.tutor ? `${classItem.tutor.firstName + ' ' + classItem.tutor.lastName}` : 'No tutor'}</p>
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
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                          </svg>
                          <h2 className={`${classes.titleItem} mr-2 ml-2`}> Session:</h2>
                          <p className={classes.contentItem}>
                            {
                              classItem.quantity
                            }
                          </p>
                        </div>
                        <div className="flex item-center mb-5">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                          </svg>
                          <h2 className={`${classes.titleItem} mr-2 ml-2`}> Status:</h2>
                          <p className={classes.contentItem}>
                            {
                              classItem.statusOrder
                            }
                          </p>
                        </div>

                        <div className="flex item-center flex-wrap ">
                          <Link href={`/listClasses/${classItem.id}`}
                            className={`${classes.link} inline-flex item-center md:mb-2 lg:mb-0 cursor-pointer`}>
                            Go To Course
                            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M5 12h14"></path>
                              <path d="M12 5l7 7-7 7"></path>
                            </svg>
                          </Link>

                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ListCard;
