'use client';

import React from 'react';

const Input = ({ data, state, isdesable, onChangeHandler }) => {
    return (
        <input
            type={data.type}
            id={data.id}
            value={state[data.id]}
            placeholder={data.placeholder}
            className="w-full bg-gray-50/80 border border-gray-200 rounded-xl py-3 px-4 text-gray-800 placeholder-gray-400 text-sm outline-none focus:ring-2 focus:ring-jnu-blue/15 focus:border-jnu-blue/30 transition-all disabled:opacity-50"
            autoComplete="on"
            required
            onChange={onChangeHandler} 
            disabled={isdesable}
        />
    );
};

export default Input;
