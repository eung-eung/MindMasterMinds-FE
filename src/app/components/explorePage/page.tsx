'use client'
import React from 'react'
import FormPostBlog from './form-post-blog'
import PostGrid from './post-grid'
import useAxiosAuth from '@/app/lib/hooks/useAxiosAuth'
import { PostExplore } from '@/app/types/Post-Explore'

export default function ExplorePage() {
    const axiosAuth = useAxiosAuth()
    const [listPost, setListPost] = React.useState<PostExplore[]>([])
    const [callGetPost, setCallGetPost] = React.useState<Boolean>(true)
    const getPosts = async () => {
        const response = await axiosAuth.get('/Post?pageNumber=0&pageSize=100')
        setListPost(response.data.data)

    }
    React.useEffect(() => {
        getPosts()
    }, [callGetPost])


    return (
        <div>
            <>
                <div style={{ background: "#F0F2F5" }}>
                    <FormPostBlog getPosts={setCallGetPost} />
                    <PostGrid listPost={listPost} />
                </div>
            </>
        </div>
    )
}
