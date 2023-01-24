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
import { popUp } from "../../../data";


function Header(props) {

  const {headerHomePage} = props
  
  const [state, setState] = useState(false);
  function arrowChange() {
    setState(!state);
  }

  const [openSideBar, setOpenSideBar] = useState(false);
  function openMenuBar() {
    setOpenSideBar(true);
    document.body.style.overflow = "hidden"
  }
  function closeMenuBar() {
    setOpenSideBar(false);
    document.body.style.overflow = "visible"
  }

  const icons = [<Heart />, <Box />, <Search />, <Plus />, <Human />];
  return (
    <div>
      <div className={`header-wrapper ${headerHomePage}`}>
        <div className={`header-navigation `}>
          <div className="logo-wrapper">
            <Link to="/">
              <Logo />
            </Link>
          </div>
          <div className="nav-block-inner">
            <div className="nav-block">
              {array.map(function (el, index) {
                return (
                  <Link className="header-link" key={index} to={el.link}>
                    <p className="nav-text-homepage" key={index}>
                      {el.name}
                    </p>
                  </Link>
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
          <div onClick={openMenuBar} className="logo2">
            <Logo2/>
          </div>
        </div>
      </div>
     {openSideBar && 
     <div className="sidebar-wrapper">
          <div className={openSideBar ? "sidebar-container" : "sidebar-activer"}>
            <span className="sidebar-close" onClick={closeMenuBar}>&times;</span>
              <div className="sidebar-ul">
              {popUp.map((el, index) => {
                return (
                  <div className="sidebar-div">
                    <ul key={index}>
                     <li>
                       <a>{el.name}</a>
                     </li>
                  </ul>
                  </div>)
              })}
              </div>
          </div>
      </div>}
    </div>
  );
}

export default Header;


// {openSideBar && <div className="sideBar-wrapper" >

//       <div className={openSideBar ? "mySideBarActive" : "mySideBar"}>
//                   <a onClick={closeMenuBar} className="closebtn">&times;</a>
//                   <div className="sideBar-a">
//                       <a>About</a>
//                       <a>About</a>
//                       <a>About</a>
//                       <a>About</a>
//                       <a>About</a>
//                       <a>About</a>
//                       <a>About</a>
//                       <a>About</a>
//                       <a>About</a>
//                       <a>About</a>
//                   </div>
                  
//           </div>
//       </div>}