import React, { Component } from "react";
import Navbar from "./components/Navabar";
import AOS from "aos";
import "aos/dist/aos.css";
import NavMenu from "./components/NavbarMenu";
import Footer from "./components/Footer";
import Main from "./components/Main";
import "../src/styles/mobile.scss";

class App extends Component {
  constructor() {
    super();
    this.state = {
      NavMenu: false,
    };
  }
  componentDidMount() {
    // or simply just AOS.init();
    AOS.init({
      // initialise with other settings
      duration: 2000,
    });
  }
  handleChangeState = (val) => {
    this.setState({ ...this.state, NavMenu: val });
  };
  render() {
    return (
      <div className="App">
        {this.state.NavMenu && <NavMenu />}
        <Navbar
          NavMenu={this.state}
          handleChangeState={this.handleChangeState}
        />
        <Main />
        <div className="max-width pos-rel">
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
