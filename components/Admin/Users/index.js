import React from 'react'
import UserCard from './UserCard'
import cookieCutter from 'cookie-cutter';

function Users() {
  const [data, setData] = React.useState(null);
  React.useEffect(() => {
    !data && fetch('/api/getadminusers', {
      method: "GET",
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        "authorization": `Bearer ${cookieCutter.get('atkn')}`
      }
    }).then(res => res.json())
    .then(response => {
      setData(response.data);
    })
  }, [])
  return (
   <div className='h-screen flex-col justify-center items-center gap-[4rem]'>
    {
      data && data.map((items) => {
        return <UserCard id={items.id} verified={items.verified} firstName={items.profile.firstName} lastName={items.profile.lastName} number={items.profile.number} gender={items.profile.gender} school={items.profile.school}  hostel={items.profile.hostel} joiningYear={items.profile.joiningYear} graduationYear={items.profile.graduationYear} program={items.profile.program} dob={items.profile.dob} photo={items.profile.photo} key={items.id}/>
      })
    }
   </div>
  )
}

export default Users