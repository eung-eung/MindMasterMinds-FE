'use client'
import Footer from '@/app/components/footer/footer'
import Header from '@/app/components/homePage/header'
import LoadingTheme from '@/app/components/loadingTheme/loadingTheme'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import React from 'react'
export default function AClassLayout({
  children
}: {
  children: React.ReactNode

}) {
  const { data: session, status } = useSession()
  const [isLoading, setLoading] = React.useState<boolean>(true)
  console.log(session);


  React.useEffect(() => {
    if (status !== 'loading') setLoading(false)
    if (!session && status === 'unauthenticated') {
      redirect('/signIn')
    }
  }, [status])
  return (
    <>
      {
        isLoading ? <LoadingTheme /> : <>
          <Header title='Class' isHome={false} />
          {children}
          <Footer />
        </>}
    </>
  )
}
