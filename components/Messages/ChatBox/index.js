import React from "react";
import ChatHeader from "./Header/ChatHeader";
import ChatMessages from "./Message/ChatMessages";
import ChatFooter from "./Footer/ChatFooter";

const Chatbox = ({chatUser}) => {
  // console.log(chatUser);
  return (
    <div className=" flex flex-col p-5 grow h-[93vh]">
      {chatUser ?
        <>
          {chatUser.data ? <ChatHeader user={chatUser.data} /> : <ChatHeader user={chatUser} />}
          <ChatMessages user={chatUser}  />
          <ChatFooter user={chatUser} />
        </>:
        <div className="w-fit mx-auto translate-y-[50%]">Select Chat</div>
      }
    </div>
  );
};

export default Chatbox;
