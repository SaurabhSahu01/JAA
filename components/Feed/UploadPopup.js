import React from 'react'
import { PhotoIcon } from "@heroicons/react/24/solid"
import { XMarkIcon } from "@heroicons/react/24/solid"

function UploadPopup() {
    const [img, setimg] = React.useState(null);
    return (
        <div className='w-full h-[20rem] flex-col justify-center items-center gap-3 bg-white p-[0.5px] relative'>
            <div className='w-fit h-fit bg-red-500 rounded-full p-1 absolute right-0 top-[-0.8rem]'>
                <XMarkIcon className='w-[1rem] h-[1rem] text-white'/>
            </div>
            <textarea className='w-full outline-none p-1 border-[1px] border-gray-300 text-gray-500 tracking-wide' rows={10} placeholder='write something here'></textarea>
            <div className='w-full flex justify-around items-center'>
                <PhotoIcon className='w-[2rem] h-[2rem] text-purple-500' />
                <div className='bg-primarycolor text-white py-1 px-3 text-sm rounded-md'>Post</div>
            </div>
        </div>
    )
}

export default UploadPopup