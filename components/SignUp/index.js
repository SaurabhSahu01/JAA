'use client';

import React from 'react';
import { sendEmailVerification } from "firebase/auth";
import { signupwithemail, loginwithemail, logout } from '@/src/utils/login';
import { useRouter } from 'next/navigation';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import { auth } from '@/src/utils/firebase';
import Loader from '../common/Loader';
import { motion } from 'framer-motion';
import Link from 'next/link';

function SignUp() {
    const router = useRouter();

    const [data, setData] = React.useState({
        email: "",
        password: "",
        showPassword: false
    });
    const [validEmail, setvalidemail] = React.useState(false);
    const [verifyEmail, setVerifyEmail] = React.useState(false);
    const [signUpProgress, setSignUpProgress] = React.useState(false);

    const validateEmail = (email) => {
        const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return !!email.match(mailformat);
    };

    const handleEmail = (e) => {
        const email = e.target.value;
        if (validateEmail(email)) {
            setvalidemail(true);
            setData((prev) => ({ ...prev, email }));
        } else {
            setvalidemail(false);
            setData((prev) => ({ ...prev, email: "" }));
        }
    };

    const handlePass = (e) => {
        const password = e.target.value;
        if (password.length >= 6) {
            setData((prev) => ({ ...prev, password }));
        } else {
            setData((prev) => ({ ...prev, password: "" }));
        }
    };

    const handleShowPassword = () => {
        setData((prev) => ({ ...prev, showPassword: !prev.showPassword }));
    };

    const signupHandler = (e) => {
        e.preventDefault();
        setSignUpProgress(true);
        setTimeout(async () => {
            await signupwithemail(data.email, data.password)
                .then(() => {
                    loginwithemail(data.email, data.password)
                        .then(() => {
                            sendEmailVerification(auth.currentUser)
                                .then(() => {
                                    setSignUpProgress(false);
                                    setVerifyEmail(true);
                                    logout();
                                    setTimeout(() => {
                                        setVerifyEmail(false);
                                        router.push('/login');
                                    }, 3000);
                                });
                        });
                })
                .catch(() => {
                    setSignUpProgress(false);
                });
        }, 2000);
    };

    return (
        <div className="min-h-[88vh] flex items-center justify-center relative overflow-hidden px-6 py-12">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-mesh-gradient"></div>
            <div className="absolute inset-0 dot-grid opacity-30"></div>

            {/* Floating shapes */}
            <motion.div
                animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-20 left-[15%] w-64 h-64 bg-gradient-to-br from-jnu-blue/8 to-transparent rounded-3xl hidden md:block"
            />
            <motion.div
                animate={{ y: [0, 15, 0], rotate: [0, -3, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-20 right-[10%] w-48 h-48 bg-gradient-to-br from-jnu-gold/8 to-transparent rounded-full hidden md:block"
            />

            {/* Notification Banner */}
            {verifyEmail && (
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="fixed top-24 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-md px-4"
                >
                    <div className="bg-emerald-500 text-white font-medium p-4 shadow-2xl rounded-2xl text-center border border-emerald-400/20 backdrop-blur-md">
                        A verification mail has been sent to your email. Please verify and login again!
                    </div>
                </motion.div>
            )}

            {/* Loader overlay */}
            {signUpProgress && (
                <div className="fixed inset-0 z-[200] backdrop-blur-md bg-white/40 flex items-center justify-center">
                    <Loader color="#1B2D56" loading={signUpProgress} size={70} />
                </div>
            )}

            <div className="relative z-10 w-full max-w-5xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                {/* Left: Premium SVG Graphic */}
                <div className="hidden lg:block lg:col-span-6">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-jnu-blue/5 to-jnu-gold/5 rounded-3xl blur-3xl scale-110"></div>
                        <Image
                            src="/login/signupsvg.svg"
                            width={500}
                            height={500}
                            alt="sign up svg"
                            className="relative z-10 w-full max-w-[480px] mx-auto filter drop-shadow-xl"
                        />
                    </motion.div>
                </div>

                {/* Right: Sign Up Form Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="w-full lg:col-span-6 max-w-md mx-auto"
                >
                    <div className="glass-card p-10 shadow-glass-xl relative overflow-hidden">
                        {/* Back to Home */}
                        <Link href="/" className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-400 hover:text-jnu-blue transition-colors mb-6 group">
                            <span className="inline-block transition-transform group-hover:-translate-x-1">&larr;</span> Back to Home
                        </Link>
                        {/* Decorative glow */}
                        <div className="absolute -top-20 -right-20 w-40 h-40 bg-jnu-blue/8 rounded-full blur-3xl pointer-events-none"></div>
                        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-jnu-red/5 rounded-full blur-3xl pointer-events-none"></div>

                        {/* Header */}
                        <div className="text-center relative z-10 mb-8">
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.2, type: "spring", bounce: 0.4 }}
                                className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-jnu-blue to-jnu-blue-light flex items-center justify-center shadow-glow-blue"
                            >
                                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                                </svg>
                            </motion.div>
                            <h2 className="text-2xl font-display font-bold text-jnu-blue">Create Your Account</h2>
                            <p className="text-gray-400 text-sm mt-1">Join the prestigious JNU Alumni Network</p>
                        </div>

                        {/* Form fields */}
                        <div className="flex flex-col gap-4 relative z-10">
                            {/* Email */}
                            <div className="group">
                                <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5 block">Email Address</label>
                                <div className="bg-gray-50/80 border border-gray-200 rounded-xl py-3 px-4 flex items-center focus-within:ring-2 focus-within:ring-jnu-blue/15 focus-within:border-jnu-blue/30 transition-all">
                                    <svg className="w-5 h-5 text-gray-300 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                    </svg>
                                    <input
                                        className="outline-none bg-transparent w-full text-gray-800 placeholder-gray-400 text-sm"
                                        type="email"
                                        autoComplete="off"
                                        placeholder="your@email.com"
                                        onChange={handleEmail}
                                    />
                                </div>
                            </div>

                            {/* Password */}
                            <div className="group">
                                <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5 block">Password</label>
                                <div className="bg-gray-50/80 border border-gray-200 rounded-xl py-3 px-4 flex items-center focus-within:ring-2 focus-within:ring-jnu-blue/15 focus-within:border-jnu-blue/30 transition-all">
                                    <svg className="w-5 h-5 text-gray-300 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                                    </svg>
                                    <input
                                        className="outline-none bg-transparent w-full text-gray-800 placeholder-gray-400 text-sm"
                                        placeholder="Min. 6 characters"
                                        autoComplete="off"
                                        type={data.showPassword ? "text" : "password"}
                                        onChange={handlePass}
                                    />
                                    <button type="button" onClick={handleShowPassword} className="text-gray-400 hover:text-jnu-blue transition-colors ml-2">
                                        {data.showPassword ? <EyeIcon className="w-5 h-5" /> : <EyeSlashIcon className="w-5 h-5" />}
                                    </button>
                                </div>
                            </div>

                            {/* Submit Button */}
                            {validEmail && data.password !== "" ? (
                                <button
                                    type="submit"
                                    onClick={signupHandler}
                                    className="btn-primary w-full !rounded-xl mt-4"
                                >
                                    Create Account
                                </button>
                            ) : (
                                <button
                                    className="w-full py-4 bg-gray-100 text-gray-400 font-semibold rounded-xl cursor-not-allowed mt-4"
                                    disabled
                                >
                                    Create Account
                                </button>
                            )}

                            {/* Login redirect link */}
                            <p className="text-center text-sm text-gray-500 mt-4">
                                Already have an account?{' '}
                                <Link href="/login" className="text-jnu-blue font-semibold hover:underline">
                                    Log In
                                </Link>
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default SignUp;