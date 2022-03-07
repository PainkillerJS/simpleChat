import { useState } from "react";
import type { ChangeEventHandler } from "react";

import { useRoom } from "../../../context/RoomProvider";
import socket from "../../../helpers/socket";

export const FormChat = () => {
  const { currentUser: user, roomId: room, onAddNewMessage } = useRoom();
  const [message, setMessage] = useState("");

  const handleChangeTextArea: ChangeEventHandler<HTMLTextAreaElement> = ({ target }) => setMessage(target.value);

  const onSendMessage = () => {
    socket.emit("ROOM:SEND_MESSAGE", {
      user,
      room,
      message
    });
    onAddNewMessage({ user, message });
    setMessage("");
  };

  return (
    <form>
      <textarea value={message} onChange={handleChangeTextArea} className="form-control" rows={3} />
      <button onClick={onSendMessage} type="button" className="btn btn-primary">
        Отправить
      </button>
    </form>
  );
};
