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
    try {
      const { room } = req.body;

      if (!this.rooms.has(room)) {
        this.rooms.set(
          room,
          new Map<string, TDataRooms>([
            ["users", new Map()],
            ["messages", []]
          ])
        );
      }

      res.send();
    } catch (e) {
      res.status(500).json({ e });
    }
  }
  async getUsersRoom(req: Request<{}, {}, {}, { id: string }>, res: Response) {
    try {
      const room = req.query.id;

      const roomData = {
        //@ts-ignore
        users: [...this.rooms.get(room)?.get("users")?.values()],
        messages: [...this.rooms.get(room)?.get("messages")?.values()]
      };

      res.json(roomData);
    } catch (e) {
      res.status(400).json({ e });
    }
  }

  get getListRooms() {
    return this.rooms;
  }

  set updateRooms(rooms: TRooms) {
    this.rooms = rooms;
  }
}

export default new RoomsController();
