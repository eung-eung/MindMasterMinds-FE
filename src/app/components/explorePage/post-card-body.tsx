import Image from 'next/image'
import React, { useState } from 'react'
import classes from './post-card-body.module.css'
import PostCardBodyAction from './post-card-body-action'
import PostCardGridComments from './post-card-grid-comments'
import { PostExplore } from '@/app/types/Post-Explore'
import moment from 'moment-timezone'
import { Skeleton } from '@mui/material'
export default function PostCardBody({ post, isRefresh }: { post: PostExplore, isRefresh: boolean }) {
    const [isLoading, setIsLoading] = useState(true)

    return (
        <div className={classes.body}>
            <div className={classes.header}>
                <div className={classes.post_user}>
                    <Image src={post.user.avatar || '/images/noAvatar.jpg'} className='object-cover'
                        width={50} height={50}
                        alt={post.user.firstName + ' ' + post.user.lastName}
                    />
                    <div className={classes.right_post_user}>
                        <p className={classes.right_post_username}>{post.user.firstName + ' ' + post.user.lastName}</p>
                        <p className={classes.right_post_user_create}>
                            {
                                moment.utc(post.creationDate).tz('Asia/Ho_Chi_Minh').format('DD-MM-YYYY HH:mm:ss')

                            }
                        </p>
                    </div>
                </div>

                <div className={classes.post_content}>
                    {post.content}
                </div>
                {
                    post.image &&
                    <Image
                        alt=''
                        src={post.image}
                        height={600}
                        width={600}
                        style={{ background: 'antiquewhite' }}
                        loading="lazy"
                        onLoadingComplete={() => setIsLoading(false)}
                        className={
                            isLoading
                                ? 'opacity-0' : 'opacity-100' + ' col-span-1 aspect-square w-full'}
                    />
                }
                {
                    isLoading && (
                        <Skeleton
                            sx={{ bgcolor: 'grey.100' }}
                            variant="rectangular"
                            width="100%"
                            height="100%"
                        />
                    )
                }
            </div>
            <PostCardBodyAction />
            <PostCardGridComments isRefresh={isRefresh} postId={post.id} />
        </div>
    )
}
