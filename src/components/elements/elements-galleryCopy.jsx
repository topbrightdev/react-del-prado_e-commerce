import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { withTranslate } from "react-redux-multilingual";
import Frame from "../../icons/Frame";

class Gallery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lastImages: `${process.env.PUBLIC_URL}/assets/images/mega-menu/2.jpeg`,
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
    console.log(this.props);
    if (!this.state.ready) {
      console.log(this.props.lastImages);
      this.setState(() => {
        return { lastImages: this.props.lastImages.pictures[0], ready: true };
      });
    }
  }

  render() {
    return (
      <div className="gallery">
        <div className="frame">
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/pon/workshop.jpg`}
            className="image"
            alt=""
          />
          <Frame />
        </div>
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
)(withTranslate(Gallery));
