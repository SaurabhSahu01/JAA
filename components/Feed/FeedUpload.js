import React from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import secureLocalStorage from 'react-secure-storage';

function FeedUpload({setWantShare}) {

    const [img, setimg] = React.useState(null);
    React.useEffect(() => {
        if (secureLocalStorage.getItem('profile')) {
            setimg(JSON.parse(secureLocalStorage.getItem('profile'))['photo']);
        }
    }, []);

    return (
        <div className='w-full flex items-center gap-1 mt-2'>
            {img ? <img src={`${img}`} alt="profile pic" className='h-[3rem] w-[3rem] rounded-full object-cover hidden  sm:block' /> :
            <img src='/icons/profileIcon.webp'  className='w-[3rem] h-[3rem] rounded-full' />}
            {/* <div className='w-full relative xs:ml-2'>
                <input
                    type="text"
                    placeholder='Type here for Search Post'
                    className='w-full p-2 rounded-xl pr-7'
                />
                <MagnifyingGlassIcon className='absolute top-3 right-1 w-5 h-5'  />
            </div> */}
            <div className=' w-full sm:p-2 xs:p-1 rounded-full bg-gray-100 hover:bg-gray-200 flex justify-center items-center border-[1px] border-black cursor-pointer tracking-wider xs:mr-2' onClick={() => setWantShare(true)}>
                Share a post
            </div>
        </div>
    )
}

export default FeedUpload