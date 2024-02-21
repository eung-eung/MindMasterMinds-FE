import ErrorPage from '@/app/components/errorPage/page'
import { Metadata } from 'next'
import React from 'react'
export const metadata: Metadata = {
    title: '404'
}
export default function page() {
    return (
        <div>
            <ErrorPage />
        </div>

    )
}
