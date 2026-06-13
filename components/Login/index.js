'use client';

import React from 'react'
import GoogleButton from "react-google-button";
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid'
import Image from 'next/image';
import { loginwithemail, loginwithgoogle, changeMaxAge } from '@/src/utils/login';
import { GoogleAuthProvider } from "firebase/auth";
import cookieCutter from "cookie-cutter";
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Loader from '../common/Loader';
import { motion } from 'framer-motion';

function Login() {
    const router = useRouter();
    const [loginerr, setloginerr] = React.useState(false);
    const [mailerr, setmailerr] = React.useState(false);
    const [logInProgress, setlogInProgress] = React.useState(false);
    const [values, setValues] = React.useState({
        username: "",
        password: "",
        showPassword: false
    });

    const validateEmail = (email) => {
        const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return !!email.match(mailformat);
    }
    const handleUsername = (e) => {
        setloginerr(false);
        if (validateEmail(e.target.value)) {
            setmailerr(false);
            setValues({ ...values, username: e.target.value })
        } else {
            setmailerr(true);
        }
    }
    const handlePassword = (e) => {
        setloginerr(false);
        e.target.value = e.target.value.replaceAll(" ", "");
        setValues({ ...values, password: e.target.value.replaceAll(" ", "") });
    }
    const handleShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword })
    }

    const isprofileSet = async () => {
        if (cookieCutter.get('profileSet')) {
            router.push('/');
        } else {
            fetch('/api/isprofileset', {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    "authorization": `Bearer ${cookieCutter.get('userToken')} ${cookieCutter.get('refreshToken')}`
                }
            }).then((res) => res.json()).then((res) => {
                setlogInProgress(false);
                if (res.set) {
                    cookieCutter.set('profileSet', true);
                    changeMaxAge('profileSet', 2 * 3600);
                    setTimeout(() => { router.push('/'); }, 100);
                } else {
                    cookieCutter.set('profileSet', false);
                    changeMaxAge('profileSet', 2 * 3600);
                    router.push('/registration')
                }
            }).catch(() => {
                setlogInProgress(false);
            })
        }
    }

    const handleLogin = async (e) => {
        e.preventDefault();
        setlogInProgress(true);
        await loginwithemail(values.username, values.password)
            .then((userCredential) => {
                const user = userCredential.user;
                cookieCutter.set('userToken', user.accessToken);
                cookieCutter.set('uid', user.uid);
                cookieCutter.set('refreshToken', user.refreshToken);
                changeMaxAge('userToken', 2 * 3600);
                changeMaxAge('uid', 2 * 3600);
                changeMaxAge('refreshToken', 2 * 3600);
                setlogInProgress(false);
                fetch('/api/adduser', {
                    method: "POST",
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                        "authorization": `Bearer ${cookieCutter.get('userToken')} ${cookieCutter.get('refreshToken')}`
                    },
                    body: JSON.stringify({
                        creationTime: new Date().toGMTString(),
                        signInType: "email"
                    })
                }).then((res) => res.json())
                    .then(() => { isprofileSet(); })
                    .catch(() => { setlogInProgress(false); })
            })
            .catch(() => {
                setlogInProgress(false);
                setloginerr(true);
            })
    }

    const handleGoogleLogin = () => {
        setlogInProgress(true);
        loginwithgoogle()
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const user = result.user;
                cookieCutter.set('userToken', user.accessToken);
                cookieCutter.set('uid', user.uid);
                cookieCutter.set('refreshToken', user.refreshToken);
                changeMaxAge('userToken', 2 * 3600);
                changeMaxAge('uid', 2 * 3600);
                changeMaxAge('refreshToken', 2 * 3600);
                fetch('/api/adduser', {
                    method: "POST",
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                        "authorization": `Bearer ${cookieCutter.get('userToken')} ${cookieCutter.get('refreshToken')}`
                    },
                    body: JSON.stringify({
                        creationTime: new Date().toGMTString(),
                        signInType: "google"
                    })
                }).then((res) => res.json())
                    .then(() => { isprofileSet(); })
                    .catch(() => { setlogInProgress(false); })
            }).catch(() => { setlogInProgress(false); });
    };

    return (
        <div className='min-h-[88vh] flex items-center justify-center relative overflow-hidden px-6'>
            {/* Animated Background */}
            <div className="absolute inset-0 bg-mesh-gradient"></div>
            <div className="absolute inset-0 dot-grid opacity-30"></div>

            {/* Floating shapes */}
            <motion.div
                animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-20 right-[15%] w-64 h-64 bg-gradient-to-br from-jnu-blue/8 to-transparent rounded-3xl hidden md:block"
            />
            <motion.div
                animate={{ y: [0, 15, 0], rotate: [0, -3, 0] }}
                transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-20 left-[10%] w-48 h-48 bg-gradient-to-br from-jnu-gold/8 to-transparent rounded-full hidden md:block"
            />

            {/* Loader */}
            {logInProgress && (
                <div className='fixed inset-0 z-[200] backdrop-blur-md bg-white/40 flex items-center justify-center'>
                    <Loader color="#1B2D56" loading={logInProgress} size={70} />
                </div>
            )}

            {/* Login Card */}
            <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                className='relative z-10 w-full max-w-md'
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
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                            </svg>
                        </motion.div>
                        <h2 className="text-2xl font-display font-bold text-jnu-blue">Welcome Back</h2>
                        <p className="text-gray-400 text-sm mt-1">Sign in to the JNU Alumni Network</p>
                    </div>

                    {/* Form */}
                    <div className='flex flex-col gap-4 relative z-10'>
                        {/* Email */}
                        <div className="group">
                            <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5 block">Email</label>
                            <div className="bg-gray-50/80 border border-gray-200 rounded-xl py-3 px-4 flex items-center focus-within:ring-2 focus-within:ring-jnu-blue/15 focus-within:border-jnu-blue/30 transition-all">
                                <svg className="w-5 h-5 text-gray-300 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
                                <input
                                    className="outline-none bg-transparent w-full text-gray-800 placeholder-gray-400 text-sm"
                                    type="email" autoComplete="off" placeholder="your@email.com"
                                    onChange={handleUsername}
                                />
                            </div>
                        </div>

                        {/* Password */}
                        <div className="group">
                            <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5 block">Password</label>
                            <div className="bg-gray-50/80 border border-gray-200 rounded-xl py-3 px-4 flex items-center focus-within:ring-2 focus-within:ring-jnu-blue/15 focus-within:border-jnu-blue/30 transition-all">
                                <svg className="w-5 h-5 text-gray-300 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>
                                <input
                                    className="outline-none bg-transparent w-full text-gray-800 placeholder-gray-400 text-sm"
                                    placeholder="••••••••" autoComplete="off"
                                    type={values.showPassword ? "text" : "password"}
                                    onChange={handlePassword}
                                />
                                <button type="button" onClick={handleShowPassword} className="text-gray-400 hover:text-jnu-blue transition-colors ml-2">
                                    {values.showPassword ? <EyeIcon className="w-5 h-5" /> : <EyeSlashIcon className="w-5 h-5" />}
                                </button>
                            </div>
                        </div>

                        {/* Errors */}
                        {(mailerr || loginerr) && (
                            <motion.div initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} className="text-sm">
                                {mailerr && <span className="text-red-500 block">Please enter a valid email address.</span>}
                                {loginerr && <span className="text-red-500 block">Incorrect email or password.</span>}
                            </motion.div>
                        )}

                        {/* Submit */}
                        {!mailerr && values.username !== "" && values.password !== "" ? (
                            <button type="submit" className="btn-primary w-full !rounded-xl mt-2" onClick={handleLogin}>
                                Sign In
                            </button>
                        ) : (
                            <button className="w-full py-4 bg-gray-100 text-gray-400 font-semibold rounded-xl cursor-not-allowed mt-2" disabled>
                                Sign In
                            </button>
                        )}

                        {/* Divider */}
                        <div className="relative flex items-center my-2">
                            <div className="flex-grow border-t border-gray-200"></div>
                            <span className="flex-shrink-0 mx-4 text-gray-400 text-xs font-medium">Or continue with</span>
                            <div className="flex-grow border-t border-gray-200"></div>
                        </div>

                        {/* Google */}
                        <div className="flex justify-center w-full">
                            <GoogleButton
                                className='!w-full !rounded-xl !shadow-none !border !border-gray-200 hover:!border-gray-300 hover:!shadow-sm transition-all'
                                label="Sign in with Google"
                                onClick={handleGoogleLogin}
                            />
                        </div>

                        {/* Register Link */}
                        <p className="text-center text-sm text-gray-500 mt-4">
                            Don&apos;t have an account?{' '}
                            <Link href="/registration" className="text-jnu-blue font-semibold hover:underline">
                                Register now
                            </Link>
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default Login