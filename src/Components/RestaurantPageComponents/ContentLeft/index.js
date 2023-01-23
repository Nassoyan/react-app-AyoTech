

import React, { useState, useEffect } from "react";
import "./style.css";
import Vk from "../../../Icons/contentIcons/vk";
import Star from "../../../Icons/contentIcons/stars";
import ContentRight from "../ContentRight";
import LoveIcon from "../../../Icons/contentIcons/loveIcon";
import SmallPlayIcon from "../../../Icons/HeaderIcons/smallImagePlayIcon";

function ContentLeft() {
  const [photos, setPhotos] = useState();
  const [changeImage, setChangeImage] = useState();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos/?_start=0&_limit=4")
    
      .then((response) => response.json())
      .then((json) => setPhotos(json));

      return () => {
        fetch("https://jsonplaceholder.typicode.com/photos/?_start=0&_limit=4")
                    
          .then((response) => response.json())
          .then((json) => setPhotos(json));
      }
  }, []);

  useEffect(() => {
    photos?.length && setChangeImage(photos[0].url);
  }, [photos]);

  
 const starArray = [<Star />, <Star />, <Star />, <Star />, <Star />];
  // const imgArray = [<img1/>, <img2/>, <img3/>, <img4/>]

  return (
    <div className="main-title">
      <div className="content-left">
        <div className="restaurant-name">
          <span>Restaurant Name</span>
        </div>
        <div className="second-title">
          <div className="second-tlt-inner">
            <span className="second-tlt-95">9.5</span>
            <div className="stars-container">
              {starArray.map(function (el, index) {
                return (
                    <span key={index} className="star-span">{el}</span>
                );
              })}
            </div>
            <span className="div-56views">56 Views</span>
          </div>
          <div className="second-tlt-inner-icons">
            <div className="second-title-inner-divs">
              <div className="social-icon">
                  <span className="social-inner-div"> <Vk/> </span>
                  <div className="social-icon-stroke"></div>
                  <span className="social-inner-div-num"> 16 </span>
              </div>
              <div className="social-icon">
                  <span className="social-inner-div"> <Vk/> </span>
                  <div className="social-icon-stroke"></div>
                  <span className="social-inner-div-num"> 16 </span>
              </div>
              <div className="social-icon">
                  <span className="social-inner-div"> <Vk/> </span>
                  <div className="social-icon-stroke"></div>
                  <span className="social-inner-div-num"> 16 </span>
              </div>
            </div>
            <div>
               <span className="social-love-icon">
                   <LoveIcon/>
                  </span>
            </div>
          </div>
        </div>
        <div className="img-wrapper">
          <img className="big-image" src={changeImage} alt="img" />
          <div className="small-images">
            <div className="small-images-playIcon"><SmallPlayIcon/></div>
            {photos?.map((item) => (
              <img
                onClick={() => {
                  setChangeImage(item.url);
                }}
                key={item.id}
                className="fetch-img"
                src={item.url}
              />
            ))}
          </div>
        </div>
      </div>

      <ContentRight />
    </div>
  );
}

export default ContentLeft;
