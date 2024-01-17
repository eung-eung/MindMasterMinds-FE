'use client'
import React from 'react'
import Header from '@/app/components/homePage/header'
import LoadingTheme from '@/app/components/loadingTheme/loadingTheme'
import { useSession } from 'next-auth/react'
import FormPostBlog from './form-post-blog'
import PostItem from './post-item'
import PostGrid from './post-grid'
import { redirect } from 'next/navigation'

export default function ExplorePage() {
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
                        <Header title='Explore' isHome={false} />
                        <FormPostBlog />
                        <PostGrid />
                    </div>
                </>
            }

        </div>
    )
}
