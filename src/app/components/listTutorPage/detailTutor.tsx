import React from 'react'
import classes from './detailTutor.module.css'

export default function DetailTutor() {
    return (
        <div>

            <div className="container mx-auto flex px-2 py-12 items-center justify-center flex-col">
                <img className="lg:w-3/6 md:w-3/6 mb-10 object-fill object-center rounded" style={{ width: "350px", height: "450px" }} alt="hero" src="https://s3-alpha-sig.figma.com/img/6181/1ae8/89b0660d6dd91bdedba586139a98a0fe?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Cpole3t8w0X8hD0gFj1jlfCH53VsmP8Jr5YSD0GT1N4Zj3QT7YPQThO3UtnCZtIJz00mgRApSBkQ83N43JiIRPU9B2tqs6b~pKRFjskljdfKcD-W1t8KOMWqstIRogHfC-3aEhEgT~vAdqU0AnruqX26Xdf8EMAOC22oJ3-qNqmwjlDis4EarC20MjQVzXszmnjAHFtI0n6WxW-IMCFFFqRo1vhDu~iW0OoQOnH5b7wT-IhT71oUgMjFP2b~tpf-QOA3F-R~~WBkEogi8~0FB5Imf5qGAjDsEUeqY9jI9lmCK6MIehsRjDfxEvdGSFM5U1bMdl5YroRoMDqMl7ps2A__" />
                <div className="text-left lg:w-3/4 w-full">
                    <div className="text-align px-2 sm:px-0 flex items-center justify-center">
                        <h3 className={classes.typographyIntro}>Tutor's Information</h3>
                    </div>

                    <div className="mt-6 border-t border-gray-100">
                        <dl className="divide-y divide-gray-100">
                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className={classes.typographyTitle}>Full name</dt>
                                <dd className={`${classes.typography} mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0`}>Margot Foster</dd>
                            </div>
                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className={classes.typographyTitle}>Major</dt>
                                <dd className={`${classes.typography} mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0`}>Digital Marketing</dd>
                            </div>
                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className={classes.typographyTitle}>Email </dt>
                                <dd className={`${classes.typography} mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0`}>margotfoster@example.com</dd>
                            </div>
                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className={classes.typographyTitle}>Rating</dt>
                                <dd className={`${classes.typography} mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0`}>5/5</dd>
                            </div>
                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className={classes.typographyTitle}>About</dt>
                                <dd className={`${classes.typography} mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0`}>
                                    Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur
                                    qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud
                                    pariatur mollit ad adipisicing reprehenderit deserunt qui eu.
                                </dd>
                            </div>

                        </dl>
                    </div>
                </div>

            </div>

        </div>
    )
}
