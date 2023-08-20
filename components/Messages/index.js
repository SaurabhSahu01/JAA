import React from 'react'
import { db } from '@/src/utils/firebase';
import { onSnapshot, doc, collection, getDoc } from "firebase/firestore"
import cookieCutter from 'cookie-cutter';
import { useRouter } from 'next/router';
import { toast, Toaster } from "react-hot-toast";

function Messages() {
  const router = useRouter();
  React.useEffect(() => {
    const uid = cookieCutter.get('uid');
    const documentRef = doc(db, 'users', uid);
    getDoc(documentRef).then(docSnapshot => {
      if (docSnapshot.exists()) {
        const data = docSnapshot.data();
        if (data.verified === false || data.verified === 'pending') {
          toast.error('Please Join the Alumni Family!');
          setTimeout(() => {
            router.push('/join');
          }, 1000)
        }
      }
      else {
        console.log("document does not exists");
      }
    }).catch(err => {
      console.log('error getting the user verification details');
    })
  }, [])
  return (
    <>
      <div className='text-2xl font-bold'>Coming Soon...</div>
      <Toaster toastOptions={{ duration: 2000 }} position="top-center" />
    </>
  )
}

export default Messages