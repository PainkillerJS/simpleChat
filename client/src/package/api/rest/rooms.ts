import makeRequest from "../makeRequest";
import { EMethodRequest } from "../../../types";
import type { IRoom } from "../../../model/room";

export const intoRoom = async (body: IRoom) => await makeRequest("http://localhost:5000/api/rooms", EMethodRequest.POST, body);

export const getUsersRoom = async (id: string) =>
  await makeRequest(`http://localhost:5000/api/rooms/getUsers?id=${id}`, EMethodRequest.GET);
