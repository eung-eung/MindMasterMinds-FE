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
                Exclusive articles and the latest knowledge from all students experiences across the country.
              </p>

              <button className={`${classes.button} flex mx-auto mt-6 text-white py-2 px-8 mr-0`}>
                <p className={`${classes.typography} w-full text-center`}>View all</p>
              </button>
            </div>
          </div>

          <section className="text-gray-600 body-font">
            <div className="container px-5 py-0 mx-auto">
              <div className="flex flex-wrap -m-4">
                <div className="p-4 md:w-1/3">
                  <div className={`${classes.frame} h-full rounded-lg overflow-hidden`}>
                    <img className={`${classes.image} lg:h-48 md:h-36 w-full object-cover object-center`} src="https://s3-alpha-sig.figma.com/img/9b2c/d4f8/5fb511ef128a1b0749ce3aece6b0d936?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I5XPTwxEc8KUSX-fZt~tL~hs55iTn17lufKG7wNnWv1Fi5Vl8sl5hcwHXVAdqbj8TznqAqrzpQtF4aFVCcAz2qKmjrSs76VtCHPVeLyqd9nYxS16H7ihDb3FcUmaJV93FVxQQZrjrH7xlnc9ID5cDDjYG-BvFLxhGO6Ks9y8J-lUbJp6ptuI8sOQj9P97pbe4OMcxVXgtX6Ud5m4K1bH7g20Kxmy7jPe2dJHjr9o5p1rVLspiJ0bmYbscnmft6w3LBNTVaylHhCHVNlZzhLdCry4Th3vc~37ThOf0bhRIa6sg4hOuSjLJms3Y4tdO91ErrnyDm~44XlXw~dgvwF~uA__" alt="article" />
                    <div className="p-6">
                      <h2 className={classes.date}>12 Aug 2023</h2>
                      <h1 className={classes.cardTitle}>Things to know when organizing an event</h1>
                      <p className={classes.cardContent}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.  </p>
                      <div className="flex items-center flex-wrap ">
                        <button className={`${classes.cardButton} flex mx-auto mt-6 text-white py-2 px-8 ml-0`}>
                          <p className={`${classes.cardButtonContent} w-full text-center`}>Multimedia Communications</p>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4 md:w-1/3">
                  <div className={`${classes.frame} h-full rounded-lg overflow-hidden`}>
                    <img className={`${classes.image} lg:h-48 md:h-36 w-full object-cover object-center`} src="https://s3-alpha-sig.figma.com/img/9047/6ccc/06c02ee23bec1abfaf36be41c910821c?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cjMj0z7zfdv7LYNedqdZ9d~t9nTDkydE7NxF6REey6wVdjRHirxVfrINcyHYw0-QsTccNT6aWvEQLOB1BDnxBwO9VpMYcywpK9OeJwUc8Cqaf8X0oO4Ut1nkWY~8Bsss1FmL~TETwNxKzKi-kZz05zNZIh96h2ongAf9QIZQxinTtfhZ-nSeLzV-lUau7grde-oQNE7UY8UfCpB4wpX137yidP0aDSsVSVEyHtiuzObJmmBhxHvWlV8LrLCsrbDG--Tejo7M7OtNDGHqwxqpbJWht5D2eO~qxSo1IDlRmR3LnQ7onqxEhOrk7mN9uyz6Lz8fhhw3OBR0HneFAF6v9g__" alt="article" />
                    <div className="p-6">
                      <h2 className={classes.date}>12 Dec 2023</h2>
                      <h1 className={classes.cardTitle}>Tips so you dont get lazy when studying Philosophy subjects</h1>
                      <p className={classes.cardContent}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                      <div className="flex items-center flex-wrap ">
                        <button className={`${classes.cardButton} flex mx-auto mt-6 text-white py-2 px-8 ml-0`}>
                          <p className={`${classes.cardButtonContent} w-full text-center`}>General</p>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4 md:w-1/3">
                  <div className={`${classes.frame} h-full rounded-lg overflow-hidden`}>
                    <img className={`${classes.image} lg:h-48 md:h-36 w-full object-cover object-center`} src="https://s3-alpha-sig.figma.com/img/8021/af75/bfd3e9957ad9876277487a57b5b5d5de?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Tw0sM~LF4JVuhZoe9~ze2N20MzDrFu75ecrItDr3LmOWBqrn-sHrCLsIfbphfabJM1vCEnMBHrwChFuihxIPbkOlI9ACr38oP-JbCWO2ZD9uvBLYRf4fC7ZlXRnwCyVwDF~DqNQvDHasQXz3Cjf~tqXTUkVtdtfrQf6EvME5ixEpXeSemFzhswi7YsrNrApKbW4CnFAISnuQD7jYl~VrOWLDpPUwhB9GIQo8QXrUIrYklS62IPNV2BzPgRYHhM~nQzXdqzgmz53jm8IrEhP-d7q99xCoHN32917Y~lKh6NPheZPeGFwCY61Q7zvt3f6jgQnrWYnPwxc1rvgo8OawTA__" alt="article" />
                    <div className="p-6">
                      <h2 className={classes.date}>12 Nov 2023</h2>
                      <h1 className={classes.cardTitle}>10 recommendations for good college places</h1>
                      <p className={classes.cardContent}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.  </p>
                      <div className="flex items-center flex-wrap ">
                        <button className={`${classes.cardButton} flex mx-auto mt-6 text-white py-2 px-8 ml-0`}>
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
