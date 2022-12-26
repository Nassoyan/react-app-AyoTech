import "./style.css";
import React from "react";

function ProgressBar(props) {
  return (
    <div className="progress-bar">
        <div className="progress-bar-text">
            <span>Кухня</span>
            <span>Обслуживание</span>
            <span>Цена/качесво</span>
        </div>
        <div className="progress-bar-container">

      <div className="progress-bar-box">
        <progress max={props.max} value={props.value}></progress>
        <span className="progress-bar-span">{props.value}%</span>
      </div>
      <div className="progress-bar-box">
        <progress max={props.max} value={props.value}></progress>
        <span className="progress-bar-span">{props.value}%</span>
      </div>
      <div className="progress-bar-box">
        <progress max={props.max} value={props.value}></progress>
        <span className="progress-bar-span">{props.value}%</span>
      </div>
        </div>
    </div>
  );
}

export default ProgressBar;
