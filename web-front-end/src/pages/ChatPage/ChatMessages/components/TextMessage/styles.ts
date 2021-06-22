import styled from "styled-components";

interface ITextMessageContainerProps {
   fromMe: boolean;
}

export const TextMessageContainer = styled.div<ITextMessageContainerProps>`
   width: 95%;
   display: flex;
   flex-direction: column;
   align-items: ${(props) => (props.fromMe ? "flex-end" : "flex-start")};
`;

export const MessageCard = styled.div<ITextMessageContainerProps>`
   background-color: ${(props) => (props.fromMe ? "#A3D8F4" : "#FDFAF6")};

   margin: 5px 0;
   padding: 7px;
   border-radius: 5px;

   max-width: 90%;
`;

export const WrittenMessageText = styled.p`
   font-size: 17px;
   font-weight: 300;
   margin-bottom: 10px;
`;

export const MessageInformationsContainer = styled.p`
   display: flex;
   justify-content: space-between;
   align-items: center;
   text-align: center;
   min-width: 100px;
`;

export const MessageTime = styled.span`
   font-size: 12px;
   font-weight: 300;
   opacity: 0.5;
`;

export const MessageUser = styled.span`
   font-size: 14px;
   font-weight: 300;
`;
