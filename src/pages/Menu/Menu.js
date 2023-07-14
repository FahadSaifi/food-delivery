import React from "react";
import "./Menu.css";
import Filters from "../../components/Filters/Filters";
import Food from "../../components/Food/Food";

const Menu = () => {
  return (
    <>
      <div className="menu-section-wrapper">
        <div className="container">
          <h1 className="our-menu-heading">Our Menu</h1>
          <Filters />
          <div className="foods">
            <Food />
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
