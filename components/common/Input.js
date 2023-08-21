import React from 'react'

function Input(props) {
    return (
        <input maxLength={props.maxlength} pattern={props.pattern} type={props.type} placeholder={props.placeholder} className={"px-6 py-3 rounded bg-white " + props.className} onChange={props.onChange} ref={props.ref}/>
    )
}

export default Input