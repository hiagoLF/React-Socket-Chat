import React from "react";

import { JoinButtonContainer, ButtonText, ButtonIcon } from "./styles";

import roomBlackIcon from "../../../../assets/icons/room-black.svg";

interface IJoinButtonProps {
   to: Object;
}

const JoinButton = ({ to }: IJoinButtonProps) => {
   return (
      <JoinButtonContainer to={to}>
         <ButtonText>Entrar</ButtonText>
         <ButtonIcon src={roomBlackIcon} />
      </JoinButtonContainer>
   );
};

export default JoinButton;
