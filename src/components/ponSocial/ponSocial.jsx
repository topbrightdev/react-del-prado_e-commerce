import React, { Component } from "react";
import { withTranslate } from "react-redux-multilingual";

class PonSocial extends Component {
  render() {
    return (
      <div className="pon-social">
        <div className="social-item">
          <a href="https://facebook/une">
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/pon/facebook.jpg`}
              className="img-fluid"
              alt=""
            />
          </a>
        </div>
        <div className="social-item">
          <a href="https://www.instagram.com/une.tw/">
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/pon/instagram.jpg`}
              className="img-fluid"
              alt=""
            />
          </a>
        </div>

        <div className="social-item">
          <a href="https://www.youtube.com/channel/UCPWxEHIZE6oAFHYotnFPrKQ">
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/pon/youtube.jpg`}
              className="img-fluid"
              alt=""
            />
          </a>
        </div>
      </div>
    );
  }
}

export default withTranslate(PonSocial);
