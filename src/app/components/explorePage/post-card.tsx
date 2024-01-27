import Image from 'next/image'


export default function PostCard() {
  return (
    <>
      <Image
        alt=''
        src='https://i.pinimg.com/564x/01/2b/0b/012b0bc2e871fc073c8dbf8008bdf20e.jpg'
        height={600}
        width={600}
        className='col-span-1 aspect-square w-full object-cover'
      />

      <div className=' bg-white p-2 px-4'>
        <h3 className='font-serif text-xl font-medium'>Test</h3>
        <p className='text-sm text-gray-500'>Taken by </p>
      </div>
    </>
  )
}