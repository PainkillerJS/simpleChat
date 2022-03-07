import Router from "express";
import RoomsController from "../controllers/RoomsController";

const route = Router();

route.post("/", RoomsController.connectRoom.bind(RoomsController));

export default route;
