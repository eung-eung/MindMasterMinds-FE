import React from 'react'
import classes from './post-card-comment.module.css'
export default function PostCardComment() {
    return (
        <div className={classes.post_comment}>
            <img className={classes.guest_avatar} src='/images/guest1.png' />
            <div className={classes.box}>
                <div className={classes.guest_name}>
                    <span>Yunjin</span>
                </div>
                <div className={classes.guest_comment}>
                    Mị chọt xố? JinJa
                </div>
            </div>
        </div>
    )
}
