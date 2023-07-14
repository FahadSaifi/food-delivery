import React, {useRef} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {dealsData} from "../../data/Deals";
import {BsArrowLeft, BsArrowRight} from "react-icons/bs";
import "./Foodslider.css";

const Foodslider = () => {
  const slider = useRef();

  const next = () => {
    slider.current.slickNext();
  };
  const previous = () => {
    slider.current.slickPrev();
  };
  const settings = {
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <Slider
        ref={c => (slider.current = c)}
        slidesToShow={3}
        swipeToSlide={true}
        {...settings}
      >
        {dealsData.map(elm => {
          return (
            <div className="deals-card-wrapper" key={elm.id}>
              <div className="deals-card">
                <img src={elm.img} alt="food" className="deal-card-img" />
                <div className="deal-card-content">
                  <h3 className="deal-title">{elm.title}</h3>
                  <p className="deal-description">{elm.desc}</p>
                  <p className="deal-price">&#8377; {elm.price}</p>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
      <div className="food-slider-btn">
        <button className="slider-prev-btn" onClick={previous}>
          <BsArrowLeft />
        </button>
        <button className="slider-next-btn" onClick={next}>
          <BsArrowRight />
        </button>
      </div>
    </>
  );
};

{
  /* <Slider  {...settings}> */
}

export default Foodslider;
