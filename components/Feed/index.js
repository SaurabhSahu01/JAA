import React, { useState } from 'react'
import FeedUpload from './FeedUpload'
import UploadPopup from './cards/UploadPopup'
import Post from './cards/Post'
import { db } from '@/src/utils/firebase';
import { onSnapshot } from "firebase/firestore"
import { collection } from 'firebase/firestore';

function Feed() {

  const [wantShare, setWantShare] = useState(false);
  const [posts, setPosts] = useState([]);

  React.useEffect(() => {
    onSnapshot(collection(db, "posts"), (snap) => {
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
    <>
      {wantShare && <UploadPopup setWantShare={setWantShare} />}
      <div className='max-w-[45rem] flex items-center mx-auto ' >
        <div className=' mx-auto lg:mx-0 w-11/12'>
          <FeedUpload setWantShare={setWantShare} />
          <div className='w-full'>
          {
            posts.map((post, index)=>{
              {/* console.log(post) */}
              return(
                <Post data={post} key={index} />
              )
            })
          }
            {/* <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post /> */}
          </div>
        </div>
        {/* <div className='fixed ml-[38rem] mt-0'>
        <p>Your Posts</p>
        <p>Liked Posts</p>
      </div> */}
      </div>
    </>
  )
}

export default Feed