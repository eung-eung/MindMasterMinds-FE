import React from 'react'
import ListClassesPage from '@/app/components/listClassesPage/page'
import { Metadata } from 'next'
export const metadata: Metadata = {
    title: 'List of Classes'
}

export default function ListClasses() {
  return (
    <div>
      <ListClassesPage/>
    </div>
  )
}