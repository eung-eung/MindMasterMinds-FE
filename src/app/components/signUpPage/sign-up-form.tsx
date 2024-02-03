'use client'
import React from 'react'
import classes from '../loginPage/sign-in-form.module.css'
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import Link from 'next/link';
import axios from 'axios';
import { AccountRegister } from '@/app/types/AccountRegister';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';

export default function SignUpForm() {
    const router = useRouter()
    const firstName = React.useRef<HTMLInputElement>(null)
    const lastName = React.useRef<HTMLInputElement>(null)
    const email = React.useRef<HTMLInputElement>(null)
    const password = React.useRef<HTMLInputElement>(null)
    const confirmPassword = React.useRef<HTMLInputElement>(null)
    const toastId = React.useRef<any>()
    const otp = React.useRef<HTMLInputElement>(null)
    const regex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/


    const isValidMail = (mail: any) => {
        if (regex.test(mail)) {
            return true
        }
        return false
    }

    const handleSendOTP = async () => {
        if (!email.current?.value || !isValidMail(email.current?.value)) {
            toast.error('Incorrect email format!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
            return
        }
        try {
            toastId.current = toast.loading("Sending OTP...")
            const response = await axios.post(process.env.API_KEY + '/User/send-OTP-email',
                email.current?.value
                , {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            )
            if (response.status === 200) {
                toast.update(toastId.current, {
                    render: "Sent successfully",
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
            }
            console.log(response);
        } catch (error: any) {
            console.log('error: ', error.response.data.Message)
            toast.error(error.response.data.Message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
        }



    }

    const registerAccount = async (
        account: AccountRegister
    ) => {
        try {

            const response = await axios.post(
                process.env.API_KEY + '/User/register-student',
                account,
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            )
            if (response.status === 200) {
                toast.update(toastId.current, {
                    render: "Register successful",
                    type: "success",
                    isLoading: false,
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                })
                setTimeout(() => {
                    router.push('/signIn')
                }, 2000)
            }
        } catch (error: any) {
            toast.error(error.response.data.Message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
        }
    }

    const handleForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const firstNameValue = firstName.current?.value
        const lastNameValue = lastName.current?.value
        const emailValue = email.current?.value
        const passwordValue = password.current?.value
        const confirmPasswordValue = confirmPassword.current?.value
        const otpValue = otp.current?.value
        if (!firstNameValue?.trim()
            || !lastNameValue?.trim()
            || !emailValue?.trim()
            || !isValidMail(emailValue)
            || !otpValue?.trim()) {
            toast.error('Please fill all fields!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Bounce,
            });
            return
        }
        if (passwordValue !== confirmPasswordValue) {
            toast.error('Confirm password is not correct', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Bounce,
            });
            return
        }
        const account: AccountRegister = {}
        account.firstName = firstNameValue
        account.lastName = lastNameValue
        account.password = passwordValue
        account.email = emailValue
        account.otpEmailCode = otpValue
        registerAccount(account)

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
                position="top-right"
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
            {/* Same as */}
            <ToastContainer />

            <div className={' w-full flex flex-col items-center p-10'}>
                <form className='mb-14 xl:w-6/12 lg:w-2/4' onSubmit={handleForm}>
                    <div className='flex flex-col justify-left mb-6'>
                        <label htmlFor='firstName' className='text-left mb-3 font-medium	'>First name</label>
                        <input
                            ref={firstName}
                            type='text' id='firstName'
                            className={classes.form_input}
                            placeholder='First Name' />
                    </div>
                    <div className='flex flex-col justify-left mb-6'>
                        <label htmlFor='lastName' className='text-left mb-3 font-medium	'>Last name</label>
                        <input
                            ref={lastName}
                            type='text' id='lastName'
                            className={classes.form_input}
                            placeholder='Last Name' />
                    </div>
                    <div className='flex flex-col justify-left mb-6'>
                        <label htmlFor='email' className='text-left mb-3 font-medium'>Email</label>
                        <input
                            ref={email}
                            type='email' id='email'
                            className={classes.form_input}
                            placeholder='Email' />
                    </div>

                    <div className='flex flex-col justify-center mb-6'>
                        <label htmlFor='password' className='text-left mb-3 font-medium'>Password</label>
                        <input
                            ref={password}
                            type='password' id='password'
                            className={classes.form_input}
                            placeholder='Password' />
                    </div>
                    <div className='flex flex-col justify-center mb-6'>
                        <label htmlFor='c-password' className='text-left mb-3 font-medium'>Confirm Password</label>
                        <input
                            ref={confirmPassword}
                            type='password' id='c-password'
                            className={classes.form_input}
                            placeholder='Confirm Password' />
                    </div>
                    <div className='flex flex-col justify-center mb-6'>
                        <label htmlFor='otp' className='text-left mb-3 font-medium'>OTP</label>
                        <div className='flex '>
                            <input
                                ref={otp}
                                type='text' id='otp'
                                className={classes.form_input}
                                style={{ flex: 3, }}
                                placeholder='OTP' />
                            <button
                                type='button'
                                onClick={handleSendOTP}
                                style={{ borderColor: '#93FDD3' }}
                                className={classes.form_input + ' ml-5'}>Send OTP</button>
                        </div>
                    </div>
                    <button className={classes.submit_btn}><PersonAddAltOutlinedIcon className='mr-4' /> Register</button>
                </form>

                {/* sign up */}
                <Link href='/signIn' className={classes.light_grey + ' mt-10'}>Already have an account? Sign in here</Link>
            </div>
        </div>
    )
}
