import React, { useState } from 'react'
import { ChatBubbleBottomCenterIcon } from '@heroicons/react/24/outline'
import { HandThumbUpIcon } from '@heroicons/react/24/solid'
import ImageViewer from 'react-simple-image-viewer';
import { useRouter } from 'next/router';
import cookieCutter from "cookie-cutter";


const Post = ({ data }) => {
    const router = useRouter();
    //console.log(data);
    const { photo, content, date, postedBy, postId, likes, comments } = data;
    const [currentImage, setCurrentImage] = React.useState(0);
    const [isViewerOpen, setIsViewerOpen] = React.useState(false);
    const [profile, setProfile] = React.useState(null);

    const openImageViewer = React.useCallback((index) => {
        setCurrentImage(index);
        setIsViewerOpen(true);
    }, []);

    const closeImageViewer = () => {
        setCurrentImage(0);
        setIsViewerOpen(false);
    };

    React.useEffect(() => {
        const getProfile = async () => {
            await fetch(`/api/getuserdata?q=${postedBy}&required=name`, {
                method: "GET",
                headers: {
                    "authorization": `Bearer ${cookieCutter.get('userToken')} ${cookieCutter.get('refreshToken')}`
                },
            }).then((res) => {return res.json()}).then((res) => {
                // setLoading(false);
                // console.log(res);
                setProfile(res.data);
                // setWantShare(false);
            }).catch((err) => {
                // setLoading(false);
                console.log(err);
            });
        }
        getProfile();
    }, []);


    return (
        // {
            profile && <div className='w-full h-fit bg-white rounded-xl px-4 my-4 flex flex-col items-start justify-center'>
            <div className='relative flex items-center my-2 w-full'>
                {profile.photo ? <img src={profile?.photo} alt="user" className='w-10 h-10 object-cover mr-4 rounded-full cursor-pointer' onClick={() => router.push(`/user/${postedBy}`)} /> :
                <img src='/icons/profileIcon.png'  className='w-[3rem] h-[3rem] rounded-full' />}
                <div className=''>
                    <p className=' font-semibold text-base cursor-pointer hover:text-blue-500 hover:underline' onClick={() => router.push(`/user/${postedBy}`)}>{profile?.firstName + " " + profile?.lastName}</p>
                    <p className=' text-xs font-normal'>{profile?.program.charAt(0).toUpperCase() + profile?.program.slice(1) + " " + profile?.joiningYear}</p>
                </div>
                <p className='absolute bottom-0 right-1 font-light text-[10px]'>{date}</p>
            </div>
            
            {photo &&
                <>

                    <div class="relative w-full h-0 pb-[56.25%]">
                        <img
                            src={photo}
                            alt="Post"
                            class="absolute object-cover w-full h-full"
                            onClick={() => openImageViewer(0)}
                        />
                    </div>

                    <div>
                        {isViewerOpen && (
                            <ImageViewer
                                src={[photo]}
                                currentIndex={currentImage}
                                disableScroll={true}
                                closeOnClickOutside={true}
                                onClose={closeImageViewer}
                                backgroundStyle={{ backdropFilter: "blur(10px)", backgroundColor: "transparent", zIndex: "10" }}
                            />
                        )}
                    </div>
                </>
            }

            <div className='w-full text-left'>
                <p className='font-medium text-lg'>{content}</p>
            </div>

            <hr className='w-full h-[2px] bg-black/30 my-2' />

            <div className='w-full flex justify-around items-center py-2'>
                <div className='w-fit flex items-center mx-2 text-gray-600 hover:text-blue-500 cursor-pointer'>
                    <HandThumbUpIcon className='w-7 h-7' />
                    <span>{likes} Like</span>
                </div>
                <div className='w-fit flex items-center mx-2 cursor-pointer text-gray-600 hover:text-blue-400'>
                    <ChatBubbleBottomCenterIcon className='w-7 h-7' />
                    <span>Comment</span>
                </div>
            </div>
            {/* <hr />
            <div className=''>
                 comments 
             </div> */}
        </div>
        // }
    )
}

export default Post
