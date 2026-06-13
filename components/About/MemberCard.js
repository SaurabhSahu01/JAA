'use client';

import React from 'react'

const MemberCard = ({ data }) => {
    const { imgSrc, name, level, period } = data;
    return (
        <div className='flip-card w-[160px] sm:w-[200px] h-[240px] sm:h-[280px] m-2'>
            <div className='flip-card-inner'>
                {/* Front */}
                <div className='flip-card-front glass-card flex flex-col items-center justify-center p-4 text-center'>
                    <img src={imgSrc} alt={name} className='rounded-full w-20 h-20 sm:w-24 sm:h-24 object-cover ring-4 ring-white shadow-lg mb-4' />
                    <p className='font-display font-bold text-sm text-jnu-blue leading-tight'>{name}</p>
                    <p className='text-xs text-gray-400 mt-1 font-medium'>{level}</p>
                </div>
                {/* Back */}
                <div className='flip-card-back gradient-animate flex flex-col items-center justify-center p-6 text-center text-white'>
                    <p className='font-display font-bold text-lg mb-2'>{name}</p>
                    <div className='w-8 h-0.5 bg-white/30 rounded-full mb-3'></div>
                    <p className='text-sm font-medium text-white/90 mb-1'>{level}</p>
                    <p className='text-xs text-white/60'>{period}</p>
                </div>
            </div>
        </div>
    )
}

export default MemberCard
