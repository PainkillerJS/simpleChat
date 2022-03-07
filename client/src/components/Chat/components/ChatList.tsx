import { useEffect, useRef } from "react";

import type { IChatProps } from "../Chat";

export const ChatList = ({ messages, currentUser }: Pick<IChatProps, "messages" | "currentUser">) => {
  const messagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesRef.current?.scrollTo(0, 99999);
  }, [messages]);

  return (
    <div ref={messagesRef} className="messages">
      {messages.map(({ message, user }) => (
        <div className={`message ${currentUser === user ? "author" : ""}`} key={message}>
          <p>{message}</p>
          <div>
            <span>{user}</span>
          </div>
        </div>
      ))}
    </div>
  );
};
