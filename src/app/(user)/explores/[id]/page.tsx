import PostItemById from '@/app/components/explorePage/post-item-by-id'
import { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'MindMasterMinds'
}

export default function PhotoPage({
  params: { id }
}: {
  params: { id: any }
}) {



  return (
    <section>
      <div>
        <PostItemById id={id} />
      </div>
    </section>
  )
}
