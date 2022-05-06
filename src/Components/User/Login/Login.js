import React, { useRef } from "react";
import Logo from "../../../images/logo2.png";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import google from "../../../images/icons/google.png";
import facebook from "../../../images/icons/facebook.png";
import twitter from "../../../images/icons/twitter.png";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "../../OtherPages/Loading/Loading";
import { toast } from "react-toastify";
const Login = () => {
  //to navigate the user
  const navigate = useNavigate();
  //to sign in by user email and password
  const [
    signInWithEmailAndPassword,
    userOfEmail,
    loadingOfEmail,
    errorOfEmail,
  ] = useSignInWithEmailAndPassword(auth);
  //to sign in by google
  const [signInWithGoogle, userOfGoogle, loadingOfGoogle, errorOfGoogle] =
    useSignInWithGoogle(auth);
  //to get the user email and password
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const signIn = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password);
  };
  const signInByGoog = () => {
    signInWithGoogle();
  };
  if (loadingOfEmail || loadingOfGoogle) {
    return <Loading></Loading>;
  }
  if (errorOfEmail || errorOfGoogle) {
    toast("Try again please...");
  }
  if (userOfEmail || userOfGoogle) {
    navigate("/");
  }
  return (
    <div className="register-form">
      <div className="w-25 mx-auto">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <form onSubmit={signIn}>
          <input
            type="email"
            ref={emailRef}
            placeholder="Email"
            className="w-100 mt-3"
            required
          />
          <input
            type="text"
            ref={passwordRef}
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
          <button onClick={signInByGoog} className="login-button w-100 mb-3">
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
