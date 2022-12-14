import React from "react";
import "./style.css"

function About() {
    return (
      <div className="about-wrapper">
        <div className="container-about">
          <h1>About Restaurant</h1>
          <span>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Nulla consequat massa quis enim.</span>
        </div>
        <div className="kitchen-container">
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
      </div>
    )
}

export default About