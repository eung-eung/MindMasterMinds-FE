'use client'
import React, { useEffect, useState } from 'react'
import PostItem from './post-item'
import useAxiosAuth from '@/app/lib/hooks/useAxiosAuth'
import { PostExplore } from '@/app/types/Post-Explore'

export default function PostGrid({ listPost }: { listPost: PostExplore[] }) {
    console.log('grid: ', listPost);

    return (
        <div className='container mx-auto  pb-20 mb-4 xl:w-2/5 sm:w-full'>
            {/* <Link href='/explores/1' > */}
            {listPost.map(post =>
                <PostItem
                    name={post.user.firstName + post.user.lastName}
                    imageUrl={post.image || ''}
                    avatar={post.user.avatar || '/images/noAvatar.jpg'}
                    content={post.content}
                    reactionsCount={post.reactionsCount}
                    commentsCount={post.commentsCount}
                />
            )}

            {/* <PostItem
                name='39saku_chan'
                imageUrl='https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/423225128_915706496590604_927100527315515549_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeF3NptDuYJlOox1-oe9aEPte1iFSYXYr1J7WIVJhdivUhZ5043FXnEzb1E_4HmQZa_cg6IjpXFvU5ATMLpfwimY&_nc_ohc=zPPPQCWRaj8AX_Csiks&_nc_ht=scontent.fsgn2-6.fna&oh=00_AfCr6Cg_KRlmZ9tjWG-eaTmhBi2vf_-isbTUFxo3528f_A&oe=65BBA0D9'
                avatar='https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/423225128_915706496590604_927100527315515549_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeF3NptDuYJlOox1-oe9aEPte1iFSYXYr1J7WIVJhdivUhZ5043FXnEzb1E_4HmQZa_cg6IjpXFvU5ATMLpfwimY&_nc_ohc=zPPPQCWRaj8AX_Csiks&_nc_ht=scontent.fsgn2-6.fna&oh=00_AfCr6Cg_KRlmZ9tjWG-eaTmhBi2vf_-isbTUFxo3528f_A&oe=65BBA0D9'
                content='GwenChana, mianhae ~'

            /> */}
            {/* </Link> */}
            {/* <Link href='/explores/1' > */}
            {/* <PostItem /> */}
            {/* </Link> */}

        </div>
    )
}
