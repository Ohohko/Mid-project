import React from 'react'
import { Link } from 'react-router-dom'

const Categories = () => {
  return (
    <div class="grid grid-cols-2 gap-2 p-2">
    <div class="shadow-lg text-center p-12 rounded-lg row-span-2 bg-gradient-to-r from-amber-100 to-slate-700"><button className="btn btn-outline btn-warning mt-20 ml-1"><Link to='/products/jewelry'>Jewelry</Link></button></div>
    <div class="shadow-lg text-lg font-bold text-center p-16 rounded-lg bg-gradient-to-r from-slate-700 to bg-amber-100"><button className="btn btn-outline btn-warning"><Link to='/products/baby-kids'>Baby & Kids</Link></button></div>
    <div class="shadow-lg text-lg font-bold text-center p-12 rounded-lg row-span-2 bg-gradient-to-r from-slate-700 to bg-amber-100"></div>
    <div class="shadow-lg text-lg font-bold text-center p-14 rounded-lg bg-gradient-to-r from-amber-100 to bg-slate-700"></div>
    <div class="shadow-lg text-lg font-bold text-center p-16 rounded-lg col-span-3 bg-gradient-to-r from-amber-100 to bg-slate-700"></div>
</div>  



  )
}

export default Categories