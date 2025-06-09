// src/components/Login.jsx

import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  IconButton,
  TextField,
  Typography,
  Alert,
  Paper,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { isValidFptEmail, login } from "../utils/authUtils";

// Logo
//import logo from "event_management/public/logo192.png"

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");
  //const [user, setUser] = useState(null);

  const handleLogin = () => {
    setError("");

    if (!isValidFptEmail(email)) {
      setError("Chỉ chấp nhận email đuôi @fpt.edu.vn");
      return;
    }

    const foundUser = login(email, password);
    if (foundUser) {
      //setUser(foundUser);
      alert(`Đăng nhập thành công với vai trò: ${foundUser.role}`);
    } else {
      setError("Sai email hoặc mật khẩu");
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ p: 4, mt: 10, borderRadius: 3 }}>
        {/* Logo */}
        <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/FPT_logo_2010.svg/640px-FPT_logo_2010.svg.png" // thay bằng logo thật nếu có
            alt="FPT Logo"
            style={{ height: 60 }}
          />
        </Box>

        {/* Tiêu đề */}
        <Typography variant="h4" align="center" gutterBottom>
          Welcome to FEH
        </Typography>
        <Typography variant="subtitle1" align="center" color="text.secondary">
          Please enter your details to login
        </Typography>

        {/* Lỗi đăng nhập */}
        {error && (
          <Alert severity="error" sx={{ my: 2 }}>
            {error}
          </Alert>
        )}

        {/* Email */}
        <TextField
          label="Email@fpt.edu.vn"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Password */}
        <Box sx={{ position: "relative" }}>
          <TextField
            label="Password"
            fullWidth
            type={showPassword ? "text" : "password"}
            value={password}
            margin="normal"
            onChange={(e) => setPassword(e.target.value)}
          />
          <IconButton
            onClick={() => setShowPassword(!showPassword)}
            sx={{ position: "absolute", top: 32, right: 10 }}
          >
            {showPassword ? <Visibility /> : <VisibilityOff />}
          </IconButton>
        </Box>

        {/* Remember & Forgot */}
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", my: 2 }}>
          <FormControlLabel
            control={<Checkbox checked={rememberMe} onChange={() => setRememberMe(!rememberMe)} />}
            label="Remember me"
          />
          <Typography variant="body2" color="primary" sx={{ cursor: "pointer" }}>
            Forgot password? <Link to="/forgot-password">Click here</Link>
          </Typography>
        </Box>

        {/* Button */}
        <Button variant="contained" fullWidth onClick={handleLogin}>
          Login
        </Button>
      </Paper>
    </Container>
  );
};

export default Login;