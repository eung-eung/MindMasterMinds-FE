import React from 'react'
import classes from './post-item.module.css'
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import moment from 'moment-timezone'
import Link from 'next/link';
export default function PostItem({ name, content, imageUrl, avatar, reactionsCount, commentsCount, createDate }
    : {
        name: string, content: string, imageUrl: string, avatar: string,
        reactionsCount: number, commentsCount: number, createDate: Date
    }) {


    return (
        <div className={classes.post_item + ' w-full border'}>
            <div className={classes.header}>
                <div className={classes.header_left}>
                    <img className={classes.avatar_post_item}
                        src={avatar} />
                </div>
                <div className={classes.header_right}>
                    <p className={classes.writer_post_item}>{name}</p>
                    <span className={classes.date_post_item}>{
                        moment.utc(createDate).tz('Asia/Ho_Chi_Minh').format('DD-MM-YYYY HH:mm:ss')
                    }
                    </span>
                </div>
            </div>
            <div className={classes.body}>
                <div className={classes.body_content}
                    dangerouslySetInnerHTML={{ __html: content }}>

                </div>
                <div className={classes.image_body}>
                    <img src={imageUrl} />
                </div>
            </div>
            <div className={classes.sub_action}>
                <div className={classes.subaction_box}>
                    <img src='https://scontent.fsgn5-5.fna.fbcdn.net/m1/v/t6/An_rhVAVeaDMf_VavgOfjtuROilB_OxYlzJB-YfmtmQICTxUx0-ro45L5ecilP3Pd9nrcwS6n0PT2XMF1-cSsXfViIRIw9BBCH6ZLoEFSr6rhDANB8hnK_ICPGF5JVeIZw.png?ccb=10-5&oh=00_AfDdjZLO35O-u3B_O5kIBH1hP4OdCNsOXaCJD-HF1oobFg&oe=65DD8330&_nc_sid=7da55a' />
                    <span>{reactionsCount}</span>
                </div>
                <div className={classes.subaction_box}>
                    <span>{commentsCount} comments</span>
                </div>
            </div>
            <div className={classes.action}>
                <div className={classes.action_box}>
                    <ThumbUpOutlinedIcon />
                    <span>Like</span>
                </div>

                <div className={classes.action_box}>
                    <Link href='/explores/1' style={{ display: 'block', width: '100%', textAlign: 'center' }}>
                        <ChatBubbleOutlineOutlinedIcon />
                        <span>Comment</span>

                    </Link>
                </div>


            </div>
        </div>

    )
}
