'use client'
import React, { useEffect, useState } from 'react'


export default function PostGrid({ children }: { children: any }) {
    const [state, setState] = useState(children)

    useEffect(() => {
        setState(children)
    }, [children])
    return (
        <div className='container mx-auto  pb-20 mb-4 xl:w-2/5 sm:w-full'>
            {state}
        </div>
    )
}
