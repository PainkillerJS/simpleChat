import { useEffect } from "react";

import socket from "../helpers/socket";
import { Chat } from "../components/Chat/Chat";
import { useRoom } from "../context/RoomProvider";
import type { IRoom, INewMessage } from "../model/room";

const ChatPage = () => {
  const { onAddNewMessage, onUpdateRoomValue, ...dataRoom } = useRoom();

  useEffect(() => {
    socket.on("ROOM:NEW_MESSAGE", onAddNewMessage);
    socket.on("ROOM:UPDATE_USERS", (users: Array<IRoom["user"]>) => onUpdateRoomValue({ users }));
  }, [dataRoom.messages]);

  return <Chat {...dataRoom} />;
};

export default ChatPage;
