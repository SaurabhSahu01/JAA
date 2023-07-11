import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { HomeIcon } from "@heroicons/react/24/solid"
import { NewspaperIcon } from "@heroicons/react/24/solid"
import { PhotoIcon } from "@heroicons/react/24/solid"
import { BriefcaseIcon } from "@heroicons/react/24/solid"
import { ChatBubbleLeftIcon } from "@heroicons/react/24/solid"

function Header() {
    const router = useRouter();

    return (
        <>
            <div className='flex justify-between items-center bg-[#f2f4f6] sticky top-0 py-2 md:px-5 xs:px-3'>
                <div className='flex justify-center items-center gap-2'>
                    <Image
                     src="/header/JNUlogo.png"
                     width={30}
                     height={30}
                     alt="Picture of the author"
                    />
                    <p className='md:text-xl xs:text-lg font-semibold tracking-wider text-primarycolor'>JNU Alumni Association</p>
                </div>
                <ul className='md:w-7/12 xs:w-full md:relative md:flex md:flex-row justify-around items-center xs:fixed xs:flex xs:bottom-0 xs:left-0 xs:py-1 md:py-0 bg-[#f2f4f6]'>
                    <li>
                        {
                            router.pathname === "/" ?
                                <Link href="/">
                                    <div className='flex flex-col justify-center items-center'>
                                        <HomeIcon className='text-primarycolor md:h-[2rem] md:w-[2rem] xs:h-[1.5rem] xs:w-[1.5rem]' />
                                        <span className='text-xs font-semibold text-primarycolor'>Home</span>
                                    </div>
                                </Link>
                                :
                                <Link href="/">
                                    <div className='flex flex-col justify-center items-center'>
                                        <HomeIcon className='text-gray-400 md:h-[2rem] md:w-[2rem] xs:h-[1.5rem] xs:w-[1.5rem]' />
                                        <span className='text-xs font-light'>Home</span>
                                    </div>
                                </Link>
                        }
                    </li>
                    <li>
                        {
                            router.pathname === "/feeds" ?
                                <Link href="/feeds">
                                    <div className='flex flex-col justify-center items-center'>
                                        <NewspaperIcon className='text-primarycolor md:h-[2rem] md:w-[2rem] xs:h-[1.5rem] xs:w-[1.5rem]' />
                                        <span className='text-xs font-semibold text-primarycolor'>Feeds</span>
                                    </div>
                                </Link>
                                :
                                <Link href="/feeds">
                                    <div className='flex flex-col justify-center items-center'>
                                        <NewspaperIcon className='text-gray-400 md:h-[2rem] md:w-[2rem] xs:h-[1.5rem] xs:w-[1.5rem]' />
                                        <span className='text-xs font-light'>Feeds</span>
                                    </div>
                                </Link>
                        }
                    </li>
                    <li>
                        {
                            router.pathname === "/gallery" ?
                                <Link href="/gallery">
                                    <div className='flex flex-col justify-center items-center'>
                                        <PhotoIcon className='text-primarycolor md:h-[2rem] md:w-[2rem] xs:h-[1.5rem] xs:w-[1.5rem]' />
                                        <span className='text-xs font-semibold text-primarycolor'>Gallery</span>
                                    </div>
                                </Link>
                                :
                                <Link href="/gallery">
                                    <div className='flex flex-col justify-center items-center'>
                                        <PhotoIcon className='text-gray-400 md:h-[2rem] md:w-[2rem] xs:h-[1.5rem] xs:w-[1.5rem]' />
                                        <span className='text-xs font-light'>Gallery</span>
                                    </div>
                                </Link>
                        }
                    </li>
                    <li>
                        {
                            router.pathname === "/jobs" ?
                                <Link href="/jobs">
                                    <div className='flex flex-col justify-center items-center'>
                                        <BriefcaseIcon className='text-primarycolor md:h-[2rem] md:w-[2rem] xs:h-[1.5rem] xs:w-[1.5rem]' />
                                        <span className='text-xs font-semibold text-primarycolor'>Jobs</span>
                                    </div>
                                </Link>
                                :
                                <Link href="/jobs">
                                    <div className='flex flex-col justify-center items-center'>
                                        <BriefcaseIcon className='text-gray-400 md:h-[2rem] md:w-[2rem] xs:h-[1.5rem] xs:w-[1.5rem]' />
                                        <span className='text-xs font-light'>Jobs</span>
                                    </div>
                                </Link>
                        }
                    </li>
                    <li>
                        {
                            router.pathname === "/messages" ?
                                <Link href="/messages">
                                    <div className='flex flex-col justify-center items-center'>
                                        <ChatBubbleLeftIcon className='text-primarycolor md:h-[2rem] md:w-[2rem] xs:h-[1.5rem] xs:w-[1.5rem]' />
                                        <span className='text-xs font-semibold text-primarycolor'>Messages</span>
                                    </div>
                                </Link>
                                :
                                <Link href="/messages">
                                    <div className='flex flex-col justify-center items-center'>
                                        <ChatBubbleLeftIcon className='text-gray-400 md:h-[2rem] md:w-[2rem] xs:h-[1.5rem] xs:w-[1.5rem]' />
                                        <span className='text-xs font-light'>Messages</span>
                                    </div>
                                </Link>
                        }
                    </li>
                </ul>
                <Link href="/login">
                    <div className='bg-primarycolor text-white rounded-md py-2 px-3'>Login</div>
                </Link>
            </div>
        </>
    )
}

export default Header