import React from 'react'
import cookieCutter from "cookie-cutter"
import JNUNews from './JNUNews'

function Feed() {
  React.useEffect(() => {
    fetch('/api/isprofileset', {
      headers: {
        "authorization": `Bearer ${cookieCutter.get('userToken')} ${cookieCutter.get('refreshToken')}`,
        'content-type': 'application/json'
      }
    }).then(res => res.json()).then(res => console.log(res)).catch(e => console.log(e))
  }, [])
  return (
        <>
          <JNUNews/>
        </>
  ) 
}

export default Feed