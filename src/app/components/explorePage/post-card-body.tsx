import Image from 'next/image'
import React from 'react'
import classes from './post-card-body.module.css'
import PostCardBodyAction from './post-card-body-action'
import PostCardGridComments from './post-card-grid-comments'
export default function PostCardBody() {
    return (
        <div className={classes.body}>
            <div className={classes.header}>
                <div className={classes.post_user}>
                    <img src='/images/nhan-sac-go-yoon-jung-03.jpg' className='object-cover' />
                    <div className={classes.right_post_user}>
                        <p className={classes.right_post_username}>39saku_chan</p>
                        <p className={classes.right_post_user_create}>27/11/2024</p>
                    </div>
                </div>

                <div className={classes.post_content}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Numquam possimus ab earum. Sed ullam, possimus nihil d
                    istinctio fugiat, voluptatibus voluptatem laborum imped
                    it minus voluptates consequuntur animi aspernatur recusandae nesciunt aperiam.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Numquam possimus ab earum. Sed ullam, possimus nihil d
                    istinctio fugiat, voluptatibus voluptatem laborum imped
                    it minus voluptates consequuntur animi aspernatur recusandae nesciunt aperiam.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Numquam possimus ab earum. Sed ullam, possimus nihil d
                    istinctio fugiat, voluptatibus voluptatem laborum imped
                    it minus voluptates consequuntur animi aspernatur recusandae nesciunt aperiam.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Numquam possimus ab earum. Sed ullam, possimus nihil d
                    istinctio fugiat, voluptatibus voluptatem laborum imped
                    it minus voluptates consequuntur animi aspernatur recusandae nesciunt aperiam.
                </div>
                <Image
                    alt=''
                    src='/images/nhan-sac-go-yoon-jung-03.jpg'
                    height={600}
                    width={600}
                    style={{ background: 'antiquewhite' }}
                    className='col-span-1 aspect-square w-full'
                />
            </div>
            <PostCardBodyAction />
            <PostCardGridComments />
            {/* <div className=' bg-white p-2 px-4'>
                <h3 className='font-serif text-xl font-medium'>Test</h3>
                <p className='text-sm text-gray-500'>Taken by </p>
            </div> */}
        </div>
    )
}
