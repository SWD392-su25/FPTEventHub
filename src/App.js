// Component chính
import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Header from "./components/Header";
import Login from "./components/Login";
import ForgotPassword from "./components/ForgotPassword";
import HomePage from "./components/HomePage";

// Bọc phần nội dung để chỉ hiện Header ở các trang cụ thể
const AppLayout = () => {
  const location = useLocation();

  // Các path không cần Header (ví dụ: đăng nhập, quên mật khẩu)
  const hideHeaderPaths = ["/login", "/forgot-password"];
  const shouldHideHeader = hideHeaderPaths.includes(location.pathname);

  return (
    <>
      {!shouldHideHeader && <Header />}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/home" element={<HomePage />} />
        {/* Thêm các route khác ở đây */}
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

