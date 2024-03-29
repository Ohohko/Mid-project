import React from "react";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import { TfiShoppingCart } from "react-icons/tfi";


function Navbar() {
  return (
    <nav className="navbar sticky top-0 text-yellow-400">
      <div className="navbar-start">
        <div className="dropdown ">
          <label tabIndex={0} className="btn btn-ghost btn-circle ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 "
          >
    <li>
      <Link to="/" className="text-yellow-400 text-2xl hover:text-gray-100">
        Home
      </Link>
    </li>
    <li>
      <Link to="/shop" className="text-yellow-400 text-2xl hover:text-gray-100">
        Shop
      </Link>
    </li>
    <li>
      <Link to="/about" className="text-yellow-400 text-2xl hover:text-gray-100">
        About
      </Link>
    </li>
    <li>
      <Link to="/shipping" className="text-yellow-400 text-2xl hover:text-gray-100">
        Shipping
      </Link>
    </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <a className="btn btn-ghost normal-case text-xl">
          <TypeAnimation
            sequence={["Gift!", 5000]}
            wrapper="div"
            cursor={false}
            repeat={Infinity}
            style={{ fontSize: "2em" }}
          />
        </a>
      </div>
      <div className="navbar-end">
        <button className="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
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
        <button className="btn btn-ghost btn-circle">
          <div className="indicator ">
           <TfiShoppingCart size={25}/>
            <span className="badge badge-xs badge-primary indicator-item">0</span>
          </div>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;