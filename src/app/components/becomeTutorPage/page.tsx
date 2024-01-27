'use client'
import React from 'react'
import Header from '@/app/components/homePage/header'
import LoadingTheme from '@/app/components/loadingTheme/loadingTheme'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import classes from './page.module.css'
import Footer from '../../components/footer/footer'
import ClassModal from './classModal'
import Example from './pagnition'

const yourClassData = [
    {
        id: 1,
        title: 'Class 1',
        description: '1-Looking for a tutor to teach MKT304, 3rd semester, for final exam purposes. Fee: 30%, collected after the first lesson, collected once only.',
        tags: ['International Business', 'MKT304', '2 sessions'],
        status: 'Waiting',
        date: '23/01/2024',
    },
    {
        id: 2,
        title: 'Class 1',
        description: '2-Looking for a tutor to teach MKT304, 3rd semester, for final exam purposes. Fee: 30%, collected after the first lesson, collected once only.',
        tags: ['International Business', 'MKT304', '2 sessions'],
        status: 'Waiting',
        date: '23/01/2024',
    },

    {
        id: 3,
        title: 'Class 1',
        description: '3-Looking for a tutor to teach MKT304, 3rd semester, for final exam purposes. Fee: 30%, collected after the first lesson, collected once only.',
        tags: ['International Business', 'MKT304', '2 sessions'],
        status: 'Waiting',
        date: '23/01/2024',
    },
    {
        id: 4,
        title: 'Class 1',
        description: '4-Looking for a tutor to teach MKT304, 3rd semester, for final exam purposes. Fee: 30%, collected after the first lesson, collected once only.',
        tags: ['International Business', 'MKT304', '2 sessions'],
        status: 'Waiting',
        date: '23/01/2024',
    },
    {
        id: 5,
        title: 'Class 1',
        description: '5-Looking for a tutor to teach MKT304, 3rd semester, for final exam purposes. Fee: 30%, collected after the first lesson, collected once only.',
        tags: ['International Business', 'MKT304', '2 sessions'],
        status: 'Waiting',
        date: '23/01/2024',
    },
    {
        id: 6,
        title: 'Class 1',
        description: '6-Looking for a tutor to teach MKT304, 3rd semester, for final exam purposes. Fee: 30%, collected after the first lesson, collected once only.',
        tags: ['International Business', 'MKT304', '2 sessions'],
        status: 'Waiting',
        date: '23/01/2024',
    },
    {
        id: 6,
        title: 'Class 1',
        description: '6-Looking for a tutor to teach MKT304, 3rd semester, for final exam purposes. Fee: 30%, collected after the first lesson, collected once only.',
        tags: ['International Business', 'MKT304', '2 sessions'],
        status: 'Waiting',
        date: '23/01/2024',
    },
    {
        id: 7,
        title: 'Class 1',
        description: '7-Looking for a tutor to teach MKT304, 3rd semester, for final exam purposes. Fee: 30%, collected after the first lesson, collected once only.',
        tags: ['International Business', 'MKT304', '2 sessions'],
        status: 'Waiting',
        date: '23/01/2024',
    },
    {
        id: 8,
        title: 'Class 1',
        description: '8-Looking for a tutor to teach MKT304, 3rd semester, for final exam purposes. Fee: 30%, collected after the first lesson, collected once only.',
        tags: ['International Business', 'MKT304', '2 sessions'],
        status: 'Waiting',
        date: '23/01/2024',
    },
];
export default function BecomeTutorPage() {
    const [isDialogOpen, setDialogOpen] = React.useState<boolean>(false);
    const { data: session, status } = useSession()
    const [isLoading, setLoading] = React.useState<boolean>(true)
    console.log(session);
    const [currentPage, setCurrentPage] = React.useState(1);
    const itemsPerPage = 3; 
    const totalPages = Math.ceil(yourClassData.length / itemsPerPage);

    
    // Calculate the range of items to display
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = yourClassData.slice(indexOfFirstItem, indexOfLastItem);

    const pageNumber = [];
  
  for (let i = 1; i <= Math.ceil(yourClassData.length / itemsPerPage); i++) {
    pageNumber.push(i);
  }

    const handleButtonClick = () => {
        setDialogOpen(true);
    };

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
                    <div style={{ background: "#fff" }}>
                        {/* Header */}
                        <Header title='Become A Tutor' isHome={false} />

                        {/* Title list */}

                        <section className="container mx-auto body-font ">

                            <div className={`${classes.customBorder} mt-12 py-2 flex flex-wrap md:flex-nowrap`}>
                                <div className="container py-0 mx-16 flex items-center md:flex-row flex-col">
                                    <div className="flex flex-col md:pr-10 md:mb-0 mb-6 pr-0 mb-16 w-full md:w-auto md:text-left text-center">
                                        <h1 className={classes.title}>CLASS REQUIREMENTS</h1>
                                    </div>
                                    <div className="flex md:ml-auto md:mr-0 mx-auto items-end flex-shrink-0 space-x-6">

                                        <span className="ml-16 flex items-start flex-col leading-none">
                                            <h1 className={classes.title}>STATUS</h1>
                                        </span>
                                    </div>
                                </div>

                            </div>

                            {/* Requirement List */}
                            <div className="px-2 w-full py-12 mx-auto">
                                <div className="flex flex-wrap -m-2 justify-center">
                                    {currentItems.map((classItem) => (
                                        <div key={classItem.id} onClick={handleButtonClick} className={`${classes.card} container p-0 mb-16 w-full`}>
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
                                                        <h2 className={`${classes.date} flex items-center flex-col leading-none`}>{classItem.date}</h2>
                                                    </div>
                                                </div>
                                            </div>
                                            <ClassModal isOpen={isDialogOpen} onClose={() => setDialogOpen(false)} classId={classItem.id} />
                                        </div>

                                    ))}

<div className="flex items-center mt-8">
            <button
              className={`${classes.buttonPagination} mr-4`}
              onClick={() => setCurrentPage((prevPage) => Math.max(prevPage - 1, 1))}
            >
              Previous
            </button>
     
            {pageNumber.map((Elem, index) => {
             return (
               <>
                 <button
                 onClick={() => setCurrentPage(index + 1)}
                   className={`px-3 py-1 m-1 text-center btn-outline-dark ${classes.currentPage}`}
                   >
                   {Elem}
                 </button>
               </>
             );
           })}
            <button
              className={`${classes.buttonPagination} ml-4`}
              onClick={() =>
                setCurrentPage((prevPage) =>
                  Math.min(prevPage + 1, totalPages)
                )
              }
            >
              Next
            </button>
          </div>
                                </div>
                            </div>

                        </section>
                        {/* Footer */}
                        <Footer />

                    </div>
                </>
            }

        </div>
    )
}
