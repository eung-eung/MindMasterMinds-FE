'use client'
import React from 'react'
import classes from './post-card-header.module.css'
import CancelIcon from '@mui/icons-material/Cancel';

import { useRouter } from 'next/navigation'
export default function PostCardHeader() {
    const router = useRouter()
    const handleClose = () => router.back()


    return (
        <div className='relative'>
            <h2 className={classes.title}>This is Lindas post</h2>
            <CancelIcon className={classes.close_post} onClick={handleClose} />
        </div>
    )
}
