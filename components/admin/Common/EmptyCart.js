import { NoSymbolIcon } from '@heroicons/react/24/solid'
import React from 'react'

function EmptyCart({ text = "Cart is Empty", forceLight=false }) {
    return (
        <div className={`w-full h-screen flex min-h-[50vh] text-xl ${forceLight?'text-black':''}`}>
            <div className="m-auto">
                <NoSymbolIcon className='w-50 mb-10' />
                {text}
            </div>
        </div>
    )
}

export default EmptyCart