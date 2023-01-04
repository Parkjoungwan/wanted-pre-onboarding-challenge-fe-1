import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../layout/Home";
import Home2 from "../layout/Home2";
import TodoApp from "../layout/TodoApp";
import { TokenContext, tokenInterface } from "../lib/context";

export default function Approuter() {
  const [token, setToken] = useState("");
  const tokencon:tokenInterface = {
    token: token,
    setToken: setToken,
  }
  return (
    <TokenContext.Provider value={tokencon}>
      <BrowserRouter>
        <Routes>
          <Route path="/auth" element={<Home />} />
          <Route path="/:no" element={<TodoApp />} />
          <Route path="/" element={<TodoApp />} />
        </Routes>
      </BrowserRouter>
    </TokenContext.Provider>
  );
}
