'use client'
import useAxiosAuth from '@/app/lib/hooks/useAxiosAuth'
import { Content } from '@/app/types/Content'
import React, { useEffect, useState } from 'react'
import classes from './content.module.css'
import moment from 'moment-timezone'
import ContentItem from './contentItem'
export default function Content({ id, role }: { id: any, role: any }) {
    const axiosAuth = useAxiosAuth()
    const [content, setContent] = useState<Content>()
    const getAContentClassByStudent = async () => {
        const response = await axiosAuth.get(
            `/Order/get-order-detail-by-student?orderId=${id.classId}`
        )
        setContent(response.data)

    }
    useEffect(() => {
        if (role === 'Student') {
            getAContentClassByStudent()
        }
    }, [])

    return (
        <div className={classes.content_container}>
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
                <ContentItem title='Status' content={
                    content?.statusOrder
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

            </div>

        </div>
    )
}
