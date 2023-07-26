import React from 'react'

const Select = ({data, state, isdesable, onChangeHandler}) => {
    // console.log(state[data.id]);
    return (
        <select className={`text-gray-400  rounded-xl  bg-gray-200 block w-full px-5 p-3  placeholder-gray-400 outline-none border-none `} id={data.id} value={state[data.id]} onChange={onChangeHandler} disabled={isdesable} required>
            {data.option.map((t, index)=>(
                <option className=' text-black' value={t.value} key={index}>{t.text}</option>
            ))}
        </select>
    )
}

export default Select
