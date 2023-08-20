import React from 'react'

const Select = ({ data, state, isdesable, onChangeHandler }) => {
    // console.log(state[data.id]);
    return (
        <select
            className={`text-gray-800  rounded-sm  bg-gray-200 block w-full px-5 py-2  placeholder-gray-400 outline-none border-none shadow-xl`}
            id={data.id}
            value={state[data.id]}
            onChange={onChangeHandler}
            disabled={isdesable}
            required
        >
            {data.option.map((t, index) => (
                <option className=' text-black' value={t} key={index}>{t === "" ? data.field : t}</option>
            ))}
        </select>
    )
}

export default Select
