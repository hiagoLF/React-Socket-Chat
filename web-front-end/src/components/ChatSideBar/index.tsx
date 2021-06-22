import React from "react";
import { useRoom } from "../../contexts/RoomContext";
import { useUser } from "../../contexts/UserContext";

import {
   ChatSideBarContainer,
   ProfileContainer,
   ProfileAvatarContainer,
   UserNameInitialLetter,
   UserNameContainer,
   UserNameText,
   OnlineIndicator,
   RoomProfileContainer,
   RoomName,
   UsersOnRoomContainer,
   SingleUserContainer,
   SingleUserName,
   UserOnlineIdicator,
} from "./styles";

interface IUserInList {
   user: string;
}

const ChatSideBar = () => {
   const { user, setUser } = useUser();

   const { roomName, roomUsersList } = useRoom();

   return (
      <ChatSideBarContainer>
         <ProfileContainer>
            <ProfileAvatarContainer>
               <UserNameInitialLetter>H</UserNameInitialLetter>
            </ProfileAvatarContainer>

            <UserNameContainer>
               <UserNameText>{user}</UserNameText>
               <OnlineIndicator />
            </UserNameContainer>
         </ProfileContainer>

         <RoomProfileContainer>
            <RoomName>{roomName}</RoomName>
            <UsersOnRoomContainer>
               {roomUsersList.map((userInList, key) => (
                  <SingleUserContainer key={key}>
                     <UserOnlineIdicator />
                     <SingleUserName>{userInList}</SingleUserName>
                  </SingleUserContainer>
               ))}
            </UsersOnRoomContainer>
         </RoomProfileContainer>
      </ChatSideBarContainer>
   );
};

export default ChatSideBar;
