'use client'

import React from 'react'
import classes from './content.module.css'
import moment from 'moment-timezone'
import ContentItem from './contentItem'
import { Content } from '@/app/types/Content'
import useAxiosAuth from '@/app/lib/hooks/useAxiosAuth'
import { Bounce, ToastContainer, toast } from 'react-toastify'
export default function ContentComponent({ content, setRefresh, role }
    : { content: Content, setRefresh: any, role: any }) {
    const axiosAuth = useAxiosAuth()
    const handleComplete = async (id: any) => {
        try {
            const response = await axiosAuth.post('/Order/complete-order', id)
            setRefresh((prev: boolean) => !prev)
        } catch (error: any) {
            toast.error(error.response.data.Message, {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
        }

    }
    return (
        <div className={classes.content_container}>
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
            <div className={classes.summary}>
                <span>Summary</span>
                <div className={classes.textfield}>
                    {content?.summary}
                </div>
            </div>
            <div className={classes.description}>
                <span>Description</span>
                <div className={classes.textfield}>
                    {content?.description}
                </div>
            </div>

            <div className={classes.content_items}>
                <ContentItem title='Major'
                    content={content?.courseSubject.course.name} />
                <ContentItem title='Session' content={content?.quantity} />
                <ContentItem title='Created At' content={
                    moment.utc(content?.createdAt).tz('Asia/Ho_Chi_Minh').format('DD-MM-YYYY')
                } />
                <ContentItem title='Class Fees' content={
                    content?.totalPrice
                } />
                <ContentItem title='Class Type' content={
                    content?.stateInfo ? 'Urgent' : 'Normal'
                } />
                <ContentItem title='Student' content={
                    content?.student.firstName + ' ' + content?.student.lastName
                } />
                <ContentItem title='Student email' content={
                    content?.student.email
                } />
                <ContentItem title='Start day' content={
                    moment.utc(content?.study).tz('Asia/Ho_Chi_Minh').format('DD-MM-YYYY')
                } />
                <ContentItem title='Status' content={
                    content?.statusOrder === 'Confirmed' ? 'On Progress' : content?.statusOrder
                } />
                {
                    content?.statusOrder === 'Confirmed' && role === 'Tutor'
                    && <button
                        onClick={() => handleComplete(content.id)}
                        className={classes.complete_btn}>Complete</button>
                }
            </div>

        </div>
    )
}
