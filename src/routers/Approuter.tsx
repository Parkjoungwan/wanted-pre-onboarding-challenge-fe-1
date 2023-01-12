import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../layout/Home";
import TodoApp from "../layout/TodoApp";
import {
  TokenContext,
  tokenInterface,
  stateType,
  StateModalController,
  StateModalControllerContext,
} from "../lib/context/context";

export default function Approuter() {
  const [token, setToken] = useState("");
  const tokencon: tokenInterface = {
    token: token,
    setToken: setToken,
  };

  const [stateModal, setStateModal] = useState<boolean>(false);
  const [stateData, setStateData] = useState<stateType>({
    stateImg: "",
    msg: "",
  });
  const stateModalController: StateModalController = {
    isOpen: stateModal,
    setOpen: setStateModal,
    stateType: stateData,
    setStateType: setStateData,
  };

  return (
    <TokenContext.Provider value={tokencon}>
      <StateModalControllerContext.Provider value={stateModalController}>
        <BrowserRouter>
          <Routes>
            <Route path="/auth" element={<Home />} />
            <Route path="/:no" element={<TodoApp />} />
            <Route path="/" element={<TodoApp />} />
          </Routes>
        </BrowserRouter>
      </StateModalControllerContext.Provider>
    </TokenContext.Provider>
  );
}
