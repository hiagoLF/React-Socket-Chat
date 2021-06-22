import React, {
   ChangeEventHandler,
   KeyboardEventHandler,
   MutableRefObject,
   RefObject,
} from "react";

import {
   BeautifulJoinInputContainer,
   JoinInputTitle,
   TextInputContainer,
   InputIcon,
   TextInput,
} from "./styles";

interface IBeautifulJoinInputProps {
   title: string;
   placeholder: string;
   icon: string;
   onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
   onKeyPress: () => void | null;
   inputRef?: MutableRefObject<HTMLInputElement>;
}

const BeautifulJoinInput = ({
   title,
   placeholder,
   icon,
   onChange,
   onKeyPress,
   inputRef,
}: IBeautifulJoinInputProps) => {
   const onKeyDown: React.KeyboardEventHandler<HTMLInputElement> | undefined = (
      event
   ) => {
      if (event.key === "Enter") {
         onKeyPress();
      }
   };

   return (
      <BeautifulJoinInputContainer>
         <JoinInputTitle>{title}</JoinInputTitle>
         <TextInputContainer>
            <InputIcon src={icon} />
            <TextInput
               placeholder={placeholder}
               onChange={onChange}
               onKeyDown={onKeyDown}
               ref={inputRef || undefined}
            />
         </TextInputContainer>
      </BeautifulJoinInputContainer>
   );
};

export default BeautifulJoinInput;
