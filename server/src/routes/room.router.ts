import Router from "express";
import RoomsControler from "../controllers/RoomsControler";
const route = Router();

route.post("/", RoomsControler.connectRoom);

export default route;
