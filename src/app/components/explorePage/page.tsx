'use client'
import React, { Suspense, useEffect, useState } from 'react'
import FormPostBlog from './form-post-blog'
import PostGrid from './post-grid'
import { PostExplore } from '@/app/types/Post-Explore'
import usePosts from '@/app/lib/hooks/usePosts'
import PostItem from './post-item'
import LoadingTheme from '../loadingTheme/loadingTheme'
import PostItemSkeleton from '@/app/skeletons/postItemSkeleton'

export default function ExplorePage() {
    const [pageNum, setPageNum] = React.useState(1)
    const { isLoading, isError, error, results, hasNextPage } = usePosts(pageNum)

    const intObserver = React.useRef<IntersectionObserver | null>();



    const lastPostRef = React.useCallback((post: any) => {
        if (isLoading) return
        if (intObserver.current) intObserver.current.disconnect()

        intObserver.current = new IntersectionObserver(posts => {
            if (posts[0].isIntersecting && hasNextPage) {
                setPageNum(prev => prev + 1)
            }
        })
        if (post) intObserver.current.observe(post)
    }, [isLoading, hasNextPage, pageNum])

    if (isError) return <p>Error</p>

    const content = results.map((post: PostExplore, i: any) => {
        if (results.length === i + 1) {
            return <PostItem key={post.id} ref={lastPostRef} post={post} />
        } else {
            return <PostItem key={post.id} post={post} />
        }
    })

    return (
        <div>
            <>
                <div style={{ background: "#F0F2F5" }}>
                    <FormPostBlog setPageNum={setPageNum} />

                    <PostGrid >
                        {content}
                        {isLoading && <PostItemSkeleton />}
                        {
                            !hasNextPage &&
                            <p
                                style={{ color: '#838383' }}
                                className='text-center'
                            >You have reached the bottom of the internet
                            </p>
                        }
                    </PostGrid>
                </div>
            </>
        </div>
    )
}
