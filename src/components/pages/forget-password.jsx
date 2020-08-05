import React, { Component } from "react";
import Breadcrumb from "../breadcrumb";
import { withTranslate } from "react-redux-multilingual";
import Banner from "../elements/element-banner";

class ForgetPassword extends Component {
  render() {
    const { translate } = this.props;

    return (
      <div>
        <Breadcrumb title={"forget password"} />

        {/*Forget Password section*/}
        <section className="pwd-page section-b-space">
          <div className="container">
            <Banner />
            <div className="row">
              <div className="col-lg-6 offset-lg-3">
                <h2>{translate("forget_question")}</h2>
                <form className="theme-form">
                  <div className="form-row">
                    <div className="col-md-12">
                      <input
                        type="text"
                        className="form-control"
                        id="email3"
                        placeholder="Enter Your Email"
                        required=""
                      />
                    </div>
                    <button className="btn btn-solid">
                      {translate("submit")}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default withTranslate(ForgetPassword);
