import { useEffect } from "react";
import styled from "styled-components";

const HomeDiv = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-rows: 2fr 6fr 1fr 2fr 2fr;
`;

const LogoDiv = styled.div`
  grid-row: 2;
  display: grid;
  grid-template-columns: 1fr 6fr 14fr;
`;

const ImgDiv = styled.div`
  font-family: NanumMyeongjo;
  font-size: 60px;
  font-weight: bold;
  grid-column: 2;
`;

const InputDiv = styled.div`
  grid-row: 4;
  display: grid;
  grid-template-columns: 2.5fr 6.5fr 2fr 7fr 2fr;
`;

const IdDiv = styled.div`
  font-family: NanumMyeongjo;
  font-size: 20px;
  font-weight: bold;
  grid-column: 2;
`;
const PwDiv = styled.div`
  font-family: NanumMyeongjo;
  font-size: 20px;
  font-weight: bold;
  grid-column: 4;
`;

export default function Home() {
  useEffect(() => {
    const token = sessionStorage.getItem("token");
    const rtoken = sessionStorage.getItem("rtoken");
    if (token || rtoken) {
      sessionStorage.removeItem("token");
      sessionStorage.removeItem("rtoken");
    }
  }, []);

  return (
    <HomeDiv>
      <LogoDiv>
        <ImgDiv>Todo List</ImgDiv>
      </LogoDiv>
      <InputDiv>
        <IdDiv>ID: </IdDiv>
        <PwDiv>PW: </PwDiv>
      </InputDiv>
    </HomeDiv>
  );
}
