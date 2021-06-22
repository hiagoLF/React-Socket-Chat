import styled from "styled-components";
import ScrollToBottom from "react-scroll-to-bottom";

export const MessagesScrollToBottom = styled(ScrollToBottom)`
   padding: 3px 0;
   overflow: auto;
   flex: auto;
   width: 100%;
`;

export const AnyMessageTypeContainer = styled.div`
   width: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
`;
