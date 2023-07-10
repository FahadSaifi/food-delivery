import React from "react";
import {howworks} from "../../data/Howworksdata";
import "./Howworks.css";

const Howworks = () => {
  return (
    <>
      <div className="Howworks-section-wrapper">
        <h1 className="howworks-heading">How It Works</h1>
        <div className="how-works-card-wrapper">
          <div className="container">
            <div className="how-works-cards-background">
              {howworks.map(elm => {
                return (
                  <div className="how-works-card" key={elm.id}>
                    <img
                      src={elm.img}
                      alt="order"
                      className="how-work-card-img"
                    />
                    <div className="how-work-card-content">
                      <h3 className="how-work-card-title">{elm.title}</h3>
                      <p className="how-work-card-desc">{elm.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Howworks;
