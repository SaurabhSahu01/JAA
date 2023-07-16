import React, { useEffect, useState } from 'react';

const field = [
    { label: "Name", type: "text", id: 'firstName', placeholder: "FirstName" },
    {
        label: "Gender", id: 'gender', option: [
            { value: "", text: "Select Gender" },
            { value: "male", text: "Male" },
            { value: "female", text: "Female" },
        ]
    },
    { label: "Date of Birth", type: "date", id: 'bod' },
    { label: "Phone No.", type: "number", id: 'number', placeholder: "Phone Number" },
    { label: "Email", type: "email", id: 'email', placeholder: "E-mail" },
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
    {label:"Joining Year", id:"joiningyear", option:[
        {value:"",text:"Year of Joining"},
        {value:"2018",text:"2018"},
        {value:"2019",text:"2019"},
        {value:"2020",text:"2020"},
        {value:"2021",text:"2021"},
        {value:"2022",text:"2022"},
        {value:"2023",text:"2023"},
        {value:"2024",text:"2024"},
    ]},
    {label:"Graduation Year", id:"graduationyear", option:[
        {value:"",text:"Year of Graduation"},
        {value:"2023",text:"2023"},
        {value:"2024",text:"2024"},
        {value:"2025",text:"2025"},
        {value:"2026",text:"2026"},
        {value:"2027",text:"2027"},
    ]},

]

function Profile() {
    const [isdesable, setdesable] = useState(true);
    const [img, setimg] = useState(null);
    const [state, setstate] = useState({
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

    // change state with student details...
    useEffect(() => {
        setstate({
            firstName: "Shubham",
            lastName: "tanwar",
            number: "1234567890",
            gender: "male",
            bod: "2023-07-14",
            school: "soe",
            program: "btech",
            hostel: "mahimandvi",
            joiningyear: "2020",
            graduationyear: "2020",
        })
        // img ...........

    }, []);

    const fileAttached = (event) => {
        if (event.target.files && event.target.files[0]) {
            setimg(URL.createObjectURL(event.target.files[0]));
        }
        console.log(img);
    }

    const onChangeHandler = (e) => {
        let value = e.target.value;
        let id = e.target.id;
        setstate({ ...state, [id]: value });
    }

    console.log(state);

    return (
        <div className=' relative m-6 p-4 bg-white rounded-lg flex flex-col items-center justify-center z-0'>
            <div className=' absolute top-2 right-2 w-fit cursor-pointer' onClick={() => setdesable(!isdesable)}>
                {isdesable ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                </svg> :
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 019 9v.375M10.125 2.25A3.375 3.375 0 0113.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 013.375 3.375M9 15l2.25 2.25L15 12" />
                    </svg>
                }
            </div>
            <div className='flex flex-col items-center relative'>
                <div className=" w-[100px] h-[100px]">
                    {img === null ? <img src="/login/lable.png" className='w-full h-full' alt="" /> : <img src={img} className='w-full h-full rounded-full' alt="" />}
                </div>
                {!isdesable && <div className=" shrink-0 mt-6">
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
                </div>}
            </div>

            <div className='flex flex-col items-center mt-4 p-3 '>
                <div className=' m-2 text-lg font-bold'>Welcome, User</div>
                <div className='grid grid-cols-1  gap-1 w-[90%] mx-auto bg-[#e4eafb] rounded-lg p-4 mt-2'>
                    <div className='flex items-center justify-center'>
                        <label htmlFor="firstname">Name: </label>
                        <input
                            type="text"
                            id='firstName'
                            value={state.firstName}
                            placeholder="FirstName*"
                            className={`w-fit bg-gray-200 rounded-xl rounded-r-none outline-none border-none px-3 py-2 ml-4 ${isdesable ? " bg-transparent" : "bg-white"}  `}
                            autoComplete="off"
                            required
                            onChange={onChangeHandler} disabled={isdesable}
                        />
                        <input
                            type="text"
                            id='lastName'
                            value={state.lastName}
                            placeholder="LastName*"
                            className={`w-fit bg-gray-200 rounded-xl rounded-l-none outline-none border-none px-3 py-2 ${isdesable ? " bg-transparent" : "bg-white"}  `}
                            autoComplete="off"
                            required
                            onChange={onChangeHandler} disabled={isdesable}
                        />
                    </div>
                    <div className='flex items-center justify-center'>
                        <label htmlFor="gender">Gender</label>
                        <select
                            className={`text-black  rounded-xl ${isdesable ? " bg-transparent" : " bg-white"} block w-full px-3 py-2 ml-2 placeholder-gray-400 outline-none border-none appearance-none `}
                            id='gender'
                            value={state.gender}
                            onChange={onChangeHandler} disabled={isdesable}
                            required
                        >
                            <option value="" selected>Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>
                    <div className='flex items-center justify-center'>
                        <label htmlFor="bod" className='min-w-fit'>Date of Birth: </label>
                        <input
                            type="date"
                            id='bod'
                            value={state.bod}
                            className={`w-fit bg-gray-200 rounded-xl     outline-none border-none px-3 py-2 ml-4 ${isdesable ? " bg-transparent" : "bg-white"}  `}
                            autoComplete="off"
                            required
                            onChange={onChangeHandler} disabled={isdesable}
                        />
                    </div>
                    <div className='flex items-center justify-center'>
                        <label htmlFor="number" className='min-w-fit'>Phone No.: </label>
                        <input
                            type="number"
                            id='number'
                            value={state.number}
                            placeholder="Mobile Number"
                            className={`w-fit bg-gray-200 rounded-xl     outline-none border-none px-3 py-2 ml-4 ${isdesable ? " bg-transparent" : "bg-white"}  `}
                            autoComplete="off"
                            onChange={onChangeHandler} disabled={isdesable}
                            required
                        />
                    </div>
                    <div className='flex items-center justify-center'>
                        <label htmlFor="email">Email: </label>
                        <input
                            type="email"
                            placeholder="Enter your Email..."
                            className={`w-fit bg-gray-200 rounded-xl     outline-none border-none px-3 py-2 ml-4 ${isdesable ? " bg-transparent" : "bg-white"}  `}
                            autoComplete="off"
                            onChange={onChangeHandler} disabled={isdesable}
                        />
                    </div>
                </div>

                <div className='grid grid-cols-1  gap-1 w-[90%] mx-auto bg-[#e4eafb] rounded-lg p-4 mt-2'>
                    <div className='flex items-center justify-center'>
                        <label htmlFor="email">School: </label>
                        <select className={`text-black  rounded-xl ${isdesable ? " bg-transparent" : " bg-white"} block w-full px-3 py-2 ml-2 placeholder-gray-400 outline-none border-none appearance-none `} id='school' value={state.school} onChange={onChangeHandler} disabled={isdesable} required>
                            <option value="" selected>Select School</option>
                            <option value="soe">School of Engineering</option>
                            <option value="sss">School of Engineering</option>
                            <option value="sss2">School of Engineering</option>
                            <option value="sss3">School of Engineering</option>
                        </select>
                    </div>
                    <div className='flex items-center justify-center'>
                        <label htmlFor="email">Program: </label>
                        <select className={`text-black  rounded-xl ${isdesable ? " bg-transparent" : " bg-white"} block w-full px-3 py-2 ml-2 placeholder-gray-400 outline-none border-none appearance-none `} id='program' value={state.program} onChange={onChangeHandler} disabled={isdesable} required>
                            <option value="" selected>Select Program</option>
                            <option value="btech">B.Tech</option>
                            <option value="bsc">B.Tech</option>
                            <option value="bsc1">B.Tech</option>
                            <option value="bsc2">B.Tech</option>
                        </select>
                    </div>
                    <div className='flex items-center justify-center'>
                        <label htmlFor="email">Hostel: </label>
                        <select className={`text-black  rounded-xl ${isdesable ? " bg-transparent" : " bg-white"} block w-full px-3 py-2 ml-2 placeholder-gray-400 outline-none border-none appearance-none `} id='hostel' value={state.hostel} onChange={onChangeHandler} disabled={isdesable} required>
                            <option value="" selected>Select Hostel</option>
                            <option value="mahimandvi">MahiMandvi</option>
                            <option value="satluj">Satluj</option>
                            <option value="lohit">Lohit</option>
                            <option value="kaveri">Kaveri</option>
                        </select>
                    </div>
                    <div className='flex items-center justify-center'>
                        <label htmlFor="email">Joining Year: </label>
                        <select className={`text-black  rounded-xl ${isdesable ? " bg-transparent" : " bg-white"} block w-full px-3 py-2 ml-2 placeholder-gray-400 outline-none border-none appearance-none `} id='joiningyear' value={state.joiningyear} onChange={onChangeHandler} disabled={isdesable} required>
                            <option value="" selected>Year Of Joining</option>
                            <option value="2018">2018</option>
                            <option value="2019">2019</option>
                            <option value="2020">2020</option>
                            <option value="2021">2021</option>
                            <option value="2022">2022</option>
                            <option value="2023">2023</option>
                            <option value="2024">2024</option>
                        </select>
                    </div>
                    <div className='flex items-center justify-center'>
                        <label htmlFor="email">Graduation Year: </label>
                        <select className={`text-black  rounded-xl ${isdesable ? " bg-transparent" : " bg-white"} block w-full px-3 py-2 ml-2 placeholder-gray-400 outline-none border-none appearance-none `} id='graduationyear' value={state.graduationyear} onChange={onChangeHandler} disabled={isdesable} required>
                            <option value="" selected>Selected Year of Graduation</option>
                            <option value="2020">2020</option>
                            <option value="2021">2021</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile