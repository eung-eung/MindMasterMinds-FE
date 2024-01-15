import React from 'react'
import classes from './article.module.css'

export default function Article() {
  return (
    <div>
        <section className="text-gray-600 body-font">
  <div className="container px-5 py-20 mx-auto">
  <div className="flex flex-wrap w-full mb-20">
  <div className="lg:w-2/3 w-full mb-6 lg:mb-0">
    <h1 className={classes.title}>Check out our Latest Articles and Knowledge</h1>
  </div>

  <div className="lg:w-1/3 w-full leading-relaxed">
    <p className={classes.p}>
      Exclusive articles and the latest knowledge from all students' experiences across the country.
    </p>
    
    <button class={`${classes.button} flex mx-auto mt-6 text-white py-2 px-8 mr-0`}>
            <p className={`${classes.typography} w-full text-center`}>View all</p>
          </button>
  </div>
</div>

    <section className="text-gray-600 body-font">
  <div className="container px-5 py-0 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="p-4 md:w-1/3">
        <div className={`${classes.frame} h-full rounded-lg overflow-hidden`}>
          <img className={`${classes.image} lg:h-48 md:h-36 w-full object-cover object-center`} src="https://s3-alpha-sig.figma.com/img/9b2c/d4f8/5fb511ef128a1b0749ce3aece6b0d936?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=V2Yx36HnBpd17CxW5FgQRgTvX5BfUE4PG~U~ZGY5Xh8J8VPIJq4-YS26PrAIwEdxKOrFZb6843bKiSRl~KHzB8AeHkzdQ-QzMTxml72XYqgnRjpnUiKYn266edznSqKm1wndgljykUM7FRYJDccjax0jh05mJrjVOTcW6Z4-5NwFeszFjf245F3s~N~HX2G5U7OKG-RZZyEwodXRnyr-3X07wP9z8tPIGiDJozQOB7mhB6MQTl9RzR2lYo2BjiVDWdenr~pXlA4-p739Os9lFRCajs3dbVXF4ObC~pJx1tHXABuOGhRvbyW5sIQMULKfEclYIzEweaZfETcUYSSZog__" alt="article"/>
          <div className="p-6">
            <h2 className={classes.date}>12 Aug 2023</h2>
            <h1 className={classes.cardTitle}>Things to know when organizing an event</h1>
            <p className={classes.cardContent}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.  </p>
            <div className="flex items-center flex-wrap ">
              <button class={`${classes.cardButton} flex mx-auto mt-6 text-white py-2 px-8 ml-0`}>
            <p className={`${classes.cardButtonContent} w-full text-center`}>Multimedia Communications</p>
          </button>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className={`${classes.frame} h-full rounded-lg overflow-hidden`}>
          <img className={`${classes.image} lg:h-48 md:h-36 w-full object-cover object-center`} src="https://s3-alpha-sig.figma.com/img/9047/6ccc/06c02ee23bec1abfaf36be41c910821c?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=p0xXakSO5fC2a5VzmRczUHjY2YiI2Euqj~59dSprbFmp~vJdMOLkSH6jR3a9mLbahYbYOW7TV68dMHRib8NETYKM~e54bTDU0FNsBO6LHfEl5U4gEBEcTLIDPDUKxNwigm-BB-5A9I3p9hoECsKBzqzaLfYas9dijgqRIGyGfy8ZtiMHPWX25lUkbVrwQMpI2owR1Y3lkf4NVoOiobDM4qAfFP8dafTOl078f0HacAJItZfMRXz0v4uY5tYEdBvWQTGGdPPCDdUCl0VtJGwccCAFMx8J11KnW5Hku4MU5xIOWfWhE1z4x~Q-fPJ3R9ZslMTwVZsGGAoKNST3iF3f2A__" alt="article"/>
          <div className="p-6">
            <h2 className={classes.date}>12 Dec 2023</h2>
            <h1 className={classes.cardTitle}>Tips so you don't get lazy when studying Philosophy subjects</h1>
            <p className={classes.cardContent}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="flex items-center flex-wrap ">
              <button class={`${classes.cardButton} flex mx-auto mt-6 text-white py-2 px-8 ml-0`}>
            <p className={`${classes.cardButtonContent} w-full text-center`}>General</p>
          </button>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className={`${classes.frame} h-full rounded-lg overflow-hidden`}>
          <img className={`${classes.image} lg:h-48 md:h-36 w-full object-cover object-center`} src="https://s3-alpha-sig.figma.com/img/9b2c/d4f8/5fb511ef128a1b0749ce3aece6b0d936?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=V2Yx36HnBpd17CxW5FgQRgTvX5BfUE4PG~U~ZGY5Xh8J8VPIJq4-YS26PrAIwEdxKOrFZb6843bKiSRl~KHzB8AeHkzdQ-QzMTxml72XYqgnRjpnUiKYn266edznSqKm1wndgljykUM7FRYJDccjax0jh05mJrjVOTcW6Z4-5NwFeszFjf245F3s~N~HX2G5U7OKG-RZZyEwodXRnyr-3X07wP9z8tPIGiDJozQOB7mhB6MQTl9RzR2lYo2BjiVDWdenr~pXlA4-p739Os9lFRCajs3dbVXF4ObC~pJx1tHXABuOGhRvbyW5sIQMULKfEclYIzEweaZfETcUYSSZog__" alt="article"/>
          <div className="p-6">
            <h2 className={classes.date}>12 Nov 2023</h2>
            <h1 className={classes.cardTitle}>10 recommendations for good college places</h1>
            <p className={classes.cardContent}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.  </p>
            <div className="flex items-center flex-wrap ">
              <button class={`${classes.cardButton} flex mx-auto mt-6 text-white py-2 px-8 ml-0`}>
            <p className={`${classes.cardButtonContent} w-full text-center`}>International Business</p>
          </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  </div>
</section>
    </div>
  )
}
