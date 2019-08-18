import React, {Component} from 'react';
import "../css/layout/Header.css"
import profile from "../image/profile.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

class Header extends Component {
    render() {
        return (
            <div className="container_one">
                <div className="container_two">
                    <h3>Insight<span style={{color:"red"}}>360</span></h3>
                    <div className="spacer"/>
                    <div className="searchBox">
                        <input type="text" name="" id=""/>
                    </div>

                        <div className="spacer"/>
                            <ul>
                                <li>home</li>
                                <li>home</li>
                                <li><div><img className="profileImg" src={profile} /></div> </li>
                               <li><FontAwesomeIcon style={{ fontSize: "2rem" }} icon={faBell} /></li>
                            </ul>
                </div>
            </div>
        );
    }
}

export default Header;