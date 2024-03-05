'use client'
import React from 'react'
import classes from './post-card-input-comment.module.css'
import SendIcon from '@mui/icons-material/Send';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useAxiosAuth from '@/app/lib/hooks/useAxiosAuth';
export default function PostCardInputComment({ postId, setIsRefresh }: { postId: any, setIsRefresh: any }) {
    const inputField = React.useRef<HTMLDivElement>(null)
    const [isLoading, setIsLoading] = React.useState(false)
    const { data: session } = useSession()
    const [comment, setComment] = React.useState(String)
    const axiosAuth = useAxiosAuth()


    const handleChange = () => {
        if (inputField && inputField.current?.innerHTML) {
            setComment(inputField.current?.innerHTML)
        } else {
            setComment('')
        }
    }

    const handlePostComment = async () => {

        if (inputField.current && inputField.current.innerText.trim().length <= 0) {
            toast.error('Do not have content', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
            return
        } else {
            setIsLoading(true)
            const response = await axiosAuth.post('/PostComment', {
                postId: postId,
                comment: inputField.current?.innerHTML
            })
            if (inputField.current) {
                inputField.current.innerText = ''
            }
            setIsRefresh((prev: any) => !prev)
            setIsLoading(false)
        }

    }
    return (
        <>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
            />
            <div className={classes.box}>
                <div className={classes.box_1}>
                    <Image
                        alt={session?.user.userViewLogin.firstName + '' + session?.user.userViewLogin.lastName}
                        className={classes.avatar}
                        width={50}
                        height={50}
                        src={session?.user.userViewLogin.avatar || '/images/noAvatar.jpg'} />
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
                {isLoading ?
                    <span className={classes.loader}></span>
                    :
                    <SendIcon onClick={handlePostComment}
                        color={comment ? 'primary' : 'disabled'} />
                }


            </div >
        </>

    )
}
