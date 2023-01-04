import { useEffect, useState, useCallback, useContext } from "react";
import * as TodoStyle from "../../styles/TodoStyle";
import {
  StateModalControllerContext,
  TodoInfoContext,
  TodoListContext,
} from "../../lib/context";
import { ButtonDiv } from "../../styles/HomeStyle";
import { todoApi } from "../../lib/todoAPI";
import { useNavigate } from "react-router-dom";

export default function TodoDetail() {
  //set Context
  const TodoInfo = useContext(TodoInfoContext);
  const todoList = useContext(TodoListContext);
  const stateModal = useContext(StateModalControllerContext);
  //set DetailInfo
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [log, setLog] = useState<string>("");
  const callDetail = useCallback(async () => {
    if (todoList?.todoList)
      for (let i = 0; i < todoList.todoList.length; i++) {
        if (TodoInfo?.num === i) {
          setTitle(todoList.todoList[i].title);
          setContent(todoList.todoList[i].content);
          setLog(todoList.todoList[i].updatedAt);
        }
      }
  }, [TodoInfo, todoList]);
  useEffect(() => {
    callDetail();
  }, [callDetail]);
  //update DatailInfo
  const navi = useNavigate();
  const findID = () => {
    if (todoList?.todoList)
      for (let i = 0; i < todoList.todoList.length; i++) {
        if (TodoInfo?.num === i) {
          return todoList.todoList[i].id;
        }
      }
    return null;
  };
  const Update = () => {};
  //delete DetailInfo
  const findIndex = () => {
    if (todoList?.todoList)
      for (let i = 0; i < todoList.todoList.length; i++) {
        if (TodoInfo?.num === i) {
          return i;
        }
      }
    return null;
  }
  const Delete = async () => {
    try {
      const id = findID();
      if (id) {
        await todoApi.deleteTodo(id);
        stateModal?.setOpen(true);
        stateModal?.setStateType({
          stateImg: "Success",
          msg: "Todo List Deleted."
        });
      }
      const index = findIndex();
      if (index) {
        todoList?.todoList.splice(index, 1);
      }
      navi('/Todo/' + (TodoInfo?.num ? TodoInfo.num - 1 : 0))
    } catch (e: any) {
      stateModal?.setOpen(true);
      stateModal?.setStateType({
        stateImg: "Error",
        msg: e,
      });
    }
  };
  return (
    <TodoStyle.DetailDiv>
      <TodoStyle.HeaderDiv>
        <TodoStyle.TitleDiv>{title}</TodoStyle.TitleDiv>
        <TodoStyle.UpdateAndDeleteDiv>
          <TodoStyle.Button onClick={Update}>Update</TodoStyle.Button>
          <TodoStyle.Button onClick={Delete}>Delete</TodoStyle.Button>
        </TodoStyle.UpdateAndDeleteDiv>
      </TodoStyle.HeaderDiv>
      <TodoStyle.ContentDiv>
        <div>{content}</div>
      </TodoStyle.ContentDiv>
      <TodoStyle.LogDiv>
        <div>{log}</div>
      </TodoStyle.LogDiv>
    </TodoStyle.DetailDiv>
  );
}
