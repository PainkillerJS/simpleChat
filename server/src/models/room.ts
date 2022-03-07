export interface IRoom {
  user: string;
  room: string;
}

export interface INewMessage extends IRoom {
  message: string;
}
