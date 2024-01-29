import React from 'react'
import PostItem from './post-item'
import Link from 'next/link'

export default function PostGrid() {
    return (
        <div className='container mx-auto  pb-20 mb-4 xl:w-2/5 sm:w-full'>
            {/* <Link href='/explores/1' > */}
            <PostItem />
            {/* </Link> */}
            {/* <Link href='/explores/1' > */}
            <PostItem />
            {/* </Link> */}

        </div>
    )
}
