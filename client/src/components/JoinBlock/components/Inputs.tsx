import { useState } from "react";
import type { Dispatch, SetStateAction, ChangeEventHandler } from "react";

import socket from "../../../helpers/socket";
import { getUsersRoom } from "../../../package/api/rest/rooms";
import { intoRoom } from "../../../package/api/rest/rooms";
import { useAuth } from "../../../context/AuthContext";
import { useRoom } from "../../../context/RoomProvider";
import { Button } from "./Button";

type THandleChangeValue = (setValue: Dispatch<SetStateAction<string>>) => ChangeEventHandler<HTMLInputElement>;

export const Inputs = () => {
  const { setIsAuth } = useAuth();
  const { onUpdateRoomValue } = useRoom();
  const [room, setRoom] = useState("");
  const [user, setUser] = useState("");

  const handleChangeInput: THandleChangeValue =
    (setValue) =>
    ({ currentTarget }) =>
      setValue(currentTarget.value);

  const onIntoRoom = () => {
    if (room && user) {
      const roomData = { room, user };

      return intoRoom(roomData)
        .then(() => socket.emit("ROOM:JOIN", roomData))
        .then(() => getUsersRoom(room) as unknown as { data: { users: Array<string>; messages: Array<string> } })
        .then(({ data: { users, messages } }) => onUpdateRoomValue({ users, messages, roomId: room, currentUser: user }))
        .then(() => setIsAuth(true));
    }

    return alert("Пустое поле");
  };

  return (
    <>
      <input type="text" placeholder="Room ID" value={room} onChange={handleChangeInput(setRoom)} />
      <input type="text" placeholder="Ник" value={user} onChange={handleChangeInput(setUser)} />
      <Button onClick={onIntoRoom} />
    </>
  );
};
