import React, { Component } from "react";
import "../../styles/Sub5.scss";
import globe from "../../assets/globe.svg";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
// import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import TelegramIcon from "@material-ui/icons/Telegram";

class Sub5 extends Component {
  render() {
    return (
      <div className="sub5" id="sub5" data-aos="fade-down">
        <h1>Don’t miss out, Stay updated</h1>
        <p>Connect with us through Social Media Links given Below:</p>
        {/* <div id="input-cont">
          <input id="input" type="text" />
          <button>Subscribe</button>
        </div> */}
        <div style={{ marginTop: 20 }}>
          <LinkedInIcon className="Sub5-icons" />
          <FacebookIcon className="Sub5-icons" />
          <TwitterIcon className="Sub5-icons" />
          <TelegramIcon className="Sub5-icons" />
        </div>
        <img id="globe" src={globe} />
      </div>
    );
  }
}

export default Sub5;
