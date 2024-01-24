
import FindTutorPage from '@/app/components/findTutorPage/page'
import React from 'react'

import { Metadata } from 'next'
export const metadata: Metadata = {
    title: 'Find The Tutor'
}

export default function FindTutor() {
  return (
    <div>
        <FindTutorPage/>
    </div>
  )
}
