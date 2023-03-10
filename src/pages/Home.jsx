import React from 'react'
import Categories from '../components/Categories'
import FeaturedProducts from '../components/FeaturedProducts'
import Hero from '../components/Hero'


const Home = ()=> {
  return (
   
  <div data-theme="light">
  <Hero/>
  <FeaturedProducts type="featured"/>
  <Categories/>
  <FeaturedProducts type="trending"/>
  </div>

    

  )
}

export default Home



