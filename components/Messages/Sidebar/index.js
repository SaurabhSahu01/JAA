import React, { useState } from "react";
import UsersPopUp from "./UsersPopUp";
import { PlusIcon } from "@heroicons/react/24/outline";
import Chat from "./chat/Chat";

function ChatSidebar({selectChatUser}) {
  const [usersPopup, setusersPopup] = useState(false);

  return (
    <div className="md:w-[400px] sm:w-[50%] h-[91vh] p-5 overflow-x-auto scrollbar shrink-0 border-r border-black/[0.2] relative">
      <div className={`absolute bottom-5 right-5 z-[1]`}>
        {/* add user icon */}
        <PlusIcon className="w-9 h-9 p-1 bg-[#1B2D56] font-bold hover:bg-[#3a5285] text-white rounded-full transition-all duration-200 ease-linear" onClick={() => setusersPopup(true)} />
      </div>
        {/* popup to search user and add */}
      {usersPopup && (
        <UsersPopUp onHide={() => setusersPopup(false)} title="Find Users" selectChatUser={selectChatUser} />
      )}
      <div className="flex flex-col h-full">
        <Chat />
      </div>
    </div>
  );
}

export default ChatSidebar;
