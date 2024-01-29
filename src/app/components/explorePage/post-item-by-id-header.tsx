import React from 'react'
import classes from './post-item-by-id-header.module.css'
export default function PostItemByIdHeader() {
    return (
        <div>
            <div className={classes.header}>
                <img className={classes.avatar} src='https://i.pinimg.com/236x/3c/97/67/3c9767924858fc128cd2c8945ff28fa6.jpg' />
                <div className={classes.header_user}>
                    <p className={classes.username}>39saku</p>
                    <p className={classes.date}>29/1/2023</p>
                </div>
            </div>
            <div className={classes.content}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio quaerat error modi, vitae totam quis et placeat accusantium numquam
                harum iure suscipit inventore cum eum dolores beatae assumenda nisi. Corrupti!
            </div>
        </div>
    )
}
