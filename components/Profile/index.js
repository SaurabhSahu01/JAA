'use client';

import React, { useEffect, useState } from 'react';
import cookieCutter from "cookie-cutter";
import { PencilSquareIcon, CameraIcon, TrashIcon, CheckIcon, XMarkIcon } from '@heroicons/react/24/solid';
import Select from './tags/Select';
import { fields } from './Fields';
import Input from './tags/Input';
import Loader from '../common/Loader';
import { useRouter } from 'next/navigation';
import { useProfile } from '@/components/common/ProfileContext';
import { motion, AnimatePresence } from 'framer-motion';

const Profile = () => {
    const { profile, fetchProfile, updateProfile } = useProfile();
    const router = useRouter();
    const [isdisable, setDisable] = useState(true);
    const [incomingImage, setIncomingImage] = useState(null);
    const [img, setImg] = useState(null);
    const [selectImg, setSelectImg] = useState(null);
    const [deletePic, setDeletePic] = useState(false);
    const [loading, setLoading] = useState(false);
    const [state, setstate] = useState({
        firstName: "",
        lastName: "",
        number: "",
        email: "",
        gender: "",
        dob: "",
        school: "",
        program: "",
        hostel: "",
        joiningYear: "",
        graduationYear: "",
    });

    const getProfile = async () => {
        await fetch('/api/getprofile', {
            method: 'GET',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                "authorization": `Bearer ${cookieCutter.get('userToken')} ${cookieCutter.get('refreshToken')}`
            }
        }).then((res) => res.json()).then((res) => {
            if (res.data && res.data.set) {
                updateProfile(res.data);
                const { dob, firstName, gender, graduationYear, hostel, joiningYear, lastName, number, program, school } = res.data;
                setstate({ dob, firstName, gender, graduationYear, hostel, joiningYear, lastName, number, program, school });
                setIncomingImage(res.data.photo);
            } else {
                router.push('/registration');
            }
        }).catch((err) => console.log(err));
    };

    useEffect(() => {
        if (!cookieCutter.get('profileSet')) {
            if (!cookieCutter.get('refreshToken') || !cookieCutter.get('userToken') || !cookieCutter.get('uid')) {
                router.push('/login');
            } else {
                router.push('/registration');
            }
        } else {
            if (profile) {
                const { dob, firstName, gender, graduationYear, hostel, joiningYear, lastName, number, program, school } = profile;
                setstate({ dob, firstName, gender, graduationYear, hostel, joiningYear, lastName, number, program, school });
                setIncomingImage(profile.photo);
            } else {
                getProfile();
            }
        }
    }, [incomingImage, profile]);

    const fileAttached = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setSelectImg(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const onChangeHandler = (e) => {
        let value = e.target.value;
        let id = e.target.id;
        setstate({ ...state, [id]: value });
    };

    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();
        const formData = new FormData();
        
        if (img) {
            formData.append('photo', img);
        } else if (deletePic) {
            formData.append('photo', null);
        } else {
            formData.append('photo', incomingImage);
        }

        Object.keys(state).forEach((key) => {
            formData.append(key, state[key]);
        });

        await fetch('/api/register', {
            method: "POST",
            headers: {
                "authorization": `Bearer ${cookieCutter.get('userToken')} ${cookieCutter.get('refreshToken')}`
            },
            body: formData
        }).then((res) => res.json()).then((res) => {
            setLoading(false);
            getProfile();
        }).catch((err) => {
            setLoading(false);
            console.log(err);
        });
        setDisable(true);
    };

    const deleteImg = () => {
        setDeletePic(true);
        setSelectImg(null);
        setImg(null);
    };

    const cancelEdit = () => {
        setDisable(true);
        setSelectImg(null);
        setImg(null);
        setDeletePic(false);
        // Reload details from context
        if (profile) {
            const { dob, firstName, gender, graduationYear, hostel, joiningYear, lastName, number, program, school } = profile;
            setstate({ dob, firstName, gender, graduationYear, hostel, joiningYear, lastName, number, program, school });
            setIncomingImage(profile.photo);
        }
    };

    return (
        <div className="min-h-screen relative overflow-hidden py-16 px-6 md:px-10">
            {/* Background elements */}
            <div className="absolute inset-0 bg-mesh-gradient"></div>
            <div className="absolute inset-0 dot-grid opacity-30"></div>

            {/* Loader overlay */}
            {loading && (
                <div className="fixed inset-0 z-[200] backdrop-blur-md bg-white/40 flex items-center justify-center">
                    <Loader color="#1B2D56" loading={loading} size={70} />
                </div>
            )}

            <div className="max-w-4xl mx-auto relative z-10">
                <form onSubmit={handleSubmit} className="glass-card shadow-glass-xl overflow-hidden relative border border-gray-200/50">
                    
                    {/* Header Banner */}
                    <div className="relative bg-gradient-to-r from-jnu-blue to-jnu-blue-light px-8 py-10 text-white flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-white/10">
                        {/* Edit Trigger */}
                        {isdisable && (
                            <button
                                type="button"
                                onClick={() => setDisable(false)}
                                className="absolute top-6 right-6 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center text-white transition-colors border border-white/15"
                            >
                                <PencilSquareIcon className="w-5 h-5" />
                            </button>
                        )}

                        <div className="flex flex-col gap-2">
                            {isdisable ? (
                                <h1 className="text-3xl font-display font-extrabold tracking-tight">
                                    {state.firstName} {state.lastName}
                                </h1>
                            ) : (
                                <div className="flex gap-2 max-w-md">
                                    <input
                                        type="text"
                                        id="firstName"
                                        value={state.firstName}
                                        onChange={onChangeHandler}
                                        placeholder="First Name"
                                        className="bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white placeholder-white/50 text-sm outline-none focus:bg-white/15 w-1/2"
                                        required
                                    />
                                    <input
                                        type="text"
                                        id="lastName"
                                        value={state.lastName}
                                        onChange={onChangeHandler}
                                        placeholder="Last Name"
                                        className="bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white placeholder-white/50 text-sm outline-none focus:bg-white/15 w-1/2"
                                        required
                                    />
                                </div>
                            )}

                            <div>
                                {isdisable ? (
                                    <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-semibold uppercase tracking-wider border border-white/10">
                                        {state.gender || "Gender Not Specified"}
                                    </span>
                                ) : (
                                    <select
                                        id="gender"
                                        value={state.gender}
                                        onChange={onChangeHandler}
                                        className="bg-white/10 border border-white/20 rounded-lg px-3 py-1.5 text-white text-xs font-semibold outline-none cursor-pointer"
                                        required
                                    >
                                        <option className="text-gray-800" value="">Select Gender</option>
                                        <option className="text-gray-800" value="Male">Male</option>
                                        <option className="text-gray-800" value="Female">Female</option>
                                    </select>
                                )}
                            </div>
                        </div>

                        {/* Profile Image View */}
                        <div className="relative group flex-shrink-0">
                            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg ring-4 ring-white/10 bg-gray-100 flex items-center justify-center relative z-10 transition-transform duration-300 group-hover:scale-105">
                                {selectImg ? (
                                    <img className="w-full h-full object-cover" src={selectImg} alt="new profile" />
                                ) : (!deletePic && incomingImage) ? (
                                    <img className="w-full h-full object-cover" src={incomingImage} alt="profile" />
                                ) : (
                                    <img className="w-full h-full object-cover" src="/icons/profileIcon.webp" alt="default icon" />
                                )}
                            </div>

                            {/* Camera overlay and Delete icon in Edit Mode */}
                            {!isdisable && (
                                <div className="absolute inset-0 z-20 flex items-center justify-center rounded-full bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <label htmlFor="fileUploader" className="p-2 bg-white/10 hover:bg-white/20 text-white rounded-full cursor-pointer transition-colors">
                                        <CameraIcon className="w-6 h-6" />
                                    </label>
                                    <input
                                        type="file"
                                        id="fileUploader"
                                        className="hidden"
                                        accept="image/jpeg, image/png, image/jpg"
                                        onChange={(e) => {
                                            setImg(e.target.files[0]);
                                            fileAttached(e);
                                        }}
                                    />
                                    {(selectImg || incomingImage) && (
                                        <button
                                            type="button"
                                            onClick={deleteImg}
                                            className="p-2 bg-red-500/80 hover:bg-red-500 text-white rounded-full transition-colors ml-2"
                                        >
                                            <TrashIcon className="w-4 h-4" />
                                        </button>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Form Fields Grid */}
                    <div className="p-8 md:p-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {fields.map((data, index) => (
                                <div key={index} className="flex flex-col bg-gray-50/50 border border-gray-100 rounded-xl p-4 transition-all hover:bg-gray-50 focus-within:ring-2 focus-within:ring-jnu-blue/5">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="w-8 h-8 rounded-lg bg-jnu-blue/5 flex items-center justify-center text-jnu-blue">
                                            <data.icon className="w-4 h-4" />
                                        </div>
                                        <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                                            {data.leble}
                                        </span>
                                    </div>
                                    <div className="w-full text-sm font-medium text-gray-800 pl-1">
                                        {data.option ? (
                                            <Select 
                                                onChangeHandler={onChangeHandler} 
                                                data={data} 
                                                state={state} 
                                                isDisable={isdisable} 
                                            />
                                        ) : (
                                            <Input 
                                                data={data} 
                                                onChangeHandler={onChangeHandler} 
                                                state={state} 
                                                isDisable={isdisable} 
                                            />
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Edit Action Controls */}
                        <AnimatePresence>
                            {!isdisable && (
                                <motion.div
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 15 }}
                                    className="flex items-center justify-end gap-3 mt-8 pt-8 border-t border-gray-100"
                                >
                                    <button
                                        type="button"
                                        onClick={cancelEdit}
                                        className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl border border-gray-200 hover:bg-gray-50 font-semibold text-sm text-gray-500 transition-colors"
                                    >
                                        <XMarkIcon className="w-4 h-4" /> Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="btn-primary inline-flex items-center gap-1.5 !py-2.5 !px-6 text-sm"
                                    >
                                        <CheckIcon className="w-4 h-4" /> Save Changes
                                    </button>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Profile;