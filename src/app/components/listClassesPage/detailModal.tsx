"use client"
import { Fragment, useRef, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import classes from './detailModal.module.css'
import { Class } from '@/app/types/Class';

interface DialogComponentProps extends Class {
  isOpen: boolean;
  onClose: () => void;
  classItem: Class
}

const DetailModal: React.FC<DialogComponentProps> = ({ classItem, isOpen, onClose }) => {
  const cancelButtonRef = useRef(null);
  return (
    <>
      <Transition.Root show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={onClose}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-15 transition-opacity" />

          </Transition.Child>

          <div
            className="fixed inset-0 z-10 w-screen overflow-y-auto"
          >
            <div
              className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
            >
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-y-auto rounded-lg bg-white text-left border transition-all sm:my-8 sm:w-full sm:max-w-[60vw] max-h-[80vh]">
                  <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">

                      <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                        {/* Detai Class */}
                        <div>
                          <section className="text-gray-600 body-font">
                            <div className="container px-5 py-6 mx-auto">
                              <div className="text-center mb-12">
                                <h1 className={`${classes.typographyTitle} sm:text-3xl text-2xl font-medium text-center title-font mb-3`}>Detail Class</h1>
                              </div>
                              <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                                <div className="p-2 sm:w-1/2 w-full">
                                  <div className="bg-white border border-gray-400 rounded flex p-4 h-full items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                                    </svg>

                                    <span className={`${classes.itemTitle} title-font font-medium mr-2 ml-2`}>Subject:</span>
                                    <span className={`${classes.typography} title-font font-medium`}>{classItem.courseSubject.subject.code}</span>
                                  </div>
                                </div>
                                <div className="p-2 sm:w-1/2 w-full">
                                  <div className="bg-white border border-gray-400 rounded flex p-4 h-full items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                                    </svg>

                                    <span className={`${classes.itemTitle} title-font font-medium mr-2 ml-2`}>Major:</span>
                                    <span className={`${classes.typography} title-font font-medium`}>{classItem.courseSubject.course.code}</span>
                                  </div>
                                </div>
                                <div className="p-2 sm:w-1/2 w-full">
                                  <div className="bg-white border border-gray-400 rounded flex p-4 h-full items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>
                                    <span className={`${classes.itemTitle} title-font font-medium mr-2 ml-2`}>Tuition fees:</span>
                                    <span className={`${classes.typography} title-font font-medium`}>{classItem.courseSubject.subject.price} VND</span>
                                  </div>
                                </div>
                                <div className="p-2 sm:w-1/2 w-full">
                                  <div className="bg-white border border-gray-400 rounded flex p-4 h-full items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
                                    </svg>

                                    <span className={`${classes.itemTitle} title-font font-medium mr-2 ml-2`}>Lessions/week:</span>
                                    <span className={`${classes.typography} title-font font-medium`}>{classItem.quantity}</span>
                                  </div>
                                </div>
                                <div className="p-2 sm:w-1/2 w-full">
                                  <div className="bg-white border border-gray-400 rounded flex p-4 h-full items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                                    </svg>

                                    <span className={`${classes.itemTitle} title-font font-medium mr-2 ml-2`}>Start date:</span>
                                    <span className={`${classes.typography} title-font font-medium`}>{classItem.study}</span>
                                  </div>
                                </div>
                                <div className="p-2 sm:w-1/2 w-full">
                                  <div className="bg-white border border-gray-400 rounded flex p-4 h-full items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                    </svg>

                                    <span className={`${classes.itemTitle} title-font font-medium mr-2 ml-2`}>Tutor:</span>
                                    <span className={`${classes.typography} title-font font-medium`}>
                                      {classItem.tutor ? `${classItem.tutor.firstName + ' ' + classItem.tutor.lastName}` : 'No tutor'}</span>
                                  </div>
                                </div>
                                <div className="p-2  w-full">
                                  <div className="bg-white border border-gray-400 rounded p-4 h-full items-center">

                                    {/* <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-iblack-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                      <path d="M22 4L12 14.01l-3-3"></path>
                                    </svg> */}
                                    <span className={`${classes.itemTitle} title-font font-medium mr-2 ml-2`}>About the course:</span>
                                    <span className={`${classes.typography} title-font font-medium`}>{classItem.description}</span>

                                  </div>
                                </div>
                              </div>
                            </div>
                          </section>
                        </div>


                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button
                      type="button"
                      className={`${classes.button} inline-flex w-full justify-center items-center rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm sm:ml-3 sm:w-auto`}
                      onClick={() => onClose()}
                    >
                      Close
                    </button>
                    {/* <button
                      type="button"
                      className={`${classes.buttonCancel} inline-flex w-full justify-center items-center rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm sm:ml-3 sm:w-auto`}
                      onClick={() => onClose()}
                      ref={cancelButtonRef}
                    >
                      Cancel
                    </button> */}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  )
}
export default DetailModal;