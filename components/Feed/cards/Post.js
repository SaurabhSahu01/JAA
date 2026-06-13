'use client';

import React from 'react'
import { ChatBubbleBottomCenterIcon } from '@heroicons/react/24/outline'
import { TrashIcon } from '@heroicons/react/24/outline'
import { HandThumbUpIcon } from '@heroicons/react/24/solid'
import ImageViewer from 'react-simple-image-viewer';
import { useRouter } from 'next/navigation';
import cookieCutter from "cookie-cutter";
import { db } from '@/src/utils/firebase';
import { onSnapshot, collection, doc } from 'firebase/firestore';
import Comment from './Comment';
import { useProfile } from '@/components/common/ProfileContext';
import Loader from '@/components/common/Loader';
import { motion, AnimatePresence } from 'framer-motion';

const Post = ({ data }) => {
    const { profile: myProfile } = useProfile();
    const [deleteLoading, setDeleteLoading] = React.useState(false);
    const uid = cookieCutter.get('uid');
    const router = useRouter();
    const { photo, content, date, postedBy, postId, likes } = data;
    const [currentImage, setCurrentImage] = React.useState(0);
    const [isViewerOpen, setIsViewerOpen] = React.useState(false);
    const [profile, setProfile] = React.useState(null);
    const [showComment, setShowComment] = React.useState(false);
    const [comments, setComments] = React.useState(null);
    const [comment, setComment] = React.useState('');
    const [liked, setLiked] = React.useState(false);

    React.useEffect(() => {
        setLiked(likes?.includes(uid));
    }, [likes, uid]);

    const openImageViewer = React.useCallback((index) => {
        setCurrentImage(index);
        setIsViewerOpen(true);
    }, []);

    const closeImageViewer = () => {
        setCurrentImage(0);
        setIsViewerOpen(false);
    };

    const deletePost = (postID) => {
        setDeleteLoading(true);
        fetch(`/api/deletepost?pid=${postID}`, {
            method: "GET",
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                "authorization": `Bearer ${cookieCutter.get('userToken')} ${cookieCutter.get('refreshToken')}`
            }
        })
            .then(res => res.json())
            .then(data => { setDeleteLoading(false); })
            .catch(err => { setDeleteLoading(false); })
    }

    const getProfile = async () => {
        await fetch(`/api/getuserdata?q=${postedBy}&required=name`, {
            method: "GET",
            headers: {
                "authorization": `Bearer ${cookieCutter.get('userToken')} ${cookieCutter.get('refreshToken')}`
            },
        }).then((res) => res.json()).then((res) => {
            setProfile(res);
        }).catch((err) => { console.log(err); });
    }

    const sendComment = async () => {
        const datetime = new Date().toLocaleString().split(',');
        const data = { comment, datetime };
        if (comment) {
            await fetch(`/api/addcomment?pid=${postId}`, {
                method: "POST",
                headers: {
                    "authorization": `Bearer ${cookieCutter.get('userToken')} ${cookieCutter.get('refreshToken')}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            }).then((res) => res.json()).then(() => {
                setComment("")
            }).catch((err) => { console.log(err); });
        }
    }

    const actionLike = async (action) => {
        await fetch(`/api/like?pid=${postId}&action=${action}`, {
            method: "GET",
            headers: {
                "authorization": `Bearer ${cookieCutter.get('userToken')} ${cookieCutter.get('refreshToken')}`
            },
        }).then((res) => res.json()).catch((err) => { console.log(err); });
    }

    React.useEffect(() => {
        getProfile();
        const sub = onSnapshot(collection(doc(db, 'posts', postId), 'comments'), (snap) => {
            const postData = [];
            snap.forEach((doc) => postData.push({ ...doc.data(), id: doc.id }));
            postData.reverse();
            setComments(postData);
        });
    }, []);

    return (
        profile && (
            <div className={`glass-card overflow-hidden transition-all duration-300 ${deleteLoading ? 'opacity-40 pointer-events-none scale-[0.98]' : ''}`}>
                {/* Post Content */}
                <div className="p-6">
                    {/* Author Header */}
                    <div className='flex items-center gap-3 mb-4'>
                        <button onClick={() => router.push(`/user/${postedBy}`)} className="flex-shrink-0 group">
                            {profile.photo ? (
                                <img src={profile?.photo} alt="user" className='w-11 h-11 object-cover rounded-full ring-2 ring-white shadow-sm group-hover:ring-jnu-blue/30 transition-all' />
                            ) : (
                                <img src='/icons/profileIcon.webp' className='w-11 h-11 rounded-full ring-2 ring-white shadow-sm' />
                            )}
                        </button>
                        <div className='flex-1 min-w-0'>
                            <button
                                className='font-semibold text-sm text-gray-900 hover:text-jnu-blue transition-colors truncate block'
                                onClick={() => router.push(`/user/${postedBy}`)}
                            >
                                {profile?.name}
                            </button>
                            <p className='text-xs text-gray-400 font-medium'>{date}</p>
                        </div>
                        {postedBy === uid && !deleteLoading && (
                            <button
                                onClick={() => deletePost(postId)}
                                className="p-2 rounded-lg text-gray-300 hover:text-red-500 hover:bg-red-50 transition-all"
                            >
                                <TrashIcon className='w-4 h-4' />
                            </button>
                        )}
                    </div>

                    {/* Content */}
                    {content && (
                        <p className='text-gray-700 leading-relaxed text-[15px] mb-4'>{content}</p>
                    )}

                    {/* Image */}
                    {photo && (
                        <>
                            <div className="relative rounded-xl overflow-hidden -mx-1 mb-2 cursor-pointer group" onClick={() => openImageViewer(0)}>
                                <img
                                    src={photo}
                                    alt="Post"
                                    className="w-full object-cover max-h-[400px] group-hover:scale-[1.02] transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors"></div>
                            </div>
                            {isViewerOpen && (
                                <ImageViewer
                                    src={[photo]}
                                    currentIndex={currentImage}
                                    disableScroll={true}
                                    closeOnClickOutside={true}
                                    onClose={closeImageViewer}
                                    backgroundStyle={{ backdropFilter: "blur(16px)", backgroundColor: "rgba(0,0,0,0.6)", zIndex: "10" }}
                                />
                            )}
                        </>
                    )}
                </div>

                {/* Action Bar */}
                <div className='px-6 py-3 border-t border-gray-100 flex items-center justify-between'>
                    <div className="flex gap-1">
                        {/* Like */}
                        <button
                            onClick={() => actionLike(liked ? 'unlike' : 'like')}
                            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                                liked
                                    ? 'text-jnu-blue bg-jnu-blue/5'
                                    : 'text-gray-500 hover:text-jnu-blue hover:bg-gray-50'
                            }`}
                        >
                            <HandThumbUpIcon className={`w-5 h-5 transition-transform ${liked ? 'scale-110' : ''}`} />
                            <span>{likes?.length || 0}</span>
                        </button>

                        {/* Comment */}
                        <button
                            onClick={() => setShowComment(!showComment)}
                            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                                showComment
                                    ? 'text-jnu-blue bg-jnu-blue/5'
                                    : 'text-gray-500 hover:text-jnu-blue hover:bg-gray-50'
                            }`}
                        >
                            <ChatBubbleBottomCenterIcon className='w-5 h-5' />
                            <span>{comments?.length || 0}</span>
                        </button>
                    </div>
                </div>

                {/* Comments Section */}
                <AnimatePresence>
                    {showComment && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden"
                        >
                            <div className='px-6 pb-5 bg-gray-50/50 border-t border-gray-100'>
                                {/* Comment Input */}
                                <div className='flex items-center gap-3 py-4'>
                                    <textarea
                                        className='flex-1 outline-none p-3 border border-gray-200 bg-white text-gray-700 text-sm rounded-xl focus:ring-2 focus:ring-jnu-blue/10 focus:border-jnu-blue/20 transition-all resize-none placeholder-gray-400'
                                        rows={1}
                                        placeholder='Write a comment...'
                                        value={comment}
                                        onChange={(e) => setComment(e.target.value)}
                                    />
                                    <button
                                        className='px-5 py-3 bg-jnu-blue text-white font-semibold rounded-xl hover:bg-jnu-blue-light transition-all text-sm shadow-sm hover:shadow-md flex-shrink-0'
                                        onClick={sendComment}
                                    >
                                        Post
                                    </button>
                                </div>
                                {/* Comments List */}
                                <div className='flex flex-col gap-3'>
                                    {comments?.map((c, index) => (
                                        <Comment key={index} data={c} />
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        )
    )
}

export default Post
