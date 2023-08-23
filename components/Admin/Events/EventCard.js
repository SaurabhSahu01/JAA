import React from 'react'
import { TrashIcon } from '@heroicons/react/24/solid'
import cookieCutter from 'cookie-cutter';
import Loader from '@/components/common/Loader';

function EventCard({ id, date, event }) {
  const [loading, setLoading] = React.useState(false);
  return (
    <div className='w-full grid grid-cols-3 place-items-center p-2 shadow-lg gap-2 xs:text-sm md:text-md'>
      {loading && <div className='h-full w-full absolute top-0 right-0 z-[200] backdrop-blur-sm'>
        <Loader color="#1B2D56" loading={loading} size={70} />
      </div>}
      <p>Date : {date}</p>
      <p>{event}</p>
      <TrashIcon className='md:w-[2rem] md:h-[2rem] xs:w-[1.5rem] xs:h-[1.5rem] text-red-500' onClick={() => {
        setLoading(true);
        fetch(`/api/deleteevent?id=${id}`, {
          method: "GET",
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
            'authorization': `Bearer ${cookieCutter.get('atkn')}`
          }
        }).then(res => res.json()).then(data => {
          console.log(data);
          setLoading(false);
        }).catch(err => console.error(err));
      }} />
    </div>
  )
}

export default EventCard