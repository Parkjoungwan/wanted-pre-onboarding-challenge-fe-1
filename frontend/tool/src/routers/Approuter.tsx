import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "../layout/Home";
import TodoApp from "../layout/TodoApp";
import {
  stateType,
  StateModalController,
  StateModalControllerContext,
} from "../lib/context/context";
import isToken from "../utils/isToken";

export default function Approuter() {
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
    <StateModalControllerContext.Provider value={stateModalController}>
      <BrowserRouter>
        <Routes>
          <Route path="/auth" element={!isToken() ? <Home /> : <Navigate to="/" replace />} />
          <Route path="/:no" element={isToken() ? <TodoApp /> : <Navigate to="/auth" replace />} />
          <Route path="/" element={isToken() ? <TodoApp /> : <Navigate to="/auth" replace />} />
        </Routes>
      </BrowserRouter>
    </StateModalControllerContext.Provider>
  );
}
