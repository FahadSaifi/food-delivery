import React from "react";
import Foodslider from "../../images/Foodslide/Foodslider";
import "./Deals.css";

const Deals = () => {
  return (
    <>
      <div className="deals-section-wrapper">
        <h1 className="deals-section-heading">Special Deals</h1>
        <div className="deals-carousel-wrapper">
          <div className="container">
            <Foodslider />
          </div>
        </div>
      </div>
    </>
  );
};

export default Deals;
