'use client'
import React from 'react'
import Header from '@/app/components/homePage/header'
import LoadingTheme from '@/app/components/loadingTheme/loadingTheme'
import { useSession } from 'next-auth/react'
import FormPostBlog from './form-post-blog'
import PostItem from './post-item'
import PostGrid from './post-grid'

export default function ExplorePage() {
    const { data: session, status } = useSession()
    const [isLoading, setLoading] = React.useState<boolean>(true)

    React.useEffect(() => {
        if (status !== 'loading') setLoading(false)
    }, [status])

    return (
        <div>
            {isLoading ? <LoadingTheme /> :
                <>
                    <Header title='Explore' isHome={false} />
                    <FormPostBlog />
                    <PostGrid />

                </>
            }

        </div>
    )
}
