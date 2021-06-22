import { Socket } from "socket.io-client";

interface IjoinToSocketRoomProps {
   socket: Socket;
   user: string;
   room: string;
}

export default function joinToSocketRoom({
   socket,
   user,
   room,
}: IjoinToSocketRoomProps) {
   socket.emit("join");
}
