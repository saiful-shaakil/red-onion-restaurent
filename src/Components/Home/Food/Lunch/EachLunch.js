import React from "react";

const EachLunch = ({ eachFood }) => {
  const { name, img, price, quote } = eachFood;
  return (
    <div className="each-food">
      <div className="image">
        <img src={img} alt="" />
      </div>
      <div className="info">
        <p className="name">{name}</p>
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

export default EachLunch;
