import React from "react";
import Logo from "../../../images/logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer  ">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <img className="logo" src={Logo} alt="" />
            <div className="copy">&copy; Red Onion Restaurent</div>
          </div>
          <div className="col-6 row">
            <div className="col-6">
              <p>About Us</p>
              <p>Read Our Blog</p>
              <p>Privacy Policy</p>
              <p>Terms of Use</p>
            </div>
            <div className="col-6">
              <p>Get Help</p>
              <p>Read FAQs</p>
              <p>Pricing</p>
              <p>Restaurent Near Me</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
