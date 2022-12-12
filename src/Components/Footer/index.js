import React from "react";
import "./styles.css";
import LogoFooter from "./logofooter";
import { menuArray1, menuArray } from "../../data";

function Footer() {
  return (
    <div className="footer">
      <div className="top-div">
        <div className="footer-inner">
          <div className="logo-div">
            {" "}
            <LogoFooter />{" "}
          </div>
          <div className="dbl">
            <span>Double</span>
            <span>bubble</span>
          </div>
        </div>
        <div className="span-div">
          <span>Double bubble, 2019,</span>
          <span>All rights reserved</span>
        </div>
      </div>
      <div className="footer-inner1">
        {menuArray?.map(function (element, index) {
          return (
            <ul className="info-1" key={index}>
              <li>{element.name}</li>
            </ul>
          );
        })}
      </div>
      <div className="footer-inner1">
        {menuArray1?.map(function (element, index) {
          return (
            <ul className="info-1" key={index}>
              <li>{element.name}</li>
            </ul>
          );
        })}
      </div>
      <div className="footer-inner2">
        <span>Help</span>
        <span>Jobs</span>
        <span className="subscribe">Subscribe</span>
        <div>
          <input placeholder="Enter your e-mail" type="text"></input>
          <button>Send</button>
        </div>
      </div>
    </div>
  );
}
export default Footer;
