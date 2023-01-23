
import React, {useRef, useState} from "react";
import Slider from "react-slick";
import "./style.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import ArrowLeft from "../../../Icons/HomePageIcons/arrowLeftHomepage";
import ArrowRight from "../../../Icons/HomePageIcons/arrowRightHomepage";



function SliderHomePage(props) {


  const {title, borderColor, photos, cartSide, slideShow, sliderSide, sliderUnder, sliderHeader} = props

   const[count, setCount, ] = useState(slideShow)
   const sliderRef = useRef()

    const next = () => {
      sliderRef.current.slickNext();
      if(count > photos.length-1) {
        return false
      } else  setCount(prevCount => prevCount + 1)
    }

    const prev = () => {
      sliderRef.current.slickPrev();
      if(count <= slideShow) {
        return false
      } else  setCount(prevCount => prevCount - 1)

    }

    
  
       const settings = {
        infinite: false,
        slidesToShow: slideShow,
        slidesToScroll: 1,
        speed: 200,
        arrows: false,
        responsive: [
          {
            breakpoint: 1500,
            settings: {
              slidesToShow: slideShow,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 1400,
            settings: {
              slidesToShow: slideShow,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 1150,
            settings: {
              slidesToShow: slideShow,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 768,
            settings: {
              dots: true,
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };

    return (
    <div className={`homepage-slider-wrapper ${sliderHeader}`}>
      <div className="homepage-slide-title">
                      <h2 className="slide-title-h2">{title}</h2>
                      <div className="homepage-stroke"></div>
                        <div className="homepage-slide-title-All">
                           <span>All</span>
                          </div>
       </div>
           
      <div  className={`slick-block-photo-homepage ${sliderUnder}`}>
         <div  className={`${cartSide}  ${borderColor}`}>

                <div className="slider-under-arrows">
                  <div  onClick={prev} className={`homepage-arrow-circle `}><ArrowLeft/></div>
                  <div  onClick={next}  className={`homepage-arrow-circle  homepage-arrow-circle-2 `}><ArrowRight/></div>
                </div>
                  
                    <div className="slider-under">
                      <div className="homepage-arrow-count">
                        <div style={{fontSize: "56px", fontWeight: "bold" }}>{count}</div>
                        <div className="arrowcount-secondspan" style={{fontSize: "24px", color: "#A9A9B9"}}>/{photos.length}</div>
                    </div>

                    <div className="homepage-stroke-div" style={{display: "flex"}}>
                         <div style={{width: "56px", height: "4px", background: "#0085FF"}}></div>
                         <div style={{width: "72px", height: "1px", background: "#1F1F24", marginTop: "3px"}}></div>
                    </div>
                    </div>
                    
          </div>
          
            <Slider className={sliderSide} ref={x => (sliderRef.current = x)}  {...settings}>
                {photos?.map(function (item, index) {
                  return (
                    <div key={index} className="slider-photo-container-homepage">
                      <img src={item.url} />
                        <div className="slider-photo-div-container-homepage">
                            <p className="slider-first-p-homepage">{item.name}</p>
                            <p className="slider-second-p-homepage">{item.text}</p>
                              <div className={`second-tlt-inner-homepage `}>
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