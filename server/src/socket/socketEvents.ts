import { Server, Socket } from "socket.io";
import currentHour from "../utils/hour";
import { joinUser, notifyThatSomeOneIsTyping, receiveMessage } from "./controllers/Users";
import {
   getUsersInRoomList,
   removeUser,
} from "./repositories/UsersRrpositorie";

export default function defineSocketEvents(
   socket: Socket,
   socketServer: Server
) {
   socket.on("join", ({ user, room }, callback) =>
      joinUser({ user, room }, callback, socket, socketServer)
   );

   socket.on("messageToServer", ({ message }, callback) =>
      receiveMessage({ message, callback, socket, socketServer })
   );

   socket.on('typing', () => notifyThatSomeOneIsTyping({socket, socketServer}))

   socket.on("disconnect", () => {
      const removedUser = removeUser(socket.id);

      if (removedUser) {
         socketServer.to(removedUser.room).emit("message", {
            type: "left-notice",
            user: removedUser.user,
            time: currentHour,
            text: "",
         });

         const usersInRoom = getUsersInRoomList(removedUser.room);

         socketServer.to(removedUser.room).emit("usersInRoomList", {
            room: removedUser.room,
            usersList: usersInRoom,
         });
      }
   });
}
