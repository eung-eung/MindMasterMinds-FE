import { Fragment, useRef, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import classes from './tutorModal.module.css'

interface DialogComponentProps {
  isOpen: boolean;
  onClose: () => void;
  tutor: {
    tutorId: number;
    image: string;
    status: string;
    name: string;
    major: string;
    rate: string;
    comments: number;
    commentImage: string;
    commentName: string;
    commentDate: string;
    commentRating: number;
    commentContent: string;
  };
}

const TutorModal: React.FC<DialogComponentProps> = ({ tutor, isOpen, onClose }) => {
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
                        {/* Detai Tutor */}
                        <div className="container mx-auto flex px-2 py-8 items-center justify-center flex-col">
                          <img className="lg:w-3/6 md:w-3/6 mb-10 object-fill object-center rounded" style={{ width: "350px", height: "450px" }} alt="hero" src={tutor.image} />
                          <div className="text-left lg:w-3/4 w-full">
                            <div className="text-align px-2 sm:px-0 flex items-center justify-center">
                              <h3 className={classes.typographyIntro}>Tutor&lsquos Information</h3>
                            </div>

                            <div className="mt-6 border-t border-gray-100">
                              <dl className="divide-y divide-gray-100">
                                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                  <dt className={classes.typographyTitle}>Full name</dt>
                                  <dd className={`${classes.typography} mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0`}>{tutor.name}</dd>
                                </div>
                                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                  <dt className={classes.typographyTitle}>Major</dt>
                                  <dd className={`${classes.typography} mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0`}>{tutor.major}</dd>
                                </div>
                                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                  <dt className={classes.typographyTitle}>Email </dt>
                                  <dd className={`${classes.typography} mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0`}>margotfoster@example.com</dd>
                                </div>
                                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                  <dt className={classes.typographyTitle}>Rating</dt>
                                  <dd className={`${classes.typography} mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0`}>5/5</dd>
                                </div>
                                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                  <dt className={classes.typographyTitle}>About</dt>
                                  <dd className={`${classes.typography} mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0`}>
                                    Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur
                                    qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud
                                    pariatur mollit ad adipisicing reprehenderit deserunt qui eu.
                                  </dd>
                                </div>

                              </dl>
                            </div>
                          </div>

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
                      Choose
                    </button>
                    <button
                      type="button"
                      className={`${classes.buttonCancel} inline-flex w-full justify-center items-center rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm sm:ml-3 sm:w-auto`}
                      onClick={() => onClose()}
                      ref={cancelButtonRef}
                    >
                      Cancel
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}

export default TutorModal;
