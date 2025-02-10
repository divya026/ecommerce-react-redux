import React from "react";
import "./Home.css";
import Announcement from "../../components/announcement/Announcement";
import Navbar from "../../components/navbar/Navbar";
import Slider from "../../components/slider/Slider";
import Categories from "../../components/categories/Categories";
import NewArrivals from "../../components/products/NewArrivals";
import Bestseller from "../../components/products/Bestseller";
import NewsLetter from "../../components/newsletter/NewsLetter";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <Announcement />
      <Slider />
      <Categories />
      <NewArrivals />
      <Bestseller />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default Home;
