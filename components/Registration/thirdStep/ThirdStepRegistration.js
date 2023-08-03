import React from 'react';
import { UserCircleIcon } from "@heroicons/react/24/solid";

const ThirdStepRegistration = ({register, fileAttached, img, setSecondStep, }) => {
    return (
        <form onSubmit={register} className='flex flex-col min-h-[20rem] items-center justify-center'>
            <div className='flex flex-col items-center relative'>
                <div className=" w-[200px] h-[200px]">
                    {img === null ? <UserCircleIcon className='w-full h-full rounded-full'/> : <img src={img} className='w-full h-full rounded-full' alt="profile pic" />}
                </div>
                <div className=" shrink-0 mt-6 mb-6">
                    <input
                        type="file"
                        id="fileUploader"
                        className=' opacity-0 absolute top-10 right-0 w-10'
                        accept="image/jpeg, image/png, image/jpg"
                        onChange={fileAttached}
                    />
                    <label htmlFor="fileUploader" className=' p-2 bg-blue-500 text-slate-200 rounded-lg  cursor-pointer'>
                        {img ? 'Change Photo' : 'Upload Photo'}
                    </label>
                </div>
            </div>
            <div className=' flex gap-3'>
                <button className=' text-white bg-[#1B2D56] text-lg font-medium p-2 rounded-sm m-5 px-10' onClick={() => {
                    setSecondStep(false);
                }}>Back</button>
                <button type='submit' className=' text-white bg-[#1B2D56] text-lg font-medium p-2 rounded-sm m-5 px-10'>Register</button>
            </div>
        </form>
    )
}

export default ThirdStepRegistration
