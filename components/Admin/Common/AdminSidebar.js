import React from 'react'
import { Bars3Icon, ChartPieIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { UserGroupIcon } from '@heroicons/react/24/solid'
import { CalendarDaysIcon } from '@heroicons/react/24/solid'
import { EnvelopeIcon } from '@heroicons/react/24/solid'
import { ArrowRightOnRectangleIcon } from '@heroicons/react/24/solid'
import { useRouter } from "next/router";
import Link from 'next/link'

function Sidebar({ onOpen }) {
    const [index, setIndex] = React.useState(1);
    const router = useRouter();
    const [open, setOpen] = React.useState(false);

    React.useEffect(() => {
        onOpen(open);
    }, [open]);

    const deleteCookie = (name) => {
        document.cookie = name + '=; Max-Age=0; path=/;';
    }

    return (
        <div className={`z-10 h-screen hover:shadow-2xl  fixed bg-slate-100 left-0 top-0 md:w-[6rem] ${open ? 'w-[6rem]' : 'w-[3rem]'}`}>
            <ul className='h-screen flex flex-col justify-center gap-8 md:justify-between items-center py-5 px-2'>

                <div className={`flex flex-col justify-center items-center gap-1 select-none cursor-pointer text-black mb-auto md:hidden`} onClick={() => { setOpen(!open); }}>
                    {open ?
                        <XMarkIcon className='w-[2rem] h-[2rem] md:h-[3rem] md:w-[3rem] cursor-pointer' /> :
                        <Bars3Icon className='w-[2rem] h-[2rem] md:h-[3rem] md:w-[3rem] cursor-pointer' />
                    }
                </div>
                <Link href="/adminpanel" className={`flex flex-col justify-center items-center gap-1 select-none cursor-pointer ${router.pathname === '/adminpanel' ? 'text-primarycolor' : 'text-gray-400'}`}>
                    <ChartPieIcon className='w-[2rem] h-[2rem] md:h-[3rem] md:w-[3rem] cursor-pointer' />
                    <span className={`text-xs font-light ${open ? 'inline' : 'hidden'} md:inline`}>DASHBOARD</span>
                </Link>
                <Link href="/adminpanel/users" className={`flex flex-col justify-center items-center gap-1 select-none cursor-pointer ${router.pathname === '/adminpanel/users' ? 'text-primarycolor' : 'text-gray-400'}`}>
                    <UserGroupIcon className='w-[2rem] h-[2rem] md:h-[3rem] md:w-[3rem] cursor-pointer' />
                    <span className={`text-xs font-light ${open ? 'inline' : 'hidden'} md:inline`}>USERS</span>
                </Link>
                <Link href="/adminpanel/events" className={`flex flex-col justify-center items-center gap-1 select-none cursor-pointer ${router.pathname.includes('/adminpanel/events') ? 'text-primarycolor' : 'text-gray-400'}`}>
                    <CalendarDaysIcon className='w-[2rem] h-[2rem] md:h-[3rem] md:w-[3rem] cursor-pointer' />
                    <span className={`text-xs font-light ${open ? 'inline' : 'hidden'} md:inline`}>EVENTS</span>
                </Link>
                <Link href="/adminpanel/messages" className={`mb-auto flex flex-col justify-center items-center gap-1 select-none cursor-pointer ${router.pathname === '/adminpanel/messages' ? 'text-primarycolor' : 'text-gray-400'}`}>
                    <EnvelopeIcon className='w-[2rem] h-[2rem] md:h-[3rem] md:w-[3rem] cursor-pointer' />
                    <span className={`text-xs font-light ${open ? 'inline' : 'hidden'} md:inline`}>MESSAGES</span>
                </Link>
                <li onClick={() => {
                    deleteCookie('atkn');
                    router.push('/');
                }}>
                    <ArrowRightOnRectangleIcon className='h-[2rem] w-[2rem] text-black cursor-pointer' />
                </li>
            </ul>
        </div>
    )
}

export default Sidebar