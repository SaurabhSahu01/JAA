import React from "react";
import ChatHeader from "./Header/ChatHeader";
import ChatMessages from "./Message/ChatMessages";
// import { useChatContext } from "@/context/ChatContext";
import ChatFooter from "./Footer/ChatFooter";
// import { useAuth } from "@/context/authContext";

const Chatbox = () => {
  // const { currentUser } = useAuth();
  // const { data, users } = useChatContext();

  // const isUserBlocked = users[currentUser?.uid]?.blockedUsers?.find(
  //   (u) => u === data?.user?.uid
  // );

  // const IamBlocked = users[data.user.uid]?.blockedUsers?.find(
  //   (u) => u === currentUser?.uid
  // );

  return (
    <div className=" flex flex-col p-5 grow h-[91vh]">
      <ChatHeader />
      {/* {data.chatId &&  */}
      <ChatMessages />
      {/* } */}
      {/* {!isUserBlocked && !IamBlocked &&  */}
      <ChatFooter />
      {/* } */}

      {/* {isUserBlocked && (
        <div className=" w-full text-center text-c3 py-5">
          This user has been blocked.
        </div>
      )}
      {IamBlocked && (
        <div className=" w-full text-center text-c3 py-5">
          {`${data.user.name} has blocked you!`}
        </div>
      )} */}
    </div>
  );
};

export default Chatbox;
