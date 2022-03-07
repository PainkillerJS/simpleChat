import { SidebarUsers } from "./components/SidebarUsers";
import { ChatList } from "./components/ChatList";
import { FormChat } from "./components/FormChat";
import type { TStateProvider } from "../../context/RoomProvider";

export interface IChatProps extends TStateProvider {}

export const Chat = ({ users, messages, roomId, currentUser }: IChatProps) => {
  return (
    <div className="chat">
      <SidebarUsers users={users} roomId={roomId} />
      <div className="chat-messages">
        <ChatList messages={messages} currentUser={currentUser} />
        <FormChat />
      </div>
    </div>
  );
};
