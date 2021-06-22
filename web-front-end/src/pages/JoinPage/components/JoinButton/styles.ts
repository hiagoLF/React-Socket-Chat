import { Link } from "react-router-dom";
import styled from "styled-components";

export const JoinButtonContainer = styled(Link)`
   background-color: #cecece;
   border-radius: 5px;

   display: flex;
   justify-content: center;
   align-items: center;
   height: 50px;
   width: 90%;
`;

export const ButtonText = styled.span`
   font-size: 24px;
`;

export const ButtonIcon = styled.img`
   height: 30px;
`;
