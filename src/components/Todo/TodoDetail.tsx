import { useEffect, useState, useCallback, useContext } from "react";
import { todoApi } from "../../lib/todoAPI";
import * as TodoStyle from "../../styles/TodoStyle";
import {
  StateModalControllerContext,
  TodoInfoContext,
} from "../../lib/context";

export default function TodoDetail() {
  //set Context
  const stateModal = useContext(StateModalControllerContext);
  const TodoInfo = useContext(TodoInfoContext);
  //set DetailInfo
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [log, setLog] = useState<string>("");
  const callDetail = useCallback(async () => {
    try {
      const id: string | undefined = TodoInfo?.id ? TodoInfo.id : undefined;
      if (id)
      {
        const response = await todoApi.getTodoById(id);
        setTitle(response.data.data.title);
        setContent(response.data.data.content);
        setLog(response.data.data.updatedAt);
      }
    } catch (e: any) {
        console.log(e);
      stateModal?.setOpen(true);
      stateModal?.setStateType({
        stateImg: "Error",
        msg: e.response.data.message,
      });
    }
  }, [TodoInfo, stateModal]);
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
