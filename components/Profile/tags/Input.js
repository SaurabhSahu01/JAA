'use client';

import React from 'react';

const Input = ({ data, state, isDisable, onChangeHandler }) => {
    return (
        <input
            type={data.type}
            id={data.id}
            value={state[data.id] || ""}
            placeholder={data.placeholder}
            className={`w-full text-sm font-semibold text-gray-800 bg-transparent outline-none transition-all ${
                isDisable 
                    ? 'border-transparent cursor-default' 
                    : 'border-b border-jnu-blue/20 focus:border-jnu-blue pb-1'
            }`}
            autoComplete="off"
            required
            onChange={onChangeHandler} 
            disabled={isDisable}
        />
    );
};

export default Input;
