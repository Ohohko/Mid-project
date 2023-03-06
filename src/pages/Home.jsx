import React from 'react'
import ProductList from '../components/ProductList'
import { TypeAnimation } from 'react-type-animation'

function Home() {
  return (
    <html data-theme="dark">
  <div data-theme="light">
  <div className="hero min-h-screen" style={{ backgroundImage: `url("https://woocommerce-955837-3332579.cloudwaysapps.com/wp-content/uploads/2023/03/gift2.jpeg")` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Welcome to Gift Shop</h1>
      <TypeAnimation
      sequence={[
        'Best Gifts for your lovers', 
        2000,
        '',
        500,
        'New Collection 2023',
        2000,
      ]}
      wrapper="div"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: '2em' }}
    />
      <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-outline btn-warning">Get Started</button>
    </div>
  </div>
</div>
<ProductList/>
  </div>
</html>
    

  )
}

export default Home



