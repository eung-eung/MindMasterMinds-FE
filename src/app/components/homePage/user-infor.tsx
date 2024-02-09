"use client"
import React, { useEffect, useState } from 'react'
import classes from './user-infor.module.css';
import { useSession } from 'next-auth/react';
import { axiosAuth } from '@/app/lib/axious';
import { redirect } from 'next/navigation'


export default function UserInfor() {
    const { data: session, status } = useSession();
    const userId = session?.user.userViewLogin.id;
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [roleName, setRoleName] = useState('');
    const [avatarURL, setAvatarURL] = useState<string | null>(null);



    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axiosAuth.get(`/User/${userId}`);
                const userData = response.data;
                setFirstName(userData.firstName || '');
                setLastName(userData.lastName || '');
                setRoleName(userData.userRole.roleName || '');
                setAvatarURL(userData.avatar || null)

            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        if (!session && status === 'unauthenticated') {
            redirect('/signIn');
        } else {
            fetchData();
        }
    }, [session, status]);

    return (
        <div className="flex-none sm:flex">
            <div className=" relative h-20 w-20 mx-8 my-8  sm:mb-0">
                {avatarURL ? (
                    <img src={avatarURL} alt="imageUser" className="w-16 h-16 object-cover rounded-2xl" />
                ) : (
                    <img src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/user_male2-512.png" alt="imageUser" className="w-16 h-16 object-cover rounded-2xl" />
                )}

                <a href="/profile" className="absolute -right-2 bottom-2   -ml-3  text-white p-1 text-xs bg-green-400 hover:bg-green-500 font-medium tracking-wider rounded-full transition ease-in duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                        <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z">
                        </path>
                    </svg>
                </a>
            </div>
            <div className="flex items-center justify-between sm:mt-2">
                <div className="flex items-center">
                    <div className="flex flex-col mt-6">
                        <div className={classes.guestUser}>{firstName} {lastName}</div>
                        <div className="flex-auto text-gray-400 my-2">
                            <span className="mr-3 ">
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                                    </svg>

                                    <span className="ml-2">{roleName}</span>
                                </div>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
