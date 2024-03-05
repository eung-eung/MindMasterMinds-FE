'use client'
import React from 'react'
import Header from '@/app/components/homePage/header'
import LoadingTheme from '@/app/components/loadingTheme/loadingTheme'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import Footer from '../../components/footer/footer'
import HistoryOrderTable from './historyOrderTable'
import { ClipboardDocumentCheckIcon } from '@heroicons/react/24/outline'


function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}
export default function HistoryOrderPage() {
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
          <Header title='History Order' isHome={false} />

          {/* Table */}
          <div className='container mx-auto my-24'>
            <h1 className='font-[Belanosima] flex justify-center mb-14 text-5xl font-semibold'>
              History Order <ClipboardDocumentCheckIcon className='w-12 h-12 ml-4' />
            </h1>
            <HistoryOrderTable />
          </div>


          {/* Footer */}
          <Footer />
        </>
      }
    </div>
  )
}
