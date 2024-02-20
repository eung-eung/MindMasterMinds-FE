import React from 'react'
import classes from './tutor.module.css'

export default function Tutor() {
    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-8">
                        <div className="p-14 md:w-1/2">
                            <div className={`${classes.border} h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden`}>
                                <img className={`${classes.image} w-full object-cover object-center`} src="/images/find_tutor.png" alt="find tutor" />
                                <div className="p-12">
                                    <h2 className={`${classes.title} flex items-center justify-center mb-6`}>FIND A TUTOR</h2>
                                    <p className={`${classes.p} leading-relaxed mb-6`}>If you have expertise in a particular field, consider applying to become a tutor with MindMasterminds. This will grant you access to a wide range of students and the opportunity to share your knowledge.</p>
                                    <div className="flex items-center flex-wrap mt-10">
                                        <button className={`${classes.button} flex mx-auto items-center text-white py-2 px-8`}>
                                            <p className={`${classes.typography} w-full text-center`}>OUR TUTORS</p>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-14 md:w-1/2">
                            <div className={`${classes.border} h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden`}>
                                <img className={`${classes.image} w-full object-cover object-center`} src="/images/become_tutor.png" alt="find tutor" />
                                <div className="p-12">
                                    <h2 className={`${classes.title} flex items-center justify-center mb-6`}>BECOME A TUTOR</h2>
                                    <p className={`${classes.p} leading-relaxed mb-6`}>If you have expertise in a particular field, consider applying to become a tutor with MindMasterminds. This will grant you access to a wide range of students and the opportunity to share your knowledge.</p>
                                    <div className="flex items-center flex-wrap mt-10">
                                        <button className={`${classes.button} flex mx-auto items-center text-white py-2 px-8`}>
                                            <p className={`${classes.typography} w-full text-center`}>REGISTER</p>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
