//Create_Acc.js
import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./App.css";

function Create_Acc() {
  const [inputData, setInputData] = useState({
    f_name: "",
    l_name: "",
    email: "",
    category: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const createUserResponse = await axios.post(
        "http://localhost:3000/api/users/createUser",
        inputData
      );

      if (createUserResponse.status === 201) {
        alert("User Created Successfully!");
        navigate("/");
      } else {
        console.error("Failed to create user:", createUserResponse.statusText);
      }
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };
  return (
    <div className="Create_Acc">
      <br />
      <p>
        {" "}
        <span >Create your Account</span>
      </p>
      <br />
      <br />
      <span  style={{fontWeight: 'bold', fontSize: '1.5rem', marginLeft: '24rem'}}>
        CREATE YOUR ACCOUNT!
      </span>
      <br />
      <br />
      <br></br>
      <div className="input-container">
        <form onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="f_name"
              style={{
                fontSize: "1.2rem",
                fontFamily: "Overpass, Arial, sans-serif",
                color: "#444b59",
                marginRight: "-14rem",
                marginLeft: "18rem",
              }}
            >
              First Name
            </label>
            <input
              type="text"
              name="f_name"
              placeholder="your first name"
              onChange={(e) =>
                setInputData({ ...inputData, f_name: e.target.value })
              }
            ></input>
            <br />
            <br />
          </div>
          <div>
            <label
              htmlFor="l_name"
              style={{
                fontSize: "1.2rem",
                fontFamily: "Overpass, Arial, sans-serif",
                color: "#444b59",
                marginRight: "-15.25rem",
                marginLeft: "18rem",
              }}
            >
              Last Name
            </label>
            <input
              type="text"
              name="l_name"
              placeholder="your last name"
              onChange={(e) =>
                setInputData({ ...inputData, l_name: e.target.value })
              }
            ></input>
            <br />
            <br />
          </div>
          <div>
            <label
              htmlFor="email"
              style={{
                fontSize: "1.2rem",
                fontFamily: "Overpass, Arial, sans-serif",
                color: "#444b59",
                marginRight: "-17rem",
                marginLeft: "18rem",
              }}
            >
              Your Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="your email id"
              onChange={(e) =>
                setInputData({ ...inputData, email: e.target.value })
              }
            ></input>
            <br />
            <br />
          </div>
          <div>
            <label
              htmlFor="category"
              style={{
                fontSize: "1.2rem",
                fontFamily: "Overpass, Arial, sans-serif",
                color: "#444b59",
                marginRight: "-14.25rem",
                marginLeft: "18rem",
              }}
            >
              Category
            </label>
            <input
              type="text"
              name="category"
              placeholder=" "
              onChange={(e) =>
                setInputData({ ...inputData, category: e.target.value })
              }
            ></input>
            <br />
            <br />
          </div>
          <div>
            <label
              htmlFor="password"
              style={{
                fontSize: "1.2rem",
                fontFamily: "Overpass, Arial, sans-serif",
                color: "#444b59",
                marginRight: "-16rem",
                marginLeft: "18rem",
              }}
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="your password"
              onChange={(e) =>
                setInputData({ ...inputData, password: e.target.value })
              }
            ></input>
            <br />
            <br />
          </div>
          <button
            id="sign-in"
            className="universal-button"
            type="submit"
            style={{ marginLeft: "27rem", marginRight: "5rem" }}
          >
            Sign Up
          </button>
          <br />
          <br />
        </form>
      </div>
    </div>
  );
}

export default Create_Acc;
