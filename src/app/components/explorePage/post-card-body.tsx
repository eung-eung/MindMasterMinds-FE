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
                    <img src='/images/linda.jpg' className='object-cover' />
                    <div className={classes.right_post_user}>
                        <p className={classes.right_post_username}>Linda</p>
                        <p className={classes.right_post_user_create}>17/1/2024</p>
                    </div>
                </div>

                <div className={classes.post_content}>
                    Pachapupa, woa, Kim chi đỏ auuuu, thơm phức í haaaaaa
                </div>
                <Image
                    alt=''
                    src='https://i.pinimg.com/564x/01/2b/0b/012b0bc2e871fc073c8dbf8008bdf20e.jpg'
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
