import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { withTranslate } from "react-redux-multilingual";

class LastImages extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lastImages: `${process.env.PUBLIC_URL}/assets/images/pon/hug.jpg`,
      ready: null,
    };
  }
  newTo = (key) => {
    return {
      pathname: `${process.env.PUBLIC_URL}/no-sidebar/collection/`,
      category: key,
    };
  };

  componentDidUpdate() {
    if (!this.state.ready) {
      this.setState(() => {
        return { lastImages: this.props.lastImages.pictures[0], ready: true };
      });
    }
  }

  render() {
    return (
      <div className="last-image">
        <img src={this.state.lastImages} className="image" alt="" />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  lastImages: state.extras.extras[1],
});

export default connect(
  mapStateToProps,
  {}
)(withTranslate(LastImages));
