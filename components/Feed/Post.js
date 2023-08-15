import React, { useState } from 'react'
import { ChatBubbleBottomCenterIcon } from '@heroicons/react/24/outline'
import { HandThumbUpIcon } from '@heroicons/react/24/solid'


const Post = () => {

    return (
        <div className='w-full h-fit bg-white rounded-xl px-4 my-4 flex flex-col items-start justify-center'>
            <div className='flex items-center my-2'>
                <img src="/about/t1.jpg" alt="user" className='w-10 h-10 object-cover mr-4 rounded-full' />
                <div className=''>
                    <p className=' font-semibold text-base'>Ankit Rawat</p>
                    <p className=' text-xs font-normal'>M.Tech Cse 2024</p>
                </div>
            </div>

            <div className='w-full h-[20rem] text-left'>
                <img src="/gallery/jnu/1649242971867.jpg" className='max-h-full w-full object-cover' alt="" />
            </div>

            <div className='w-full text-left'>
            <p className='font-medium text-lg'>Some exciting news!</p>
                {/* <p className=' text-sm font-normal'>Jawaharlal Nehru University </p>
                <p className=' text-sm font-normal' >School of Computer & Systems Sciences (SC&SS) </p>
                <p className=' text-sm font-normal'>M. Tech, School of Computer & Systems Sciences (SC&SSS)</p>
                <p className=' text-sm font-normal'> 2020 - 2024</p> */}
            </div>

            <hr className='w-full h-[2px] bg-black/30 my-2' />

            <div className='w-fit flex my-2 ml-auto'>
                <div className='w-fit flex items-center mx-2 text-gray-600 hover:text-blue-500 cursor-pointer'>
                    <HandThumbUpIcon className='w-7 h-7' />
                    {/* <span>Like</span> */}
                </div>
                <div className='w-fit flex items-center mx-2 cursor-pointer text-gray-600 hover:text-blue-400'>
                    <ChatBubbleBottomCenterIcon className='w-7 h-7' />
                    {/* <span>Like</span> */}
                </div>
            </div>
        </div>
    )
}

export default Post
