import React, { Component } from "react";
import Breadcrumb from "../breadcrumb";

class EmptySearch extends Component {
  render() {
    return (
      <div>
        <Breadcrumb title={"Producto No Encontrado"} />

        <section className="p-0">
          <div className="container">
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
                    <a href="/" className="btn btn-solid">
                      back to home
                    </a>
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

export default EmptySearch;
