import { Navigation } from "react-router-dom";
import {
  tokenInterface,
  StateModalController,
} from "../../lib/context/context";
import { authApi } from "../../lib/APIs/authAPI";

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

export const onChangeEmail = (
  event: React.ChangeEvent<HTMLInputElement>,
  setEmail: React.Dispatch<React.SetStateAction<string>>
) => {
  setEmail(event.target.value);
};

export const onChangePassword = (
  event: React.ChangeEvent<HTMLInputElement>,
  setPassword: React.Dispatch<React.SetStateAction<string>>
) => {
  setPassword(event.target.value);
};

export const onClickLogin = async (
  navi: Navigation,
  email: string,
  password: string,
  tokenContext: tokenInterface,
  stateContext: StateModalController
) => {
  try {
    const respone = await authApi.postLogin(email, password);
    tokenContext?.setToken(respone.data.token);
    window.localStorage.setItem("token", respone.data.token);
    return true;
  } catch (e: any) {
    stateHandle(stateContext, "Error", e.response.data.message);
    return false;
  }
};

export const onClickJoin = async (
    email: string,
    password: string,
    stateContext: StateModalController,
) => {
  try {
    const respone = await authApi.postJoin(email, password);
    stateHandle(stateContext, "Success", respone.data.message);
  } catch (e: any) {
    stateHandle(stateContext, "Error", e.response.data.message);
  }
};
