'use client'
import React from 'react'
import Header from '@/app/components/homePage/header'
import LoadingTheme from '@/app/components/loadingTheme/loadingTheme'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import classes from './page.module.css'
import Footer from '../../components/footer/footer'

export default function FindTutorPage() {
    const { data: session, status } = useSession()
    const [isLoading, setLoading] = React.useState<boolean>(true)
    console.log(session);

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
                    {/* Header */}
                    <Header title='Find A Tutor' isHome={false} />

                    {/* Form */}
                    <div className='container mx-auto my-24 bg-white'>
                        <form>
                            <div className="space-y-16">
                                <div className="border-b border-gray-900/10 pb-12">
                                    <p className={`mt-4 ${classes.introLine}`}>
                                        To find a tutor quickly. You have to complete the items in the study request post below:
                                    </p>

                                    <div className="mt-10 grid grid-cols-1 gap-x-16 gap-y-16 sm:grid-cols-6">
                                        <div className="col-span-full">
                                            <label htmlFor="summary" className={classes.label}>
                                                Summary of tutor request (1 sentence, maximum 100 characters):
                                            </label>
                                            <div className="mt-4">
                                                <input
                                                    type="text"
                                                    name="summary"
                                                    id="summary"
                                                    autoComplete="summary"
                                                    className="block w-full rounded-md border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                    placeholder="Example: Looking for a tutor to teach MKT304, 3rd semester, for final exam purposes."
                                                    style={{ fontFamily: 'Belanosima', fontSize: '16px' }}
                                                />
                                            </div>
                                        </div>

                                        <div className="sm:col-span-3">
                                            <label htmlFor="major" className={classes.label}>
                                                Major:
                                            </label>
                                            <div className="mt-4">
                                                <input
                                                    type="text"
                                                    name="major"
                                                    id="major"
                                                    autoComplete="Major"
                                                    className="block w-full rounded-md border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                    placeholder="Example: International Business"
                                                    style={{ fontFamily: 'Belanosima', fontSize: '16px' }}
                                                />
                                            </div>
                                        </div>

                                        <div className="sm:col-span-3">
                                            <label htmlFor="subject" className={classes.label}>
                                                Subject:
                                            </label>
                                            <div className="mt-4">
                                                <input
                                                    type="text"
                                                    name="subject"
                                                    id="subject"
                                                    autoComplete="Subject"
                                                    className="block w-full rounded-md border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                    placeholder="Example: MKT304"
                                                    style={{ fontFamily: 'Belanosima', fontSize: '16px' }}
                                                />
                                            </div>
                                        </div>

                                        <div className="sm:col-span-4 ">
                                            <label htmlFor="studentCode" className={classes.label}>
                                                Student Code:
                                            </label>
                                            <div className="mt-4">
                                                <input
                                                    type="text"
                                                    name="studentCode"
                                                    id="studentCode"
                                                    autoComplete="Student Code"
                                                    className="block w-full rounded-md border-0 py-3 px-4 text-gray-600 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                    placeholder="Example: SS170000"
                                                    style={{ fontFamily: 'Belanosima', fontSize: '16px' }}
                                                />
                                            </div>
                                        </div>

                                        <div className="sm:col-span-3">
                                            <label htmlFor="estimated" className={classes.label}>
                                                Estimated tuition fees (VND/session):
                                            </label>
                                            <div className="mt-4">
                                                <input
                                                    type="text"
                                                    name="estimated"
                                                    id="estimated"
                                                    autoComplete="Estimated"
                                                    className="block w-full rounded-md border-0 py-3 px-4 text-gray-600 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                    placeholder="Example: 300.000"
                                                    style={{ fontFamily: 'Belanosima', fontSize: '16px' }}
                                                />
                                            </div>
                                        </div>

                                        <fieldset>
                                            <label className={classes.label}>Status</label>
                                            <div className="mt-8 flex gap-x-8">
                                                <div className="flex items-center gap-x-3">
                                                    <input
                                                        id="normal"
                                                        name="normal"
                                                        type="radio"
                                                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"

                                                    />
                                                    <label htmlFor="normal" className={classes.typography}>
                                                        Normal
                                                    </label>

                                                </div>
                                                <div className="flex items-center gap-x-3">
                                                    <input
                                                        id="urgent"
                                                        name="urgent"
                                                        type="radio"
                                                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                                    />
                                                    <label htmlFor="urgent" className={classes.typography}>
                                                        Urgent
                                                    </label>
                                                </div>

                                            </div>
                                        </fieldset>

                                        <div className="sm:col-span-3">
                                            <label htmlFor="phone" className={classes.label}>
                                                Contact Phone:
                                            </label>
                                            <div className="mt-4">
                                                <input
                                                    type="text"
                                                    name="phone"
                                                    id="phone"
                                                    autoComplete="Phone"
                                                    className="block w-full rounded-md border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                    placeholder="Example: 0912345678"
                                                    style={{ fontFamily: 'Belanosima', fontSize: '16px' }}
                                                />
                                            </div>
                                        </div>



                                        <div className="sm:col-span-full">
                                            <label htmlFor="describe" className={classes.label}>
                                                Describe the tutoring request in detail:
                                            </label>
                                            <div className="mt-4">
                                                <textarea
                                                    id="describe"
                                                    name="describe"
                                                    rows={3}
                                                    className="block w-full rounded-md border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                    defaultValue={''}
                                                    placeholder="Describe in detail the content you want to learn here..."
                                                    style={{ fontFamily: 'Belanosima', fontSize: '16px' }}
                                                />
                                            </div>
                                        </div>

                                        <fieldset className="sm:col-span-full">
                                            <legend className={`${classes.label} text-sm font-semibold leading-6 text-gray-900`}>Number of lessons per week: </legend>
                                            <div className="mt-4 flex gap-x-24">
                                                <div className="flex items-center gap-x-3">
                                                    <input
                                                        id="1Session"
                                                        name="1Session"
                                                        type="radio"
                                                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                                        style={{ fontFamily: 'Belanosima', fontSize: '16px' }}
                                                    />
                                                    <label htmlFor="1Session" className={classes.typography}>
                                                        <span className="mr-2">1</span><span>Session</span>
                                                    </label>

                                                </div>
                                                <div className="flex items-center gap-x-3">
                                                    <input
                                                        id="2Session"
                                                        name="2Session"
                                                        type="radio"
                                                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                                    />
                                                    <label htmlFor="2Session" className={classes.typography}>
                                                        <span className="mr-2">2</span><span>Session</span>
                                                    </label>
                                                </div>

                                                <div className="flex items-center gap-x-3">
                                                    <input
                                                        id="3Session"
                                                        name="3Session"
                                                        type="radio"
                                                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                                    />
                                                    <label htmlFor="3Session" className={classes.typography}>
                                                        <span className="mr-2">3</span><span>Session</span>
                                                    </label>
                                                </div>

                                                <div className="flex items-center gap-x-3">
                                                    <input
                                                        id="4Session"
                                                        name="4Session"
                                                        type="radio"
                                                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                                    />
                                                    <label htmlFor="4Session" className={classes.typography}>
                                                        <span className="mr-2">4</span><span>Session</span>
                                                    </label>
                                                </div>

                                            </div>
                                        </fieldset>

                                        <div className="sm:col-span-3">
                                            <label htmlFor="studentCode" className={classes.label}>
                                                Expected date of study:
                                            </label>
                                            <div className="mt-4">
                                                <input
                                                    type="text"
                                                    name="studentCode"
                                                    id="studentCode"
                                                    autoComplete="Student Code"
                                                    className="block w-full rounded-md border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                    placeholder="Example: 01/01/2024"
                                                    style={{ fontFamily: 'Belanosima', fontSize: '16px' }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6 flex direction-1 items-center justify-center gap-x-6">

                                <button
                                    type="submit"
                                    className={classes.formButton}
                                >
                                    Post Request
                                </button>

                            </div>
                            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-3">


                                <fieldset>

                                    <div className="relative flex gap-x-3">
                                        <div className="flex h-6 items-center">
                                            <input
                                                id="commit"
                                                name="commit"
                                                type="checkbox"
                                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                            />
                                        </div>
                                        <div className={classes.typography}>
                                            <p className="text-gray-500">I commit that the class creation information is true and accept MindMasterminds regulation</p>
                                        </div>

                                    </div>
                                </fieldset>
                            </div>
                        </form>
                    </div>

                    {/* Footer */}
                    <Footer />
                </>
            }
        </div>
    )
}
