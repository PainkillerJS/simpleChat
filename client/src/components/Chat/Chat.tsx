import { SidebarUsers } from "./components/SidebarUsers";
import { ChatList } from "./components/ChatList";
import { FormChat } from "./components/FormChat";
import type { IRoomValues } from "../../context/RoomProvider";

export interface IChatProps extends Omit<IRoomValues, "onUpdateRoomValue"> {}

export const Chat = ({ users, messages, currentUser, roomId }: IChatProps) => {
  return (
    <div className="chat">
      <SidebarUsers users={users} roomId={roomId} />
      <div className="chat-messages">
        <ChatList messages={messages} />
        <FormChat roomId={roomId} currentUser={currentUser} />
      </div>
    </div>
  );
};
