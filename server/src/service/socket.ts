import { Server } from "socket.io";

import RoomsController from "../controllers/RoomsController";
import type { IRoom } from "../models/room";

export const socket = (io: InstanceType<typeof Server>) => {
  io.on("connection", (socket) => {
    socket.on("disconnect", (user) => {
      try {
        RoomsController.getListRooms.forEach((value, roomId, rooms) => {
          //@ts-ignore
          if (value.get("users")?.delete(user)) {
            const users = [...value.get("users")?.values()];
            socket.to(roomId).emit("ROOM:UPDATE_USERS", users);
            RoomsController.updateRooms = rooms;
            return;
          }
        });
      } catch (e) {
        return e;
      }
    });

    socket.on("ROOM:JOIN", ({ room, user }: IRoom) => {
      try {
        const rooms = RoomsController.getListRooms;

        socket.join(room);
        //@ts-ignore
        rooms.get(room)?.get("users")?.set(socket.id, user);
        //@ts-ignore
        const users = [...rooms.get(room)?.get("users").values()];
        socket.broadcast.to(room).emit("ROOM:JOINED", users);

        RoomsController.updateRooms = rooms;
      } catch (e) {
        return e;
      }
    });
  });
};
