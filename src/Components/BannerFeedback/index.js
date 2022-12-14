import React from "react";
import "./style.css";
import { bannerData } from "../../data";
import bannerImg from "../../Images/bannerImg.png";
import img from "../../Images/imgone.png";

function Feedback() {
  return (
    <div className="banner-feedback-wrapper">
      <div className="feedback-container">
        <div className="feedback-title">
          <h1>Отзывы</h1>
          <span>56</span>
          <div className="border"></div>
        </div>
        <div className="each-feedback">
          {bannerData.map((item, index) => {
            return (
              <div key={index} className="feedback-info">
                <div className="info-container">
                  <img src={item.image} />
                  <div className="info-name">
                    <span>{item.name}</span>
                    <div>{item.date}</div>
                  </div>
                </div>
                <div className="info-rate">
                  <span>{item.rating}</span>
                  <div>{item.text}</div>
                  </div>
                  
              </div>
              
            );
          })}
        </div>
      </div>
      <div>
        <img className="bannerImg" src={bannerImg} />
        <p>Камера в заведении</p>
      </div>
    </div>
  );
}

export default Feedback;
