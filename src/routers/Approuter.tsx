import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../layout/Home";
import TodoApp from "../layout/TodoApp";

export default function Approuter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Todo/:no" element={<TodoApp />} />
      </Routes>
    </BrowserRouter>
  );
}
