import React from 'react'

const MemberCard = ({data}) => {
    const {imgSrc, name, level, period } = data;
  return (
    <div className=' flex flex-col justify-center items-center gap-2 bg-[#F5F5F5] rounded-md p-4 m-2 w-fit shadow-md'>
        <img src={imgSrc} alt="" className='rounded-full w-[100px] sm:w-[150px] h-[100px] sm:h-[150px] object-cover' />
        <div className=' py-1 font-medium text-base text-left px-2'>
            <p className=' underline'>{name}</p>
            <p>{level}</p>
            <p>{period}</p>
        </div>
    </div>
  )
}

export default MemberCard
