
import React, {useRef, useState} from "react";
import Slider from "react-slick";
import "./style.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import { slideArray } from "../../../data";
import ArrowLeft from "../../../Icons/HomePageIcons/arrowLeftHomepage";
import ArrowRight from "../../../Icons/HomePageIcons/arrowRightHomepage";
import { slideImgArray } from "../../../data";




function SliderEvents() {
   const[count, setCount] = useState(3)
   const sliderRef = useRef()

    const next = () => {
      sliderRef.current.slickNext();
      if(count > slideArray.length-1) {
        return false
      } else  setCount(count + 1)
    }

    const prev = () => {
      sliderRef.current.slickPrev();
      if(count <= 3) {
        return false
      } else  setCount(count - 1)

    }
   
  
       const settings = {
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 200,
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
              slidesToShow: 4,
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
           
      <div className="slick-block-photo-homepage">
         <div className="homepage-arrow-container">
                  <div  onClick={prev} className="homepage-arrow-circle"><ArrowLeft/></div>
                  <div  onClick={next}  className="homepage-arrow-circle homepage-arrow-circle-2"><ArrowRight/></div>
                    <div className="homepage-arrow-count">
                      <div style={{fontSize: "56px"}}>{count}</div>
                        <div className="arrowcount-secondspan" style={{fontSize: "24px", color: "#A9A9B9"}}>/{slideImgArray.length}</div>
                    </div>
                    <div style={{display: "flex"}}>
                      <div style={{width: "56px", height: "4px", background: "#0085FF"}}></div>
                      <div style={{width: "72px", height: "1px", background: "#1F1F24", marginTop: "3px"}}></div>
                    </div>
            </div>
            <Slider ref={c => (sliderRef.current = c)}  {...settings}>
                {slideImgArray?.map(function (item, index) {
                  return (
                    <div key={index} className="slider-photo-container-homepage-events">
                      <img src={item.url} />
                        <div className="slider-photo-div-container-homepage-events">
                            <p className="slider-first-p-homepage">{item.name}</p>
                            <p className="slider-first-p-homepage">{item.date}</p>
                              <div className="second-tlt-inner-homepage">
                              </div>
                        </div>
                      </div>);})}
            </Slider>
        </div>
    </div>
        
    );
  }
  
  export default SliderEvents;












   // function SampleNextArrow(props) {
    //   const {onClick } = props;
  
    //   return (
    //     <span className="SliderNextArrow-photo">
    //       <svg
    //       onClick={onClick}
    //       width={13}
    //       height={22}
    //       viewBox="0 0 13 22"
    //       fill="none"
    //     >
    //       <path d="M1 21l10-10L1 1" stroke="#1F1F24" strokeWidth={2} />
    //     </svg>
    //     </span>
        
    //   )
    // }
  
    // function SamplePrevArrow(props) {
    //   const {onClick } = props;
  
    //   return (
    //     <span className="SliderPrevArrow-photo">
    //       <svg
    //       onClick={onClick}
    //       width={13}
    //       height={22}
    //       viewBox="0 0 13 22"
    //       fill="none"
    //     >
    //       <path d="M12 1L2 11l10 10" stroke="#1F1F24" strokeWidth={2} />
    //     </svg>
    //     </span>
        
    //   )
    // }