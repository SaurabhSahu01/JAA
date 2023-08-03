import React from 'react'

const ProgressLine = ({ firstStep, secondStep }) => {
    return (
        <div className='flex items-center justify-center pb-10 '>
            <div className='relative'>
                <div className={`w-[45px] h-[45px] bg-primarycolor  rounded-full flex items-center justify-center p-2`}>
                    {
                        /* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-[75%] h-[75%] text-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg> */
                        <div className={`w-fit font-bold text-lg text-white  select-none`}>
                            1
                        </div>
                    }
                </div>
                <div className=' absolute font-normal text-sm md:w-[80px] text-primarycolor'>
                    Step 1
                </div>
            </div>
            <div className={`w-[20%] h-1 ml-1 mr-1 rounded-lg bg-gray-400`}></div>
            <div className=' relative'>
                <div className={`w-[45px] h-[45px] ${firstStep ? "bg-primarycolor":" bg-gray-200"}  rounded-full flex items-center justify-center p-2`}>
                    {
                        /* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-[75%] h-[75%] text-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg> */
                        <div className={`w-fit font-bold text-lg ${firstStep? "text-white":" text-primarycolor"}  select-none`}>
                            2
                        </div>
                    }
                </div>
                <div className={`absolute font-normal text-sm md:w-[90px] ${firstStep? "text-primarycolor":""}`}>
                    Step 2
                </div>
            </div>

            <div className={`w-[20%] h-1 ml-1 mr-1 rounded-lg  bg-gray-400`}></div>

            <div className=' relative'>
                <div className={`w-[45px] h-[45px]  ${secondStep ? "bg-primarycolor" : "bg-gray-200"} rounded-full flex items-center justify-center p-2`}>
                    {
                        /* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-[75%] h-[75%] text-white">
                           <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                       </svg> */
                        <div className={`w-fit font-bold text-lg ${secondStep? "text-white":" text-primarycolor"}  select-none`}>
                            3
                        </div>}
                </div>
                <div className={`absolute font-normal text-sm md:w-[90px] ${secondStep ? "text-primarycolor":""}`}>
                    Step 3
                </div>
            </div>
        </div>
    )
}

export default ProgressLine
