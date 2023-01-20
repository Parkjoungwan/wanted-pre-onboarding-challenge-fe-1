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