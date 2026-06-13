'use client';

import React from 'react';
import { PhotoIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { useProfile } from '@/components/common/ProfileContext';
import cookieCutter from "cookie-cutter";
import Loader from '../../common/Loader';
import { motion } from 'framer-motion';

function UploadPopup({ setWantShare }) {
    const { profile } = useProfile();
    const [img, setimg] = React.useState(null);
    const [showImg, setShowImg] = React.useState(null);
    const [profileimg, setprofileimg] = React.useState(null);
    const [name, setName] = React.useState("Alumni Member");
    const [content, setContent] = React.useState("");
    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {
        if (profile) {
            if (profile.photo) setprofileimg(profile.photo);
            if (profile.firstName) {
                setName(`${profile.firstName} ${profile.lastName || ""}`);
            }
        }
    }, [profile]);

    const fileAttached = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setShowImg(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const postShare = async () => {
        if (content.trim() || img) {
            setLoading(true);
            const formData = new FormData();
            formData.append('photo', img);
            formData.append('content', content);
            
            const tempdate = new Date().toLocaleString().split(',');
            const currentDate = tempdate[1] + " " + tempdate[0];
            formData.append('date', currentDate);

            await fetch('/api/addpost', {
                method: "POST",
                headers: {
                    "authorization": `Bearer ${cookieCutter.get('userToken')} ${cookieCutter.get('refreshToken')}`
                },
                body: formData
            }).then((res) => res.json()).then((res) => {
                setLoading(false);
                setWantShare(false);
            }).catch((err) => {
                setLoading(false);
                console.log(err);
            });
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-slate-900/40 backdrop-blur-md">
            {/* Loader overlay */}
            {loading && (
                <div className="fixed inset-0 z-[210] backdrop-blur-md bg-white/40 flex items-center justify-center">
                    <Loader color="#1B2D56" loading={loading} size={70} />
                </div>
            )}

            {/* Modal Card */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="w-full max-w-xl bg-white rounded-3xl shadow-glass-xl border border-gray-200/50 overflow-hidden flex flex-col"
            >
                {/* Header */}
                <div className="flex justify-between items-center px-6 py-4 border-b border-gray-100">
                    <h3 className="text-lg font-display font-bold text-jnu-blue">Create a Post</h3>
                    <button
                        onClick={() => setWantShare(false)}
                        className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 hover:text-gray-800 transition-colors"
                    >
                        <XMarkIcon className="w-5 h-5" />
                    </button>
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-3 px-6 pt-6">
                    {profileimg ? (
                        <img src={profileimg} className="w-10 h-10 rounded-full object-cover ring-2 ring-jnu-blue/5" alt="profile" />
                    ) : (
                        <img src="/icons/profileIcon.webp" className="w-10 h-10 rounded-full ring-2 ring-jnu-blue/5" alt="default" />
                    )}
                    <span className="font-semibold text-gray-800 text-sm">{name}</span>
                </div>

                {/* Textarea Area */}
                <div className="flex-grow px-6 py-4 flex flex-col">
                    <textarea
                        className="w-full h-44 resize-none outline-none text-gray-700 placeholder-gray-400 text-sm font-sans"
                        placeholder="What's on your mind? Share updates, memories, or news with JNUites..."
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    ></textarea>

                    {/* Image Preview */}
                    {showImg && (
                        <div className="relative mt-4 rounded-2xl overflow-hidden border border-gray-100 max-h-60 flex items-center justify-center bg-gray-50 group">
                            <img src={showImg} className="max-h-60 object-contain w-full" alt="upload preview" />
                            <button
                                type="button"
                                onClick={() => { setimg(null); setShowImg(null); }}
                                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 hover:bg-black/80 flex items-center justify-center text-white transition-colors"
                            >
                                <XMarkIcon className="w-4 h-4" />
                            </button>
                        </div>
                    )}
                </div>

                {/* Footer Controls */}
                <div className="flex justify-between items-center px-6 py-4 bg-gray-50/50 border-t border-gray-100">
                    <div className="flex items-center">
                        <input
                            type="file"
                            id="popupImageUploader"
                            className="hidden"
                            accept="image/jpeg, image/png, image/jpg"
                            onChange={(e) => {
                                setimg(e.target.files[0]);
                                fileAttached(e);
                            }}
                        />
                        <label 
                            htmlFor="popupImageUploader" 
                            className="w-10 h-10 rounded-xl bg-jnu-blue/5 hover:bg-jnu-blue/10 flex items-center justify-center text-jnu-blue cursor-pointer transition-colors border border-jnu-blue/10"
                        >
                            <PhotoIcon className="w-5 h-5" />
                        </label>
                        <span className="text-xs text-gray-400 ml-3 font-medium">
                            {img ? "Photo attached" : "Add a photo"}
                        </span>
                    </div>

                    <button
                        onClick={postShare}
                        disabled={!content.trim() && !img}
                        className={`px-6 py-2.5 rounded-xl font-bold text-sm transition-all shadow-md ${
                            (content.trim() || img)
                                ? "btn-primary hover:shadow-glow-blue cursor-pointer"
                                : "bg-gray-100 text-gray-400 cursor-not-allowed shadow-none"
                        }`}
                    >
                        Post
                    </button>
                </div>
            </motion.div>
        </div>
    );
}

export default UploadPopup;