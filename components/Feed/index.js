import React, { useState } from 'react'
import FeedUpload from './FeedUpload'
import UploadPopup from './UploadPopup'
import Post from './Post'
function Feed() {

  const [wantShare, setWantShare] = useState(false);

  return (
    <>
      {wantShare && <UploadPopup setWantShare={setWantShare} />}
      <div className='max-w-[45rem] flex items-center mx-auto ' >
        <div className=' mx-auto lg:mx-0 w-11/12'>
          <FeedUpload setWantShare={setWantShare} />
          <div className='w-full'>
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
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