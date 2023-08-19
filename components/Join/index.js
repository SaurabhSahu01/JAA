import React from 'react'
import Typewriter from 'typewriter-effect';

function Join() {
  return (
    <>
      <p className='text-3xl font-bold text-center'><Typewriter
        options={{
          strings: ['Blue Tick', 'Highlighted Comments', 'Stay Updated with Events'],
          autoStart: true,
          loop: true,
        }}
      /></p>
    </>
  )
}

export default Join