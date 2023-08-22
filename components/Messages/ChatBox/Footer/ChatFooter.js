import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import React from "react";
import cookieCutter from "cookie-cutter";

const ChatFooter = ({ user }) => {
  const [inputText, setInputText] = React.useState("");

  const uid = cookieCutter.get('uid');

  const handleSend = async () => {
    const datetime = new Date().toLocaleString().split(',');
    const data ={
      message:inputText,
      date:datetime[0],
      time:datetime[1],
    }

    if (inputText != "") {
      await fetch(`/api/chat?to=${uid}&from=${user.id}`, {
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

  }


  return (
    <div className=" flex items-center bg-c1/[0.5] p-2 rounded-xl relative">
      <div className=" flex items-center gap-2 grow">
        <input
          type="text"
          className=" grow w-full outline-[#1B2D56] px-2 py-2 text-white  bg-[#1B2D56] rounded-lg placeholder:text-c3 text-base"
          placeholder="Type a message"
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
          <PaperAirplaneIcon className="w-7 h-7" />
        </button>
      </div>
    </div>
  );
};

export default ChatFooter;
