import React, { Fragment, useState } from "react";
import "../Header/style.css";
import Logo from "../../Icons/HeaderIcons/logo";
import array from "../../data";
import Logo2 from "../../Icons/HeaderIcons/logo2";
import Arrow from "../../Icons/HeaderIcons/arrow";
import Box from "../../Icons/HeaderIcons/box";
import Heart from "../../Icons/HeaderIcons/heart";
import Plus from "../../Icons/HeaderIcons/plusSvg";
import Search from "../../Icons/HeaderIcons/search";
import Human from "../../Icons/HeaderIcons/human";

function Header() {
  const [state, setState] = useState(false);
  function arrowChange() {
    setState(!state);
  }
  const icons = [ <Heart />,<Box />,<Search />, <Plus />,  <Human />];
  return (
    <div>
      <div className="header-wrapper">
        <div className="header-navigation">
          <div className="logo-wrapper">
              <Logo />
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
              {/* <div
                onClick={arrowChange}
                className={`nav-lang ${!state && "slaq"}`}
              >
                Ru
                <Arrow />
              </div> */}
              <div className="nav-icons">
                
                <div className="icon-wrapper">
                <div
                onClick={arrowChange}
                className={`nav-lang ${!state && "slaq"}`}
              >
                Ru
                <Arrow />
              </div>
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
