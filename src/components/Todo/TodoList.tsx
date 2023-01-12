import { useEffect, useCallback, useContext } from "react";
import { todoApi } from "../../lib/APIs/todoAPI";
import * as TodoStyle from "../../styles/layoutStyles/TodoStyle";
import {
  StateModalControllerContext,
  TodoInfoContext,
  TodoListContext,
} from "../../lib/context/context";
import { useNavigate } from "react-router-dom";
import { stateHandle } from "../other/utils";
import { tokenExist } from "./todoUtil";

export default function TodoList() {
  //set Context
  const navi = useNavigate();
  const stateModal = useContext(StateModalControllerContext);
  const TodoInfo = useContext(TodoInfoContext);
  const todoList = useContext(TodoListContext);

  //set TodoList
  const callList = useCallback(async () => {
    if (!tokenExist()) navi("/auth");
    try {
      const response = await todoApi.getTodos();
      todoList?.setTodoList(response.data.data);
    } catch (e: any) {
      stateHandle(stateModal, "Error", "fail to fetch TodoList");
    }
  }, []);
  useEffect(() => {
    callList();
  }, [callList]);

  //create TodoList
  const createTodo = async () => {
    if (!tokenExist()) navi("/auth");
    try {
      const title = "newTitle";
      const content = "newDetail";
      await todoApi.createTodo(title, content);
      callList();
      stateHandle(stateModal, "Success", "Todo Created");
    } catch (e: any) {
      stateHandle(stateModal, "Error", e.response.data.message);
    }
  };

  //Show Other Detail
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
