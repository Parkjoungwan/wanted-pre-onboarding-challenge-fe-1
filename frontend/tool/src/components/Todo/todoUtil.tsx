import { TodoListInterface, TodoNumber } from "../../lib/context/context";

export const findID = (
  todoNumber: TodoNumber | null,
  todoList: TodoListInterface | null
) => {
  if (todoList?.todoList)
    for (let i = 0; i < todoList.todoList.length; i++) {
      if (todoNumber?.num === i) {
        return todoList.todoList[i].id;
      }
    }
  return null;
};

export const findIndex = (
  todoNumber: TodoNumber | null,
  todoList: TodoListInterface | null
):number | null => {
  if (todoList?.todoList)
    for (let i = 0; i < todoList.todoList.length; i++) {
      if (todoNumber?.num === i) {
        return i;
      }
    }
  return null;
};
