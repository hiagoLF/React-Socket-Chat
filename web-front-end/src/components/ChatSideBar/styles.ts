import styled from "styled-components";

export const ChatSideBarContainer = styled.div`
   width: 99.8%;
   height: 100%;
   background-color: #ccdaff;
   display: flex;
   align-items: center;
   flex-direction: column;
   border: 1px solid #ccdaff;
`;

export const ProfileContainer = styled.div`
   margin-top: 30px;
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
`;

export const ProfileAvatarContainer = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;

   width: 90px;
   height: 90px;

   border-radius: 45px;

   background-color: #7579e7;
`;

export const UserNameInitialLetter = styled.span`
   font-size: 48px;
   font-weight: 500;
   color: #fff;
`;

export const UserNameContainer = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
`;

export const UserNameText = styled.span`
   font-weight: 400;
   font-size: 24px;
`;

export const OnlineIndicator = styled.div`
   width: 20px;
   height: 20px;
   border-radius: 10px;

   margin-left: 10px;

   background-color: #04cb00;
`;

export const RoomProfileContainer = styled.div`
   display: flex;

   width: 90%;
   justify-content: flex-start;

   flex-direction: column;

   margin-top: 30px;
`;

export const RoomName = styled.span`
   width: 100%;
   border-bottom-color: #000;
   border-bottom-width: 1px;
   border-bottom-style: solid;

   font-size: 24px;
   padding-left: 10px;
   opacity: 0.6;
`;

export const UsersOnRoomContainer = styled.div`
   margin-top: 10px;
`;

export const SingleUserContainer = styled.div`
   display: flex;
   flex-direction: row;
   align-items: center;
`;

export const UserOnlineIdicator = styled(OnlineIndicator)`
   width: 10px;
   height: 10px;
   margin-right: 5px;
`;

export const SingleUserName = styled.span`
   font-size: 21px;
   opacity: 0.6;
`;
