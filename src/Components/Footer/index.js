import React from "react";
import "./styles.css";
import LogoFooter from "../../Icons/contentIcons/logofooter";
import { menuArray1, menuArray } from "../../data";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-banner">
        <div className="footer-logo">
          <LogoFooter />
          <span className="footer-logo-text">Double bubble</span>
        </div>
        <span className="copyright">© Double bubble, 2019,</span>
        <span className="copyright">все права защищены</span>
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
        <div>
          <input
            className="footer-input"
            placeholder="Введите Ваш e-mail"
            type="text"
          ></input>
          <button className="footer-btn">Отправить</button>
        </div>
      </div>
    </div>
  );
}
export default Footer;
