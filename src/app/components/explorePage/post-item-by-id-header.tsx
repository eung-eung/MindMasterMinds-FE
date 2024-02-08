import React from 'react'
import classes from './post-item-by-id-header.module.css'
import { PostExplore } from '@/app/types/Post-Explore'
import moment from 'moment-timezone'
export default function PostItemByIdHeader({ post }: { post: PostExplore }) {
    return (
        <div>
            <div className={classes.header}>
                <img className={classes.avatar}
                    src={post.user.avatar} />
                <div className={classes.header_user}>
                    <p className={classes.username}>
                        {post.user.firstName + ' ' + post.user.lastName}
                    </p>
                    <p className={classes.date}>
                        {
                            moment.utc(post.creationDate).tz('Asia/Ho_Chi_Minh').format('DD-MM-YYYY HH:mm:ss')
                        }
                    </p>
                </div>
            </div>
            <div className={classes.content}>
                {post?.content}
            </div>
        </div>
    )
}
