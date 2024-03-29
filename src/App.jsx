import React from "react"
import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import "./index.css"
import Home from "./pages/Home"
import About from "./pages/About"
import Shipping from "./pages/Shipping"
import Shop from "./pages/Shop"
import SingleProduct from "./pages/SingleProduct"
import NotFound from "./pages/NotFound"
import Footer from "./components/Footer"
import Products from "./pages/Products"
import Product from "./pages/Product"



function App() {
 

  return (
  <Router>
  <Navbar/>
  <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/shipping" element={<Shipping />} />
  <Route path="/shop" element={<Shop />} />
  <Route path="/singleproduct" element={<SingleProduct />} />
  <Route path='/product/:id' element={<Product/>}/>
  <Route path='/products/:id' element={<Products />}/>
  <Route path='*' element={<NotFound />}/>
  </Routes>
  <Footer/>
  </Router>
  )
}

export default App
