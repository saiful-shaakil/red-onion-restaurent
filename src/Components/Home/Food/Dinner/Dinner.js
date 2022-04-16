import React, { useEffect, useState } from "react";
import EachDinner from "./EachDinner";

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
          <EachDinner key={each.id} eachFood={each}></EachDinner>
        ))}
      </div>
    </div>
  );
};

export default Dinner;
