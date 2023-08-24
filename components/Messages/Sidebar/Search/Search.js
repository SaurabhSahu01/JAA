import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";

const Search = (props) => {
    const [search, setsearch] = useState("");
    const {users} = props;
    // const handleSelect = async () => {
    //     try {
    //         const combinedId =
    //             currentUser.uid > user.uid
    //                 ? currentUser.uid + user.uid
    //                 : user.uid + currentUser.uid;

    //         const res = await getDoc(doc(db, "chats", combinedId));

    //         if (!res.exists()) {
    //             await setDoc(doc(db, "chats", combinedId), { messages: [] });

    //             const currentUserChatRef = await getDoc(
    //                 doc(db, "userchats", currentUser.uid)
    //             );

    //             const userChatRef = await getDoc(
    //                 doc(db, "userchats", user.uid)
    //             );

    //             if (!currentUserChatRef.exists()) {
    //                 await setDoc(doc(db, "userchats", currentUser.uid), {});
    //             }
    //             await updateDoc(doc(db, "userchats", currentUser.uid), {
    //                 [combinedId + ".userInfo"]: {
    //                     uid: user.uid,
    //                     name: user.name,
    //                     photoURL: user.photoURL || null,
    //                     color: user.color,
    //                 },
    //                 [combinedId + ".date"]: serverTimestamp(),
    //             });

    //             if (!userChatRef.exists()) {
    //                 await setDoc(doc(db, "userchats", user.uid), {});
    //             }
    //             await updateDoc(doc(db, "userchats", user.uid), {
    //                 [combinedId + ".userInfo"]: {
    //                     uid: currentUser.uid,
    //                     name: currentUser.name,
    //                     photoURL: currentUser.photoURL || null,
    //                     color: currentUser.color,
    //                 },
    //                 [combinedId + ".date"]: serverTimestamp(),
    //             });
    //         } else {
    //             // chat document exists
    //             await updateDoc(doc(db, "userchats", currentUser.uid), {
    //                 [combinedId+".chatDeleted"]: deleteField(),
    //               })
    //         }

    //         setUser(null);
    //         setUsername("");
    //         dispatch({ type: "CHANGE_USER", payload: user });
    //     } catch (error) {
    //         console.error(error);
    //     }
    // };


    return (
        <div className="shrink-0 mx-2">
            <div className="relative">
                <div className=" shrink-0 relative z-10 flex justify-center w-5/6 mx-6 sm:mx-auto  py-2">
                    <MagnifyingGlassIcon className="absolute top-5 left-2 text-zinc-500 w-5 h-5" />
                    <input
                        type="text"
                        value={search}
                        onChange={(e) => setsearch(e.target.value)}
                        placeholder="Search Username..."
                        className="w-full h-11 rounded-xl text-black pl-9 pr-5 placeholder:text-black outline-none text-base "
                    />
                </div>
            </div>

            {
                (search !== '') ?

                    ((users.length !== 0) ? users.sort((a, b) => a.data.firstName.localeCompare(b.data.firstName))?.map((user, index) => {
                        if (user.data.firstName.toLocaleLowerCase().includes(search.toLocaleLowerCase()) || user.data.firstName.toLocaleLowerCase().includes(search.toLocaleLowerCase()) || user.data.lastName.toLocaleLowerCase().includes(search.toLocaleLowerCase())) {
                            return (
                                <div
                                    key={user.id}
                                    onClick={() => {
                                        props.selectChatUser(user)
                                        props.onHide()
                                    }}
                                    className="flex items-center gap-2 rounded-xl bg-transparent/20 hover:bg-white hover:text-black py-2 px-3 cursor-pointer"
                                >
                                    {user.data.photo ? <img src={user.data.photo} alt="user photo" className='w-[50px] h-[50px] p-1 rounded-full object-cover' /> : <img src="/icons/profileIcon.png" className="w-[50px] h-[50px]" />}
                                    <div className=" flex flex-col justify-center ">
                                        <span className=" text-base flex items-center justify-between">
                                            <div className=" font-medium">{user.data.firstName} {user.data.lastName}</div>
                                        </span>
                                        <p className=" text-sm text-gray-500">{user.data.school}</p>
                                    </div>

                                </div>
                            )
                        }
                    }) :
                        <div className='col-span-4 text-xl tracking-widest'>
                            No User Found
                        </div>)
                    :
                    (<></>)
            }
        </div>
    );
};

export default Search;
