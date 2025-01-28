import React from "react";
import "./Footer.css";
import { IoLocation } from "react-icons/io5";
import { FaInstagram, FaPhoneAlt, FaPinterest } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import payment from "../../assets/payment.png";
import { FaFacebook } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-left">
        <h3>Shopping App</h3>
        <div className="footer-left-desc">
          Discover the perfect dress for every season in our exclusive
          collection of summer, winter, and spring dresses for women. From
          breezy floral designs and cozy winter knits to vibrant spring florals,
          our dresses combine comfort and style to keep you looking chic all
          year long. Shop now and find your new seasonal favorite!
        </div>
        <div className="social-container">
          <div className="social-icon" style={{ backgroundColor: "#3b5999" }}>
            <FaFacebook />
          </div>
          <div className="social-icon" style={{ backgroundColor: "#e44059" }}>
            <FaInstagram />
          </div>{" "}
          <div className="social-icon" style={{ backgroundColor: "#55acee" }}>
            <CiTwitter />
          </div>{" "}
          <div className="social-icon" style={{ backgroundColor: "#e60023" }}>
            <FaPinterest />
          </div>
        </div>
      </div>

      <div className="footer-right">
        <div className="contact-container">
          <h3>Contact</h3>
          <div className="contact-info">
            <IoLocation /> 123 Street, City
          </div>
          <div className="contact-info">
            <FaPhoneAlt /> +917878787878
          </div>
          <div className="contact-info">
            <IoIosMail /> divya@gmail.com
          </div>
          <img src={payment} className="payment" alt=""></img>
        </div>
      </div>
    </div>
  );
};

export default Footer;
