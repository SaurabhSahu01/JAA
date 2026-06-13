'use client';

import React, { useState } from 'react';
import cookieCutter from "cookie-cutter";
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import ProgressLine from './progressLine/ProgressLine';
import FirstStepRegistration from './firstStep/FirstStepRegistration';
import SecondStepRegistration from './secondStep.js/SecondStepRegistration';
import ThirdStepRegistration from './thirdStep/ThirdStepRegistration';
import Loader from '../common/Loader';
import { changeMaxAge } from '@/src/utils/login';
import { motion, AnimatePresence } from 'framer-motion';

const Registration = () => {
    const router = useRouter();
    const [firstStep, setFirstStep] = useState(false);
    const [secondStep, setSecondStep] = useState(false);
    const [thirdStep, setThirdStep] = useState(false);
    const [registered, setRegistered] = useState(false);
    const [loading, setLoading] = useState(false);
    const [state, setvalue] = React.useState({
        firstName: "",
        lastName: "",
        number: "",
        gender: "",
        dob: "",
        school: "",
        program: "",
        hostel: "",
        joiningYear: "",
        graduationYear: "",
    });
    const [img, setimg] = useState(null);
    const [selectImage, setSelectImage] = useState(null);

    const onChangeHandler = (e) => {
        let value = e.target.value;
        let id = e.target.id;
        setvalue({ ...state, [id]: value });
    };

    const register = async (e) => {
        e.preventDefault();
        setRegistered(false);
        setLoading(true);

        const formData = new FormData();
        if (img) {
            formData.append('photo', selectImage);
        } else {
            formData.append('photo', 'null');
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
        }).then(res => res.json()).then(data => {
            cookieCutter.set('profileSet', true);
            changeMaxAge('profileSet', 2 * 3600);
            setimg(null);
            setvalue({
                firstName: "",
                lastName: "",
                number: "",
                gender: "",
                dob: "",
                school: "",
                program: "",
                hostel: "",
                joiningYear: "",
                graduationYear: "",
            });
            setRegistered(true);
            setLoading(false);
            setTimeout(() => {
                setRegistered(false);
                router.push("/");
            }, 1500);
        }).catch(err => {
            setLoading(false);
            console.log("something not working ", err);
        });
    };

    const fileAttached = (e) => {
        const file = e.target.files[0];
        setSelectImage(file);
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setimg(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center relative overflow-hidden py-16 px-6">
            {/* Background elements */}
            <div className="absolute inset-0 bg-mesh-gradient"></div>
            <div className="absolute inset-0 dot-grid opacity-30"></div>

            {/* Background Image Overlay with low opacity */}
            <div 
                style={{ backgroundImage: "url(/gallery/jnu/WA0013.webp)" }} 
                className="absolute inset-0 bg-cover bg-center opacity-10 pointer-events-none mix-blend-overlay"
            ></div>

            {/* Floating shapes */}
            <motion.div
                animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-20 right-[10%] w-72 h-72 bg-gradient-to-br from-jnu-blue/5 to-transparent rounded-3xl hidden lg:block"
            />
            <motion.div
                animate={{ y: [0, 15, 0], rotate: [0, -3, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-20 left-[5%] w-60 h-60 bg-gradient-to-br from-jnu-gold/5 to-transparent rounded-full hidden lg:block"
            />

            {/* Loader overlay */}
            {loading && (
                <div className="fixed inset-0 z-[200] backdrop-blur-md bg-white/40 flex items-center justify-center">
                    <Loader color="#1B2D56" loading={loading} size={70} />
                </div>
            )}

            {/* Notification Banner */}
            {registered && (
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="fixed top-24 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-md px-4"
                >
                    <div className="bg-emerald-500 text-white font-medium p-4 shadow-2xl rounded-2xl text-center border border-emerald-400/20 backdrop-blur-md">
                        Registered all your details successfully! Redirecting...
                    </div>
                </motion.div>
            )}

            {/* Registration Card */}
            <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="relative z-10 w-full max-w-2xl"
            >
                <div className="glass-card p-8 md:p-10 shadow-glass-xl relative overflow-hidden">
                    {/* Back to Home */}
                    <Link href="/" className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-400 hover:text-jnu-blue transition-colors mb-6 group">
                        <span className="inline-block transition-transform group-hover:-translate-x-1">&larr;</span> Back to Home
                    </Link>
                    {/* Decorative glow */}
                    <div className="absolute -top-20 -right-20 w-40 h-40 bg-jnu-blue/8 rounded-full blur-3xl pointer-events-none"></div>
                    <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-jnu-red/5 rounded-full blur-3xl pointer-events-none"></div>

                    {/* Progress indicators */}
                    <div className="mb-10">
                        <ProgressLine firstStep={firstStep} secondStep={secondStep} />
                    </div>

                    {/* Step Content with cross-fade transition */}
                    <div className="relative z-10 mt-6 min-h-[320px]">
                        <AnimatePresence mode="wait">
                            {!firstStep && (
                                <motion.div
                                    key="step1"
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 10 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <FirstStepRegistration 
                                        state={state} 
                                        setFirstStep={setFirstStep} 
                                        onChangeHandler={onChangeHandler} 
                                    />
                                </motion.div>
                            )}

                            {firstStep && !secondStep && (
                                <motion.div
                                    key="step2"
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 10 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <SecondStepRegistration 
                                        state={state} 
                                        setSecondStep={setSecondStep} 
                                        setFirstStep={setFirstStep} 
                                        onChangeHandler={onChangeHandler} 
                                    />
                                </motion.div>
                            )}

                            {secondStep && (
                                <motion.div
                                    key="step3"
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 10 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <ThirdStepRegistration 
                                        register={register} 
                                        img={img} 
                                        setSecondStep={setSecondStep} 
                                        fileAttached={fileAttached} 
                                    />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Registration;
