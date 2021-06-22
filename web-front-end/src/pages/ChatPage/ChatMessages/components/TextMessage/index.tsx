import React from "react";

import { useUser } from "../../../../../contexts/UserContext";

import {
   TextMessageContainer,
   MessageCard,
   WrittenMessageText,
   MessageInformationsContainer,
   MessageTime,
   MessageUser,
} from "./styles";

interface IMessageProps {
   message: {
      type: "join-notice" | "left-notice" | "text-message";
      user: string;
      time: string;
      text: string;
   };
}

const TextMessage = ({ message }: IMessageProps) => {
   const { user, setUser } = useUser();

   console.log(user);

   return (
      <TextMessageContainer fromMe={message.user === user}>
         <MessageCard fromMe={message.user === user}>
            <WrittenMessageText>{message.text}</WrittenMessageText>
            <MessageInformationsContainer>
               <MessageTime>{message.time}</MessageTime>
               {message.user !== user && (
                  <MessageUser>{message.user}</MessageUser>
               )}
            </MessageInformationsContainer>
         </MessageCard>
      </TextMessageContainer>
   );
};

export default TextMessage;
