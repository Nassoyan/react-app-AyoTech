import React, { useState, useEffect } from "react";
import "./style.css";
import Vk from "../../../Icons/contentIcons/vk";
import Star from "../../../Icons/contentIcons/stars";
import ContentRight from "../ContentRight";
import LoveIcon from "../../../Icons/contentIcons/loveIcon";
import SmallPlayIcon from "../../../Icons/HeaderIcons/smallImagePlayIcon";

function ContentLeft() {
  const [photos, setPhotos] = useState([
    {
      url: "https://onestep4ward.com/wp-content/uploads/2011/01/Destino-Ibiza-Pacha.jpg",
      name: "Club party",
      text: "06th Mar",
    },
    {
      url: "https://a.cdn-hotels.com/gdcs/production7/d1643/aad2d40a-3779-4452-bdda-b54f04b5b961.jpg",
      name: "Night party",
      text: "06th Mar",
    },
    {
      url: "https://s4x9x8w4.stackpathcdn.com/sites/default/files/styles/auto_1500_width/public/article-images/137508/slideshow-1644163476.jpg",
      name: "Beach party",
      text: "06th Mar",
    },
    {
      url: "https://www.telegraph.co.uk/content/dam/Travel/Destinations/Europe/Spain/Ibiza/hi-ibiza-ibiza-travel-guide-nightlife.jpg?imwidth=480",
      name: "Lime party",
      text: "06th Mar",
    },
  ]);

  const [changeImage, setChangeImage] = useState();

  useEffect(() => {
    photos?.length && setChangeImage(photos[0].url);
  }, [photos]);

  const starArray = [<Star />, <Star />, <Star />, <Star />, <Star />];

  return (
    <div className="main-title">
      <div className="content-left">
        <div className="restaurant-name">
          <span>Restaurants</span>
        </div>
        <div className="second-title">
          <div className="second-tlt-inner">
            <span className="second-tlt-95">9.5</span>
            <div className="stars-container">
              {starArray.map(function (el, index) {
                return (
                  <span key={index} className="star-span">
                    {el}
                  </span>
                );
              })}
            </div>
            <span className="div-56views">56 Views</span>
          </div>
          <div className="second-tlt-inner-icons">
            <div className="second-title-inner-divs">
              <div className="social-icon">
                <span className="social-inner-div">
                  {" "}
                  <Vk />{" "}
                </span>
                <div className="social-icon-stroke"></div>
                <span className="social-inner-div-num"> 16 </span>
              </div>
              <div className="social-icon">
                <span className="social-inner-div">
                  {" "}
                  <Vk />{" "}
                </span>
                <div className="social-icon-stroke"></div>
                <span className="social-inner-div-num"> 16 </span>
              </div>
              <div className="social-icon">
                <span className="social-inner-div">
                  {" "}
                  <Vk />{" "}
                </span>
                <div className="social-icon-stroke"></div>
                <span className="social-inner-div-num"> 16 </span>
              </div>
            </div>
            <div>
              <span className="social-love-icon">
                <LoveIcon />
              </span>
            </div>
          </div>
        </div>
        <div className="img-wrapper">
          <img className="big-image" src={changeImage} alt="img" />
          <div className="small-images">
            <div className="small-images-playIcon">
              <SmallPlayIcon />
            </div>
            {photos?.map((item, index) => (
              <img
                alt="club images"
                onClick={() => {
                  setChangeImage(item.url);
                }}
                key={index}
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
