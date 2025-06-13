// src/components/Header.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import FPTLogo from '../assets/FPTLogo.png';
import '../styles/Header.css';
import { logout } from '../utils/authUtils';

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLogout = () => {
    // Xóa token hoặc thông tin đăng nhập
    // localStorage.removeItem('userToken'); // Hoặc userInfo, accessToken, v.v.
    // localStorage.removeItem('userEmail');
    // localStorage.removeItem('userRole');
    localStorage.clear(); // hoặc removeItem từng key
    sessionStorage.clear();

    // Chuyển hướng về Login
    logout();
    navigate('/login', { replace: true });
  };

  return (
    <nav className="navbar fixed-top navbar-light bg-white navbar-expand shadow px-3">
      {/* Logo */}
      <Link to="/home" className="navbar-brand d-flex align-items-center">
        <img src={FPTLogo} alt="FPT Logo" width="40" height="40" className="logo mr-2" />
        <span className="small text-dark font-weight-bold">FPT Event Hub</span>
      </Link>

      {/* Main nav */}
      <ul className="navbar-nav ml-4">
        <li className="nav-item">
          <Link className="nav-link active" to="/home">
            Home
          </Link>
        </li>
      </ul>

      {/* Spacer */}
      <div className="flex-grow-1"></div>

      {/* User menu */}
      <div className="dropdown">
        <button
          className="btn dropdown-toggle d-flex align-items-center"
          onClick={toggleDropdown}
          aria-haspopup="true"
          aria-expanded={showDropdown}
        >
          <img
            src="https://scontent.fsgn5-15.fna.fbcdn.net/v/t1.30497-1/453178253_471506465671661_2781666950760530985_n.png?stp=dst-png_s200x200&_nc_cat=1&ccb=1-7&_nc_sid=136b72&_nc_ohc=rZ8awwZU9EIQ7kNvwFam3iC&_nc_oc=AdmggVH36qtlzljxpZXSkBbRWnRUsyU30-bq94GR86o6WKbb7c1Ulb8LUldMLJ6NrgIInC4zpnoly4tpEXkFoz-T&_nc_zt=24&_nc_ht=scontent.fsgn5-15.fna&oh=00_AfMtO2B6bCoMuwEV2iXNQGGbOqs3PQYXNpttPXujsj8xhw&oe=6873E4BA"
            className="rounded-circle"
            alt="Avatar"
            width="35"
            height="35"
          />
        </button>

        {showDropdown && (
          <div className="dropdown-menu dropdown-menu-right show mt-2" style={{ minWidth: '180px' }}>
            <span className="dropdown-item-text text-muted small">User Menu</span>
            <div className="dropdown-divider"></div>

            <button className="dropdown-item" disabled>Profile</button>
            <button className="dropdown-item" disabled>History</button>
            <button className="dropdown-item" disabled>Calendar</button>

            <div className="dropdown-divider"></div>
            <button className="dropdown-item text-danger" onClick={handleLogout}>
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
