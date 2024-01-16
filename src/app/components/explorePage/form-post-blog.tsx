'use client'
import React from 'react'
import classes from './form-post-blog.module.css'
export default function FormPostBlog() {
    return (
        <div className={classes.white_background + ' container mx-auto flex  items-center pt-10 pb-20 mb-4 xl:w-2/4 sm:w-full border'}>
            <div className={classes.image_wrapper}>
                <img className={classes.avatar} src='/images/icon.jpg' />
            </div>

            <div className={classes.wrapper}>
                <div className={classes.box}>
                    <span className={classes.title}>Share something?</span>
                </div>
            </div>
        </div>
    )
}
