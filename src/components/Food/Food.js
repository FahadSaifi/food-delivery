import React from "react";
import "./Food.css";
import {menu} from "../../data/Fooddata";

const Food = () => {
  return (
    <>
      <div className="food-section-wrapper">
        {menu.map(elm => {
          return (
            <div className="food-card" key={elm.id}>
              <div className="food-left">
                <img src={elm.img} alt="food" className="food-img" />
              </div>
              <div className="food-right">
                <h4 className="food-name">{elm.foodName}</h4>
                <p className="food-price">&#8377; {elm.foodPrice}</p>
                <button className="add-cart-btn">Add to cart</button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Food;
