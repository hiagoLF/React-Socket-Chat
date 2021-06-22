import styled from "styled-components";

export const ChatPageContainer = styled.div`
   width: 100%;
   height: 100%;
   background-color: rgba(154, 179, 245, 0.5);
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   align-items: center;
`;

export const ChatHeaderBar = styled.div`
   height: 55px;
   width: 100%;
   display: flex;
   justify-content: space-between;
   align-items: center;

   background-color: #7579e7;
`;

export const HeaderBarIcon = styled.img`
   width: 30px;
   margin-left: 10px;
`;

export const HeaderCloseIcon = styled.img`
   width: 24px;
   margin-right: 10px;
`;

export const TypingMessageText = styled.span`
   font-size: 12px;
   opacity: 0.6;
   width: 95%;
   margin-bottom: 5px;
`;