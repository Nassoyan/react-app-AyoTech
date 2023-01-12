import "./content.css";
import ArrowRight from "../../../../Icons/contentIcons/arrowRight";
import ContentLeft from "../ContentLeft";
import About from "../ContentAbout";
// import Feedback from "../../../BannerFeedback";
import RegisterField from "../RegisterContent";
import SLiderBubbleVideo from "../SliderVideo";
import SLiderBubblePhoto from "../SliderPhoto";
import Feedback from "../BannerFeedback";

function Content() {
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
        <div className="stroke"></div>
            <ContentLeft />
            <About/>
            <Feedback/>
            <RegisterField />
            <SLiderBubbleVideo /> 
            <SLiderBubblePhoto />
        </div>
  );
}

export default Content;
