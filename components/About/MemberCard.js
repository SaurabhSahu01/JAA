import React from 'react'

const MemberCard = ({data}) => {
    const {imgSrc, name, level, period } = data;
  return (
    <div className=' flex flex-col justify-center items-center gap-2 bg-white rounded-md p-2 m-2 w-fit shadow-md'>
        <img src={imgSrc} alt="" className='rounded-full w-[150px] h-[150px]' />
        <div className=' py-1 font-medium text-sm text-left px-2'>
            <p>{name}</p>
            <p>{level}</p>
            <p>{period}</p>
        </div>
    </div>
  )
}

export default MemberCard
