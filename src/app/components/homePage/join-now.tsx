import React from 'react'
import classes from './join-now.module.css'

export default function Join() {
  return (
    <div>
        <section className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-col px-5 py-16 justify-center items-center">
    <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
      <h1 className={classes.title}>Join now to get special offers at MindMasterminds</h1>
      <p className={classes.p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at massa sit amet nisi blan dipiscing elit. </p>
      <div className="flex w-full justify-center items-end">
        <button className={classes.button}>
            <p className={classes.buttonContent}>Join Now</p>
        </button>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}
