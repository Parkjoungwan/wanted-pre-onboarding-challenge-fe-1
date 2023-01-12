import { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import StateModal from "../components/modals/StateModal";
import * as TodoStyle from "../styles/layoutStyles/TodoStyle";
import TodoList from "../components/Todo/TodoList";
import {
  StateModalControllerContext,
  TodoNumber,
  TodoInfoContext,
  TodoListContext,
  TodoListInterface,
  TokenContext,
} from "../lib/context/context";
import TodoDetail from "../components/Todo/TodoDetail";
import { tokenExist } from "../components/Todo/todoUtil";

export default function TodoApp() {
  const stateContext = useContext(StateModalControllerContext);
  const tokenContext = useContext(TokenContext);
  const navi = useNavigate();

  //set TokenCheck
  useEffect(() => {
    if (!tokenExist()) {
      navi("/");
    }
  }, [navi, tokenContext, stateContext]);

  //set Todo Infomation
  const { no } = useParams();
  const [selectedNum, setSelectedNum] = useState<number>(no ? Number(no) : 0);
  const [TodoInfo, setTodoInfo] = useState<TodoNumber>({
    num: selectedNum,
    setNum: setSelectedNum,
  });
  useEffect(() => {
    console.log(no);
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

  const [todoList, setTodoList] = useState<any[]>([]);
  const todoListConext: TodoListInterface = {
    todoList: todoList,
    setTodoList: setTodoList,
  };

  //LogOut
  const LogOut = () => {
    window.localStorage.removeItem("token");
    navi("/auth");
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
