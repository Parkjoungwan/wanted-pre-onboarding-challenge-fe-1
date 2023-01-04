import { useEffect, useState, useCallback, useContext } from "react";
import * as TodoStyle from "../../styles/TodoStyle";
import { TodoInfoContext, TodoListContext } from "../../lib/context";

export default function TodoDetail() {
  //set Context
  const TodoInfo = useContext(TodoInfoContext);
  const todoList = useContext(TodoListContext);
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
  return (
    <TodoStyle.DetailDiv>
      <TodoStyle.HeaderDiv>
        <div>{title}</div>
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
