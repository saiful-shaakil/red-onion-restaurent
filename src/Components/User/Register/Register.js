import React from "react";
import "./Register.css";
import Logo from "../../../images/logo2.png";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="register-form">
      <div className="w-25 mx-auto">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <form>
          <input
            type="text"
            placeholder="Name"
            className="w-100 mt-3"
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="w-100 mt-3"
            required
          />
          <input
            type="text"
            placeholder="Password"
            className="w-100 mt-3"
            required
          />
          <input
            type="text"
            placeholder="Confirm Password"
            className="w-100 mt-3"
            required
          />
          <input type="submit" className="my-3 w-100" value="Sign Up" />
        </form>
        <div className="link">
          <Link to="/login">Already Have an account?</Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
