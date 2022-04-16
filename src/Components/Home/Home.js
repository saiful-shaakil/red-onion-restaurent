import React from "react";
import { Outlet } from "react-router-dom";
import Banner from "./Banner/Banner";
import Food from "./Food/Food";
import Navbar from "./Navbar/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <Food></Food>
      <Outlet></Outlet>
    </div>
  );
};

export default Home;
