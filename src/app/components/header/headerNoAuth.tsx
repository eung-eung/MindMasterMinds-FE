import React from 'react'

import classes from './header.module.css'
import { signIn } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function HeaderNoAuth() {
    const router = useRouter()
    const handleSignIn = () => {
        router.push('/signIn')
    }
    return (
        <nav className="relative mx-auto flex max-w-7xl items-center justify-center p-6 lg:px-8" aria-label="Global">
            <div className="flex items-center">
                <Link href="/" className=" text-sm font-semibold leading-6 ">
                    <h3 className={classes.h3}>MindMasterMinds</h3>
                </Link>
            </div>
            <button type='button'
                className={classes.signin_button + ' absolute '}
                onClick={handleSignIn}
            >
                Sign In
            </button>
            {/* <button type='button'
                className={classes.register_button + ' absolute '}
                onClick={() => signIn()}
            >
                Register
            </button> */}
        </nav>

    )
}
