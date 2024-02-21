'use client'

import { Tutor } from '@/app/types/Tutor'
import { useEffect, useState } from 'react'
import GridListTutors from './gridListTutors'
import classes from './detailClass.module.css'
import { useSession } from 'next-auth/react'
export default function DetailClass({ id }: { id: any }) {
    const { data: session } = useSession()



    return (
        <div>
            <GridListTutors role={session?.user.userViewLogin.userRole.roleName} id={id} />
        </div>
    )
}
