import React from 'react'
import GoogleButton from "react-google-button";
import { EyeIcon } from '@heroicons/react/24/solid'
import { EyeSlashIcon } from '@heroicons/react/24/solid'
import Image from 'next/image';
import { loginwithemail, loginwithgoogle, changeMaxAge } from '@/src/utils/login';
import { GoogleAuthProvider } from "firebase/auth";
import cookieCutter from "cookie-cutter";
import { useRouter } from 'next/router';
import Loader from '../common/Loader';

function Login() {
    const router = useRouter();
    // states
    const [loginerr, setloginerr] = React.useState(false);
    const [mailerr, setmailerr] = React.useState(false);
    const [logInProgress, setlogInProgress] = React.useState(false);
    const [values, setValues] = React.useState({
        username: "",
        password: "",
        showPassword: false
    });

    // functions
    const validateEmail = (email) => {
        const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (email.match(mailformat)) {
            return true;
        }
        else return false;
    }
    const handleUsername = (e) => {
        setloginerr(false);
        if (validateEmail(e.target.value)) {
            setmailerr(false);
            setValues({ ...values, username: e.target.value })
        }
        else {
            setmailerr(true);
        }
    }
    const handlePassword = (e) => {
        setloginerr(false);
        e.target.value = e.target.value.replaceAll(" ", "");
        setValues({ ...values, password: e.target.value.replaceAll(" ", "") });
    }
    const handleShowPassword = (e) => {
        setValues({ ...values, showPassword: !values.showPassword })
    }

    const isprofileSet = async () => {
        // check for the cookies if the profile is set or not, then make the api call
        if (cookieCutter.get('profileSet')) {
            router.push('/');
        }
        else {
            fetch('/api/isprofileset', {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    "authorization": `Bearer ${cookieCutter.get('userToken')} ${cookieCutter.get('refreshToken')}`

                }
            }).then((res) => {
                const data = res.json()
                return data
            }).then((res) => {
                setlogInProgress(false);
                if (res.set) {
                    cookieCutter.set('profileSet', true);
                    changeMaxAge('profileSet', 30 * 24 * 3600);
                    setTimeout(() => {
                        router.push('/');
                    }, 100);
                }
                else {
                    cookieCutter.set('profileSet', false);
                    changeMaxAge('profileSet', 30 * 24 * 3600);
                    router.push('/registration')
                }
            })
                .catch((err) => {
                    setlogInProgress(false);
                    console.log("error ")
                })
        }
    }
    const handleLogin = async (e) => {
        e.preventDefault();
        setlogInProgress(true);
        await loginwithemail(values.username, values.password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log("user = ", user);
                cookieCutter.set('userToken', user.accessToken);
                cookieCutter.set('uid', user.uid);
                cookieCutter.set('refreshToken', user.refreshToken);
                changeMaxAge('userToken', 30 * 24 * 3600);
                changeMaxAge('uid', 30 * 24 * 3600);
                changeMaxAge('refreshToken', 30 * 24 * 3600);
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
                    .then(response => {
                        console.log(response);
                        // router.push("/");
                        isprofileSet();
                    })
                    .catch(err => {
                        setlogInProgress(false);
                        console.log(err);
                    })
            })
            .catch((err) => {
                setlogInProgress(false);
                setloginerr(true);
            })
    }
    return (
        <div className='h-screen flex md:flex-row xs:flex-col items-center justify-center gap-[4rem] select-none'>
            {
                logInProgress ? <div className='h-screen w-full absolute top-0 right-0 z-[200] backdrop-blur-sm'>
                    <Loader color="#1B2D56" loading={logInProgress} size={70} />
                </div> : <></>
            }
            <div className='rounded-sm w-fit h-fit py-10 px-5 flex flex-col items-center justify-center gap-5 bg-primarycolor shadow-xl'>
                <div className='min-w-[300px] h-[300px] px-5 py-5 flex flex-col gap-4 justify-center items-center bg-slate-100 box-border'>
                    <div className="w-full rounded-sm py-1 outline-none bg-white flex justify-between items-center shadow-lg">
                        <input
                            className="outline-none px-2 w-full"
                            type="email"
                            autoComplete="off"
                            placeholder="email"
                            name="email"
                            onChange={handleUsername}
                        />
                    </div>

                    <div className="w-full rounded-sm py-1 outline-none bg-white flex justify-between items-center shadow-lg">
                        <input
                            className="outline-none px-2 w-full"
                            placeholder="password"
                            autoComplete="off"
                            type={values.showPassword ? "text" : "password"}
                            name="password"
                            onChange={handlePassword}
                        />
                        {values.showPassword ? (<EyeIcon className="w-[1rem] h-[1rem]" onClick={handleShowPassword}></EyeIcon>) : (<EyeSlashIcon onClick={handleShowPassword} className="w-[1rem] h-[1rem]"></EyeSlashIcon>)}
                    </div>

                    {mailerr ? (<span className="text-red-500">Invalid email!</span>) : (<></>)}
                    {loginerr ? (<span className="text-red-500">Incorrect email or password!</span>) : (<></>)}
                    {logInProgress ? (<div><Loader color="#1B2D56" loading={logInProgress} size={20}/></div>) : ((!mailerr && values.username !== "" && values.password !== "") ? (<button type="submit" className="mt-4 text-white rounded-sm py-1 px-3 bg-primarycolor transition duration-150 hover:scale-105" onClick={handleLogin}>
                        Sign In
                    </button>) : (<button className="mt-4 text-white rounded-sm py-1 px-3 bg-primarycolor cursor-not-allowed" disabled>
                        Sign In
                    </button>))}
                    <span className="text-center text-sm my-3 cursor-default">
                        Don&apos;t have an account? <button
                            className=" text-blue-600 cursor-pointer"
                            onClick={() => router.push('/signup')}
                        >
                            Sign Up
                        </button>
                    </span>
                </div>
                <GoogleButton className='mx-auto m-2' onClick={() => {
                    loginwithgoogle()
                        .then((result) => {
                            // This gives you a Google Access Token. You can use it to access the Google API.
                            const credential = GoogleAuthProvider.credentialFromResult(result);
                            const token = credential.accessToken;
                            console.log("token = ", token);

                            // The signed-in user info.
                            const user = result.user;
                            console.log("user = ", user);

                            // setting cookies 
                            cookieCutter.set('userToken', user.accessToken);
                            cookieCutter.set('uid', user.uid);
                            cookieCutter.set('refreshToken', user.refreshToken);
                            changeMaxAge('userToken', 30 * 24 * 3600);
                            changeMaxAge('uid', 30 * 24 * 3600);
                            changeMaxAge('refreshToken', 30 * 24 * 3600);
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
                                .then(response => {
                                    console.log(response);
                                    isprofileSet();
                                })
                                .catch(err => {
                                    setlogInProgress(false);
                                    console.log(err);
                                })
                        }).catch((error) => {
                            setlogInProgress(false);
                            // Handle Errors here.
                            const errorCode = error.code;
                            const errorMessage = error.message;
                            // The email of the user's account used.
                            const email = error.customData.email;
                            // The AuthCredential type that was used.
                            const credential = GoogleAuthProvider.credentialFromError(error);
                            // ...
                        });
                }} />
            </div>
            <div className='lg:block xs:hidden'>
                <Image
                    src="/login/loginsvg.svg"
                    width={500}
                    height={500}
                    alt="login svg"
                />
            </div>
        </div>
    )
}

export default Login