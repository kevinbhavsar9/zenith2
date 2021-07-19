import React, { Component } from "react";
import "../styles/Footer.scss";
import Logo from "../assets/logo-primary.svg";
export default class Footer extends Component {
  render() {
    return (
      <div className="container py-8 text-dark footer" style={{ padding: 70 }}>
        <div className="footer-row">
          <div className="footer-col-1">
            <div className="footer-logo-group text-primary">
              <img src={Logo} alt="" />
              <h2
                className="ps-3"
                style={{
                  fontWeight: "400",
                  color: "#268FF1",
                  fontSize: 44,
                  paddingLeft: 20,
                }}
              >
                Zenith Chain
              </h2>
            </div>
            <p>Contact TipStack Inc. regarding product and its distribution.</p>
            <p>Email: info@zenithchain.co</p>
            <p>Address: 651 N Broad St Suite 206 Middletown, DE 19709</p>
          </div>
          <div className="footer-col-2">
            <div className="footer-link-col">
              <h3>Individuals</h3>
              <a href="https://zenithchian.co">
                <p>Zenith Chain (ZTC)</p>
              </a>
              {/* <a href="https://docs.zenithchain.co">
                <p>Zenith Wallet</p>
              </a> */}
              <a href="https://docs.zenithchain.co">
                <p>Zenith Exchange</p>
              </a>
              <a href="https://docs.zenithchain.co/Wallet">
                <p>Connect to Metamask</p>
              </a>
            </div>
            <div className="footer-link-col">
              <h3>For Businesses</h3>
              <a href="https://docs.zenithchain.co">
                <p>Zenith Exchange API</p>
              </a>
              <a href="https://docs.zenithchain.co/Wallet">
                <p>Zenith Wallet API</p>
              </a>
            </div>
            <div className="footer-link-col">
              <h3>For Developer</h3>
              <a href="https://docs.zenithchain.co">
                <p>Zenith Chain API</p>
              </a>
              <a href="https://docs.zenithchain.co">
                <p>Documentation</p>
              </a>
              <a href="https://docs.zenithchain.co/Contract">
                <p>Smart Contract Specs.</p>
              </a>
              <a href="https://docs.zenithchain.co/Wallet">
                <p>Connect to Metamask</p>
              </a>
              <a href="https://docs.zenithchain.co/Token">
                <p>ZRC Token Specifications</p>
              </a>
            </div>
          </div>
        </div>
        <div className="px-8 pt-6" style={{ marginTop: 141, marginBottom: 76 }}>
          <hr className="hr" />
        </div>
        <p className="bold text-center pt-4 m-0" id="copyrights">
          &copy; 2021 All right researved by Zenith Chain and its owner TipStack
          Inc.
        </p>

        {/*
         *
         * Absolute Items
         *
         *  */}
        <svg
          className="red-block"
          width="36"
          height="31"
          viewBox="0 0 36 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.4631 15.3259L25.3669 0.368652L8.41182 1.11214L0.639439 16.0637L9.69649 30.4088L26.6516 29.6653L17.4631 15.3259Z"
            fill="#FF7171"
          />
          <path
            d="M0.639439 16.0637L8.41182 1.11214L25.3669 0.368652L17.4631 15.3259L0.639439 16.0637Z"
            fill="#FF7171"
          />
          <path
            d="M9.69656 30.4092L0.639512 16.064L17.4632 15.3263L26.6517 29.6657L9.69656 30.4092Z"
            fill="#D32F2F"
          />
          <path
            d="M17.4634 15.3266L25.3672 0.36935L34.4185 14.5832L26.6519 29.666L17.4634 15.3266Z"
            fill="#FF7171"
          />
          <path
            d="M17.4631 15.3259L25.3669 0.368652L24.5783 0.403233L16.806 15.3548L25.863 29.6999L26.6516 29.6653L17.4631 15.3259Z"
            fill="white"
          />
        </svg>
        <svg
          className="pink-block"
          width="36"
          height="31"
          viewBox="0 0 36 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.4631 15.3259L25.3669 0.368652L8.41182 1.11214L0.639439 16.0637L9.69649 30.4088L26.6516 29.6653L17.4631 15.3259Z"
            fill="#E842CD"
          />
          <path
            d="M0.639439 16.0637L8.41182 1.11214L25.3669 0.368652L17.4631 15.3259L0.639439 16.0637Z"
            fill="#E842CD"
          />
          <path
            d="M9.69656 30.4092L0.639512 16.064L17.4632 15.3263L26.6517 29.6657L9.69656 30.4092Z"
            fill="#D02FD3"
          />
          <path
            d="M17.4634 15.3266L25.3672 0.36935L34.4185 14.5832L26.6519 29.666L17.4634 15.3266Z"
            fill="#E842CD"
          />
          <path
            d="M17.4631 15.3259L25.3669 0.368652L24.5783 0.403233L16.806 15.3548L25.863 29.6999L26.6516 29.6653L17.4631 15.3259Z"
            fill="white"
          />
        </svg>
        <svg
          className="green-block"
          width="36"
          height="31"
          viewBox="0 0 36 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.4631 15.3259L25.3669 0.368652L8.41182 1.11214L0.639439 16.0637L9.69649 30.4088L26.6516 29.6653L17.4631 15.3259Z"
            fill="#65FF74"
          />
          <path
            d="M0.639439 16.0637L8.41182 1.11214L25.3669 0.368652L17.4631 15.3259L0.639439 16.0637Z"
            fill="#65FF74"
          />
          <path
            d="M9.69644 30.4092L0.63939 16.064L17.4631 15.3263L26.6516 29.6657L9.69644 30.4092Z"
            fill="#27A242"
          />
          <path
            d="M17.4634 15.3266L25.3672 0.36935L34.4185 14.5832L26.6519 29.666L17.4634 15.3266Z"
            fill="#65FF74"
          />
          <path
            d="M17.4631 15.3259L25.3669 0.368652L24.5783 0.403233L16.806 15.3548L25.863 29.6999L26.6516 29.6653L17.4631 15.3259Z"
            fill="white"
          />
        </svg>
        <svg
          className="blue-block"
          width="36"
          height="31"
          viewBox="0 0 36 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.4631 15.3259L25.3669 0.368652L8.41182 1.11214L0.639439 16.0637L9.69649 30.4088L26.6516 29.6653L17.4631 15.3259Z"
            fill="#42E8E0"
          />
          <path
            d="M0.639439 16.0637L8.41182 1.11214L25.3669 0.368652L17.4631 15.3259L0.639439 16.0637Z"
            fill="#42E8E0"
          />
          <path
            d="M9.69644 30.4092L0.63939 16.064L17.4631 15.3263L26.6516 29.6657L9.69644 30.4092Z"
            fill="#2FD3C7"
          />
          <path
            d="M17.4634 15.3266L25.3672 0.36935L34.4185 14.5832L26.6519 29.666L17.4634 15.3266Z"
            fill="#42E8E0"
          />
          <path
            d="M17.4631 15.3259L25.3669 0.368652L24.5783 0.403233L16.806 15.3548L25.863 29.6999L26.6516 29.6653L17.4631 15.3259Z"
            fill="white"
          />
        </svg>
      </div>
    );
  }
}
