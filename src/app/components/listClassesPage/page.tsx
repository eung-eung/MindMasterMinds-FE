'use client'
import React from 'react'
import classes from './page.module.css'
import Header from '@/app/components/homePage/header'
import LoadingTheme from '@/app/components/loadingTheme/loadingTheme'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import Footer from '@/app/components/footer/footer'
import ListCard from './listCard'


export default function ListClassesPage() {
  const { data: session, status } = useSession()
  const [isLoading, setLoading] = React.useState<boolean>(true)



  React.useEffect(() => {
    if (status !== 'loading') setLoading(false)
    if (!session && status === 'unauthenticated') {
      redirect('/signIn')
    }
  }, [status])

  return (
    <div>
      {isLoading ? <LoadingTheme /> :
        <>

          {/* Header */}
          <Header title='List Of Classes' isHome={false} />
          <div className="container mx-auto my-24">

            <ListCard />

          </div>
          {/* Footer */}
          <Footer />
        </>
      }

    </div>
  )
}
