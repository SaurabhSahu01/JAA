'use client';

import React from 'react';

const Select = ({ data, state, isDisable, onChangeHandler }) => {
    return (
        <div className="relative w-full">
            <select
                className={`w-full text-sm font-semibold text-gray-800 bg-transparent outline-none transition-all cursor-pointer ${
                    isDisable 
                        ? 'border-transparent appearance-none pointer-events-none' 
                        : 'border-b border-jnu-blue/20 focus:border-jnu-blue pb-1'
                }`}
                id={data.id}
                value={state[data.id] || ""}
                onChange={onChangeHandler}
                disabled={isDisable}
                required
            >
                {data.option.map((t, index) => (
                    <option className="text-gray-800 bg-white" value={t} key={index}>
                        {t === "" ? data.field : t}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Select;
