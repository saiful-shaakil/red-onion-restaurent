import React, { useEffect, useState } from "react";
import "../public.css";
import EachItem from "./EachItem/EachItem";
const ChooseUsSection = () => {
  const [chooseItems, setChooseItems] = useState([]);
  useEffect(() => {
    fetch("choose.json")
      .then((res) => res.json())
      .then((data) => setChooseItems(data));
  }, []);
  return (
    <div className="section-container">
      <h1 className="mt-5">Why Choose Us?</h1>
      <p className="mt-2">
        We work with some of the most advanced processing facilities in the
        world which allow high quality product at very competitive prices.
      </p>
      <div className="all-items d-flex">
        {chooseItems.map((item) => (
          <EachItem key={item._id} item={item}></EachItem>
        ))}
      </div>
    </div>
  );
};

export default ChooseUsSection;
