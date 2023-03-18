import React, { useState, useEffect } from "react";
import Card from "./Card";
import axios from "axios";
import process from 'process';


const FeaturedProducts = ({ type }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          process.env.REACT_APP_API_URL + "/products",
          {
            headers: {
              Authorization: "bearer" + process.env.REACT_APP_API_TOKEN,
            },
          }
        );
        setData(res.data.data)
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="featuredProducts mx-3.5">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Giving gifts to each other when there is something to celebrate or
          something we should also just do casually! Spoiling someone once in a
          while for no reason can do wonders.
        </p>
      </div>
      <div className="bottom flex flex-wrap justify-center">
        {data.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
