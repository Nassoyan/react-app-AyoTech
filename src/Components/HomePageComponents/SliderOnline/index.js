
import React, {useRef} from "react";
import Slider from "react-slick";
import "./style.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import { slideArray } from "../../../data";
import ArrowRight from "../../../Icons/HomePageIcons/arrowRightHome";
import ArrowLeft from "../../../Icons/HomePageIcons/arrowLeftHome";


function SliderOnline() {

  const slideRef = useRef(null)

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
        arrows: false,
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

    return (
    <div className="homepage-slider-wrapper">
      <div className="homepage-arrow-container">
            <div className="homepage-arrow-circle"><ArrowRight/></div>
            <div className="homepage-arrow-circle homepage-arrow-circle-2"><ArrowLeft/></div>
            <div className="homepage-arrow-count">
              <div style={{fontSize: "56px"}}>01</div>
              <div className="arrowcount-secondspan" style={{fontSize: "24px", color: "#A9A9B9"}}>/ 03</div>
            </div>
            <div className=""></div>

            </div>
        <div className="slick-block-photo-homepage">
            <Slider ref={slideRef} {...settings}>
                {slideArray?.map(function (item, index) {
                  return (
                    <div key={index} className="slider-photo-container-homepage">
                      <img src={item.img} />
                        <div className="slider-photo-div-container-homepage">
                            <p className="slider-first-p-homepage">{item.name}</p>
                            <p className="slider-second-p-homepage">{item.text}</p>
                              <div className="second-tlt-inner-homepage">
                                <div className="stars-container-slider-homepage">
                                  <div className="hom-slider-red-circle"></div>
                                  <div className="home-slide-span">120 already joined</div>
                                </div>
                              </div>
                        </div>
                      </div>);})}
            </Slider>
        </div>
    </div>
        
    );
  }
  
  export default SliderOnline;