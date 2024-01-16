import React from 'react'
import classes from './post-item.module.css'
export default function PostItem() {
    return (
        <div className={classes.post_item + ' w-full border'}>
            <div className=''>
                <img className={classes.avatar_post_item} src='/images/icon.jpg' />
            </div>
            <div>
                <p className={classes.writer_post_item}>Miyawaki Sakura</p>
            </div>

        </div>

    )
}
