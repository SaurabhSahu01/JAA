import React from 'react'

const Input = ({data, state, isdesable, onChangeHandler}) => {
    return (
        <input
            type={data.type}
            id={data.id}
            value={state[data.id]}
            placeholder={data.placeholder}
            className={`bg-gray-200  outline-none border-none p-[2px] ml-2 ${isdesable ? " bg-transparent" : "bg-white"}  `}
            autoComplete="off"
            required
            onChange={onChangeHandler} 
            disabled={isdesable}
        />
    )
}

export default Input
