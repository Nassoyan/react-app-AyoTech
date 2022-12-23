import React from "react";
import Slider from "react-slick";
import { slideArray } from "../../data";
import "./slider.css";

function SLiderBubble() {

     const settings = {
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
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
            slidesToShow: 2,
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
