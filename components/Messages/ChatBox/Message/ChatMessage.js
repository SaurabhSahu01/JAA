import Avatar from "@/components/Common/Avatar";
import { useChatContext } from "@/context/ChatContext";
import { useAuth } from "@/context/authContext";
import ReactSimpleImageViewer from "react-simple-image-viewer";
import React, { useState } from "react";
import Image from "next/image";
import { formateDate, wrapEmojisInHtmlTag } from "@/utils/helpers";
import { Timestamp, doc, getDoc, updateDoc } from "firebase/firestore";
import Icon from "@/components/Common/Icon";
import { GoChevronDown } from "react-icons/go";
import MessageMenu from "./MessageMenu";
import { db } from "@/firebase/firebase";
import DeleteMsgPopup from "@/components/popUp/DeleteMsgPopup";
import {
  DELETED_FOR_ME,
  DELETED_FOR_EVERYONE,
} from "../../../utils/constansts";

const ChatMessage = ({ message }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const { currentUser } = useAuth();
  const { users, data, imageViewer, setImageViewer, setEditMessage } =
    useChatContext();
  const self = message?.sender === currentUser?.uid;
  // console.log(message)

  const timestamp = new Timestamp(
    message.date?.seconds,
    message.date?.nanoseconds
  );
  const date = timestamp.toDate();

  const deletePopupHandler = () => {
    setShowDeletePopup(true);
    setShowMenu(false);
  };

  const deleteMesasge = async (action) => {
    try {
      const messageId = message.id;
      const chatRef = doc(db, "chats", data.chatId);

      const chatDoc = await getDoc(chatRef);

      const updatedMessages = chatDoc.data().messages.map((message) => {
        if (message.id === messageId) {
          if (action === DELETED_FOR_ME) {
            message.deletedInfo = {
              [currentUser.uid]: DELETED_FOR_ME,
            };
          }

          if (action === DELETED_FOR_EVERYONE) {
            message.deletedInfo = {
              deletedForEveryone: true,
            };
          }
        }

        return message;
      });

      await updateDoc(chatRef, { messages: updatedMessages });
      setShowDeletePopup(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={`mb-3 max-w-[75%] ${self ? "self-end" : ""}`}>
      {showDeletePopup && (
        <DeleteMsgPopup
          onHide={() => setShowDeletePopup(false)}
          className="DeleteMsgPopup"
          noHeader={true}
          shortHeight={true}
          self={self}
          deleteMesasge={deleteMesasge}
        />
      )}
      <div
        className={`flex items-end gap-3 mb-1 ${
          self ? "justify-start flex-row-reverse" : " "
        }`}
      >
        <Avatar
          size="small"
          user={self ? currentUser : users[data.user.uid]}
          className=" mb-4"
        />
        <div
          className={`group flex flex-col gap-4 p-3  rounded-xl relative break-all ${
            self ? "rounded-br-sm bg-c5" : "rounded-bl-sm bg-c1"
          }`}
        >
          {message.img && (
            <>
              <Image
                src={message.img}
                width={250}
                height={250}
                alt={message?.text || ""}
                className={`${message.img && !message.text ? " pb-[5px]":""} rounded-md max-w-[250px] cursor-pointer`}
                onClick={() => {
                  setImageViewer({
                    msgId: message.id,
                    url: message.img,
                  });
                }}
              />

              {imageViewer && imageViewer.msgId === message.id && (
                <ReactSimpleImageViewer
                  src={[imageViewer.url]}
                  currentIndex={0}
                  disableScroll={false}
                  closeOnClickOutside={true}
                  onClose={() => setImageViewer(null)}
                />
              )}
            </>
          )}

          {message.text && (
            <div
              className={`text-sm  ${(message.img && message.text)|| message.text  ? "pr-[65px]": ""}`}
              dangerouslySetInnerHTML={{
                __html: wrapEmojisInHtmlTag(message.text),
              }}
            ></div>
          )}

          <div
            className={`${
              showMenu ? "" : "hidden"
            } group-hover:flex absolute rounded-xl
              -right-2 -top-[5px]
            `}
            onClick={() => setShowMenu(true)}
          >
            <Icon
              size="medium"
              className="hover:bg-inherit"
              icon={
                <GoChevronDown size={20} className="text-c3 hover:text-white" />
              }
            />
            {showMenu && (
              <MessageMenu
                self={self}
                message ={message}
                setShowMenu={setShowMenu}
                showMenu={showMenu}
                deletePopupHandler={deletePopupHandler}
                setEditMsg={() => setEditMessage(message)}
              />
            )}
          </div>
          <div className=" absolute bottom-[1px] right-1 text-xs text-c3">
            {formateDate(date)}
          </div>
        </div>
      </div>
      {/* <div
        className={`flex items-end ${
          self ? " justify-start flex-row-reverse mr-12" : " ml-12"
        }`}
      >
        <div className=" text-xs text-c3">{formateDate(date)}</div>
      </div> */}
    </div>
  );
};

export default ChatMessage;
