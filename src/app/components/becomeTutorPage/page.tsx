'use client'
import React from 'react'
import Header from '@/app/components/homePage/header'
import LoadingTheme from '@/app/components/loadingTheme/loadingTheme'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import classes from './page.module.css'
import Footer from '../../components/footer/footer'
import ClassModal from './classModal'
import ListCard from './listCard'


export default function BecomeTutorPage() {
    
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
                           <ListCard/>

                        </section>
                        {/* Footer */}
                        <Footer />

                    </div>
                </>
            }

        </div>
    )
}
