import React from "react";
import "./Navbar.css";
import { IoMdSearch } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-left">
        <input className="navbar-input" placeholder="Search" />
        <IoMdSearch className="navbar-icon" />
      </div>
      <div className="navbar-center">
        <h1 className="navbar-logo">Dress Aura</h1>
      </div>
      <div className="navbar-right">
        <div className="navbar-right-item">
          <Link to="/register">
            <button className="navbar-right-button">Register</button>
          </Link>
        </div>
        <div className="navbar-right-item">
          <Link to="/login">
            <button className="navbar-right-button">Login</button>
          </Link>
        </div>
        <div className="navbar-right-item">
          <button className="navbar-right-button">
            <FaShoppingCart />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
