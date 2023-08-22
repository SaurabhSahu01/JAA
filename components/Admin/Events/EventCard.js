import React from 'react'
import { TrashIcon } from '@heroicons/react/24/solid'
function EventCard({id, date, event}) {
  return (
    <div className='w-full flex md:flex-row xs:flex-col justify-center items-center gap-3'>
        <p>Date : {date}</p>
        <p>{event}</p>
        <TrashIcon className='w-[2rem] h-[2rem] text-red-500' onClick={() => console.log(`${id} deleted`)}/>
    </div>
  )
}

export default EventCard