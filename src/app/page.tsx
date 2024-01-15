'use client'
import { useSession } from "next-auth/react"
import LoginPage from "./login/Login"
import { decode } from "next-auth/jwt"
export default function Home() {
  const { status } = useSession()
  console.log('status: ', status);

  return (
    <div>
      <p>Home Page</p>
      <LoginPage />
    </div>
  )
}
