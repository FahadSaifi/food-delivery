import React, {useContext, useEffect} from "react";
import {useState} from "react";
import {NavLink} from "react-router-dom";
import {Headerdata} from "../../data/Headerdata";
import Cart from "../Cart/Cart";
import Search from "../Search/Search";
import {BsBag, BsHeart, BsSearch} from "react-icons/bs";
import {BiPhoneCall} from "react-icons/bi";
import {FaBarsStaggered} from "react-icons/fa6";
import {FiMail} from "react-icons/fi";
import {IoCloseSharp} from "react-icons/io5";
import {Itemcontext} from "../../context/context";
import "./Header.css";

const Header = () => {
  // -----------All states related to Navbar-----------
  const [mobileNav, setMobileNav] = useState(false);
  const [fixedNav, setFixedNav] = useState(false);
  const [activeCart, setActiveCart] = useState(false);
  const [search, setSearch] = useState(false);

  const {cartCount2} = useContext(Itemcontext);

  // Fixed navbar logic
  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      setFixedNav(true);
    } else {
      setFixedNav(false);
    }
  });
  return (
    <>
      <div className="top-header">
        <div className="container">
          <div className="top-header-flex-wrapper">
            <div className="top-header-left">
              <BiPhoneCall className="call-icon" />
              <p className="call-text">Call us on +91-8766374874</p>
            </div>
            <div className="top-header-right">
              <FiMail className="mail-icon" />
              <p className="mail-text">mail us at abc@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <nav className={fixedNav ? "navbar active" : "navbar"}>
        <div className="container">
          <div className="nav-flex-wrapper">
            <div className="logo-wrapper">
              <h2 className="logo">
                F<span className="logo-secondary-color">oo</span>dy
              </h2>
            </div>
            <div
              className={mobileNav ? "nav-opac active" : "nav-opac"}
              onClick={() => setMobileNav(false)}
            ></div>
            <ul
              className={
                mobileNav ? "nav-links-wrapper active" : "nav-links-wrapper"
              }
            >
              <div className="nav-close" onClick={() => setMobileNav(false)}>
                <IoCloseSharp className="nav-close-icon" />
              </div>
              {Headerdata.map(item => {
                return (
                  <li className="nav-item" key={item.id}>
                    <NavLink to={item.url} className="nav-link">
                      {item.link}
                    </NavLink>
                  </li>
                );
              })}
              <button className="auth-btn ab">Logout</button>
            </ul>
            <div className="nav-icons-wrapper">
              <div className="search" onClick={() => setSearch(true)}>
                <BsSearch className="search-icon" />
              </div>
              <div className="cart" onClick={() => setActiveCart(true)}>
                <BsBag className="cart-icon" />
                <span className="item-counter">{cartCount2}</span>
              </div>
              <div className="menu-bars" onClick={() => setMobileNav(true)}>
                <FaBarsStaggered className="menu-bar" />
              </div>
              <div className="login">
                <button className="auth-btn">Logout</button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {<Cart hideCart={setActiveCart} animeCart={activeCart} />}
      {search && <Search close={setSearch} />}
    </>
  );
};

export default Header;
