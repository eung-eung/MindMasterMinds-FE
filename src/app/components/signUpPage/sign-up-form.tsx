'use client'
import React from 'react'
import classes from '../loginPage/sign-in-form.module.css'
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import Link from 'next/link';
export default function SignUpForm() {

    const handleForm = () => {

    }
    return (
        <div className='
    container
    mx-auto 
    text-center 
    flex 
    items-center 
    flex-col 
    w-5/6
   
    '
        >
            <div className={' w-full flex flex-col items-center p-10'}>
                {/* <p className={classes.light_grey + ' mb-14 text-xl font-bold w-8/12'}>
                    Register for free to get the best study resources
                </p> */}
                <form className='mb-14 xl:w-6/12 lg:w-2/4' onSubmit={handleForm}>
                    <div className='flex flex-col justify-left mb-6'>
                        <label htmlFor='firstName' className='text-left mb-3 font-medium	'>First name</label>
                        <input
                            // ref={emailInput}
                            type='text' id='firstName'
                            className={classes.form_input}
                            placeholder='First Name' />
                    </div>
                    <div className='flex flex-col justify-left mb-6'>
                        <label htmlFor='lastName' className='text-left mb-3 font-medium	'>Last name</label>
                        <input
                            // ref={emailInput}
                            type='text' id='lastName'
                            className={classes.form_input}
                            placeholder='Last Name' />
                    </div>
                    <div className='flex flex-col justify-left mb-6'>
                        <label htmlFor='email' className='text-left mb-3 font-medium'>Email</label>
                        <input
                            // ref={emailInput}
                            type='email' id='lastName'
                            className={classes.form_input}
                            placeholder='Email' />
                    </div>

                    <div className='flex flex-col justify-center'>
                        <label htmlFor='password' className='text-left mb-3 font-medium	'>Password</label>
                        <input
                            // ref={passwordInput}
                            type='password' id='password'
                            className={classes.form_input}
                            placeholder='Password' />
                    </div>
                    <button className={classes.submit_btn}><PersonAddAltOutlinedIcon className='mr-4' /> Register</button>
                </form>

                {/* sign up */}
                <Link href='/signIn' className={classes.light_grey + ' mt-10'}>Already have an account? Sign in here</Link>
            </div>
        </div>
    )
}
