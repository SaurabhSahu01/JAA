import React from 'react'
import { ChatBubbleBottomCenterIcon } from '@heroicons/react/24/outline'
import { TrashIcon } from '@heroicons/react/24/outline'
import { HandThumbUpIcon, HandThumbDownIcon } from '@heroicons/react/24/solid'
import ImageViewer from 'react-simple-image-viewer';
import { useRouter } from 'next/router';
import cookieCutter from "cookie-cutter";
import { db } from '@/src/utils/firebase';
import { onSnapshot, collection, doc } from 'firebase/firestore';
import Comment from './Comment';
import secureLocalStorage from 'react-secure-storage';


const Post = ({ data }) => {
    const uid = cookieCutter.get('uid');
    const router = useRouter();
    const { photo, content, date, postedBy, postId, likes } = data;
    const [currentImage, setCurrentImage] = React.useState(0);
    const [isViewerOpen, setIsViewerOpen] = React.useState(false);
    const [profile, setProfile] = React.useState(null);
    const [showComment, setShowComment] = React.useState(false);
    const [comments, setComments] = React.useState(null);
    const [comment, setComment] = React.useState(null);

    const openImageViewer = React.useCallback((index) => {
        setCurrentImage(index);
        setIsViewerOpen(true);
    }, []);

    const closeImageViewer = () => {
        setCurrentImage(0);
        setIsViewerOpen(false);
    };
    const deletePost = (postID) => {
        fetch(`/api/deletepost?pid=${postID}`,{
            method: "GET",
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                "authorization": `Bearer ${cookieCutter.get('userToken')} ${cookieCutter.get('refreshToken')}`
            }
        })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.log(err))
    }
    const getProfile = async () => {
        await fetch(`/api/getuserdata?q=${postedBy}&required=name`, {
            method: "GET",
            headers: {
                "authorization": `Bearer ${cookieCutter.get('userToken')} ${cookieCutter.get('refreshToken')}`
            },
        }).then((res) => { return res.json() }).then((res) => {
            setProfile(res);
        }).catch((err) => {
            console.log(err);
        });
    }

    const sendComment = async () => {
        const datetime = new Date().toLocaleString().split(',');
        const currentDate = datetime[1] + " " + datetime[0];
        const data = {
            comment,
            datetime,
        }
        if (comment) {
            await fetch(`/api/addcomment?pid=${postId}`, {
                method: "POST",
                headers: {
                    "authorization": `Bearer ${cookieCutter.get('userToken')} ${cookieCutter.get('refreshToken')}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            }).then((res) => { return res.json() }).then((res) => {
                console.log(res);
                setComment("")
            }).catch((err) => {
                console.log(err);
            });
        }
    }

    const actionLike = async (action) => {
        await fetch(`/api/like?pid=${postId}&action=${action}`, {
            method: "GET",
            headers: {
                "authorization": `Bearer ${cookieCutter.get('userToken')} ${cookieCutter.get('refreshToken')}`
            },
        }).then((res) => { return res.json() }).then((res) => {
            console.log(res);

        }).catch((err) => {
            console.log(err);
        });
    }

    React.useEffect(() => {
        getProfile();
        // comments
        const sub = onSnapshot(collection(doc(db, 'posts', postId), 'comments'), (snap) => {
            const postData = [];
            snap.forEach((doc) =>
                postData.push({ ...doc.data(), id: doc.id })
            );
            postData.reverse();
            setComments(postData);
        });
    }, []);

    return (
        profile && <>

            <div className='w-full h-fit bg-white rounded-lg px-4 mt-4 flex flex-col items-start justify-center'>
                <div className='relative flex items-center my-2 w-full'>
                    {profile.photo ? <img src={profile?.photo} alt="user" className='w-10 h-10 object-cover mr-4 rounded-full cursor-pointer' onClick={() => router.push(`/user/${postedBy}`)} /> :
                        <img src='/icons/profileIcon.png' className='w-10 h-10 rounded-full mr-4' />}
                    <div className=''>
                        <p className=' font-semibold text-base cursor-pointer hover:text-blue-500 hover:underline' onClick={() => router.push(`/user/${postedBy}`)}>{profile?.name}</p>
                        {/* <p className=' text-xs font-normal'>{profile?.program.charAt(0).toUpperCase() + profile?.program.slice(1) + " " + profile?.joiningYear}</p> */}
                    </div>
                    <p className='absolute bottom-[50%] translate-y-[50%] right-1 font-light text-[10px]'>{date}</p>
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
                    <div
                        className='w-fit flex items-center justify-center mx-2 text-gray-600'
                    >
                        {likes.includes(uid) ? <HandThumbUpIcon className='md:h-[1.5rem] md:w-[1.5rem] xs:h-[1rem] xs:w-[1rem] cursor-pointer text-blue-500' onClick={() => actionLike('unlike')} /> : <HandThumbUpIcon className='md:h-[1.5rem] md:w-[1.5rem] xs:h-[1rem] xs:w-[1rem] cursor-pointer text-gray-500' onClick={() => actionLike('like')} />}
                        <p className='mx-[3px] text-blue-500 xs:text-sm md:text-md'>{likes.length} <span className='text-gray-500'>Likes</span></p>
                    </div>
                    <div
                        className='w-fit flex items-center mx-2 cursor-pointer text-gray-600 hover:text-blue-400'
                        onClick={() => setShowComment(!showComment)}
                    >
                        <ChatBubbleBottomCenterIcon className='md:h-[1.5rem] md:w-[1.5rem] xs:h-[1rem] xs:w-[1rem]' />
                        <span className='xs:text-sm md:text-md ml-1'>Comment</span>
                    </div>
                    {(postedBy === uid ) ? <TrashIcon className='md:h-[1.5rem] md:w-[1.5rem] xs:h-[1rem] xs:w-[1rem] cursor-pointer text-center items-center' onClick={() => deletePost(postId)}/> : <></>}
                </div>
            </div>


            {/*********************************** comment section************************************************** */}

            {showComment &&
                <div className='px-4'>
                    <hr className='w-full h-[1px] border-r-2 border-black' />
                    <div className='w-full h-fit bg-white px-4 mb-4 flex flex-col items-start justify-center'>
                        <div className='relative flex items-center my-2 w-full'>
                            {profile.photo ? <img src={profile?.photo} alt="user" className='w-8 h-8 object-cover mr-4 rounded-full cursor-pointer' onClick={() => router.push(`/user/${postedBy}`)} /> :
                                <img src='/icons/profileIcon.png' className='w-8 h-8 rounded-full' />}
                            <div className=''>
                                <p className=' font-semibold text-sm cursor-pointer hover:text-blue-500 hover:underline' onClick={() => router.push(`/user/${postedBy}`)}>{profile?.name}</p>
                            </div>
                        </div>
                        <hr className='w-full h-[2px] bg-black/30 my-1' />
                        <p>comments</p>
                        <div className='flex flex-col gap-2'>
                            {
                                comments.map((c, index) => {
                                    {/* console.log(c); */}
                                    return (
                                        <Comment key={index} data={c} />
                                    )
                                })
                            }
                        </div>
                        <hr className='w-full h-[1px] border-r-2 border-black' />
                        <div className='w-full'>
                            <div className='relative flex items-center my-2 w-full'>
                                {JSON.parse(secureLocalStorage.getItem('profile'))['photo'] ? <img src={JSON.parse(secureLocalStorage.getItem('profile'))['photo']} alt="user" className='w-8 h-8 object-cover mr-4 rounded-full cursor-pointer' /> :
                                    <img src='/icons/profileIcon.png' className='w-8 h-8 rounded-full' />}
                                <div className=''>
                                    <p className=' font-semibold text-sm cursor-pointer hover:text-blue-500 hover:underline'>{JSON.parse(secureLocalStorage.getItem('profile'))['firstName']+JSON.parse(secureLocalStorage.getItem('profile'))['lastName']}</p>
                                </div>
                            </div>
                            <div className='flex justify-center'>
                                <textarea
                                    className='w-full outline-none p-1 md:p-3 border-gray-300 text-gray-600 text-sm font-sans'
                                    rows={1}
                                    cols={33}
                                    placeholder='write comment here...'
                                    value={comment}
                                    onChange={(e) => setComment(e.target.value)}
                                ></textarea>
                                <button
                                    className='h-min p-2 bg-blue-200 rounded-md'
                                    onClick={sendComment}
                                >Comment</button>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>

        // }
    )
}

export default Post
