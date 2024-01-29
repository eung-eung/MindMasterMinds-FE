import React from 'react'
import classes from './post-card-body-action.module.css'
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import Link from 'next/link';
export default function PostCardBodyAction() {
    return (
        <div>
            <div>
                <div className='flex items-center ml-3 mt-3'>
                    <img className={classes.icon_react} src='https://scontent.fsgn5-5.fna.fbcdn.net/m1/v/t6/An_rhVAVeaDMf_VavgOfjtuROilB_OxYlzJB-YfmtmQICTxUx0-ro45L5ecilP3Pd9nrcwS6n0PT2XMF1-cSsXfViIRIw9BBCH6ZLoEFSr6rhDANB8hnK_ICPGF5JVeIZw.png?ccb=10-5&oh=00_AfDdjZLO35O-u3B_O5kIBH1hP4OdCNsOXaCJD-HF1oobFg&oe=65DD8330&_nc_sid=7da55a' />
                    <span className={classes.amount_react}>2500</span>
                </div>
            </div>

            <div>
                <div className={classes.action}>
                    <div className={classes.action_box}>
                        <ThumbUpOutlinedIcon />
                        <span>Like</span>
                    </div>

                    <div className={classes.action_box}>
                        <ChatBubbleOutlineOutlinedIcon />
                        <span>Comment</span>
                    </div>


                </div>
            </div>
        </div>
    )
}
