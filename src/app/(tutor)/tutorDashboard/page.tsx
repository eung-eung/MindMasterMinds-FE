import React from 'react'
import { Metadata } from 'next'
import TutorDashboardPage from '@/app/components/tutorDashboardPage/page'
export const metadata: Metadata = {
    title: 'Tutor Dashboard'
}

export default function TutorDashboard() {
  return (
    <div>
        <TutorDashboardPage/>
    </div>
  )
}
