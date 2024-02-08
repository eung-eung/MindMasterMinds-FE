import React from 'react'
import classes from './post-card-comment.module.css'
import { CommentPostExplore } from '@/app/types/CommentPostExplore'
import moment from 'moment-timezone'
export default function PostCardComment({ comment }: { comment: CommentPostExplore }) {
    return (
        <div className={classes.post_comment}>
            <img className={classes.guest_avatar} src={comment.user.avatar || '/images/noAvatar.jpg'} />
            <div className={classes.box}>
                <div className={classes.guest_name}>
                    <span>{comment.user.firstName + ' ' + comment.user.lastName}</span>
                    <span className={classes.creationDate}>
                        {
                            moment.utc(comment.creationDate).tz('Asia/Ho_Chi_Minh').format('DD-MM-YYYY HH:mm:ss')
                        }
                    </span>

                </div>
                <div className={classes.guest_comment}>
                    <div className={classes.body_content}
                        dangerouslySetInnerHTML={{ __html: comment.comment }}>

                    </div>

                </div>
            </div>

        </div>
    )
}
