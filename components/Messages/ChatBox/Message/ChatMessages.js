import { db } from '@/src/utils/firebase';
import { doc, onSnapshot } from 'firebase/firestore';
import React, { useRef, useState, useEffect } from 'react'
import cookieCutter from "cookie-cutter";
import ChatMessage from './ChatMessage';

function ChatMessages({ user }) {

  const [messages, setMessages] = useState([]);
  const [err, setErr] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const uid = cookieCutter.get('uid');
    const sub = onSnapshot(doc(doc(db, 'chats', uid), 'chats', user.id), (snap) => {
      if (!snap.exists()) {
        setErr(true);
      }
      else {
        setErr(false);
        console.log("snapData : ", snap.data());
        // const mergedArray = Object.values(snap.data()).reduce((result, innerArray) => {
        //   console.log("result : ", result);
        //   return result.concat(innerArray);
        // }, []);
        const snapData = snap.data();
        const finalChat = [];
        Object.values(snapData).forEach(async elem => {
          // elem is an array too, sorting the elements as per the time
          const sortedElem = await elem.sort((a, b) => {
            const timeA = new Date(a.time.replace(/-/g, ' '));
            const timeB = new Date(b.time.replace(/-/g, ' '));
            return timeA - timeB;
          });
          console.log("sortedElem : ", sortedElem);
          for (const elements of sortedElem) {
            finalChat.push(elements);
          }
        })
        console.log("finalChat : ", finalChat);
        setMessages(finalChat);
      }
    });
  }, [user.id]);

  // Scroll to bottom whenever messages change
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    const chatcontainer = ref.current;
    if (chatcontainer) {
      chatcontainer.scrollTop = chatcontainer.scrollHeight;
    }
  }

  return (
    <div ref={ref} className='grow p-5 overflow-auto scrollbar flex flex-col'>
      {!err ?
        messages.map((message, index) => (
          <ChatMessage message={message} key={index} />
        )) :
        <div>No Chat Found</div>
      }
    </div>
  )
}

export default ChatMessages
