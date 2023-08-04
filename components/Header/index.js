import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { HomeIcon } from "@heroicons/react/24/solid"
import { NewspaperIcon } from "@heroicons/react/24/solid"
import { PhotoIcon } from "@heroicons/react/24/solid"
import { BriefcaseIcon } from "@heroicons/react/24/solid"
import { ChatBubbleLeftIcon } from "@heroicons/react/24/solid"
import { UserCircleIcon } from "@heroicons/react/24/solid"
import { PowerIcon } from "@heroicons/react/24/solid"
import { UserIcon } from "@heroicons/react/24/solid"
import cookieCutter from "cookie-cutter"
import { deleteCookie } from '@/src/utils/login'

function Header() {
    const router = useRouter();
    const [userDropdown, setUserDropdown] = React.useState(false);
    const [userToken, setUserToken] = React.useState(false);
    const [userPic, setUserPic] = React.useState(null);

    React.useEffect(() => {
        if (cookieCutter.get('userToken')) {
            setUserToken(true);
        }
        else {
            setUserToken(false);
        }
    }, [])

    React.useEffect(() => {
        if (cookieCutter.get('profileSet') && !localStorage.getItem('profile')) {
            fetch('/api/getprofile', {
                method: "GET",
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    "authorization": `Bearer ${cookieCutter.get('userToken')} ${cookieCutter.get('refreshToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    //console.log(data.data);
                    localStorage.setItem('profile', JSON.stringify(data.data))
                })
                .catch(err => console.log("some error in header, ", err))
        }
        if (localStorage.getItem('profile')) {
            const profilepic = JSON.parse(localStorage.getItem('profile')).photo;
            setUserPic(profilepic);
        }
    }, [])

    return (
        <>
            <div className='flex justify-between items-center bg-[#f2f4f6] sticky top-0 py-2 md:px-5 xs:px-3 z-10'>
                <div className='flex justify-center items-center gap-2'>
                    <Image
                        src="/header/JNUlogo.png"
                        width={30}
                        height={30}
                        alt="JNU logo"
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
                <div>
                    {
                        userToken ?
                            (userPic !== null) ? <img src={`${userPic}`} alt="userpic" className='w-[3rem] h-[3rem] rounded-full cursor-pointer' onClick={() => setUserDropdown(userDropdown => !userDropdown)}/> : <UserCircleIcon className='h-[3rem] w-[3rem] text-primarycolor cursor-pointer' onClick={() => setUserDropdown(userDropdown => !userDropdown)} /> :
                            <Link href="/login">
                                <div className='bg-primarycolor text-white rounded-sm py-1 px-3'>Login</div>
                            </Link>
                    }
                    {
                        userDropdown ?
                            <ul className='absolute sm:top-[3.8rem] md:right-[2rem] xs:top-[3.5rem] xs:right-[0.5rem] w-[6rem] h-fit flex flex-col justify-center items-center gap-1 p-2 bg-slate-100  text-black select-none shadow-lg'>
                                <li>
                                    <span className='text-gray-500 flex items-center gap-1 cursor-pointer font-light hover:text-primarycolor' onClick={() => {
                                        router.push('/profile')
                                    }}><UserIcon className='h-[1rem] w-[1rem]' />Profile</span>
                                </li>
                                <li>
                                    <span className='text-gray-500 flex items-center gap-1 cursor-pointer font-light hover:text-primarycolor' onClick={() => {
                                        deleteCookie('userToken');
                                        deleteCookie('uid');
                                        deleteCookie('refreshToken');
                                        deleteCookie('profileSet');
                                        localStorage.clear();
                                        router.push('/')
                                        setTimeout(() => {
                                            window.location.reload();
                                        }, 500);
                                    }}><PowerIcon className='h-[1rem] w-[1rem]' />Logout</span>
                                </li>
                            </ul> :
                            ""
                    }
                </div>
            </div>
        </>
    )
}

export default Header