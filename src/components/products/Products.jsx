import React from "react";
import { CiSearch, CiShoppingCart } from "react-icons/ci";
import "./Products.css";

const Products = ({ items, heading }) => {
  return (
    <div>
      <h1 className="heading">{heading}</h1>
      <div className="products-container">
        {items.map((i) => (
          <div key={i.id} className="product-container">
            <img src={i.img} alt="" className="product-image"></img>
            <div className="product-desc">
              <h3>{i.title}</h3>
              <span>{i.price}</span>
            </div>
            <div className="product-info">
              <button className="icon">
                <CiShoppingCart /> Add to Cart
              </button>
              <button className="icon">
                <CiSearch /> Search
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
