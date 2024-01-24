import ListTutorPage from '@/app/components/listTutorPage/page'
import React from 'react'

import { Metadata } from 'next'
export const metadata: Metadata = {
    title: 'List of Tutors'
}

export default function ListTutor() {
  return (
    <div>
      <ListTutorPage/>
    </div>
  )
}
