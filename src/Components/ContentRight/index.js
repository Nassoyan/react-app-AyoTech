import React from "react";
import { useState } from "react";
import "./style.css";
import PlayVideo from "../../Icons/contentIcons/playVideo";
import Dollar from "../../Icons/contentIcons/dollar";
import LoveIcon from "../../Icons/contentIcons/loveIcon";
import Geo from "../../Icons/contentIcons/geo";
import Globe from "../../Icons/contentIcons/globe";
import Mobile from "../../Icons/Cont-rightIcons/mobile";
import VkIcon from "../../Icons/Cont-rightIcons/vk";
import Fb from "../../Icons/Cont-rightIcons/fb";
import Insta from "../../Icons/Cont-rightIcons/Insta";
import Message from "../../Icons/Cont-rightIcons/message";
import Qr from "../../Icons/Cont-rightIcons/Qr";
import RingBell from "../../Icons/Cont-rightIcons/RingBell";
import Bill from "../../Icons/Cont-rightIcons/Bill";
import Forks from "../../Icons/Cont-rightIcons/forks";
import bannerImg from "../../Images/bannerImg.png";
function ContentRight() {
  const mediaArray = [<VkIcon />, <Fb />, <Insta />, <Insta />];
  const [state, setState] = useState(false);
  function changeColor() {
    setState(!state);
  }
  return (
    <div className="content-right">
      <div className="content-right-title">
          <PlayVideo />
          <span className="pano-span">Панорама ресторана</span>
      </div>
      

      <div className="content-right-main">
        <div className="content-right-main-inner">
          <div className="content-right-price">
            <div className="content-dollars">
              <span className="num">50</span>
              <span className="dollar">
                <Dollar />
              </span>
              <div className="alcohol-div">
                <span className="alcohol">средний чек</span>
                <span className="alcohol">без алколголя</span>
              </div>
            </div>
            <span
              onClick={changeColor}
              className={`loveIcon ${state && "color"}`}
            >
              <LoveIcon  />
            </span>
          </div>
          <div className="content-right-address">
            <span className="geo">
              <Geo />
            </span>
            <span className="indonesia">61JI. Legian, Кута, Индонезия</span>
          </div>
          <div className="karta">
            <a className="karta-text">Посмотреть на карте</a>
          </div>

          <div className="resp-content-right-mobile">
            <span className="span-mobile">
              <Mobile/>
            </span>
        
        <span>+374 94 340 001</span>
          </div>

          <div className="globe">
              <Globe />
            <a className="sitename">sitename.com</a>
          </div>

          <div className="media-icon-hidden">
            <div className="media-div"><VkIcon/></div>
            <div className="media-div"><Fb/></div>
            <div className="media-div"><Insta/></div>
          
          </div>
          <div className="content-right-logos">
            <div className="right-logo-div">
              <span className="mobile-svg">
                <Mobile />
              </span>
              {mediaArray.map(function (el, index) {
                return (
                  <span key={index} className="logoMedia">
                    {el}
                  </span>
                );
              })}
              <span className="message-svg">
                <Message />
              </span>
            </div>
          </div>
          <div className="content-qr">
            <Qr />
            <span className="qr-span">Сканировать QR-code</span>
          </div>
          <div className="content-qr-container">
            <div className="waitress-div">
              <RingBell/>
              <span className="waitress">Официант</span>
            </div>
          </div>
          <div className="content-qr-container">
            <div className="waitress-div">
              <Bill/>
              <span className="waitress">Оплатить</span>
            </div>
          </div>
          
        </div>
      </div>
        <div className="fork-menu-div">
          <span className="fork-item"><Forks/> Открыть меню  </span>
          <span className="fork-item"><Forks/> Открыть меню  </span>
        </div>

        <div className="kitchen-container-copy">
        <div className="kitchen-text kitchen-city">
            <h2>Kitchen</h2>
            <span>European, Russian, Eastern European</span>
        </div>
        <div className="kitchen-text kitchen-menu">
              <h3>Специальное меню</h3>
              <span>Подходит для вегетарианцев, Для веганов, Безглютеновые блюда</span>
                    
        </div>
        <div className="work-time">
             <h4>Время работы:</h4> <span>вт-вс с 22:00 до последнего гостя</span>
        </div>
      

        </div>

        <div className="bannerImg-copy">
        <img  src={bannerImg} />
        <p>Камера в заведении</p>
      </div>
    </div>
  );
}

export default ContentRight;
