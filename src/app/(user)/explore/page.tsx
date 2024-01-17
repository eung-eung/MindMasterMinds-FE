import FormPostBlog from '@/app/components/explorePage/form-post-blog'
import ExplorePage from '@/app/components/explorePage/page'

import { Metadata } from 'next'
import classes from './page.module.css'
import React from 'react'
export const metadata: Metadata = {
    title: 'Explore'
}
export default function Explore() {

    return (
        <div>
            <ExplorePage />
        </div>
    )
}
