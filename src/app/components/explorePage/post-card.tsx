import Image from 'next/image'
import classes from './post-card.module.css'
import PostCardHeader from './post-card-header'
import PostCardBody from './post-card-body'
import PostCardInputComment from './post-card-input-comment'
import { PostExplore } from '@/app/types/Post-Explore'
import { useState } from 'react'

export default function PostCard({ post }: { post: PostExplore }) {
  const [isRefresh, setIsRefresh] = useState(true)
  return (
    <div className={classes.container}>
      <PostCardHeader post={post} />
      <PostCardBody isRefresh={isRefresh} post={post} />
      <PostCardInputComment setIsRefresh={setIsRefresh} postId={post.id} />
    </div>

  )
}