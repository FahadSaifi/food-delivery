import React from "react";
import pizza from "../../images/menu/pizza.png";
import burger from "../../images/menu/burger.png";
import chicken from "../../images/menu/chicken.png";
import cake from "../../images/menu/cake.png";
import drink from "../../images/menu/colddrink.png";
import dal from "../../images/menu/daal.png";
import nan from "../../images/menu/naan.png";
import dosa from "../../images/menu/dosa.png";
import "./Menu.css";

const Menu = () => {
  return (
    <>
      <div className="menu-section-wrapper">
        <div className="container">
          <h1 className="menu-section-heading">Our Menu</h1>
          <div className="menu-cards-wrapper">
            <div className="menu-card">
              <img src={pizza} alt="food" className="menu-card-img" />
              <div className="menu-card-content">
                <p className="menu-card-title">Pizza</p>
              </div>
            </div>
            <div className="menu-card">
              <img src={burger} alt="food" className="menu-card-img" />
              <div className="menu-card-content">
                <p className="menu-card-title">burger</p>
              </div>
            </div>
            <div className="menu-card">
              <img src={chicken} alt="food" className="menu-card-img" />
              <div className="menu-card-content">
                <p className="menu-card-title">chicken</p>
              </div>
            </div>
            <div className="menu-card">
              <img src={cake} alt="food" className="menu-card-img" />
              <div className="menu-card-content">
                <p className="menu-card-title">cake</p>
              </div>
            </div>
            <div className="menu-card">
              <img src={drink} alt="food" className="menu-card-img" />
              <div className="menu-card-content">
                <p className="menu-card-title">drink</p>
              </div>
            </div>
            <div className="menu-card">
              <img src={dal} alt="food" className="menu-card-img" />
              <div className="menu-card-content">
                <p className="menu-card-title">dal</p>
              </div>
            </div>
            <div className="menu-card">
              <img src={nan} alt="food" className="menu-card-img" />
              <div className="menu-card-content">
                <p className="menu-card-title">nan</p>
              </div>
            </div>
            <div className="menu-card">
              <img src={dosa} alt="food" className="menu-card-img" />
              <div className="menu-card-content">
                <p className="menu-card-title">dosa</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
