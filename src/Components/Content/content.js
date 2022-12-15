import "../Content/content.css";
import ArrowRight from "../../Icons/contentIcons/arrowRight";
import ContentLeft from "../ContentLeft";
import About from "../ContentAbout";
import Feedback from "../BannerFeedback";
import RegisterField from "../RegisterContent";

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

      <ContentLeft />
      <About/>
      <Feedback/>
      <RegisterField />
    </div>
  );
}

export default Content;
