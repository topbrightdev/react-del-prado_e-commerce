import React, {Component} from "react";
import {withTranslate} from "react-redux-multilingual";

// Custom Components
import Header from "./headers/header";
import Footer from "./footers/footer";

class App extends Component {
  render() {
    return (
      <div>
        <Header logoName={"logo.png"} />
        {this.props.children}
        <Footer logoName={"logo.png"} />
      </div>
    );
  }
}

export default withTranslate(App);
