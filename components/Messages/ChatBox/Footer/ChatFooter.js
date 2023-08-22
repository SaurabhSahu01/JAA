import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import React from "react";

const ChatFooter = ({user}) => {
  const [inputText, setInputText] = React.useState("");


  const onKeyUp = (e)=>{

  }

  const handleSend =()=>{

  }

  return (
    <div className=" flex items-center bg-c1/[0.5] p-2 rounded-xl relative">
      <div className=" flex items-center gap-2 grow">
        <input
          type="text"
          className=" grow w-full outline-[#1B2D56] px-2 py-2 text-white  bg-[#1B2D56] rounded-lg placeholder:text-c3 text-base"
          placeholder="Type a message"
        value={inputText}
        onChange={(e)=>setInputText(e.target.value)}
        onKeyUp={onKeyUp}
        />
        <button
          onClick={handleSend}
          className={`h-10 w-10 rounded-xl shrink-0 flex justify-center items-center transition-transform
            ${inputText.trim().length > 0 ? "-rotate-45 duration-300" : "text-[#1B2D56]"}`
          }
        >
        <PaperAirplaneIcon className="w-7 h-7"/>
        </button>
      </div>
    </div>
  );
};

export default ChatFooter;
