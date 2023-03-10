import React from 'react'
import image from '../img/gift2.jpeg'
import { TypeAnimation } from 'react-type-animation'

const Hero = () => {
  return (
    <div className="hero min-h-screen" style={{backgroundImage:`url(${image})` }}>
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
  )
}

export default Hero