import React, { useState } from 'react'
import FeedUpload from './FeedUpload'
import UploadPopup from './cards/UploadPopup'
import Post from './cards/Post'
import { db } from '@/src/utils/firebase';
import { onSnapshot, doc, collection, getDoc } from "firebase/firestore"
import cookieCutter from 'cookie-cutter';
import { useRouter } from 'next/router';

function Feed() {
  const router = useRouter();
  const [wantShare, setWantShare] = useState(false);
  const [posts, setPosts] = useState([]);
  const [verified, setVerified] = useState(false);

  React.useEffect(() => {
    const uid = cookieCutter.get('uid');
    const documentRef = doc(db, 'users', uid);
    getDoc(documentRef).then(docSnapshot => {
      if (docSnapshot.exists()) {
        const data = docSnapshot.data();
        if(data.verified === false || data.verified === 'pending'){
          setTimeout(() => {
            router.push('/join');
          }, 100)
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

  React.useEffect(() => {
    verified && onSnapshot(collection(db, "posts"), (snap) => {
      const postData = [];
      snap.forEach((doc) =>
        postData.push({ ...doc.data(), id: doc.id })
      );
      postData.reverse();
      setPosts(postData);
    });
  }, []);

  // console.log(posts)

  return (
    verified && <>
      {wantShare && <UploadPopup setWantShare={setWantShare} />}
      <div className='max-w-[45rem] flex items-center mx-auto ' >
        <div className=' mx-auto lg:mx-0 w-11/12'>
          <FeedUpload setWantShare={setWantShare} />
          <div className='w-full'>
            {
              posts.map((post, index) => {
                {/* console.log(post) */ }
                return (
                  <Post data={post} key={index} />
                )
              })
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Feed