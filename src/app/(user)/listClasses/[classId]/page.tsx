import DetailClass from '@/app/components/listClassesPage/detailClass'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: 'MindMasterMinds'
}

export default function AClassDetail(
    { params: classId }:
        { params: any }
) {


    return (
        <div>
            <DetailClass id={classId} />
        </div>
    )
}
