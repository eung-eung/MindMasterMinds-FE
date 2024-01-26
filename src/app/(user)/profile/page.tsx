import ProfileUserPage from '@/app/components/profileUserPage/page'
import React from 'react'
import { Metadata } from 'next'
export const metadata: Metadata = {
    title: 'Profile User'
}
export default function ProfileUser() {
    return (
        <div>
            <ProfileUserPage />
        </div>
    )
}
