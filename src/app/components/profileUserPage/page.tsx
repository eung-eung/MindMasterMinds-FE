'use client'
import React from 'react'
import Header from '@/app/components/homePage/header'
import LoadingTheme from '@/app/components/loadingTheme/loadingTheme'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import classNamees from './page.module.css'
import Footer from '../../components/footer/footer'
import { PaperClipIcon } from '@heroicons/react/24/outline'
import classes from './page.module.css'
import Link from 'next/link'

export default function ProfileUserPage() {

    const { data: session, status } = useSession()

    const [firstName, setFirstName] = React.useState(session?.user.userViewLogin.firstName);
    const [lastName, setLastName] = React.useState(session?.user.userViewLogin.lastName);
    const [phoneNum, setPhoneNum] = React.useState(session?.user.userViewLogin.phoneNumber);
    const [email, setEmail] = React.useState(session?.user.userViewLogin.email);
    const [phoneNumError, setPhoneNumError] = React.useState('');
    const [emailError, setEmailError] = React.useState('');

   
    const [isLoading, setLoading] = React.useState<boolean>(true)
    console.log(session);

    React.useEffect(() => {
        if (status !== 'loading') setLoading(false)
        if (!session && status === 'unauthenticated') {
            redirect('/signIn')
        }
    }, [status])

    const handleSubmit = () => {
        // Validation checks
        if(phoneNum!=null && email!=null) {

        
        const isPhoneNumberValid = Boolean(phoneNum.match(/^0?[0-9]{9}$/));
        const isEmailValid = Boolean(email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/));

        if (isPhoneNumberValid && isEmailValid) {
            alert('Form submitted with valid values: ' + JSON.stringify({ firstName, lastName, phoneNum, email }));

        } else {
            if (!isPhoneNumberValid) {
                setPhoneNumError('Phone number has 10 digits and start with 0.');
            } else {
                setPhoneNumError(''); 
            }

            if (!isEmailValid) {
                setEmailError('Please enter a valid email.');
            } else {
                setEmailError(''); 
            }

            console.error('Validation failed. Please check phone number and email.');
        }
    }
    };

    return (
        <div>
            {isLoading ? <LoadingTheme /> :
                <>
                    <Header title='Profile User' isHome={false} />

                    {/* Profile information */}
                    <section className="text-gray-600 body-font">
                        <div className="container px-1 py-24 mx-auto flex flex-col">
                            <div className="lg:w-5/6 mx-auto mb-16">
                                <h1 className={classes.typographyWelcome}>Welcome, {session?.user.userViewLogin.firstName} {session?.user.userViewLogin.lastName}</h1>
                                <div className={classes.createGoalBar}>
                                    <span className='mr-4'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="19" viewBox="0 0 22 19" fill="none">
                                            <path d="M19.8 0H2.2C0.99 0 0.011 0.855 0.011 1.9L0 19L4.4 15.2H19.8C21.01 15.2 22 14.345 22 13.3V1.9C22 0.855 21.01 0 19.8 0ZM12.1 8.55H9.9V2.85H12.1V8.55ZM12.1 12.35H9.9V10.45H12.1V12.35Z" fill="black" />
                                        </svg>
                                    </span>
                                    You have not created your goal for your exam preparation process.
                                    <span className='ml-2'>
                                        <a href='#' style={{ textDecoration: "underline" }}>Create now</a>
                                    </span>
                                </div>
                            </div>


                            {/* Profile detail */}
                            <div className="lg:w-5/6 mx-auto">

                                <div className="flex flex-col sm:flex-row mt-10">
                                    <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                                        <div className="full inline-flex items-center justify-center ">

                                            <img
                                                className={classes.coverImage}
                                                alt='cover photo' src='https://s3-alpha-sig.figma.com/img/6181/1ae8/89b0660d6dd91bdedba586139a98a0fe?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Cpole3t8w0X8hD0gFj1jlfCH53VsmP8Jr5YSD0GT1N4Zj3QT7YPQThO3UtnCZtIJz00mgRApSBkQ83N43JiIRPU9B2tqs6b~pKRFjskljdfKcD-W1t8KOMWqstIRogHfC-3aEhEgT~vAdqU0AnruqX26Xdf8EMAOC22oJ3-qNqmwjlDis4EarC20MjQVzXszmnjAHFtI0n6WxW-IMCFFFqRo1vhDu~iW0OoQOnH5b7wT-IhT71oUgMjFP2b~tpf-QOA3F-R~~WBkEogi8~0FB5Imf5qGAjDsEUeqY9jI9lmCK6MIehsRjDfxEvdGSFM5U1bMdl5YroRoMDqMl7ps2A__' />
                                        </div>
                                        <div className="flex flex-col items-center text-center justify-center">

                                            <div className="col-span-full">
                                                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-2">
                                                    <div className="text-center">
                                                        <div className=" flex justify-center text-sm leading-6 text-gray-600">
                                                            <label
                                                                htmlFor="file-upload"
                                                                className={`${classes.typography} relative cursor-pointer rounded-md bg-white font-bold focus-within:outline-none focus-within:ring-2 focus-within:ring-black focus-within:ring-offset-2 hover:text-black`}
                                                            >
                                                                <span>Choose an image</span>
                                                                <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                                                            </label>
                                                        </div>
                                                        <p className="text-xs leading-5" style={{ fontFamily: "Belanosima" }}>PNG, JPG, GIF up to 10MB</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
            <div>
                <div className="px-4 sm:px-0">
                    <h3 className={classes.typographyTitle}>Personal Information</h3>
                </div>
                <div className="mt-6 border-t border-gray-200">
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className={classes.typography}>First name</dt>
                        <input
                            type="text"
                            name="firstName"
                            id="firstName"
                            className={`${classes.typographyInput} w-96 rounded-md border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className={classes.typography}>Last name</dt>
                        <input
                            type="text"
                            name="lastName"
                            id="lastName"
                            className={`${classes.typographyInput} w-96 rounded-md border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className={classes.typography}>Phone number</dt>
                        <input
                            type="number"
                            name="phoneNum"
                            id="phoneNum"
                            className={`${classes.typographyInput} w-96 rounded-md border-0 py-3 px-4 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
                            value={phoneNum}
                            onChange={(e) => {
                                setPhoneNum(e.target.value);
                                setPhoneNumError(''); // Clear the error message when the user types
                            }}
                        />
                         
                    </div>
                    {phoneNumError && <p style={{fontFamily: "Belanosima"}} className="text-red-500 text-sm flex justify-center ml-24">{phoneNumError}</p>}
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className={classes.typography}>Email</dt>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className={`${classes.typographyInput} w-96 rounded-md border-0 py-3 px-4 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                                setEmailError(''); // Clear the error message when the user types
                            }}
                        />
                        
                    </div>
                    {emailError && <p style={{fontFamily: "Belanosima"}} className="text-red-500 text-sm flex justify-center">{emailError}</p>}
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className={classes.typography}>Balance</dt>
                        <dd className={`${classes.typographyInput} mt-1 text-sm leading-6 sm:col-span-2 sm:mt-0`}>$120,000</dd>
                    </div>
                    <div className="mt-6 flex items-center justify-start gap-x-6">
                        <button type="submit" onClick={handleSubmit} className={`${classes.button} rounded-md px-3 py-2`}>
                            Save
                        </button>
                        <Link href="/historyOrder">
                        <button type="button" className={`${classes.button} rounded-md px-3 py-2`}>
                            History Order
                        </button>
                        </Link>
                    </div>
                    <div className="mt-6 flex items-center justify-start gap-x-6">
                       
                    </div>
                </div>
            </div>
        </div>

                                </div>
                            </div>
                        </div>
                    </section>

                    <Footer />
                </>
            }
        </div>
    )
}