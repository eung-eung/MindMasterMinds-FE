import React from 'react'
import classes from './tutorItem.module.css'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { Tutor } from '@/app/types/Tutor'
export default function TutorItem({ tutor }: { tutor: Tutor }) {
    return (
        <>

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
                <button className={classes.approve_btn} type='button'>Approve</button>
            </div>
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
                <button className={classes.approve_btn} type='button'>Approve</button>
            </div>
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
                <button className={classes.approve_btn} type='button'>Approve</button>
            </div>
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
                <button className={classes.approve_btn} type='button'>Approve</button>
            </div>
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
                <button className={classes.approve_btn} type='button'>Approve</button>
            </div>




        </>
    )
}
