import React from 'react'
import { Link } from 'react-router-dom'

const Categories = () => {
  return (
    <div class="grid grid-cols-2 gap-2 p-2">
    <div class="shadow-lg  bg-yellow-50 text-yellow-50 text-lg font-bold text-center p-12 rounded-lg row-span-2"><button className="btn btn-outline btn-warning"><Link to='/products/1'>Jewelry</Link></button><img src='https://source.unsplash.com/random/500X500'/></div>
    <div class="shadow-lg  bg-yellow-50 text-yellow-50 text-lg font-bold text-center p-16 rounded-lg"><button className="btn btn-outline btn-warning">Baby & Kids</button></div>
    <div class="shadow-lg  bg-yellow-50 text-yellow-50 text-lg font-bold text-center p-12 rounded-lg row-span-2"></div>
    <div class="shadow-lg bg-yellow-50 text-yellow-50 text-lg font-bold text-center p-14 rounded-lg">4</div>
    <div class="shadow-lg  bg-yellow-50 text-yellow-50 text-lg font-bold text-center p-16 rounded-lg col-span-3">5</div>
</div>  



  )
}

export default Categories