import React from 'react'

import classes from './header.module.css'
import { signIn } from 'next-auth/react'

export default function HeaderNoAuth() {
    return (
        <nav className="relative mx-auto flex max-w-7xl items-center justify-center p-6 lg:px-8" aria-label="Global">
            <div className="flex items-center">
                <a href="#" className="text-sm font-semibold leading-6">
                    <h3 className={classes.h3}>MindMasterMinds</h3>
                </a>
            </div>
            <button type='button'
                className={classes.signin_button + ' absolute right-0'}
                onClick={() => signIn()}
            >
                Log In
            </button>
        </nav>

    )
}
