import { useEffect, useState, useCallback, useContext, useRef } from "react";
import * as TodoStyle from "../../styles/layoutStyles/TodoStyle";
import {
  StateModalControllerContext,
  TodoInfoContext,
  TodoListContext,
} from "../../lib/context/context";
import { todoApi } from "../../lib/APIs/todoAPI";
import { useNavigate } from "react-router-dom";
import { stateHandle } from "../other/utils";
import { findID, findIndex } from "./todoUtil";
import PublicModal from "../modals/PublicModal";
import isToken from "../../utils/isToken";

export default function TodoDetail() {
  //set Context & navi
  const navi = useNavigate();
  const todoNumber = useContext(TodoInfoContext);
  const todoList = useContext(TodoListContext);
  const stateModal = useContext(StateModalControllerContext);

  //set DetailInfo
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [log, setLog] = useState<string>("");
  const callDetail = useCallback(async () => {
    if (todoList?.todoList)
      for (let i = 0; i < todoList.todoList.length; i++) {
        if (todoNumber?.num === i) {
          setTitle(todoList.todoList[i].title);
          setContent(todoList.todoList[i].content);
          setLog(todoList.todoList[i].updatedAt);
        }
      }
  }, [todoNumber, todoList]);
  useEffect(() => {
    callDetail();
  }, [callDetail]);

  //set autoSize textarea
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  useEffect(() => {
    if (textareaRef && textareaRef.current) {
      textareaRef.current.style.height = "0px";
      const scrollHeight = textareaRef.current.scrollHeight;
      textareaRef.current.style.height = scrollHeight + "px";
    }
  }, [content]);

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
    if (!isToken()) navi("/auth");
    try {
      const id = findID(todoNumber, todoList);
      if (id) {
        await todoApi.updateTodo(id, title, content);
        stateHandle(stateModal, "Success", "TodoList가 업데이트 되었습니다.");
      }
      const index = findIndex(todoNumber, todoList);
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
      stateHandle(stateModal, "Error", "Fail to Update");
    }
  };
  const titleUpdate = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };
  const contentUpdate = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(event.target.value);
  };

  //delete DetailInfo
  const [deleteCheck, setDeleteCheck] = useState<boolean>(false);
  const Delete = () => {
    setDeleteCheck(true);
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
          ref={textareaRef}
          onChange={contentUpdate}
          value={content}
          disabled={!update}
        />
      </TodoStyle.ContentDiv>
      <TodoStyle.LogDiv>
        <div>{log}</div>
      </TodoStyle.LogDiv>
      {deleteCheck && (
        <PublicModal
          isModal={deleteCheck}
          setIsModal={setDeleteCheck}
          isModalNum={1}
        />
      )}
    </TodoStyle.DetailDiv>
  );
}
