import React, { Component } from "react";
import { Link } from "react-router-dom";
import Modal from "react-responsive-modal";
import NumberFormat from "react-number-format";

class ProductListItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      stock: "InStock",
      quantity: 1,
      image: "",
    };
  }

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  onClickHandle(img) {
    this.setState({ image: img });
  }

  minusQty = () => {
    if (this.state.quantity > 1) {
      this.setState({ stock: "InStock" });
      this.setState({ quantity: this.state.quantity - 1 });
    }
  };

  plusQty = () => {
    if (this.props.product.stock >= this.state.quantity) {
      this.setState({ quantity: this.state.quantity + 1 });
    } else {
      this.setState({ stock: "Out of Stock !" });
    }
  };
  changeQty = (e) => {
    this.setState({ quantity: parseInt(e.target.value) });
  };

  render() {
    const {
      product,
      onAddToCartClicked,
      onAddToWishlistClicked,
      onAddToCompareClicked,
    } = this.props;

    const { open } = this.state;

    let RatingStars = [];
    //console.log(product.average_rating);
    for (var i = 1; i <= parseInt(product.average_rating); i++) {
      RatingStars.push(<i className="fa fa-star" key={i + 20} />);
    }
    //console.log(RatingStars.length);
    if (RatingStars.length < 4) {
      var leftOff = 4 - RatingStars.length;
      //console.log(leftOff);
      for (i = 0; i <= leftOff; i++) {
        RatingStars.push(<i className="fa fa-star off" key={i} />);
      }
    }
    if (RatingStars.length > 5) {
      RatingStars.pop();
      // console.log(RatingStars);
    }

    return (
      <div className="product-box">
        <div className="img-wrapper">
          <div className="front">
            <Link
              to={`${process.env.PUBLIC_URL}/left-sidebar/product/${
                product.id
              }`}
              className="link-product-list-item"
            >
              <img
                src={
                  product.variants
                    ? this.state.image
                      ? this.state.image
                      : product.variants[0].images
                    : product.pictures[0]
                }
                className="img-fluid img-collection-list"
                alt=""
              />
            </Link>
          </div>
          <div className="cart-info cart-wrap">
            <button
              className="list-item-button"
              title="Add to cart"
              onClick={() => onAddToCartClicked(product, 1)}
            >
              <i className="fa fa-shopping-cart" aria-hidden="true" />
            </button>

            <button
              className="list-item-button"
              dangerouslySetInnerHTML={undefined}
              title="Add to Wishlist"
              onClick={onAddToWishlistClicked}
            >
              <i className="fa fa-heart" aria-hidden="true" />
            </button>
            <button
              className="list-item-button"
              dangerouslySetInnerHTML={undefined}
              data-toggle="modal"
              data-target="#quick-view"
              title="Quick View"
              onClick={this.onOpenModal}
            >
              <i className="fa fa-search" aria-hidden="true" />
            </button>
            <Link
              to={`${process.env.PUBLIC_URL}/compare`}
              title="Compare"
              onClick={onAddToCompareClicked}
            >
              <i className="fa fa-refresh" aria-hidden="true" />
            </Link>
          </div>
        </div>
        <div className="product-detail">
          <Link
            to={`${process.env.PUBLIC_URL}/left-sidebar/product/${product.id}`}
          >
            <div className="d-f">
              <h6 className="txt-dark">{product.name}</h6>

              <div>
                <h6 className="price-right">
                  <NumberFormat
                    value={product.price}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"€"}
                    renderText={(formattedValue) => formattedValue} // <--- Don't forget this!
                  />
                </h6>
              </div>
            </div>
            <div className="txt-details">{product.shortDetails}</div>
            <div className="rating d-f">
              {RatingStars}
              <h6 className="rating-count">
                {" "}
                (
                {product.rating_count > 0
                  ? product.rating_count + 1
                  : product.rating_count}
                )
              </h6>
            </div>
          </Link>
        </div>
        <Modal open={open} onClose={this.onCloseModal} center>
          <div
            className="modal-dialog modal-lg modal-dialog-centered"
            role="document"
          >
            <div className="modal-content quick-view-modal">
              <div className="modal-body">
                <div className="row">
                  <div className="col-lg-6  col-xs-12">
                    <div className="quick-view-img">
                      <img
                        src={
                          product.variants
                            ? this.state.image
                              ? this.state.image
                              : product.variants[0].images
                            : product.pictures[0]
                        }
                        alt=""
                        className="img-fluid product-list-modal-img"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 rtl-text">
                    <div className="product-right">
                      <div>
                        <h2 className="txt-dark"> {product.name} </h2>
                      </div>
                      <h3>
                        <NumberFormat
                          value={product.price}
                          displayType={"text"}
                          thousandSeparator={true}
                          prefix={"€"}
                          renderText={(formattedValue) => formattedValue} // <--- Don't forget this!
                        />
                      </h3>
                      <div className="rating d-f product-detail-rating">
                        {RatingStars}
                        <h6 className="rating-count">
                          {" "}
                          (
                          {product.rating_count > 0
                            ? product.rating_count + 1
                            : product.rating_count}
                          )
                        </h6>
                      </div>

                      <div className="border-product">
                        <h6 className="product-title">product details</h6>
                        <div className="txt-details">
                          {product.shortDetails}
                        </div>
                      </div>
                      <div className="product-description border-product">
                        <h6 className="product-title">quantity</h6>
                        <div className="qty-box">
                          <div className="input-group">
                            <span className="input-group-prepend">
                              <button
                                type="button"
                                className="btn quantity-left-minus"
                                onClick={this.minusQty}
                                data-type="minus"
                                data-field=""
                              >
                                <i className="fa fa-angle-left" />
                              </button>
                            </span>
                            <input
                              type="text"
                              name="quantity"
                              value={this.state.quantity}
                              onChange={this.changeQty}
                              className="form-control input-number"
                            />
                            <span className="input-group-prepend">
                              <button
                                type="button"
                                className="btn quantity-right-plus"
                                onClick={this.plusQty}
                                data-type="plus"
                                data-field=""
                              >
                                <i className="fa fa-angle-right" />
                              </button>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="product-buttons">
                        <button
                          className="btn btn-solid"
                          onClick={() =>
                            onAddToCartClicked(product, this.state.quantity)
                          }
                        >
                          add to cart
                        </button>

                        <Link
                          to={`${process.env.PUBLIC_URL}/left-sidebar/product/${
                            product.id
                          }`}
                          className="btn btn-solid"
                        >
                          view detail
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

export default ProductListItem;
