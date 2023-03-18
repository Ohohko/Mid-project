import React, { useState, useEffect } from "react";
import Card from "./Card";
import axios from "axios";



const FeaturedProducts = ({ type }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('https://products-53ae6-default-rtdb.europe-west1.firebasedatabase.app' + "/products.json",);
        setData(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="featuredProducts mx-3.5">
      <div className="top">
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
