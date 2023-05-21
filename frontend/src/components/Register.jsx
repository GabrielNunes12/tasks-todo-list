//import useLocation
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    if (newPassword === password) {
      const newUser = {
        username: username,
        password: password,
      };
      axios.post("http://localhost:8090/api/v1/users", newUser);
      localStorage.setItem("@jwt", Date.now());
      localStorage.setItem("isExpiredToken", false);
    } else {
      alert("Passwords don't match");
    }
    navigate("/login");
  };
  return (
    <div>
      <h1>Register</h1>
      <form>
        <input
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <button onClick={(e) => handleSubmit(e)}>Register</button>
      </form>
    </div>
  );
}
