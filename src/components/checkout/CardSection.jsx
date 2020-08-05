// CardSection.js
import React from "react";
import { CardElement } from "react-stripe-elements";
import { withTranslate } from "react-redux-multilingual";

class CardSection extends React.Component {
  render() {
    const { translate } = this.props;

    return (
      <label>
        {translate("card_details")}
        <CardElement style={{ base: { fontSize: "18px" } }} />
      </label>
    );
  }
}

export default withTranslate(CardSection);
