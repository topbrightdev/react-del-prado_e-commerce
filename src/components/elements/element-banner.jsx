import React, { Component } from "react";
import { Link } from "react-router-dom";

class Banner extends Component {
  newTo = (key) => {
    return {
      pathname: `${process.env.PUBLIC_URL}/no-sidebar/collection/`,
      category: key,
    };
  };

  render() {
    return (
      <div className="top-banner-wrapper2">
        <Link to={this.newTo("Drinks")}>
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/mega-menu/2.jpeg`}
            className="img-fluid"
            alt=""
          />
        </Link>
      </div>
    );
  }
}

export default Banner;
