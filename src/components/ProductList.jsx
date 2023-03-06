import React, { useState, useEffect } from 'react';
import axios from 'axios';

const url = 'https://woocommerce-955837-3332579.cloudwaysapps.com/wp-json/wc/v3/products';
const consumerKey = 'ck_3a68611a79bba9b558ba55d203f3740538c33c05';
const consumerSecret = 'cs_59912f1b38ec272e63ebf2f7224b6eab08c93b60';

axios.get(url, {
  auth: {
    username: consumerKey,
    password: consumerSecret,
  }
})
  .then(response => console.log(response.data))
  .catch(error => console.error(error));


export default ProductList;

