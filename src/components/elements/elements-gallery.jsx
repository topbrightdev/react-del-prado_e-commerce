import React, { Component } from "react";
import { connect } from "react-redux";

import { addToCart, addToWishlist, addToCompare } from "../../actions/indexO";
import Frame from "../../icons/Frame";
import { Link } from "react-router-dom";

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
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
      if (this.props.lastImages) {
        this.setState(() => {
          return { lastImages: this.props.lastImages.pictures[0], ready: true };
        });
      }
    }
  }

  render() {
    const { items } = this.props;

    if (items) {
      var pieces = [];
      items.map((item) => {
        var flag = null;
        item.categories.map((c) => {
          if (c.name === "Pieces") {
            flag = true;
          }
        });

        if (flag) {
          pieces.push(item);
        }
      });
    }

    return (
      <div className="gallery">
        {pieces.map((product, index) =>
          index % 2 == 0 ? (
            <Link
              key={index + "A"}
              to={`${process.env.PUBLIC_URL}/left-sidebar/product/${
                product.id
              }`}
            >
              <div key={index} className="item left">
                <img src={product.pictures[0]} alt="" />
                <Frame className="frame" />
              </div>
            </Link>
          ) : (
            <Link
              key={index + "A"}
              to={`${process.env.PUBLIC_URL}/left-sidebar/product/${
                product.id
              }`}
            >
              <div key={index} className="item right">
                <img src={product.pictures[0]} alt="" />
                <Frame className="frame" />
              </div>
            </Link>
          )
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  items: state.data.products,
  symbol: state.data.symbol,
});

export default connect(
  mapStateToProps,
  { addToCart, addToWishlist, addToCompare }
)(Gallery);
