import "../Content/content.css";
import ArrowRight from "../../Icons/contentIcons/arrowRight";
import ContentLeft from "../ContentLeft";

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
    </div>
  );
}

export default Content;
