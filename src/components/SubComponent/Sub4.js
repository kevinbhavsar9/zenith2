import React, { Component } from "react";
import Rect from "../../assets/Rectangle.svg";
import question from "../../assets/question.svg";
import "../../styles/Sub4.scss";

class Sub4 extends Component {
  render() {
    return (
      <div id="sub4">
        <div id="sub4-child1">
          <img src={Rect} />
          <h1>Frequently Asked Questions</h1>
          <p>
            Attention in when in just something bread not hundred well, muff
            value emerge on the known officers.
          </p>
          <div className="cardw"></div>
          <div className="cardw"></div>
          <div className="cardw"></div>
          <div className="cardw"></div>
          <div className="cardw"></div>
        </div>
        <div id="sub4-child2">
          <img src={question} />
        </div>
      </div>
    );
  }
}

export default Sub4;
