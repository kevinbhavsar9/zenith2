import React, { Component } from "react";

import planet from "../../assets/planet.svg";
import arrow from "../../assets/arrow.svg";
import Rectangle from "../../assets/Rectangle.svg";
import "../../styles/Sub2.scss";
class Sub2 extends Component {
  render() {
    return (
      <div id="containerSub2" data-aos="fade-down">
        <div id="child1">
          <img id="rect" src={Rectangle} />
          <h1>Powering up everything with a hybrid blockchain</h1>
          <p>
            The highly the not having with lively. Our up with ran go her it
            gloomy the back, though however projected not for six with then,
            trusted as concepts belt.
          </p>
          <div id="button">
            <button>Learn More About It</button>
            <img src={arrow} />
          </div>
        </div>
        <div id="child2" className="rotateIn">
          <img src={planet} />
        </div>
      </div>
    );
  }
}

export default Sub2;
