import React from "react";
import CustomLink from "./CustomLink/CustomLink";
import "../public.css";
import "./Food.css";

const Food = () => {
  return (
    <div className="section-container food-navbar">
      <CustomLink to="/breakfast">Breakfast</CustomLink>
      <CustomLink to="/lunch">Lunch</CustomLink>
      <CustomLink to="/dinner">Dinner</CustomLink>
    </div>
  );
};

export default Food;
