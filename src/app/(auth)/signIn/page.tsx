'use client'
import { signIn } from 'next-auth/react'
import React, { useRef } from 'react'
import classes from './page.module.css'
import GoogleIcon from '@mui/icons-material/Google';
import LoginIcon from '@mui/icons-material/Login';
import Image from 'next/image';
import Link from 'next/link';
export default function SignInPage() {
    const emailInput = useRef<any>()
    const passwordInput = useRef<any>()
    async function handleForm(event: React.FormEvent) {
        event.preventDefault()
        const res = await signIn('credentials', {
            username: emailInput.current.value,
            password: passwordInput.current.value,
            callbackUrl: '/'

        });
        console.log(res);

    }

    return (
        <div className='
        container
        mx-auto 
        text-center 
        h-screen 
        flex 
        items-center 
        justify-center 
        flex-col 
        w-5/6
       
        '
        >
            {/* <Image className={classes.background_image} fill src='/images/transparentBackground.jpg' alt='aa' /> */}
            <div className={' w-full flex flex-col items-center p-10  border-solid border border-black'}>

                <h1 className={' text-5xl font-bold mb-3 xl:w-6/12 lg:w-2/4'}>Welcome to MasterMinds!</h1>
                <p className={classes.light_grey + ' mb-14 text-sm font-medium w-8/12'}>Register for free to get the best study resources</p>

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
                    <button className={classes.submit_btn}><LoginIcon className='mr-4' /> Login</button>
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
                <Link href='/signUp' className={classes.light_grey + ' mt-10'}>Don't have an account? Get started for free</Link>
            </div>
        </div>
    )
}
