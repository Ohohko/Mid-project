import React from "react";

import Categories from "../components/Categories";
import Contact from "../components/Contact";
import FeaturedProducts from "../components/FeaturedProducts";
import Hero from "../components/Hero";
import List from "../components/List";
import Products from "./Products";
import Hoverthebox from "../components/Hover the box/Hoverthebox";

const Home = () => {
  return (
    <div data-theme="dark">
      <Hero />
      <FeaturedProducts />
      <Hoverthebox/>

     
      <Contact />
     
    </div>
  );
};

export default Home;
