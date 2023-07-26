import React from 'react'

const Input = ({data, state, isdesable, onChangeHandler}) => {
    return (
        <input
            type={data.type}
            id={data.id}
            value={state[data.id]}
            placeholder={data.placeholder}
            className={`w-full h-14 bg-gray-200 rounded-xl outline-none border-none px-5 text-gray-400"}  `}
            autoComplete="off"
            required
            onChange={onChangeHandler} 
            disabled={isdesable}
        />
    )
}

export default Input
