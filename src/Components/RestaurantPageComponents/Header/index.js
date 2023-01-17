import React, { useState } from "react";
import { Link } from "react-router-dom";


import array from "../../../data";
import Arrow from "../../../Icons/HeaderIcons/arrow";
import Box from "../../../Icons/HeaderIcons/box";
import Heart from "../../../Icons/HeaderIcons/heart";
import Human from "../../../Icons/HeaderIcons/human";
import Logo from "../../../Icons/HeaderIcons/logo";
import Logo2 from "../../../Icons/HeaderIcons/logo2";
import Plus from "../../../Icons/HeaderIcons/plusSvg";
import Search from "../../../Icons/HeaderIcons/search";
import "../Header/style.css";
// import Logo from "../../Icons/HeaderIcons/logo";
// import array from "../../data";
// import Logo2 from "../../Icons/HeaderIcons/logo2";
// import Arrow from "../../Icons/HeaderIcons/arrow";
// import Box from "../../Icons/HeaderIcons/box";
// import Heart from "../../Icons/HeaderIcons/heart";
// import Plus from "../../Icons/HeaderIcons/plusSvg";
// import Search from "../../Icons/HeaderIcons/search";
// import Human from "../../Icons/HeaderIcons/human";

function Header(props) {
  const [state, setState] = useState(false);
  function arrowChange() {
    setState(!state);
  }

  const icons = [<Heart />, <Box />, <Search />, <Plus />, <Human />];
  return (
    <div>
      <div className="header-wrapper">
        <div className="header-navigation">
          <div className="logo-wrapper">
            <Link to="/">
              <Logo />
            </Link>
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
              <div className="nav-icons">
                <div className="icon-wrapper">
                  <div onClick={arrowChange}
                       className={`nav-lang ${!state && "slaq "}`}>
                        <div className="language-div">
                          Ru
                       <Arrow />
                        </div>
                       
                       <div className={`lang-anim ${!state && "active" }`}>
                        En Am Ru
                       </div>
                       
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
