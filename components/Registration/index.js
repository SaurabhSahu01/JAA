import React, { useState } from 'react'

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

    const register = (e) => {
        e.preventDefault();
        // final registration
        console.log(state)
    }

    const fileAttached = (event) => {
        if (event.target.files && event.target.files[0]) {
            setimg(URL.createObjectURL(event.target.files[0]));
        }
        console.log(img);
    }

    const topLine = () => {
        return (
            <div className='flex items-center justify-center pt-10'>
                <div className={`w-[50px] h-[50px] md:w-[75px] md:h-[75px] bg-blue-600  rounded-full flex items-center justify-center p-2`}>
                    {firstStep && <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-[75%] h-[75%] text-white">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    }
                </div>
                <div className={`w-[30%] h-2  ${firstStep ? "bg-blue-600" : "bg-gray-100"}`}></div>
                <div className={`w-[50px] h-[50px] md:w-[75px] md:h-[75px]  ${firstStep ? "bg-blue-600" : "bg-gray-100"} rounded-full flex items-center justify-center p-2`}>
                    {secondStep && <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-[75%] h-[75%] text-white">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>}
                </div>
                <div className={`w-[30%] h-2  ${secondStep ? "bg-blue-600" : "bg-gray-100"}`}></div>
                <div className={`w-[50px] h-[50px] md:w-[75px] md:h-[75px]  ${secondStep ? "bg-blue-600" : "bg-gray-100"} rounded-full flex items-center justify-center p-2`}>
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
                        <input
                            type="text"
                            id='firstName'
                            value={state.firstName}
                            placeholder="FirstName*"
                            className="w-full h-14 bg-gray-200 rounded-xl outline-none border-none px-5 text-gray-400"
                            autoComplete="off"
                            required
                            onChange={onChangeHandler}
                        />
                        <input
                            type="text"
                            id='lastName'
                            value={state.lastName}
                            placeholder="LastName*"
                            className="w-full h-14 bg-gray-200 rounded-xl outline-none border-none px-5 text-gray-400"
                            autoComplete="off"
                            required
                            onChange={onChangeHandler}
                        />
                        <select
                            class=" text-gray-400  rounded-xl  bg-gray-200 block w-full px-5 p-3  placeholder-gray-400 outline-none border-none "
                            id='gender'
                            value={state.gender}
                            onChange={onChangeHandler}
                            required
                            >
                            <option value="" selected>Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                        <input
                            type="date"
                            id='bod'
                            value={state.bod}
                            className="w-full h-14 bg-gray-200 rounded-xl outline-none border-none px-5 text-gray-400"
                            autoComplete="off"
                            required
                            onChange={onChangeHandler}
                        />
                        <input
                            type="number"
                            id='number'
                            value={state.number}
                            placeholder="Mobile Number"
                            className="w-full h-14 bg-gray-200 rounded-xl outline-none border-none px-5 text-gray-400 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                            autoComplete="off"
                            onChange={onChangeHandler}
                        />
                        {/* <input
                            type="LastName"
                            placeholder="dthdhfd..."
                            className="w-full h-14 bg-gray-200 rounded-xl outline-none border-none px-5 text-gray-400"
                            autoComplete="off"
                            onChange={onChangeHandler}
                        /> */}
                    </div>
                    <button type='submit' className=' text-white bg-[#1B2D56] text-lg font-medium p-2 rounded-lg m-5 px-10'>Next</button>
                </form>

            </div>

        )
    }

    const secondStepRegistration = () => {
        return (
            <form onSubmit={secondStepDone} className='flex flex-col items-center '>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 w-[90%] mx-auto'>
                    <select class=" text-gray-400  rounded-xl  bg-gray-200 block w-full px-5 p-3 placeholder-gray-400 outline-none border-none " id='school' value={state.school} onChange={onChangeHandler} required>
                        <option value="" selected>Select School</option>
                        <option value="soe">School of Engineering</option>
                        <option value="sss">School of Engineering</option>
                        <option value="sss2">School of Engineering</option>
                        <option value="sss3">School of Engineering</option>
                    </select>
                    <select class=" text-gray-400 rounded-xl  bg-gray-200 block w-full px-5 p-3  placeholder-gray-400 outline-none border-none " id='program' value={state.program} onChange={onChangeHandler} required>
                        <option value="" selected>Select Program</option>
                        <option value="btech">B.Tech</option>
                        <option value="bsc">B.Tech</option>
                        <option value="bsc1">B.Tech</option>
                        <option value="bsc2">B.Tech</option>
                    </select>
                    <select class=" text-gray-400  rounded-xl  bg-gray-200 block w-full px-5 p-3  placeholder-gray-400 outline-none border-none " id='hostel' value={state.hostel} onChange={onChangeHandler} required>
                        <option value="" selected>Select Hostel</option>
                        <option value="mahimandvi">MahiMandvi</option>
                        <option value="satluj">Satluj</option>
                        <option value="lohit">Lohit</option>
                        <option value="kaveri">Kaveri</option>
                    </select>
                    <select class=" text-gray-400  rounded-xl  bg-gray-200 block w-full px-5 p-3  placeholder-gray-400 outline-none border-none " id='joiningyear' value={state.joiningyear} onChange={onChangeHandler} required>
                        <option value="" selected>Year Of Joining</option>
                        <option value="2018">2018</option>
                        <option value="2019">2019</option>
                        <option value="2020">2020</option>
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                        <option value="2023">2023</option>
                        <option value="2024">2024</option>
                    </select>
                    <select class=" text-gray-400  rounded-xl  bg-gray-200 block w-full px-5 p-3 placeholder-gray-400 outline-none border-none " id='graduationyear' value={state.graduationyear} onChange={onChangeHandler} required>
                        <option value="" selected>Selected Year of Graduation</option>
                        <option value="2020">2020</option>
                        <option value="2021">2021</option>
                    </select>
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
            <form onSubmit={register} className='flex flex-col items-center justify-center'>
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
                <div className=' flex gap-3'>
                    <button className=' text-white bg-[#1B2D56] text-lg font-medium p-2 rounded-lg m-5 px-10' onClick={() => {
                        setSecondStep(false);
                    }}>Back</button>
                    <button type='submit' className=' text-white bg-[#1B2D56] text-lg font-medium p-2 rounded-lg m-5 px-10'>Register</button>
                </div>
            </form>
        )
    }

    return (
        <div className='flex flex-col text-black bg-[#cad3eb] p-4 relative w-11/12 mx-auto mt-10 shadow-lg rounded-lg'>
            {!firstStep && <div className='flex items-center text-blue-600 w-fit  absolute top-2 right-[5%] md:right-[12%]'>Already a member? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
            </div>}
            {topLine()}
            <div className='w-[95%] m-4 mt-10'>
                {!firstStep && firstStepRegistration()}
                {firstStep && !secondStep && secondStepRegistration()}
                {secondStep && thirdStepRegistration()}
            </div>

        </div>
    )
}

export default Registration
