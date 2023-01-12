import { createContext } from "react";

export interface stateType {
  stateImg: string;
  msg: string;
}

export interface TodoNumber {
  num: number;
  setNum: React.Dispatch<React.SetStateAction<number>>;
}

export interface StateModalController {
  isOpen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  stateType: stateType;
  setStateType: React.Dispatch<React.SetStateAction<stateType>>;
}

export interface TodoListInterface {
  todoList: any[];
  setTodoList: React.Dispatch<React.SetStateAction<any[]>>;
}

export interface tokenInterface {
  token: string;
  setToken: React.Dispatch<React.SetStateAction<string>>;
}

export interface authInput {
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
}

export const StateModalControllerContext =
  createContext<StateModalController | null>(null);
export const TodoInfoContext = createContext<TodoNumber | null>(null);
export const TodoListContext = createContext<TodoListInterface | null>(null);
export const TokenContext = createContext<tokenInterface | null>(null);
export const AuthInputContext = createContext<authInput | null>(null);
