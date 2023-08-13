import React from 'react'
import FeedUpload from './FeedUpload'
import UploadPopup from './UploadPopup'
function Feed() {
  return (
    <div className='md:w-8/12 lg:w-6/12 xs:w-full mx-auto flex-col justify-center items-center'> 
      <FeedUpload/>
      <UploadPopup/>
    </div>
  )
}

export default Feed