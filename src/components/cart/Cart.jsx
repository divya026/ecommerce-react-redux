import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../navbar/Navbar";
import "./Cart.css";
import { BiShoppingBag } from "react-icons/bi";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "../../redux/cartSlice";
import PrimaryButton from "../button/PrimaryButton";
import { IoClose } from "react-icons/io5";
import cart from "../../assets/cart.png";
import Footer from "../footer/Footer";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const totalPrice = cartItems.reduce((acc, item) => {
    const splitPrice = item.price.split(" ");
    return acc + splitPrice[1] * item.quantity;
  }, 0);

  const handleCheckout = () => {
    alert("This feature is coming soon");
  };

  return (
    <>
      <Navbar />
      <div className="cart-container">
        <div className="cart-title-container">
          <BiShoppingBag className="cart-icon" />
          <h2 className="cart-title">DressAura Cart</h2>
        </div>

        {cartItems.length === 0 ? (
          <div className="cart-empty">
            <div className="cart-empty-items">
              <img src={cart}></img>
              <h2>Your Cart is empty</h2>
              <PrimaryButton name="SHOP NOW" onClick={() => navigate("/")} />
            </div>
          </div>
        ) : (
          <>
            <div className="cart-content">
              <div className="cart-items-section">
                <div className="cart-header">
                  <div className="header-item">Product</div>
                  <div className="header-item">Price</div>
                  <div className="header-item">Quantity</div>
                  <div className="header-item">Total</div>
                </div>
                {cartItems.map((item, index) => (
                  <div key={index} className="cart-item">
                    <div className="cart-product">
                      <img
                        src={item.img}
                        alt=""
                        className="cart-product-image"
                      ></img>
                      <p>{item.title}</p>
                    </div>
                    <div className="cart-price">{item.price}</div>
                    <div className="cart-quantity">
                      <button onClick={() => dispatch(decreaseQuantity(item))}>
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button onClick={() => dispatch(increaseQuantity(item))}>
                        +
                      </button>
                    </div>
                    <div className="cart-total">
                      Rs{" "}
                      {parseFloat(
                        item.price.split(" ")[1] * item.quantity
                      ).toFixed(2)}
                    </div>
                    <button
                      className="remove-btn"
                      onClick={() => dispatch(removeFromCart(item))}
                    >
                      <IoClose size={20} />
                    </button>
                  </div>
                ))}
              </div>
              <div className="cart-summary">
                <h3 className="summary-title"> Order Summary</h3>
                <div> Rs {totalPrice.toFixed(2)} </div>
                <div className="summary-details">
                  <div className="summary-items">
                    <div className="summary-item">
                      <span>Delivery:</span>
                      <span>Free</span>
                    </div>
                    <div className="summary-item">
                      <span>Total:</span>
                      <span>Rs {totalPrice.toFixed(2)}</span>
                    </div>
                  </div>
                  <div className="checkout-button">
                    <PrimaryButton
                      name="Proceed to checkout"
                      onClick={() => handleCheckout()}
                    />
                  </div>
                </div>
                {/* <div className="summary-details">
                  <div className="summary-item">
                    <span>Rs {totalPrice.toFixed(2)}</span>
                  </div>
                </div>
                <div className="summary-item">
                  <span>Delivery:</span>
                  <span>Free</span>
                </div>
                <div className="summary-item">
                  <span>Total:</span>
                  <span>Rs {totalPrice.toFixed(2)}</span>
                </div>
                <div className="checkout-button">
                  <PrimaryButton
                    name="Proceed to Checkout"
                    onClick={() => handleCheckout()}
                  />
                </div> */}
              </div>
            </div>
          </>
        )}
        <div className="cart-footer">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Cart;
