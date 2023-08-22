import { db } from '@/src/utils/firebase';
import { collection, doc, onSnapshot } from 'firebase/firestore';
import React, { useRef, useState } from 'react'
import cookieCutter from "cookie-cutter";
import ChatMessage from './ChatMessage';

function ChatMessages({ user }) {

  const [messages, setMessages] = useState([]);
  const [err, setErr] = useState(false);
  const ref = useRef();
  
  React.useEffect(() => {
    const uid = cookieCutter.get('uid');
    const sub = onSnapshot(doc(doc(db, 'chats', uid), 'chats', user.id), (snap) => {
      // console.log(Object.values(snap.data()));
      // console.log(snap.exists());
      if (!snap.exists()) {
        setErr(true);
      }
      else {
        setErr(false);
        let mergedArray = Object.values(snap.data()).reduce((result, innerArray) => {           // sari array ulti fulti h
          return result.concat(innerArray);
        }, []);
        setMessages(mergedArray); /// need to fix date problem (20/08 and 20/8 are not diffent)
        /******************************************* */
        scrollToBottom()
      }

    });
  }, [user.id]);

  const scrollToBottom = () => {
    const chatcontainer = ref.current;
    chatcontainer.scrollTop = chatcontainer.scrollHeight;
  }

  return (
    <div ref={ref} className=' grow p-5 overflow-auto scrollbar flex flex-col'>
      {!err ?
        messages.map((message, index) => {
          {/* console.log(message); */ }
          return (
            <ChatMessage message={message} />
          )
        }) :
        <div>No Chat Found</div>
      }
    </div>
  )
}

export default ChatMessages
