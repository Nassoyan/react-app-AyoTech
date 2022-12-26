import React from "react";
import "./style.css";
import { facilities } from "../../data";

function About() {
  return (
    <div className="about-wrapper">
      <div className="container-about">
        <h1>About Restaurant</h1>
        <span className="span-about-restaurant">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim. Donec pede justo, fringilla vel, aliquet
          nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a,
          venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.
          Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Nulla
          consequat massa quis enim.
        </span>
      </div>

      <div className="facilities">
        <span className="span-facilities">Facilities</span>
        <div className="facilities-items">
          <ul className="facilities-items-ul">
            {facilities.map((el, index) => {
              return (
                <li key={index} className="facilities-li">
                  {el.name}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="kitchen-container">
        <div className="kitchen-text kitchen-city">
          <span className="span-kitchen">Kitchen</span>
          <span>European, Russian, Eastern European</span>
        </div>
        <div className="kitchen-text kitchen-menu">
          <span className="span-menu">Специальное меню</span>
          <span>
            Подходит для вегетарианцев, Для веганов, Безглютеновые блюда
          </span>
        </div>
        <div className="work-time">
          <span className="span-worktime">Время работы:</span> <span className="worktime-span">вт-вс с 22:00 до последнего гостя</span>
        </div>
      </div>
      
    </div>
  );
}

export default About;
