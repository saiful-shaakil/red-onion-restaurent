import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Banner from "./Banner/Banner";
import ChooseUsSection from "./ChooseUsSection/ChooseUsSection";
import Breakfast from "./Food/Breakfast/Breakfast";
import Food from "./Food/Food";
import Navbar from "./Navbar/Navbar";

const Home = () => {
  const [Foods, setFoods] = useState([]);
  if (!Outlet) {
    setFoods(<Breakfast></Breakfast>);
  }

  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <Food></Food>
      <Outlet></Outlet>
      <ChooseUsSection></ChooseUsSection>
    </div>
  );
};

export default Home;
