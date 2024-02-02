import React from 'react'
import { Metadata } from 'next'
import PricingPage from '@/app/components/pricingPage/page'
export const metadata: Metadata = {
    title: 'Pricing'
}

export default function Pricing() {
  return (
    <div>
      <PricingPage/>
    </div>
  )
}
