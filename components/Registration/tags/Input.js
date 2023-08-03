import React from 'react'

const Input = ({data, state, isdesable, onChangeHandler}) => {
    return (
        <input
            type={data.type}
            id={data.id}
            value={state[data.id]}
            placeholder={data.placeholder}
            className={`text-gray-800  rounded-sm  bg-gray-200 block w-full px-5 py-2  placeholder-gray-400 outline-none border-none shadow-xl`}
            autoComplete='on'
            required
            onChange={onChangeHandler} 
            disabled={isdesable}
        />
    )
}

export default Input
