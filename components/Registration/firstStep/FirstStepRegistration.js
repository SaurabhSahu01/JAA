import React from 'react'
import Input from '../tags/Input'
import Select from '../tags/Select'
import { userInfoField } from './userInfoField'

const FirstStepRegistration = ({ state, setFirstStep, onChangeHandler }) => {

    const firstStepDone = (e) => {
        e.preventDefault();
        console.log(state);
        setFirstStep(true);
    }

    return (
        <div className=''>
            <div className='text-xl font-semibold text-black m-4 ml-[5%]'>User Info</div>
            <form onSubmit={firstStepDone} className='flex flex-col items-center'>
                <div className=' grid grid-cols-1 md:grid-cols-2 gap-4 w-[90%] mx-auto'>
                    {userInfoField.map((tag, index) => {
                        {/* console.log(tag); */ }
                        return (
                            <div key={index}>

                                {tag.type ? <Input data={tag} state={state} onChangeHandler={onChangeHandler} /> :
                                    <Select data={tag} state={state} onChangeHandler={onChangeHandler} />}

                            </div>
                        )
                    })}
                </div>
                <button type='submit' className=' text-white bg-[#1B2D56] text-lg font-medium p-2 rounded-sm m-5 px-10'>Next</button>
            </form>

        </div>

    )
}

export default FirstStepRegistration
