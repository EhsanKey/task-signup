import React from "react";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import Signup from "./auth/Signup";

const App = () => {
  return (
    <Routes>
      <Route path="/signUp" element={<Signup />} />
      <Route path="/" element={<Navigate to="/signUp" />} />
    </Routes>
  );
};

export default App;
