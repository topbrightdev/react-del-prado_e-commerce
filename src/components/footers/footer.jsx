import React, { Component } from "react";
import { Link } from "react-router-dom";
import Contact from "./Contact";
import { SlideUpDown } from "../../services/script";
import LogoImage from "../headers/common/logo";
import { withTranslate } from "react-redux-multilingual";

class FooterFour extends Component {
  componentDidMount() {
    var contentwidth = window.innerWidth;
    if (contentwidth < 750) {
      SlideUpDown("footer-title");
    } else {
      var elems = document.querySelectorAll(".footer-title");
      [].forEach.call(elems, function(elemt) {
        let el = elemt.nextElementSibling;
        el.style = "display: block";
      });
    }
  }

  render() {
    const { translate } = this.props;

    return (
      <footer className="">
        <section className="darken-layout">
          <div className="container  mw-90 p-b-5">
            <div className="row footer-theme partition-f">
              <div className="col-lg-4 col-md-6 responsive-w100">
                <div className="subscribe">
                  <h4>{translate("subscribe_newsletter")}</h4>
                  <Contact />
                </div>
              </div>

              <div className="col">
                <div className="sub-title">
                  <div className="footer-title">
                    <h4> {translate("information")}</h4>
                  </div>
                  <div className="footer-contant">
                    <ul>
                      {" "}
                      <li>
                        <Link to={`${process.env.PUBLIC_URL}/pages/contact`}>
                          {translate("contact_us")}
                        </Link>
                      </li>
                      <li>
                        <Link to={`${process.env.PUBLIC_URL}/pages/about-us`}>
                          FAQ's
                        </Link>
                      </li>
                      <li>
                        <Link to={`${process.env.PUBLIC_URL}/pages/faq`}>
                          {translate("deliveryReturns")}
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="sub-title">
                  <div className="footer-title">
                    <h4>{translate("about_us")}</h4>
                  </div>
                  <div className="footer-contant">
                    <ul className="contact-list">
                      <li>
                        <Link to={`${process.env.PUBLIC_URL}/pages/contact`}>
                          {translate("our_story")}{" "}
                        </Link>
                      </li>
                      <li>
                        <Link to={`${process.env.PUBLIC_URL}/pages/faq`}>
                          {translate("privacy")}{" "}
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="footer-social">
                <div className="sub-title">
                  <div className="footer-title">
                    <h4>{translate("social_media")}</h4>
                  </div>
                  <ul className="m-lr-a d-f">
                    <li>
                      <Link to={"https://www.facebook.com/"}>
                        <i className="fa fa-facebook" aria-hidden="true" />
                      </Link>
                    </li>
                    <li>
                      <Link to={"https://plus.google.com/"}>
                        <i className="fa fa-google-plus" aria-hidden="true" />
                      </Link>
                    </li>
                    <li>
                      <Link to={"https://twitter.com"}>
                        <i className="fa fa-twitter" aria-hidden="true" />
                      </Link>
                    </li>
                    <li>
                      <Link to={"https://instagram.com"}>
                        <i className="fa fa-instagram" aria-hidden="true" />
                      </Link>
                    </li>
                    <li>
                      <Link to={"https://rss.com/"}>
                        <i className="fa fa-rss" aria-hidden="true" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="sub-footer dark-subfooter">
          <div className="container mw-90">
            <div className="row">
              <div className="col-xl-6 col-md-6 col-sm-12">
                <div className="footer-end">
                  <p>
                    <i className="fa fa-copyright" aria-hidden="true" /> 2020
                    Waldenberg Incorporated
                  </p>
                </div>
              </div>
              <div className="col-xl-6 col-md-6 col-sm-12">
                <div className="payment-card-bottom">
                  <ul>
                    <li>
                      <button className="invisible-button">
                        <img
                          src={`${
                            process.env.PUBLIC_URL
                          }/assets/images/icon/visa.png`}
                          alt=""
                        />
                      </button>
                    </li>
                    <li>
                      <button className="invisible-button">
                        <img
                          src={`${
                            process.env.PUBLIC_URL
                          }/assets/images/icon/mastercard.png`}
                          alt=""
                        />
                      </button>
                    </li>
                    <li>
                      <button className="invisible-button">
                        <img
                          src={`${
                            process.env.PUBLIC_URL
                          }/assets/images/icon/paypal.png`}
                          alt=""
                        />
                      </button>
                    </li>
                    <li>
                      <button className="invisible-button">
                        <img
                          src={`${
                            process.env.PUBLIC_URL
                          }/assets/images/icon/american-express.png`}
                          alt=""
                        />
                      </button>
                    </li>
                    <li>
                      <button className="invisible-button">
                        <img
                          src={`${
                            process.env.PUBLIC_URL
                          }/assets/images/icon/discover.png`}
                          alt=""
                        />
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default withTranslate(FooterFour);
