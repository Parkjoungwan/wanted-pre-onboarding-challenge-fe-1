import { StateModalController, tokenInterface } from "../../lib/context/context";

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

export const tokenCheck = (
  tokenContext: tokenInterface | null,
  stateContext: StateModalController | null
) => {
  const token = window.localStorage.getItem("token");
  if (token)
    if (token === tokenContext?.token) 
      return(false);
    else {
      stateHandle(stateContext, "Error", "Wrong Token.");
      window.localStorage.removeItem("token");
    }
  return (true);
}