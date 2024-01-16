import Footer from '@/app/components/homePage/footer'
import Header from '@/app/components/homePage/header'
import SignUpForm from '@/app/components/signUpPage/sign-up-form'
import { Metadata } from 'next'
import React from 'react'
export const metadata: Metadata = {
    title: "Register"
}
export default function SignUpPage() {
    return (
        <div>
            <Header
                title="Welcome to MasterMinds!"
                isHome={false}
            />
            <SignUpForm />
            <Footer />
        </div>
    )
}
