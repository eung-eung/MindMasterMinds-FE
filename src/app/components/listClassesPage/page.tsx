'use client'
import React from 'react'
import classes from './page.module.css'
import Header from '@/app/components/homePage/header'
import LoadingTheme from '@/app/components/loadingTheme/loadingTheme'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import Footer from '@/app/components/footer/footer'
import ListCard from './listCard'
import ErrorPage from '../errorPage/page'


export default function ListClassesPage() {
  const { data: session, status } = useSession()
  const [isLoading, setLoading] = React.useState<boolean>(true)
  console.log(session);
  const role = session?.user.userViewLogin.userRole.roleName;


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
        {role==="Tutor" ? 
        <div>
          {/* Header */}
          <Header title='List Of Classes' isHome={false} />
          <div className="container mx-auto my-24">

            <ListCard />

          </div>
          {/* Footer */}
          <Footer />
          </div>: 
          <div>
            <ErrorPage/>
          </div>
          }
        </>
      }

    </div>
  )
}
