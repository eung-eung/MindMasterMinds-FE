import Modal from '@/app/components/explorePage/modal'

import photos, { Photo } from '@/app/lib/photos'

export default function PhotoModal({
  params: { id }
}: {
  params: { id: string }
}) {
  const photo: Photo = photos.find(p => p.id === id)!

  return (
    <Modal>
      {/* <PhotoCard photo={photo} /> */}
      asdasd
    </Modal>
  )
}
