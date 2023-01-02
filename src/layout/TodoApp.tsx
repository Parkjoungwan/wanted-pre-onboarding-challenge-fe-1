import { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { todoApi } from "../lib/todoAPI";
import StateModal from "../components/modals/StateModal";
import styled from "styled-components";
import * as TodoStyle from "../styles/TodoStyle"

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
  <TodoStyle.TodoDiv>
    <TodoStyle.LogoDiv>
        Todo
    </TodoStyle.LogoDiv>
    <TodoStyle.HeaderDiv>
        <div>title</div>    
    </TodoStyle.HeaderDiv>
    <TodoStyle.ListDiv>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
    </TodoStyle.ListDiv>
    <TodoStyle.ContentDiv>
        <div>Content</div>
    </TodoStyle.ContentDiv>
    <TodoStyle.LogOutDiv>
        <div>LogOut</div>
    </TodoStyle.LogOutDiv>
    <TodoStyle.LogDiv>
        <div>Log</div>
    </TodoStyle.LogDiv>
  </TodoStyle.TodoDiv>
  );
}
