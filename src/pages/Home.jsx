import React from 'react'
import Card from '../components/Card'
import FeaturedProducts from '../components/FeaturedProducts'
import Hero from '../components/Hero'


const Home = ()=> {
  return (
   
  <div data-theme="light">
  <Hero/>
  <FeaturedProducts type="featured"/>
  <Card/>
  <FeaturedProducts type="trending"/>
  </div>

    

  )
}

export default Home



