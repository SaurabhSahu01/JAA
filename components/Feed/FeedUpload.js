import React from 'react'

function FeedUpload() {
    const [img, setimg] = React.useState(null);
    React.useEffect(() => {
        if(localStorage.getItem('profile')){
            setimg(JSON.parse(localStorage.getItem('profile'))['photo']);
        }
    }, [])
    const [showuploader, setshowuploader] = React.useState(false);
    return (
        <div className='w-full flex justify-center items-center gap-3 mt-2'>
            <img src={`${img}`} alt="profile pic" className='h-[4rem] w-[4rem] rounded-full object-cover xs:hidden md:block'/>
            <div className='md:w-full xs:w-9/12 sm:p-2 xs:p-1 rounded-full bg-gray-200 flex justify-center items-center border-[1px] border-black cursor-pointer tracking-wider' onClick={() => setshowuploader(true)}>
                Share a post
            </div>
        </div>
    )
}

export default FeedUpload