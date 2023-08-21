import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useRef, useState } from "react";
import Chat from "./Chat";
// import { useChatContext } from "@/context/ChatContext";
// import {
//   Timestamp,
//   collection,
//   doc,
//   getDoc,
//   onSnapshot,
//   query,
//   updateDoc,
//   where,
// } from "firebase/firestore";
// import { db } from "@/firebase/firebase";

// import { RiSearch2Line } from "react-icons/ri";
// import Avatar from "../Common/Avatar";
// import { useAuth } from "@/context/authContext";
// import { formateDate } from "@/utils/helpers";

const Chats = () => {
  const [search, setsearch] = useState("");
  // const {
  //   users,
  //   setusers,
  //   chats,
  //   setchats,
  //   selectedChat,
  //   setSelectedChat,
  //   dispatch,
  //   data,
  //   resetFooterState
  // } = useChatContext();
  // const { currentUser } = useAuth();

  // const isBlockExecutedRef = useRef(false);
  // const isUsersFetchedRef = useRef(false);

  // const readChat = async (chatId) => {
  //   const chatRef = doc(db, "chats", chatId);
  //   const chatDoc = await getDoc(chatRef);

  //   let updatedMessages = chatDoc.data().messages.map((m) => {
  //     if (m?.read === false) {
  //       m.read = true;
  //     }
  //     return m;
  //   });
  //   await updateDoc(chatRef, {
  //     messages: updatedMessages,
  //   });
  // };

  // const handleSelect = (user, selectedChatId) => {
  //   setSelectedChat(user);
  //   dispatch({ type: "CHANGE_USER", payload: user });

  //   if(unreadMsgs?.[selectedChatId]?.length>0){
  //     readChat(selectedChatId);
  //   }
  // };
  // // console.log(selectedChat);

  // useEffect(()=>{
  //   resetFooterState();
  // }, [data?.chatId])

  // useEffect(() => {
  //   onSnapshot(collection(db, "users"), (snap) => {
  //     const updateUser = {};
  //     snap.forEach((doc) => {
  //       updateUser[doc.id] = doc.data();
  //     });
  //     setusers(updateUser);

  //     if (!isBlockExecutedRef.current) {
  //       isUsersFetchedRef.current = true;
  //     }
  //   });
  // }, []);

  // // handling unread msgs
  // useEffect(() => {
  //   const documentIds = Object.keys(chats);
  //   if (documentIds.length === 0) return;
  //   const q = query(
  //     collection(db, "chats"),
  //     where("__name__", "in", documentIds)
  //   );

  //   const unsub = onSnapshot(q, (snapshot) => {
  //     let msgs = {};
  //     snapshot.forEach((doc) => {
  //       if (doc.id !== data.chatId) {
  //         msgs[doc.id] = doc
  //           .data()
  //           .messages.filter(
  //             (m) => m?.read === false && m?.sender !== currentUser.uid
  //           );
  //       }
  //       Object.keys(msgs || {})?.map((c) => {
  //         if (msgs[c]?.length < 1) {
  //           delete msgs[c];
  //         }
  //       });
  //     });
  //     setUnreadMsgs(msgs);
  //   });
  //   return () => unsub();
  // }, [chats, selectedChat]);

  // useEffect(() => {
  //   const getChats = () => {
  //     const unsub = onSnapshot(doc(db, "userchats", currentUser.uid), (doc) => {
  //       if (doc.exists()) {
  //         const data = doc.data();
  //         setchats(data);

  //         if (
  //           !isBlockExecutedRef.current &&
  //           isUsersFetchedRef.current &&
  //           users
  //         ) {
  //           const firstChat = Object.values(data)
  //             .filter((chat) => !chat.hasOwnProperty("chatDeleted"))
  //             .sort((a, b) => b.date - a.date)[0];

  //           if (firstChat) {
  //             const user = users[firstChat?.userInfo?.uid];

  //             handleSelect(user);

  //             const chatId =
  //               currentUser.uid > user.uid
  //                 ? currentUser.uid + user.uid
  //                 : user.uid + currentUser.uid;

  //             readChat(chatId);
  //           }

  //           isBlockExecutedRef.current = true;
  //         }
  //       }
  //     });
  //   };
  //   currentUser?.uid && getChats();
  // }, [currentUser]);

  // const filteredChats = Object.entries(chats || {})
  //   .filter(([, chat]) => !chat.hasOwnProperty("chatDeleted"))
  //   .filter(
  //     ([, chat]) =>
  //       chat?.userInfo?.name
  //         .toLowerCase()
  //         .includes(search.toLocaleLowerCase()) ||
  //       chat?.lastMessage?.text
  //         .toLowerCase()
  //         .includes(search.toLocaleLowerCase())
  //   )
  //   .sort((a, b) => b[1].date - a[1].date);

  return (
    <div className=" mt-2 border-t-2  flex flex-col h-full">
      <div className=" shrink-0 relative z-10 flex justify-center w-full  py-5">
        <MagnifyingGlassIcon className="absolute top-8 left-2 text-zinc-500 w-5 h-5" />
        <input
          type="text"
          value={search}
          onChange={(e) => setsearch(e.target.value)}
          placeholder="Search Username..."
          className="w-full h-10 rounded-xl text-black pl-9 pr-5 placeholder:text-black outline-none text-base "
        />
      </div>
      <ul className=" flex  flex-col w-full my-2 gap-[2px]">
        <Chat /> 
      </ul>
    </div>
  );
};

export default Chats;

// {Object.keys(users || {}).length > 0 &&
//           filteredChats?.map((chat) => {
//             const timestamp = new Timestamp(
//               chat[1].date?.seconds,
//               chat[1].date?.nanoseconds
//             );

//             const date = timestamp.toDate();

//             {
//               /* console.log(date); */
//             }
//             const user = users[chat[1].userInfo.uid];
//             return (
//               <li
//                 key={chat[0]}
//                 onClick={() => handleSelect(user, chat[0])}
//                 className={`h-[90px] flex items-center gap-4 rounded-3xl hover:bg-c1 p-4 cursor-pointer ${
//                   selectedChat?.uid === user?.uid ? "bg-c1" : ""
//                 }`}
//               >
//                 <Avatar size="x-large" user={user} />
//                 <div className="flex flex-col gap-1 grow relative">
//                   <span className="text-base text-white flex items-center justify-between">
//                     <div className="font-medium">{user?.name}</div>
//                     <div className="text-c3 text-xs">{formateDate(date)}</div>
//                   </span>
//                   <p className="text-sm text-c3 line-clamp-1 break-all">
//                     {chat[1]?.lastMessage?.text ||
//                       (chat[1]?.lastMessage?.img && "image") ||
//                       "Send first message"}
//                   </p>

//                   {!!unreadMsgs?.[chat[0]]?.length && (
//                     <span className="absolute right-0 top-7 min-w-[20px] h-5 rounded-full bg-red-500 flex justify-center items-center text-sm">
//                       {unreadMsgs?.[chat[0]]?.length}
//                     </span>
//                   )}
//                 </div>
//               </li>
//             );
//           })}

 