import { Route, Routes } from "react-router-dom";
import Login from "../component/Login";
import Register from "../component/Register";

export default function ScoringRouter() {
  return (
    <Routes>
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/register" element={<Register />} />
      <Route exact path="/" element={<Login />} />
    </Routes>
  );
}