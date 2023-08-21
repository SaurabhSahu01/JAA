import React, { useState } from "react";
import Chats from "./chat/Chats";
import UsersPopUp from "./UsersPopUp";
import { PlusIcon } from "@heroicons/react/24/outline";

function ChatSidebar() {
  const [usersPopup, setusersPopup] = useState(false);

  return (
    <div className="w-[400px] h-[91vh] p-5 overflow-x-auto scrollbar shrink-0 border-r border-black/[0.2]">
      <div className={`absolute bottom-5 left-[340px] z-[1]`}>
        {/* search user icon */}
        <PlusIcon className="w-9 h-9 p-1 bg-[#1B2D56] font-bold hover:bg-[#3a5285] text-white rounded-full transition-all duration-200 ease-linear" onClick={() => setusersPopup(true)} />
      </div>
        {/* popup to search user and add */}
      {usersPopup && (
        <UsersPopUp onHide={() => setusersPopup(false)} title="Find Users" />
      )}
      <div className="flex flex-col h-full">
        <Chats />
      </div>
    </div>
  );
}

export default ChatSidebar;
