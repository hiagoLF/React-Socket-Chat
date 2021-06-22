import { Socket } from "socket.io";

var users: any = [];

interface IputUserInARoomProps {
   user: string;
   room: string;
   socketId: string;
}

export function putUserInARoom({
   user,
   room,
   socketId,
}: IputUserInARoomProps): {
   error: boolean;
   userInRoom: { user: string; room: string; socketId: string } | undefined;
} {
   if (!user || !room)
      return {
         error: true,
         userInRoom: undefined,
      };

   const existingUser = users.find(
      (userInList: any) => userInList.room === room && userInList.user === user
   );

   if (existingUser) return { error: true, userInRoom: undefined };

   const userToBeIncluded = { user, room, socketId };

   users.push(userToBeIncluded);

   return { error: false, userInRoom: userToBeIncluded };
}

export function getUsersInRoomList(room: string) {
   const usersInRoom = users.filter(
      (user: IputUserInARoomProps) => user.room === room
   );

   const usersNamesInRoom = usersInRoom.map((user: any) => user.user);

   return usersNamesInRoom;
}

export function removeUser(socketId: string): IputUserInARoomProps | undefined {
   const indexOfUser = users.findIndex(
      (user: IputUserInARoomProps) => user.socketId === socketId
   );

   if (indexOfUser !== -1) return users.splice(indexOfUser, 1)[0];
   return undefined;
}

export function getUser(socketId: string): IputUserInARoomProps {
   const indexOfUser = users.findIndex(
      (user: IputUserInARoomProps) => user.socketId === socketId
   );

   return users[indexOfUser];
}
