// import React from "react";
// import "./SingleProduct.css";
// import { useParams } from "react-router-dom";
// import { allProducts } from "../../data";
// import Navbar from "../../components/navbar/Navbar";
// import Footer from "../../components/footer/Footer";

// const SingleProduct = () => {
//   const { id } = useParams();
//   const product = allProducts.find((i) => i.id === parseInt(id));
//   console.log(id);
//   const colors = ["red", "purple", "teal", "green", "black"];
//   const sizes = ["xs", "s", "m", "l", "xl", "xxl"];
//   return (
//     <div className="singleProduct-container">
//       <Navbar />
//       <div className="singleProduct-wrapper">
//         <div className="singleProduct-imageSection">
//           <img src={product.img} alt="" className="singleProduct-image" />
//         </div>
//       </div>
//       <div className="singleProduct-infoSection">
//         <h2 className="singleProduct-title">{product.title}</h2>
//         <p className="singleProduct-number">{product.price}</p>
//         <h4 className="description-title"></h4>
//         <p className="singleProduct-description">
//           Discover the perfect dress for every season in our exclusive
//           collection of summer, winter, and spring dresses for women. From
//           breezy floral designs and cozy winter knits to vibrant spring florals,
//           our dresses combine comfort and style to keep you looking chic all
//           year long. Shop now and find your new seasonal favorite!
//         </p>
//         <div className="singleProduct-options">
//           <div className="colors-section">
//             <h4>Colors</h4>
//             <div className="colors">
//               {colors.map((color) => (
//                 <div
//                   key={color}
//                   className="color-circle"
//                   style={{ backgroundColor: color }}
//                 ></div>
//               ))}
//             </div>
//           </div>
//           <div className="sizes-section">
//             <h4>Size</h4>
//             <div className="sizes">
//               {sizes.map((size) => (
//                 <div key={size}>{size}</div>
//               ))}
//             </div>
//           </div>
//         </div>
//         <div className="addToCart">
//           <button>Add to Cart</button>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default SingleProduct;

import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { allProducts } from "../../data";
import Navbar from "../../components/navbar/Navbar";
import "./SingleProduct.css";
import PrimaryButton from "../../components/button/PrimaryButton";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";

const SingleProduct = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const { id } = useParams();
  const products = allProducts.find((product) => product.id === parseInt(id));
  console.log(products);
  const colors = ["red", "grey", "black", "blue", "green"];
  const sizes = ["xs", "s", "m", "l", "xl", "xxl"];

  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);

  const handleColorClick = (i) => {
    setSelectedColor(i);
  };

  const handleSizeClick = (i) => {
    setSelectedSize(i);
  };

  return (
    <div className="singleProduct-container">
      <div className="singleProduct-navbar">
        <Navbar />
      </div>
      <div className="singleProduct-wrapper">
        <div className="singleProduct-left">
          <div className="singleProduct-left-image">
            <img src={products.img}></img>
          </div>
        </div>
        <div className="singleProduct-right">
          <div className="singleProduct-right-title-price">
            <h1>{products.title}</h1>
            <p>{products.price}</p>
          </div>

          <div className="singleProduct-right-desc">
            <h2>Description</h2>
            <p>
              This versatile dress is crafted from high-quality, breathable
              fabric, ensuring comfort in both summer and winter. Its
              lightweight design keeps you cool in warmer months and provides
              just the right warmth when layered for colder weather.
            </p>
          </div>

          <div className="singleProduct-colors-sizes">
            <div className="colors-container">
              <h2>COLOR</h2>
              <div className="colors">
                {colors.map((i) => (
                  <div
                    key={i}
                    className="color-circle"
                    style={{
                      backgroundColor: i,
                      outline: selectedColor === i ? `3px solid ${i}` : "",
                    }}
                    onClick={() => handleColorClick(i)}
                  ></div>
                ))}
              </div>
            </div>
            <div className="sizes-container">
              <h2>SIZE</h2>
              <div className="sizes">
                {sizes.map((i) => (
                  <p
                    key={i}
                    style={{
                      border: selectedSize === i ? "1px solid #ccc" : "",
                      padding: ".1rem",
                    }}
                    onClick={() => handleSizeClick(i)}
                  >
                    {i}
                  </p>
                ))}
              </div>
            </div>
          </div>

          <div className="singleProduct-button">
            <PrimaryButton
              name="ADD TO CART"
              onClick={() => handleAddToCart(products)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
