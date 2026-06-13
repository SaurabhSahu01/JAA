'use client';

import React from 'react';

const ProgressLine = ({ firstStep, secondStep }) => {
    return (
        <div className="flex items-center justify-center font-sans">
            {/* Step 1 */}
            <div className="flex flex-col items-center relative z-10">
                <div className="w-12 h-12 rounded-full bg-jnu-blue text-white flex items-center justify-center font-bold text-lg shadow-glow-blue transition-all duration-300">
                    1
                </div>
                <span className="text-xs font-semibold text-jnu-blue mt-2 absolute -bottom-5 whitespace-nowrap">
                    Personal
                </span>
            </div>

            {/* Line 1 */}
            <div className={`flex-grow h-1 mx-2 rounded-full transition-all duration-500 ${
                firstStep ? 'bg-jnu-blue' : 'bg-gray-200'
            }`} style={{ maxWidth: '80px' }}></div>

            {/* Step 2 */}
            <div className="flex flex-col items-center relative z-10">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-all duration-300 ${
                    firstStep 
                        ? 'bg-jnu-blue text-white shadow-glow-blue' 
                        : 'bg-gray-100 text-gray-400 border border-gray-200'
                }`}>
                    2
                </div>
                <span className={`text-xs font-semibold mt-2 absolute -bottom-5 whitespace-nowrap transition-colors duration-300 ${
                    firstStep ? 'text-jnu-blue' : 'text-gray-400'
                }`}>
                    Academic
                </span>
            </div>

            {/* Line 2 */}
            <div className={`flex-grow h-1 mx-2 rounded-full transition-all duration-500 ${
                secondStep ? 'bg-jnu-blue' : 'bg-gray-200'
            }`} style={{ maxWidth: '80px' }}></div>

            {/* Step 3 */}
            <div className="flex flex-col items-center relative z-10">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-all duration-300 ${
                    secondStep 
                        ? 'bg-jnu-blue text-white shadow-glow-blue' 
                        : 'bg-gray-100 text-gray-400 border border-gray-200'
                }`}>
                    3
                </div>
                <span className={`text-xs font-semibold mt-2 absolute -bottom-5 whitespace-nowrap transition-colors duration-300 ${
                    secondStep ? 'text-jnu-blue' : 'text-gray-400'
                }`}>
                    Photo
                </span>
            </div>
        </div>
    );
};

export default ProgressLine;
