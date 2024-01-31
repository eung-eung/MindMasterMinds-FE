import React from 'react'
import classes from './tutor.module.css'

export default function Tutor() {
    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-8">
                        <div className="p-14 md:w-1/2">
                            <div className={`${classes.border} h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden`}>
                                <img className={`${classes.image} w-full object-cover object-center`} src="https://s3-alpha-sig.figma.com/img/d5e2/2b23/788852de1d5401686a774f99a144f787?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hftbRa2noI-eOxoysmWbKkNATakH5z1ZKajIPfGyzqsKg~yx45EHQBWacD-fCmE476CbhOgmr~XZMb-2yXpCi5y919ijM1RWU-dVtGoGU-eSZRMiGf9Xgi7FYrUVkwnX0c8QZSJ1CU5Kjv0kpZXHRK8X0KLA1H3fP6swO9AEQfVM2PdasTOpT1Vom30zmmMBELyD~hD9bpNhuEGfqO6-c06L4Zk3ykjQgChK3kaUWJZsoLOE~mVKMJXKHmdtIvlYSdHiJuEW5TOzJzkceuLHHxi~0qJ9EByn6nzYkiUr0sU2u9GNuxh5u-R2n9Zf8o~KqSMMx-XEYI0~s51WKhAmrg__" alt="find tutor" />
                                <div className="p-12">
                                    <h2 className={`${classes.title} flex items-center justify-center mb-6`}>FIND A TUTOR</h2>
                                    <p className={`${classes.p} leading-relaxed mb-6`}>If you have expertise in a particular field, consider applying to become a tutor with MindMasterminds. This will grant you access to a wide range of students and the opportunity to share your knowledge.</p>
                                    <div className="flex items-center flex-wrap mt-10">
                                        <button className={`${classes.button} flex mx-auto items-center text-white py-2 px-8`}>
                                            <p className={`${classes.typography} w-full text-center`}>OUR TUTORS</p>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-14 md:w-1/2">
                            <div className={`${classes.border} h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden`}>
                                <img className={`${classes.image} w-full object-cover object-center`} src="https://s3-alpha-sig.figma.com/img/8801/2f34/f185079d135066f2e7e5e1b40bd19327?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=B1Zw3D~wZQF68tY-54Ds5fshJN4w9PIBMcFu0XyY8Da16p~qSjMnWUjx5kIzbeCh58IJCq8B9zyCJdaZkgy66H~neyfn4xO1GfQujWbFMd9P45hSRSZgq1we44WGwFMD2Wg4K0lXVsRhC8K4s6VliKmSZelWlHYW78IEOD7f5G1z5tI9pUZDKLOByj~ORVG4YlpKvyqaLM8RFSMa9UJA6xfDEDL9w36AuQZLafa8NbWu88aF4L1rhryP7fCrS5~PwtnwwK3Sk0c-xqof9Yg6oxX3kWkDAxxtzKRn3TMtqSU3I-KLRsEnw5ohKFsEhtP4ynR1xSEWPFhjWKTlJJopuQ__" alt="find tutor" />
                                <div className="p-12">
                                    <h2 className={`${classes.title} flex items-center justify-center mb-6`}>BECOME A TUTOR</h2>
                                    <p className={`${classes.p} leading-relaxed mb-6`}>If you have expertise in a particular field, consider applying to become a tutor with MindMasterminds. This will grant you access to a wide range of students and the opportunity to share your knowledge.</p>
                                    <div className="flex items-center flex-wrap mt-10">
                                        <button className={`${classes.button} flex mx-auto items-center text-white py-2 px-8`}>
                                            <p className={`${classes.typography} w-full text-center`}>REGISTER</p>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
