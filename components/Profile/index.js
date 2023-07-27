import React, { useEffect, useState } from 'react'
import Input from './Input';
import Select from './Select';

const useInfoField = [
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


const Profile = () => {
    const [isdisable, setDisable] = useState(true);
    const [img, setimg] = useState(null);
    const [state, setstate] = useState({
        firstName: "",
        lastName: "",
        number: "",
        email: "",
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
            email: "shubham151@gmail.com",
            gender: "male",
            bod: "2023-07-14",
            school: "soe",
            program: "btech",
            hostel: "mahimandvi",
            joiningyear: "2020",
            graduationyear: "2025",
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

    // after updating
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(state);
        setDisable(true);
    }

    return (
        <form onSubmit={handleSubmit} style={{ backgroundImage: "url(/gallery/jnu/1636141627078.jpg)" }} className=' relative m-6 bg-cover mx-auto p-4 bg-white rounded-lg flex flex-col items-center justify-center z-0 w-[96%] md:w-[65%]'>
            <div className='flex flex-col items-center relative'>
                <div className=" w-[100px] h-[100px]">
                    {img === null ? <img src="/login/lable.png" className='w-full h-full' alt="" /> : <img src={img} className='w-full h-full rounded-full' alt="" />}
                </div>
                {!isdisable && <div className=" shrink-0 mt-6">
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
            <div className='flex flex-col items-center mt-4 p-1 md:p-3'>
                <div className='m-2 text-lg font-bold'>Welcome, User</div>
                <table className='w-full md:w-[26rem] bg-[#e4eafb] rounded-lg p-1 md:p-4 mt-2 overflow-hidden shadow-md'>
                    <thead>
                        <tr>
                            <th colSpan="2" className="text-center font-bold text-xl p-2">
                                User Info
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {useInfoField.map((tag, index) => (
                            <tr className='w-full' key={index}>
                                <td className='w-[50%] text-right'>
                                    <label htmlFor={tag?.id} className='min-w-fit'>
                                        {tag.label}:
                                    </label>
                                </td>
                                <td className='text-left'>
                                    {tag.type ? (
                                        <Input data={tag} state={state} isDisable={isdisable} onChangeHandler={onChangeHandler} />
                                    ) : (
                                        <Select data={tag} state={state} isDisable={isdisable} onChangeHandler={onChangeHandler} />
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className='flex flex-col items-center p-1 md:p-3 '>
                <table className='w-full md:w-[26rem] bg-[#e4eafb] rounded-lg p-1 md:p-4 mt-2 overflow-hidden shadow-md'>
                    <thead>
                        <tr>
                            <th colSpan="2" className="text-center font-bold text-xl p-2">
                                School Info
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {schoolInfoField.map((tag, index) => (
                            <tr className='w-full' key={index}>
                                <td className='w-[54%] text-right'>
                                    <label htmlFor={tag?.id} className='min-w-fit'>
                                        {tag.label}:
                                    </label>
                                </td>
                                <td className='text-left'>
                                    {tag.type ? (
                                        <Input data={tag} state={state} isDisable={isdisable} onChangeHandler={onChangeHandler} />
                                    ) : (
                                        <Select data={tag} state={state} isDisable={isdisable} onChangeHandler={onChangeHandler} />
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className=' absolute bg-white rounded-md top-2 right-2 w-fit cursor-pointer'>
                {isdisable ? <svg onClick={() => setDisable(false)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                </svg> :
                    <button className=' w-fit' type='submit'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 019 9v.375M10.125 2.25A3.375 3.375 0 0113.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 013.375 3.375M9 15l2.25 2.25L15 12" />
                        </svg>
                    </button>
                }
            </div>
        </form>
    )
}

export default Profile
