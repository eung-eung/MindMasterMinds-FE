'use client'
import useAxiosAuth from '@/app/lib/hooks/useAxiosAuth'
import { Tutor } from '@/app/types/Tutor'
import React from 'react'
import GridListTutors from './gridListTutors'
import classes from './detailClass.module.css'
export default function DetailClass({ id }: { id: any }) {



    return (
        <div>
            <GridListTutors id={id} />
        </div>
    )
}
