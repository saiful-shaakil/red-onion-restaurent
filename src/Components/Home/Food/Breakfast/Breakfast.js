import React, { useEffect, useState } from "react";
import "../Food.css";
import "../../public.css";
import EachFood from "../EachFood";

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
          <EachFood key={each._id} eachFood={each}></EachFood>
        ))}
      </div>
    </div>
  );
};

export default Breakfast;
