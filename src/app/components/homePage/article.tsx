import React from 'react'
import classes from './article.module.css'
import Link from 'next/link'

export default function Article() {
  return (
    <div>
     <section className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-col px-5 py-16 justify-center items-center">
          <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
            <h1 className={classes.title}>Explore social network page</h1>
            <p className={classes.p}>The songs are shared and the most pregnant page of the teacher and the student</p>
            <div className="flex w-full justify-center items-end">
              <button className={classes.button}>
                <Link href="/explores" className={classes.buttonContent}>Explore page</Link>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
