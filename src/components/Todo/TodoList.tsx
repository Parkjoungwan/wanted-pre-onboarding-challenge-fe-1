import { useEffect, useCallback, useContext } from "react";
import { todoApi } from "../../lib/todoAPI";
import * as TodoStyle from "../../styles/TodoStyle";
import {
  StateModalControllerContext,
  TodoInfoContext,
  TodoListContext,
} from "../../lib/context";
import { useNavigate } from "react-router-dom";

export default function TodoList() {
  //set Context
  const stateModal = useContext(StateModalControllerContext);
  const TodoInfo = useContext(TodoInfoContext);
  const todoList = useContext(TodoListContext);
  const tokenCheck = () => {
    const token = window.localStorage.getItem("token");
    if (!token) navi("/auth");
  };
  //set TodoList
  const callList = useCallback(async () => {
    tokenCheck();
    try {
      const response = await todoApi.getTodos();
      todoList?.setTodoList(response.data.data);
    } catch (e: any) {
      stateModal?.setOpen(true);
      stateModal?.setStateType({
        stateImg: "Error",
        msg: e,
      });
    }
  }, []);
  useEffect(() => {
    callList();
  }, [callList]);
  //create TodoList
  const createTodo = async () => {
    tokenCheck();
    try {
      const title = "newTitle";
      const content = "newDetail";
      const response = await todoApi.createTodo(title, content);
      callList();
      console.log(response);
      stateModal?.setOpen(true);
      stateModal?.setStateType({
        stateImg: "Success",
        msg: "Todo Created!",
      });
    } catch (e: any) {
      stateModal?.setOpen(true);
      stateModal?.setStateType({
        stateImg: "Error",
        msg: e.response.data.message,
      });
    }
  };
  //Show Other Detail
  const navi = useNavigate();
  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target: string = (e.target as HTMLTableElement).id;
    navi("/" + target);
  };

  return (
    <TodoStyle.ListDiv>
      {todoList?.todoList
        ? todoList.todoList.map((item, index) =>
            index === TodoInfo?.num ? (
              <button key={item.id} id={index + ""} onClick={onClick}>
                *{item.title}
              </button>
            ) : (
              <button key={item.id} id={index + ""} onClick={onClick}>
                {item.title}
              </button>
            )
          )
        : null}
      <TodoStyle.Button onClick={createTodo}>+</TodoStyle.Button>
    </TodoStyle.ListDiv>
  );
}
