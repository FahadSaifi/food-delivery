import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <div className="contact-form-section">
        <div className="contact-form-wrapper">
          <h2 className="contact-form-heading">Contact Us</h2>
          <form className="form">
            <input
              type="text"
              name="userName"
              placeholder="Your Name"
              className="form-input"
            />
            <input
              type="tel"
              name="userMobile"
              placeholder="Your Phone"
              className="form-input"
            />
            <input
              type="email"
              name="userEmail"
              placeholder="Your Email"
              className="form-input"
            />
            <button className="contact-form-btn">Send</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
