import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { slideArray } from "../../data";
import "./slider.css";

function SLiderBubble() {

     const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
   
    };

  return (
    <Slider {...settings}>
        {slideArray?.map(function (item, index) {
          return (
            <div key={index} className="slider-container">
              <img src={item.img} />
              <h4>{item.name}</h4>
              <p>{item.text}</p>
              <span>{item.rating}</span>
            </div>
          );
        })}
    </Slider>
  );
}

export default SLiderBubble;
