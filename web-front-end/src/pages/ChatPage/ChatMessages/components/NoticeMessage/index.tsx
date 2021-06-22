import React from "react";

import {
   NoticeMessageContainer,
   NoticeText,
   MessageTimeIndicator,
} from "./styles";

interface IMessageProps {
   message: {
      type: "join-notice" | "left-notice" | "text-message";
      user: string;
      time: string;
      text: string;
   };
}

const NoticeMessage = ({ message }: IMessageProps) => {
   return (
      <NoticeMessageContainer>
         <NoticeText>
            {message.user}{" "}
            {message.type === "left-notice" ? "saiu da" : "entrou na"} sala
         </NoticeText>
         <MessageTimeIndicator>{message.time}</MessageTimeIndicator>
      </NoticeMessageContainer>
   );
};

export default NoticeMessage;
