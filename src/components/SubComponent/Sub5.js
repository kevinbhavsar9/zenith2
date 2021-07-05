import React, { Component } from "react";
import "../../styles/Sub5.scss";
import globe from "../../assets/globe.svg";

class Sub5 extends Component {
  render() {
    return (
      <div className="sub5">
        <h1>Don’t miss out, Stay updated</h1>
        <p>
          Sign up for updates and market news. Subscribe to our newsletter and
          receive update about ICOs and crypto tips.
        </p>
        <div id="input-cont">
          <input id="input" type="text" />
          <button>Subscribe</button>
        </div>
        <img id="globe" src={globe} />
      </div>
    );
  }
}

export default Sub5;
