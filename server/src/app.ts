import * as http from "http";
import express from "express";
import type { Request, Response } from "express";

import { socket } from "./service/socket";
import { Server as SocketServer } from "socket.io";

const app = express();
const server = new http.Server(app);

const io = new SocketServer(server, {
  cors: {
    origin: "*"
  }
});

const rooms = new Map();

app.get("/", (req: Request, res: Response) => {
  res.send("dsdsdas");
});

server.listen(5000, () => {
  socket(io);
  console.log("Start server...");
});
