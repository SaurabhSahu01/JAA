import React from 'react'

const Select = ({data, state, isdesable, onChangeHandler}) => {
    // console.log(state[data.id]);
    return (
        <select className={`text-black ${isdesable ? " bg-transparent" : " bg-white"} p-1 ml-2 placeholder-gray-400 outline-none border-none ${isdesable? " appearance-none":""} `} id={data.id} value={state[data.id]} onChange={onChangeHandler} disabled={isdesable} required>
            {data.option.map((t, index)=>(
                <option className=' text-black' value={t.value} key={index}>{t.text}</option>
            ))}
        </select>
    )
}

export default Select
