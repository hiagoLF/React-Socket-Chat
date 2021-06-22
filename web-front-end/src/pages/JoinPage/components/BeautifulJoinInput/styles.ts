import styled from "styled-components";

export const BeautifulJoinInputContainer = styled.div`
   width: 90%;
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   justify-content: left;
   border-bottom-style: solid;
   border-bottom-width: 2px;
   border-bottom-color: #fff;

   margin-bottom: 30px;
`;

export const JoinInputTitle = styled.p`
   font-size: 20px;
   color: #fff;
   margin-left: 7px;
`;

export const TextInputContainer = styled.div`
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: left;
   padding-top: 10px;
`;

export const InputIcon = styled.img`
   width: 24px;
   opacity: 0.5;
   margin-left: 4px;
`;

export const TextInput = styled.input`
   background-color: rgba(0, 0, 0, 0);
   border: none;
   text-decoration: none;
   width: 100%;
   color: white;
   outline: none;
   font-size: 20px;
   font-weight: 300;
   margin-left: 9px;

   &::placeholder {
      color: #fff;
      opacity: 0.3;
   }
`;
