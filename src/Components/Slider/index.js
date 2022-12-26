import React from "react";
import Slider from "react-slick";
import { slideArray } from "../../data";
import "./slider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SLiderBubble() {

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    );
  }

     const settings = {
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      infinite: true,
      slidesToShow: 3,
      arrows: false,
      slidesToScroll: 3,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 2000,
      
      responsive: [
        {
          breakpoint: 1500,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 1150,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
      ],
    };

  return (
    <div className="slick-block">

    <Slider {...settings}>
        {slideArray?.map(function (item, index) {
          return (
            <div key={index} className="slider-container">
              <img src={item.img} />

            </div>
          );
        })}
    </Slider>
    </div>
  );
}

export default SLiderBubble;
