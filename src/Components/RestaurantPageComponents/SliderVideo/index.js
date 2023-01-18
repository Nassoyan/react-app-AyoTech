import React from "react";
import Slider from "react-slick";
// import { slideArray } from "../../data";
import "./slider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { slideArray } from "../../../data";

function SLiderBubbleVideo() {

  function SampleNextArrow(props) {
    const {onClick } = props;

    return (
      <span className="SliderNextArrow">
        <svg
        onClick={onClick}
        width={13}
        height={22}
        viewBox="0 0 13 22"
        fill="none"
      >
        <path d="M1 21l10-10L1 1" stroke="#1F1F24" strokeWidth={2} />
      </svg>
      </span>
      
    )
  }

  function SamplePrevArrow(props) {
    const {onClick } = props;

    return (
      <span className="SliderPrevArrow">
        <svg
        onClick={onClick}
        width={13}
        height={22}
        viewBox="0 0 13 22"
        fill="none"
      >
        <path d="M12 1L2 11l10 10" stroke="#1F1F24" strokeWidth={2} />
      </svg>
      </span>
      
    )
  }
  

 

     const settings = {
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      speed: 500,
      nextArrow: <SampleNextArrow/>,
      prevArrow: <SamplePrevArrow/>,
      
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
              <img src={item.url} />

            </div>
          );
        })}
    </Slider>
    </div>
  );
}

export default SLiderBubbleVideo;
