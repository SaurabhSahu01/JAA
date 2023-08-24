import React from "react";
import useWindowSize from "@/components/Hook/useWindowSize";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";

const ChatHeader = ({user, selectChatUser}) => {
  const {width} = useWindowSize();
  // console.log(user)
  return (
    <div className=" flex justify-between items-center pb-2 border-b border-black/[0.3]">
    {width<=500 ? <ChevronLeftIcon onClick={()=>selectChatUser(null)} className="w-8 h-8 cursor-pointer" />:<></>}
      <div className=" flex items-center gap-4">
        {user?.photo ? <img className="w-[50px] h-[50px] rounded-full object-cover" src={user?.photo} /> : <img className="w-[50px] h-[50px] rounded-full object-cover" src="/icons/profileIcon.png" />}
        <div>
          <div className=" font-medium text-lg">{user?.firstName.charAt(0).toUpperCase() + user?.firstName.slice(1)} {user?.lastName.charAt(0).toUpperCase() + user?.lastName.slice(1)}</div>
          {/* <div className=" font-medium text-lg">{user.name}</div> */}
          <p className=" text-xs font-medium text-gray-500">{user?.school}</p>
        </div>
      </div>
    </div>
  );
};

export default ChatHeader;
