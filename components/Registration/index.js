import Link from 'next/link';
import React, { useState } from 'react'
import Input from './Input';
import Select from './Select';

const userInfoField = [
    { label: "firstName", type: "text", id: 'firstName', placeholder: "FirstName" },
    { label: "lastName", type: "text", id: 'lastName', placeholder: "lastName" },
    {
        label: "Gender", id: 'gender', option: [
            { value: "", text: "Select Gender" },
            { value: "male", text: "Male" },
            { value: "female", text: "Female" },
        ]
    },
    { label: "Date of Birth", type: "date", id: 'bod' },
    { label: "Phone No.", type: "number", id: 'number', placeholder: "Phone Number" },
    // { label: "Email", type: "email", id: 'email', placeholder: "E-mail" },
]

const schoolInfoField = [
    {
        label: "school", id: "school", option: [
            { value: "", text: "Select School" },
            { value: "soe", text: "School of Engineering" },
            { value: "soe", text: "School of Engineering" },
            { value: "soe", text: "School of Engineering" },
            { value: "soe", text: "School of Engineering" },
            { value: "soe", text: "School of Engineering" },
        ]
    },
    {
        label: "Program", id: "program", option: [
            { value: "", text: "Select Program" },
            { value: "btech", text: "B.Tech" },
            { value: "bsc", text: "B.Sc" },
            { value: "ba", text: "B.Art" },
        ]
    },
    {
        label: "Hostel", id: "hostel", option: [
            { value: "", text: "Select Hostel" },
            { value: "mahimandvi", text: "Mahi-Mandvi" },
            { value: "lohit", text: "Lohit" },
            { value: "periyar", text: "Periyar" },
            { value: "satulaj", text: "Satulaj" },
            { value: "ganga", text: "Ganga" },
        ]
    },
    {
        label: "Joining Year", id: "joiningyear", option: [
            { value: "", text: "Year of Joining" },
            { value: "2018", text: "2018" },
            { value: "2019", text: "2019" },
            { value: "2020", text: "2020" },
            { value: "2021", text: "2021" },
            { value: "2022", text: "2022" },
            { value: "2023", text: "2023" },
            { value: "2024", text: "2024" },
        ]
    },
    {
        label: "Graduation Year", id: "graduationyear", option: [
            { value: "", text: "Year of Graduation" },
            { value: "2023", text: "2023" },
            { value: "2024", text: "2024" },
            { value: "2025", text: "2025" },
            { value: "2026", text: "2026" },
            { value: "2027", text: "2027" },
        ]
    },
]

const Registration = () => {
    const [firstStep, setFirstStep] = useState(false);
    const [secondStep, setSecondStep] = useState(false);
    const [thirdStep, setThirdStep] = useState(false);
    const [state, setvalue] = React.useState({
        firstName: "",
        lastName: "",
        number: "",
        gender: "",
        bod: "",
        school: "",
        program: "",
        hostel: "",
        joiningyear: "",
        graduationyear: "",
    });
    const [img, setimg] = useState(null);

    const onChangeHandler = (e) => {
        let value = e.target.value;
        let id = e.target.id;
        setvalue({ ...state, [id]: value });
    }

    const firstStepDone = (e) => {
        e.preventDefault();
        console.log(state);
        setFirstStep(true);
    }
    const secondStepDone = (e) => {
        e.preventDefault();
        console.log(state);
        setSecondStep(true);
    }


    //*************************************************************************************************************************** */

    const register = async (e) => {
        e.preventDefault();
        // final registration
        const formData = new FormData();

        if (img) {
            formData.append('image', img);
        }
        formData.append('firstName', state.firstName);
        formData.append('lastName', state.lastName);
        formData.append('number', state.number);
        formData.append('bod', state.bod);
        formData.append('gender', state.gender);
        formData.append('school', state.school);
        formData.append('program', state.program);
        formData.append('hostel', state.hostel);
        formData.append('graduationyear', state.graduationyear);
        formData.append('joiningyear', state.joiningyear);

        // await fetch('/api/createUser', {
        //     method: "POST",
        //     headers: {
        //         'authorization': `Bearer ${cookieCutter.get('atkn')}`
        //     },
        //     body: formData
        // }).then(res => res.json()).then(data => {
        //     console.log(data)
        //     setimg(null);
        //     setvalue({
        //         firstName: "",
        //         lastName: "",
        //         number: "",
        //         gender: "",
        //         bod: "",
        //         school: "",
        //         program: "",
        //         hostel: "",
        //         joiningyear: "",
        //         graduationyear: "",
        //     })
        // }).catch(err => {
        //     console.log(err);
        //     setLoading(false);
        // })
        // console.log(img);
        console.log(state)
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

    const topLine = () => {
        return (
            <div className='flex items-center justify-center pt-10'>
                <div className={`w-[55px] h-[55px] md:w-[65px] md:h-[65px] bg-blue-600  rounded-full flex items-center justify-center p-2`}>
                    {firstStep && <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-[75%] h-[75%] text-white">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    }
                </div>
                <div className={`w-[15%] h-2  ${firstStep ? "bg-blue-600" : "bg-gray-100"}`}></div>
                <div className={`w-[50px] h-[50px] md:w-[65px] md:h-[65px]  ${firstStep ? "bg-blue-600" : "bg-gray-100"} rounded-full flex items-center justify-center p-2`}>
                    {secondStep && <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-[75%] h-[75%] text-white">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>}
                </div>
                <div className={`w-[15%] h-2  ${secondStep ? "bg-blue-600" : "bg-gray-100"}`}></div>
                <div className={`w-[50px] h-[50px] md:w-[65px] md:h-[65px]  ${secondStep ? "bg-blue-600" : "bg-gray-100"} rounded-full flex items-center justify-center p-2`}>
                    {thirdStep && <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-[75%] h-[75%] text-white">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>}
                </div>
            </div>
        )
    }

    const firstStepRegistration = () => {
        return (
            <div className=''>
                <div className='text-xl font-semibold text-black m-4 ml-[5%]'>User Info</div>
                <form onSubmit={firstStepDone} className='flex flex-col items-center'>
                    <div className=' grid grid-cols-1 md:grid-cols-2 gap-4 w-[90%] mx-auto'>
                        {userInfoField.map((tag, index) => {
                            {/* console.log(tag); */ }
                            return (
                                <>

                                    {tag.type ? <Input key={index} data={tag} state={state} onChangeHandler={onChangeHandler} /> :
                                        <Select key={index} data={tag} state={state} onChangeHandler={onChangeHandler} />}

                                </>
                            )
                        })}
                    </div>
                    <button type='submit' className=' text-white bg-[#1B2D56] text-lg font-medium p-2 rounded-lg m-5 px-10'>Next</button>
                </form>

            </div>

        )
    }

    const secondStepRegistration = () => {
        return (
            <form onSubmit={secondStepDone} className='flex flex-col items-center min-h-[20rem]'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 w-[90%] mx-auto'>
                    {schoolInfoField.map((tag, index) => {
                        {/* console.log(tag); */ }
                        return (
                            <>

                                {tag.type ? <Input data={tag} state={state} onChangeHandler={onChangeHandler} /> :
                                    <Select data={tag} state={state} onChangeHandler={onChangeHandler} />}

                            </>
                        )
                    })}
                </div>
                <div className=' flex gap-3'>
                    <button className=' text-white bg-[#1B2D56] text-lg font-medium p-2 rounded-lg m-5 px-10' onClick={() => {
                        setFirstStep(false);
                    }}>Back</button>
                    <button type='submit' className=' text-white bg-[#1B2D56] text-lg font-medium p-2 rounded-lg m-5 px-10'>Next</button>
                </div>
            </form>
        )
    }

    const thirdStepRegistration = () => {
        return (
            <form onSubmit={register} className='flex flex-col min-h-[20rem] items-center justify-center'>
                <div className='flex flex-col items-center relative'>
                    <div className=" w-[200px] h-[200px]">
                        {img === null ? <img src="/login/lable.png" className='w-full h-full' alt="" /> : <img src={img} className='w-full h-full rounded-full' alt="" />}
                    </div>
                    <div className=" shrink-0 mt-6">
                        <input
                            type="file"
                            id="fileUploader"
                            className=' opacity-0 absolute top-10 right-0 w-10'
                            accept="image/jpeg, image/png, image/jpg"
                            onChange={fileAttached}
                        />
                        <label htmlFor="fileUploader" className=' p-2 bg-blue-400 rounded-lg  cursor-pointer'>
                            Upload Photo
                        </label>
                    </div>
                </div>
                <div className=' flex gap-2 md:gap-3'>
                    <button className=' text-white bg-[#1B2D56] text-lg font-medium rounded-lg m-4 md:m-5 p-3' onClick={() => {
                        setSecondStep(false);
                    }}>Back</button>
                    <button type='submit' className=' text-white bg-[#1B2D56] text-lg font-medium rounded-lg m-4 md:m-5 p-3'>Register</button>
                </div>
            </form>
        )
    }

    return (
        <div>
        <div style={{ backgroundImage: "url(/gallery/jnu/IMG-20220807-WA0013.jpg)" }} className='absolute w-full min-h-screen bg-cover top-0 right-0'></div>
            <div className='flex flex-col bg-cover bg-[#7f9ae5] bg-opacity-50 p-4 relative w-10/12 md:w-[30rem] mx-auto mt-10 shadow-lg rounded-lg'>
                {!firstStep && <Link href="/login" className='flex items-center text-blue-600 w-fit  absolute top-2 right-[5%] md:right-[12%]'>Already a member? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
                </Link>}
                {topLine()}
                <div className='w-[95%] m-4 mt-10'>
                    {!firstStep && firstStepRegistration()}
                    {firstStep && !secondStep && secondStepRegistration()}
                    {secondStep && thirdStepRegistration()}
                </div>
            </div>
        </div>
    )
}

export default Registration
