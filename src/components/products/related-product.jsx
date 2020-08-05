import React, { Component } from "react";
import { connect } from "react-redux";
import { withTranslate } from "react-redux-multilingual";

import { getBestSeller } from "../../services";
import { addToCart, addToWishlist, addToCompare } from "../../actions/indexO";
import ProductItem from "../layouts/common/product-item";

class RelatedProduct extends Component {
  render() {
    const { translate } = this.props;

    const {
      items,
      symbol,
      addToCart,
      addToWishlist,
      addToCompare,
    } = this.props;

    return (
      <section className="section-b-space">
        <div className="container">
          <div className="row">
            <div className="col-12 product-related">
              <h2>{translate("related_products")}</h2>
            </div>
          </div>
          <div className="row search-product">
            {items.slice(0, 6).map((product, index) => (
              <div key={index} className="col-xl-2 col-md-4 col-sm-6">
                <ProductItem
                  product={product}
                  symbol={symbol}
                  onAddToCompareClicked={() => addToCompare(product)}
                  onAddToWishlistClicked={() => addToWishlist(product)}
                  onAddToCartClicked={() => addToCart(product, 1)}
                  key={index}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    items: getBestSeller(state.data.products),
    symbol: state.data.symbol,
  };
}

export default connect(
  mapStateToProps,
  {
    addToCart,
    addToWishlist,
    addToCompare,
  }
)(withTranslate(RelatedProduct));
