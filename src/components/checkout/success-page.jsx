import React, { Component } from "react";
import { connect } from "react-redux";
import { clearCart } from "../../actions/indexO";
import { withTranslate } from "react-redux-multilingual";

class orderSuccess extends Component {
  constructor(props) {
    super(props);
    this.state = {
      payment: "",
      items: null,
      symbol: "",
      orderTotal: null,
      receipt: "",
    };
  }

  componentWillMount() {
    if (this.props.history.location.data) {
      if (this.props.history.location.data) {
        var receipt = this.props.history.location.data[0].charge;
        var order = this.props.state.order.rec;

        var payment = {
          payerID: receipt.fingerprint,
          paymentID: receipt.id,
          paymentToken: receipt.payment_method,
          orderId: order ? order.id : null,
        };

        this.setState(() => {
          return {
            payment,
            items: order.line_items,
            symbol: order.currency,
            orderTotal: order.total,
            order: order,
          };
        });
      }
    }
  }

  componentDidUpdate() {
    if (this.props.history.location.data) {
      if (this.state.orderTotal !== this.props.state.order.rec.total) {
        if (this.props.history.location.data) {
          var receipt = this.props.history.location.data[0].charge;
          var order = this.props.state.order.rec;

          var payment = {
            payerID: receipt.source.fingerprint,
            paymentID: receipt.id,
            paymentToken: receipt.payment_method,
            orderId: order.id,
          };

          this.setState(() => {
            return {
              payment,
              items: order.line_items,
              symbol: order.currency,
              orderTotal: order.total,
              order: order,
            };
          });
        }
      }
    }
  }

  render() {
    const { payment, items, symbol, orderTotal, order } = this.state;
    const { translate } = this.props;
    var options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    var current = new Date();
    var next5days = new Date(Date.now() + 5 * 86400000);
    let CheckDate = current.toLocaleDateString("en-US", options).toString();
    let deliveryDate = next5days
      .toLocaleDateString("en-US", options)
      .toString();

    return payment.orderId ? (
      <div>
        <section className="section-b-space light-layout">
          <div className="container w-mx">
            <div className="row">
              <div className="col-md-12">
                <div className="success-text">
                  <i className="fa fa-check-circle" aria-hidden="true" />

                  <h2>{translate("thank_you")}</h2>
                  <p>{translate("payment_revived")}</p>
                  <p>
                    {translate("transaction_id")}
                    {payment.paymentID ? payment.paymentID : payment.id}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-b-space">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="product-order">
                  <h3>{translate("order_details")}</h3>
                  {items
                    ? items.map((item, index) => {
                        return (
                          <div className="row product-order-detail" key={index}>
                            <div className="col-3 order_detail">
                              <div className="w-mx">
                                <h4>{translate("product_name")}</h4>
                                <h5>{item.name}</h5>
                              </div>
                            </div>
                            <div className="col-3 order_detail ma-lr">
                              <div className="txt-center w-mx">
                                <h4>{translate("quantity")}</h4>
                                <h5>{item.quantity}</h5>
                              </div>
                            </div>
                            <div className="col-3 order_detail w-mx">
                              <div className="w-mx">
                                <h4 className="text-end">
                                  {translate("price")}
                                </h4>
                                <h5>
                                  {item.total} {symbol}
                                </h5>
                              </div>
                            </div>
                          </div>
                        );
                      })
                    : null}
                  <div className="total-sec">
                    <ul>
                      <li className="m-tb-2-5">
                        {translate("subtotal")}
                        <span>
                          {orderTotal} {symbol}
                        </span>
                      </li>
                      <li className="m-tb-2-5">
                        {translate("shipping")} <span>$0</span>
                      </li>
                      <li>
                        {translate("tax")} <span>$0</span>
                      </li>
                    </ul>
                  </div>
                  <div className="final-total">
                    <h3>
                      {translate("total")}
                      <span>
                        {symbol}
                        {orderTotal}
                      </span>
                    </h3>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="row order-success-sec">
                  <div className="col-sm-6 m-tb-5 w-mx55">
                    <h4>{translate("payment_information")}</h4>
                    <ul className="order-detail">
                      {payment.paymentID ? (
                        <div>
                          <li>
                            {translate("payer_id")}
                            <span>{payment.payerID}</span>
                          </li>
                          <li>
                            {translate("payment_id")}
                            <span>{payment.paymentID}</span>
                          </li>
                          <li>
                            {translate("payment_token")}{" "}
                            <span>{payment.paymentToken}</span>
                          </li>
                        </div>
                      ) : (
                        <li>
                          {translate("order_id")} {payment.id}
                        </li>
                      )}

                      <li>
                        {" "}
                        {translate("order_date")}
                        {CheckDate}
                      </li>
                      <li>
                        {translate("order_total")}
                        {orderTotal} {symbol}
                      </li>
                    </ul>
                  </div>
                  <div className="col-sm-6 m-tb-5 w-mx55">
                    <h4>{translate("shipping_address")}</h4>
                    <ul className="order-detail">
                      <li>
                        <span>
                          {order.billing.first_name} {order.billing.last_name}{" "}
                        </span>
                      </li>
                      <li>
                        <span>{order.billing.address_1}</span>
                      </li>
                      <li>
                        <span>
                          {order.billing.state} {order.billing.postcode}
                        </span>
                      </li>
                      <li>
                        {translate("contact_phone")} {order.billing.phone}
                      </li>
                    </ul>
                  </div>

                  <div className="col-sm-12 payment-mode m-tb-5">
                    <h4>{translate("payment_method")}</h4>
                    <p>{translate("banking_acceptance")}</p>
                  </div>
                  <div className="col-md-12 m-tb-5">
                    <div className="delivery-sec">
                      <h3>{translate("delivery_date")}</h3>
                      <h2>{deliveryDate}</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    ) : (
      <div className="loader-wrapper">
        <div className="loader" />
      </div>
      /*<section className="p-0">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="error-section">
                <h1>404</h1>
                <h2>page not found</h2>
                <a href="index.html" className="btn btn-solid">
                  back to home
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>*/
    );
  }
}

const mapStateToProps = (state) => ({
  state,
});

export default connect(
  mapStateToProps,
  {
    clearCart,
  }
)(withTranslate(orderSuccess));
