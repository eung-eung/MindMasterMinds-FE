'use client'
import React from 'react'
import classes from './page.module.css'
import Header from '@/app/components/homePage/header'
import LoadingTheme from '@/app/components/loadingTheme/loadingTheme'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import Footer from '@/app/components/footer/footer'
import ListCard from './listCard'


export default function ListTutorPage() {
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
    <div>
      {isLoading ? <LoadingTheme /> :
        <>
          {/* Header */}
          <Header title='Our Tutors' isHome={false} />
          <div className="container mx-auto my-24">

            {/* Card introduction */}
            <section className="flex justify-center items-center">
              <div className=" px-4 py-2 mb-12 mx-auto">
                <div className="flex flex-wrap -mb-10 text-center">
                  <div className={`${classes.cardIntroContainer} sm:w-1/2 mb-10 mx-4`}>
                    <div className={classes.cardIntroBorder}>
                      <p className={classes.cardIntroTitle}>Finding The Best Tutors</p>
                    </div>
                    <h2 className={`m-7 ${classes.cardIntroContent} `}>
                      MindMasterminds can match you with an teacher who can prepare preparation lessons focusing on the areas that suit you. Whether you want an tutor in any fields, our tutors will help you hit your targets and rates. Looking for a different way to “taste your knowledge”?
                    </h2>
                    <button className={`flex mx-auto ${classes.cardIntroButton}`}>Post Request</button>
                  </div>
                  <div className={`${classes.cardIntroContainer} sm:w-1/2 mb-10 mx-4`}>
                    <div className={classes.cardIntroBorder}>
                      <p className={classes.cardIntroTitle}>Join Us</p>
                    </div>
                    <h2 className={`m-7 ${classes.cardIntroContent} `}>
                      Join the tutor community at Masterminds and create a new way to learn online.
                    </h2>
                    <button className={`flex mx-auto ${classes.cardIntroButton}`}>Become A Tutor</button>
                  </div>
                </div>
              </div>
            </section>


            {/* search */}

            <div className="mt-16 ml-6 grid grid-cols-1 gap-x-16 gap-y-4 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label htmlFor="searchTutor" className={classes.searchLabel}>
                  Tutors’ Portfolio
                </label>
                <div className={`${classes.inputSearch} block w-full rounded-md border-0 py-3 px-4 text-gray-600 shadow-sm ring-1 ring-inset ring-white placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6 mt-4`}>
                  <div className="flex items-center">
                    <button className="mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-gray-600">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                      </svg>
                    </button>
                    <input
                      type="text"
                      name="searchTutor"
                      id="searchTutor"
                      autoComplete="Search"
                      placeholder="Search portfolios"
                    />
                  </div>
                </div>


              </div>
              
            </div>

            {/* Card Tutor List */}
            <div className={` mt-0 py-2 flex flex-wrap md:flex-nowrap`}>
              <div className="container py-0 mx-auto flex items-start md:flex-row flex-col">
                <div className="flex flex-col md:pr-10 md:mb-0 mb-6 pr-0 mb-16 w-full md:w-auto md:text-left text-center">
                  <ListCard />
                </div>
                <div className="flex md:ml-auto md:mr-0 mx-auto items-end flex-shrink-0 space-x-6">

                  <span className="ml-16 flex items-center flex-col leading-none">
                    <img className={classes.cardAdvertise} src='https://s3-alpha-sig.figma.com/img/0ed2/e1d3/62320044d8e7ac180490bcaa86dd2c1e?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aI9bs5~jWl3cJ~BWSr14QbCsWyuDazNj0p5Zk0Qtj3VYWvnJ-vLlC7LN6BJ820775GkVpK037VTSy1n6WoqN6Dj~AEHYDedIT~7VMPeBpNl7DGjvUYkyrVybZAWlo9hl2XyyxwpQgdYpm1irLC2OIe05iZlnnLAGnMROiNW9P46J0jctb5sxuUE4UrvRZZI5tiMVXI7vk1cHOh7akCzDgWxMxdSsVvdU90vMNf17LjZ6oDmhqGUHsuoiYCZat94KILT-q4WBMw6WVdA81JWm~l8HQJxl4zFKFdDARnxHAoJf9vMAjU0eaBFNNZ3uTTto0HPspyoU9S4Vkh~ILSjRsw__' />
                    <img className={classes.cardAdvertise} src='https://s3-alpha-sig.figma.com/img/0ed2/e1d3/62320044d8e7ac180490bcaa86dd2c1e?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aI9bs5~jWl3cJ~BWSr14QbCsWyuDazNj0p5Zk0Qtj3VYWvnJ-vLlC7LN6BJ820775GkVpK037VTSy1n6WoqN6Dj~AEHYDedIT~7VMPeBpNl7DGjvUYkyrVybZAWlo9hl2XyyxwpQgdYpm1irLC2OIe05iZlnnLAGnMROiNW9P46J0jctb5sxuUE4UrvRZZI5tiMVXI7vk1cHOh7akCzDgWxMxdSsVvdU90vMNf17LjZ6oDmhqGUHsuoiYCZat94KILT-q4WBMw6WVdA81JWm~l8HQJxl4zFKFdDARnxHAoJf9vMAjU0eaBFNNZ3uTTto0HPspyoU9S4Vkh~ILSjRsw__' />
                    <img className={classes.cardAdvertise} src='https://s3-alpha-sig.figma.com/img/0ed2/e1d3/62320044d8e7ac180490bcaa86dd2c1e?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aI9bs5~jWl3cJ~BWSr14QbCsWyuDazNj0p5Zk0Qtj3VYWvnJ-vLlC7LN6BJ820775GkVpK037VTSy1n6WoqN6Dj~AEHYDedIT~7VMPeBpNl7DGjvUYkyrVybZAWlo9hl2XyyxwpQgdYpm1irLC2OIe05iZlnnLAGnMROiNW9P46J0jctb5sxuUE4UrvRZZI5tiMVXI7vk1cHOh7akCzDgWxMxdSsVvdU90vMNf17LjZ6oDmhqGUHsuoiYCZat94KILT-q4WBMw6WVdA81JWm~l8HQJxl4zFKFdDARnxHAoJf9vMAjU0eaBFNNZ3uTTto0HPspyoU9S4Vkh~ILSjRsw__' />

                    <img className={classes.cardAdvertise} src='https://s3-alpha-sig.figma.com/img/0ed2/e1d3/62320044d8e7ac180490bcaa86dd2c1e?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aI9bs5~jWl3cJ~BWSr14QbCsWyuDazNj0p5Zk0Qtj3VYWvnJ-vLlC7LN6BJ820775GkVpK037VTSy1n6WoqN6Dj~AEHYDedIT~7VMPeBpNl7DGjvUYkyrVybZAWlo9hl2XyyxwpQgdYpm1irLC2OIe05iZlnnLAGnMROiNW9P46J0jctb5sxuUE4UrvRZZI5tiMVXI7vk1cHOh7akCzDgWxMxdSsVvdU90vMNf17LjZ6oDmhqGUHsuoiYCZat94KILT-q4WBMw6WVdA81JWm~l8HQJxl4zFKFdDARnxHAoJf9vMAjU0eaBFNNZ3uTTto0HPspyoU9S4Vkh~ILSjRsw__' />
                  </span>
                </div>
              </div>

            </div>

            <div className="flex justify-center items-center">
              <button className={classes.buttonSeeMore}>
                See more
              </button>
            </div>



          </div>
          {/* Footer */}
          <Footer />
        </>
      }

    </div>
  )
}
