import Link from 'next/link'



export default function PhotoPage({
  params: { id }
}: {
  params: { id: string }
}) {


  return (
    <section className='py-24'>
      <div className='container'>
        <div>
          <Link
            href='/explores'
            className='font-semibold italic text-sky-600 underline'
          >
            Back to explores
          </Link>
        </div>

        <div className='mt-10 w-1/3'>

        </div>
      </div>
    </section>
  )
}
