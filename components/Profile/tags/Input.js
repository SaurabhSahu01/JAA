import React from 'react'

const Input = ({data, state, isDisable, onChangeHandler}) => {
    // console.log(data)
    return (
        <input
            type={data.type}
            id={data.field}
            value={state[data.field]}
            placeholder={data.placeholder}
            className={`text-black  rounded-sm bg-transparent block w-full px-5 py-2  outline-none border-none`}
            autoComplete="off"
            required
            onChange={onChangeHandler} 
            disabled={isDisable}
        />
    )
}

export default Input
