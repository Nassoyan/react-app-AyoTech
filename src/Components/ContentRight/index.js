import React from "react";
import { useState } from "react";
import "./style.css";
import PlayVideo from "../../Icons/contentIcons/playVideo";
import Dollar from "../../Icons/contentIcons/dollar";
import LoveIcon from "../../Icons/contentIcons/loveIcon";

function ContentRight() {
  const [state, setState] = useState(false);
  function changeColor() {
    setState(!state);
  }
  return (
    <div className="content-right">
      <div className="content-right-title">
        <span className="playVideo">
          <PlayVideo />
        </span>
        <div className="right-title-text">
          <span className="pano-span">Смотреть панораму </span>
          <span className="pano-span">ресторана</span>
        </div>
      </div>

      <div className="content-right-main">
        <div className="content-right-main-inner">
          <div className="content-right-price">
            <span className="num">50</span>
            <span className="dollar">
              <Dollar />
            </span>
            <div className="alcohol-div">
              <span className="alcohol">средний чек</span>
              <span className="alcohol">без алколголя</span>
            </div>
            <span
              onClick={changeColor}
              className={`loveIcon ${state && "color"}`}
            >
              <LoveIcon />
            </span>
          </div>
          <div className="content-right-address">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentRight;
