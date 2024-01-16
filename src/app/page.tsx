
import { useSession } from "next-auth/react"
import LoginPage from "./login/Login"
import { decode } from "next-auth/jwt"

import Image from 'next/image'
import HomePage from './components/homePage/pages'
import { Metadata } from "next"
import LoadingTheme from "./components/loadingTheme/loadingTheme"

export const metadata: Metadata = {
  title: 'Home'
}
export default function Home() {

  return (
    <div >
      <HomePage />
    </div>
  )
}
