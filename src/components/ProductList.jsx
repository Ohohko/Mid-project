import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ProductList() {
  const [products, setProducts] = useState([]);


  useEffect(() => {
    const fetchProducts = async () => {
    const url = 'https://ohadk.xyz/wp-json/wc/v3/products';
    const consumerKey = 'ck_3a68611a79bba9b558ba55d203f3740538c33c05';
    const consumerSecret = 'cs_59912f1b38ec272e63ebf2f7224b6eab08c93b60';
    try {
      const response = await axios.get(url, {
        auth: {
          username: consumerKey,
          password: consumerSecret,
        },
      });
      setProducts(response.data);
      console.log(response)
    } catch (error) {
      console.error(error);
    }
  };
  fetchProducts();
}, []);


return (
  <div className="product-list">
    {products.map(product => (
      <div className="product-card" key={product.id}>
        <img src={product.images[0].src} alt={product.name} />
        <h2>{product.name}</h2>
        <p>{product.price+'.00$'}</p>
        <button className='btn btn-xs sm:btn-md lg:btn-lg'>Add cart</button>
      </div>
    ))}
  </div>
);
}


export default ProductList;

