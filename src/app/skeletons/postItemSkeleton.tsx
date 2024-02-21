import React from 'react'
import classes from '../components/explorePage/post-item.module.css'
import { Skeleton } from '@mui/material'
export default function PostItemSkeleton() {
    return (
        <div className={classes.post_item + ' w-full border'}>
            <div className={classes.header}>
                <div className={classes.header_left}>
                    <Skeleton style={{ height: '100%', width: '100%' }} className={classes.avatar_post_item} animation="wave" />

                </div>
                <div className={classes.header_right}>
                    {/* <p className={classes.writer_post_item}>{post.user.firstName + post.user.lastName}</p> */}
                    <Skeleton sx={{ width: "30%" }} className={classes.writer_post_item} animation="wave" />
                    <Skeleton sx={{ width: "30%", height: '15px' }} className={classes.date_post_item} animation="wave" />
                </div>
            </div>
            <div className={classes.body}>
                <Skeleton className={classes.body_content} animation="wave" />
                {/* <div className={classes.body_content}
                    dangerouslySetInnerHTML={{ __html: post.content }}>

                </div> */}
                <div className={classes.image_body}>
                    <Skeleton sx={{ height: '500px', width: "100%" }} animation="wave" variant="rectangular" />
                    {/* <img src={post.image} /> */}
                </div>
            </div>
            <div className={classes.sub_action}>

            </div>
            <div className={classes.action}>
                <div className={classes.action_box}>

                </div>

                <div className={classes.action_box}>

                </div>

            </div>
        </div>
    )
}
