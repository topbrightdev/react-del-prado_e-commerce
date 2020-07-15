import React, { useEffect } from "react";
import { StripeProvider, Elements } from "react-stripe-elements";
import CheckoutForm from "./CheckoutForm";

const StripeCheckout = ({ selectedProduct, history }) => {
  const pK = process.env.REACT_APP_STRIPE_PK;
  return (
    <StripeProvider apiKey={pK}>
      <Elements>
        <CheckoutForm selectedProduct={"empty"} history={history} />
      </Elements>
    </StripeProvider>
  );
};

export default StripeCheckout;
