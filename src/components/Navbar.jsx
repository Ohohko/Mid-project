import React from "react";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import { TfiShoppingCart } from "react-icons/tfi";

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
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-mic" viewBox="0 0 16 16"> <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z"/> <path d="M10 8a2 2 0 1 1-4 0V3a2 2 0 1 1 4 0v5zM8 0a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V3a3 3 0 0 0-3-3z"/> </svg>
            </button>
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
        <TfiShoppingCart />
      </nav>
    </div>
  );
}

export default Navbar;
