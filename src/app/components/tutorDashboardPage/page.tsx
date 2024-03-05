"use client"
import React from 'react'
import Card from './card/Card'
import classes from './page.module.css'
import Revenue from './revenue/Revenue'
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation'
import LoadingTheme from '../loadingTheme/loadingTheme';
import Header from '../homePage/header';
import Footer from '../footer/footer';
import ErrorPage from '../errorPage/page'
import BasicTable from './table/Table'
import { ClipboardDocumentCheckIcon } from '@heroicons/react/24/outline'


interface Item {
  total: number;
  title: string;
  label: string;
}

const array: Item[] = [
  {
    title: "Total Number Of Sessions",
    total: 3,
    label: 'Sessions'
  },
  {
    title: "Total Revenue From Sessions",
    total: 200000,
    label: 'VND'
  },

];
export default function TutorDashboardPage() {
  const { data: session, status } = useSession()
  const [isLoading, setLoading] = React.useState<boolean>(true)

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
          {role === "Tutor" ?
            <div>
              {/* Header */}
              <Header title='Tutor Dashboard' isHome={false} />
              <div className="container mx-auto">
                <h1 className="font-[Belanosima] flex justify-center mb-14 text-5xl font-semibold mb-12 mt-24">Dashboard</h1>
                <div className={classes.cardContainer}>
                  {array.map((item, i) => <Card key={i} item={item} />)}
                </div>
                <div className={classes.chartBar}>
                  <h3 style={{ textAlign: "left", marginBottom: "30px", fontFamily: "Belanosima", fontSize: "30px" }}>Revenue</h3>
                  <Revenue />
                </div>
                <div className='container mx-auto my-24'>
                  <h1 className='font-[Belanosima] flex justify-center mb-14 text-5xl font-semibold'>
                    History Order
                  </h1>
                  <BasicTable />
                </div>

              </div>

              <Footer />
            </div>
            :
            <div>
              <ErrorPage />
            </div>
          }
        </>
      }
    </div>
  )
}
