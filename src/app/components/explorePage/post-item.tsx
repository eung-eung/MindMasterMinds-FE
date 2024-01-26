import React from 'react'
import classes from './post-item.module.css'
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import Link from 'next/link';
export default function PostItem() {
    return (
        <div className={classes.post_item + ' w-full border'}>
            <div className={classes.header}>
                <div className={classes.header_left}>
                    <img className={classes.avatar_post_item} src='https://i.pinimg.com/236x/3c/97/67/3c9767924858fc128cd2c8945ff28fa6.jpg' />
                </div>
                <div className={classes.header_right}>
                    <p className={classes.writer_post_item}>39saku_chan</p>
                    <span className={classes.date_post_item}>17/1/2024</span>
                </div>
            </div>
            <div className={classes.body}>
                <div className={classes.body_content}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem omnis dicta, aperiam ipsam facilis
                    soluta molestiae, sequi culpa quod minima hic assumenda quia. Iure maxime quae id facere ipsa sunt.
                </div>
                <div className={classes.image_body}>
                    <img src='https://i.pinimg.com/564x/01/2b/0b/012b0bc2e871fc073c8dbf8008bdf20e.jpg' />
                </div>
            </div>
            <div className={classes.sub_action}>
                <div className={classes.subaction_box}>
                    <ThumbUpIcon color='primary' className='mr-2' />
                    <span>5000</span>
                </div>
                <div className={classes.subaction_box}>
                    <span>2500 comments</span>
                </div>
            </div>
            <div className={classes.action}>
                <div className={classes.action_box}>
                    <ThumbUpOutlinedIcon />
                    <span>Like</span>
                </div>

                <div className={classes.action_box}>
                    <Link href='/explores/1'>
                        <ChatBubbleOutlineOutlinedIcon />
                        <span>Comment</span>

                    </Link>
                </div>


            </div>
        </div>

    )
}
