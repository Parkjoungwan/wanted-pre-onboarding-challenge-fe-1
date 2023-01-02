import { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { todoApi } from "../lib/todoAPI";
import StateModal from "../components/modals/StateModal";
import styled from "styled-components";

const TodoDiv = styled.div`
  witdh: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 5fr 19fr;
  grid-template-rows: 1.5fr 10fr 1fr;
`;
const HeaderDiv = styled.div`
    grid-row: 1;
    grid-column: 2;
    display: grid;
    grid-template-columns: 12fr 7fr;
`;
const LogoDiv = styled.div`
    grid-row: 1;
    grid-column: 1;
    font-family: NanumMyeongjo;
    font-size: 60px;
    font-weight: bold;
    text-align: center;
    margin-top: 10px;
`;
const ListDiv = styled.div`
    grid-row: 2;
    grid-column: 1;
    align-content: center;
    justify-content: center;
`;
const ContentDiv = styled.div`
    grid-row: 2;
    grid-column: 2;
    align-content: center;
    justify-content: center;
`;
const LogOutDiv = styled.div`
    grid-row: 3;
    grid-column: 1;
    align-content: center;
    justify-content: center;
`;
const LogDiv = styled.div`
    grid-row: 3;
    grid-column: 2;
    align-content: center;
    justify-content: center;
`;

interface stateType {
  stateImg: string;
  msg: string;
}

export default function TodoApp() {
  const [modalOpen, setModalOpen] = useState(false);
  const [stateData, setStateData] = useState<stateType>({
    stateImg: "",
    msg: "",
  });

  const token = window.localStorage.getItem("token");
  const navi = useNavigate();
  const tokenCheck = useCallback(() => {
    if (!token) navi("/");
  }, [token, navi]);
  useEffect(() => {
    tokenCheck();
  }, [tokenCheck]);

  //   const onClickLogout = () => {
  //     window.localStorage.removeItem("token");
  //     navi("/");
  //   };

  return (
  <TodoDiv>
    <LogoDiv>
        Todo
    </LogoDiv>
    <HeaderDiv>    
    </HeaderDiv>
    <ListDiv>
    </ListDiv>
    <ContentDiv>
    </ContentDiv>
    <LogOutDiv>
    </LogOutDiv>
    <LogDiv>
    </LogDiv>
  </TodoDiv>
  );
}
