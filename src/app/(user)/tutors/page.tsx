import BecomeTutorPage from '@/app/components/becomeTutorPage/page'
import React from 'react'

import { Metadata } from 'next'
export const metadata: Metadata = {
    title: 'Become The Tutor'
}

export default function BecomeTutor() {
  return (
    <div>
        <BecomeTutorPage />
    </div>
  )
}
