import React, { Component } from "react";
import { withTranslate } from "react-redux-multilingual";

import {
  svgFreeShipping,
  svgservice,
  svgoffer,
  svgpayment,
} from "../../../services/script";

class Service extends Component {
  render() {
    const { translate } = this.props;

    return (
      <div className="collection-filter-block ">
        <div className="product-service">
          <div className="media">
            <div dangerouslySetInnerHTML={{ __html: svgFreeShipping }} />
            <div className="media-body">
              <h4>{translate("free_delivery")}</h4>
              <p>{translate("from_30")}</p>
            </div>
          </div>
          <div className="media">
            <div dangerouslySetInnerHTML={{ __html: svgservice }} />
            <div className="media-body">
              <h4>{translate("_24_7")}</h4>
              <p>{translate("buy_whenever")}</p>
            </div>
          </div>
          <div className="media">
            <div dangerouslySetInnerHTML={{ __html: svgoffer }} />
            <div className="media-body">
              <h4>{translate("subscribe_sales")}</h4>
              <p>{translate("sales_customers")}</p>
            </div>
          </div>
          <div className="media border-0 m-0">
            <div dangerouslySetInnerHTML={{ __html: svgpayment }} />
            <div className="media-body">
              <h4>{translate("pay_online")}</h4>
              <p>{translate("safety_warranted")}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withTranslate(Service);
