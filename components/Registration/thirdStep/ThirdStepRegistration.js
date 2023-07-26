import React from 'react'

const ThirdStepRegistration = ({register, fileAttached, img, setSecondStep, }) => {
    return (
        <form onSubmit={register} className='flex flex-col min-h-[20rem] items-center justify-center'>
            <div className='flex flex-col items-center relative'>
                <div className=" w-[200px] h-[200px]">
                    {img === null ? <img src="/login/lable.png" className='w-full h-full' alt="" /> : <img src={img} className='w-full h-full rounded-full' alt="" />}
                </div>
                <div className=" shrink-0 mt-6">
                    <input
                        type="file"
                        id="fileUploader"
                        className=' opacity-0 absolute top-10 right-0 w-10'
                        accept="image/jpeg, image/png, image/jpg"
                        onChange={fileAttached}
                    />
                    <label htmlFor="fileUploader" className=' p-2 bg-blue-400 rounded-lg  cursor-pointer'>
                        Upload Photo
                    </label>
                </div>
            </div>
            <div className=' flex gap-2 md:gap-3'>
                <button className=' text-white bg-[#1B2D56] text-lg font-medium rounded-lg m-4 md:m-5 p-3' onClick={() => {
                    setSecondStep(false);
                }}>Back</button>
                <button type='submit' className=' text-white bg-[#1B2D56] text-lg font-medium rounded-lg m-4 md:m-5 p-3'>Register</button>
            </div>
        </form>
    )
}

export default ThirdStepRegistration
