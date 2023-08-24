import React from 'react'

function MessageCard({ name, number, email, date, message }) {
    const [show, setShow] = React.useState(false);
    return (
        <div className='w-full flex flex-col items-center justify-center bg-slate-100 py-2 hover:shadow-md cursor-pointer mb-2 shadow-lg'>
            <div className='w-full flex xs:flex-col xs:justify-around xs:items-center md:flex-row md:justify-around md:items-center gap-2 text-md font-light' onClick={() => setShow(!show)}>
                <span>{date}</span>
                <span>{name}</span>
                <span>{number}</span>
                <span>{email}</span>
            </div>
            <span className={show ? 'w-full text-center block border-t-[0.1px] border-slate-500 pt-1' : 'hidden'}>{message}</span>
        </div>
    )
}

export default MessageCard