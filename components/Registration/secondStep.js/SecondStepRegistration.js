import React from 'react'
import Input from '../tags/Input';
import Select from '../tags/Select';
import { schoolInfoField } from './schoolInfoField';

const SecondStepRegistration = ({state, setSecondStep, setFirstStep, onChangeHandler}) => {

    const secondStepDone = (e) => {
        e.preventDefault();
        console.log(state);
        setSecondStep(true);
    }

    return (
        <form onSubmit={secondStepDone} className='flex flex-col items-center min-h-[20rem]'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 w-[90%] mx-auto'>
                {schoolInfoField.map((tag, index) => {
                    {/* console.log(tag); */ }
                    return (
                        <div key={index}>

                            {tag.type ? <Input data={tag} state={state} onChangeHandler={onChangeHandler} /> :
                                <Select data={tag} state={state} onChangeHandler={onChangeHandler} />}

                        </div>
                    )
                })}
            </div>
            <div className=' flex gap-3'>
                <button className='text-white bg-[#1B2D56] text-lg font-medium p-2 rounded-sm m-5 px-10' onClick={() => {
                    setFirstStep(false);
                }}>Back</button>
                <button type='submit' className=' text-white bg-[#1B2D56] text-lg font-medium p-2 rounded-sm m-5 px-10'>Next</button>
            </div>
        </form>
    )
}

export default SecondStepRegistration
