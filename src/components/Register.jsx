// src/components/Register.jsx
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import styles from "../styles/AuthForm.module.css";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  IconButton,
  Alert,
  Button,
} from "@mui/material";
import FPTLogo from "../assets/FPTLogo.png";
import FPTCampus from "../assets/FPTCampus.png";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleRegister = () => {
    setError("");
    if (!name || !email || !password || !confirmPassword) {
      setError("Vui lòng điền đầy đủ thông tin.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Mật khẩu không khớp.");
      return;
    }
    // Giả lập đăng ký thành công và điều hướng về login
    navigate("/login");
  };

  return (
    <div className={styles.container}>
      <div className={styles.cardWrapper}>
        <div className={styles.leftColumn}>
          <img src={FPTCampus} alt="FPT Campus" className={styles.image} />
        </div>

        <div className={styles.rightColumn}>
          <div className={styles.formCard}>
            <img src={FPTLogo} alt="FPT Logo" className={styles.logo} />
            <h1 className={styles.title}>Create an Account</h1>
            <p className={styles.subtitle}>Fill in the form to register</p>
            
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={styles.input}
            />

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.input}
            />

            <div className={styles.passwordContainer}>
            <input
              className={styles.passwordInput} // Thêm riêng để xử lý input trong container
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <IconButton
              onClick={() => setShowPassword(!showPassword)}
              className={styles.eyeIcon}
            >
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </div>

          <div className={styles.passwordContainer}>
            <input
              className={styles.passwordInput}
              type={showPassword ? "text" : "password"}
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
            {error && <Alert severity="error">{error}</Alert>}

            <Button variant="contained" fullWidth onClick={handleRegister}>
              Register
            </Button>

            <div className={styles.registerLink}>
              <p>
                Already have an account? <Link to="/login">Login</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;