import React from 'react'
import classes from './about-us.module.css';

export default function About() {
  return (
    <div>
      <section className="text-gray-600 body-font bg-white">
        <div className="container px-5 py-24 mt-40 mx-auto">
          <div className="flex flex-wrap -mx-4 -mb-10 text-center">
            <div className="sm:w-1/2 mb-10 px-4">
              <div className="rounded-lg h-64 ">
              <img alt="content" className={classes.logo} src="/images/about_us.png" />
              </div>
            </div>
            <div className="sm:w-1/2 mb-10 px-4">
              <h2 className={classes.h2}>About Us</h2>
              <p className={classes.p}>
                MindMasterminds Inc. is a gathering of young people with similar goals to build a breakthrough intermediary platform in supporting learning, connecting knowledge and guidance easily and effectively. We dream of a world in which everyone has the opportunity to access knowledge, share experiences, and develop themselves through the help of the community.
              </p>
              <button className={classes.button}>see more</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
