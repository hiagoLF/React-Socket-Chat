import styled from "styled-components";

export const ApplicationTitleContainer = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;

   width: 250px;
   height: 55px;

   background-color: #7579e7;
   border-radius: 20px;

   margin-bottom: 30px;
`;

export const ApplicationTitleText = styled.span`
   color: #fff;
   font-size: 25px;
`;

export const JoinPageContainer = styled.div`
   width: 100%;
   height: 100vh;

   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;

   background-color: rgba(154, 179, 245, 0.5);
`;

export const JoinCard = styled.div`
   width: 90%;

   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   border-radius: 5px;

   background-color: #7579e7;

   padding: 20px 0;
`;

export const GitHubContainer = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;

   margin-top: 30px;
`;

export const GitHubIcon = styled.img`
   height: 40px;
`;

export const GitHubName = styled.span`
   font-size: 30px;
   margin-left: 10px;
`;
