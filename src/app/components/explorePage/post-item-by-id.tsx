'use client'

import React, { useEffect } from 'react'
import PostItemByIdRight from './post-item-by-id-right'
import classes from './post-item-by-id.module.css'
import { PostExplore } from '@/app/types/Post-Explore'
import useAxiosAuth from '@/app/lib/hooks/useAxiosAuth'
import Image from 'next/image'
export default function PostItemById({ id }: { id: any }) {
    const [post, setPost] = React.useState<PostExplore | any>()
    const [isLoading, setIsLoading] = React.useState(true)
    const axiosAuth = useAxiosAuth()
    const getPost = async () => {
        setIsLoading(isLoading)
        const response = await axiosAuth.get(`/Post/${id}`)
        setPost(response.data)
        setIsLoading(false)
    }
    useEffect(() => {
        const controller = new AbortController()
        getPost()
        return () => controller.abort()
    }, [])

    return (
        <>

            {
                isLoading ?
                    <p>Loading</p>
                    :
                    <div className={classes.box}>
                        {
                            post.image &&
                            <div className={classes.post_image}>
                                <img
                                    src={post.image}

                                />
                            </div>
                        }

                        <PostItemByIdRight post={post} />
                    </div>
            }
        </>


    )
}
