import React, {
   BaseSyntheticEvent,
   KeyboardEventHandler,
   MutableRefObject,
   RefObject,
   useRef,
   useState,
} from "react";

import {
   ApplicationTitleContainer,
   ApplicationTitleText,
   JoinPageContainer,
   JoinCard,
   GitHubContainer,
   GitHubIcon,
   GitHubName,
} from "./styles";
import BeautifulJoinInput from "./components/BeautifulJoinInput/";
import JoinButton from "./components/JoinButton/";

import personIcon from "../../assets/icons/person.svg";
import roomIcon from "../../assets/icons/room.svg";
import gitHubIcon from "../../assets/icons/git-hub.png";
import { InputType } from "zlib";
import { useHistory } from "react-router-dom";

const JoinPage = () => {
   const [nickName, setNickName] = useState("");
   const [roomName, setRoomName] = useState("");

   const nickInputRef = useRef<HTMLInputElement>();
   const roomInputRef = useRef<HTMLInputElement>();

   const history = useHistory();

   const handleKeyPress = () => {
      if (nickName === "") {
         nickInputRef.current?.focus();
         return;
      }
      if (roomName === "") {
         roomInputRef.current?.focus();
         return;
      }
      history.push(`/chat?user=${nickName}&room=${roomName}`);
   };

   return (
      <JoinPageContainer>
         <ApplicationTitleContainer>
            <ApplicationTitleText>React Socket Chat</ApplicationTitleText>
         </ApplicationTitleContainer>

         <JoinCard>
            <BeautifulJoinInput
               title="Seu Apelido"
               placeholder="Digite seu apelido"
               icon={personIcon}
               onChange={(event) => setNickName(event.target.value)}
               onKeyPress={handleKeyPress}
               inputRef={nickInputRef as MutableRefObject<HTMLInputElement>}
            />

            <BeautifulJoinInput
               title="Nome da Sala"
               placeholder="Digite a sala"
               icon={roomIcon}
               onChange={(event) => setRoomName(event.target.value)}
               onKeyPress={handleKeyPress}
               inputRef={roomInputRef as MutableRefObject<HTMLInputElement>}
            />

            <JoinButton
               to={{
                  pathname: "/chat",
                  search: `?user=${nickName}&room=${roomName}`,
               }}
            />
         </JoinCard>

         <GitHubContainer>
            <GitHubIcon src={gitHubIcon} />
            <GitHubName>hiagoLF</GitHubName>
         </GitHubContainer>
      </JoinPageContainer>
   );
};

export default JoinPage;
