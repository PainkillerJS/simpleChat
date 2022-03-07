import { useState, useContext, createContext } from "react";
import type { FC } from "react";

import type { IRoom } from "../model/room";

export interface IRoomValues {
  users: Array<IRoom["user"]>;
  currentUser: IRoom["user"];
  messages: Array<string>;
  roomId: string;
  onUpdateRoomValue: (value: Partial<Omit<IRoomValues, "onUpdateRoomValue">>) => void;
}

const RoomContext = createContext<IRoomValues>({
  users: [],
  currentUser: "",
  messages: [],
  roomId: "",
  onUpdateRoomValue: () => ({})
});

export const RoomProvider: FC = ({ children }) => {
  const [valueRoom, setValueRoom] = useState<Omit<IRoomValues, "onUpdateRoomValue">>({
    users: [],
    currentUser: "",
    messages: [],
    roomId: ""
  });

  const onUpdateRoomValue = (value: Partial<Omit<IRoomValues, "onUpdateRoomValue">>) => setValueRoom({ ...valueRoom, ...value });
  console.log(valueRoom);
  return <RoomContext.Provider value={{ ...valueRoom, onUpdateRoomValue }}>{children}</RoomContext.Provider>;
};

export const useRoom = () => useContext(RoomContext);
