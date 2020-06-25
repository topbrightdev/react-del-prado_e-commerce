import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";

import {getTotal, getCartProducts} from "../../reducers/index";
import {addToCart, addToWishlist, addToCompare} from "../../actions/indexO";
import {getVisibleproducts} from "../../services/index";
import ProductListItem from "./common/product-list-item";
import Breadcrumb from "../common/breadcrumb";

class CollectionFullWidth extends Component {
  constructor(props) {
    super(props);

    this.state = {
      limit: 5,
      hasMoreItems: true,
    };
  }

  componentWillMount() {
    this.fetchMoreItems();
  }

  fetchMoreItems = () => {
    if (this.state.limit >= this.props.products.length) {
      this.setState({hasMoreItems: false});
      return;
    }
    // a fake async api call
    setTimeout(() => {
      this.setState({
        limit: this.state.limit + 5,
      });
    }, 3000);
  };

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
        <Breadcrumb title={"Collection"} />

        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="section-t-space portfolio-section portfolio-padding metro-section port-col">
                {products.length > 0 ? (
                  <InfiniteScroll
                    dataLength={this.state.limit} //This is important field to render the next data
                    next={this.fetchMoreItems}
                    hasMore={this.state.hasMoreItems}
                    loader={<div className="loading-cls"></div>}
                    endMessage={
                      <p className="seen-cls seen-it-cls">
                        <b>Yay! You have seen it all</b>
                      </p>
                    }
                  >
                    <div className="isotopeContainer row">
                      {products
                        .slice(0, this.state.limit)
                        .map((product, index) => (
                          <div
                            className="col-xl-2 col-lg-3 col-md-4 col-sm-6 isotopeSelector"
                            key={index}
                          >
                            <ProductListItem
                              product={product}
                              symbol={symbol}
                              onAddToCompareClicked={() =>
                                addToCompare(product)
                              }
                              onAddToWishlistClicked={() =>
                                addToWishlist(product)
                              }
                              onAddToCartClicked={addToCart}
                              key={index}
                            />
                          </div>
                        ))}
                    </div>
                  </InfiniteScroll>
                ) : (
                  <div className="row">
                    <div className="col-sm-12 text-center section-b-space mt-5 no-found">
                      <img
                        src={`${process.env.PUBLIC_URL}/assets/images/empty-search.jpg`}
                        class="img-fluid mb-4"
                      />
                      <h3>
                        Sorry! Couldn't find the product you were looking For!!!{" "}
                      </h3>
                      <p>
                        Please check if you have misspelt something or try
                        searching with other words.
                      </p>
                      <Link
                        to={`${process.env.PUBLIC_URL}/`}
                        class="btn btn-solid"
                      >
                        continue shopping
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  products: getVisibleproducts(state.data, state.filters),
  symbol: state.data.symbol,
});

export default connect(mapStateToProps, {
  addToCart,
  addToWishlist,
  addToCompare,
})(CollectionFullWidth);
