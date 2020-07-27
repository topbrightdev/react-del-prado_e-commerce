import React from "react";
import { connect } from "react-redux";

import {
  CardNumberElement,
  CardExpiryElement,
  CardCVCElement,
  injectStripe,
} from "react-stripe-elements";
import axios from "axios";

//4242424242424242

const urlCharge =
  process.env.NODE_ENV.trim() === "production"
    ? `https://waldenberginc.com/stripe`
    : "http://localhost:9000/stripe";
//const urlCharge ='http://waldenberginc.com/api/stripe/charge'

const newTo = (data) => {
  return {
    pathname: `${process.env.PUBLIC_URL}/order-success`,
    data: data,
  };
};

const CheckoutForm = ({
  selectedProduct,
  stripe,
  history,
  total,
  email,
  doOrder,
  clientData,
}) => {
  if (selectedProduct === null) history.push("/");

  const handleSubmit = async (event) => {
    event.preventDefault();

    var amount = total * 100;
    amount = amount.toString();
    const { token } = await stripe.createToken();

    const order = await axios
      .post(urlCharge, {
        amount: amount,
        source: token.id,
        receipt_email: email,
      })
      .catch((e) => {
        console.log(e);
      });
    var receiptUrl = "";
    console.log(clientData);
    receiptUrl = order.data;
    //history.push(`${process.env.PUBLIC_URL}/order-success`);
    //this.props.placeOrder(this.createOrderData());
    doOrder(true);
    const data = [receiptUrl, clientData];
    history.push(newTo(data));
  };

  return (
    <div className="checkout-details">
      <div className="checkout-form farm-19">
        <h6 className="checkout-text">
          Introduce your Credit Card Information
        </h6>
        <p>Amount: {total} $ </p>

        <div className="checkout-number">
          <label className="checkout-label-number">
            Card details
            <CardNumberElement />
          </label>
        </div>
        <div className="checkout-card-details">
          <label className="checkout-label">
            Expiration date
            <CardExpiryElement />
          </label>

          <label className="checkout-label cvc">
            CVC
            <CardCVCElement />
          </label>
        </div>
      </div>
      <div className="checkout-div-button">
        <button type="button" className="btn-solid btn" onClick={handleSubmit}>
          Pay
        </button>
      </div>
    </div>
  );
};

//export default injectStripe(CheckoutForm);
const mapStateToProps = (state) => ({
  state,
});

export default connect(mapStateToProps)(injectStripe(CheckoutForm));
