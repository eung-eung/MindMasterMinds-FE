'use client'
import React from 'react'
import classes from './post-card-input-comment.module.css'
import SendIcon from '@mui/icons-material/Send';
export default function PostCardInputComment() {
    const inputField = React.useRef<HTMLDivElement>(null)
    const [comment, setComment] = React.useState(String)
    const handleComment = () => {
        console.log(inputField.current?.innerHTML);
    }
    const handleChange = () => {
        if (inputField && inputField.current?.innerHTML) {
            setComment(inputField.current?.innerHTML)
        } else {
            setComment('')
        }
    }


    return (
        <>
            <div className={classes.box}>
                <div>
                    <img className={classes.avatar} src='/images/nhan-sac-go-yoon-jung-03.jpg' />
                </div>

                <div
                    className={classes.content}
                    content="Write comment..."
                    role="textbox"
                    contentEditable="true"
                    aria-multiline="true"
                    aria-labelledby="txtboxMultilineLabel"
                    ref={inputField}
                    onInput={handleChange}
                    aria-required="true">

                </div>
                <SendIcon onClick={handleComment}
                    color={comment ? 'primary' : 'disabled'} />

            </div >
        </>

    )
}
