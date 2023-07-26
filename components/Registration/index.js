import Link from 'next/link';
import React, { useState } from 'react'
import cookieCutter from "cookie-cutter"
import { useRouter } from 'next/router';
import ProgressLine from './progressLine/ProgressLine';
import FirstStepRegistration from './firstStep/FirstStepRegistration';
import SecondStepRegistration from './secondStep.js/SecondStepRegistration';
import ThirdStepRegistration from './thirdStep/ThirdStepRegistration';

const Registration = () => {
    const router = useRouter();
    const [firstStep, setFirstStep] = useState(false);
    const [secondStep, setSecondStep] = useState(false);
    const [thirdStep, setThirdStep] = useState(false);
    const [registered, setRegistered] = useState(false);
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

    const onChangeHandler = (e) => {
        let value = e.target.value;
        let id = e.target.id;
        setvalue({ ...state, [id]: value });
    }


    //*************************************************************************************************************************** */

    const register = async (e) => {
        e.preventDefault();
        console.log(state);
        // final registration
        const formData = new FormData();
        if (img) {
            formData.append('photo', img);
        }
        Object.keys(state).forEach((key) => {
            //console.log(key, state[key])
            formData.append(key, state[key]);
        });

        await fetch('/api/register', {
            method: "POST",
            headers: {
                'authorization': `Bearer ${cookieCutter.get('userToken')}`
            },
            body: formData
        }).then(res => res.json()).then(data => {
            console.log(data)
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
            })
            setRegistered(true);
            setTimeout(() => {
                setRegistered(false);
                router.push("/")
            }, 3000)
        }).catch(err => {
            console.log("somthing not working ", err);
        })
    }

    const fileAttached = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setimg(reader.result);
            };
            reader.readAsDataURL(file);
        }
    }

    return (
        <div>
            {registered ? <div className='fixed top-0 right-2 text-lg font-medium text-green-500 p-2 shadow-xl rounded-md z-50'>
                Registered all your details successfully
            </div> : <></>}
            <div style={{ backgroundImage: "url(/gallery/jnu/IMG-20220807-WA0013.jpg)" }} className='absolute w-full min-h-screen bg-cover top-0 right-0'></div>
            <div className='flex flex-col bg-cover bg-[#7f9ae5] bg-opacity-50 p-4 relative w-10/12 md:w-[30rem] mx-auto mt-10 shadow-lg rounded-lg'>
                <ProgressLine firstStep={firstStep} secondStep={secondStep} thirdStep={thirdStep}/>
                <div className='w-[95%] m-4 mt-10'>
                    {!firstStep && <FirstStepRegistration state={state} setFirstStep={setFirstStep} onChangeHandler={onChangeHandler}/>}
                    {firstStep && !secondStep && <SecondStepRegistration state={state} setSecondStep={setSecondStep} setFirstStep={setFirstStep} onChangeHandler={onChangeHandler}/>}
                    {secondStep && <ThirdStepRegistration register={register} img={img} setSecondStep={setSecondStep} fileAttached={fileAttached} />}
                </div>
            </div>
        </div>
    )
}

export default Registration
