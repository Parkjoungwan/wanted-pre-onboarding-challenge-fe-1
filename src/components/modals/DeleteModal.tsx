import React, { useRef, useContext } from "react";
import styled, { css } from "styled-components";
import { todoApi } from "../../lib/APIs/todoAPI";
import SvgButton from "../other/SvgButton";
import {
  TodoListInterface,
  TodoNumber,
  TodoInfoContext,
  TodoListContext,
  StateModalControllerContext,
} from "../../lib/context/context";
import { tokenExist, findID, findIndex } from "../Todo/todoUtil";
import { useNavigate } from "react-router-dom";
import { stateHandle } from "../other/utils";

const ModalBaseDiv = styled.div`
  width: 300px;
  height: 150px;
  display: grid;
  grid-template-rows: 40px 110px;
  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
`;

const ModalBaseHeader = styled.header`
  background-color: #FBC458;
  text-align: right;
`;

const ModalBaseMain = styled.main`
  display: grid;
  justify-content: center;
  align-items: center;
  text-align: center;
  grid-template-rows: 1fr 1fr;
  background-color: #FDEF98;
`;

const ModalBtnContainer = styled.div`
  grid-row: 2 / 3;
`;

const ModalBaseBtn = styled.button`
  border: 0;
  font-size: 1rem;
  border-radius: 10px;
  width: 100px;
  height: 35px;
  margin: 10px;
  background-color: white;
  &:active {
    background-color: white;
  }
`;

const ModalBaseP = styled.p<{ isError?: number }>`
  grid-row: 1 / 2;
  ${(props) =>
    props.isError === 1
      ? css`
          font-size: 0.5rem;
        `
      : css`
          font-size: 1rem;
        `};
  ${(props) =>
    props.isError === 1
      ? css`
          margin-top: 3px;
        `
      : css`
          margin-top: 20px;
        `};
  ${(props) =>
    props.isError === 1
      ? css`
          color: #dd2c00;
        `
      : css`
          color: black;
        `};
`;

interface ChatModelType {
  setIsModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function DeleteModal({ setIsModal }: ChatModelType) {
  const divRef = useRef<HTMLDivElement | null>(null);
  const todoNumber = useContext(TodoInfoContext);
  const todoList = useContext(TodoListContext);
  const stateModal = useContext(StateModalControllerContext);
  const navi = useNavigate();

  const Delete = async () => {
    if (!tokenExist()) navi("/auth");
    try {
      const id = findID(todoNumber, todoList);
      if (id) {
        await todoApi.deleteTodo(id);
        stateHandle(stateModal, "Success", "TodoList Deleted");
      }
      const index = findIndex(todoNumber, todoList);
      if (index) {
        todoList?.todoList.splice(index, 1);
      }
      if (index === 0) {
        todoList?.todoList.shift();
      }
      navi("/" + (todoNumber?.num ? todoNumber.num - 1 : 0));
    } catch (e: any) {
      stateHandle(stateModal, "Error", "Fail to Delete");
    }
  };

  const closeClick = () => {
    setIsModal(false);
  };

  const checkClick = () => {
    Delete();
    setIsModal(false);
  };

  return (
    <ModalBaseDiv ref={divRef}>
      <ModalBaseHeader>
        <SvgButton svgName="XmarkSvg" onClick={closeClick}></SvgButton>
      </ModalBaseHeader>
      <ModalBaseMain>
        <ModalBaseP>삭제하시겠습니까?</ModalBaseP>
        <ModalBtnContainer>
          <ModalBaseBtn onClick={checkClick}>예</ModalBaseBtn>
          <ModalBaseBtn onClick={closeClick}>아니요</ModalBaseBtn>
        </ModalBtnContainer>
      </ModalBaseMain>
    </ModalBaseDiv>
  );
}
