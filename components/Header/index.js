import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { HomeIcon as HomeIconSolid } from "@heroicons/react/24/solid"
import { HomeIcon } from "@heroicons/react/24/outline"
import { NewspaperIcon as NewspaperIconSolid } from "@heroicons/react/24/solid"
import { NewspaperIcon } from "@heroicons/react/24/outline"
import { PhotoIcon } from "@heroicons/react/24/outline"
import { PhotoIcon as PhotoIconSolid } from "@heroicons/react/24/solid"
import { BriefcaseIcon as BriefcaseIconSolid } from "@heroicons/react/24/solid"
import { BriefcaseIcon } from "@heroicons/react/24/outline"
import { InformationCircleIcon } from "@heroicons/react/24/outline"
import { InformationCircleIcon as InformationCircleIconSolid } from "@heroicons/react/24/solid"

function Header() {
    const router = useRouter();
    return (
        <>
            <div className='lg:flex xs:hidden justify-around items-center bg-white/50 sticky top-0'>
                <ul className='w-6/12  flex flex-row justify-around items-center'>
                    <li>
                        {
                            router.pathname === "/" ?
                                <Link href="/"> 
                                    <div className='flex flex-col justify-center items-center'>
                                        <HomeIconSolid className='text-primarycolor h-[2rem] w-[2rem]'/>
                                        <span className='text-xs font-semibold text-primarycolor'>Home</span>
                                    </div>
                                </Link>
                                :
                                <Link href="/">
                                    <div className='flex flex-col justify-center items-center'>
                                        <HomeIcon className='text-gray-500 h-[2rem] w-[2rem]'/>
                                        <span className='text-xs font-light'>Home</span>
                                    </div>
                                </Link>
                        }
                    </li>
                    <li>
                        {
                            router.pathname === "/feed" ?
                                <Link href="/feed">
                                    <div className='flex flex-col justify-center items-center'>
                                        <NewspaperIconSolid className='text-primarycolor h-[2rem] w-[2rem]'/>
                                        <span className='text-xs font-semibold text-primarycolor'>Feed</span>
                                    </div>
                                </Link>
                                :
                                <Link href="/feed">
                                    <div className='flex flex-col justify-center items-center'>
                                        <NewspaperIcon className='text-gray-500 h-[2rem] w-[2rem]'/>
                                        <span className='text-xs font-light'>Feed</span>
                                    </div>
                                </Link>
                        }
                    </li>
                    <li>
                        {
                            router.pathname === "/gallery" ?
                                <Link href="/gallery">
                                    <div className='flex flex-col justify-center items-center'>
                                        <PhotoIconSolid className='text-primarycolor h-[2rem] w-[2rem]'/>
                                        <span className='text-xs font-semibold text-primarycolor'>Gallery</span>
                                    </div>
                                </Link>
                                :
                                <Link href="/gallery">
                                    <div className='flex flex-col justify-center items-center'>
                                        <PhotoIcon className='text-gray-500 h-[2rem] w-[2rem]'/>
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
                                        <BriefcaseIconSolid className='text-primarycolor h-[2rem] w-[2rem]'/>
                                        <span className='text-xs font-semibold text-primarycolor'>Jobs</span>
                                    </div>
                                </Link>
                                :
                                <Link href="/jobs">
                                    <div className='flex flex-col justify-center items-center'>
                                        <BriefcaseIcon className='text-gray-500 h-[2rem] w-[2rem]'/>
                                        <span className='text-xs font-light'>Jobs</span>
                                    </div>
                                </Link>
                        }
                    </li>
                    <li>
                        {
                            router.pathname === "/about" ?
                                <Link href="/about">
                                    <div className='flex flex-col justify-center items-center'>
                                        <InformationCircleIconSolid className='text-primarycolor h-[2rem] w-[2rem]'/>
                                        <span className='text-xs font-semibold text-primarycolor'>About Us</span>
                                    </div>
                                </Link>
                                :
                                <Link href="/about">
                                    <div className='flex flex-col justify-center items-center'>
                                        <InformationCircleIcon className='text-gray-500 h-[2rem] w-[2rem]'/>
                                        <span className='text-xs font-light'>About Us</span>
                                    </div>
                                </Link>
                        }
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Header