import React from "react";
import "./style.css";
import { bannerData } from "../../data";
import bannerImg from "../../Images/bannerImg.png";
import img from "../../Images/imgone.png";
import Star from "../../Icons/contentIcons/stars";
import ProgressBar from "../ProgressBar";

function Feedback() {
  const starArray = [<Star />, <Star />, <Star />, <Star />, <Star />];

  return (
    <div className="banner-feedback-wrapper">
      <div className="feedback-container">
        <div className="feedback-title">
          <span>Reviews</span>
          <span>56</span>
          <div className="border"></div>
        </div>
        
          <div className="feedback-rate-div">
            <span className="feedback-rate-num">4.5</span>
            <div className="feedback-stars-container">
              {starArray.map(function (el, index) {
                return (
                    <span key={index} className="star-span-copy">{el}</span>
                );
              })}
            </div>
          </div>
          <ProgressBar 
            value={50}
            max={100}
            />
        <div className="each-feedback">
          {bannerData.map((item, index) => {
            return (
              <div key={index} className="feedback-info">
                <div className="info-container">
                  <img src={item.image} />
                  <div className="info-name">
                    <span className="banner-feedback-name">{item.name}</span>
                    <div>{item.date}</div>
                  </div>

                  <div className="info-rate-copy-box">
                    <div className="info-rate-copy">
                      <span className="span-rating">{item.rating}</span>
                    </div>
                  </div>
                </div>
                <div className="info-rate">
                  <span className="span-rating">{item.rating}</span>
                  <div className="rating-text">{item.text}</div>
                </div>
              </div>
            );
          })}
        </div>
        <span className="more-feed">Еще отзывы</span>
      </div>
      <div className="bannerImg-div">
        <img className="bannerImg" src={bannerImg} />
        <p className="camera-text">Камера в заведении</p>
      </div>
    </div>
  );
}

export default Feedback;
