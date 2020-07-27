import React, { Component } from "react";
import Breadcrumb from "../breadcrumb";

class PageNotFound extends Component {
  render() {
    return (
      <div>
        <Breadcrumb title={"404 Page"} />

        <section className="p-0">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="error-section">
                  <h1>404</h1>
                  <h2>page not found</h2>
                  <a href="/" className="btn btn-solid">
                    back to home
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

export default PageNotFound;
