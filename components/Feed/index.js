import React from 'react'
import Layout from '../Layout'
import cookieCutter from "cookie-cutter"
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
        <div>this is feed</div>
  )
}

export default Feed