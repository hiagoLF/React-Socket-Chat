import { Server, Socket } from "socket.io";
import currentHour from "../../utils/hour";
import {
   getUser,
   getUsersInRoomList,
   putUserInARoom,
} from "../repositories/UsersRrpositorie";

interface IJoinUserParams {
   user: string;
   room: string;
}

interface IReceiveMessageProps {
   message: string;
   callback: (error: boolean) => void;
   socket: Socket;
   socketServer: Server;
}

type JoinUserCallBackFunction = (error: boolean) => void;

export function joinUser(
   { user, room }: IJoinUserParams,
   callback: JoinUserCallBackFunction,
   socket: Socket,
   socketServer: Server
) {
   const { error, userInRoom } = putUserInARoom({
      user,
      room,
      socketId: socket.id,
   });

   if (!userInRoom || error) {
      return callback(true);
   }

   socket.join(userInRoom.room);

   console.log(`Usuário ${user} conectado a sala ${userInRoom.room}`);

   socketServer.to(userInRoom.room).emit("message", {
      type: "join-notice",
      user,
      time: currentHour,
      text: "",
   });

   const usersInRoom = getUsersInRoomList(userInRoom.room);

   socketServer.to(userInRoom.room).emit("usersInRoomList", {
      room: userInRoom.room,
      usersList: usersInRoom,
   });

   return callback(false);
}

export function receiveMessage({
   message,
   callback,
   socket,
   socketServer,
}: IReceiveMessageProps) {
   const user = getUser(socket.id);

   if (!user) return callback(true);
   socketServer.to(user.room).emit("message", {
      type: "text-message",
      user: user.user,
      time: currentHour,
      text: message,
   });
}

interface InotifyThatSomeOneIsTypingProps {
   socket: Socket;
   socketServer: Server}

export function notifyThatSomeOneIsTyping({
   socket, 
   socketServer
}: InotifyThatSomeOneIsTypingProps){
   const user = getUser(socket.id);
   socketServer.to(user.room).emit("typing", {
      user: user.user
   });
}