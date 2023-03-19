import React from "react";
import Login from '../components/Login'
import FeaturedProducts from "../components/FeaturedProducts";
import Hero from "../components/Hero";
import Hoverthebox from "../components/Hover the box/Hoverthebox";

const Home = () => {
  return (
    <div data-theme="dark">
      <Hero />
      <Login/>
      <FeaturedProducts />
      <Hoverthebox/>      
    
     
    </div>
  );
};

export default Home;
