import React from 'react'
import cookieCutter from 'cookie-cutter';

function Events() {
  const [event, setEvent] = React.useState("");
  const [date, setDate] = React.useState("");

  return (
    <>
      <div className='w-full flex md:flex-row xs:flex-col justify-center items-center gap-3 my-2'>
          <input placeholder='event details' type="text" className='outline-none border-[1px] border-primarycolor py-1 px-2 rounded-sm md:w-7/12 xs:w-11/12' value={event} onChange={(e) => {
            setEvent(event => e.target.value);
          }}></input>
          <input placeholder='date' type="date" className='outline-none border-[1px] border-primarycolor py-1 px-2 rounded-sm' value={date} onChange={(e) => {
            setDate(date => e.target.value);
          }}></input>
          <div className={`text-white py-2 px-4 rounded-md ${(event !== null && date !== null) ? 'cursor-pointer bg-primarycolor' : 'cursor-not-allowed bg-primarycolor/50'}`} onClick={() => {
            if(event !== "" && date !== ""){
              fetch('/api/addevent', {
                method: "POST",
                headers: {
                  'Content-type': 'application/json; charset=UTF-8',
                  "authorization": `Bearer ${cookieCutter.get('atkn')}`
                },
                body: JSON.stringify({
                  event: event,
                  date: date
                })
              }).then(res => res.json()).then(data => {
                console.log(data);
                setDate("");
                setEvent("");
              }).catch(err => console.error(err))
            }
          }}>Add Event</div>
      </div>
    </>
  )
}

export default Events