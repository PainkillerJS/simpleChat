import { Server } from "socket.io";

import RoomsController from "../controllers/RoomsController";
import type { IRoom, INewMessage } from "../models/room";

export const socket = (io: InstanceType<typeof Server>) => {
  io.on("connection", (socket) => {
    socket.on("disconnect", () => {
      try {
        RoomsController.getListRooms.forEach((value, roomId, rooms) => {
          //@ts-ignore
          if (value.get("users")?.delete(socket.id)) {
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

    socket.on("ROOM:JOIN", async ({ room, user }: IRoom) => {
      try {
        const rooms = RoomsController.getListRooms;

        socket.join(room);
        //@ts-ignore
        rooms.get(room)?.get("users")?.set(socket.id, user);
        //@ts-ignore
        const users = [...rooms.get(room)?.get("users").values()];
        socket.broadcast.to(room).emit("ROOM:UPDATE_USERS", users);
        RoomsController.updateRooms = rooms;
      } catch (e) {
        return e;
      }
    });

    socket.on("ROOM:SEND_MESSAGE", async ({ room, user, message }: INewMessage) => {
      try {
        const dataMessage = {
          user,
          message
        };

        //@ts-ignore
        RoomsController.getListRooms.get(room)?.get("messages")?.push(dataMessage);
        socket.broadcast.to(room).emit("ROOM:NEW_MESSAGE", dataMessage);
      } catch (e) {
        return e;
      }
    });
  });
};
