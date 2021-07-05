import React, { Component } from "react";
import Navbar from "./components/Navabar";
import NavMenu from "./components/NavbarMenu";
import Footer from "./components/Footer";
import Main from "./components/Main";

class App extends Component {
  constructor() {
    super();
    this.state = {
      NavMenu: false,
    };
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
