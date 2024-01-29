import PostItemById from '@/app/components/explorePage/post-item-by-id'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'MindMasterMinds'
}

export default function PhotoPage({
  params: { id }
}: {
  params: { id: string }
}) {


  return (
    <section>
      <div>
        <PostItemById />
      </div>
    </section>
  )
}
