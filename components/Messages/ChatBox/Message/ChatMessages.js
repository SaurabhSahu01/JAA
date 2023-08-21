// import { useChatContext } from '@/context/ChatContext'
// import { db } from '@/firebase/firebase'
// import { doc, onSnapshot } from 'firebase/firestore'
import React, { useEffect, useRef, useState } from 'react'
// import ChatMessage from './ChatMessage';
// import { DELETED_FOR_ME } from '@/utils/constansts';
// import { useAuth } from '@/context/authContext';

function ChatMessages() {

    const [messages, setMessages] = useState([]);
    // const {data,  setIsTyping} = useChatContext();
    // const {currentUser} = useAuth();
    const ref = useRef();

    // useEffect(()=>{
    //     const unsub = onSnapshot(doc(db, "chats", data.chatId), (doc)=>{
    //         if(doc.exists()){
    //             setMessages(doc.data().messages);
    //             setIsTyping(doc.data()?.typing?.[data.user.uid]) // handled typing here
    //         }
    //         setTimeout(() => {
    //           scrollToBottom();
    //         }, 0);
    //     })

    //     return ()=> unsub();
    // }, [data.chatId]);

    // const scrollToBottom =()=>{
    //   const chatcontainer = ref.current;
    //   chatcontainer.scrollTop = chatcontainer.scrollHeight;

    // }

  return (
    <div ref={ref}  className=' grow p-5 overflow-auto scrollbar flex flex-col'>
    {/* {messages?.filter((m)=>{
      return m?.deletedInfo?.[currentUser?.uid] !== DELETED_FOR_ME && !m?.deletedInfo?.deletedForEveryone && !m?.deletedChatInfo?.[currentUser.uid]
    }).map((m)=>{
      return (<ChatMessage message={m} key={m.id} />)
    })} */}
    chat messaghe 
    hjgfuf
    </div>
  )
}

export default ChatMessages
