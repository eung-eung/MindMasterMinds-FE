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
                <img alt="content" className={classes.logo} src="https://s3-alpha-sig.figma.com/img/4b7d/f647/949d4b94025cac1362ac50df7f43670f?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=p-sNxQDEqtc~q7MR1aILWielUHE6SnbBim4dbVvGNFzeP4-Z8-F~rov2ckZSopbTPlcZMlpeFEWttANBxr7UyT4ilsAgLkG8rF1d7TJYL5wmXpzeARDcjPrLbeK2YJHBmz2R3iLKml6nYkJNRZh8U9GPvDuP8gH355IHCwdNhkSaMiOw66TXUeBf1uWCmxsZZOPY3M2QvXhJstHcbRp5AxowuDkxw~DE0Nt7AvYlknI0SqWmGP7AkAHjxLlFrzkDjvKvG9aTclQzvkP6BhjWSpORx9hw3KT7jmFAlt3mSvPRjvQ9oyWWhxG1KRW8slaXwrwlA0KVIwpJ5if2LukNSA__" />
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
