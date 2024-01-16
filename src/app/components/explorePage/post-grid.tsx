import React from 'react'
import PostItem from './post-item'

export default function PostGrid() {
    return (
        <div className='container mx-auto flex flex-col	items-center pt-10 pb-20 mb-4 xl:w-2/4 sm:w-full'>
            <PostItem />
            <PostItem />
        </div>
    )
}
