import React from "react";

import { MessagesScrollToBottom, AnyMessageTypeContainer } from "./styles";

import NoticeMessage from "./components/NoticeMessage/";
import TextMessage from "./components/TextMessage/";

interface IMessageProps {
   type: "join-notice" | "left-notice" | "text-message";
   user: string;
   time: string;
   text: string;
}

const ChatMessages = ({ messages }: any) => {
   return (
      <MessagesScrollToBottom>
         {messages.map((message: IMessageProps, key: number) => (
            <AnyMessageTypeContainer key={key}>
               {message.type === "text-message" ? (
                  <TextMessage message={message} />
               ) : (
                  <NoticeMessage message={message} />
               )}
            </AnyMessageTypeContainer>
         ))}
      </MessagesScrollToBottom>
   );
};

export default ChatMessages;
