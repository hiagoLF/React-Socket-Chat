import React, { KeyboardEventHandler, useEffect, useState } from "react";

import {
   TypeMessageInputContainer,
   MessageTextInput,
   SendMessageIcon,
} from "./styles";

import sendIcon from "../../../assets/icons/send.svg";
import { setTimeout } from "timers";

interface ITypeMessageInputProps {
   onMessageTyping: () => void;
   onMessageSubmit: (message: string) => void;
}

const TypeMessageInput = ({ onMessageTyping, onMessageSubmit }: any) => {
   const [messageTyped, setMessageTyped] = useState("");
   const [typingMessage, setTypingMessage] = useState(false)

   const handleTypingMessage = () => {
      // Ver se está digitando e retornar se estiver
      if(typingMessage) return
      // Se não estiver digitando...
      // Ativar digitando para true
      setTypingMessage(true)
      onMessageTyping()
      // Definir TimeOut que coloca o digitando para false depois de 2 segundos
      setTimeout(() => {
         setTypingMessage(false)
      }, 3000)
   }

   const handleInputKeyDownEvent: KeyboardEventHandler = (event) => {
      const keyCode = event.key;
      if (keyCode == "Enter") {
         sendMessage();
         return
      }
      handleTypingMessage()
   };

   const sendMessage = () => {
      onMessageSubmit(messageTyped);
      setMessageTyped("");
   };

   return (
      <TypeMessageInputContainer>
         <MessageTextInput
            value={messageTyped}
            onChange={(event) => setMessageTyped(event.target.value)}
            placeholder="Mensagem"
            onKeyDown={handleInputKeyDownEvent}
         />
         <SendMessageIcon src={sendIcon} onClick={() => sendMessage()} />
      </TypeMessageInputContainer>
   );
};

export default TypeMessageInput;
