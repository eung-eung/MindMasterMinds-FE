'use client'
import React, { useEffect, useState } from 'react'
import Header from '@/app/components/homePage/header'
import LoadingTheme from '@/app/components/loadingTheme/loadingTheme'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import Footer from '../../components/footer/footer'
import classes from './page.module.css'
import Link from 'next/link'
import { axiosAuth } from '@/app/lib/axious';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export default function ProfileUserPage() {

    const { data: session, status } = useSession()

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNum, setPhoneNum] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumError, setPhoneNumError] = useState('');
    const [balance, setBalance] = useState('')
    const [emailError, setEmailError] = useState('');
    const [avatar, setAvatar] = useState<File | null>(null);
    const [avatarURL, setAvatarURL] = useState<string | null>(null);
    const [isLoading, setLoading] = useState<boolean>(true);
    const token = session?.user.accessToken;
    const userId = session?.user.userViewLogin.id;
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axiosAuth.get(`/User/get-user-detail/${userId}`);
                const userData = response.data;
                setFirstName(userData.firstName || '');
                setLastName(userData.lastName || '');
                setPhoneNum(userData.phoneNumber || '');
                setEmail(userData.email || '');
                setAvatarURL(userData.avatar || null);
                setBalance(userData.wallet.balance)
                setLoading(false);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        if (status !== 'loading') setLoading(false);
        if (!session && status === 'unauthenticated') {
            redirect('/signIn');
        } else {
            fetchData();
        }
    }, [session, status]);





    const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files && e.target.files[0];
        if (file) {
            setAvatar(file);
            const reader = new FileReader();
            reader.onload = () => {
                const result = reader.result;
                if (typeof result === 'string') {
                    setAvatarURL(result);
                }
            };
            reader.readAsDataURL(file);
        } else {
            e.target.value = '';
        }
    };


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        if (name === 'firstName') {
            setFirstName(value);
        } else if (name === 'lastName') {
            setLastName(value);
        } else if (name === 'phoneNum') {
            setPhoneNum(value);
            if (value && !value.match(/^0?[0-9]{9}$/)) {
                setPhoneNumError('Phone number must have 10 digits and start with 0.');
            } else {
                setPhoneNumError('');
            }
        } else if (name === 'email') {
            setEmail(value);
            if (value && !value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
                setEmailError('Please enter a valid email.');
            } else {
                setEmailError('');
            }
        }
    };

    const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        try {
            const formData = new FormData();

            if (firstName)
                formData.append('firstName', firstName);
            if (lastName)
                formData.append('lastName', lastName);
            if (phoneNum)
                formData.append('phoneNum', phoneNum);
            if (email)
                formData.append('email', email);
            if (avatar)
                formData.append('avatar', avatar);

            const response = await axiosAuth.put('/User/update-profile',
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'Authorization': `Bearer ${token}`
                    },
                });

            if (response.status === 200) {
                console.log('Profile updated successfully');
                toast.success('Profile updated successfully', {
                    position: 'top-right',
                    autoClose: 5000, // Close the toast after 5 seconds
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
        } catch (error: any) {
            console.error('Error updating profile:', error); 
            toast.error('Failed to update profile', {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    };



    return (
        <div>
            {isLoading ? <LoadingTheme /> :
                <>
                    <Header title='Profile User' isHome={false} />
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
                        transition={Bounce}
                    />
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

                                            {avatarURL ? (
                                                <img
                                                    className={classes.coverImage}
                                                    alt="cover photo"
                                                    src={avatarURL}
                                                />
                                            ) : (
                                                <img
                                                    className={classes.coverImage}
                                                    alt="default avatar"
                                                    src="https://static.thenounproject.com/png/642902-200.png"
                                                />
                                            )}
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
                                                                <input
                                                                    id="file-upload"
                                                                    name="file-upload"
                                                                    type="file"
                                                                    accept=".jpg, .png"
                                                                    className="sr-only"
                                                                    onChange={handleAvatarChange}
                                                                />
                                                            </label>
                                                        </div>
                                                        <p className="text-xs leading-5" style={{ fontFamily: "Belanosima" }}>PNG or JPG</p>

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
                                                        onChange={handleChange}
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
                                                        onChange={handleChange}
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
                                                        onChange={handleChange}
                                                    />

                                                </div>
                                                {phoneNumError && <p style={{ fontFamily: "Belanosima" }} className="text-red-500 text-sm flex justify-center ml-24">{phoneNumError}</p>}
                                                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                                    <dt className={classes.typography}>Email</dt>
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        id="email"
                                                        className={`${classes.typographyInput} w-96 rounded-md border-0 py-3 px-4 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
                                                        value={email}
                                                        onChange={handleChange}
                                                    />

                                                </div>
                                                {emailError && <p style={{ fontFamily: "Belanosima" }} className="text-red-500 text-sm flex justify-center">{emailError}</p>}
                                                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                                    <dt className={classes.typography}>Balance</dt>
                                                    <dd className={`${classes.typographyInput} mt-1 text-sm leading-6 sm:col-span-2 sm:mt-0`}>
                                                        {balance.toLocaleString()} VND
                                                    </dd>
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