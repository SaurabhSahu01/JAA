import React from 'react'
import { db } from '@/src/utils/firebase';
import { onSnapshot, doc, collection, getDoc } from "firebase/firestore"
import cookieCutter from 'cookie-cutter';
import { useRouter } from 'next/router';

function Messages() {
  const router = useRouter();
  const [verified, setVerified] = React.useState(false);
  React.useEffect(() => {
    const uid = cookieCutter.get('uid');
    const documentRef = doc(db, 'users', uid);
    getDoc(documentRef).then(docSnapshot => {
      if (docSnapshot.exists()) {
        const data = docSnapshot.data();
        if (data.verified === false || data.verified === 'pending') {
          setTimeout(() => {
            router.push('/join');
          }, 10)
        }
        else{
          setVerified(true);
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
    verified && <>
      <div className='text-2xl font-bold'>Coming Soon...</div>
    </>
  )
}

export default Messages