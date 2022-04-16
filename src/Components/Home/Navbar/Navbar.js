import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../images/logo2.png";
import "./Navbar.css";
import "../public.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    //   Navbar section
    <div className="section-container navbar">
      <div className="logo-sec">
        <Link to="/">
          <img className="logo" src={logo} alt="" />
        </Link>
      </div>
      <div className="route-sec">
        <Link to="/cart">
          <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
        </Link>
        <Link to="/login">Login</Link>
        <Link className="special-button" to="/register">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
