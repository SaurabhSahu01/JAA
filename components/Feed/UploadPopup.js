import React from 'react'
import { PhotoIcon } from "@heroicons/react/24/solid"
import { XMarkIcon } from "@heroicons/react/24/solid"

function UploadPopup({ setWantShare }) {

    const [img, setimg] = React.useState(null);

    const [profileimg, setprofileimg] = React.useState(null);
    React.useEffect(() => {
        if (localStorage.getItem('profile')) {
            setprofileimg(JSON.parse(localStorage.getItem('profile'))['photo']);
        }
    }, []);

    return (
        <div className='fixed z-10 min-h-screen backdrop-blur-md w-full flex flex-col items-center pt-[2%]'>
            <div className='mx-4 min-w-[90%] sm:min-w-[80%] md:min-w-[35rem] md:max-w-[50%] h-fit flex-col justify-center items-center gap-3 bg-white p-[0.5px] relative rounded-md'>
                <div className='w-fit h-fit bg-red-500 rounded-full p-1 absolute right-[0.4rem] top-[0.4rem]'>
                    <XMarkIcon onClick={() => setWantShare(false)} className='w-[1rem] h-[1rem] text-white cursor-pointer' />
                </div>
                <p className=' font-medium text-xl text-blue-500 ml-2 text-center'>New Post</p>
                <hr className='w-full h-[2px] bg-black/30 mt-2' />
                <div className='flex flex-col md:flex-row' >
                    <div className='w-full md:w-[30rem] h-[30rem] md:h-[20rem]'>
                        {!img ? <img src="/gallery/jnu/1636141670862.jpg" className=' w-full sm:w-10/12 md:w-full h-full object-center mx-auto' alt="" /> : <p className='text-lg font-medium text-gray-800 text-center pt-16'>Upload Image</p>}
                    </div>
                    <div className='w-full md:w-fit flex flex-col p-1 md:p-2'>
                        <div className='flex items-center'>
                            <img src={profileimg} className='w-8 h-8' alt="profile photo" />
                            <p className=' font-semibold text-base'>Ankit Rowat</p>
                        </div>
                        <textarea className='w-full md:max-w-max h-fit outline-none p-1 md:p-3 border-gray-300 text-gray-500 tracking-wide resize-none' rows={1} cols={33} placeholder='write something here'></textarea>
                    </div>

                </div>

                <hr className='w-full h-[2px] bg-black/30 mt-2' />
                <div className='w-full flex justify-around items-center m-2'>
                    <PhotoIcon className='w-[2rem] h-[2rem] text-purple-500' />
                    <div className='bg-primarycolor text-white py-1 px-3 text-sm rounded-md'>Post</div>
                </div>
            </div>
        </div>
    )
}

export default UploadPopup