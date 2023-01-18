import {
  StateModalController,
} from "../../lib/context/context";

export const stateHandle = (
  stateContext: StateModalController | null,
  stateImg: string,
  msg: string
) => {
  stateContext?.setOpen(true);
  stateContext?.setStateType({
    stateImg: stateImg,
    msg: msg,
  });
};

export const tokenCheck = (stateContext: StateModalController | null) => {
  const token = window.localStorage.getItem("token");
  if (token) {
    stateHandle(stateContext, "Error", "Token Already Exist.");
    return (false);
  }
  return true;
};
