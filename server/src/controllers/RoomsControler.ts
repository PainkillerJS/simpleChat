import { Request, Response } from "express";

import { IRoom } from "../models/room";
import type { TRooms, TDataRooms } from "../types";

class RoomsController {
  constructor() {
    this.rooms = new Map();
  }

  private rooms: TRooms;

  async connectRoom(req: Request<{}, {}, IRoom>, res: Response) {
    const { room, user } = req.body;

    if (!this.rooms.has(room)) {
      this.rooms.set(
        room,
        new Map<string, TDataRooms>([
          ["users", new Map()],
          ["message", []]
        ])
      );
    }

    res.json({ message: "333" });
  }
}

export default new RoomsController();
