import React from 'react'
import { PhotoIcon } from "@heroicons/react/24/solid"
import { XMarkIcon } from "@heroicons/react/24/solid"
import secureLocalStorage from 'react-secure-storage';
import cookieCutter from "cookie-cutter";
import Loader from '../../common/Loader';

function UploadPopup({ setWantShare }) {
    const [img, setimg] = React.useState(null);
    const [showImg, setShowImg] = React.useState(null);
    const [profileimg, setprofileimg] = React.useState(null);
    const [name, setName] = React.useState(null);
    const [content, setContent] = React.useState(null);
    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {
        if (secureLocalStorage.getItem('profile')) {
            setprofileimg(JSON.parse(secureLocalStorage.getItem('profile'))['photo']);
            setName(JSON.parse(secureLocalStorage.getItem('profile'))["firstName"] + " " + JSON.parse(secureLocalStorage.getItem('profile'))["lastName"])
        }
    }, []);


    const fileAttached = (e) => {
        const file = e.target.files[0];

        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setShowImg(reader.result);
            };
            reader.readAsDataURL(file);
        }
    }

    const postShare = async () => {

        if (content || img) {
            setLoading(true);
            // post share
            // console.log(img, content);
            const formData = new FormData();
            formData.append('photo', img);
            formData.append('content', content);
            const tempdate = new Date().toLocaleString().split(',');
            const currentDate = tempdate[1] + " " + tempdate[0];
            // console.log(currentDate);

            formData.append('date', currentDate);

            await fetch('/api/addpost', {
                method: "POST",
                headers: {
                    "authorization": `Bearer ${cookieCutter.get('userToken')} ${cookieCutter.get('refreshToken')}`
                },
                body: formData
            }).then((res) => { return res.json() }).then((res) => {
                setLoading(false);
                // console.log(res);
                setWantShare(false);
            }).catch((err) => {
                setLoading(false);
                console.log(err);
            });
        }
    }


    return (
        <>
            {
                loading ? <div className='h-screen w-full fixed top-0 right-0 z-[200] backdrop-blur-sm'>
                    <Loader color="#1B2D56" loading={loading} size={70} />
                </div> : <></>
            }
            <div className='fixed z-10 min-h-screen backdrop-blur-md w-full flex flex-col items-center pt-[2%]'>
                <div className='mx-4 min-w-[90%] sm:min-w-[80%] md:min-w-[35rem] md:max-w-[50%] h-fit flex-col justify-center items-center gap-3 bg-white p-[0.5px] rounded-md'>
                    <div className='h-fit flex justify-between items-center border-gray-200 border-b-[1px] py-1'>
                        <div className='font-medium text-md text-blue-400 ml-2 text-center'>New Post</div>
                        <div className='w-fit h-fit bg-red-500 rounded-full p-1 '>
                            <XMarkIcon onClick={() => setWantShare(false)} className='w-[1rem] h-[1rem] text-white cursor-pointer' />
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row' >
                        <div className='w-full flex flex-col p-1 md:p-2'>
                            <div className='flex items-center gap-2'>
                                {profileimg ? <img src={profileimg} className='w-8 h-8 rounded-full' alt="profile photo" /> : <img src='/icons/profileIcon.webp' className='w-8 h-8 rounded-full' />}
                                <p className='font-semibold text-base text-slate-600'>{name}</p>
                            </div>
                            <textarea
                                className='w-full h-[20rem] outline-none p-1 md:p-3 border-gray-300 text-gray-600 text-sm font-sans'
                                rows={1}
                                cols={33}
                                placeholder='write something here'
                                value={content}
                                onChange={(e) => setContent(e.target.value)}

                            ></textarea>
                            <div className={`${img ? 'block' : 'hidden'}`}>
                                {img && <img src={showImg} className='w-[5rem] aspect-aut0 h-full object-center mx-auto' alt="" />}
                            </div>
                        </div>
                    </div>

                    <hr className='w-full h-[2px] bg-black/30 mt-2' />
                    <div className='w-full flex justify-around items-center m-2'>
                        <input
                            type="file"
                            id="fileUploader"
                            className=' opacity-0 absolute top-10 right-0 w-10'
                            accept="image/jpeg, image/png, image/jpg"
                            onChange={(e) => {
                                setimg(e.target.files[0]);
                                fileAttached(e)
                            }}
                        />
                        <label htmlFor="fileUploader">
                            <PhotoIcon className='w-[2rem] h-[2rem] text-blue-500 cursor-pointer' />
                        </label>

                        <div
                            className='bg-primarycolor text-white py-1 px-3 text-sm rounded-md cursor-pointer'
                            onClick={postShare}
                        >Post</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UploadPopup