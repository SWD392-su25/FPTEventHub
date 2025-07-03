// src/components/Footer.jsx

import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer bg-light text-center text-muted py-3 mt-auto shadow-sm">
      <div className="container">
        <small>
          © {new Date().getFullYear()} FPT Event Hub. All rights reserved.
        </small>
        <br />
        <small>
          Nếu gặp bất cứ lỗi gì, hãy phản ánh qua email:{" "}
          <a href="mailto:support@example.com">support@example.com</a> để nhận
          được sự hỗ trợ sớm nhất.
        </small>
      </div>
    </footer>
  );
};

export default Footer;
