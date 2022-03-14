import React, { useContext } from "react";

import { useNavigate } from "react-router";
import { authContext } from "../../Context/authContext";
import "./Dialog.css";
function SignUp() {
  const navigate = useNavigate();

  const { login } = useContext(authContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    let email_name = document.querySelector("#email").value;
    let password_name = document.querySelector("#password").value;
    let requestBody = {
      email: email_name,
      password: password_name,
    };
    fetch("http://localhost:4000/users/register", {
      method: "POST",
      body: JSON.stringify(requestBody),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resData) => {
        if (resData.status !== 200 && resData.status !== 201) {
          throw new Error("Page Not Found");
        }
        return resData.json();
      })
      .then((res) => {
        if (res.token) {
          login(res.token, res.userId);
          localStorage.setItem("token", res.token);
          localStorage.setItem("userId", res.userId);
          navigate("/home");
        }
      })
      .catch((err) => {
        alert("User Already Exists...");
      });
  };
  return (
    <div className="Login_container">
      <form onSubmit={handleSubmit}>
        <div className="Email_div">
          <label htmlFor="first_name">First Name</label>
          <input type="text" required placeholder="First Name" />
        </div>
        <div className="Email_div">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" required placeholder="Email" />
        </div>
        <div className="Email_div">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            required
            placeholder="Password"
          />
        </div>

        <div className="Submit_btn">
          <button>SUBMIT</button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
