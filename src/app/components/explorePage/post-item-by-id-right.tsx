import React from 'react'
import PostItemByIdHeader from './post-item-by-id-header'
import PostItemByIdBody from './post-item-by-id-body'
import classes from './post-item-by-id-right.module.css'
import PostCardGridComments from './post-card-grid-comments'
import PostCardInputComment from './post-card-input-comment'
export default function PostItemByIdRight() {
    return (
        <div className={classes.right}>
            <div className={classes.scroll_part}>
                <PostItemByIdHeader />
                <PostItemByIdBody />
                <div className={classes.box_grid}>
                    <PostCardGridComments />
                </div>
            </div>
            <PostCardInputComment />
        </div>
    )
}
