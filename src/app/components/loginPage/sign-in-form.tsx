'use client'
import { signIn, useSession } from 'next-auth/react';
import React from 'react'
import classes from './sign-in-form.module.css'
import LoginIcon from '@mui/icons-material/Login';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function SignInForm() {
    const router = useRouter()
    const { data: session } = useSession()
    const emailInput = React.useRef<any>()
    const passwordInput = React.useRef<any>()
    const toastId = React.useRef<any>()


    async function handleForm(event: React.FormEvent) {
        event.preventDefault()
        if (!emailInput.current.value || !passwordInput.current.value) return

        toastId.current = toast.loading("Loading...")
        const res = await signIn('credentials', {
            redirect: false,
            username: emailInput.current.value,
            password: passwordInput.current.value,
            callbackUrl: '/'
        });
        console.log('response: ', res);
        if (!res || !res.url) {
            toast.update(toastId.current, {
                render: "Login failed",
                type: "error",
                isLoading: false,
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            })
            return
        }
        else if (res.ok) {
            toast.update(toastId.current, {
                render: "Login successful, Redirecting...",
                type: "success",
                isLoading: false,
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            })
            router.replace(res?.url)

        }

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
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"

            />
            <div className={' w-full flex flex-col items-center p-10'}>
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
                    <button type='submit' className={classes.submit_btn}>
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
                <Link href='/register' className={classes.light_grey + ' mt-10'}>Dont have an account? Get started for free</Link>
            </div>
        </div>
    )
}
