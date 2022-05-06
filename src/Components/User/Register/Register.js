import React, { useRef } from "react";
import "./Register.css";
import Logo from "../../../images/logo2.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "../../OtherPages/Loading/Loading";
import { toast } from "react-toastify";

const Register = () => {
  // to navigate the user
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  // to create a user by email and password
  const [createUserWithEmailAndPassword, userOfEmail, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  // to update the name of a user

  const [updateProfile, updating, errorOfNaming] = useUpdateProfile(auth);
  // to get info of a user
  const nameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const confirmPassRef = useRef("");

  // to register
  const submitReg = async (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confPass = confirmPassRef.current.value;
    if (!name || !email || !password || !confPass) {
      toast("Please, fill the form first.");
    }
    if (password !== confPass) {
      toast("Password does not matched.");
    }
    if (name && email && password && confPass && password === confPass) {
      await createUserWithEmailAndPassword(email, password);
      await updateProfile({ displayName: name });
    }
  };
  if (loading || updating) {
    return <Loading></Loading>;
  }
  if (errorOfNaming || error) {
    toast("Try again please...");
  }
  if (userOfEmail) {
    navigate(from, { replace: true });
  }
  return (
    <div className="register-form">
      <div className="w-25 mx-auto">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <form onSubmit={submitReg}>
          <input
            type="text"
            ref={nameRef}
            placeholder="Name"
            className="w-100 mt-3"
            required
          />
          <input
            type="email"
            ref={emailRef}
            placeholder="Email"
            className="w-100 mt-3"
            required
          />
          <input
            type="password"
            ref={passwordRef}
            placeholder="Password"
            className="w-100 mt-3"
            required
          />
          <input
            type="password"
            ref={confirmPassRef}
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
