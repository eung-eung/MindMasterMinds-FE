import Image from 'next/image'
import classes from './post-card.module.css'
import PostCardHeader from './post-card-header'
import PostCardBody from './post-card-body'
import PostCardInputComment from './post-card-input-comment'

export default function PostCard() {
  return (
    <div>

      <PostCardHeader />
      <PostCardBody />
      <PostCardInputComment />
    </div>

  )
}