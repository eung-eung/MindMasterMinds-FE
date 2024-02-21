import React from 'react'
import classes from './tutorItem.module.css'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { Tutor } from '@/app/types/Tutor'
import useAxiosAuth from '@/app/lib/hooks/useAxiosAuth';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function TutorItem({ tutor, isOrder, orderId, setRefresh }
    : { tutor: Tutor, isOrder: boolean, orderId: any, setRefresh: any }) {
    const axiosAuth = useAxiosAuth()
    const handleApproveTutor = async (tutorId: any) => {
        try {
            const response = await axiosAuth.post('/Order/confirm-tutor-for-order-by-me', {
                tutorId: tutorId,
                orderId: orderId
            })
            toast.success('Approved successfully!', {
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
            setRefresh((prev: boolean) => !prev)

        } catch (error) {
            toast.error('Approve failed!', {
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
        <>
            <ToastContainer
                position="top-center"
                autoClose={3000}
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
            <div className={classes.tutor_card}>
                <img className={classes.left_content} src={tutor.avatar} />
                <div className={classes.right_content}>
                    <div className={classes.card_item + ' ' + classes.tutor_name}>
                        {tutor.firstName + ' ' + tutor.lastName}
                    </div>
                    <div className={classes.card_item + ' ' + classes.tutor_mail}>
                        <EmailOutlinedIcon />     {tutor.email}
                    </div>
                    <div className={classes.card_item + ' ' + classes.tutor_role}>
                        {tutor.userRole.roleName}
                    </div>
                </div>
                {
                    isOrder ?
                        <button
                            onClick={() => handleApproveTutor(tutor.id)}
                            className={classes.approve_btn}
                            type='button'>
                            Approve</button>
                        : ""
                }
            </div>

        </>
    )
}
