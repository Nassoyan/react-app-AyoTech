import React from "react";
import Slider from "react-slick";
import "./style.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { slideArray } from "../../../data";
import Star from "../../../Icons/contentIcons/stars";

function SLiderBubblePhoto() {

    function SampleNextArrow(props) {
      const {onClick } = props;
  
      return (
        <span className="SliderNextArrow-photo">
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
        <span className="SliderPrevArrow-photo">
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
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 500,
        nextArrow: <SampleNextArrow/>,
        prevArrow: <SamplePrevArrow/>,
        
        responsive: [
          {
            breakpoint: 1500,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 1400,
            settings: {
              slidesToShow: 4,
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

      const starArray = [<Star />, <Star />, <Star />, <Star />, <Star />];

  
    return (
      <div className="slick-block-photo">
        <h2 className="slider-photo-title">Рестораны рядом</h2>
  
      <Slider {...settings}>
          {slideArray?.map(function (item, index) {
            return (
              <div key={index} className="slider-photo-container">
                <img src={item.url} />
                <div className="slider-photo-div-container">
                    <p className="slider-first-p">{item.name}</p>
                <p className="slider-second-p">{item.text}</p>
                <div className="second-tlt-inner">
            <span className="second-tlt-95">9.5</span>
            <div className="stars-container-slider">
              {starArray.map(function (el, index) {
                return (
                    <span key={index} className="star-span">{el}</span>
                );
              })}
            </div>
          </div>
                </div>
                
                
              </div>
            );
          })}
      </Slider>
      </div>
    );
  }
  
  export default SLiderBubblePhoto;