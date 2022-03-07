import { useEffect, useRef } from "react";

import type { IChatProps } from "../Chat";

export const ChatList = ({ messages }: Pick<IChatProps, "messages">) => {
  const messagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesRef.current?.scrollTo(0, 99999);
  }, [messages]);

  return (
    <div ref={messagesRef} className="messages">
      {messages.map((message) => (
        <div className="message">
          <p>{message}</p>
          <div>
            <span>{message}</span>
          </div>
        </div>
      ))}
    </div>
  );
};
