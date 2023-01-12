import { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import StateModal from "../components/modals/StateModal";
import * as TodoStyle from "../styles/layoutStyles/TodoStyle";
import TodoList from "../components/Todo/TodoList";
import {
  StateModalControllerContext,
  TodoInfo,
  TodoInfoContext,
  TodoListContext,
  TodoListInterface,
  TokenContext,
} from "../lib/context/context";
import TodoDetail from "../components/Todo/TodoDetail";
import { tokenCheck } from "../components/other/utils";

export default function TodoApp() {
  const stateContext = useContext(StateModalControllerContext);
  const tokenContext = useContext(TokenContext);
  const navi = useNavigate();

  //set TokenCheck
  useEffect(() => {
    if (!tokenCheck(tokenContext, stateContext)) {
      navi("/");
    }
  }, [navi, tokenContext, stateContext]);

  //set Todo Infomation
  const { no } = useParams();
  useEffect(() => {
    if (no)
      setTodoInfo({
        num: Number(no),
        setNum: setSelectedNum,
      });
    else
      setTodoInfo({
        num: 0,
        setNum: setSelectedNum,
      });
  }, [no]);
  const [selectedNum, setSelectedNum] = useState<number>(no ? Number(no) : 0);
  const [TodoInfo, setTodoInfo] = useState<TodoInfo>({
    num: selectedNum,
    setNum: setSelectedNum,
  });
  const [todoList, setTodoList] = useState<any[]>([]);
  const todoListConext: TodoListInterface = {
    todoList: todoList,
    setTodoList: setTodoList,
  };

  //LogOut
  const LogOut = () => {
    window.localStorage.removeItem("token");
    navi("/");
  };

  return (
    <TodoListContext.Provider value={todoListConext}>
      <TodoInfoContext.Provider value={TodoInfo}>
        <TodoStyle.TodoDiv>
          <TodoStyle.LogoDiv>Todo</TodoStyle.LogoDiv>
          <TodoList />
          <TodoDetail />
          <TodoStyle.LogOutDiv>
            <TodoStyle.Button onClick={LogOut}>LogOut</TodoStyle.Button>
          </TodoStyle.LogOutDiv>
          {stateContext?.isOpen ? (
            <StateModal
              modalOpen={stateContext?.isOpen}
              setModalOpen={stateContext?.setOpen}
              stateImg={stateContext?.stateType.stateImg}
              msg={stateContext?.stateType.msg}
            />
          ) : null}
        </TodoStyle.TodoDiv>
      </TodoInfoContext.Provider>
    </TodoListContext.Provider>
  );
}
