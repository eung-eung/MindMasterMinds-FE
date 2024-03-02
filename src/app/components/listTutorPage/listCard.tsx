"use-client"
import React, { useState } from 'react'
import classes from './listCard.module.css'
import TutorModal from './tutorModal';
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { useSession } from 'next-auth/react';
import { axiosAuth } from '@/app/lib/axious';



interface Tutor {
  id: string;
  email: string;
  phoneNumber: string;
  firstName: string;
  lastName: string;
  avatar: string;
  userRole: {
    roleName: string
  };

}

export default function ListCard() {
  const [filterMajor, setFilterMajor] = useState('all');

  const [selectedTutor, setSelectedTutor] = useState<Tutor | null>(null);
  const [tutorData, setTutorData] = useState<Tutor[]>([]);

  const { data: session, status } = useSession()
  const token = session?.user.accessToken;

  const handleButtonClick = (tutor: Tutor) => {
    setSelectedTutor(tutor);
  };


  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosAuth.get(`/User/get-all-user-by-admin?roleName=Tutor`, {
          headers: {
            'Authorization': `Bearer ${token}`
          },
        });
        const tutorResponse: Tutor[] = response.data.data;
        setTutorData(tutorResponse);
      } catch (error) {
        console.error('Error fetching tutor data:', error);
      }
    };
    fetchData();
  }, []);

  // const filteredTutors = tutorData.filter((tutor) => {
  //   if (filterMajor === 'all') {
  //     return true; // Show all tutors
  //   } else {
  //     return tutor.major.toLowerCase() === filterMajor.toLowerCase();
  //   }
  // });

  // const uniqueMajors = Array.from(new Set(tutorsData.map((tutor) => tutor.major)));




  return (
    <div>
      <section className="text-gray-600 body-font">


        <div className="container px-16 py-24 mx-auto">

          <div className="flex flex-wrap -m-6">
            <div>
              {tutorData.map((tutor, index) => (
                <div key={index} className={`${classes.cardTutorContainer} w-full mb-16 relative`}>
                  <div className="h-full flex items-center ">
                    <div className="relative flex-shrink-0">
                      <img
                        alt="team"
                        className={`${classes.cardTutorImage} object-cover object-center`}
                        src={tutor.avatar}
                      />
                      <div className={`${classes.status} absolute bottom-0 left-0 w-full`}>Available</div>
                    </div>

                    <div className="mt-8 ml-6 grid grid-cols-1 gap-x-24 gap-y-5 sm:grid-cols-6">
                      <div className="sm:col-span-3">
                        <h2 className={`${classes.tutorName} w-full`}>{tutor.firstName} {tutor.lastName}</h2>
                      </div>
                      <div className="sm:col-span-3">
                        <button className={classes.cardTutorButton} onClick={() => handleButtonClick(tutor)}>See Details</button>
                      </div>
                      <TutorModal tutor={tutor} isOpen={selectedTutor !== null && tutor.id === selectedTutor.id} onClose={() => setSelectedTutor(null)} />

                      {tutor.phoneNumber ?
                        <div className="sm:col-span-full flex mb-2">

                          <div className="flex items-center ml-8">
                            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M8 4a2.6 2.6 0 0 0-2 .9 6.2 6.2 0 0 0-1.8 6 12 12 0 0 0 3.4 5.5 12 12 0 0 0 5.6 3.4 6.2 6.2 0 0 0 6.6-2.7 2.6 2.6 0 0 0-.7-3L18 12.9a2.7 2.7 0 0 0-3.8 0l-.6.6a.8.8 0 0 1-1.1 0l-1.9-1.8a.8.8 0 0 1 0-1.2l.6-.6a2.7 2.7 0 0 0 0-3.8L10 4.9A2.6 2.6 0 0 0 8 4Z" />
                            </svg>

                            <p className={`${classes.tutorComment} ml-2`}>{tutor.phoneNumber}</p>
                          </div>
                        </div>
                        : ""}
                      <div className="sm:col-span-full flex mb-2">

                        <div className="flex items-center ml-8">
                          <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16v-5.5C11 8.5 9.4 7 7.5 7m3.5 9H4v-5.5C4 8.5 5.6 7 7.5 7m3.5 9v4M7.5 7H14m0 0V4h2.5M14 7v3m-3.5 6H20v-6a3 3 0 0 0-3-3m-2 9v4m-8-6.5h1" />
                          </svg>

                          <p className={`${classes.tutorComment} ml-2`}>{tutor.email}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
