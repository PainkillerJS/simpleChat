import Router from "express";
import RoomsController from "../controllers/RoomsController";

const route = Router();

route.get("/getUsers", RoomsController.getUsersRoom.bind(RoomsController));
route.post("/", RoomsController.connectRoom.bind(RoomsController));

export default route;
