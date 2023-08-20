import React, { useEffect } from 'react'

const Select = ({ data, state, isDisable, onChangeHandler }) => {
    // console.log(state[data.id]);
    // console.log(data.option)
    // useEffect(()=>{
    //     data.option.map((t, index)=>{
    //         console.log(t);
    //     })
    // })
    return (
        <select
            className={`text-black w-full bg-transparent ${isDisable ? "appearance-none" : ""} p-1 ml-2 outline-none border-none`}
            id={data.id}
            value={state[data.id]}
            onChange={onChangeHandler}
            disabled={isDisable}
            required
        >
            {data.option.map((t, index) => {
                {/* console.log(t); */}
                return(
                <option className=' text-black' value={t} key={index}>{t === "" ? data.field : t}</option>
            )})}
        </select>
    )
}

export default Select
