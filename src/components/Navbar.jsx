import React from "react";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import { TfiShoppingCart } from "react-icons/tfi";
import VoiceSearch from "./VoiceSearch";


function Navbar() {
  return (
    <div className="fixed left-0 right-0 top-0 h-16 ml-3 mr-3">
      <nav className="flex items-center container mx-auto h-full justify-between">
        <TypeAnimation
          sequence={["Gift!", 5000]}
          wrapper="div"
          cursor={false}
          repeat={Infinity}
          style={{ fontSize: "2em" }}
        />
        <div className="form-control">
          <div className="input-group">
            <input
              type="text"
              placeholder="Search…"
              className="input input-bordered"
            />
            <button className="btn btn-square">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              </button>
              <button className="btn btn-square">
              <VoiceSearch/>
              </button>
           
      
          </div>
        </div>

        <div>
          <ul className="flex items-center space-x-10 text-sm">
            <li>
              <Link to="/" className="text-gray-400 hover:text-gray-100">
                Gift
              </Link>
            </li>
            <li>
              <Link to="/shop" className="text-gray-400 hover:text-gray-100">
                Shop
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-gray-400 hover:text-gray-100">
                About
              </Link>
            </li>
            <li>
              <Link
                to="/shipping"
                className="text-gray-400 hover:text-gray-100"
              >
                Shipping
              </Link>
            </li>
          </ul>
        </div>
        <div className="indicator">
  <span className="indicator-item indicator-bottom indicator-center badge badge-warning">0</span>
  <div className="grid w-10 h-10  place-items-center"><TfiShoppingCart size={25} /></div>
</div>

        
      </nav>
    </div>
  );
}

export default Navbar;
