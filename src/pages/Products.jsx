import {React, useState} from 'react'
import { useParams } from 'react-router-dom'
import List from '../components/List'



const  Products = () => {

    const catId =parseInt(useParams().id)
    const [maxPrice,setMaxPrice] = useState(1000)
    const [sort,setSort] = useState(null)

  return (
    <div className='Products'>
    <div className='left flex-1 sticky top-10'>
        <div className='filterItem mx-3 mt-5'>
            <h2>Products Categories</h2>
            <div className='inputItem mx-2 mt-2'>
                <input type='checkbox' id='1' value={1} />
                <label htmlFor='1'>Gifts</label>
            </div>
            <div className='inputItem mx-2'>
                <input type='checkbox' id='2' value={2} />
                <label htmlFor='2'>Kids & Baby</label>
            </div>
            <div className='inputItem mx-2'>
                <input type='checkbox' id='3' value={3} />
                <label htmlFor='3'>For Her</label>
            </div>
            <div className='inputItem mx-2'>
                <input type='checkbox' id='4' value={4} />
                <label htmlFor='4'>For Him</label>
            </div>
        
        </div>
        <div className='filterItem mx-3 mt-7'>
            <h2>Filter by price</h2>
            <div className='inputItem mx-2'>
                <span>0</span>
                <input type='range' min={0} max={1000} onChange={(e)=>setMaxPrice(e.target.value)} />
                <span>{maxPrice}</span>
            </div>
        </div>
        <div className='filterItem mx-2 mt-6'>
            <h2>Sort by</h2>
            <div className='inputItem mx-3 mt-3'>
                <input type='radio' id='asc' value='asc' name='price' onChange={e=>setSort('asc')}/>
                <label htmlFor='asc'>Price (Lowest first)</label>
            </div>
            <div className='inputItem mx-3 mt-0'>
                <input type='radio' id='desc' value='desc' name='price' onChange={e=>setSort('desc')}/>
                <label htmlFor='desc'>Price (Highest first)</label>
            </div>

        </div>

    </div>
    <div className='right flex-3'>
    <img className='catImg max-h-40 w-full object-cover' src='https://palms.org.au/wp-content/uploads/2018/12/Gift-Shop-Banner.png'
    alt='gift banner'
    />
    <List catId={catId} maxPrice={maxPrice} sort={sort} />
   
    </div>



    </div>
   
  )
}

export default Products