import React from "react";
import {filtersData} from "../../data/Filters";
import "./Filters.css";

const Filters = () => {
  return (
    <>
      <div className="filters-wrapper">
        <div className="filters-card">
          {filtersData.map((elm, index) => {
            return (
              <h3 className="filters-name" key={index}>
                {elm}
              </h3>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Filters;
