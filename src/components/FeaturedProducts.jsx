import React from "react";
import Card from "./Card";

const FeaturedProducts = ({ type }) => {
  const data = [
    {
      id: 1,
      img: "https://brouwhoeve.es/wp-content/uploads/2022/02/istockphoto-1128262881-612x612-1.jpg",
      img2: "https://d3m9l0v76dty0.cloudfront.net/system/photos/1776707/extra_large/13e03de5be8f262623b7e8db1292f0df.jpg",
      title: "Gift demo 1",
      isNew: true,
      oldPrice: 100,
      price: 85,
    },
    {
      id: 2,
      img: "https://brouwhoeve.es/wp-content/uploads/2022/02/istockphoto-1128262881-612x612-1.jpg",
      img2: "https://d3m9l0v76dty0.cloudfront.net/system/photos/1776707/extra_large/13e03de5be8f262623b7e8db1292f0df.jpg",
      title: "Gift demo 2",
      isNew: true,
      oldPrice: 80,
      price: 55,
    },
    {
      id: 3,
      img: "https://brouwhoeve.es/wp-content/uploads/2022/02/istockphoto-1128262881-612x612-1.jpg",
      img2: "https://d3m9l0v76dty0.cloudfront.net/system/photos/1776707/extra_large/13e03de5be8f262623b7e8db1292f0df.jpg",
      title: "Gift demo 3",
      oldPrice: 40,
      price: 20,
    },
    {
      id: 4,
      img: "https://d3m9l0v76dty0.cloudfront.net/system/photos/1776707/extra_large/13e03de5be8f262623b7e8db1292f0df.jpg",
      title: "Gift demo4",
      oldPrice: 10,
      price: 5,
    },
    {
      id: 5,
      img: "https://d3m9l0v76dty0.cloudfront.net/system/photos/1776707/extra_large/13e03de5be8f262623b7e8db1292f0df.jpg",
      title: "Gift demo4",
      oldPrice: 10,
      price: 5,
    },
    {
      id: 6,
      img: "https://d3m9l0v76dty0.cloudfront.net/system/photos/1776707/extra_large/13e03de5be8f262623b7e8db1292f0df.jpg",
      title: "Gift demo4",
      oldPrice: 10,
      price: 5,
    },
    {
      id: 7,
      img: "https://d3m9l0v76dty0.cloudfront.net/system/photos/1776707/extra_large/13e03de5be8f262623b7e8db1292f0df.jpg",
      title: "Gift demo4",
      oldPrice: 10,
      price: 5,
    },
    {
      id: 8,
      img: "https://d3m9l0v76dty0.cloudfront.net/system/photos/1776707/extra_large/13e03de5be8f262623b7e8db1292f0df.jpg",
      title: "Gift demo4",
      oldPrice: 10,
      price: 5,
    },
    {
      id: 9,
      img: "https://d3m9l0v76dty0.cloudfront.net/system/photos/1776707/extra_large/13e03de5be8f262623b7e8db1292f0df.jpg",
      title: "Gifts",
      oldPrice: 100,
      price: 54,
    },
    {
      id: 10,
      img: "https://d3m9l0v76dty0.cloudfront.net/system/photos/1776707/extra_large/13e03de5be8f262623b7e8db1292f0df.jpg",
      title: "Gift demo4",
      oldPrice: 10,
      price: 5,
    },
    {
      id: 11,
      img: "https://d3m9l0v76dty0.cloudfront.net/system/photos/1776707/extra_large/13e03de5be8f262623b7e8db1292f0df.jpg",
      title: "Gift demo4",
      oldPrice: 10,
      price: 5,
    },
  ];

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
      {data.map(item=>(
        <Card item={item} key={item.id}/>
      ))}

      </div>
    </div>
  );
};

export default FeaturedProducts;
