import { Server } from "socket.io";

export const socket = (io: InstanceType<typeof Server>) => {
  io.on("connection", (socket) => {
    console.log(socket.id, "socket");
  });
};
