import { useState, useContext, createContext } from "react";
import type { FC } from "react";

import type { IRoom, INewMessage } from "../model/room";

export type TStateProvider = Omit<IRoomValues, "onUpdateRoomValue" | "onAddNewMessage">;

export interface IRoomValues {
  users: Array<IRoom["user"]>;
  currentUser: IRoom["user"];
  messages: Array<INewMessage>;
  roomId: string;
  onUpdateRoomValue: (value: Partial<Omit<IRoomValues, "onUpdateRoomValue">>) => void;
  onAddNewMessage: (message: INewMessage) => void;
}

const RoomContext = createContext<IRoomValues>({
  users: [],
  currentUser: "",
  messages: [],
  roomId: "",
  onUpdateRoomValue: () => ({}),
  onAddNewMessage: () => ({})
});

export const RoomProvider: FC = ({ children }) => {
  const [valueRoom, setValueRoom] = useState<TStateProvider>({
    users: [],
    currentUser: "",
    messages: [],
    roomId: ""
  });

  const getValue = () => valueRoom;
  const onUpdateRoomValue = (value: Partial<TStateProvider>) => {
    setValueRoom({ ...getValue(), ...value });
  };
  const onAddNewMessage = (message: INewMessage) => onUpdateRoomValue({ messages: [...getValue().messages, message] });

  return <RoomContext.Provider value={{ ...valueRoom, onUpdateRoomValue, onAddNewMessage }}>{children}</RoomContext.Provider>;
};

export const useRoom = () => useContext(RoomContext);
