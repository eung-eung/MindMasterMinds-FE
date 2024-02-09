'use client'
import React from 'react'
import classes from './post-card-header.module.css'
import CancelIcon from '@mui/icons-material/Cancel';

import { useRouter } from 'next/navigation'
import { PostExplore } from '@/app/types/Post-Explore';
export default function PostCardHeader({ post }: { post: PostExplore }) {
    const router = useRouter()
    const handleClose = () => router.back()


    return (
        <div className='relative'>
            <h2 className={classes.title}>
                This is {post.user.firstName + ' ' + post.user.lastName} post
            </h2>
            <CancelIcon className={classes.close_post} onClick={handleClose} />
        </div>
    )
}
