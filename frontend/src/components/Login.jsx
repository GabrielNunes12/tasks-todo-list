import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const [user, setUser] = useState("");
  const [login, setLogin] = useState("");
  const navigate = useNavigate();
  const handleRegister = () => {
    navigate("/register");
  };
  const handleLogin = () => {
    let timeElapsed = localStorage.getItem("@jwt");
    let hoursElapsed = timeElapsed / (1000 * 60 * 60);
    if (localStorage.getItem("isExpiredToken") && hoursElapsed > 24) {
      localStorage.setItem("isExpiredToken", true);
      localStorage.removeItem("@jwt");
      hoursElapsed = 0;
      alert("Expired Token, please log in again");
    } else {
      localStorage.setItem("@jwt", Date.now());
      localStorage.setItem("isExpiredToken", false);
      navigate("/", {
        state: { isExpiredToken: localStorage.getItem("isExpiredToken") },
      });
      const userLoggIn = {
        username: user,
        password: login,
      };
      axios.get("http://localhost:8090/api/v1/users", userLoggIn);
    }
  };
  return (
    <div>
      <h1>Login</h1>
      <form>
        <input
          type="text"
          placeholder="Username"
          onChange={(event) => setUser(event.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(event) => setLogin(event.target.value)}
        />
        <button type="submit" onClick={handleLogin}>
          Login
        </button>
        <button onClick={handleRegister}>Register</button>
      </form>
    </div>
  );
}
