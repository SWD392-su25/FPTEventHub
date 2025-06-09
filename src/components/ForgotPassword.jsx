import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleReset = () => {
    // Thêm logic gửi mail reset ở đây
    alert(`Reset link sent to ${email}`);
    navigate("/");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Forgot Password</h2>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ padding: "8px", width: "300px", marginBottom: "10px" }}
      />
      <br />
      <button onClick={handleReset}>Send Reset Link</button>
    </div>
  );
};

export default ForgotPassword;
