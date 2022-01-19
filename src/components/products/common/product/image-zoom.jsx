import React, { Component } from "react";
import FrameN from "../../../../icons/FrameN";

export default class ImageZoom extends Component {
  render() {
    const { image } = this.props;
    return (
      <div className="main-image ">
        <div className="item right">
          <img
            alt="zoom"
            src={`${image}`}
            className="img-fluid image_zoom_cls-0 ma-lr"
          />
          <FrameN className="frame" />
        </div>
      </div>
    );
  }
}
