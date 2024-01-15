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
                                <img className={`${classes.image} w-full object-cover object-center`} src="https://s3-alpha-sig.figma.com/img/d5e2/2b23/788852de1d5401686a774f99a144f787?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=m2IdVO~7Vvc8U1kCCRW-mDV4ZJDpTFgxaZQ7R1G0u0IzDyoodg-MciAVtMOkzbvFVOrw0lpArloe24fKV0vk8T95yX9bhXe-QwFCWgy2Pweka-XaqX~WkZfoABR7hnHhVFFAGktGGkz-9XdV2KtXIop-YHnOvGuo14AIZN3bWHR0U5DRx1vi6SKaXTs4Xklt~AxCuWvxJa3w-s14VBtI4cLjHDzO7Jl92qcelJNuHmNxTWT4S0~TI3K7z0TjYWrgNuCDfp01lRUpBLlk9XGXQiCZjv4b0EYwaKgWYQhRaJHrGXMRyvzgODSrzeM804lO7AqBHJgZv4dlxiMXVP-o-A__" alt="find tutor" />
                                <div className="p-12">
                                    <h2 className={`${classes.title} flex items-center justify-center mb-6`}>FIND A TUTOR</h2>
                                    <p className={`${classes.p} leading-relaxed mb-6`}>If you have expertise in a particular field, consider applying to become a tutor with MindMasterminds. This will grant you access to a wide range of students and the opportunity to share your knowledge.</p>
                                    <div className="flex items-center flex-wrap mt-10">
                                        <button class={`${classes.button} flex mx-auto items-center text-white py-2 px-8`}>
                                            <p className={`${classes.typography} w-full text-center`}>OUR TUTORS</p>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-14 md:w-1/2">
                            <div className={`${classes.border} h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden`}>
                                <img className={`${classes.image} w-full object-cover object-center`} src="https://s3-alpha-sig.figma.com/img/8801/2f34/f185079d135066f2e7e5e1b40bd19327?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ul4Uj0qVLVQkkN4WS-pUzeiKTGAX9H2izRLFrB9RcIG2PazLiJ2uDDwUiro47DfU1WYYqrbvq-I5zRrJFvZwheE4JEEZSh2CW~XyBGYI3h~OYqOpr0F6AXAmxwfG1p7B3Nqq-nkcC8ck0rjVBYqfj-thQlsD3K9qWqlhbR7Z7DH-2gMnHoJUOuei5LXAFM1xbUFFmcgi4OhoSDzHmWmByhkpPoHIW1v~KddtmMc6B8-0OOPXd0iI8xAjpoFV-SpYmLHl2f3zY36H0AvdsuDYaiEk9PbwSwMDHD7hsLco85ygY0xr~m0Dc7Y8FuC2~rxCV12QLkOE0c41JBy0F0ioNQ__" alt="find tutor" />
                                <div className="p-12">
                                    <h2 className={`${classes.title} flex items-center justify-center mb-6`}>BECOME A TUTOR</h2>
                                    <p className={`${classes.p} leading-relaxed mb-6`}>If you have expertise in a particular field, consider applying to become a tutor with MindMasterminds. This will grant you access to a wide range of students and the opportunity to share your knowledge.</p>
                                    <div className="flex items-center flex-wrap mt-10">
                                        <button class={`${classes.button} flex mx-auto items-center text-white py-2 px-8`}>
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
