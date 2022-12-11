import "../Content/content.css";
import ArrowRight from "./contentIcons/arrowRight";
import Star from "./contentIcons/stars";
import Vk from "./contentIcons/vk";
import Fb from "./contentIcons/fbIcon";
import Insta from "./contentIcons/insta";
import PlayVideo from "./contentIcons/playVideo";

function Content() {
  const starArray = [<Star />, <Star />, <Star />, <Star />, <Star />];
  return (
    <div className="content-wrapper">
      <div className="content-menu-wrapper">
        <div className="content-menu">
          <span>item</span>
          <span className="content-arrow">
            <ArrowRight />
          </span>
          <span>item</span>
          <span className="content-arrow">
            <ArrowRight />
          </span>
          <span>item</span>
        </div>
      </div>
      <div className="main-content">
        <div className="main-title">
          <div className="restaurant-name">
            <span>Restaurant Name</span>
          </div>
          <div className="second-title">
            <div className="second-tlt-inner">
              <span className="second-tlt-95">9.5</span>
              <div className="stars-container">
                {starArray.map(function (el, index) {
                  return (
                    <div key={index} className="stars">
                      <span className="star-span">{el}</span>
                    </div>
                  );
                })}
              </div>
              <span>56 Views</span>
            </div>
            <div className="second-tlt-inner media-icons">
              <span className="social-icon">
                <Vk />
              </span>
              <span className="social-icon icon-fb">
                <Fb />
              </span>
              <span className="social-icon">
                <Insta />
              </span>
            </div>
            <div className="second-tlt-inner ">
              <div className="play-pause-div">
                <PlayVideo />
              </div>
              <div className="ads-div">
                <span className="ads-span">Watch Panoram</span>
                <span className="ads-span">Restaurant</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
