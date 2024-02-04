'use client'
import React from 'react'
import Header from '@/app/components/homePage/header'
import LoadingTheme from '@/app/components/loadingTheme/loadingTheme'
import { useSession } from 'next-auth/react'
import FormPostBlog from './form-post-blog'
import PostItem from './post-item'
import PostGrid from './post-grid'
import { redirect } from 'next/navigation'
import useAxiosAuth from '@/app/lib/hooks/useAxiosAuth'
import { PostExplore } from '@/app/types/Post-Explore'

export default function ExplorePage() {
    const axiosAuth = useAxiosAuth()
    const [listPost, setListPost] = React.useState<PostExplore[]>([])
    const getPosts = async () => {
        const response = await axiosAuth.get('/Post?pageNumber=0&pageSize=5')

        setListPost(response.data.data)

    }
    React.useEffect(() => {
        getPosts()
    }, [])


    return (
        <div>
            <>
                <div style={{ background: "#F0F2F5" }}>
                    <FormPostBlog />
                    <PostGrid listPost={listPost} />
                </div>
            </>
        </div>
    )
}
