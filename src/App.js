import React, {Component} from 'react';
import Header from "./layout/Header"
import SideBar from "./layout/SideBar";
import './App.css';
import SideDrawer from "./layout/SideDrawer";


class App extends Component {

    state = {
        sideDrawerOpen: true
    };
    drawerToggleClickHandeler = () => {
        console.log("this is clicked");
        this.setState(prevState => {
            return {sideDrawerOpen: !prevState.sideDrawerOpen};
        });
    };

    render() {
        return (
            <div className="App" style={{height: "100%"}}>
                <Header/>
                <SideBar drawerClick={this.drawerToggleClickHandeler}/>
                <SideDrawer show={this.state.sideDrawerOpen}/>
            </div>
        );
    }
}

export default App;
