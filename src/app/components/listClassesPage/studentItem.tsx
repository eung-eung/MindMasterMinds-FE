import React from 'react'
import classes from './studentItem.module.css'
import { Content } from '@/app/types/Content';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
export default function StudentItem({ content }: { content: Content }) {

    return (
        <div>
            <div className={classes.student_card}>
                <div className={classes.left_content}>
                    <img src={content.student.avatar} />
                </div>
                <div className={classes.right_content}>
                    <div className={classes.card_item + ' ' + classes.student_name}>
                        {content.student.firstName + ' ' + content.student.lastName}
                    </div>
                    <div className={classes.card_item + ' ' + classes.student_mail}>
                        <EmailOutlinedIcon />     {content.student.email}
                    </div>
                    <div className={classes.card_item + ' ' + classes.student_role}>
                        {content.student.userRole.roleName}
                    </div>
                </div>

            </div>
        </div>
    )
}
