import React from "react";
import "./EachFood.css";

const EachFood = ({ eachFood }) => {
  const { name, img, price, quote } = eachFood;
  return (
    <div className="each-food">
      <div className="image">
        <img src={img} alt="" />
      </div>
      <div className="info">
        <p className="name mt-2">{name}</p>
        <p>{quote}</p>
        <p>
          ${price}{" "}
          <button className="cart-button" title="Add to Cart">
            +
          </button>
        </p>
      </div>
    </div>
  );
};

export default EachFood;
