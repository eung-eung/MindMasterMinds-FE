import Image from 'next/image'
import React from 'react'
import classes from './loadingTheme.module.css'
export default function LoadingTheme() {
    return (
        <div className={classes.block}>
            <div className={classes.container}>
            </div>
        </div>

    )
}
