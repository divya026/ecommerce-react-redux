import React, { useEffect, useState } from "react";
import "./Slider.css";
import PrimaryButton from "../button/PrimaryButton";
import { sliderItems } from "../../data";
import { Link } from "react-router-dom";
import {
  IoMdArrowBack,
  IoMdArrowDropleft,
  IoMdArrowDropright,
} from "react-icons/io";

const Slider = () => {
  const [sliderIndex, setSliderIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction == "left") {
      setSliderIndex(sliderIndex > 0 ? sliderIndex - 1 : 2);
    } else {
      setSliderIndex(sliderIndex < 2 ? sliderIndex + 1 : 0);
    }
  };
  return (
    <div className="slider-container">
      <div
        className="arrow"
        direction="left"
        onClick={() => handleClick("left")}
      >
        <IoMdArrowDropleft className="icon" />
      </div>

      <div
        className="slider-wrapper"
        style={{ transform: `translateX(${sliderIndex * -100}vw)` }}
      >
        {sliderItems.map((i) => (
          <div key={i.id} className="slide">
            <div className="img-container">
              <img src={i.img}></img>
            </div>
            <div className="info-container">
              <h1 className="title">{i.title}</h1>
              <p className="desc">{i.desc}</p>
              <Link to="/products">
                <PrimaryButton name="Shop Now" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div
        className="arrow"
        direction="right"
        onClick={() => handleClick("right")}
      >
        <IoMdArrowDropright className="icon" />
      </div>
    </div>
  );
};

export default Slider;
