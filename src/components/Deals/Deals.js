import React from "react";
import Foodslider from "../Foodslide/Foodslider";
import "./Deals.css";

const Deals = () => {
  return (
    <>
      <div className="deals-section-wrapper">
        <h1 className="deals-section-heading">Special Deals</h1>
        <div className="deals-carousel-wrapper">
          <Foodslider />
        </div>
      </div>
    </>
  );
};

export default Deals;
