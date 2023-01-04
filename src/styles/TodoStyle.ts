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
  border-left: 1px solid black;
  grid-row: 1 / 4;
  grid-column: 2;
  display: grid;
  grid-template-rows: 1.5fr 10fr 1fr;
`;
export const HeaderDiv = styled.div`
  grid-row: 1;
  display: grid;
  align-items: center;
  grid-template-columns: 12fr 7fr;
  border-bottom: 1px solid black;
`;
export const TitleDiv = styled.div`
  grid-column: 1;
  text-align: center;
  font-family: NanumMyeongjo;
  font-size: 30px;
  font-weight: bold;
`;
export const TitleInput = styled.input`
  text-align: center;
  max-height: 100%;
  max-width: 100%;
  background-color: #fbdea2;
  font-family: NanumMyeongjo;
  font-size: 30px;
  font-weight: bold;
  border: 0 solid black;
  &:disabled {
    color: black;
  }
`;
export const UpdateAndDeleteDiv = styled.div`
  grid-column: 2;
  display: flex;
  justify-content: center;
`;
export const ContentDiv = styled.div`
  grid-row: 2;
  margin: 3px;
  align-content: center;
  justify-content: center;

  word-wrap: break-word;
  word-break: break-all;

  overflow-y: scroll;
  scroll-behavior: smooth;
  max-height: 100%;
  max-width: 100%;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
export const ContentInput = styled.textarea`
  max-height: 100%;
  width: 100%;
  word-wrap: break-word;
  word-break: break-all;
  background-color: #fbdea2;
  font-family: NanumMyeongjo;
  font-size: 30px;
  font-weight: bold;
  border: 0 solid black;
  &:disabled {
    color: black;
  }
`;
export const LogDiv = styled.div`
  border-top: 1px solid black;
  grid-row: 3;
  text-align: center;
  font-family: NanumMyeongjo;
  font-size: 20px;
  font-weight: bold;
`;
export const ListDiv = styled.div`
  border-top: 1px solid black;
  border-bottom: 1px solid black;
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
export const Button = styled.button`
  grid-row: 2;
  grid-column: 1;
  font-family: NanumMyeongjo;
  font-size: 30px;
  font-weight: bold;
`;
export const LogOutDiv = styled.div`
  display: grid;
  grid-row: 3;
  grid-column: 1;
  align-content: center;
  justify-content: center;
`;
