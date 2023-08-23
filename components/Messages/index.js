import React from 'react'
import { db } from '@/src/utils/firebase';
import { onSnapshot, doc, collection, getDoc } from "firebase/firestore"
import cookieCutter from 'cookie-cutter';
import { useRouter } from 'next/router';
import { Toaster } from "react-hot-toast";
import Chatbox from './ChatBox';
import Chat from './Sidebar/chat/Chat';
import UsersPopUp from './Sidebar/UsersPopUp';
import { PlusIcon } from '@heroicons/react/24/outline';
import useWindowSize from '../Hook/useWindowSize';

function Messages() {
  const {width} = useWindowSize();
  console.log("screenwidth : ",width);

  const router = useRouter();
  const [verified, setVerified] = React.useState(false);
  const [usersPopup, setusersPopup] = React.useState(false);
  const [chatList, setChatList] = React.useState(null);
  /*********************************************************** */
  const [chatUser, selectChatUser] = React.useState(null);
  /************************************************************ */
  React.useEffect(() => {
    const currentUserid = cookieCutter.get('uid');
    const documentRef = doc(db, 'users', currentUserid);
    getDoc(documentRef).then(docSnapshot => {
      if (docSnapshot.exists()) {
        const data = docSnapshot.data();
        if (data.verified === false || data.verified === 'pending') {
          setTimeout(() => {
            router.push('/join');
          }, 10)
        }
        else {
          setVerified(true);
        }
      }
      else {
        console.log("document does not exists");
      }
    }).catch(err => {
      console.log('error getting the user verification details');
    })
  }, []);


  

  React.useEffect(() => {
    const currentUserid = cookieCutter.get('uid');
    const sub = onSnapshot(collection(doc(db, 'chats', currentUserid), 'chats'), (snap) => {
      const postData = [];
      snap.forEach((doc) => {
        postData.push({...doc.data(),id: doc.id,});
      });
      postData.reverse();
      setChatList(postData);
    });
  }, [])



  return (
    <>
      <div className='flex bg-slate-200 grow -mt-16 pt-16'>
        <div className={`md:w-[400px] sm:w-[50%] h-[84vh] md:h-[91vh] p-5 overflow-x-auto scrollbar shrink-0 border-r border-black/[0.2] relative ${width<=500 ? (chatUser === null ? "w-full block" : " hidden w-0") : "" } `}>
          <div className={`absolute bottom-5 right-5 z-[1]`}>
            {/* add user icon */}
            <PlusIcon className="cursor-pointer w-[3rem] h-[3rem] p-3 bg-[#1B2D56] hover:scale-110 text-white rounded-full transition-all duration-200 ease-linear" onClick={() => setusersPopup(true)} />
          </div>
          {/* popup to search user and add */}
          {usersPopup && (
            <UsersPopUp onHide={() => setusersPopup(false)} title="Find Users" selectChatUser={selectChatUser} />
          )}
          {chatList ?<div className="flex flex-col h-full gap-2">
            {/* map app chat list */}
            {chatList.map((list, index)=>{
              return(<Chat key={index} data={list} selectChatUser={selectChatUser} />)
            })}
          </div>:
          <div className='flex flex-col h-full w-full'>
             <p className='w-fit mx-auto mt-[50%]'>No Chat Found</p>
          </div>
          }
        </div>
        <Chatbox chatUser={chatUser} selectChatUser={selectChatUser} />
      </div>
      <Toaster toastOptions={{ duration: 2000 }} position="top-center" />
    </>
  )
}

export default Messages