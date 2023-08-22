import React from 'react'

const Chat = ({user}) => {
    return (
        <div
            // onClick={() => slectUser(user)}
            className="flex items-center gap-2 rounded-xl hover:bg-gray-300 py-2 px-3 cursor-pointer"
        >
            <img src="/icons/profileIcon.png" className="w-[50px] h-[50px]" />
            <div className=" flex flex-col justify-center">
                <span className=" text-base text-black flex items-center justify-between">
                    <div className=" font-medium">Shubham</div>
                </span>
                <p className=" text-sm text-gray-500">tanwarshubham@gmail.com</p>
            </div>
        </div>
    )
}

export default Chat
