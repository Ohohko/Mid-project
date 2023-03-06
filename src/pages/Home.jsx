import React from 'react'
import ProductList from '../components/ProductList'

function Home() {
  return (
    <html data-theme="dark">
  <div data-theme="light">
  <div className="hero min-h-screen" style={{ backgroundImage: `url("https://woocommerce-955837-3332579.cloudwaysapps.com/wp-content/uploads/2023/03/gift1.jpeg")` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
      <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
<ProductList/>
  </div>
</html>
    

  )
}

export default Home



