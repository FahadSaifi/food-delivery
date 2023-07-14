import React from "react";
import aboutFood from "../../images/aboutfood.webp";
import staffImg from "../../images/staff/s1.webp";
import {staffData} from "../../data/Staffdata";
import "./About.css";

const About = () => {
  return (
    <>
      <div className="about-section-wrapper">
        <div className="container">
          <h1 className="about-us-heading">About Us</h1>
          <p className="about-us-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            dicta doloremque illum harum tempora beatae at! Fugiat sit maiores
            aliquid?
          </p>
        </div>
      </div>
      <div className="container">
        <div className="about-us-info-section">
          <div className="about-info-left">
            <h2 className="about-info-heading">
              Healthy and Tasty food to your doorstep
            </h2>
            <p className="about-info-description">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate ullam quis sunt officiis earum unde provident tempora
              praesentium, nobis laborum? Asperiores quo dolore quos, neque
              minima non quasi praesentium reiciendis possimus alias fugit nemo
              ullam, accusamus molestiae debitis, autem consequuntur hic vero
              error maxime voluptatibus! Repudiandae, pariatur amet. Blanditiis,
              ad?
            </p>
            <p className="about-info-description">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Consequatur possimus, harum perferendis ex inventore vel illum quo
              dolorum, nemo maxime voluptas culpa autem doloremque dicta
              quisquam incidunt voluptatibus similique? Architecto quo quia,
              blanditiis rerum quaerat debitis explicabo, perferendis repellat
              suscipit ipsam doloribus vitae vel laboriosam nam consequuntur.
              Minus, temporibus non!
            </p>
          </div>
          <div className="about-info-right">
            <img src={aboutFood} alt="food" className="about-info-img" />
          </div>
        </div>
        <div className="our-staff-section">
          <h2 className="our-staff-heading">Our Staff</h2>
          <div className="staff-cards-wrapper">
            {staffData.map(elm => {
              return (
                <div className="staff-card" key={elm.id}>
                  <img src={elm.img} alt="staff" className="staff-card-img" />
                  <h3 className="staff-card-title">{elm.name}</h3>
                  <h3 className="staff-card-status">{elm.responibility}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
