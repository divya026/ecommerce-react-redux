import React from "react";
import "./Navbar.css";
import { IoMdSearch } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalItems = cartItems.length;
  return (
    <div className="navbar-container">
      <div className="navbar-left">
        <input className="navbar-input" placeholder="Search" />
        <IoMdSearch className="navbar-icon" />
      </div>
      <div className="navbar-center">
        <h1 className="navbar-logo">DressAura</h1>
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
          <Link to="/cart">
            <button className="navbar-right-button">
              <FaShoppingCart />
            </button>
          </Link>
          {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
