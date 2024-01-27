import HistoryOrderPage from '@/app/components/historyOrderPage/page'
import React from 'react'
import { Metadata } from 'next'
export const metadata: Metadata = {
    title: 'History Order'
}
export default function HistoryOrder() {
  return (
    <div >
        <HistoryOrderPage/>
    </div>
  )
}
