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
import Footer from "./pages/Footer"

function App() {
 

  return (
  <Router>
  <div className="pt-20">
  <Navbar/>
  <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/shipping" element={<Shipping />} />
  <Route path="/shop" element={<Shop />} />
  <Route path="/singleproduct" element={<SingleProduct />} />
  <Route path='*' element={<NotFound />}/>
  </Routes>
  </div>
  <Footer/>
  </Router>
  )
}

export default App
