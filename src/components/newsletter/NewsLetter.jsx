import React from "react";
import "./NewsLetter.css";
import { IoMdSend } from "react-icons/io";

const NewsLetter = () => {
  return (
    <div className="newsletter-container">
      <h1 className="newsletter-title">Newsletter</h1>
      <div className="newsletter-desc">
        {" "}
        What's fresh and New : Updates you don't want to miss
      </div>
      <div className="input-container">
        <input className="newsletter-input"></input>
        <button className="newsletter-button">
          <IoMdSend className="icon" />
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;
