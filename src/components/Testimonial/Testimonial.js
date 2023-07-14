import React, {useRef} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {BsArrowLeft, BsArrowRight} from "react-icons/bs";
import tBannerImg from "../../images/testimonials/test-banner.png";
import {testimonialData} from "../../data/Testimonialdata";
import {AiFillStar} from "react-icons/ai";
import "./Testimonial.css";

const Testimonial = () => {
  const slider = useRef();

  const next1 = () => {
    slider.current.slickNext();
  };
  const previous1 = () => {
    slider.current.slickPrev();
  };
  const settings = {
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };
  return (
    <>
      <div className="testimonial-wrapper">
        <div className="container">
          <h1 className="testimonial-heading">Testimonials</h1>
          <div className="testimonial-slider-wrapper">
            <div className="testimonial-slider">
              <Slider
                ref={c => (slider.current = c)}
                slidesToShow={1}
                swipeToSlide={true}
                infinite={true}
                {...settings}
              >
                {testimonialData.map(elm => {
                  return (
                    <div className="testimonial-card" key={elm.id}>
                      <img
                        src={elm.img}
                        alt="rating"
                        className="testimonial-img"
                      />
                      <p className="customer-name">{elm.name}</p>
                      <div className="rating-star">
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                      </div>
                      <p className="testimonial-rating">{elm.rate}</p>
                    </div>
                  );
                })}
              </Slider>
              <div className="food-slider-btn">
                <button className="slider-prev-btn" onClick={previous1}>
                  <BsArrowLeft />
                </button>
                <button className="slider-next-btn" onClick={next1}>
                  <BsArrowRight />
                </button>
              </div>
            </div>
            <div className="testimonial-banner">
              <img
                src={tBannerImg}
                alt="chefs"
                className="testimonial-banner-img"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
