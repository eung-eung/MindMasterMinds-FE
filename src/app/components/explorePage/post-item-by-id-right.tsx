import React from 'react'
import PostItemByIdHeader from './post-item-by-id-header'
import PostItemByIdBody from './post-item-by-id-body'
import classes from './post-item-by-id-right.module.css'
import PostCardGridComments from './post-card-grid-comments'
import PostCardInputComment from './post-card-input-comment'
import { PostExplore } from '@/app/types/Post-Explore'
export default function PostItemByIdRight({ post }: { post: PostExplore }) {
    return (
        <div className={classes.right}>
            <div className={classes.scroll_part}>
                <PostItemByIdHeader post={post} />
                <PostItemByIdBody post={post} />
                <div className={classes.box_grid}>
                    <PostCardGridComments />
                </div>
            </div>
            <PostCardInputComment />
        </div>
    )
}
