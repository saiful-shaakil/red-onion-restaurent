import React, { useEffect, useState } from "react";
import EachLunch from "./EachLunch";

const Lunch = () => {
  const [breakfast, setBreakfast] = useState([]);
  useEffect(() => {
    fetch("lunch.json")
      .then((res) => res.json())
      .then((data) => setBreakfast(data));
  }, []);
  return (
    <div className="section-container">
      <div className="foods">
        {breakfast.map((each) => (
          <EachLunch key={each.id} eachFood={each}></EachLunch>
        ))}
      </div>
    </div>
  );
};

export default Lunch;
