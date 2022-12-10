import React from "react";
import "../Header/style.css";
import Logo from "./logo";
import array from "../data";
import Logo2 from "./logo2";
import Arrow from "./Icons/arrow";

function Header() {
  return (
    <div>
      <div className="header-wrapper">
        <div className="header-navigation">
          <div className="logo-wrapper">
            <i>
              <Logo />
            </i>
          </div>
          <div className="nav-block-inner">
            <div className="nav-block">
              {array.map(function (el, index) {
                return (
                  <p className="nav-text" key={index}>
                    {el.name}
                  </p>
                );
              })}
            </div>
            <div className="nav-text-right"></div>
          </div>
          <div className="logo2">
            <Logo2 />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
