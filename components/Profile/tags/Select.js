import React from 'react'

const Select = ({data, state, isDisable, onChangeHandler}) => {
    // console.log(state[data.id]);
    return (
        <select className={`text-black w-full bg-transparent ${isDisable ? "appearance-none" : ""} p-1 ml-2 outline-none border-none`} id={data.field} value={state[data.field]} onChange={onChangeHandler} disabled={isDisable} required>
            {data.option.map((t, index)=>(
                <option className=' text-black' value={t.value} key={index}>{t.text}</option>
            ))}
        </select>
    )
}

export default Select
