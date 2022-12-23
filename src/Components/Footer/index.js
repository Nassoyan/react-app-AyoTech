import React from "react";
import "./styles.css";
import LogoFooter from "../../Icons/contentIcons/logofooter";
import { menuArray1, menuArray } from "../../data";
import LogoFooterSmall from "../../Icons/contentIcons/logofootersmall";

function Footer() {
  return (
    <div className="footer">
      <div className=" footer-banner-copy">
        <div className="footer-logo">
          <span className="logofooter"><LogoFooter/></span>
          <span className="logofootersmall"><LogoFooterSmall/></span>
          <span className="footer-logo-text">Double bubble</span>
        </div>
        <div className="copyright-div">
          <span className="copyright">© Double bubble, 2019,</span>
        <span className="copyright">все права защищены</span>
        </div>
        
      </div>
      <div className="footer-banner">
        {menuArray?.map(function (element, index) {
          return (
            <span className="footer-span" key={index}>
               {element.name}
            </span>
          );
        })}
      </div>
      <div className="footer-banner">
        {menuArray1?.map(function (element, index) {
          return (
            <span className="footer-span" key={index}>
              {element.name}
            </span>
          );
        })}
      </div>
      <div className="footer-banner">
        <span className="footer-right-span"> Поддержка</span>
        <span className="footer-right-span"> Вакансии</span>
        <span className="footer-subscribe">Подпишись</span>
        <div className="footer-input-block">
          <input
            className="footer-input"
            placeholder="Введите Ваш e-mail"
            type="text"
          ></input>
          <button className="footer-btn">Отправить</button>
        </div>
      </div>
      <div className="footer-final">
        <span className="footer-final-text">Разработка и продвижение by Good Fellazz</span>
        <span className="footer-final-text2">Политика конфиденциальности
</span>
      </div>
    </div>
  );
}
export default Footer;
