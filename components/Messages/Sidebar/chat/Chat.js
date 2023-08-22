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

    return (
        <div
            onClick={() => selectChatUser(profile)}
            className="flex items-center gap-2 rounded-xl bg-blue-200/30 shadow-sm hover:bg-gray-300 py-2 px-3 cursor-pointer"
        >
            {profile?.photo ? <img src={profile?.photo} className="w-[50px] h-[50px] rounded-full object-cover" /> : <img src="/icons/profileIcon.png" className="w-[50px] h-[50px]" />}
            {profile && <div className=" flex flex-col justify-center">
                <span className=" text-base text-black flex items-center justify-between">
                    <div className=" font-medium text-lg">{profile?.firstName.charAt(0).toUpperCase() + profile?.firstName.slice(1)} {profile?.lastName.charAt(0).toUpperCase() + profile?.lastName.slice(1)}</div>
                </span>
                <p className=" text-sm text-gray-500">{profile?.school}</p>
            </div>}
        </div>
    )
}

export default Chat
