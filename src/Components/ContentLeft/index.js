import React from "react";
import "./style.css";
import Vk from "../../Icons/contentIcons/vk";
import Fb from "../../Icons/contentIcons/fbIcon";
import Insta from "../../Icons/contentIcons/insta";
import Star from "../../Icons/contentIcons/stars";
import imgone from "../../Images/imgone.png";
import img1 from "../../Images/img1.png";
import img2 from "../../Images/img2.png";
import img3 from "../../Images/img3.png";
import img4 from "../../Images/img4.png";
import ContentRight from "../ContentRight";

function ContentLeft() {
  const starArray = [<Star />, <Star />, <Star />, <Star />, <Star />];

  return (
    <div className="main-title">
      <div className="content-left">
        <div className="restaurant-name">
          <span>Название ресторана</span>
        </div>
        <div className="second-title">
          <div className="second-tlt-inner">
            <span className="second-tlt-95">9.5</span>
            <div className="stars-container">
              {starArray.map(function (el, index) {
                return (
                  <div key={index} className="stars">
                    <span className="star-span">{el}</span>
                  </div>
                );
              })}
            </div>
            <span>56 Views</span>
          </div>
          <div className="second-tlt-inner">
            <span className="social-icon">
              <Vk />
            </span>
            <span className="social-icon icon-fb">
              <Fb />
            </span>
            <span className="social-icon">
              <Insta />
            </span>
          </div>
        </div>
        <img className="big-image" src={imgone} alt="img" />
        <div className="small-images">
          <img src={img1} alt="img" />
          <img src={img2} alt="img" />
          <img src={img3} alt="img" />
          <img src={img4} alt="img" />
        </div>
      </div>
      <ContentRight />
    </div>
  );
}

export default ContentLeft;
