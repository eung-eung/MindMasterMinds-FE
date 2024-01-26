import { Fragment, useRef, useState } from 'react';
import {Dialog, Transition } from '@headlessui/react';
import classes from './tutorModal.module.css'

import DetailTutor from './detailTutor';

interface DialogComponentProps {
    isOpen: boolean;
    onClose: () => void;
  }

  const TutorModal: React.FC<DialogComponentProps> = ({ isOpen, onClose }) => {
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
                      {/* <Dialog.Title as="h3" className={classes.typographyTitle}>
                        Detail Tutor 
                      </Dialog.Title> */}
                      <div className="mt-2">
                   
                         <DetailTutor/>
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
