import "./style.css"
import bali from "../../../Images/bali.png"
import smallBali from "../../../Images/bali-small.png"
import { homePageTitleArray } from "../../../data";
import HomeArrowDown from "../../../Icons/HomePageIcons/arrowDown";
import Header from "../../RestaurantPageComponents/Header";


function HomePageHeader() {


  return (
    <div style={{position: "relative"}}>
      <Header 
      headerHomePage="headerHomePage"
      />
              <img className="bali-img" src={bali} />
              <img className="bali-img-small" src={smallBali} />
              <div className="homepage-header-titles">
                 <div className="homepage-title-container">
                      {homePageTitleArray.map((el, index) => {
                        return <div key={index} className="homepage-title-inner">
                                <div className="homepage-title-inner2">
                                <span className="homepage-title-span">{el.name}</span> 
                                  <span className="homepage-title-span-second">{el.date}</span> 
                                </div>
                             </div>
                      })}
                      <div className="homepage-title-inner-last">
                          <HomeArrowDown/>
                      </div>
                 </div>
              </div>
              
    </div>
  );
}
export default HomePageHeader

{/* <div className="homepage-wrapper">
      <div className="header-wrapper-homepage">
        <div className="header-navigation">
          <div className="logo-wrapper-homepage">
            <Logo />
          </div>
          <div className="nav-block-inner-homepage">
            <div className="nav-block-homepage">
              {array.map(function (el, index) {
                return (
                  <Link className="homepage-link" key={index} to={el===restaurantItem ? "/restaurants" : "/"}>
                    <p className="nav-text-homepage" key={index}>
                      {el.name}
                    </p>
                  </Link>
                );
              })
              } 
            </div>
            <div className="nav-text-right">
              <div className="nav-icons">
                <div className="icon-wrapper">
                  <div onClick={arrowChange}
                       className={`nav-lang ${!state && "slaq "}`}>
                        <div className="language-div">
                          Ru
                       <Arrow />
                        </div>
                       <div className={`lang-anim ${!state && "active" }`}>
                        En Am Ru
                       </div>
                  </div>
                  {icons.map(function (el, index) {
                    return (
                      <div className="icon-div" key={index}>
                        {el}
                      </div>
                    );
                    
                  })}
                </div>
              </div>
            </div>
          </div>
            <div className="logo2">
              <Logo2 />
           </div>
        </div>
      </div> */}


