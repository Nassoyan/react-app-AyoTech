
import React, {useRef, useState} from "react";
import Slider from "react-slick";
import "./style.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import ArrowLeft from "../../../Icons/HomePageIcons/arrowLeftHomepage";
import ArrowRight from "../../../Icons/HomePageIcons/arrowRightHomepage";
import Footer from "../../RestaurantPageComponents/Footer";



function SliderHomePage(props) {


  const {title, borderColor, photos, className, fontSize, circle, cartSide, sliderSide, display} = props

   const[count, setCount, ] = useState(3)
   const sliderRef = useRef()

    const next = () => {
      sliderRef.current.slickNext();
      if(count > photos.length-1) {
        return false
      } else  setCount(count + 1)
    }

    const prev = () => {
      sliderRef.current.slickPrev();
      if(count <= 3) {
        return false
      } else  setCount(count - 1)

    }

    


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
  
       const settings = {
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 200,
        arrows: false,
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
    <div className="homepage-slider-wrapper">
      <div className="homepage-slide-title">
                      <h2 className="slide-title-h2">{title}</h2>
                      <div className="homepage-stroke"></div>
                      <div className="homepage-slide-title-All">
                        <span>All</span>
                      </div>
              </div>
           
      <div  className={`slick-block-photo-homepage ${sliderSide}`}>
         <div  className={`homepage-arrow-container ${cartSide} ${borderColor}`}>
                  <div  onClick={prev} className={`homepage-arrow-circle ${circle}`}><ArrowLeft/></div>
                  <div  onClick={next}  className={`homepage-arrow-circle  homepage-arrow-circle-2 ${circle}`}><ArrowRight/></div>
                    <div className="homepage-arrow-count">
                      <div style={{fontSize: "56px"}}>{count}</div>
                        <div className="arrowcount-secondspan" style={{fontSize: "24px", color: "#A9A9B9"}}>/{photos.length}</div>
                    </div>
                    <div style={{display: "flex"}}>
                      <div style={{width: "56px", height: "4px", background: "#0085FF"}}></div>
                      <div style={{width: "72px", height: "1px", background: "#1F1F24", marginTop: "3px"}}></div>
                    </div>
            </div>
            {/* <div className="homepage-slider-underCart">
                <div style={{height: "328px", width:'100%'}}>
                <div className="homepage-arrow-counte-under">
                      <div style={{fontSize: "56px"}}>{count}</div>
                        <div className="arrowcount-secondspan" style={{fontSize: "24px", color: "#A9A9B9"}}>/{photos.length}</div>
                        
                    </div>
                    <div style={{display: "flex"}}>
                      <div style={{width: "56px", height: "4px", background: "#0085FF"}}></div>
                      <div style={{width: "72px", height: "1px", background: "#1F1F24", marginTop: "3px"}}></div>
                    </div>
                </div>
                <div></div>
            </div> */}
        
            <Slider ref={c => (sliderRef.current = c)}  {...settings}>
                {photos?.map(function (item, index) {
                  return (
                    <div key={index} className="slider-photo-container-homepage">
                      <img src={item.url} />
                        <div className="slider-photo-div-container-homepage">
                            <p style={{fontSize: fontSize}} className="slider-first-p-homepage">{item.name}</p>
                            <p className="slider-second-p-homepage">{item.text}</p>
                              <div className={`second-tlt-inner-homepage ${className}`}>
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
  
  export default SliderHomePage;