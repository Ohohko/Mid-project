import React from "react";
import { Auth } from "../components/Auth";
import Categories from "../components/Categories";
import Contact from "../components/Contact";
import FeaturedProducts from "../components/FeaturedProducts";
import Hero from "../components/Hero";
import List from "../components/List";
import Products from "./Products";

const Home = () => {
  return (
    <div data-theme="light">
      <Hero />
      <Auth />
      <FeaturedProducts type="featured" />
      <Categories />
      <FeaturedProducts type="trending" />
      <List />
      <Contact />
      <Products />
    </div>
  );
};

export default Home;
