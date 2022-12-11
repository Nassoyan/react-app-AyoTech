import React, { Fragment, useState } from "react";
import "../Header/style.css";
import Logo from "./logo";
import array from "../data";
import Logo2 from "./logo2";
import Arrow from "./Icons/arrow";
import Box from "./Icons/box";
import Heart from "./Icons/heart";
import Plus from "./Icons/plusSvg";
import Search from "./Icons/search";
import Human from "./Icons/human";

function Header() {
  const icons = [<Box />, <Heart />, <Plus />, <Search />, <Human />];
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
            <div className="nav-text-right">
              <div className="nav-lang">
                Ru
                <Arrow />
              </div>
              <div className="nav-icons">
                <div className="icon-wrapper">
                  {icons.map(function (el, index) {
                    return (
                      <div className="icon-div" key={index}>
                        {el}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
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
