
import Modal from '@/app/components/explorePage/modal'
import PostCard from '@/app/components/explorePage/post-card'



export default function ExploreModal({
  params: { id }
}: {
  params: { id: string }
}) {


  return (
    <Modal>
      {/* <PhotoCard photo={photo} /> */}
      <PostCard />
    </Modal>
  )
}
