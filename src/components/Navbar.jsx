import React from "react"
import { Link } from "react-router-dom"
import { TypeAnimation } from 'react-type-animation'


function Navbar(){
    return(
        <div className="fixed left-0 right-0 top-0 h-16 ml-3 mr-3">
        <nav className="flex items-center container mx-auto h-full justify-between">
        <TypeAnimation
      sequence={[
        'Gift!', 
        5000,
      ]}
      wrapper="div"
      cursor={false}
      repeat={Infinity}
      style={{ fontSize: '2em' }}
      />   
        <div>
            <ul className="flex items-center space-x-10 text-sm">
                <li><Link to='/' className="text-gray-400 hover:text-gray-100">Gift</Link></li>
                <li><Link to='/shop' className="text-gray-400 hover:text-gray-100">Shop</Link></li>
                <li><Link to='/about' className="text-gray-400 hover:text-gray-100">About</Link></li>
                <li><Link to='/shipping' className="text-gray-400 hover:text-gray-100">Shipping</Link></li>
            
            </ul>
        </div>
        </nav>

        </div>
    )
}

export default Navbar;