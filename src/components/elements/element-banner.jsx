import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { withTranslate } from "react-redux-multilingual";

class Banner extends Component {
  newTo = (key) => {
    return {
      pathname: `${process.env.PUBLIC_URL}/no-sidebar/collection/`,
      category: key,
    };
  };

  render() {
    return (
      <div className="last-image">
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/pon/workshop.jpg`}
          className="img-fluid"
          alt=""
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  state: state,
});

export default connect(
  mapStateToProps,
  {}
)(withTranslate(Banner));
