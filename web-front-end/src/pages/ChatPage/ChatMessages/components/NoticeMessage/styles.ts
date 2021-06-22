import styled from "styled-components";

export const NoticeMessageContainer = styled.div`
   width: 95%;
   height: 25px;

   display: flex;
   justify-content: center;
   align-items: center;

   background-color: #fdfaf6;
   border-radius: 5px;

   position: relative;

   margin: 2px 0;
`;

export const NoticeText = styled.span`
   font-size: 14px;
   opacity: 0.5;
`;

export const MessageTimeIndicator = styled.span`
   position: absolute;
   right: 10px;
   font-size: 14px;
   opacity: 0.5;
`;
