import useAxiosAuth from '@/app/lib/hooks/useAxiosAuth'
import { Tutor } from '@/app/types/Tutor'
import React from 'react'
import classes from './gridListTutors.module.css'
import TutorItem from './tutorItem'
import CircularLoading from '../circularProgress/CircularProgress'
import { Content } from '@/app/types/Content'
import ContentComponent from './content'
import StudentItem from './studentItem'
export default function GridListTutors({ id, role }: { id: any, role: any }) {

    const axiosAuth = useAxiosAuth()
    const [listTutors, setListTutors] = React.useState<Tutor[]>([])
    const [refresh, setRefresh] = React.useState<boolean>(false)
    const [content, setContent] = React.useState<any>()
    const [isOrdered, setIsOrdered] = React.useState<boolean>(true)
    const [isLoadingListTutors, setIsLoadingListTutors] = React.useState<boolean>(true)
    const getListTutors = async () => {
        setIsLoadingListTutors(true)
        const response = await axiosAuth
            .get(`/Order/get-list-tutor-resign-order-by-me?orderId=${id.classId}&pageNumber=0&pageSize=19`)

        const content: Content = await getAContentClassByStudent()
        content.statusOrder === 'Ordered' ? setIsOrdered(true) : setIsOrdered(false)
        setIsLoadingListTutors(false)
        setListTutors(response.data.data)
        setContent(content)

    }

    const getAContentClassByStudent = async () => {
        const response = await axiosAuth.get(
            `/Order/get-order-detail-by-student?orderId=${id.classId}`
        )
        return response.data

    }

    const getAContentClassByTutor = async () => {
        setIsLoadingListTutors(true)
        const response = await axiosAuth.get(`/Order/get-order-detail-by-tutor?orderId=${id.classId}`)
        setContent(response.data)
        setIsLoadingListTutors(false)
    }
    React.useEffect(() => {
        if (role === 'Student') {
            getListTutors()
        }
        if (role === 'Tutor') {
            getAContentClassByTutor()
        }
    }, [id, refresh])
    return (
        <div className={classes.box + ' container mx-auto'}>
            <div style={{ flex: 3, position: 'relative' }}>
                {
                    isLoadingListTutors ? <div className={classes.cir_loading}>
                        <CircularLoading />
                    </div> :
                        <>
                            {

                                role === 'Tutor' &&
                                <>
                                    <span className={classes.title}>
                                        Your student
                                    </span>
                                    <StudentItem content={content} />
                                </>
                            }
                            {
                                role === 'Student' &&
                                <>
                                    <span className={classes.title}>
                                        {isOrdered ? 'Tutor application list' : 'Your tutor'}
                                    </span>
                                    {
                                        listTutors.length === 0 ?
                                            <div className={classes.grid_tutors}>
                                                <span>There is no application list yet</span>
                                            </div>
                                            :
                                            <div className={classes.grid_tutors}>
                                                {
                                                    listTutors.map(
                                                        tutor =>
                                                            <TutorItem
                                                                isOrder={isOrdered}
                                                                key={tutor.id}
                                                                orderId={id.classId}
                                                                tutor={tutor}
                                                                setRefresh={setRefresh}
                                                            />
                                                    )
                                                }
                                            </div>
                                    }
                                </>
                            }

                        </>
                }

            </div>

            <div className={classes.content}>
                <span className={classes.title}>Class Detail</span>
                <ContentComponent
                    role={role}
                    setRefresh={setRefresh}
                    content={content} />
            </div>
        </div>
    )
}
