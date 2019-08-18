import React, {Component} from "react";
import "../css/layout/SideBar.css"



class SideBar extends Component{
    render(){
        return(
            <div className="side-drawer1">
                <ul>
                    <li>
                        <div onClick={this.props.drawerClick}>
                            hello
                        </div>
                    </li>
                    {/* <li>
            <a href="/">user</a>
          </li> */}
                </ul>
            </div>
        )
    }
}

export default SideBar;