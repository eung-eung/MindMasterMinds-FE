import React from 'react'
import PostItemByIdRight from './post-item-by-id-right'
import classes from './post-item-by-id.module.css'
export default function PostItemById() {
    return (
        <div className={classes.box}>
            <div className={classes.post_image}>
                <img src='https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-james-wheeler-414612.jpg&fm=jpg' />
            </div>
            <PostItemByIdRight />
        </div>
    )
}
