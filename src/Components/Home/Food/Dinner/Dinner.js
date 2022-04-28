import React, { useEffect, useState } from "react";
import EachFood from "../EachFood";

const Dinner = () => {
  const [breakfast, setBreakfast] = useState([]);
  useEffect(() => {
    fetch("dinner.json")
      .then((res) => res.json())
      .then((data) => setBreakfast(data));
  }, []);
  return (
    <div className="section-container">
      <div className="foods">
        {breakfast.map((each) => (
          <EachFood key={each._id} eachFood={each}></EachFood>
        ))}
      </div>
    </div>
  );
};

export default Dinner;
