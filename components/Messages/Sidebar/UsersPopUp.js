import React, { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import cookieCutter from "cookie-cutter";
import Search from "./Search/Search";

const UsersPopUp = (props) => {
  const uid = cookieCutter.get('uid')
  const [users, setUsers] = useState(null);


  const getverifiedUsers = async () => {
    await fetch('/api/getverifiedusers', {
      method: "GET",
      headers: {
        "authorization": `Bearer ${cookieCutter.get('userToken')} ${cookieCutter.get('refreshToken')}`,
      },
    }).then((res) => { return res.json() }).then((res) => {
      // console.log(res.data)
      setUsers(res.data);
    }).catch((err) => {
      console.log(err);
    });
  }

  React.useEffect(() => {
    getverifiedUsers()
  }, []);

  // const slectUser = async (user) => {
  //   try {
  //     const combinedId =
  //       currentUser.uid > user.uid
  //         ? currentUser.uid + user.uid
  //         : user.uid + currentUser.uid;

  //     const ref = await getDoc(doc(db, "chats", combinedId));

  //     if (!ref.exists()) {
  //       // chats not in doc
  //       await setDoc(doc(db, "chats", combinedId), {
  //         messages: [],
  //       });

  //       const currentUserChatRef = await getDoc(
  //         doc(db, "userchats", currentUser.uid)
  //       );

  //       const userChatRef = await getDoc(doc(db, "userchats", user.uid));

  //       if (!currentUserChatRef.exists()) {
  //         await setDoc(doc(db, "userchats", currentUser.uid), {});
  //       }
  //       await updateDoc(doc(db, "userchats", currentUser.uid), {
  //         [combinedId + ".userInfo"]: {
  //           uid: user.uid,
  //           name: user.name,
  //           photoURL: user.photoURL||null,
  //           color: user.color,
  //         },
  //         [combinedId + ".date"]: serverTimestamp()
  //       })

  //       if (!userChatRef.exists()) {
  //         await setDoc(doc(db, "userchats", user.uid), {});
  //       }
  //       await updateDoc(doc(db, "userchats", user.uid), {
  //         [combinedId + ".userInfo"]: {
  //           uid: currentUser.uid,
  //           name: currentUser.name,
  //           photoURL: currentUser.photoURL||null,
  //           color: currentUser.color,
  //         },
  //         [combinedId + ".date"]: serverTimestamp()
  //       })

  //     } else {
  //       // chat exists in doc
  //       await updateDoc(doc(db, "userchats", currentUser.uid), {
  //         [combinedId+".chatDeleted"]: deleteField(),
  //       })
  //     }
  //     dispatch({type:"CHANGE_USER", payload:user})
  //     props.onHide();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <div>
      <div className="fixed top-0 left-0 z-20 w-full h-full flex items-center justify-center">
        <div
          className="w-full h-full absolute glass-effect"
          onClick={props.onHide}
        ></div>

        <div className={`flex flex-col md:w-1/2 sm:w-5/6 w-11/12  max-h-[80%] min-h-[600px] backdrop-blur-md bg-primarycolor/20 text-white relative z-10 rounded-lg ${props.shortHeight ? "" : " min-h-[600px]"}`}>
          {!props.noHeader && <div className="shrink-0 p-6 flex items-center justify-between">
            <div className="text-lg font-semibold ml-4">
              {props.title || ""}
            </div>
            <XMarkIcon className="w-7 h-7 cursor-pointer hover:text-primarycolor hover:rotate-180 duration-300" onClick={props.onHide} />
          </div>}

          {users &&
            <>
              <Search users={users} selectChatUser={props.selectChatUser} onHide={props.onHide} />
              <div className="grow flex flex-col p-5 pt-0">
                <div className=" mt-5 flex flex-col gap-2 grow relative overflow-auto scrollbar">
                  <div className=" absolute w-full">
                    {users &&
                      users.map((user) => (
                        (uid !== user.id) && <div
                          key={user.id}
                          onClick={() => {
                            props.selectChatUser(user)
                            props.onHide()
                          }
                          }
                          className="flex items-center gap-2 rounded-xl hover:bg-gray-200 hover:text-gray-800 py-2 px-3 cursor-pointer"
                        >
                          {user.data.photo ? <img src={user.data.photo} alt="user photo" className='w-[50px] h-[50px] p-1 rounded-full object-cover' /> : <img src="/icons/profileIcon.png" className="w-[50px] h-[50px]" />}
                          <div className=" flex flex-col justify-center ">
                            <span className=" text-base flex items-center justify-between">
                              <div className=" font-medium">{user.data.firstName} {user.data.lastName}</div>
                            </span>
                            <p className=" text-sm">{user.data.school}</p>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </>}
        </div>
      </div>

    </div>
  );
};

export default UsersPopUp;
