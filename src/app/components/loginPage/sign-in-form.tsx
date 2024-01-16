'use client'
import { signIn } from 'next-auth/react';
import React from 'react'
import classes from './sign-in-form.module.css'
import GoogleIcon from '@mui/icons-material/Google';
import LoginIcon from '@mui/icons-material/Login';
import Image from 'next/image';
import Link from 'next/link';
export default function SignInForm() {
    const emailInput = React.useRef<any>()
    const passwordInput = React.useRef<any>()
    async function handleForm(event: React.FormEvent) {
        event.preventDefault()
        const res = await signIn('credentials', {
            username: emailInput.current,
            password: passwordInput.current,
            callbackUrl: '/'

        });
        console.log(res);

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
                        <label htmlFor='username' className='text-left mb-3 font-medium	'>Username or email</label>
                        <input
                            ref={emailInput}
                            type='text' id='username'
                            className={classes.form_input}
                            placeholder='Username or Email' />
                    </div>
                    <div className='flex flex-col justify-center'>
                        <label htmlFor='password' className='text-left mb-3 font-medium	'>Password</label>
                        <input
                            ref={passwordInput}
                            type='password' id='password'
                            className={classes.form_input}
                            placeholder='Password' />
                    </div>
                    <button className={classes.submit_btn}>
                        <LoginIcon className='mr-4' /> Sign In
                    </button>
                </form>
                <div className={classes.after_before + ' xl:w-6/12 lg:w-2/4'}>
                    <p>OTHER</p>
                </div>
                <div
                    className={' xl:w-6/12 lg:w-2/5'}
                    onClick={() => signIn('google', { callbackUrl: '/' })}
                >
                    <div className={classes.button_login + ' flex justify-center items-center'}>
                        <Image className={classes.google_icon} src='/images/google.png' width={40} height={40} alt='11' />
                        <p>Continue with Google</p>
                    </div>

                </div>
                {/* sign up */}
                <Link href='/register' className={classes.light_grey + ' mt-10'}>Don't have an account? Get started for free</Link>
            </div>
        </div>
    )
}
