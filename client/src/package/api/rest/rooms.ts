import makeRequest from "../makeRequest";
import { EMethodRequest } from "../../../types";
import { IRoom } from "../../../model/room";

export const intoRoom = async (body: IRoom) => await makeRequest("http://localhost:5000/api/rooms", EMethodRequest.POST, body);
