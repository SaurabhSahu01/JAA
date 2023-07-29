import React from 'react'

const ProgressLine = ({firstStep, secondStep, thirdStep}) => {
    return (
        <div className='flex items-center justify-center pt-10'>
            <div className={`w-[55px] h-[55px] md:w-[65px] md:h-[65px] bg-blue-600  rounded-full flex items-center justify-center p-2`}>
                {firstStep && <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-[75%] h-[75%] text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                }
            </div>
            <div className={`w-[15%] h-2  ${firstStep ? "bg-blue-600" : "bg-gray-100"}`}></div>
            <div className={`w-[50px] h-[50px] md:w-[65px] md:h-[65px]  ${firstStep ? "bg-blue-600" : "bg-gray-100"} rounded-full flex items-center justify-center p-2`}>
                {secondStep && <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-[75%] h-[75%] text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>}
            </div>
            <div className={`w-[15%] h-2  ${secondStep ? "bg-blue-600" : "bg-gray-100"}`}></div>
            <div className={`w-[50px] h-[50px] md:w-[65px] md:h-[65px]  ${secondStep ? "bg-blue-600" : "bg-gray-100"} rounded-full flex items-center justify-center p-2`}>
                {thirdStep && <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-[75%] h-[75%] text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>}
            </div>
        </div>
    )
}

export default ProgressLine
