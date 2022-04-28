import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./EachItem.css";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
const EachItem = ({ item }) => {
  const { _id, name, description, img, icon } = item;
  return (
    <div className="item">
      <div className="image">
        <img className="w-100 header-image" src={img} alt="" />
      </div>
      <div className="header d-flex align-items-center my-4">
        <img src={icon} alt="" />
        <h4 className="ms-4 header-text">{name}</h4>
      </div>
      <div>{description}</div>
      <Link to="/">See More &nbsp;</Link>
      <FontAwesomeIcon>{faArrowRight}</FontAwesomeIcon>
    </div>
  );
};

export default EachItem;
