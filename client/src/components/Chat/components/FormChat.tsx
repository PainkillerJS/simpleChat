import { useState } from "react";
import type { ChangeEventHandler } from "react";

import socket from "../../../helpers/socket";
import type { IChatProps } from "../Chat";

export const FormChat = ({ roomId, currentUser }: Pick<IChatProps, "currentUser" | "roomId">) => {
  const [messageValue, setMessageValue] = useState("");

  const handleChangeTextArea: ChangeEventHandler<HTMLTextAreaElement> = ({ target }) => setMessageValue(target.value);

  const onSendMessage = () => {
    socket.emit("ROOM:NEW_MESSAGE", {
      currentUser,
      roomId,
      text: messageValue
    });
    // onAddMessage({ currentUser, text: messageValue });
    setMessageValue("");
  };

  return (
    <form>
      <textarea value={messageValue} onChange={handleChangeTextArea} className="form-control" rows={3} />
      <button onClick={onSendMessage} type="button" className="btn btn-primary">
        Отправить
      </button>
    </form>
  );
};
