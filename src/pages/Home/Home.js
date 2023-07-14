import React from "react";
import Menu from "../../components/Menu/Menu";
import "./Home.css";
import Deals from "../../components/Deals/Deals";
import Howworks from "../../components/Works/Howworks";
import Testimonial from "../../components/Testimonial/Testimonial";

const Home = () => {
  return (
    <>
      <div className="home-hero-section">
        <div className="container">
          <div className="hero-section-content">
            <div className="hero-intro">
              <p className="hero-intro-tagline">Easy way to order your food</p>
            </div>
            <div className="hero-main-heading">
              <h1 className="hero-heading">
                Order Healthy And <br /> Fresh Food Any Time
              </h1>
            </div>
            <div className="hero-tagline-wrapper">
              <p className="hero-tagline">Flat 10 - 50% off</p>
            </div>
            <div className="menu-btn-wrapper">
              <button className="menu-btn">View menu</button>
            </div>
          </div>
        </div>
        <div className="hero-section-wave"></div>
      </div>
      {/* ---------Hero section ends---------- */}
      <Menu />
      <Deals />
      <Howworks />
      <Testimonial />
    </>
  );
};

export default Home;
