import React from 'react'
import classes from './post-item.module.css'
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import moment from 'moment-timezone'
import Link from 'next/link';
import { PostExplore } from '@/app/types/Post-Explore';
import Image from 'next/image';



const PostItem = React.forwardRef(({ post }: { post: PostExplore }, ref: any) => {
    const [isLoading, setIsLoading] = React.useState(true)
    const postComponent = (
        <>
            <div className={classes.header}>
                <div className={classes.header_left}>
                    <img className={classes.avatar_post_item}
                        src={post.user.avatar} />
                </div>
                <div className={classes.header_right}>
                    <p className={classes.writer_post_item}>{post.user.firstName + post.user.lastName}</p>
                    <span className={classes.date_post_item}>{
                        moment.utc(post.creationDate).tz('Asia/Ho_Chi_Minh').format('DD-MM-YYYY HH:mm:ss')
                    }
                    </span>
                </div>
            </div>
            <div className={classes.body}>
                <div className={classes.body_content}
                    dangerouslySetInnerHTML={{ __html: post.content }}>

                </div>
                <div className={classes.image_body}>
                    {
                        post.image && <>
                            <Image
                                className={isLoading
                                    ? 'opacity-0' : 'opacity-100'}
                                width={innerWidth} height={0}
                                src={post.image}
                                alt={post.content}
                                onLoadingComplete={() => setIsLoading(false)}
                                style={
                                    {
                                        maxWidth: '100% !important'
                                        , height: '400px'
                                        , objectFit: 'contain'
                                    }
                                }
                            />
                        </>
                    }

                </div>
            </div>
            <div className={classes.sub_action}>
                <div className={classes.subaction_box}>
                    <img src='https://scontent.fsgn5-5.fna.fbcdn.net/m1/v/t6/An_rhVAVeaDMf_VavgOfjtuROilB_OxYlzJB-YfmtmQICTxUx0-ro45L5ecilP3Pd9nrcwS6n0PT2XMF1-cSsXfViIRIw9BBCH6ZLoEFSr6rhDANB8hnK_ICPGF5JVeIZw.png?ccb=10-5&oh=00_AfDdjZLO35O-u3B_O5kIBH1hP4OdCNsOXaCJD-HF1oobFg&oe=65DD8330&_nc_sid=7da55a' />
                    <span>{post.reactionsCount}</span>
                </div>
                <div className={classes.subaction_box}>
                    <span>{post.commentsCount} comments</span>
                </div>
            </div>
            <div className={classes.action}>
                <div className={classes.action_box}>
                    <ThumbUpOutlinedIcon />
                    <span>Like</span>
                </div>

                <div className={classes.action_box}>
                    <Link href={`/explores/${post.id}`} style={{ display: 'block', width: '100%', textAlign: 'center' }}>
                        <ChatBubbleOutlineOutlinedIcon />
                        <span>Comment</span>

                    </Link>
                </div>

            </div>
        </>
    )

    const content = ref ?
        <div ref={ref} className={classes.post_item + ' w-full border'}>
            {postComponent}
        </div>
        :
        <div className={classes.post_item + ' w-full border'}>
            {postComponent}
        </div>

    return content


})
PostItem.displayName = 'Post Item'
export default PostItem
