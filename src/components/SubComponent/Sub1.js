import React, { Component } from "react";
import sub1 from "../../assets/sub1.svg";
import key from "../../assets/key.svg";
import clock from "../../assets/speed.svg";
import hand from "../../assets/clocke.svg";
import "../../styles/Sub1.scss";

class Sub1 extends Component {
  render() {
    return (
      <div className="containerSub1">
        <div className="child1">
          <h1>Access the Power of blockchain</h1>
          <p>
            The highly the not having with lively. Our up with ran go her it
            gloomy the back, though however projected not for six with then,
            trusted as concepts belt.
          </p>
          <div id="btn-cont">
            <div>
              <img src={key} />
              <span>Access</span>
            </div>
            <div>
              <img src={clock} />
              <span>Speed</span>
            </div>
            <div>
              <img src={hand} />
              <span>Certainity</span>
            </div>
          </div>
          <button>Buy Zenith Coin Now</button>
        </div>
        <div className="child2">
          <img src={sub1} />
        </div>
      </div>
    );
  }
}

export default Sub1;
