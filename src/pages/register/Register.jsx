import React from "react";
import "./Register.css";

const Register = () => {
  return (
    <div className="register-container">
      <div className="register-wrapper">
        <form action="">
          <h2>Create Your Account </h2>
          <div className="input-box">
            <input type="text" placeholder="Username"></input>
          </div>
          <div className="input-box">
            <input type="password" placeholder="Password"></input>
          </div>
          <div className="input-box">
            <input type="email" placeholder="E-Mail"></input>
          </div>
          <div className="input-box">
            <input type="tel" placeholder="Phone Number"></input>
          </div>
          <div className="input-box">
            <input type="text" placeholder="Country"></input>
          </div>
          <div className="register-agreement">
            <label>
              <input type="checkbox" />I agree to the<b> Terms</b> and{" "}
              <b>Privacy Policy</b>{" "}
            </label>
          </div>
          <button type="submit">Create Account</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
