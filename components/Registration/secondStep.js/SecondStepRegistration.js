'use client';

import React from 'react';
import Input from '../tags/Input';
import Select from '../tags/Select';
import { schoolInfoField } from './schoolInfoField';

const SecondStepRegistration = ({ state, setSecondStep, setFirstStep, onChangeHandler }) => {
    const secondStepDone = (e) => {
        e.preventDefault();
        setSecondStep(true);
    };

    return (
        <div className="w-full">
            <h3 className="text-xl font-display font-bold text-jnu-blue mb-6">
                Step 2: Academic Details
            </h3>
            <form onSubmit={secondStepDone} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {schoolInfoField.map((tag, index) => (
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
                <div className="flex items-center justify-between pt-4">
                    <button 
                        type="button"
                        onClick={() => setFirstStep(false)}
                        className="px-6 py-3 rounded-xl border border-gray-200 text-gray-500 font-semibold hover:bg-gray-50 transition-colors"
                    >
                        &larr; Back
                    </button>
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

export default SecondStepRegistration;
