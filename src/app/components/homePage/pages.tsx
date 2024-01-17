'use client'
import React, { useEffect, useState } from 'react'
import Header from './header'
import About from './about-us'
import Admission from './our-admission'
import Explore from './explore'
import Tutor from './tutor'
import Article from './article'
import Join from './join-now'
import Footer from '../footer/footer'
import LoadingTheme from '../loadingTheme/loadingTheme'
import { useSession } from 'next-auth/react'

export default function HomePage() {
    const { data: session, status } = useSession()
    const [isLoading, setLoading] = useState<boolean>(true)
    console.log(session);
    console.log(status);

    useEffect(() => {
        if (status !== 'loading') setLoading(false)
    }, [status])

    return (
        <>
            {
                isLoading ?
                    <LoadingTheme />
                    :
                    <div style={{ backgroundColor: "white" }}>
                        <Header title="Taste of knowlegde."
                            titleDetail="Daily updates of high-quality courses, documents, and academic articles."
                            isHome={true}
                        />
                        <About />
                        <Admission />
                        <Explore />
                        <Tutor />
                        <Article />
                        <Join />
                        <Footer />
                    </div>
            }
        </>
    )
}



