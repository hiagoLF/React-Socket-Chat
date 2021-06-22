import { createContext, useContext } from "react";

export type RoomType = {
   roomName: string;
   setRoomName?: (room: string) => void;
   roomUsersList: string[];
   setRoomUsersList?: (usersList: string[]) => void;
};

export const RoomContext = createContext<RoomType>({
   roomName: "",
   setRoomName: (roomName) => console.warn("no room name provider"),
   roomUsersList: [],
   setRoomUsersList: (usersList) => console.warn("no users list provider"),
});

export const useRoom = () => useContext(RoomContext);
