import React, { Component } from "react";
import { connect } from "react-redux";
import { clearCart } from "../../actions/indexO";

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
    console.log(this.props);
    if (this.props.history.location.data) {
      if (this.props.history.location.data) {
        var receipt = this.props.history.location.data[0].charge;
        var order = this.props.state.order.rec;
        console.log(receipt);
        console.log(order);
        var payment = {
          payerID: receipt.fingerprint,
          paymentID: receipt.id,
          paymentToken: receipt.payment_method,
          orderId: order ? order.id : null,
        };
        var date;
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
    console.log(this.props);

    if (this.props.history.location.data) {
      if (this.state.orderTotal !== this.props.state.order.rec.total) {
        if (this.props.history.location.data) {
          var receipt = this.props.history.location.data[0].charge;
          var order = this.props.state.order.rec;
          console.log(receipt);
          console.log(order);
          var payment = {
            payerID: receipt.fingerprint,
            paymentID: receipt.id,
            paymentToken: receipt.payment_method,
            orderId: order.id,
          };
          var date;
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

    console.log(this.props);
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
                  <h2>thank you</h2>
                  <p>Payment Has Been Received Order Placed Successfully</p>
                  <p>
                    Transaction ID:{" "}
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
                  <h3>your order details</h3>
                  {items
                    ? items.map((item, index) => {
                        return (
                          <div className="row product-order-detail" key={index}>
                            <div className="col-3 order_detail">
                              <div className="w-mx">
                                <h4>product name</h4>
                                <h5>{item.name}</h5>
                              </div>
                            </div>
                            <div className="col-3 order_detail ma-lr">
                              <div className="txt-center w-mx">
                                <h4>quantity</h4>
                                <h5>{item.quantity}</h5>
                              </div>
                            </div>
                            <div className="col-3 order_detail w-mx">
                              <div className="w-mx">
                                <h4 className="text-end">price</h4>
                                <h5>
                                  {symbol}
                                  {item.total}
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
                        subtotal
                        <span>
                          {symbol}
                          {orderTotal}
                        </span>
                      </li>
                      <li className="m-tb-2-5">
                        shipping <span>$0</span>
                      </li>
                      <li>
                        tax(GST) <span>$0</span>
                      </li>
                    </ul>
                  </div>
                  <div className="final-total">
                    <h3>
                      total{" "}
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
                  <div className="col-sm-6 m-tb-5">
                    <h4>summa ry</h4>
                    <ul className="order-detail">
                      {payment.paymentID ? (
                        <div>
                          <li>payer ID: {payment.payerID}</li>
                          <li>payment ID: {payment.paymentID}</li>
                          <li>payment Token: {payment.paymentToken}</li>
                        </div>
                      ) : (
                        <li>Order ID: {payment.id}</li>
                      )}

                      <li>Order Date: {CheckDate}</li>
                      <li>
                        Order Total: {symbol}
                        {orderTotal}
                      </li>
                    </ul>
                  </div>
                  <div className="col-sm-6 m-tb-5">
                    <h4>shipping address</h4>
                    <ul className="order-detail">
                      <li>
                        {order.first_name} {order.last_name}
                      </li>
                      <li>{order.address_1}</li>
                      <li>
                        {order.state} {order.postcode}
                      </li>
                      <li>Contact No. {order.phone}</li>
                    </ul>
                  </div>

                  <div className="col-sm-12 payment-mode m-tb-5">
                    <h4>payment method</h4>
                    <p>
                      Card/Net banking acceptance subject to device
                      availability.
                    </p>
                  </div>
                  <div className="col-md-12 m-tb-5">
                    <div className="delivery-sec">
                      <h3>expected date of delivery</h3>
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
      <section className="p-0">
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
      </section>
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
)(orderSuccess);
