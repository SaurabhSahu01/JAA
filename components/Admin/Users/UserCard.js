import React from 'react'
import { UserCircleIcon } from "@heroicons/react/24/solid"
import { CheckBadgeIcon } from '@heroicons/react/24/solid';
import { BookmarkSlashIcon } from '@heroicons/react/24/solid';
import { useRouter } from 'next/router';

function UserCard({ id, verified, firstName, lastName, number, gender, school, hostel, joiningYear, graduationYear, program, dob, photo }) {
    const router = useRouter();
    const fullname = firstName + " " + lastName;
    const academicInfo = program + ", " + school + ", " + `(${joiningYear} -  ${graduationYear})`;
    return (
        <div className='p-2 bg-white backdrop-blur-sm shadow-lg w-full flex md:flex-row md:justify-between md:items-center xs:flex-col xs:items-between xs:justify-center gap-2 mt-3'>
            <div className='flex justify-start items-center gap-2'>
                {!photo ? <UserCircleIcon className='xs:h-[2rem] xs:w-[2rem] md:h-[4rem] md:w-[4rem] rounded-full'/> : <img src={photo} className='xs:h-[2rem] xs:w-[2rem] md:h-[4rem] md:w-[4rem] rounded-full'></img>}
                <div className='flex flex-col items-start justify-center'>
                    <p className='xs:text-sm md:text-lg font-medium'>{`${fullname} (${gender})`}</p>
                    <p className='text-xs font-medium'>{`id: ${id}`}</p>
                    <p className='xs:text-[10px] md:text-[14px] font-light'>{academicInfo}</p>
                </div>
            </div>
            <div className='flex-col justify-between items-start gap-2'>
                <p className='xs:text-sm md:text-md font-semibold'>Personal Info</p>
                <div className='flex justify-between items-center md:gap-[4rem] xs:gap-[1rem] xs:text-sm md:text-md'>
                    <p>Number - {number}</p>
                    <p>Hostel - {hostel}</p>
                    <p>DOB - {dob}</p>
                </div>
            </div>
            {verified === 'pending' ? <button className='bg-primarycolor md:px-3 md:py-1 rounded-md text-white' onClick={() => router.push(`/adminpanel/verify/${id}`)}>
                Verify
            </button> : (verified === true ? <span className='flex items-center gap-2 text-green-500'><CheckBadgeIcon className='w-[2rem] h-[2rem] text-green-500'/> Verified</span> : <span className='flex items-center gap-2 text-red-400'><BookmarkSlashIcon className='w-[1.5rem] h-[1.5rem] text-red-500'/> Not Verified</span>)}
        </div>
    )
}

export default UserCard