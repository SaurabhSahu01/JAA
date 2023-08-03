import { userInfoField } from '@/components/Registration/firstStep/userInfoField'
import { schoolInfoField } from '@/components/Registration/secondStep.js/schoolInfoField'
import React from 'react'
import Input from '../tags/Input'
import Select from '../tags/Select'

const EditProfile = ({handleSubmit, onChangeHandler, fileAttached, state, img, }) => {
  return (
    <form onSubmit={handleSubmit} style={{ backgroundImage: "url(/gallery/jnu/1636141627078.jpg)" }} className=' relative m-6 bg-cover mx-auto p-4 bg-white rounded-lg flex flex-col items-center justify-center z-0 w-[96%] md:w-[65%]'>
            <div className='flex flex-col items-center relative'>
                <div className=" w-[100px] h-[100px]">
                    {img === null ? <img src="/login/lable.png" className='w-full h-full' alt="" /> : <img src={img} className='w-full h-full rounded-full' alt="" />}
                </div>
                {<div className=" shrink-0 mt-6">
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
            <div className='flex flex-col items-center mt-4 p-1 md:p-3 '>
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
                        {userInfoField.map((tag, index) => (
                            <tr className='w-full' key={index}>
                                <td className='w-[50%] text-right'>
                                    <label htmlFor={tag?.id} className='min-w-fit'>
                                        {tag.label}:
                                    </label>
                                </td>
                                <td className='text-left'>
                                    {tag.type ? (
                                        <Input data={tag} state={state} onChangeHandler={onChangeHandler} />
                                    ) : (
                                        <Select data={tag} state={state} onChangeHandler={onChangeHandler} />
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
                                        <Input data={tag} state={state}  onChangeHandler={onChangeHandler} />
                                    ) : (
                                        <Select data={tag} state={state} onChangeHandler={onChangeHandler} />
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <button className='bg-[#1B2D56] p-2 rounded-lg text-white' type='submit'>Save Profile</button>
        </form>
  )
}

export default EditProfile
