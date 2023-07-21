import React, {useState} from "react";
import {GrClose} from "react-icons/gr";
import {menu} from "../../data/Fooddata";
import "./Search.css";

const Search = ({close}) => {
  // All the required states
  const [searchInput, setSearchInput] = useState("");
  return (
    <>
      <div className="search-wrapper">
        <div className="search-bar-close-btn" onClick={() => close(false)}>
          <GrClose />
        </div>
        <div className="search-input-field">
          <input
            type="text"
            className="search-input"
            placeholder="Search Food"
            autoFocus
            onChange={e => setSearchInput(e.target.value)}
          />
        </div>
        <div className="container">
          <div className="search-items">
            {menu
              .filter(elm => {
                if (searchInput == "") {
                  return null;
                } else if (
                  elm.foodName.toLocaleLowerCase().match(searchInput)
                ) {
                  return elm;
                }
              })
              .map(item => {
                return (
                  <div className="search-item-card">
                    <div className="search-item-left">
                      <img
                        src={item.img}
                        alt="food"
                        className="search-item-img"
                      />
                    </div>
                    <div className="search-item-right">
                      <h3 className="search-item-name">{item.foodName}</h3>
                      <h3 className="search-item-price">
                        &#8377; {item.foodPrice}
                      </h3>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
