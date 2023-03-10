import React from 'react'
import { Link } from 'react-router-dom';


const Card = ({item}) =>{
  return (
    <Link className='card w-48 bg-base-100 shadow-xl mt-4 mx-2' to={'/product/${item.id}'}>
<div className='card-body'>
<div className='image'>
<img src={item.img} alt='' className='mainImg'/>
<img src={item.img2} alt='' className='secondImg'/>
</div>
<h2 className='badge badge-secondary'>{item.title}</h2>
<div className='prices'>
  <h3>${item.oldPrice}</h3>
  <h3>${item.price}</h3>
</div>
</div>

</Link>
  )
}

export default Card



