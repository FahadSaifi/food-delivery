import React, {useContext} from "react";
import {AiOutlineClose} from "react-icons/ai";
import img from "../../images/Food/pizza/margherita.png";
import {Itemcontext} from "../../context/context";
import "./Cart.css";

const Cart = ({hideCart, animeCart}) => {
  // Using all the methods and states of context
  const {cartItem, handleRemoveFromCart, cartCount, cartTotal} = useContext(
    Itemcontext
  );
  console.log(cartItem);
  return (
    <>
      <div
        className={animeCart ? "cart-opac active" : "cart-opact"}
        onClick={() => hideCart(false)}
      ></div>
      <div className={animeCart ? "cart-wrapper active" : "cart-wrapper"}>
        <div className="cart-top-section">
          <h5 className="cart-heading">Cart</h5>
          <AiOutlineClose
            className="cart-close-icon"
            onClick={() => hideCart(false)}
          />
        </div>
        <div className="cart-middle-section">
          {cartItem.map(elm => {
            return (
              <div className="cart-item" key={elm.id}>
                <div className="cart-item-details">
                  <img src={elm.img} alt="food" className="cart-item-img" />
                  <div className="cart-quantity">
                    <h6 className="cart-item-name">{elm.foodName}</h6>
                    <h6 className="quantity-wrapper">
                      <span
                        className="decrement"
                        onClick={() => cartCount("dec", elm)}
                      >
                        -
                      </span>
                      <span className="cart-item-quantity">{elm.quantity}</span>
                      <span
                        className="increment"
                        onClick={() => cartCount("inc", elm)}
                      >
                        +
                      </span>
                    </h6>
                  </div>
                </div>
                <div
                  className="cart-item-close-icon"
                  onClick={() => handleRemoveFromCart(elm)}
                >
                  <AiOutlineClose className="cart-item-close" />
                </div>
              </div>
            );
          })}
        </div>
        <div className="cart-bottom-section">
          <div className="cart-subtotal">
            <h5 className="cart-subtotal-heading">Subtotal:</h5>
            <h5 className="cart-subtotal-amt">&#8377; {cartTotal}</h5>
          </div>
          <button className="checkout-btn">Checkout</button>
        </div>
      </div>
    </>
  );
};

export default Cart;
