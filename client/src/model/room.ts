export interface IRoom {
  user: string;
  room: string;
}

export interface INewMessage extends Omit<IRoom, "room"> {
  message: string;
}
