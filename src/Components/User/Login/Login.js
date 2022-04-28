import React from "react";
import Logo from "../../../images/logo2.png";
import { Link } from "react-router-dom";
import "./Login.css";
import google from "../../../images/icons/google.png";
import facebook from "../../../images/icons/facebook.png";
import twitter from "../../../images/icons/twitter.png";
const Login = () => {
  return (
    <div className="register-form">
      <div className="w-25 mx-auto">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <form>
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
          <button className="mt-2 forget-pass">Forget Password?</button>
          <input type="submit" className="my-3 w-100" value="Sign In" />
        </form>
        <div className="link">
          <Link to="/register">New to Red Onion?</Link>
        </div>
        <br />
        <div className="d-flex align-items-center justify-content-center mb-3">
          <div className="line w-50"></div>
          <div className="mx-1 or">Or</div>
          <div className="line w-50"></div>
        </div>
        <div className="social-login">
          <button className="login-button w-100 mb-3">
            <img src={google} alt="" /> &nbsp; &nbsp; Sign In With Google
          </button>
          <button className="login-button w-100 mb-3">
            <img src={facebook} alt="" /> &nbsp; &nbsp; Sign In With Facebook
          </button>
          <button className="login-button w-100 mb-3">
            <img src={twitter} alt="" /> &nbsp; &nbsp; Sign In With Twitter
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
