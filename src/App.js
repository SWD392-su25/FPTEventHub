// src/App.js
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Login from "./components/Login";
import ForgotPassword from "./components/ForgotPassword";
import HomePage from "./components/HomePage";
import Register from "./components/Register";
import Profile from "./components/Profile";
import EventDetail from "./components/EventDetail";
import RegisterEvent from "./components/RegisterEvent";
import RegisterSuccess from "./components/RegisterSuccess";
import RealTimeCalendar from "./components/RealTimeCalendar";
import EventManagement from "./components/admin/EventManagement";
import StudentManagement from "./components/admin/StudentManagement";
import LecturerManagement from "./components/admin/LecturerManagement";
import RegistrationHistory from "./components/RegistrationHistory";

import { Toolbar } from "@mui/material";

const isAdmin = () => {
  const user = JSON.parse(localStorage.getItem("currentUser"));
  return user && user.role === "Admin";
};

const AppLayout = () => {
  const location = useLocation();
  const hideHeaderPaths = ["/login", "/forgot-password", "/register"];
  const shouldHideHeader = hideHeaderPaths.includes(location.pathname);

  return (
    <div className="app-wrapper">
      {!shouldHideHeader && <Header />}
      {!shouldHideHeader && <Toolbar />} {/* tránh Header che nội dung */}
      <div className="content-wrap">
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/detail/:eventID" element={<EventDetail />} />
          <Route path="/register/:eventID" element={<RegisterEvent />} />
          <Route path="/register-success" element={<RegisterSuccess />} />
          <Route path="/real-calendar" element={<RealTimeCalendar />} />
          <Route path="/history" element={<RegistrationHistory />} />

          {/* Các route chỉ dành cho Admin */}
          <Route
            path="/admin/events"
            element={
              isAdmin() ? <EventManagement /> : <Navigate to="/unauthorized" />
            }
          />
          <Route
            path="/admin/students"
            element={
              isAdmin() ? (
                <StudentManagement />
              ) : (
                <Navigate to="/unauthorized" />
              )
            }
          />
          <Route
            path="/admin/lecturers"
            element={
              isAdmin() ? (
                <LecturerManagement />
              ) : (
                <Navigate to="/unauthorized" />
              )
            }
          />
        </Routes>
      </div>
      {!shouldHideHeader && <Footer />}
    </div>
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
