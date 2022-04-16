import React, { useEffect, useState } from "react";
import EachBreakfast from "./EachBreakfast/EachBreakfast";
import "../Food.css";
import "../../public.css";

const Breakfast = () => {
  const [breakfast, setBreakfast] = useState([]);
  useEffect(() => {
    fetch("breakfast.json")
      .then((res) => res.json())
      .then((data) => setBreakfast(data));
  }, []);
  return (
    <div className="section-container">
      <div className="foods">
        {breakfast.map((each) => (
          <EachBreakfast key={each.id} eachFood={each}></EachBreakfast>
        ))}
      </div>
    </div>
  );
};

export default Breakfast;
