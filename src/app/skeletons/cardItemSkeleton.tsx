import React from 'react'
import classes from '../../app/components/listClassesPage/listCard.module.css'
import Skeleton from '@mui/material/Skeleton';

export default function CardItemSkeleton() {
    return (
        <div className="p-4 md:w-1/3">
            <div className="h-full border-2 border-gray-400 border-opacity-60 rounded-lg overflow-hidden">
                <div className="p-6">
                    <h1 className={`${classes.subject} subject-font mb-6`}>
                        <Skeleton animation="wave" />
                    </h1>
                    <div className="flex item-center mb-5">

                        <Skeleton animation="wave" sx={{ width: '100%' }} />
                    </div>
                    <div className="flex item-center mb-5">
                        <Skeleton animation="wave" sx={{ width: '100%' }} />
                    </div>
                    <div className="flex item-center mb-5">
                        <Skeleton animation="wave" sx={{ width: '100%' }} />
                    </div>
                    <div className="flex item-center mb-5">
                        <Skeleton animation="wave" sx={{ width: '100%' }} />
                    </div>
                    <div className="flex item-center mb-5">
                        <Skeleton animation="wave" sx={{ width: '100%' }} />
                    </div>
                </div>
            </div>
        </div>
    )
}
