import React, { useEffect, useState } from 'react'
import PostCardComment from './post-card-comment'
import useAxiosAuth from '@/app/lib/hooks/useAxiosAuth'
import { CommentPostExplore } from '@/app/types/CommentPostExplore'
import { Bounce, ToastContainer, toast } from 'react-toastify'

export default function PostCardGridComments({ postId, isRefresh }: { postId: any, isRefresh: any }) {
    const axiosAuth = useAxiosAuth()
    const [listComment, setListCommments] = React.useState<CommentPostExplore[]>()
    const [isLoading, setIsLoading] = useState(true)
    const getListComments = async () => {
        try {
            setIsLoading(true)
            const response = await axiosAuth.get(`/Post/all-post-comment-by-postId/${postId}?pageNumber=0&pageSize=100`)

            setListCommments(response.data.data)
            setIsLoading(false)
        } catch (e) {
            toast.error('Error when get list comments!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
        }

    }
    useEffect(() => {

        getListComments()
    }, [isRefresh])
    return (
        <>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
            />
            <div className='pl-2 mb-5'>
                {
                    listComment &&
                    listComment?.map(
                        comment =>
                            <PostCardComment
                                key={comment.id}
                                comment={comment}
                            />)
                }
                {/* <PostCardComment />
                <PostCardComment />
                <PostCardComment />
                <PostCardComment />
                <PostCardComment />
                <PostCardComment />
                <PostCardComment />
                <PostCardComment />
                <PostCardComment />
                <PostCardComment />
                <PostCardComment />
                <PostCardComment /> */}
            </div>
        </>

    )
}
