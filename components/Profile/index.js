import React, { useEffect, useState } from 'react'
import cookieCutter from "cookie-cutter";
import { PencilSquareIcon, BookmarkIcon, ArrowUpOnSquareIcon, TrashIcon } from '@heroicons/react/24/solid';
import Select from './tags/Select';
import { fields } from './Fields';
import Input from './tags/Input';
import Loader from '../common/Loader';
import { useRouter } from 'next/router';
import secureLocalStorage from 'react-secure-storage';

const Profile = () => {
    const router = useRouter();
    const [isdisable, setDisable] = useState(true);
    const [isProfile, setProfile] = useState(true);
    const [editProfile, setEditProfile] = useState(false);
    const [incomingImage, setIncomingImage] = useState(null);
    const [img, setImg] = useState(null);
    const [selectImg, setSelectImg] = useState(null);
    const [deletePic, setDeletePic] = useState(false);
    const [loading, setLoading] = useState(false);
    const [state, setstate] = useState({
        firstName: "",
        lastName: "",
        number: "",
        email: "",
        gender: "",
        dob: "",
        school: "",
        program: "",
        hostel: "",
        joiningYear: "",
        graduationYear: "",
    });

    // get Profile 
    const getProfile = async () => {
        await fetch('/api/getprofile', {
            method: 'GET',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                "authorization": `Bearer ${cookieCutter.get('userToken')} ${cookieCutter.get('refreshToken')}`
            }
        }).then((res) => {
            return res.json()
        }).then((res) => {
            // console.log(res.data);
            if (res.data.set) {
                secureLocalStorage.setItem('profile', JSON.stringify(res.data));
                const { dob, firstName, gender, graduationYear, hostel, joiningYear, lastName, number, program, school } = res.data;
                setstate({ dob, firstName, gender, graduationYear, hostel, joiningYear, lastName, number, program, school });
                setIncomingImage(res.data.photo)
            }
            else {
                router.push('/registration')
            }
        }).catch((err) => console.log(err));
    }

    // change state with student details...
    useEffect(() => {

        if (!cookieCutter.get('profileSet')) {
            if (!cookieCutter.get('refreshToken') || !cookieCutter.get('userToken') || !cookieCutter.get('uid')) {
                router.push('/login');
            }
            else {
                router.push('/registration');
            }
        }
        else {
            if (JSON.parse(secureLocalStorage.getItem('profile')) !== null) {
                // handel it
                const details = JSON.parse(secureLocalStorage.getItem('profile'));
                const { dob, firstName, gender, graduationYear, hostel, joiningYear, lastName, number, program, school } = details;
                setstate({ dob, firstName, gender, graduationYear, hostel, joiningYear, lastName, number, program, school });
                setIncomingImage(details.photo)
                // console.log("hello")
            }
            else {
                getProfile();
            }
        }
    }, [incomingImage]);

    const fileAttached = (e) => {
        const file = e.target.files[0];

        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setSelectImg(reader.result);
            };
            reader.readAsDataURL(file);
        }
    }

    const onChangeHandler = (e) => {
        let value = e.target.value;
        let id = e.target.id;
        setstate({ ...state, [id]: value });
    }

    // after updating
    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();
        // console.log(state);
        const formData = new FormData();
        console.log("img = ", img);
        if (img) {
            console.log("new image is chosen")
            formData.append('photo', img);
        }
        else if (deletePic) {
            console.log("image is removed")
            formData.append('photo', img);
        }
        else {
            console.log("same old image", incomingImage)
            formData.append('photo', incomingImage);
        }
        console.log(formData.photo)

        Object.keys(state).forEach((key) => {
            console.log(key, state[key])
            formData.append(key, state[key]);
        });

        await fetch('/api/register', {
            method: "POST",
            headers: {
                "authorization": `Bearer ${cookieCutter.get('userToken')} ${cookieCutter.get('refreshToken')}`
            },
            body: formData
        }).then((res) => { return res.json() }).then((res) => {
            setLoading(false);
            console.log(res)
            getProfile();
        }).catch((err) => {
            setLoading(false);
            console.log(err);
        });
        setDisable(true);
    }

    const deleteImg = () => {
        setDeletePic(true);
        setSelectImg(null);
        setImg(null);
    }


    return (
        <>
            {
                loading ? <div className='h-screen w-full fixed top-0 right-0 z-[200] backdrop-blur-sm'>
                    <Loader color="#1B2D56" loading={loading} size={70} />
                </div> : <></>
            }
            <div style={{ backgroundImage: "url(/gallery/jnu/IMG-20220807-WA0013.jpg)" }} className=' -mt-16 pt-10 pb-4 bg-cover w-full min-h-screen'>

                <form onSubmit={handleSubmit} className=' relative bg-cover bg-white/10 backdrop-blur-md mx-auto my-16 shadow-xl flex flex-col items-center w-[85%] md:w-[39rem]'>
                    {/* <div style={{ backgroundImage: "url(/profile/blurry_gradient_haikei.png)" }} className='rounded-lg h-[8rem] w-full'> */}

                    {isdisable &&
                        <div onClick={() => setDisable(false)} className=' absolute bg-white rounded-md top-2 right-2 w-fit cursor-pointer p-1 z-10'>
                            <PencilSquareIcon className='w-6 h-6' />
                        </div>
                    }
                    <div className=' relative flex flex-col items-center md:items-start justify-start bg-[#1B2D56] h-[8rem] w-full'>
                        <div className='w-fit mt-2 md:mt-10'>
                            {isdisable ? <h1 className='text-2xl text-white font-bold w-fit md:ml-10'>{state.firstName.charAt(0).toUpperCase() + state.firstName.slice(1)} {state.lastName.charAt(0).toUpperCase() + state.lastName.slice(1)}</h1> :
                                <div className=' flex w-full md:ml-10 mb-1'>
                                    <input
                                        type="text"
                                        id='firstName'
                                        value={state.firstName}
                                        onChange={onChangeHandler}
                                        className={`text-white rounded-sm p-2 w-full md:w-fit  placeholder-gray-400 ${isdisable ? "outline-none border-none" : ""} bg-transparent text-base mr-2`}
                                        autoComplete="off"
                                        required
                                        disabled={isdisable} />
                                    <input
                                        type="text"
                                        id='lastName'
                                        value={state.lastName}
                                        onChange={onChangeHandler}
                                        className={`text-white rounded-sm w-full md:w-fit p-2  placeholder-gray-400 ${isdisable ? "outline-none border-none" : ""} bg-transparent text-base mr-2`}
                                        autoComplete="off"
                                        required
                                        disabled={isdisable} />
                                </div>
                            }
                            <div className='w-fit md:ml-10 '>
                                {isdisable ? <p className='text-white font-normal text-sm'>{state.gender}</p> :
                                    <select id="gender"
                                        value={state.gender}
                                        onChange={onChangeHandler}
                                        autoComplete='off'
                                        className={`bg-transparent w-[6rem] text-white p-1 ml-2 placeholder-gray-400 ${isdisable ? "outline-none border-none appearance-none" : ""}`}
                                        required
                                        isDisable={isdisable}
                                    >
                                        <option className=' text-black' value="">Select Gender</option>
                                        <option className=' text-black' value="male">Male</option>
                                        <option className=' text-black' value="female">Female</option>
                                    </select>}
                            </div>
                        </div>

                        <div className='absolute top-16 right-[50%] translate-x-[50%] md:translate-x-0 md:top-10 md:right-4 bg-slate-50 shadow-xl rounded-full p-1 w-[150px] h-[150px]'>
                            {
                                // new image > image removed > incoming image
                                selectImg ? <img className='w-full h-full rounded-full object-cover overflow-hidden' src={selectImg} alt='user profile' /> : (!deletePic && incomingImage) ? <img className='w-full h-full rounded-full object-cover overflow-hidden' src={incomingImage} alt="selected profile pic" /> : <img src="/icons/profileIcon.png" />
                                // selectImg ? <img className='w-full h-full rounded-full object-cover overflow-hidden' src={selectImg} alt='user profile' /> : incomingImage ? <img className='w-full h-full rounded-full object-cover overflow-hidden' src={incomingImage} alt="selected profile pic" /> : <img src="/icons/profileIcon.png" />
                            }
                        </div>
                        {
                            !isdisable && (selectImg || incomingImage) &&
                            <div onClick={() => deleteImg()} className=' absolute -bottom-24 right-[50%] translate-x-[50%] md:translate-x-0 md:-bottom-14 md:right-8 bg-white p-1 hover:text-red-800 rounded-full cursor-pointer'>
                                <TrashIcon className='w-4 h-4' />
                            </div>
                        }
                        {!isdisable &&
                            <div className='absolute -bottom-[8.2rem] right-[50%] translate-x-[50%] md:translate-x-0 md:-bottom-24 md:right-8'>
                                <input
                                    type="file"
                                    id="fileUploader"
                                    className=' opacity-0 absolute top-10 right-0 w-10'
                                    accept="image/jpeg, image/png, image/jpg"
                                    onChange={(e) => {
                                        setImg(e.target.files[0]);
                                        fileAttached(e)
                                    }}
                                />
                                <label htmlFor="fileUploader" className=' p-2 bg-blue-500 text-slate-200 rounded-lg  cursor-pointer'>
                                    {img ? 'Change Photo' : 'Upload Photo'}
                                </label>
                            </div>
                        }
                    </div>


                    <div className={`grid grid-cols-1  md:grid-cols-2 gap-3 p-6 mx-auto ${isdisable ? "mt-20 md:mt-16" : " mt-[7.5rem] md:mt-20"} `}>
                        {
                            fields.map((data, index) => {
                                return (
                                    <div className=' flex items-center ' key={index}>
                                        <div className='rounded-full shadow-xl'>
                                            {<data.icon className='w-6 h-6 ' />}
                                        </div>
                                        <div className='relative m-3 bg-gray-50 rounded-md p-2 w-full'>
                                            <p className='absolute -top-5 p-1 left-2 font-normal text-xs text-gray-900'>{data.leble}</p>
                                            {data.tag === "select" ? <Select onChangeHandler={onChangeHandler} data={data} state={state} isDisable={isdisable} /> :
                                                <Input data={data} onChangeHandler={onChangeHandler} state={state} isDisable={isdisable} />}
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>

                    {!isdisable && <button type='submit' className='px-6 py-2 m-2 rounded-md text-base font-normal bg-[#1B2D56] hover:bg-[#2e416b] text-white'>Save</button>}            </form>
            </div>
        </>
    )
}

export default Profile;