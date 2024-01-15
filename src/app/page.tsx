'use client'
import { useSession } from "next-auth/react"
import LoginPage from "./login/Login"
import { decode } from "next-auth/jwt"

import Image from 'next/image'
import HomePage from './components/homePage/pages'


export default function Home() {
  const { status } = useSession()
  console.log('status: ', status);

  return (
    <div >
      <HomePage />
    </div>
  )
}
