import React, { Component } from "react";
import { withTranslate } from "react-redux-multilingual";

// Custom Components
import Header from "./headers/header";
import Footer from "./footers/footer";
import ThemeSettings from "./theme-settings";
import { ToastContainer } from "react-toastify";

class App extends Component {
  render() {
    return (
      <div>
        <ToastContainer />
        <Header logoName={"logo.png"} />
        {this.props.children}
        <Footer logoName={"logo.png"} />
        <ThemeSettings />
      </div>
    );
  }
}

export default withTranslate(App);
