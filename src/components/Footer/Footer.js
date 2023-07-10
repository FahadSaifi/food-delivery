import React from "react";
import {BsFillSendFill} from "react-icons/bs";
import {BiLogoFacebook, BiLogoInstagram, BiLogoYoutube} from "react-icons/bi";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer-wrapper">
        <div className="footer-content">
          <div className="footer-newsletter-wrapper">
            <div className="container">
              <div className="footer-newsletter">
                <h5 className="newsletter-heading">Newsletter</h5>
                <form className="newsletter-form">
                  <div className="input-field">
                    <input
                      type="text"
                      name="user"
                      className="newsletter-input"
                      placeholder="Your email"
                    />
                    <button type="submit" className="newsletter-submit-btn">
                      <BsFillSendFill className="input-send-icon" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="footer-bottom-section">
            <div className="container">
              <div className="footer-links">
                <span className="footer-link">Home</span>
                <span className="footer-link">About</span>
                <span className="footer-link">Menu</span>
                <span className="footer-link">Contact</span>
                <span className="footer-link">Deals</span>
              </div>
              <div className="footer-social-media-icons">
                <BiLogoFacebook className="social-media-icon" />
                <BiLogoInstagram className="social-media-icon" />
                <BiLogoYoutube className="social-media-icon" />
              </div>
              <h6 className="copyright-heading">@Copyright 2019</h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
