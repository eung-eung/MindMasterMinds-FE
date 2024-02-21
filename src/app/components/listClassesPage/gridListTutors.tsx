import useAxiosAuth from '@/app/lib/hooks/useAxiosAuth'
import { Tutor } from '@/app/types/Tutor'
import React from 'react'
import classes from './gridListTutors.module.css'
import TutorItem from './tutorItem'
import CircularLoading from '../circularProgress/CircularProgress'
import Content from './content'
export default function GridListTutors({ id, role }: { id: any, role: any }) {

    const axiosAuth = useAxiosAuth()
    const [listTutors, setListTutors] = React.useState<Tutor[]>([])
    const [isLoadingListTutors, setIsLoadingListTutors] = React.useState<boolean>(false)
    const getListTutors = async () => {
        setIsLoadingListTutors(true)
        const response = await axiosAuth
            .get(`/Order/get-list-tutor-resign-order-by-me?orderId=${id.classId}&pageNumber=0&pageSize=19`)
        setListTutors(response.data.data)
        setIsLoadingListTutors(false)
    }


    React.useEffect(() => {
        if (role === 'Student') {
            getListTutors()
        }
    }, [id])
    return (
        <div className={classes.box + ' container mx-auto'}>
            <div style={{ flex: 3 }}>
                <span className={classes.title}>Tutor application list</span>
                {
                    listTutors.length === 0 ?
                        <div className={classes.grid_tutors}>
                            <span>There is no application list yet</span>
                        </div>
                        :
                        <div className={classes.grid_tutors}>
                            {
                                listTutors.map(tutor => <TutorItem key={tutor.id} tutor={tutor} />)
                            }
                        </div>
                }
            </div>

            <div className={classes.content}>
                <span className={classes.title}>Class Detail</span>
                <Content id={id} role={role} />
            </div>
        </div>
    )
}