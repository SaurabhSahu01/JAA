import React from 'react';
import { sendEmailVerification } from "firebase/auth";
import { signupwithemail, loginwithemail, logout } from '@/src/utils/login';
import { useRouter } from 'next/router';
import { EyeIcon } from '@heroicons/react/24/solid'
import { EyeSlashIcon } from '@heroicons/react/24/solid'
import Image from 'next/image';
import { auth } from '@/src/utils/firebase';
import Loader from '../common/Loader';

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
        if (email.match(mailformat)) {
            return true;
        }
        else return false;
    }
    const handleEmail = (e) => {
        if (validateEmail(e.target.value)) {
            setvalidemail(true);
            setData({ ...data, email: e.target.value })
        }
        else {
            setvalidemail(false);
            setData({ ...data, email: "" })
        }
    }
    const handlePass = (e) => {
        if (e.target.value.length >= 6) {
            setData({ ...data, password: e.target.value });
        }
        else{
            setData({ ...data, password: "" });
        }
    }
    const handleShowPassword = (e) => {
        setData({ ...data, showPassword: !data.showPassword })
    }
    const signupHandler = (e) => {
        setSignUpProgress(true);
        e.preventDefault();
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
                                    }, 3000)
                                })
                        })
                })
        }, 2500);
    }
    return (
        <>
            <div className="w-full h-screen flex justify-center items-center gap-5">
                {verifyEmail ? <div className='fixed top-0 text-lg font-medium text-green-500 p-2 shadow-xl rounded-md'>
                    A verification mail has been sent to your email. Please verify and login again!
                </div> : <></>}
                <div className='xs:hidden lg:block'>
                    <Image
                        src="/login/signupsvg.svg"
                        width={500}
                        height={500}
                        alt="sign up svg"
                    />
                </div>
                <div className="w-1/3 min-w-[300px] h-fit py-8 bg-slate-200 flex flex-col justify-center items-center gap-4">
                    <h1 className="text-3xl">Create Your Account</h1>
                    <div className="flex w-4/5 flex-col gap-2">
                        <div className="flex flex-col gap-1">
                            <h1>Email</h1>
                            <input
                                className={validEmail ? "text-primarycolor rounded-sm py-1 px-2 outline-none shadow-lg" : "text-primarycolor rounded-sm py-1 px-2 outline-none shadow-lg"}
                                type="email"
                                autoComplete="off"
                                name="email"
                                onChange={handleEmail}
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <h1>Password </h1>
                            <div className="rounded-sm outline-none bg-white flex justify-end pl-2 place-items-center">
                                <input
                                    className="rounded-sm py-1 px-2 outline-none w-[100%] text-primarycolor"
                                    type={data.showPassword ? "text" : "password"}
                                    autoComplete="off"
                                    name="password"
                                    onChange={handlePass}
                                />
                                {data.showPassword ? (<EyeIcon className="w-[1.5rem] h-[1.5rem]" onClick={handleShowPassword}></EyeIcon>) : (<EyeSlashIcon onClick={handleShowPassword} className="w-[1.5rem] h-[1.5rem]"></EyeSlashIcon>)}
                            </div>
                        </div>
                        <div>
                            {!signUpProgress ? (validEmail && data.password !== "") ? (<button className="w-full text-white mt-4 rounded-lg py-2 bg-primarycolor" onClick={signupHandler}>
                                Sign Up
                            </button>) : (<button className="w-full text-white mt-4 rounded-lg py-2 bg-primarycolor/20 cursor-not-allowed" disabled>
                                Sign Up
                            </button>) : <div className='mt-4'><Loader color="#1B2D56" loading={signUpProgress} size={20}/></div>}
                        </div>
                        <span className="text-center text-sm my-3 cursor-default">
                            Already have an account? <button
                                className=" text-blue-600 cursor-pointer"
                                onClick={() => router.push('/login')}
                            >
                                Log In
                            </button>
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUp