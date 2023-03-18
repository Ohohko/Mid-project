import React from "react";

import Categories from "../components/Categories";
import Contact from "../components/Contact";
import FeaturedProducts from "../components/FeaturedProducts";
import Hero from "../components/Hero";
import List from "../components/List";
import Products from "./Products";

const Home = () => {
  return (
    <div data-theme="light">
      {/* <Hero /> */}
      <FeaturedProducts />
      {/* <List />
      <Contact />
      <Products /> */}
    </div>
  );
};

export default Home;
