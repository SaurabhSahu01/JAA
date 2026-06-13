'use client';

import React from 'react';
import Input from '../tags/Input';
import Select from '../tags/Select';
import { userInfoField } from './userInfoField';

const FirstStepRegistration = ({ state, setFirstStep, onChangeHandler }) => {
    const firstStepDone = (e) => {
        e.preventDefault();
        setFirstStep(true);
    };

    return (
        <div className="w-full">
            <h3 className="text-xl font-display font-bold text-jnu-blue mb-6">
                Step 1: Personal Details
            </h3>
            <form onSubmit={firstStepDone} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {userInfoField.map((tag, index) => (
                        <div key={index} className="flex flex-col">
                            <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                                {tag.placeholder || tag.label}
                            </label>
                            {tag.type ? (
                                <Input data={tag} state={state} onChangeHandler={onChangeHandler} />
                            ) : (
                                <Select data={tag} state={state} onChangeHandler={onChangeHandler} />
                            )}
                        </div>
                    ))}
                </div>
                <div className="flex justify-end pt-4">
                    <button 
                        type="submit" 
                        className="btn-primary px-8 py-3 rounded-xl hover:shadow-glow-blue transition-all"
                    >
                        Next Step &rarr;
                    </button>
                </div>
            </form>
        </div>
    );
};

export default FirstStepRegistration;
