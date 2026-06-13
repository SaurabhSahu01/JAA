'use client';

import React from 'react';

const Select = ({ data, state, isdesable, onChangeHandler }) => {
    return (
        <select
            className="w-full bg-gray-50/80 border border-gray-200 rounded-xl py-3 px-4 text-gray-800 placeholder-gray-400 text-sm outline-none focus:ring-2 focus:ring-jnu-blue/15 focus:border-jnu-blue/30 transition-all disabled:opacity-50 appearance-none cursor-pointer"
            id={data.id}
            value={state[data.id]}
            onChange={onChangeHandler}
            disabled={isdesable}
            required
        >
            {data.option.map((t, index) => (
                <option className="text-gray-800 bg-white" value={t} key={index}>
                    {t === "" ? data.field : t}
                </option>
            ))}
        </select>
    );
};

export default Select;
