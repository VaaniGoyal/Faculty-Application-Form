import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./App.css";

function Login_Page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleCreateButtonClick = async () => {
    navigate("/Create_Account");
  }
  const handleButtonClick = async () => {
    try {
      const response = await axios.post("http://localhost:3000/api/users/login", {
        email: email,
        password: password,
      });
      //Store the reg_id in local storage
      localStorage.setItem("reg_id", response.data.reg_id);
      // variable=localStorage.getItem("reg_id");
      // Handle successful login here
      alert("Logged in Successfully");
    //   navigate("/User_Page"); // Redirect to user page upon successful login
    } catch (error) {
      setError("Sign-in failed. Please try again.");
    }
  };

  return (
    <div className="Login_Page">
      <br />
      <br />
      <button
        onClick={handleCreateButtonClick}
        type="submit"
        className="universal-button"
      >
        Create your account
      </button>
      <br />
      <br />
      <span>Email Address</span>
      <br />
      <br />
      <input
        type="text"
        className="input-text"
        placeholder="Your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <br />
      <span>Password</span>
      <br />
      <br />
      <input
        type="password"
        className="input-text"
        placeholder="Your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <br />
      <button
        onClick={handleButtonClick}
        type="submit"
        className="universal-button"
      >
        Sign In
      </button>
      <br />
      <br />
      {error && <div className="error">{error}</div>}
    </div>
  );
}

export default Login_Page;
