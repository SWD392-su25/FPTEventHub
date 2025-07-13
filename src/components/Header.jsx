// src/components/Header.jsx

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FPTLogo from "../assets/FPTLogo.png";
import Avatar from "../assets/Avatar.png";
import "../styles/Header.css";
import { logout } from "../utils/authUtils";

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  const currentUser =
    JSON.parse(localStorage.getItem("currentUser")) ||
    JSON.parse(sessionStorage.getItem("currentUser"));
  const role = currentUser?.role || "User";

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLogout = () => {
    localStorage.clear();
    sessionStorage.clear();
    logout();
    navigate("/login", { replace: true });
  };

  return (
    <nav className="navbar fixed-top navbar-light bg-white navbar-expand shadow px-3">
      <Link to="/home" className="navbar-brand d-flex align-items-center">
        <img
          src={FPTLogo}
          alt="FPT Logo"
          width="40"
          height="40"
          className="logo mr-2"
        />
        <span className="small text-dark font-weight-bold">FPT Event Hub</span>
      </Link>

      <ul className="navbar-nav ml-4">
        <li className="nav-item">
          <Link className="nav-link" to="/home">
            Home
          </Link>
        </li>
        {(role === "Student" || role === "Lecturer") && (
          <li className="nav-item">
            <Link className="nav-link" to="/real-calendar">
              Calendar
            </Link>
          </li>
        )}

        {role === "Admin" && (
          <>
            <li className="nav-item">
              <Link className="nav-link" to="/admin/events">
                Quản lý sự kiện
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admin/students">
                Quản lý sinh viên
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admin/lecturers">
                Quản lý giảng viên
              </Link>
            </li>
          </>
        )}
      </ul>

      <div className="flex-grow-1"></div>

      <div className="dropdown">
        <button
          className="btn dropdown-toggle d-flex align-items-center"
          onClick={toggleDropdown}
        >
          <img
            src={Avatar}
            className="rounded-circle"
            alt="Avatar"
            width="35"
            height="35"
          />
        </button>

        {showDropdown && (
          <div
            className="dropdown-menu dropdown-menu-right show mt-2"
            style={{ minWidth: "180px" }}
          >
            <div className="dropdown-header text-muted">
              Role: <strong>{role}</strong>
            </div>
            <div className="dropdown-divider"></div>

            <Link to="/profile" className="dropdown-item">
              Profile
            </Link>
            <Link to="/history" className="dropdown-item">
              History
            </Link>

            <div className="dropdown-divider"></div>
            <button
              className="dropdown-item text-danger"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
