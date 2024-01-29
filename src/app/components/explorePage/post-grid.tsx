import React from 'react'
import PostItem from './post-item'
import Link from 'next/link'

export default function PostGrid() {
    return (
        <div className='container mx-auto  pb-20 mb-4 xl:w-2/5 sm:w-full'>
            {/* <Link href='/explores/1' > */}
            <PostItem
                name='Linda'
                imageUrl='https://i.pinimg.com/564x/01/2b/0b/012b0bc2e871fc073c8dbf8008bdf20e.jpg'
                avatar='/images/linda.jpg'
                content='Pachapupa, woa, Kim chi đỏ auuuu, thơm phức í haaaaaa'

            />
            <PostItem
                name='39saku_chan'
                imageUrl='https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/423225128_915706496590604_927100527315515549_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeF3NptDuYJlOox1-oe9aEPte1iFSYXYr1J7WIVJhdivUhZ5043FXnEzb1E_4HmQZa_cg6IjpXFvU5ATMLpfwimY&_nc_ohc=zPPPQCWRaj8AX_Csiks&_nc_ht=scontent.fsgn2-6.fna&oh=00_AfCr6Cg_KRlmZ9tjWG-eaTmhBi2vf_-isbTUFxo3528f_A&oe=65BBA0D9'
                avatar='https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/423225128_915706496590604_927100527315515549_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeF3NptDuYJlOox1-oe9aEPte1iFSYXYr1J7WIVJhdivUhZ5043FXnEzb1E_4HmQZa_cg6IjpXFvU5ATMLpfwimY&_nc_ohc=zPPPQCWRaj8AX_Csiks&_nc_ht=scontent.fsgn2-6.fna&oh=00_AfCr6Cg_KRlmZ9tjWG-eaTmhBi2vf_-isbTUFxo3528f_A&oe=65BBA0D9'
                content='GwenChana, mianhae ~'

            />
            {/* </Link> */}
            {/* <Link href='/explores/1' > */}
            {/* <PostItem /> */}
            {/* </Link> */}

        </div>
    )
}
