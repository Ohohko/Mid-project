import React from 'react'
import Categories from '../components/Categories'
import Contact from '../components/Contact'
import FeaturedProducts from '../components/FeaturedProducts'
import Hero from '../components/Hero'


const Home = ()=> {
  return (
   
  <div data-theme="light">
  <Hero/>
  <FeaturedProducts type="featured"/>
  <Categories/>
  <FeaturedProducts type="trending"/>
  <Contact/>
  </div>

    

  )
}

export default Home



