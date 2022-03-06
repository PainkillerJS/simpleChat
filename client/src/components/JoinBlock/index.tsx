import socket from "../../helpers/socket";
import { Inputs } from "./components/Inputs";

export const JoinBlock = () => {
  return (
    <div className="wrapper">
      <div className="join-block">
        <Inputs />
      </div>
    </div>
  );
};
