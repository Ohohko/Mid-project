import React from 'react'
import pic from "../img/6.jpeg";

const Card = () =>{
  return (
<div className="card w-48 bg-base-100 shadow-xl ml-4 mt-12">
  <figure><img src= {pic}/></figure>
  <div className="card-body">
    <h2 className="card-title">
      Shoes!
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Fashion</div> 
      <div className="badge badge-outline">Products</div>
    </div>
  </div>
</div>
  )
}

export default Card