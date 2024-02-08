import React from 'react'
import Modal from '@mui/material/Modal';
import classes from './form-modal.module.css'
import CancelIcon from '@mui/icons-material/Cancel';
import FormModalImagePicker from './form-modal-image-picker';
import { useSession } from 'next-auth/react';

import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useAxiosAuth from '@/app/lib/hooks/useAxiosAuth';

export default function FormModal({ open, handleClose, setPageNum }:
    { open: boolean, handleClose: any, setPageNum: any }) {
    const contentArea = React.useRef<HTMLDivElement>(null)
    const fileImage = React.useRef<HTMLInputElement>(null)
    const axiosAuth = useAxiosAuth()
    const toastId = React.useRef<any>()
    const { data: session } = useSession()


    const submitPost = async (e: React.MouseEvent<HTMLElement>) => {

        e.preventDefault()
        try {
            toastId.current = toast.loading("Posting...")
            const response = await axiosAuth.post('/Post', {
                content: contentArea.current?.innerHTML,
                image: fileImage.current?.files != null && fileImage.current?.files[0]
            }, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
            )

            if (response.status === 200) {
                toast.update(toastId.current, {
                    render: "Posted successfully",
                    type: "success",
                    isLoading: false,
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                })
                handleClose()
                setPageNum((prev: any) => 1)
            }
        } catch (error: any) {
            toast.update(toastId.current, {
                render: error.response.data.Message,
                type: "error",
                isLoading: false,
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            })
        }


    }
    return (
        <div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"

            />
            <Modal
                open={open}
                onClose={handleClose}
            >
                <div className={classes.container + ' lg:w-6/12 sm:w-full'}>
                    <div className='relative'>
                        <h3 className={classes.title}>Create a post</h3>
                        <CancelIcon
                            onClick={handleClose}
                            className={classes.close_post} />
                    </div>

                    <div className={classes.user_infor}>
                        <img className={classes.avatar}
                            src={session?.user.userViewLogin.avatar || '/images/noAvatar.jpg'} />
                        <p>
                            {
                                session?.user.userViewLogin.lastName
                                    && session.user.userViewLogin.firstName ?
                                    session?.user.userViewLogin.firstName + ' ' + session.user.userViewLogin.lastName

                                    : session?.user.userViewLogin.email
                            }
                        </p>
                    </div>
                    <form className='flex flex-col items-center p-4'>
                        <div className={classes.textbox}>
                            <div
                                className={classes.content}
                                content="Tell us what are you thinking... ^^"
                                role="textbox"
                                contentEditable="true"
                                aria-multiline="true"
                                aria-labelledby="txtboxMultilineLabel"
                                aria-required="true"
                                ref={contentArea}
                            >

                            </div>

                        </div>
                        <FormModalImagePicker fileImage={fileImage} />


                        <button onClick={submitPost} type='button' className={classes.share_button}>Share</button>
                    </form>




                </div>
            </Modal >
        </div >
    )
}
