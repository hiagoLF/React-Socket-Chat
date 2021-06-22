import React, { useEffect, useState } from "react";
import io, { Socket } from "socket.io-client";
import queryString from "query-string";
import ChatMessages from "./ChatMessages/";
import TypeMessageInput from "./TypeMessageInput/";
import ChatSideBar from "../../components/ChatSideBar";
import Sidebar from "react-sidebar";

import {
   ChatPageContainer,
   ChatHeaderBar,
   HeaderBarIcon,
   HeaderCloseIcon,
   TypingMessageText
} from "./styles";

import menuIcon from "../../assets/icons/menu.svg";
import closeIcon from "../../assets/icons/close.svg";
import { useUser } from "../../contexts/UserContext";
import { useRoom } from "../../contexts/RoomContext";

const socketServerUrl = process.env.REACT_APP_SOCKET_SERVER_URL;

var socket: Socket;

interface IChatPageProps {
   location: {
      search: string;
   };
}

interface ISocketMessage {
   type: string;
   user: string;
   time: string;
   text: string;
}

const ChatPage = (props: IChatPageProps) => {
   const { user, setUser } = useUser();
   const { setRoomName, setRoomUsersList } = useRoom();
   const [sideBarOpen, setSideBarOpen] = useState(false);
   const [chatMessages, setChatMessages] = useState<Array<ISocketMessage>>([]);
   const [someOneTyping, setSomeOneTyping] = useState()

   useEffect(() => {
      stablishSocketConnection();
      stablishSocketEventsReception();
   }, []);

   const stablishSocketConnection = () => {
      if (!socketServerUrl) {
         alert("Socket Server not provided");
         return;
      }
      const { user, room } = queryString.parse(props.location.search);
      socket = io(socketServerUrl);
      socket.emit("join", { user, room }, (error: boolean) => {
         if (error) alert("Erro ao se conectar com a sala de bate papo");
         return;
      });
      if (setUser) setUser(user as string);
   };

   const stablishSocketEventsReception = () => {
      socket.on("message", (message: ISocketMessage) => {
         setChatMessages((chatMessages) => [...chatMessages, message]);
      });

      socket.on("typing", ({user}) => {
         if(someOneTyping !== undefined) return
         setSomeOneTyping(user)
         console.log(user, ' is typing')
         setTimeout(() => {setSomeOneTyping(undefined)
            console.log(user, ' stoped typing')
         }, 3000)
      });

      socket.on("usersInRoomList", (props) => {
         if (setRoomName) setRoomName(props.room);
         if (setRoomUsersList) setRoomUsersList(props.usersList);
      });
   };

   const sendSocketMessage = (message: string) => {
      if (!message) return;
      socket.emit("messageToServer", { message }, (error: boolean) => {
         if (error) alert("Não foi possível enviar a mensagem!");
      });
   };

   const notifyTyping = () => {
      socket.emit("typing");
   }

   return (
      <Sidebar
         sidebar={<ChatSideBar />}
         open={sideBarOpen}
         onSetOpen={(open) => setSideBarOpen(open)}
         styles={{ sidebar: { width: "80%", position: "absolute" } }}
      >
         <ChatPageContainer>
            <ChatHeaderBar>
               <HeaderBarIcon
                  onClick={() => setSideBarOpen(true)}
                  src={menuIcon}
               />
               <HeaderCloseIcon
                  src={closeIcon}
                  onClick={() => (window.location.href = "/")}
               />
            </ChatHeaderBar>

            <ChatMessages messages={chatMessages} />

            {(someOneTyping && someOneTyping !== user)&& (
               <TypingMessageText>{someOneTyping} is typing...</TypingMessageText>
            )}

            <TypeMessageInput
               onMessageTyping={notifyTyping}
               onMessageSubmit={sendSocketMessage}
            />
         </ChatPageContainer>
      </Sidebar>
   );
};

export default ChatPage;
