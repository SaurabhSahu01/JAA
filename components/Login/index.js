import React from 'react'
import GoogleButton from "react-google-button";
import { EyeIcon } from '@heroicons/react/24/solid'
import { EyeSlashIcon } from '@heroicons/react/24/solid'

function Login() {
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
    return (
        <div className='h-screen flex flex-col items-center justify-center select-none'>
            <div className='rounded-sm w-fit h-fit py-10 px-5 flex flex-col items-center justify-center gap-5 bg-primarycolor'>
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
                    {logInProgress ? (<button className="mt-4 text-white rounded-lg py-2 bg-[#4e299e] font-semibold" disabled>
                        <span className="spinner-border spinner-border-sm mx-2" role="status" aria-hidden="true"></span>
                        Loading...
                    </button>) : ((!mailerr && values.username !== "" && values.password !== "") ? (<button type="submit" className="mt-4 text-white rounded-sm py-1 px-2 bg-primarycolor font-medium transition duration-150 hover:scale-105">
                        Sign In
                    </button>) : (<button className="mt-4 text-white rounded-sm py-1 px-2 bg-primarycolor font-medium cursor-not-allowed" disabled>
                        Sign In
                    </button>))}
                    <span className="text-center text-sm my-3 cursor-default">
                        Don&apos;t have an account? <button
                            className=" text-blue-600 cursor-pointer"
                        >
                            sign up
                        </button>
                    </span>
                </div>
                <GoogleButton className='mx-auto m-2' />
            </div>
        </div>
    )
}

export default Login