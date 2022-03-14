import React, { useState } from "react";
// import cook from "../Images/cook2.jpg";
import "./Dialog.css";
import Login from "./Login";
import SignUp from "./SignUp";
function Dialog() {
  const [isOpen, setopen] = useState(false);
  const handleChange = () => {
    setopen((prev) => !prev);
  };
  return (
    <div className="container">
      {/* Dialog */}
      <div className="Dialog_header">
        <h2> File Storage </h2>
      </div>
      <div className="Dialog_Body">
        <div
          className="Img_container"
          style={{ width: "100%", height: "180px" }}
        ></div>
        <div className="Dialog_Main">
          {!isOpen && <Login />}
          {isOpen && <SignUp />}
        </div>
        <div className="Dialog_footer">
          {isOpen ? "Have an Account Login? " : "Don't have an account?"}
          <button
            onClick={handleChange}
            style={{
              width: "120px",
              height: "35px",
              backgroundColor: "white",
              color: "#701a75",
              fontSize: "em",
              borderRadius: "0.3em",
              margin: "2px",
            }}
          >
            {isOpen ? "Login" : "Sign Up"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dialog;
