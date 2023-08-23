import React from 'react'
import cookieCutter from "cookie-cutter";
import CryptoJS from 'crypto-js'

const ChatMessage = ({message, user}) => {

    const uid = cookieCutter.get('uid');
    // const [self, setSelf] = React.useState(false);
    const self = (message.chatinfo.uid === uid);
    // console.log("user id : ", user.id);
    let chat = "";
    self ? chat = CryptoJS.AES.decrypt(message.chatinfo.message, user.id).toString(CryptoJS.enc.Utf8) : chat = CryptoJS.AES.decrypt(message.chatinfo.message, uid).toString(CryptoJS.enc.Utf8);
    return (
        <div className='w-full'>
            <div className={`mb-3 max-w-[150px] md:max-w-[300px] ${self ? "ml-auto" : ""}`}>
                <div className={`relative group flex flex-col gap-4 p-3  rounded-xl break-all ${self ? "rounded-br-sm bg-green-400/20 text-gray-700" : "rounded-bl-sm bg-slate-400/20 text-gray-600"}`}  >
                    {chat}
                    <div className=" absolute bottom-[1px] right-1 text-xs text-c3">
                        {message.time}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChatMessage;
