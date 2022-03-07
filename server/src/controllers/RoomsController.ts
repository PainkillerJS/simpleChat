import { Request, Response } from "express";

import type { IRoom } from "../models/room";

type TDataRooms = Array<string> | Map<string, string>;
type TRooms = Map<string, Map<string, TDataRooms>>;

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

  get getListRooms() {
    return this.rooms;
  }

  set updateRooms(rooms: TRooms) {
    this.rooms = rooms;
  }
}

export default new RoomsController();
