// import { useChatContext } from "@/context/ChatContext";
// import { useAuth } from "@/context/authContext";
// import { db, storage } from "@/firebase/firebase";
// import {
//   Timestamp,
//   arrayUnion,
//   deleteField,
//   doc,
//   getDoc,
//   serverTimestamp,
//   updateDoc,
// } from "firebase/firestore";
// import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
// import React, { useEffect } from "react";
// import { TbSend } from "react-icons/tb";
import { v4 as uuid } from "uuid";

// let typingTiomeout = null;

const Composebar = () => {
  // const {
  //   attachment,
  //   setAttachment,
  //   setAttachmentPreview,
  //   inputText,
  //   setInputText,
  //   data,
  //   editMessage,
  //   setEditMessage,
  // } = useChatContext();
  // const { currentUser } = useAuth();

  // useEffect(() => {
  //   setInputText(editMessage?.text || "");
  // }, [editMessage]);

  // const handleTyping = async (e) => {
  //   setInputText(e.target.value);

  //   await updateDoc(doc(db, "chats", data.chatId), {
  //     [`typing.${currentUser.uid}`]: true,
  //   });

  //   if(typingTiomeout){
  //     clearTimeout(typingTiomeout);
  //   }
  //   typingTiomeout = setTimeout(async() => {
  //     await updateDoc(doc(db, "chats", data.chatId), {
  //       [`typing.${currentUser.uid}`]: false,
  //     });
  //     typingTiomeout = null
  //   }, 500);
  // };

  // const handleSend = async () => {

  //   if(inputText.trim().length>0){
  //   if (attachment) {
  //     const storageRef = ref(storage, uuid());
  //     const uploadTask = uploadBytesResumable(storageRef, attachment);

  //     uploadTask.on(
  //       "state_changed",
  //       (snapshot) => {
  //         const progress =
  //           (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  //         console.log("Upload is " + progress + "% done");
  //         switch (snapshot.state) {
  //           case "paused":
  //             console.log("Upload is paused");
  //             break;
  //           case "running":
  //             console.log("Upload is running");
  //             break;
  //         }
  //       },
  //       (error) => {
  //         console.error(error);
  //       },
  //       () => {
  //         getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
  //           await updateDoc(doc(db, "chats", data.chatId), {
  //             messages: arrayUnion({
  //               id: uuid(),
  //               text: inputText,
  //               sender: currentUser.uid,
  //               date: Timestamp.now(),
  //               read: false,
  //               img: downloadURL,
  //             }),
  //           });
  //         });
  //       }
  //     );
  //   } else {
  //     await updateDoc(doc(db, "chats", data.chatId), {
  //       messages: arrayUnion({
  //         id: uuid(),
  //         text: inputText,
  //         sender: currentUser.uid,
  //         date: Timestamp.now(),
  //         read: false,
  //       }),
  //     });
  //   }

  //   let msg = { text: inputText };
  //   if (attachment) {
  //     msg.img = true;
  //   }
  //   await updateDoc(doc(db, "userchats", currentUser.uid), {
  //     [data.chatId + ".lastMessage"]: msg,
  //     [data.chatId + ".date"]: serverTimestamp(),
  //   });
  //   await updateDoc(doc(db, "userchats", data.user.uid), {
  //     [data.chatId + ".lastMessage"]: msg,
  //     [data.chatId + ".date"]: serverTimestamp(),
  //     [data.chatId + ".chatDeleted"]: deleteField(),
  //   });

  //   setInputText("");
  //   setAttachment(null);
  //   setAttachmentPreview(null);}
  // };

  // const onKeyUp = (e) => {
  //   if (e.key === "Enter" && (inputText || attachment)) {
  //     editMessage ? handleEdit() : handleSend();
  //   }
  // };

  // const handleEdit = async () => {
  //   const messageId = editMessage.id;
  //   const chatRef = doc(db, "chats", data.chatId);

  //   const chatDoc = await getDoc(chatRef);

  //   if (attachment) {
  //     const storageRef = ref(storage, uuid());
  //     const uploadTask = uploadBytesResumable(storageRef, attachment);

  //     uploadTask.on(
  //       "state_changed",
  //       (snapshot) => {
  //         const progress =
  //           (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  //         console.log("Upload is " + progress + "% done");
  //         switch (snapshot.state) {
  //           case "paused":
  //             console.log("Upload is paused");
  //             break;
  //           case "running":
  //             console.log("Upload is running");
  //             break;
  //         }
  //       },
  //       (error) => {
  //         console.error(error);
  //       },
  //       () => {
  //         getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
  //           let updatedMessages = chatDoc.data().messages.map((message) => {
  //             if (message.id === messageId) {
  //               message.text = inputText;
  //               message.img = downloadURL;
  //             }
  //             return message;
  //           });
  //           await updateDoc(chatRef, {
  //             messages: updatedMessages,
  //           });
  //         });
  //       }
  //     );
  //   } else {
  //     let updatedMessages = chatDoc.data().messages.map((message) => {
  //       if (message.id === messageId) {
  //         message.text = inputText;
  //       }
  //       return message;
  //     });
  //     await updateDoc(chatRef, {
  //       messages: updatedMessages,
  //     });
  //   }

  //   setInputText("");
  //   setAttachment(null);
  //   setAttachmentPreview(null);
  //   setEditMessage(null);
  // };

  return (
    <div className=" flex items-center gap-2 grow">
      <input
        type="text"
        className=" grow w-full outline-0 px-2 py-2 text-white bg-transparent placeholder:text-c3 outline-none text-base"
        placeholder="Type a message"
        // value={inputText}
        // onChange={handleTyping}
        // onKeyUp={onKeyUp}
      />
      <button
        // onClick={editMessage ? handleEdit : handleSend}
        className={`h-10 w-10 rounded-xl shrink-0 flex justify-center items-center `
        // ${inputText.trim().length > 0 ? "bg-c4" : ""}
        }
      >
        {/* <TbSend size={20} className=" text-white" /> */}
        send
      </button>
    </div>
  );
};

export default Composebar;
