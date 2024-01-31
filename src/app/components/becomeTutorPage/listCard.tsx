"use-client"
import { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
import classes from './listCard.module.css'
import ClassModal from './classModal';

interface ClassRequirementData {
    id: number;
    title: string;
    description: string;
    tags: string[];
    status: string;
    startDate: Date;
    endDate: Date;
    fee: number;
    session: number;
}

const item: ClassRequirementData[] = [
    {
        id: 1,
        title: 'Class 1',
        description: '1-Looking for a tutor to teach MKT304, 3rd semester, for final exam purposes. Fee: 30%, collected after the first lesson, collected once only.',
        tags: ['International Business', 'MKT304'],
        status: 'Waiting',
        startDate: new Date('2024-01-15'),
        endDate: new Date('2024-02-15'),
        session: 3,
        fee: 250000
    },
    {
        id: 2,
        title: 'Class 2',
        description: '2-Looking for a tutor to teach MKT304, 3rd semester, for final exam purposes. Fee: 30%, collected after the first lesson, collected once only.',
        tags: ['International Business', 'MKT304'],
        status: 'Waiting',
        startDate: new Date('2024-01-15'),
        endDate: new Date('2024-02-15'),
        session: 3,
        fee: 250000
    },

    {
        id: 3,
        title: 'Class 3',
        description: '3-Looking for a tutor to teach MKT304, 3rd semester, for final exam purposes. Fee: 30%, collected after the first lesson, collected once only.',
        tags: ['International Business', 'MKT304'],
        status: 'Waiting',
        startDate: new Date('2024-01-15'),
        endDate: new Date('2024-02-15'),
        session: 3,
        fee: 250000
    },
    {
        id: 4,
        title: 'Class 4',
        description: '4-Looking for a tutor to teach MKT304, 3rd semester, for final exam purposes. Fee: 30%, collected after the first lesson, collected once only.',
        tags: ['International Business', 'MKT304'],
        status: 'Waiting',
        startDate: new Date('2024-01-15'),
        endDate: new Date('2024-02-15'),
        session: 3,
        fee: 250000
    },
    {
        id: 5,
        title: 'Class 5',
        description: '5-Looking for a tutor to teach MKT304, 3rd semester, for final exam purposes. Fee: 30%, collected after the first lesson, collected once only.',
        tags: ['International Business', 'MKT304'],
        status: 'Waiting',
        startDate: new Date('2024-01-15'),
        endDate: new Date('2024-02-15'),
        session: 3,
        fee: 250000
    },
    {
        id: 6,
        title: 'Class 6',
        description: '6-Looking for a tutor to teach MKT304, 3rd semester, for final exam purposes. Fee: 30%, collected after the first lesson, collected once only.',
        tags: ['International Business', 'MKT304'],
        status: 'Waiting',
        startDate: new Date('2024-01-15'),
        endDate: new Date('2024-02-15'),
        session: 3,
        fee: 250000
    },
    {
        id: 7,
        title: 'Class 7',
        description: '7-Looking for a tutor to teach MKT304, 3rd semester, for final exam purposes. Fee: 30%, collected after the first lesson, collected once only.',
        tags: ['International Business', 'MKT304'],
        status: 'Waiting',
        startDate: new Date('2024-01-15'),
        endDate: new Date('2024-02-15'),
        session: 3,
        fee: 250000
    },
    {
        id: 8,
        title: 'Class 8',
        description: '8-Looking for a tutor to teach MKT304, 3rd semester, for final exam purposes. Fee: 30%, collected after the first lesson, collected once only.',
        tags: ['International Business', 'MKT304'],
        status: 'Waiting',
        startDate: new Date('2024-01-15'),
        endDate: new Date('2024-02-15'),
        session: 3,
        fee: 250000
    },
    {
        id: 9,
        title: 'Class 9',
        description: '9-Looking for a tutor to teach MKT304, 3rd semester, for final exam purposes. Fee: 30%, collected after the first lesson, collected once only.',
        tags: ['International Business', 'MKT304'],
        status: 'Waiting',
        startDate: new Date('2024-01-15'),
        endDate: new Date('2024-02-15'),
        session: 3,
        fee: 250000
    },
];
const itemPerPage = 5; // Adjust as needed

const ListCard: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedClass, setSelectedClass] = useState<ClassRequirementData | null>(null);

    const startIndex = (currentPage - 1) * itemPerPage;
    const endIndex = startIndex + itemPerPage;
    const currentItem = item.slice(startIndex, endIndex);

    const totalPages = Math.ceil(item.length / itemPerPage);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

    // Handle open modal
    const handleButtonClick = (classItem: ClassRequirementData) => {
        setSelectedClass(classItem);
    };

    return (
        <div>
            <div>
                <section className="text-gray-600 body-font">
                    <div className="container px-5 py-18 mt-16 mx-auto">
                        <div className="flex flex-wrap -m-4">
                            {currentItem.map((classItem) => (
                                <div key={classItem.id} onClick={() => handleButtonClick(classItem)} className={`${classes.card} container p-0 mb-16 w-full`}>
                                    <div className="h-full w-full">
                                        {/* First set of content */}
                                        <div className="flex p-3">
                                            <div className="flex mt-4 ml-6 flex-col md:pr-10 md:mb-0 mb-6 pr-0 mb-16 w-full md:w-2/3 md:text-left text-center">
                                                <p className={classes.cardContent}>{classItem.description}</p>
                                            </div>

                                            <div className="flex p-4 items-center md:ml-auto md:mr-0 mx-auto flex-shrink-0">
                                                <button className={classes.cardButtonWaiting}>
                                                    <h2 className={classes.cardButtonWaitingContent}>{classItem.status}</h2>
                                                </button>
                                            </div>
                                        </div>

                                        {/* Second set of content */}
                                        <div className="flex pb-4 pl-4">
                                            <div className="flex flex-col md:pr-10 md:mb-0 mb-2 pr-0 mb-2 w-full md:w-2/3 md:text-left text-center">
                                                <div className="flex flex-wrap pr-2">
                                                    {classItem.tags.map((tag, index) => (
                                                        <div key={index} className="p-4">
                                                            <div className={`${classes.cardTag} p-2 rounded-lg inline-block`}>
                                                                <p className={`${classes.cardTagContent} leading-relaxed text-base`}>{tag}</p>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                            <div className="flex items-center md:ml-auto md:mr-0 mx-auto flex-shrink-0 ">
                                                <h2 className={`${classes.startDate} flex items-center flex-col leading-none`}>{classItem.startDate.toDateString()}</h2>
                                            </div>
                                        </div>
                                    </div>
                                    <ClassModal item={classItem} isOpen={selectedClass !== null && classItem.id === selectedClass.id} onClose={() => setSelectedClass(null)} />
                                </div>

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
