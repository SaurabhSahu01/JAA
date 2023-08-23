import React from 'react'
import cookieCutter from "cookie-cutter";

const ChatMessage = ({message}) => {

    const uid = cookieCutter.get('uid');
    // const [self, setSelf] = React.useState(false);
    //console.log(message.chatinfo.uid);
    const self = message.chatinfo.uid === uid;

    return (
        <div className='w-full'>
            <div className={`mb-3 max-w-[300px] ${!self ? "ml-auto" : ""}`}>
                <div className={`relative group flex flex-col gap-4 p-3  rounded-xl break-all ${!self ? "rounded-br-sm bg-green-400/20 text-gray-700" : "rounded-bl-sm bg-slate-400/20 text-gray-600"}`}  >
                    {message.chatinfo.message}
                    <div className=" absolute bottom-[1px] right-1 text-xs text-c3">
                        {message.time}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChatMessage;
