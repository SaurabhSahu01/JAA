import { db } from '@/src/utils/firebase';
import { doc, onSnapshot } from 'firebase/firestore';
import React, { useRef, useState, useEffect } from 'react'
import cookieCutter from "cookie-cutter";
import ChatMessage from './ChatMessage';

// function to reverse the date as key we are receiving in the data 
// function reverseKey(key) {
//   const keys = key.split('/');
//   keys.reverse();
//   return (keys[0] + "/" + keys[1] + "/" + keys[2]);
// }

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

        const snapData = snap.data();

        // function to get the date keys ordered in ascending order
        let snapDataKeys = Object.keys(snapData);
        // snapDataKeys  = snapDataKeys.map((keys) => {
        //   return reverseKey(keys);
        // })
        snapDataKeys = snapDataKeys.sort((a, b) => {
          return a.localeCompare(b);
        })
        // snapDataKeys = snapDataKeys.map(keys => {
        //   return reverseKey(keys);
        // })
        console.log("snapDataKeys : ", snapDataKeys);

        const finalChat = {};
        for (const keys of snapDataKeys) {
          const sortedElem = snapData[keys]?.sort((a, b) => {
            const timeA = a.time;;
            const timeB = b.time;
            return timeA > timeB;
          });
          const sortedChats = []
          for (const elements of sortedElem) {
            sortedChats.push(elements);
          }
          finalChat[keys] = sortedChats;
        }
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
        Object.keys(messages).map((datekey) => {
          return (
            <div key={datekey}>
              <div className='flex flex-row items-center justify-center my-2'>
                <p className='text-sm font-light bg-gray-100 w-fit p-1 rounded-md text-gray-500'>{datekey}</p>
              </div>
              {messages[datekey]?.map((message, index) => (
                <ChatMessage message={message} key={index} user={user} />
              ))}
            </div>
          )
        })
         :
      <div>No Chat Found</div>
      }
    </div>
  )
}

export default ChatMessages
