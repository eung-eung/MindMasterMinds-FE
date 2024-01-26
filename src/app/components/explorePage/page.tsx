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


    return (
        <div>
            {/* {isLoading ? <LoadingTheme /> : */}
            <>
                <div style={{ background: "#F0F2F5" }}>
                    {/* <Header title='Explore' isHome={false} /> */}
                    <FormPostBlog />
                    <PostGrid />
                </div>
            </>
            {/* } */}

        </div>
    )
}
