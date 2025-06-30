// src\App.js
// Component chính
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { Navigate } from "react-router-dom";

import Header from "./components/Header";
import Login from "./components/Login";
import ForgotPassword from "./components/ForgotPassword";
import HomePage from "./components/HomePage";
import Register from "./components/Register";
import Profile from "./components/Profile";
import Detail from "./components/Detail";
import { Toolbar } from "@mui/material";

// Bọc phần nội dung để chỉ hiện Header ở các trang cụ thể
const AppLayout = () => {
  const location = useLocation();

  // Các path không cần Header
  const hideHeaderPaths = ["/login", "/forgot-password", "/register"];
  const shouldHideHeader = hideHeaderPaths.includes(location.pathname);

  return (
    <>
      {!shouldHideHeader && <Header />}
      {!shouldHideHeader && <Toolbar />} {/* ⬅ tạo khoảng cách để tránh che */}
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/detail/:eventID" element={<Detail />} />
      </Routes>
    </>
  );
};

const App = () => {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
};

export default App;
