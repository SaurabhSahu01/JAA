import React, { useEffect, useState } from 'react'
import cookieCutter from 'cookie-cutter';

const Chat = ({ data, selectChatUser }) => {
    const userid = data.id;
    const [profile, setProfile] = useState(null);
    useEffect(() => {
        const getProfile = async () => {
            await fetch(`/api/getuserdata?q=${userid}&required=all`, {
                method: "GET",
                headers: {
                    "authorization": `Bearer ${cookieCutter.get('userToken')} ${cookieCutter.get('refreshToken')}`
                },
            }).then((res) => { return res.json() }).then((res) => {
                // kam
                setProfile({ ...res.data, id: userid });
            }).catch((err) => {
                console.log(err);
            });
        }
        getProfile();
    }, []);
    const fullName = profile?.firstName + " " + profile?.lastName;
    return (
        <div
            onClick={() => selectChatUser(profile)}
            className="flex items-center gap-2 rounded-sm bg-blue-200/30 shadow-lg hover:bg-gray-100 py-2 px-3 cursor-pointer"
        >
            {profile?.photo ? <img src={profile?.photo} className="w-[50px] h-[50px] rounded-full object-cover" /> : <img src="/icons/profileIcon.webp" className="w-[50px] h-[50px]" />}
            {profile && <div className=" flex flex-col justify-center">
                <span className=" text-base text-black flex items-center justify-between">
                    <div className=" font-medium text-lg">{fullName}</div>
                </span>
                <p className=" text-sm text-gray-500">{profile?.school}</p>
            </div>}
        </div>
    )
}

export default Chat
