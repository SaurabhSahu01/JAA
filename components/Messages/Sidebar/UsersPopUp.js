import React, { useState } from "react";
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "@/src/utils/firebase";
// import { useAuth } from "@/context/authContext";
// import { useChatContext } from "@/context/ChatContext";
// import Avatar from "../Common/Avatar";
// import { deleteField, doc, getDoc, serverTimestamp, setDoc, updateDoc } from "firebase/firestore";
// import { db } from "@/firebase/firebase";
// import Search from "../Search/Search";

const UsersPopUp = (props) => {
  const [search, setsearch] = useState("");
  const [users, setUsers] = useState(null);

  React.useEffect(() => {
    onSnapshot(collection(db, "users"), (snap) => {
      const updateUser = {};
      snap.forEach((doc) => {
        console.log(doc.id);
        updateUser[doc.id] = doc.data();
      });
      setUsers(updateUser);
      // console.log(users);
    });
  }, [])
 if(users){ console.log(Object.keys(users));}
  // if (users) {
  //   users?.map((m, i) => {
  //     console.log(m);
  //   })
  // }

  // const { currentUser } = useAuth();
  // const { users, dispatch } = useChatContext();

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

        <div className={`flex flex-col w-[500px] max-h-[80%] min-h-[600px] bg-[#1B2D56] text-white relative z-10 rounded-3xl ${props.shortHeight ? "" : " min-h-[600px]"}`}>
          {!props.noHeader && <div className="shrink-0 p-6 flex items-center justify-between">
            <div className="text-lg font-semibold">
              {props.title || ""}
            </div>
            <XMarkIcon className="w-5 h-5" onClick={props.onHide} />
          </div>}

          <div className=" shrink-0 relative z-10 flex justify-center w-5/6 mx-auto  py-2">
            <MagnifyingGlassIcon className="absolute top-6 left-2 text-zinc-500 w-5 h-5" />
            <input
              type="text"
              value={search}
              onChange={(e) => setsearch(e.target.value)}
              placeholder="Search Username..."
              className="w-full h-11 rounded-xl text-black pl-9 pr-5 placeholder:text-black outline-none text-base "
            />
          </div>
          <div className="grow flex flex-col p-5 pt-0">
            <div className=" mt-5 flex flex-col gap-2 grow relative overflow-auto scrollbar">
              <div className=" absolute w-full">
                {/* {users &&
                  Object.values(users).map((user) => ( */}
                <div
                  // onClick={() => slectUser(user)}
                  className="flex items-center gap-2 rounded-xl hover:bg-gray-300 hover:text-black py-2 px-3 cursor-pointer"
                >
                  <img src="iji" alt="user photo" className='w-[50px] h-[50px] p-1 rounded-full object-cover' />
                  <div className=" flex flex-col justify-center ">
                    <span className=" text-base flex items-center justify-between">
                      <div className=" font-medium">Shubham</div>
                    </span>
                    <p className=" text-sm text-gray-500">tanwarshubham@gmail.com</p>
                  </div>
                </div>
                {/* ))} */}
              </div>
            </div>



          </div>
        </div>
      </div>

    </div>
  );
};

export default UsersPopUp;
