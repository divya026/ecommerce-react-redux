import React from "react";
import "./AllProducts.css";
import Navbar from "../../components/navbar/Navbar";
import Products from "../../components/products/Products";
import { allProducts } from "../../data";
import Footer from "../../components/footer/Footer";

const AllProducts = () => {
  return (
    <div className="allProducts-container">
      <div className="allProducts-navbar">
        <Navbar />
      </div>
      <Products heading="Products" items={allProducts} />
      <Footer />
    </div>
  );
};

export default AllProducts;
