import "./style.css"
import { popUp } from "../../../data"
import PopUp from "../../../Icons/popUp"

function SideBar(props) {

 return (
    <div className="sidebar-wrapper">
        <div className="sidebar-container" >
            <div onClick={props.handleClose} className="closetag"></div>
            {popUp.map((el, index) => {
                return (
                    <ul className="sideBar-ul" key={index}>
                        <li className="sideBar-li">{el.name}</li>
                    </ul>
                )
            })}
            <div className="popUp-lang">
                <span>En</span>
                <span>
                    <PopUp/>
                </span>
            </div>
        </div>
    </div>
 )
}

export default SideBar