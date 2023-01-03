import { useEffect, useState, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import StateModal from "../components/modals/StateModal";
import * as TodoStyle from "../styles/TodoStyle";
import TodoList from "../components/Todo/TodoList";
import {
  StateModalControllerContext,
  StateModalController,
  TodoInfo,
  TodoInfoContext,
} from "../lib/context";
import TodoDetail from "../components/Todo/TodoDetail";
import { ButtonDiv } from "../styles/HomeStyle";

interface stateType {
  stateImg: string;
  msg: string;
}

export default function TodoApp() {
  //set Todo Infomation
  const { no } = useParams();
  const [selectedNum, setSelectedNum] = useState<number>(Number(no));
  const [selectedId, setSelectedId] = useState<string>("");
  const [TodoInfo, setTodoInfo] = useState<TodoInfo>({
    num: selectedNum,
    setNum: setSelectedNum,
    id: selectedId,
    setId: setSelectedId,
  })
  const setData = useCallback(() => {
    setSelectedNum(Number(no));
    setTodoInfo({
      num: selectedNum,
      setNum: setSelectedNum,
      id: selectedId,
      setId: setSelectedId,
    })
  }, [no]);
  useEffect(()=> {
    setData();
  }, [setData])
  //set stateModal
  const [stateModal, setStateModal] = useState<boolean>(false);
  const [stateData, setStateData] = useState<stateType>({
    stateImg: "",
    msg: "",
  });
  const stateModalController: StateModalController = {
    isOpen: stateModal,
    setOpen: setStateModal,
    stateType: stateData,
    setStateType: setStateData,
  };
  //set TokenCheck
  const navi = useNavigate();
  const token = window.localStorage.getItem("token");
  const tokenCheck = useCallback(() => {
    if (!token) navi("/");
  }, [token, navi]);
  useEffect(() => {
    tokenCheck();
  }, [tokenCheck]);

  //LogOut
  const LogOut = () => {
    window.localStorage.removeItem("token");
    navi("/");
  }
  return (
    <TodoInfoContext.Provider value={TodoInfo}>
      <StateModalControllerContext.Provider value={stateModalController}>
        <TodoStyle.TodoDiv>
          <TodoStyle.LogoDiv>Todo</TodoStyle.LogoDiv>
          <TodoList />
          <TodoDetail />
          <TodoStyle.LogOutDiv>
            <TodoStyle.Button onClick={LogOut}>LogOut</TodoStyle.Button>
          </TodoStyle.LogOutDiv>
          {stateModal ? (
            <StateModal
              modalOpen={stateModal}
              setModalOpen={setStateModal}
              stateImg={stateData.stateImg}
              msg={stateData.msg}
            />
          ) : null}
        </TodoStyle.TodoDiv>
      </StateModalControllerContext.Provider>
    </TodoInfoContext.Provider>
  );
}
