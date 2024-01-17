'use client'
import React from 'react'
import Header from '@/app/components/homePage/header'
import LoadingTheme from '@/app/components/loadingTheme/loadingTheme'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import classes from './page.module.css'
import Footer from '../../components/footer/footer'

export default function HomePage() {
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
                    <div style={{ background: "#fff" }}>
                        {/* Header */}
                        <Header title='Become A Tutor' isHome={false} />

                        {/* Title list */}

                        <section className=" body-font ">

                            <div className={`${classes.customBorder} mt-12 py-2 flex flex-wrap md:flex-nowrap`}>
                                <div className="container px-6 py-0 mx-20 flex items-center md:flex-row flex-col">
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
                            <div className=" px-6 py-12 mx-24">
                                <div className="flex flex-wrap -m-2">
                                    <div className={`${classes.card} container p-0 mb-16 w-full`}>

                                        <div className="h-full w-full">
                                            {/* First set of content */}
                                            <div className="flex p-3 ">
                                                <div className="flex mt-4 ml-6 flex-col md:pr-10 md:mb-0 mb-6 pr-0 mb-16 w-full md:w-2/3 md:text-left text-center">
                                                    <p className={classes.cardContent}>Looking for a tutor to teach MKT304, 3rd semester, for final exam purposes. Fee: 30%, collected after the first lesson, collected once only.</p>
                                                </div>

                                                <div className="flex p-4 items-center md:ml-auto md:mr-0 mx-auto flex-shrink-0 ">
                                                    <button className={classes.cardButtonWaiting}>
                                                        <h2 className={classes.cardButtonWaitingContent}>Waiting</h2>
                                                    </button>

                                                </div>
                                            </div>

                                            {/* Second set of content */}
                                            <div className="flex pb-4 pl-4">
                                                <div className="flex flex-col md:pr-10 md:mb-0 mb-2 pr-0 mb-2 w-full md:w-2/3 md:text-left text-center">

                                                    <div className="flex flex-wrap pr-2">
                                                        <div className="p-4 ">
                                                            <div className={`${classes.cardTag} p-2 rounded-lg inline-block`}>
                                                                <p className={`${classes.cardTagContent} leading-relaxed text-base`}>International Business</p>
                                                            </div>
                                                        </div>
                                                        <div className=" p-4">
                                                            <div className={`${classes.cardTag} p-2 rounded-lg inline-block`}>
                                                                <p className={`${classes.cardTagContent} leading-relaxed text-base`}>MKT304</p>
                                                            </div>
                                                        </div>
                                                        <div className=" p-4">
                                                            <div className={`${classes.cardTag} p-2 rounded-lg inline-block`}>
                                                                <p className={`${classes.cardTagContent} leading-relaxed text-base`}>2 sessions</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex items-center md:ml-auto md:mr-0 mx-auto flex-shrink-0 ">
                                                    <h2 className={`${classes.date} flex items-center flex-col leading-none`}>23/01/2024</h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={`${classes.card} container p-0 mb-16 w-full`}>
                                        <div className="h-full w-full">
                                            {/* First set of content */}
                                            <div className="flex p-3 ">
                                                <div className="flex mt-4 ml-6 flex-col md:pr-10 md:mb-0 mb-6 pr-0 mb-16 w-full md:w-2/3 md:text-left text-center">
                                                    <p className={classes.cardContent}>Looking for a tutor to teach MKT304, 3rd semester, for final exam purposes. Fee: 30%, collected after the first lesson, collected once only.</p>
                                                </div>

                                                <div className="flex p-4 items-center md:ml-auto md:mr-0 mx-auto flex-shrink-0 ">
                                                    <button className={classes.cardButtonAccepted}>
                                                        <h2 className={classes.cardButtonAcceptedContent}>Class accepted</h2>
                                                    </button>

                                                </div>
                                            </div>

                                            {/* Second set of content */}
                                            <div className="flex pb-4 pl-4">
                                                <div className="flex flex-col md:pr-10 md:mb-0 mb-2 pr-0 mb-2 w-full md:w-2/3 md:text-left text-center">

                                                    <div className="flex flex-wrap pr-2">
                                                        <div className="p-4 ">
                                                            <div className={`${classes.cardTag} p-2 rounded-lg inline-block`}>
                                                                <p className={`${classes.cardTagContent} leading-relaxed text-base`}>International Business</p>
                                                            </div>
                                                        </div>
                                                        <div className=" p-4">
                                                            <div className={`${classes.cardTag} p-2 rounded-lg inline-block`}>
                                                                <p className={`${classes.cardTagContent} leading-relaxed text-base`}>MKT304</p>
                                                            </div>
                                                        </div>
                                                        <div className=" p-4">
                                                            <div className={`${classes.cardTag} p-2 rounded-lg inline-block`}>
                                                                <p className={`${classes.cardTagContent} leading-relaxed text-base`}>2 sessions</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex items-center md:ml-auto md:mr-0 mx-auto flex-shrink-0 ">
                                                    <h2 className={`${classes.date} flex items-center flex-col leading-none`}>23/01/2024</h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`${classes.card} container p-0 mb-16 w-full`}>
                                        <div className="h-full w-full">
                                            {/* First set of content */}
                                            <div className="flex p-3 ">
                                                <div className="flex mt-4 ml-6 flex-col md:pr-10 md:mb-0 mb-6 pr-0 mb-16 w-full md:w-2/3 md:text-left text-center">
                                                    <p className={classes.cardContent}>Looking for a tutor to teach MKT304, 3rd semester, for final exam purposes. Fee: 30%, collected after the first lesson, collected once only.</p>
                                                </div>

                                                <div className="flex p-4 items-center md:ml-auto md:mr-0 mx-auto flex-shrink-0 ">
                                                    <button className={classes.cardButtonWaiting}>
                                                        <h2 className={classes.cardButtonWaitingContent}>Waiting</h2>
                                                    </button>

                                                </div>
                                            </div>

                                            {/* Second set of content */}
                                            <div className="flex pb-4 pl-4">
                                                <div className="flex flex-col md:pr-10 md:mb-0 mb-2 pr-0 mb-2 w-full md:w-2/3 md:text-left text-center">

                                                    <div className="flex flex-wrap pr-2">
                                                        <div className="p-4 ">
                                                            <div className={`${classes.cardTag} p-2 rounded-lg inline-block`}>
                                                                <p className={`${classes.cardTagContent} leading-relaxed text-base`}>International Business</p>
                                                            </div>
                                                        </div>
                                                        <div className=" p-4">
                                                            <div className={`${classes.cardTag} p-2 rounded-lg inline-block`}>
                                                                <p className={`${classes.cardTagContent} leading-relaxed text-base`}>MKT304</p>
                                                            </div>
                                                        </div>
                                                        <div className=" p-4">
                                                            <div className={`${classes.cardTag} p-2 rounded-lg inline-block`}>
                                                                <p className={`${classes.cardTagContent} leading-relaxed text-base`}>2 sessions</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex items-center md:ml-auto md:mr-0 mx-auto flex-shrink-0 ">
                                                    <h2 className={`${classes.date} flex items-center flex-col leading-none`}>23/01/2024</h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`${classes.card} container p-0 mb-16 w-full`}>
                                        <div className="h-full w-full">
                                            {/* First set of content */}
                                            <div className="flex p-3 ">
                                                <div className="flex mt-4 ml-6 flex-col md:pr-10 md:mb-0 mb-6 pr-0 mb-16 w-full md:w-2/3 md:text-left text-center">
                                                    <p className={classes.cardContent}>Looking for a tutor to teach MKT304, 3rd semester, for final exam purposes. Fee: 30%, collected after the first lesson, collected once only.</p>
                                                </div>

                                                <div className="flex p-4 items-center md:ml-auto md:mr-0 mx-auto flex-shrink-0 ">
                                                    <button className={classes.cardButtonWaiting}>
                                                        <h2 className={classes.cardButtonWaitingContent}>Waiting</h2>
                                                    </button>

                                                </div>
                                            </div>

                                            {/* Second set of content */}
                                            <div className="flex pb-4 pl-4">
                                                <div className="flex flex-col md:pr-10 md:mb-0 mb-2 pr-0 mb-2 w-full md:w-2/3 md:text-left text-center">

                                                    <div className="flex flex-wrap pr-2">
                                                        <div className="p-4 ">
                                                            <div className={`${classes.cardTag} p-2 rounded-lg inline-block`}>
                                                                <p className={`${classes.cardTagContent} leading-relaxed text-base`}>International Business</p>
                                                            </div>
                                                        </div>
                                                        <div className=" p-4">
                                                            <div className={`${classes.cardTag} p-2 rounded-lg inline-block`}>
                                                                <p className={`${classes.cardTagContent} leading-relaxed text-base`}>MKT304</p>
                                                            </div>
                                                        </div>
                                                        <div className=" p-4">
                                                            <div className={`${classes.cardTag} p-2 rounded-lg inline-block`}>
                                                                <p className={`${classes.cardTagContent} leading-relaxed text-base`}>2 sessions</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex items-center md:ml-auto md:mr-0 mx-auto flex-shrink-0 ">
                                                    <h2 className={`${classes.date} flex items-center flex-col leading-none`}>23/01/2024</h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`${classes.card} container p-0 mb-16 w-full`}>
                                        <div className="h-full w-full">
                                            {/* First set of content */}
                                            <div className="flex p-3 ">
                                                <div className="flex mt-4 ml-6 flex-col md:pr-10 md:mb-0 mb-6 pr-0 mb-16 w-full md:w-2/3 md:text-left text-center">
                                                    <p className={classes.cardContent}>Looking for a tutor to teach MKT304, 3rd semester, for final exam purposes. Fee: 30%, collected after the first lesson, collected once only.</p>
                                                </div>

                                                <div className="flex p-4 items-center md:ml-auto md:mr-0 mx-auto flex-shrink-0 ">
                                                    <button className={classes.cardButtonWaiting}>
                                                        <h2 className={classes.cardButtonWaitingContent}>Waiting</h2>
                                                    </button>

                                                </div>
                                            </div>

                                            {/* Second set of content */}
                                            <div className="flex pb-4 pl-4">
                                                <div className="flex flex-col md:pr-10 md:mb-0 mb-2 pr-0 mb-2 w-full md:w-2/3 md:text-left text-center">

                                                    <div className="flex flex-wrap pr-2">
                                                        <div className="p-4 ">
                                                            <div className={`${classes.cardTag} p-2 rounded-lg inline-block`}>
                                                                <p className={`${classes.cardTagContent} leading-relaxed text-base`}>International Business</p>
                                                            </div>
                                                        </div>
                                                        <div className=" p-4">
                                                            <div className={`${classes.cardTag} p-2 rounded-lg inline-block`}>
                                                                <p className={`${classes.cardTagContent} leading-relaxed text-base`}>MKT304</p>
                                                            </div>
                                                        </div>
                                                        <div className=" p-4">
                                                            <div className={`${classes.cardTag} p-2 rounded-lg inline-block`}>
                                                                <p className={`${classes.cardTagContent} leading-relaxed text-base`}>2 sessions</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex items-center md:ml-auto md:mr-0 mx-auto flex-shrink-0 ">
                                                    <h2 className={`${classes.date} flex items-center flex-col leading-none`}>23/01/2024</h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`${classes.card} container p-0 mb-16 w-full`}>
                                        <div className="h-full w-full">
                                            {/* First set of content */}
                                            <div className="flex p-3 ">
                                                <div className="flex mt-4 ml-6 flex-col md:pr-10 md:mb-0 mb-6 pr-0 mb-16 w-full md:w-2/3 md:text-left text-center">
                                                    <p className={classes.cardContent}>Looking for a tutor to teach MKT304, 3rd semester, for final exam purposes. Fee: 30%, collected after the first lesson, collected once only.</p>
                                                </div>

                                                <div className="flex p-4 items-center md:ml-auto md:mr-0 mx-auto flex-shrink-0 ">
                                                    <button className={classes.cardButtonWaiting}>
                                                        <h2 className={classes.cardButtonWaitingContent}>Waiting</h2>
                                                    </button>

                                                </div>
                                            </div>

                                            {/* Second set of content */}
                                            <div className="flex pb-4 pl-4">
                                                <div className="flex flex-col md:pr-10 md:mb-0 mb-2 pr-0 mb-2 w-full md:w-2/3 md:text-left text-center">

                                                    <div className="flex flex-wrap pr-2">
                                                        <div className="p-4 ">
                                                            <div className={`${classes.cardTag} p-2 rounded-lg inline-block`}>
                                                                <p className={`${classes.cardTagContent} leading-relaxed text-base`}>International Business</p>
                                                            </div>
                                                        </div>
                                                        <div className=" p-4">
                                                            <div className={`${classes.cardTag} p-2 rounded-lg inline-block`}>
                                                                <p className={`${classes.cardTagContent} leading-relaxed text-base`}>MKT304</p>
                                                            </div>
                                                        </div>
                                                        <div className=" p-4">
                                                            <div className={`${classes.cardTag} p-2 rounded-lg inline-block`}>
                                                                <p className={`${classes.cardTagContent} leading-relaxed text-base`}>2 sessions</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex items-center md:ml-auto md:mr-0 mx-auto flex-shrink-0 ">
                                                    <h2 className={`${classes.date} flex items-center flex-col leading-none`}>23/01/2024</h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`${classes.card} container p-0 mb-16 w-full`}>
                                        <div className="h-full w-full">
                                            {/* First set of content */}
                                            <div className="flex p-3 ">
                                                <div className="flex mt-4 ml-6 flex-col md:pr-10 md:mb-0 mb-6 pr-0 mb-16 w-full md:w-2/3 md:text-left text-center">
                                                    <p className={classes.cardContent}>Looking for a tutor to teach MKT304, 3rd semester, for final exam purposes. Fee: 30%, collected after the first lesson, collected once only.</p>
                                                </div>

                                                <div className="flex p-4 items-center md:ml-auto md:mr-0 mx-auto flex-shrink-0 ">
                                                    <button className={classes.cardButtonWaiting}>
                                                        <h2 className={classes.cardButtonWaitingContent}>Waiting</h2>
                                                    </button>

                                                </div>
                                            </div>

                                            {/* Second set of content */}
                                            <div className="flex pb-4 pl-4">
                                                <div className="flex flex-col md:pr-10 md:mb-0 mb-2 pr-0 mb-2 w-full md:w-2/3 md:text-left text-center">

                                                    <div className="flex flex-wrap pr-2">
                                                        <div className="p-4 ">
                                                            <div className={`${classes.cardTag} p-2 rounded-lg inline-block`}>
                                                                <p className={`${classes.cardTagContent} leading-relaxed text-base`}>International Business</p>
                                                            </div>
                                                        </div>
                                                        <div className=" p-4">
                                                            <div className={`${classes.cardTag} p-2 rounded-lg inline-block`}>
                                                                <p className={`${classes.cardTagContent} leading-relaxed text-base`}>MKT304</p>
                                                            </div>
                                                        </div>
                                                        <div className=" p-4">
                                                            <div className={`${classes.cardTag} p-2 rounded-lg inline-block`}>
                                                                <p className={`${classes.cardTagContent} leading-relaxed text-base`}>2 sessions</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex items-center md:ml-auto md:mr-0 mx-auto flex-shrink-0 ">
                                                    <h2 className={`${classes.date} flex items-center flex-col leading-none`}>23/01/2024</h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`${classes.card} container p-0 mb-16 w-full`}>
                                        <div className="h-full w-full">
                                            {/* First set of content */}
                                            <div className="flex p-3 ">
                                                <div className="flex mt-4 ml-6 flex-col md:pr-10 md:mb-0 mb-6 pr-0 mb-16 w-full md:w-2/3 md:text-left text-center">
                                                    <p className={classes.cardContent}>Looking for a tutor to teach MKT304, 3rd semester, for final exam purposes. Fee: 30%, collected after the first lesson, collected once only.</p>
                                                </div>

                                                <div className="flex p-4 items-center md:ml-auto md:mr-0 mx-auto flex-shrink-0 ">
                                                    <button className={classes.cardButtonWaiting}>
                                                        <h2 className={classes.cardButtonWaitingContent}>Waiting</h2>
                                                    </button>

                                                </div>
                                            </div>

                                            {/* Second set of content */}
                                            <div className="flex pb-4 pl-4">
                                                <div className="flex flex-col md:pr-10 md:mb-0 mb-2 pr-0 mb-2 w-full md:w-2/3 md:text-left text-center">

                                                    <div className="flex flex-wrap pr-2">
                                                        <div className="p-4 ">
                                                            <div className={`${classes.cardTag} p-2 rounded-lg inline-block`}>
                                                                <p className={`${classes.cardTagContent} leading-relaxed text-base`}>International Business</p>
                                                            </div>
                                                        </div>
                                                        <div className=" p-4">
                                                            <div className={`${classes.cardTag} p-2 rounded-lg inline-block`}>
                                                                <p className={`${classes.cardTagContent} leading-relaxed text-base`}>MKT304</p>
                                                            </div>
                                                        </div>
                                                        <div className=" p-4">
                                                            <div className={`${classes.cardTag} p-2 rounded-lg inline-block`}>
                                                                <p className={`${classes.cardTagContent} leading-relaxed text-base`}>2 sessions</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex items-center md:ml-auto md:mr-0 mx-auto flex-shrink-0 ">
                                                    <h2 className={`${classes.date} flex items-center flex-col leading-none`}>23/01/2024</h2>
                                                </div>
                                            </div>
                                        </div>
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
