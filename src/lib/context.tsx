import { createContext } from "react";

interface stateType {
  stateImg: string;
  msg: string;
}

export interface TodoInfo {
  num: number;
  setNum: React.Dispatch<React.SetStateAction<number>>;
  id: string;
  setId: React.Dispatch<React.SetStateAction<string>>;
}

export interface StateModalController {
  isOpen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  stateType: stateType;
  setStateType: React.Dispatch<React.SetStateAction<stateType>>;
}

export const StateModalControllerContext =
  createContext<StateModalController | null>(null);
export const TodoInfoContext = createContext<TodoInfo | null>(null);
