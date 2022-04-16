import React from "react";
import "./Banner.css";
import "../public.css";

const Banner = () => {
  return (
    <div className="banner">
      <h1>Best food waiting for your belly</h1>

      {/* search section */}
      <div className="search-div">
        <input
          type="text"
          name=""
          placeholder="Search Food Items"
          id="search"
        />{" "}
        <input className="special-button" type="button" value="Search" />
      </div>
    </div>
  );
};

export default Banner;
