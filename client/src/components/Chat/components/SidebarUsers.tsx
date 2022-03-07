import type { IChatProps } from "../Chat";

export const SidebarUsers = ({ roomId, users }: Pick<IChatProps, "roomId" | "users">) => {
  return (
    <div className="chat-users">
      Комната: <b>{roomId}</b>
      <hr />
      <b>Онлайн ({users?.length}):</b>
      <ul>
        {users?.map((name, index) => (
          <li key={name + index}>{name}</li>
        ))}
      </ul>
    </div>
  );
};
