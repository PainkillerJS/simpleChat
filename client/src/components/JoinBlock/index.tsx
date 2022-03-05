import socket from "../../helpers/socket";

export const JoinBlock = () => {
  return (
    <div className="join-block">
      <input type="text" placeholder="Room ID" />
      <input type="text" placeholder="Ник" />
      <button className="btn btn-success">Войти</button>
    </div>
  );
};
