// src/components/HomePage.jsx
import React, { useEffect, useState } from "react";

const HomePage = () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("currentUser");
    if (storedUser) {
      setCurrentUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <div style={{ paddingTop: "80px" }}>
      <h1>Welcome to FPT Event Hub</h1>
      {currentUser ? (
        <div>
          <p>Email: {currentUser.email}</p>
          <p>Role: {currentUser.role}</p>
        </div>
      ) : (
        <p>Loading user info...</p>
      )}
    </div>
  );
};

export default HomePage;
