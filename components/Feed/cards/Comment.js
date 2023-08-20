import React from 'react'
import cookieCutter from "cookie-cutter";

const Comment = ({ data }) => {

    const { comment, date, userid } = data;
    const [user, setUser] = React.useState(null);

    const getProfile = async () => {
        await fetch(`/api/getuserdata?q=${userid}&required=name`, {
            method: "GET",
            headers: {
                "authorization": `Bearer ${cookieCutter.get('userToken')} ${cookieCutter.get('refreshToken')}`
            },
        }).then((res) => { return res.json() }).then((res) => {
            setUser(res);
        }).catch((err) => {
            console.log(err);
        });
    }

    React.useEffect(() => {
        getProfile();
    }, [])
    return (
            <div className='relative flex items-center w-full'>
                {user?.photo ? <img src={user?.photo} alt="user" className='w-7 h-7 object-cover mr-2 rounded-full cursor-pointer' /> :
                    <img src='/icons/profileIcon.png' className='w-8 h-8 rounded-full mr-2' alt='profilepic'/>}
                <div className='relative w-full'>
                    <p className=' font-normal text-sm'><span className=' font-medium cursor-pointer hover:text-blue-500 text-slate-500'>{user?.name}</span> <span className='text-primarycolor font-medium'>{comment}</span></p>
                    <p className=' font-light text-xs text-gray-500'>{date[0]+date[1]}</p>
                </div>
            </div>
    )
}

export default Comment
