import React from "react";
import {chefsData} from "../../data/Chefsdata";
import "./Chefs.css";

const Chefs = () => {
  return (
    <>
      <div className="chefs-section-wrapper">
        <h1 className="our-chefs-heading">Our Chefs</h1>
        <div className="container">
          <div className="chefs-card-wrapper">
            {chefsData.map(elm => {
              return (
                <div className="chef-card" key={elm.id}>
                  <img src={elm.img} alt="chef" className="chef-img" />
                  <h3 className="chef-name">{elm.chefName}</h3>
                  <p className="chef-status">{elm.status}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Chefs;
