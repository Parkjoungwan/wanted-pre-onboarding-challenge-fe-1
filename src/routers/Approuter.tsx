import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../layout/Home";

export default function Approuter() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    </BrowserRouter>
  );
}
