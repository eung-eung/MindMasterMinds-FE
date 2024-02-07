"use-client"
import { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
import classes from './listCard.module.css'
import DetailModal from './detailModal';

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

const item: ClassData[] = [
  { id: 1, subject: 'MKT304', major: 'International Business', tutor: 'Mary Han', dateOfStudy: new Date('2024-01-31'), session: 3, fee: 300000, about: 'Im okay , Im fine , quyn cha na , quyn cha na , teng neng neng neng neng , ku mê na hàn ra sa sakit , rasa sakit , a hem bu ' },
  { id: 2, subject: 'MLN111', major: 'International Business', tutor: 'Mary Han', dateOfStudy: new Date('2024-01-31'), session: 3,fee: 300000, about: 'Im okay , Im fine , quyn cha na , quyn cha na , teng neng neng neng neng , ku mê na hàn ra sa sakit , rasa sakit , a hem bu ' },
  { id: 3, subject: 'MLN122', major: 'Digital Marketing', tutor: 'Adrian Bui', dateOfStudy: new Date('2024-01-31'), session: 3,fee: 300000, about: 'Im okay , Im fine , quyn cha na , quyn cha na , teng neng neng neng neng , ku mê na hàn ra sa sakit , rasa sakit , a hem bu ' },
  { id: 4, subject: 'ISC301', major: 'Multimedia Communications', tutor: 'Porsha Nguyen', dateOfStudy: new Date('2024-01-31'), session: 3,fee: 300000, about: 'Im okay , Im fine , quyn cha na , quyn cha na , teng neng neng neng neng , ku mê na hàn ra sa sakit , rasa sakit , a hem bu '  },
  { id: 5, subject: 'MKT304', major: 'Software Engineering', tutor: 'Peter Phu', dateOfStudy: new Date('2024-01-31'), session: 3,fee: 300000, about: 'Im okay , Im fine , quyn cha na , quyn cha na , teng neng neng neng neng , ku mê na hàn ra sa sakit , rasa sakit , a hem bu '  },
  { id: 6, subject: 'MMA301', major: 'Digital Marketing', tutor: 'Adrian Bui', dateOfStudy: new Date('2024-01-31'), session: 3,fee: 300000, about: 'Im okay , Im fine , quyn cha na , quyn cha na , teng neng neng neng neng , ku mê na hàn ra sa sakit , rasa sakit , a hem bu '  },
  { id: 7, subject: 'SDN301m', major: 'Software Engineering', tutor: 'Dino Phi', dateOfStudy: new Date('2024-01-31'), session: 3,fee: 300000, about: 'Im okay , Im fine , quyn cha na , quyn cha na , teng neng neng neng neng , ku mê na hàn ra sa sakit , rasa sakit , a hem bu '  },
  { id: 8, subject: 'EXE201', major: 'Multimedia Communications', tutor: 'Porsha Nguyen', dateOfStudy: new Date('2024-01-31'), session: 3,fee: 300000, about: 'Im okay , Im fine , quyn cha na , quyn cha na , teng neng neng neng neng , ku mê na hàn ra sa sakit , rasa sakit , a hem bu '  },
  { id: 9, subject: 'PRM391', major: 'Software Engineering', tutor: 'Peter Phu', dateOfStudy: new Date('2024-01-31'), session: 3,fee: 300000, about: 'Im okay , Im fine , quyn cha na , quyn cha na , teng neng neng neng neng , ku mê na hàn ra sa sakit , rasa sakit , a hem bu '  },
  { id: 10, subject: 'EXE101', major: 'Software Engineering', tutor: 'Dino Phi', dateOfStudy: new Date('2024-01-31'), session: 3,fee: 300000, about: 'Im okay , Im fine , quyn cha na , quyn cha na , teng neng neng neng neng , ku mê na hàn ra sa sakit , rasa sakit , a hem bu '  },
];

const itemPerPage = 6; // Adjust as needed

const ListCard: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedClass, setSelectedClass] = useState<ClassData | null>(null);

  const startIndex = (currentPage - 1) * itemPerPage;
  const endIndex = startIndex + itemPerPage;
  const currentItem = item.slice(startIndex, endIndex);

  const totalPages = Math.ceil(item.length / itemPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  // Handle open modal
  const handleButtonClick = (classItem: ClassData) => {
    setSelectedClass(classItem);
  };

  return (
    <div>
      <div>
        <section className="text-gray-600 body-font">
          <div className="container px-5 pb-24 pt-2 mx-auto">
            <h1 className={classes.title}>List Of Classes</h1>
            <div className="flex flex-wrap -m-4">
              {currentItem.map((classItem) => (
                <>
                <div onClick={()=>handleButtonClick(classItem)} key={classItem.id} className="p-4 md:w-1/3">
                  <div className="h-full border-2 border-gray-400 border-opacity-60 rounded-lg overflow-hidden">
                    <div className="p-6">
                      <h1 className={`${classes.subject} subject-font mb-6`}>{classItem.subject}</h1>
                      <div className="flex item-center mb-5">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                        </svg>
                        <h2 className={`${classes.titleItem} mr-2 ml-2`}>Major:</h2>
                        <p className={classes.contentItem}>{classItem.major}</p>
                      </div>
                      <div className="flex item-center mb-5">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                        </svg>
                        <h2 className={`${classes.titleItem} mr-2 ml-2`}>Tutor:</h2>
                        <p className={classes.contentItem}>{classItem.tutor}</p>
                      </div>
                      <div className="flex item-center mb-8">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                        </svg>
                        <h2 className={`${classes.titleItem} mr-2 ml-2`}> Date of Study:</h2>
                        <p className={classes.contentItem}>{classItem.dateOfStudy.toDateString()}</p>
                      </div>

                      <div className="flex item-center flex-wrap ">
                        <button onClick={()=>handleButtonClick(classItem)} className={`${classes.link} inline-flex item-center md:mb-2 lg:mb-0 cursor-pointer`}>Go To Course
                          <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                          </svg>
                        </button>
                        <DetailModal classItem={classItem} isOpen={selectedClass !== null && classItem.id === selectedClass.id} onClose={() => setSelectedClass(null)}/>

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

      <div className="flex item-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
        <div className="flex flex-1 justify-between sm:hidden">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            className={`relative inline-flex item-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium ${currentPage === 1 ? 'text-gray-400' : 'text-gray-700 hover:bg-gray-50'
              }`}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            className={`relative ml-3 inline-flex item-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium ${currentPage === totalPages ? 'text-gray-400' : 'text-gray-700 hover:bg-gray-50'
              }`}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
        <div className="hidden sm:flex sm:flex-1 sm:item-center sm:justify-between">
          <div>
            <p className="text-sm text-gray-700">
              Showing <span className="font-medium">{startIndex + 1}</span> to{' '}
              <span className="font-medium">{endIndex > item.length ? item.length : endIndex}</span> of{' '}
              <span className="font-medium">{item.length}</span> results
            </p>
          </div>
          <div>
            <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                className={`relative inline-flex item-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 ${currentPage === 1 ? 'cursor-not-allowed' : 'cursor-pointer'
                  }`}
                disabled={currentPage === 1}
              >
                <span className="sr-only">Previous</span>
                <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
              </button>
              {pageNumbers.map((page) => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`relative ${currentPage === page
                    ? 'z-10 inline-flex item-center bg-black px-4 py-2 text-sm font-semibold text-white focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-black-600'
                    : 'inline-flex item-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0'
                    }`}
                >
                  {page}
                </button>
              ))}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                className={`relative inline-flex item-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 ${currentPage === totalPages ? 'cursor-not-allowed' : 'cursor-pointer'
                  }`}
                disabled={currentPage === totalPages}
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

export default ListCard;
