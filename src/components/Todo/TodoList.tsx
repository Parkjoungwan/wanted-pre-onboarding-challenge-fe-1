import { useEffect, useState, useCallback, useContext } from "react";
import { todoApi } from "../../lib/todoAPI";
import * as TodoStyle from "../../styles/TodoStyle";
import {
  StateModalControllerContext,
  TodoInfoContext,
} from "../../lib/context";
import { useNavigate, useParams } from "react-router-dom";

export default function TodoList() {
  //set Context
  const stateModal = useContext(StateModalControllerContext);
  const TodoInfo = useContext(TodoInfoContext);
  //set TodoList
  const [listBodyAll, setListBodyAll] = useState<any[]>([]);
  const callList = useCallback(async () => {
    const response = await todoApi.getTodos();
    setListBodyAll(response.data.data);
  }, []);
  const findId = useCallback(() => {
    for (let i = 0; i < listBodyAll.length; i++) {
      if (i === TodoInfo?.num) TodoInfo.setId(listBodyAll[i].id);
    }
  }, [listBodyAll, TodoInfo]);
  useEffect(() => {
    callList();
  }, [callList]);
  useEffect(() => {
    findId();
  }, [findId]);
  //create TodoList
  const createTodo = async () => {
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
    navi("/Todo/" + target);
  };

  return (
    <TodoStyle.ListDiv>
      {listBodyAll[0]
        ? listBodyAll.map((item, index) =>
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
      <TodoStyle.CreateButton onClick={createTodo}>+</TodoStyle.CreateButton>
    </TodoStyle.ListDiv>
  );
}
