'use client'
import Modal from '@/app/components/explorePage/modal'
import PostCard from '@/app/components/explorePage/post-card'
import useAxiosAuth from '@/app/lib/hooks/useAxiosAuth';
import PostItemSkeleton from '@/app/skeletons/postItemSkeleton';
import { PostExplore } from '@/app/types/Post-Explore';
import { useEffect, useState } from 'react';



export default function ExploreModal({
  params: { id }
}: {
  params: { id: string }
}) {
  const axiosAuth = useAxiosAuth()
  const [post, setPost] = useState<PostExplore | any>()
  const [error, setError] = useState()
  const [isLoading, setIsLoading] = useState(true)

  const getAPost = async () => {
    setIsLoading(true)
    const response = await axiosAuth.get(`/Post/${id}`)
    setPost(response.data)
    setIsLoading(false)
  }

  useEffect(() => {
    const controller = new AbortController()
    try {
      getAPost()


    } catch (e: any) {
      setError(e)
    }

    return () => {
      controller.abort()
    }
  }, [id])
  return (
    <Modal>
      {error}
      {
        isLoading ?
          <PostItemSkeleton /> :
          <PostCard post={post} />
      }
    </Modal>
  )
}
