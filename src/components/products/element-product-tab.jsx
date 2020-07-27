import React, { Component } from "react";
import { connect } from "react-redux";

// import Custom Components
import Breadcrumb from "../breadcrumb";
import { getVisibleproducts } from "../../services";
import { addToCart, addToCompare, addToWishlist } from "../../actions/indexO";
import SpecialProduct from "../../layouts/common/products";

class ElementProductTab extends Component {
  render() {
    const {
      products,
      addToCart,
      symbol,
      addToWishlist,
      addToCompare,
    } = this.props;
    return (
      <div>
        <Breadcrumb parent={"Elements"} title={"product Slider"} />

        <SpecialProduct />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  products: getVisibleproducts(state.data, state.filters),
  symbol: state.data.symbol,
});

export default connect(
  mapStateToProps,
  {
    addToCart,
    addToWishlist,
    addToCompare,
  }
)(ElementProductTab);
