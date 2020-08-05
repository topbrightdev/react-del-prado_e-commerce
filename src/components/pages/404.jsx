import React, { Component } from "react";
import Breadcrumb from "../breadcrumb";
import { withTranslate } from "react-redux-multilingual";

class PageNotFound extends Component {
  render() {
    const { translate } = this.props;
    return (
      <div>
        <Breadcrumb title={"404 Page"} />

        <section className="p-0">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="error-section">
                  <h1>404</h1>
                  <h2>{translate("page_not_found")}</h2>
                  <a href="/" className="btn btn-solid">
                    {translate("back_home")}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default withTranslate(PageNotFound);
