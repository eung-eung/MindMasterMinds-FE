import Image from 'next/image'
import classes from './post-card.module.css'
import PostCardHeader from './post-card-header'
import PostCardBody from './post-card-body'
import PostCardInputComment from './post-card-input-comment'
import { PostExplore } from '@/app/types/Post-Explore'

export default function PostCard({ post }: { post: PostExplore }) {
  console.log('post: ', post.user);

  return (
    <div>

      <PostCardHeader post={post} />
      <PostCardBody post={post} />
      <PostCardInputComment />
    </div>

  )
}