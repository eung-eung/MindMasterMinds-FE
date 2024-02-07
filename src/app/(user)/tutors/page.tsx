import BecomeTutorPage from '@/app/components/becomeTutorPage/page'
import React from 'react'

import { Metadata } from 'next'
import TutorDashboard from '@/app/components/tutorDashboardPage/page'
export const metadata: Metadata = {
    title: 'Become The Tutor'
}

export default function BecomeTutor() {
  return (
    <div>
        <BecomeTutorPage />
        <TutorDashboard/>
    </div>
  )
}
