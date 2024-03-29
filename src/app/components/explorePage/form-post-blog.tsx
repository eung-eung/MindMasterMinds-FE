'use client'
import React from 'react'
import classes from './form-post-blog.module.css'
import FormModal from './form-modal';
import Backdrop from "@mui/material/Backdrop";
import { useSession } from 'next-auth/react';
export default function FormPostBlog({ setPageNum }: { setPageNum: any }) {
    const [open, setOpen] = React.useState(false);
    const { data: session } = useSession()
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div className={classes.white_background + ' container mx-auto flex  items-center pt-10 pb-10 mb-4 xl:w-2/5 sm:w-full border'}>
            <div className={classes.image_wrapper}>
                <img className={classes.avatar} src={session?.user.userViewLogin.avatar || '/images/noAvatar.jpg'} />
            </div>

            <div className={classes.wrapper} onClick={handleOpen}>
                <div className={classes.box}>
                    <span className={classes.title}>Share something?</span>
                </div>
            </div>
            <FormModal setPageNum={setPageNum} open={open} handleClose={handleClose} />
            <Backdrop
                className={classes.white}
                sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
                onClick={handleClose}
            />
        </div>
    )
}
