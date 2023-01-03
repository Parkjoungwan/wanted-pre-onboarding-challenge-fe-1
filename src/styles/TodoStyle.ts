import styled from "styled-components";

export const TodoDiv = styled.div`
  witdh: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 5fr 19fr;
  grid-template-rows: 1.5fr 10fr 1fr;
`;
export const LogoDiv = styled.div`
  grid-row: 1;
  grid-column: 1;
  font-family: NanumMyeongjo;
  font-size: 60px;
  font-weight: bold;
  text-align: center;
  margin-top: 10px;
`;
export const DetailDiv = styled.div`
  grid-row: 1 / 4;
  grid-column: 2;
  display: grid;
  grid-template-rows: 1.5fr 10fr 1fr;
`;
export const HeaderDiv = styled.div`
  grid-row: 1;
  display: grid;
  grid-template-columns: 12fr 7fr;
`;
export const ContentDiv = styled.div`
  grid-row: 2;
  align-content: center;
  justify-content: center;
`;
export const LogDiv = styled.div`
  grid-row: 3;
  text-align: center;
  align-content: center;
  justify-content: center;
`;
export const ListDiv = styled.div`
  grid-row: 2;
  grid-column: 1;
  display: flex;
  flex-direction: column;
  align-content: center;
  text-align: center;
  padding: 5px;
  gap: 3px;

  font-family: NanumMyeongjo;
  font-size: 30px;
  font-weight: bold;

  overflow-y: scroll;
  scroll-behavior: smooth;
  max-height: 100%;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
export const CreateButton = styled.button`
  grid-row: 2;
  grid-column: 1;
  font-family: NanumMyeongjo;
  font-size: 30px;
  font-weight: bold;
`;
export const LogOutDiv = styled.div`
  grid-row: 3;
  grid-column: 1;
  align-content: center;
  justify-content: center;
`;
