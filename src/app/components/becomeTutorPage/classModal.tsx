import { Fragment, useRef, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import classes from './classModal.module.css'


interface DialogComponentProps {
  isOpen: boolean;
  onClose: () => void;
  item: {
    id: number;
    title: string;
    description: string;
    tags: string[];
    status: string;
    startDate: Date;
    endDate: Date;
    session: number;
    fee: number;
  };
}

const ClassModal: React.FC<DialogComponentProps> = ({ item, isOpen, onClose }) => {
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
            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-35 transition-opacity" />

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
                  <div className="bg-white mx-12 my-6 px-4 pb-6 pt-6 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                      <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                        <Dialog.Title as="h3" className={classes.title}>
                          Detail Tutor
                        </Dialog.Title>
                        <div className="mt-2">
                          {/* Detail modal */}
                          <div className="mt-6 border-t border-gray-100">
                            <dl className="divide-y divide-gray-100">
                              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className={classes.typographyTitle}>Class name</dt>
                                <dd className={`${classes.typography} mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0`}>{item.title}</dd>
                              </div>
                              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className={classes.typographyTitle}>About</dt>
                                <dd className={`${classes.typography} mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0`}>
                                  {item.description}
                                </dd>
                              </div>
                              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className={classes.typographyTitle}>Start date</dt>
                                <dd className={`${classes.typography} mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0`}>{item.startDate.toDateString()}</dd>
                              </div>
                              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className={classes.typographyTitle}>End date</dt>
                                <dd className={`${classes.typography} mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0`}>{item.endDate.toDateString()}</dd>
                              </div>
                              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className={classes.typographyTitle}>Status</dt>
                                <dd className={`${classes.typography} mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0`}>{item.status}</dd>
                              </div>
                              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className={classes.typographyTitle}>Fee</dt>
                                <dd className={`${classes.typography} mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0`}>
                                  {item.fee}
                                </dd>
                              </div>
                              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className={classes.typographyTitle}>Session</dt>
                                <dd className={`${classes.typography} mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0`}>
                                  {item.session}
                                </dd>
                              </div>
                              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className={classes.typographyTitle}>Major</dt>
                                <dd className={`${classes.typography} mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0`}>
                                  {item.tags.map((tag, i) =>
                                    <ul key={i} className='pb-4'>
                                      <li >{tag}</li>
                                    </ul>
                                  )}


                                </dd>
                              </div>
                            </dl>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button
                      type="button"
                      className={classes.button}
                      onClick={() => onClose()}
                    >
                      Close
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

export default ClassModal;
