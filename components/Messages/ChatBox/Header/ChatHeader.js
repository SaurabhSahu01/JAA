import React from "react";
import useWindowSize from "@/components/Hook/useWindowSize";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";

const ChatHeader = ({user, selectChatUser}) => {
  const {width} = useWindowSize();
  // console.log(user)
  return (
    <div className=" flex justify-start items-center gap-3 pb-2 border-b border-black/[0.3]">
    {width<=500 ? <ChevronLeftIcon onClick={()=>selectChatUser(null)} className="w-[1.5rem] h-[1.5rem] cursor-pointer" />:<></>}
      <div className=" flex justify-center items-center gap-2">
        {user?.photo ? <img className="w-[50px] h-[50px] rounded-full object-cover" src={user?.photo} /> : <img className="w-[50px] h-[50px] rounded-full object-cover" src="/icons/profileIcon.webp" />}
        <div>
          <div className=" font-medium text-lg">{user?.firstName} {user?.lastName}</div>
          {/* <div className=" font-medium text-lg">{user.name}</div> */}
          <p className=" text-xs font-medium text-gray-400">{user?.school}</p>
        </div>
      </div>
    </div>
  );
};

export default ChatHeader;
