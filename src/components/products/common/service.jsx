import React, { Component } from "react";

import {
  svgFreeShipping,
  svgservice,
  svgoffer,
  svgpayment,
} from "../../../services/script";

class Service extends Component {
  render() {
    return (
      <div className="collection-filter-block ">
        <div className="product-service">
          <div className="media">
            <div dangerouslySetInnerHTML={{ __html: svgFreeShipping }} />
            <div className="media-body">
              <h4>Entrega Gratuita</h4>
              <p>apartir de 30eur</p>
            </div>
          </div>
          <div className="media">
            <div dangerouslySetInnerHTML={{ __html: svgservice }} />
            <div className="media-body">
              <h4>Servivio 24 X 7 </h4>
              <p>compre a cualquier hora</p>
            </div>
          </div>
          <div className="media">
            <div dangerouslySetInnerHTML={{ __html: svgoffer }} />
            <div className="media-body">
              <h4>Subscribete a las ofertas</h4>
              <p>ofertas especiales para socios</p>
            </div>
          </div>
          <div className="media border-0 m-0">
            <div dangerouslySetInnerHTML={{ __html: svgpayment }} />
            <div className="media-body">
              <h4>Pago online</h4>
              <p>seguridad garantizada.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Service;
