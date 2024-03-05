import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: 'MindMasterMinds'
}

export default function PaymentSuccessful() {
    return (
        <img style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%,-50%)' }} src='/images/download.png' />
    )
}
