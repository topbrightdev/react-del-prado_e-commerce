import React, { Component } from "react";
import { withTranslate } from "react-redux-multilingual";
import Banner from "../elements/element-banner";
import Breadcrumb from "../breadcrumb";

class EmptySearch extends Component {
  render() {
    const { translate } = this.props;
    return (
      <div>
        <Breadcrumb title={"Producto No Encontrado"} />

        <section className="p-0">
          <div className="container">
            <Banner />
            <div className="row">
              <div className="col-sm-12">
                <div className="error-section">
                  <div className="empty-search-img">
                    <img
                      src={`${
                        process.env.PUBLIC_URL
                      }/assets/images/empty-search.jpg`}
                      className="img-fluid empty-search-img"
                      alt=""
                    />
                  </div>
                  <div className="empty-search-button">
                    <button className="btn btn-solid">
                      {translate("back_home")}
                    </button>
                  </div>
                </div>{" "}
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default withTranslate(EmptySearch);
