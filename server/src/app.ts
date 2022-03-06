import * as http from "http";
import express from "express";
import cors from "cors";
import { Server as SocketServer } from "socket.io";

import { socket } from "./service/socket";
import room from "./routes/room.router";

const app = express();
const server = new http.Server(app);

const io = new SocketServer(server, {
  cors: {
    origin: "*"
  }
});

app.use(cors());
app.use(express.json());
app.use("/api/rooms", room);

server.listen(5000, () => {
  socket(io);
  console.log("Start server...");
});
