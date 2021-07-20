import React, { Component } from "react";
import Navdesign from "../assets/Group14.svg";
import pinkbox from "../assets/pinkbox.svg";
import redbox from "../assets/redbox.svg";
import bluebox from "../assets/bluebox.svg";
import "../styles/NavMenu.scss";

class NavbarMenu extends Component {
  render() {
    return (
      <div id="menuContainer">
        <div id="contents">
          <div className="py-3 px-3 menu-items">
            <div className="menu-items-name">
              <label>
                <a href="#containerSub1">Buy Zenith Coin</a>
              </label>
            </div>
            <div className="menu-items-name">
              <label>
                <a href="#containerSub2">Learn About Zenith Chian</a>
              </label>
            </div>
            <div className="menu-items-name">
              <label>
                <a href="#sub3">Zenith Wallet</a>
              </label>
            </div>
            <div className="menu-items-name">
              <label>
                <a href="#sub5">Connect With Us</a>
              </label>
            </div>
            <div className="menu-items-name">
              <label>
                <a href="#footer">Contact Us</a>
              </label>
            </div>
          </div>
          <img id="nav-blue-box" src={bluebox} />
          <img id="nav-red-box" src={redbox} />
          <img id="nav-pink-box" src={pinkbox} />
          <div className="img-container">
            <img id="group-img" src={Navdesign} />
          </div>
        </div>
      </div>
    );
  }
}

export default NavbarMenu;
