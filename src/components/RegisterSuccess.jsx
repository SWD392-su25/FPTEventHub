import React, { useEffect } from "react";
import { Box, Typography, Button } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

export default function RegisterSuccess() {
  const navigate = useNavigate();
  const location = useLocation();

  const { name, email, eventName } = location.state || {};

  useEffect(() => {
    if (!name || !email || !eventName) {
      navigate("/home");
    }

    // TODO: Gửi mail ở đây (gửi request đến backend hoặc dùng EmailJS)
    // Example pseudo-code:
    // sendConfirmationEmail({ name, email, eventName });
  }, [name, email, eventName, navigate]);

  return (
    <Box textAlign="center" mt={5}>
      <Typography variant="h5" color="primary" mb={2}>
        Đăng ký thành công!
      </Typography>
      <Typography variant="subtitle1" mb={3}>
        Cảm ơn <b>{name}</b> đã đăng ký tham gia sự kiện: <br />
        <b>{eventName}</b>
      </Typography>
      <Typography variant="body2" color="text.secondary" mb={3}>
        Một email xác nhận sẽ được gửi đến địa chỉ <b>{email}</b>.
      </Typography>
      <Button variant="contained" onClick={() => navigate("/home")}>
        Quay về trang chủ
      </Button>
    </Box>
  );
}
