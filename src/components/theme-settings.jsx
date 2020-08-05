import React, { Component } from "react";
import { withTranslate } from "react-redux-multilingual";
import { ToastContainer } from "react-toastify";

import { SlideUpDown } from "../services/script";

class ThemeSettings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      divName: "RTL",
      themeLayout: false,
    };
  }

  /*=====================
     Tap on Top
     ==========================*/
  componentWillMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  handleScroll = () => {
    if (document.documentElement.scrollTop > 600) {
      document.querySelector(".tap-top").style = "display: block";
    } else {
      document.querySelector(".tap-top").style = "display: none";
    }
  };
  clickToTop() {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  }

  componentDidMount() {
    SlideUpDown("setting-title");
  }

  openSetting = () => {
    document.getElementById("setting_box").classList.add("open-setting");
    document.getElementById("setting-icon").classList.add("open-icon");
  };
  closeSetting = () => {
    document.getElementById("setting_box").classList.remove("open-setting");
    document.getElementById("setting-icon").classList.remove("open-icon");
  };

  changeThemeLayout() {
    this.setState({
      themeLayout: !this.state.themeLayout,
    });
  }

  render() {
    const { translate } = this.props;

    if (this.state.themeLayout) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
    let tap_to_top = { display: "none" };
    {
      translate("");
    }

    return (
      <div className="theme-settings">
        <button className="invisible-button" onClick={() => this.openSetting()}>
          <div className="setting-sidebar" id="setting-icon">
            <div>
              <i className="fa fa-cog" aria-hidden="true" />
            </div>
          </div>
        </button>

        <div id="setting_box" className="setting-box">
          <button
            className="invisible-button"
            title="close"
            className="overlay"
            onClick={() => this.closeSetting()}
          >
            {translate("close")}
          </button>
          <div className="setting_box_body">
            <div onClick={() => this.closeSetting()}>
              <div className="sidebar-back text-left">
                <i className="fa fa-angle-left pr-2" aria-hidden="true" /> Back
              </div>
            </div>

            <div className="buy_btn">
              <a
                href={`${process.env.PUBLIC_URL}/pages/register`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-block purchase_btn"
              >
                <i className="fa fa-shopping-cart" aria-hidden="true" />{" "}
                {translate("signup")}
              </a>
              <a
                href={`${process.env.PUBLIC_URL}/pages/login`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-block purchase_btn"
              >
                {translate("login")}
              </a>

              <a
                href={`${process.env.PUBLIC_URL}/pages/forget-password`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-block purchase_btn"
              >
                {translate("forget_password")}
              </a>
            </div>
          </div>
        </div>

        <div className="sidebar-btn dark-light-btn">
          <div className="dark-light">
            <div
              className="theme-layout-version"
              onClick={() => this.changeThemeLayout()}
            >
              {this.state.themeLayout ? "Light" : "Dark"}
            </div>
          </div>
        </div>
        <div className="tap-top" onClick={this.clickToTop} style={tap_to_top}>
          <div>
            <i className="fa fa-angle-double-up" />
          </div>
        </div>
        <ToastContainer />
      </div>
    );
  }
}

export default withTranslate(ThemeSettings);
