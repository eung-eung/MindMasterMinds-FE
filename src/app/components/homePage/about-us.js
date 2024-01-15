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
                <img alt="content" className={classes.logo} src="https://s3-alpha-sig.figma.com/img/4b7d/f647/949d4b94025cac1362ac50df7f43670f?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YAUA1s~Bg1TGp7ZltwTZyF2urMmqoFfBzY0LWt~8z6-yYh-a76dGrAZoTULAPeY-3XM9y1Em0qqnwG2MM25u5Xmh3T7EJ46Mm6JNEJi851E2FBc09ToiogEfiY3bm2NR4UdVwCuEv2FmwTEGkY9Ekcwp825znejjkNlamxSePfZHW~DyeaiO38ZUF88zOLCl6RBpj9DKK7y6Ystd3ADfHjAMaNzyoHFTih0blKjmeF71DOEC2sr7tldWxuSmizc8Qb~kM-BhPWxVzkkixsDnMvywL9Nmx8H~o6RSRpFU1jzZquwEFYxKr2RftP~BWcRq155HpSpTOiYT-qj1Unddlg__" />
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
