import React from 'react'
import cookieCutter from 'cookie-cutter';

function User({ useruid }) {
    const [data, setData] = React.useState(null);
    React.useEffect(() => {
        fetch(`/api/getuserdata?q=${useruid}`,{
            method: "GET",
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                "authorization": `Bearer ${cookieCutter.get('userToken')} ${cookieCutter.get('refreshToken')}`
            }
        }).then(res => res.json()).then(data => setData(data.data)).catch(err => console.log(err))
    }, [])
    return (
        data && <p>Name : {data.firstName}</p>
    )
}

export default User