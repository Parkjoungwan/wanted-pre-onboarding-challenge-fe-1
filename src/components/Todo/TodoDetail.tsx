import { useEffect, useState, useCallback, useContext } from "react";
import * as TodoStyle from "../../styles/TodoStyle";
import {
  StateModalControllerContext,
  TodoInfoContext,
  TodoListContext,
} from "../../lib/context";
import { todoApi } from "../../lib/todoAPI";
import { useNavigate } from "react-router-dom";

export default function TodoDetail() {
  //set Context & navi
  const navi = useNavigate();
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
  //find ID & Index & tokenCheck
  const findID = () => {
    if (todoList?.todoList)
      for (let i = 0; i < todoList.todoList.length; i++) {
        if (TodoInfo?.num === i) {
          return todoList.todoList[i].id;
        }
      }
    return null;
  };
  const findIndex = () => {
    if (todoList?.todoList)
      for (let i = 0; i < todoList.todoList.length; i++) {
        if (TodoInfo?.num === i) {
          return i;
        }
      }
    return null;
  };
  const tokenCheck = () => {
    const token = window.localStorage.getItem("token");
    if (!token) navi("/auth");
  }
  //update DatailInfo
  const [update, setUpdate] = useState<boolean>(false);
  const SwitchUpdate = () => {
    setUpdate(!update);
  };
  const Cancle = () => {
    callDetail();
    setUpdate(!update);
  };
  const Update = async () => {
    tokenCheck();
    try {
      const id = findID();
      if (id) {
        await todoApi.updateTodo(id, title, content);
        stateModal?.setOpen(true);
        stateModal?.setStateType({
          stateImg: "Success",
          msg: "Todo List Updated.",
        });
      }
      const index = findIndex();
      console.log(index);
      if (index !== null) {
        if (todoList?.todoList) {
          let tmp = todoList.todoList;
          tmp[index].title = title;
          tmp[index].content = content;
          todoList.setTodoList(tmp);
        }
      }
      setUpdate(!update);
    } catch (e: any) {
      stateModal?.setOpen(true);
      stateModal?.setStateType({
        stateImg: "Error",
        msg: e,
      });
    }
  };
  const titleUpdate = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };
  const contentUpdate = (event: React.ChangeEvent<HTMLInputElement>) => {
    setContent(event.target.value);
  };
  //delete DetailInfo
  const Delete = async () => {
      tokenCheck();
    try {
      const id = findID();
      if (id) {
        await todoApi.deleteTodo(id);
        stateModal?.setOpen(true);
        stateModal?.setStateType({
          stateImg: "Success",
          msg: "Todo List Deleted.",
        });
      }
      const index = findIndex();
      if (index) {
        todoList?.todoList.splice(index, 1);
      }
      navi("/" + (TodoInfo?.num ? TodoInfo.num - 1 : 0));
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
        <TodoStyle.TitleDiv>
          <TodoStyle.TitleInput
            type="textarea"               
            onChange={titleUpdate}
            value={title}
            disabled={!update}
          />
        </TodoStyle.TitleDiv>
        <TodoStyle.UpdateAndDeleteDiv>
          {update ? (
            <TodoStyle.Button onClick={Update}>Confirm</TodoStyle.Button>
          ) : (
            <TodoStyle.Button onClick={SwitchUpdate}>Update</TodoStyle.Button>
          )}
          {update ? (
            <TodoStyle.Button onClick={Cancle}>Cancle</TodoStyle.Button>
          ) : (
            <TodoStyle.Button onClick={Delete}>Delete</TodoStyle.Button>
          )}
        </TodoStyle.UpdateAndDeleteDiv>
      </TodoStyle.HeaderDiv>
      <TodoStyle.ContentDiv>
        <TodoStyle.ContentInput
          type="textarea"
          onChange={contentUpdate}
          value={content}
          disabled={!update}
        />
      </TodoStyle.ContentDiv>
      <TodoStyle.LogDiv>
        <div>{log}</div>
      </TodoStyle.LogDiv>
    </TodoStyle.DetailDiv>
  );
}
