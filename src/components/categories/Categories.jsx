import React from "react";
import "./Categories.css";
import { categories } from "../../data";
import PrimaryButton from "../button/PrimaryButton";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="categories-container">
      {categories.map((i) => (
        <div key={i.id} className="category-container">
          <img src={i.img}></img>
          <div className="category-info">
            <h1>{i.title} </h1>
            <Link to="/products">
              <PrimaryButton name="Shop Now" />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Categories;
