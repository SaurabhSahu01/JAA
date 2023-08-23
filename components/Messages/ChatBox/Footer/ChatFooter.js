import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import React from "react";
import cookieCutter from "cookie-cutter";
import CryptoJS from "crypto-js"

const ChatFooter = ({ user }) => {
  const [inputText, setInputText] = React.useState("");

  const uid = cookieCutter.get('uid');

  const handleSend = async () => {
    const data ={
      message:CryptoJS.AES.encrypt(inputText, user.id).toString(),
      time:datetime[1],
    }
    if (inputText.replace(/\s+/g,' ').trim() != "") {
      await fetch(`/api/chat?to=${user.id}&from=${uid}`, {
        method: "POST",
        headers: {
          "authorization": `Bearer ${cookieCutter.get('userToken')} ${cookieCutter.get('refreshToken')}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }).then((res) => { return res.json() }).then((res) => {
        console.log(res);
        setInputText("")
      }).catch((err) => {
        console.log(err);
      });
    }
    else{
      setInputText("");
    }
  }


  return (
    <div className=" flex items-center bg-c1/[0.5] p-2 rounded-xl relative">
      <div className=" flex items-center gap-2 grow">
        <input
          type="text"
          className=" grow w-full outline-none px-2 py-2 text-gray-600  bg-slate-100/60 backdrop-blur-sm shadow-lg rounded-lg placeholder:text-c3 text-base"
          placeholder="Type a message....."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyUp={(e)=>{
            if(e.key==='Enter'){
              handleSend();
            }
          }}
        />
        <button
          onClick={handleSend}
          className={`h-10 w-10 rounded-xl shrink-0 flex justify-center items-center transition-transform
            ${inputText.trim().length > 0 ? "-rotate-45 duration-300" : "text-[#1B2D56]"}`
          }
        >
          <PaperAirplaneIcon className="w-[3rem] h-[3rem]" />
        </button>
      </div>
    </div>
  );
};

export default ChatFooter;
