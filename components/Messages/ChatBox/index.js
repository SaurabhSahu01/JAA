import React from "react";
import ChatHeader from "./Header/ChatHeader";
import ChatMessages from "./Message/ChatMessages";
import ChatFooter from "./Footer/ChatFooter";
import useWindowSize from "@/components/Hook/useWindowSize";

const Chatbox = ({chatUser, selectChatUser}) => {
  // console.log(chatUser);
  const {width} = useWindowSize();
  return (
    <div className={`${width<=500 ? (chatUser ? "w-full block" : " hidden w-0") : "" } flex flex-col p-5 grow h-[84vh] md:h-[91vh]`}>
      {chatUser ?
        <>
          {chatUser.data ? <ChatHeader user={chatUser.data} selectChatUser={selectChatUser} /> : <ChatHeader user={chatUser} selectChatUser={selectChatUser} />}
          <ChatMessages user={chatUser}  />
          <ChatFooter user={chatUser} />
        </>:
        <div className="w-fit mx-auto translate-y-[50%]">Select Chat</div>
      }
    </div>
  );
};

export default Chatbox;
