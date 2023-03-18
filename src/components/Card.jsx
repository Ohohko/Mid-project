import React from 'react'
import { Link } from 'react-router-dom';


const Card = ({item}) =>{
  return (
    <Link className='w-48 bg-base-100 shadow-xl mt-4 mx-2' to={`/product/${item.id}`}>
<div className='card-body mt-3'>
<div className='image'>
<img src={item.img} alt='' className='mainImg'/>
{/* <img src={item.img2} alt='' className='secondImg'/> */}
{/* <img src={item.img3} alt='' className='threeImg'/> */}

</div>
<h2 className='font-bold'>{item.title}</h2>
<div>

<img src={item.thumbnail} />
  <h5>{item.description}</h5>
  <h2 className='font-bold'>$ {item.price}</h2>
  <button className='btn btn-outline btn-warning mt-4'>Add to cart</button>
</div>
</div>

</Link>
  )
}

export default Card



