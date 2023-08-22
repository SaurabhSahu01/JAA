import React, { useRef, useState } from 'react'

function ChatMessages() {

  const [messages, setMessages] = useState([]);
  const [self, setSelf] = useState(true);
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

  const scrollToBottom = () => {
    const chatcontainer = ref.current;
    chatcontainer.scrollTop = chatcontainer.scrollHeight;
  }

  return (
    <div ref={ref} className=' grow p-5 overflow-auto scrollbar flex flex-col'>
      {/* {messages?.filter((m)=>{
      return m?.deletedInfo?.[currentUser?.uid] !== DELETED_FOR_ME && !m?.deletedInfo?.deletedForEveryone && !m?.deletedChatInfo?.[currentUser.uid]
    }).map((m)=>{
      return (<ChatMessage message={m} key={m.id} />)
    })} */}
      <div className={`mb-3 max-w-[300px] ${self ? "self-end" : ""}`}>
        <div className={`relative group flex flex-col gap-4 p-3  rounded-xl break-all ${self ? "rounded-br-sm bg-blue-400/20" : "rounded-bl-sm bg-[#1B2D56]/20"}`}  >
          Hello Shubhamuuuuuubuihyhhyhhhhhkjhikhjikhikh
          <div className=" absolute bottom-[1px] right-1 text-xs text-c3">
            {/* {formateDate(date)} */}date
          </div>
        </div>
      </div>

      <div className={`mb-3 max-w-[300px] ${!self ? "self-end" : ""}`}>
        <div className={`relative group flex flex-col gap-4 p-3  rounded-xl break-all ${!self ? "rounded-br-sm bg-blue-400/20" : "rounded-bl-sm bg-[#1B2D56]/10"}`}  >
          Hello Shubhamuuuuuubuihyhhyhhhhhkjhikhjikhikh
          <div className=" absolute bottom-[1px] right-1 text-xs text-c3">
            {/* {formateDate(date)} */}date
          </div>
        </div>
      </div>

    </div>
  )
}

export default ChatMessages
