import React from "react";
import { CiSearch, CiShoppingCart } from "react-icons/ci";
import "./Products.css";
import { useNavigate, useParams } from "react-router-dom";

const Products = ({ items, heading }) => {
  const navigate = useNavigate();
  const viewDetails = (id) => {
    navigate(`/product/${id}`);
  };
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
              <button className="icon" onClick={() => viewDetails(i.id)}>
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
